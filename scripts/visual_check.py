import argparse
import os
from pathlib import Path

from playwright.sync_api import sync_playwright


parser = argparse.ArgumentParser()
parser.add_argument("--base-url", default=os.environ.get("BASE_URL", "http://127.0.0.1:3000"))
args = parser.parse_args()

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "artifacts" / "visual-check"
OUT.mkdir(parents=True, exist_ok=True)
BASE_URL = args.base_url.rstrip("/")


def check_page(page, url: str, name: str, width: int, height: int) -> None:
    page.set_viewport_size({"width": width, "height": height})
    page.goto(url, wait_until="domcontentloaded", timeout=45000)
    page.locator("text=MeteorTest").first.wait_for(timeout=15000)
    page.screenshot(path=str(OUT / f"{name}-{width}x{height}.png"), full_page=True)
    title = page.title()
    if "JC Meteor" not in title:
        raise AssertionError(f"Unexpected title for {url}: {title}")


with sync_playwright() as p:
    browser = p.chromium.launch(headless=True)
    page = browser.new_page()
    errors: list[str] = []
    page.on("console", lambda msg: errors.append(msg.text) if msg.type == "error" else None)

    for path in [
        "/",
        "/projects",
        "/meteortest",
        "/meteortest/demo",
        "/zh-CN",
        "/zh-CN/projects",
        "/zh-CN/meteortest",
        "/zh-CN/meteortest/demo",
    ]:
        check_page(page, f"{BASE_URL}{path}", path.strip("/").replace("/", "-") or "home", 1440, 1000)
        check_page(page, f"{BASE_URL}{path}", path.strip("/").replace("/", "-") or "home", 390, 844)

    browser.close()

    if errors:
        raise AssertionError("Console errors:\n" + "\n".join(errors))

print(f"visual screenshots written to {OUT}")
