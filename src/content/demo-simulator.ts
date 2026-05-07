import type { Locale } from "@/content/site";

export type DemoStepKey = "imported" | "queued" | "running" | "reported" | "assistant";

export const demoSteps: DemoStepKey[] = ["imported", "queued", "running", "reported", "assistant"];

export const demoSimulatorCopy = {
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
} satisfies Record<Locale, object>;
