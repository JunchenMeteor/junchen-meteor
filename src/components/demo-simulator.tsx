"use client";

import { CheckCircle2, CircleDot, FileText, Play, RotateCcw } from "lucide-react";
import { useMemo, useState } from "react";
import type { Locale } from "@/content/site";

type StepKey = "imported" | "queued" | "running" | "reported" | "assistant";

const steps: StepKey[] = ["imported", "queued", "running", "reported", "assistant"];

const copy = {
  en: {
    label: "Interactive mock demo",
    title: "Run the MeteorTest loop",
    note:
      "This is a browser-only simulation using mock data. It mirrors the validated Local Agent path without connecting to Supabase, devices, private artifacts, or a real API server.",
    reset: "Reset",
    advance: "Next step",
    done: "Flow complete",
    steps: {
      imported: {
        title: "AI imports project contract",
        detail: "The assistant reads iOS-Automation-Framework/meteortest.yml and registers api_smoke."
      },
      queued: {
        title: "AI creates platform task",
        detail: "The assistant binds project, suite, environment, and task metadata into one queued run after user confirmation."
      },
      running: {
        title: "Local Agent executes",
        detail: "Use the test repository .venv and run pytest with API_BASE_URL supplied by the environment."
      },
      reported: {
        title: "Collect report context",
        detail: "Write back status, output.log, Allure artifacts, and AI-assisted failure context."
      },
      assistant: {
        title: "AI suggests next action",
        detail: "Use project, task, report, and log context to explain the result and suggest rerun, environment, or code follow-up."
      }
    },
    task: "Task",
    suite: "Suite",
    executor: "Executor",
    runtime: "Runtime",
    report: "Report",
    values: {
      task: "demo-api-smoke-001",
      suite: "api_smoke",
      executor: "local-agent-win",
      runtime: "iOS-Automation-Framework/.venv",
      report: "Allure + output.log"
    },
    logs: [
      "Loaded meteortest.yml from iOS-Automation-Framework",
      "AI prepared api_smoke task for staging and requested confirmation",
      "Resolved Python runtime from test repository .venv",
      "pytest collected smoke cases and wrote report artifacts",
      "AI summarized report context and proposed the next action"
    ]
  },
  zh: {
    label: "可交互 mock Demo",
    title: "运行 MeteorTest 闭环",
    note:
      "这是一个只在浏览器中运行的 mock 数据模拟。它对应已经验证过的 Local Agent 链路，但不连接 Supabase、设备、私有产物或真实 API 服务。",
    reset: "重置",
    advance: "下一步",
    done: "流程完成",
    steps: {
      imported: {
        title: "AI 导入项目契约",
        detail: "AI 助手读取 iOS-Automation-Framework/meteortest.yml，并登记 api_smoke。"
      },
      queued: {
        title: "AI 创建平台任务",
        detail: "AI 助手在用户确认后，把项目、套件、环境和任务元数据绑定成一次排队运行。"
      },
      running: {
        title: "Local Agent 执行",
        detail: "使用测试仓库 .venv，并通过环境变量提供 API_BASE_URL 后运行 pytest。"
      },
      reported: {
        title: "收集报告上下文",
        detail: "写回状态、output.log、Allure 产物和 AI 辅助失败上下文。"
      },
      assistant: {
        title: "AI 建议下一步",
        detail: "基于项目、任务、报告和日志上下文解释结果，并建议重跑、环境配置或代码跟进。"
      }
    },
    task: "任务",
    suite: "套件",
    executor: "执行器",
    runtime: "运行时",
    report: "报告",
    values: {
      task: "demo-api-smoke-001",
      suite: "api_smoke",
      executor: "local-agent-win",
      runtime: "iOS-Automation-Framework/.venv",
      report: "Allure + output.log"
    },
    logs: [
      "已从 iOS-Automation-Framework 读取 meteortest.yml",
      "AI 已为 staging 环境准备 api_smoke 任务并请求确认",
      "已从测试仓库 .venv 解析 Python 运行时",
      "pytest 已收集 smoke 用例并写入报告产物",
      "AI 已总结报告上下文并提出下一步动作"
    ]
  }
};

export function DemoSimulator({ locale }: { locale: Locale }) {
  const t = copy[locale];
  const [index, setIndex] = useState(0);
  const activeSteps = useMemo(() => steps.slice(0, index + 1), [index]);
  const isDone = index === steps.length - 1;

  return (
    <section className="demo-simulator" aria-label={t.title}>
      <div className="demo-simulator-heading">
        <div>
          <span>{t.label}</span>
          <h2>{t.title}</h2>
          <p>{t.note}</p>
        </div>
        <div className="demo-simulator-actions">
          <button type="button" onClick={() => setIndex(0)}>
            <RotateCcw size={16} />
            {t.reset}
          </button>
          <button type="button" onClick={() => setIndex((value) => Math.min(value + 1, steps.length - 1))}>
            {isDone ? <CheckCircle2 size={16} /> : <Play size={16} />}
            {isDone ? t.done : t.advance}
          </button>
        </div>
      </div>

      <div className="demo-simulator-grid">
        <div className="demo-step-track">
          {steps.map((step, stepIndex) => {
            const current = stepIndex === index;
            const complete = stepIndex <= index;
            return (
              <article className={complete ? "is-active" : ""} key={step}>
                {complete ? <CheckCircle2 size={20} /> : <CircleDot size={20} />}
                <div>
                  <strong>{t.steps[step].title}</strong>
                  <p>{t.steps[step].detail}</p>
                  {current ? <span>{locale === "en" ? "Current step" : "当前步骤"}</span> : null}
                </div>
              </article>
            );
          })}
        </div>

        <div className="demo-run-panel">
          <div className="demo-run-meta">
            <div>
              <span>{t.task}</span>
              <strong>{t.values.task}</strong>
            </div>
            <div>
              <span>{t.suite}</span>
              <strong>{t.values.suite}</strong>
            </div>
            <div>
              <span>{t.executor}</span>
              <strong>{t.values.executor}</strong>
            </div>
            <div>
              <span>{t.runtime}</span>
              <strong>{t.values.runtime}</strong>
            </div>
          </div>

          <div className="demo-log-panel">
            <div className="demo-log-title">
              <FileText size={16} />
              <strong>{t.report}</strong>
              <span>{t.values.report}</span>
            </div>
            <pre>
              {activeSteps.map((_, logIndex) => `> ${t.logs[logIndex]}`).join("\n")}
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}
