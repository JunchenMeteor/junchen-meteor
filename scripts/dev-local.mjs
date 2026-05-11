import { execFileSync, spawn } from "node:child_process";
import { existsSync, mkdirSync, openSync, writeFileSync } from "node:fs";
import { get } from "node:http";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = dirname(dirname(fileURLToPath(import.meta.url)));
const host = "127.0.0.1";
const port = "3010";
const previewUrl = `http://${host}:${port}/`;
const nextDir = join(projectRoot, ".next");
const pidFile = join(nextDir, "dev-local.pid");
const logFile = join(nextDir, "dev-local.log");

function run(command, args) {
  return execFileSync(command, args, {
    cwd: projectRoot,
    encoding: "utf8",
    stdio: ["ignore", "pipe", "ignore"]
  });
}

function pidsListeningOnPort() {
  if (process.platform === "win32") {
    const output = run("netstat", ["-ano"]);
    const matcher = new RegExp(`(?:${host.replaceAll(".", "\\.")}|0\\.0\\.0\\.0|\\[::\\]|::):${port}\\s+`, "i");
    return [
      ...new Set(
        output
          .split(/\r?\n/)
          .filter((line) => matcher.test(line) && line.includes("LISTENING"))
          .map((line) => line.trim().split(/\s+/).at(-1))
          .filter(Boolean)
      )
    ];
  }

  try {
    const output = run("lsof", ["-ti", `tcp:${port}`]);
    return [...new Set(output.split(/\s+/).filter(Boolean))];
  } catch {
    return [];
  }
}

function killPid(pid) {
  if (String(pid) === String(process.pid)) {
    return;
  }

  if (process.platform === "win32") {
    execFileSync("taskkill", ["/PID", String(pid), "/F", "/T"], {
      cwd: projectRoot,
      stdio: "ignore"
    });
    return;
  }

  process.kill(Number(pid), "SIGTERM");
}

async function waitForPortToFree() {
  for (let attempt = 0; attempt < 20; attempt += 1) {
    if (pidsListeningOnPort().length === 0) {
      return;
    }
    await new Promise((resolve) => setTimeout(resolve, 250));
  }
}

function requestStatus(url) {
  return new Promise((resolve) => {
    const request = get(url, (response) => {
      response.resume();
      response.on("end", () => resolve(response.statusCode ?? 0));
    });

    request.setTimeout(2000, () => {
      request.destroy();
      resolve(0);
    });

    request.on("error", () => resolve(0));
  });
}

async function waitForHealthyServer() {
  for (let attempt = 0; attempt < 30; attempt += 1) {
    const status = await requestStatus(previewUrl);
    if (status >= 200 && status < 400) {
      return;
    }
    await new Promise((resolve) => setTimeout(resolve, 1000));
  }

  throw new Error(`Local preview did not become healthy. Check ${logFile}`);
}

const existingPids = pidsListeningOnPort();
for (const pid of existingPids) {
  console.log(`Stopping existing local preview on ${host}:${port} (pid ${pid})`);
  killPid(pid);
}

await waitForPortToFree();

const nextBin = process.platform === "win32" ? "next.cmd" : "next";
const nextPath = join(projectRoot, "node_modules", ".bin", nextBin);

if (!existsSync(nextPath)) {
  console.error("Missing Next.js binary. Run `npm install` before `npm run dev:local`.");
  process.exit(1);
}

mkdirSync(nextDir, { recursive: true });

const env = { ...process.env };
delete env.GITHUB_PAGES;

const logFd = openSync(logFile, "a");
const child = spawn(nextPath, ["dev", "-H", host, "-p", port], {
  cwd: projectRoot,
  detached: true,
  env,
  shell: process.platform === "win32",
  stdio: ["ignore", logFd, logFd]
});

child.unref();
writeFileSync(pidFile, String(child.pid ?? ""), "utf8");

await waitForHealthyServer();

console.log(`Local preview is running at ${previewUrl}`);
console.log(`Logs: ${logFile}`);
