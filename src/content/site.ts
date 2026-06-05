export type Locale = "en" | "zh";

export const site = {
  name: "JC Meteor",
  zhName: "钧宸流星",
  github: "https://github.com/JunchenMeteor",
  icpRecord: "陕ICP备2026014092号-1",
  icpHref: "https://beian.miit.gov.cn/",
  tagline: {
    en: "Automation testing, voice AI practice, iOS engineering systems, and AI-assisted development workflows.",
    zh: "聚焦自动化测试、语音 AI 练习、iOS 工程体系与 AI 辅助研发工作流。"
  },
  intro: {
    en: "A project-led engineering portfolio centered on repeatable testing systems, voice interaction products, local execution loops, and practical agent workflows.",
    zh: "一个以项目为核心的工程主页，串联可复现的测试系统、语音交互产品、本地执行闭环和实用的 Agent 工作流。"
  }
};

export const meteorTestPreviewUrl = "https://meteortest.jcmeteor.com/";

export const navItems = {
  en: [
    { label: "Home", href: "/" },
    { label: "Projects", href: "/projects" }
  ],
  zh: [
    { label: "首页", href: "/zh-CN" },
    { label: "项目", href: "/zh-CN/projects" }
  ]
};

export const homeCopy = {
  en: {
    eyebrow: "Project hub",
    heroTitle: "Build testing systems that can be repeated, observed, and improved.",
    primaryCta: "Explore MeteorTest",
    previewCta: "Open MeteorTest Web Preview",
    secondaryCta: "View GitHub",
    flagshipLabel: "Flagship project",
    companionLabel: "Companion test project",
    ecosystemTitle: "A compact engineering ecosystem",
    focusTitle: "Engineering focus",
    focusItems: [
      {
        title: "Automation testing platforms",
        body:
          "Build control planes that connect projects, suites, tasks, local executors, logs, reports, and follow-up actions.",
        points: ["Project contracts", "Task queues", "Report context"]
      },
      {
        title: "iOS automation infrastructure",
        body:
          "Keep UI automation and API smoke tests maintainable through clear fixtures, runtime isolation, and platform integration contracts.",
        points: ["pytest/Appium", "Allure output", "Runtime ownership"]
      },
      {
        title: "AI-assisted engineering workflows",
        body:
          "Use AI as an operation partner that can import projects, prepare tasks, inspect results, guide voice practice, and suggest concrete next actions.",
        points: ["Agent guardrails", "Voice feedback", "Human review"]
      },
      {
        title: "Voice-first learning products",
        body:
          "Build spoken interaction loops where ASR, endpointing, TTS, session state, and feedback controls stay observable across web and mobile.",
        points: ["ASR provider layer", "TTS routing", "Mobile session control"]
      },
      {
        title: "Repeatable local execution",
        body:
          "Prefer small, observable execution loops that can run locally first, then become website validation results or platform workflows later.",
        points: ["Local-first validation", "Environment checks", "Demo readiness"]
      }
    ],
    depthTitle: "Why MeteorTest exists",
    depthIntro:
      "MeteorTest is built around one practical loop: let a platform or AI assistant import test projects, register suites, create tasks, trigger local execution, and bring logs, reports, and failure context back into one place.",
    depthGroups: [
      {
        title: "Problem",
        items: [
          "Automation scripts often live in separate repositories without a shared entry point.",
          "Task execution is easy to start manually, but hard to trace later.",
          "Reports, logs, app artifacts, environments, and task context are usually disconnected.",
          "AI assistants are less useful when they can only comment on logs instead of operating with project, suite, task, and report context."
        ]
      },
      {
        title: "What it does",
        items: [
          "Imports projects and suites from a test project's meteortest.yml contract.",
          "Lets the AI assistant help create tasks, select suites, inspect reports, and summarize failures from platform context.",
          "Lets a Python Local Agent claim tasks and execute pytest, Appium, or Locust commands.",
          "Collects status, logs, Allure artifacts, and AI-assisted operation history."
        ]
      },
      {
        title: "Current status",
        items: [
          "MVP and active development.",
          "The platform-to-agent-to-test-repository execution path has been validated with iOS-Automation-Framework.",
          "The API smoke suite can now produce real pass/fail results against the iOS-Automation-Framework local mock API.",
          "The MeteorTest Web preview is online at meteortest.jcmeteor.com; Local Agent execution remains private."
        ]
      },
      {
        title: "Validation progress",
        items: [
          "The public site keeps the demo interactive and mock-data based.",
          "The separate MeteorTest Web preview is online for console surface validation.",
          "Use the local mock API as public-safe validation results for API smoke assertions.",
          "MeteorTest Local Agent has run the same mock-backed smoke suite and collected task-specific logs/report artifacts."
        ]
      }
    ]
  },
  zh: {
    eyebrow: "项目入口",
    heroTitle: "构建可复现、可观测、可持续改进的测试工程系统。",
    primaryCta: "查看 MeteorTest",
    previewCta: "打开 MeteorTest Web 预览",
    secondaryCta: "查看 GitHub",
    flagshipLabel: "主推项目",
    companionLabel: "配套测试项目",
    ecosystemTitle: "紧凑的工程项目生态",
    focusTitle: "工程方向",
    focusItems: [
      {
        title: "自动化测试平台",
        body: "构建连接项目、套件、任务、本地执行器、日志、报告和后续动作的控制平面。",
        points: ["项目协议", "任务队列", "报告上下文"]
      },
      {
        title: "iOS 自动化基础设施",
        body: "通过清晰的 fixture、运行时隔离和平台集成协议，让 UI 自动化与 API smoke 测试更可维护。",
        points: ["pytest/Appium", "Allure 产物", "运行时归属"]
      },
      {
        title: "AI 辅助工程工作流",
        body: "把 AI 作为能导入项目、准备任务、查看结果、指导口语练习并提出下一步动作的工程协作入口。",
        points: ["Agent 规则", "语音反馈", "人工确认"]
      },
      {
        title: "语音优先学习产品",
        body: "构建可观测的语音交互闭环，让 ASR、断句、TTS、会话状态和反馈控制在 Web 与移动端保持一致。",
        points: ["ASR Provider 层", "TTS 路由", "移动端会话控制"]
      },
      {
        title: "可复现的本地执行",
        body: "优先建设小而可观测的本地执行闭环，再逐步沉淀为官网验证结果或平台工作流。",
        points: ["本地优先验证", "环境检查", "Demo 就绪度"]
      }
    ],
    depthTitle: "为什么要做 MeteorTest",
    depthIntro:
      "MeteorTest 围绕一个实用闭环建设：让平台或 AI 助手导入测试项目、登记套件、创建任务、触发本地执行，再把日志、报告和失败上下文回传到同一个地方。",
    depthGroups: [
      {
        title: "问题",
        items: [
          "自动化脚本经常分散在不同仓库，缺少统一入口。",
          "测试任务手动执行很容易，但后续追踪历史和上下文很困难。",
          "报告、日志、App 产物、环境和任务上下文通常是割裂的。",
          "AI 助手如果只能点评日志，而不能基于项目、套件、任务和报告上下文操作，实际帮助会很有限。"
        ]
      },
      {
        title: "它做什么",
        items: [
          "从测试项目的 meteortest.yml 协议导入项目和测试套件。",
          "让 AI 助手基于平台上下文辅助创建任务、选择套件、查看报告和总结失败。",
          "由 Python 本地执行器领取任务并执行 pytest、Appium 或 Locust 命令。",
          "收集状态、日志、Allure 产物和 AI 辅助操作记录。"
        ]
      },
      {
        title: "当前状态",
        items: [
          "MVP，仍在主动开发中。",
          "平台到本地执行器再到测试仓库的执行链路，已经通过 iOS-Automation-Framework 验证。",
          "API smoke suite 现在可以基于 iOS-Automation-Framework 的本地 mock API 产生真实通过/失败结果。",
          "MeteorTest Web 预览已上线到 meteortest.jcmeteor.com；Local Agent 执行仍保持私有。"
        ]
      },
      {
        title: "验证进展",
        items: [
          "公开官网继续保持交互式 mock 数据 Demo。",
          "独立的 MeteorTest Web 预览已经上线，用于验证控制台界面。",
          "使用本地 mock API 作为公开安全的 API smoke 断言验证结果。",
          "MeteorTest Local Agent 已经运行同一套 mock-backed smoke suite，并采集了任务级日志和报告产物。"
        ]
      }
    ]
  }
};

export const contactCopy = {
  en: {
    eyebrow: "Contact & collaboration",
    title: "Open project channels first",
    intro:
      "JC Meteor is currently organized around public engineering work. GitHub is the best place to understand the projects, follow progress, and discuss project-specific questions.",
    collaborationTitle: "Good topics to discuss",
    collaborationItems: [
      "Automation testing platforms and local execution loops.",
      "Voice AI practice products, ASR/TTS provider routing, and mobile session control.",
      "iOS automation, pytest/Appium integration, and test infrastructure.",
      "AI-assisted development workflows that can operate on real project context."
    ],
    links: [
      {
        label: "GitHub Profile",
        description: "Start here for the public project hub, repositories, and profile updates.",
        href: "https://github.com/JunchenMeteor"
      },
      {
        label: "MeteorTest Issues",
        description: "Use this for platform questions, bugs, roadmap feedback, and testing workflow ideas.",
        href: "https://github.com/JunchenMeteor/MeteorTest/issues"
      },
      {
        label: "MeteorVoice Issues",
        description: "Use this for voice practice, ASR/TTS routing, mobile session, and speech feedback questions.",
        href: "https://github.com/JunchenMeteor/MeteorVoice/issues"
      },
      {
        label: "iOS Automation Issues",
        description: "Use this for test project integration, pytest/Appium, and sample execution questions.",
        href: "https://github.com/JunchenMeteor/iOS-Automation-Framework/issues"
      }
    ],
    note:
      "For private details such as credentials, internal URLs, device identifiers, or test accounts, use a private channel when one is published."
  },
  zh: {
    eyebrow: "联系与协作",
    title: "优先使用公开项目入口",
    intro:
      "JC Meteor 目前围绕公开工程项目展开。了解项目、跟进进展、讨论具体问题，GitHub 是最合适的入口。",
    collaborationTitle: "适合交流的方向",
    collaborationItems: [
      "自动化测试平台和本地执行闭环。",
      "语音 AI 练习产品、ASR/TTS Provider 路由和移动端会话控制。",
      "iOS 自动化、pytest/Appium 接入和测试基础设施。",
      "能够基于真实项目上下文操作的 AI 辅助研发工作流。"
    ],
    links: [
      {
        label: "GitHub Profile",
        description: "整体了解公开项目、仓库列表和个人主页更新，建议从这里开始。",
        href: "https://github.com/JunchenMeteor"
      },
      {
        label: "MeteorTest Issues",
        description: "用于测试平台相关问题、缺陷、路线图反馈和测试工作流想法。",
        href: "https://github.com/JunchenMeteor/MeteorTest/issues"
      },
      {
        label: "MeteorVoice Issues",
        description: "用于语音练习、ASR/TTS 路由、移动端会话和语音反馈相关问题。",
        href: "https://github.com/JunchenMeteor/MeteorVoice/issues"
      },
      {
        label: "iOS Automation Issues",
        description: "用于测试项目接入、pytest/Appium 和样例执行相关问题。",
        href: "https://github.com/JunchenMeteor/iOS-Automation-Framework/issues"
      }
    ],
    note:
      "涉及私有密钥、内部 URL、设备标识或测试账号的信息，后续应通过私密渠道沟通。"
  }
};

export const meteortestShowcaseCopy = {
  en: {
    eyebrow: "Flagship project",
    title: "MeteorTest",
    status: "MVP / active development",
    summary:
      "A testing control plane that connects project contracts, AI-assisted operations, local execution, and report context.",
    primaryAction: "Open MeteorTest",
    previewAction: "Open Web Preview",
    demoAction: "Try demo",
    githubAction: "GitHub",
    previewAlt: "MeteorTest Web dashboard preview screenshot",
    snapshotTitle: "Project workspace snapshot",
    snapshotSummary:
      "The platform keeps project metadata, suites, runtime, and artifacts together so a task can be understood without jumping across repositories.",
    snapshotItems: [
      { label: "Project", value: "yunlu-ios", detail: "Imported from meteortest.yml" },
      { label: "Suite", value: "api_smoke", detail: "Mock-backed API smoke path" },
      { label: "Executor", value: "phase9-local-agent", detail: "Runs through the test repository runtime" },
      { label: "Report", value: "output.log + Allure", detail: "Task-specific artifacts collected" }
    ],
    operationTitle: "AI Operation Flow",
    operations: [
      { title: "Import", detail: "Project contract and suites" },
      { title: "Prepare", detail: "Task, environment, build" },
      { title: "Execute", detail: "Private Local Agent" },
      { title: "Analyze", detail: "Report context and next action" }
    ],
    resultTitle: "Validation and preview status",
    resultRows: [
      { label: "Local validation", value: "Succeeded" },
      { label: "Smoke suite", value: "6 passed" },
      { label: "Web preview", value: "Online" },
      { label: "Execution", value: "Private Agent" }
    ],
    statusNote: "Preview online"
  },
  zh: {
    eyebrow: "主推项目",
    title: "MeteorTest",
    status: "MVP / 主动开发中",
    summary:
      "一个测试控制平面，用于连接项目协议、AI 辅助操作、本地执行和报告上下文。",
    primaryAction: "打开 MeteorTest",
    previewAction: "打开 Web 预览",
    demoAction: "体验 Demo",
    githubAction: "GitHub",
    previewAlt: "MeteorTest Web Dashboard 预览截图",
    snapshotTitle: "项目工作台快照",
    snapshotSummary:
      "平台把项目元数据、套件、运行环境和产物放在同一处，查看任务时不需要在多个仓库和报告之间来回跳转。",
    snapshotItems: [
      { label: "项目", value: "yunlu-ios", detail: "从 meteortest.yml 导入" },
      { label: "套件", value: "api_smoke", detail: "基于 mock API 的 smoke 链路" },
      { label: "执行器", value: "phase9-local-agent", detail: "通过测试仓库自己的运行时执行" },
      { label: "报告", value: "output.log + Allure", detail: "已采集任务级产物" }
    ],
    operationTitle: "AI 操作流",
    operations: [
      { title: "导入", detail: "项目协议和测试套件" },
      { title: "准备", detail: "任务、环境和构建产物" },
      { title: "执行", detail: "私有 Local Agent" },
      { title: "分析", detail: "报告上下文和下一步" }
    ],
    resultTitle: "验证和预览状态",
    resultRows: [
      { label: "本地验证", value: "已通过" },
      { label: "Smoke 套件", value: "6 passed" },
      { label: "Web 预览", value: "已上线" },
      { label: "执行", value: "私有 Agent" }
    ],
    statusNote: "预览已上线"
  }
};

export const meteortestCopy = {
  en: {
    title: "MeteorTest",
    subtitle: "The flagship project in the JC Meteor portfolio.",
    summary:
      "MeteorTest is an automation testing platform for managing projects, importing suites, scheduling local executors, collecting reports, and using AI to assist with project import, suite operations, task creation, report inspection, and failure analysis.",
    productIntro:
      "The public Web preview is online for console-surface validation. The private Local Agent path has been validated locally, while public connected execution remains a later safety design topic.",
    previewStatusTitle: "Preview status",
    previewStatusItems: [
      { label: "Web preview", value: "Online", detail: "Available at meteortest.jcmeteor.com" },
      { label: "Local Agent", value: "Private", detail: "Validated locally with iOS-Automation-Framework" },
      { label: "Connected execution", value: "Deferred", detail: "Requires auth, isolation, limits, and redaction design" }
    ],
    loopTitle: "Execution loop",
    loop: [
      {
        title: "Test project contract",
        body: "The automation repository provides meteortest.yml, declaring suites, commands, required tools, and report behavior."
      },
      {
        title: "Platform or AI import",
        body: "MeteorTest reads the contract and registers the project suites, either through the Web console or through AI-assisted project operations."
      },
      {
        title: "AI-assisted task creation",
        body: "A user or AI assistant can create a task that binds the project, suite, environment, build artifact, and execution metadata into one run request."
      },
      {
        title: "Local execution",
        body: "The Python Local Agent claims the task and runs the declared pytest, Appium, or Locust command on the local machine."
      },
      {
        title: "Report upload",
        body: "Logs, status, Allure artifacts, screenshots, and execution summaries are written back to the platform."
      },
      {
        title: "AI-assisted operations",
        body: "MeteorTest uses platform context to help import suites, create tasks, inspect reports, summarize failures, and suggest the next action."
      }
    ],
    roadmapTitle: "Roadmap",
    roadmap: [
      "Stabilize local executor lifecycle and task locking.",
      "Improve report aggregation and failure summaries.",
      "Turn the local run results into clearer product-facing website surfaces.",
      "Harden the live MeteorTest Web preview with public-preview mode, access protection, demo data, and clearer task/report surfaces.",
      "Design public connected execution only after security and execution isolation are explicit."
    ],
    sections: [
      {
        title: "Background",
        body:
          "Automation testing work often starts inside one repository, then spreads across products, environments, devices, reports, and local machines. MeteorTest is an attempt to make that execution loop visible and repeatable without moving every test into the platform itself."
      },
      {
        title: "Problem",
        body:
          "The hard part is not only running pytest or Appium. The hard part is knowing which project, suite, app artifact, environment, executor, log, report, failure summary, and AI operation belong to the same run."
      },
      {
        title: "Approach",
        body:
          "MeteorTest keeps the platform as the control plane and lets the Local Agent handle execution. Test repositories own their code and expose a meteortest.yml contract; the platform imports that contract and schedules tasks against it."
      }
    ],
    responsibilitiesTitle: "System responsibilities",
    responsibilities: [
      {
        title: "MeteorTest platform",
        body: "Owns project metadata, suite import, task state, reports, executor visibility, settings, and AI-assisted operation surfaces."
      },
      {
        title: "Local Agent",
        body: "Claims queued tasks, prepares artifacts, runs suite commands, captures logs, and writes reports back to the platform."
      },
      {
        title: "Test project",
        body: "Owns test code, fixtures, app-specific configuration, report output, and the meteortest.yml integration contract."
      }
    ],
    capabilitiesTitle: "Capability overview",
    capabilities: [
      "Project and suite management",
      "Build artifact registration",
      "Task creation and queueing",
      "AI-assisted project, suite, and task operations",
      "Local executor status",
      "Logs and Allure report collection",
      "AI-assisted failure analysis"
    ],
    statusTitle: "Available now",
    statusItems: [
      "MeteorTest is still an MVP and active development project.",
      "The Local Agent can execute the iOS-Automation-Framework API smoke suite through the test repository's own virtual environment.",
      "The current API smoke tests have produced real pass/fail results against the iOS-Automation-Framework local mock API through MeteorTest Local Agent.",
      "MeteorTest Web is online at meteortest.jcmeteor.com as a public preview.",
      "Public preview mode keeps Local Agent execution private; public connected execution is not enabled.",
      "The public website includes an interactive product walkthrough and project validation updates."
    ],
    demoTitle: "Demo status",
    demo:
      "The current website demo is an interactive browser walkthrough that explains the project import, task preparation, Local Agent handoff, report context, and AI follow-up flow. The separate MeteorTest Web preview is online at meteortest.jcmeteor.com for console surface validation. Local Agent execution remains private, and public connected execution is still deferred."
  },
  zh: {
    title: "MeteorTest",
    subtitle: "JC Meteor 项目体系中的主推项目。",
    summary:
      "MeteorTest 是一个自动化测试平台，用于管理项目、导入套件、调度本地执行器、收集报告，并通过 AI 辅助项目导入、套件操作、任务创建、报告查看和失败分析。",
    productIntro:
      "公网 Web 预览已经上线，用于验证控制台界面。私有 Local Agent 链路已经在本地验证；公网联网执行仍是后续需要安全设计的问题。",
    previewStatusTitle: "预览状态",
    previewStatusItems: [
      { label: "Web 预览", value: "已上线", detail: "可通过 meteortest.jcmeteor.com 访问" },
      { label: "Local Agent", value: "私有", detail: "已基于 iOS-Automation-Framework 完成本地验证" },
      { label: "联网执行", value: "延期", detail: "需要认证、隔离、限流和脱敏设计" }
    ],
    loopTitle: "执行闭环",
    loop: [
      {
        title: "测试项目协议",
        body: "自动化仓库提供 meteortest.yml，声明测试套件、执行命令、依赖工具和报告行为。"
      },
      {
        title: "平台或 AI 导入",
        body: "MeteorTest 读取协议并登记项目套件，这既可以通过 Web 控制台完成，也可以通过 AI 辅助项目操作完成。"
      },
      {
        title: "AI 辅助创建任务",
        body: "用户或 AI 助手可以创建任务，把项目、套件、环境、构建产物和执行元数据绑定成一次运行请求。"
      },
      {
        title: "本地执行",
        body: "Python 本地执行器领取任务，并在本机运行声明的 pytest、Appium 或 Locust 命令。"
      },
      {
        title: "回传报告",
        body: "日志、状态、Allure 产物、截图和执行摘要会写回平台。"
      },
      {
        title: "AI 辅助操作",
        body: "MeteorTest 使用平台上下文辅助导入套件、创建任务、查看报告、总结失败，并建议下一步动作。"
      }
    ],
    roadmapTitle: "路线图",
    roadmap: [
      "稳定本地执行器生命周期和任务锁定机制。",
      "改进报告聚合和失败摘要能力。",
      "把本地运行结果整理成更清晰的产品化官网展示。",
      "围绕公网预览模式、访问保护、demo 数据和任务/报告体验，继续加固已上线的 MeteorTest Web 预览。",
      "只有在安全和执行隔离设计明确后，再设计公网联网执行。"
    ],
    sections: [
      {
        title: "背景",
        body:
          "自动化测试通常从一个仓库开始，随后扩散到多个产品、环境、设备、报告和本地机器。MeteorTest 的目标是在不把所有测试代码搬进平台的前提下，让这条执行闭环变得可见、可复现。"
      },
      {
        title: "问题",
        body:
          "难点不只是运行 pytest 或 Appium，而是知道同一次运行里的项目、套件、App 产物、环境、执行器、日志、报告、失败摘要和 AI 操作如何对应起来。"
      },
      {
        title: "方案",
        body:
          "MeteorTest 将平台定位为控制平面，让本地执行器负责真实执行。测试仓库保留自己的代码，并通过 meteortest.yml 暴露集成协议；平台导入协议后基于它创建和调度任务。"
      }
    ],
    responsibilitiesTitle: "系统职责",
    responsibilities: [
      {
        title: "MeteorTest 平台",
        body: "负责项目元数据、套件导入、任务状态、报告、执行器可见性、设置和 AI 辅助操作入口。"
      },
      {
        title: "本地执行器",
        body: "领取排队任务，准备产物，执行套件命令，采集日志，并把报告写回平台。"
      },
      {
        title: "测试项目",
        body: "负责测试代码、fixture、应用相关配置、报告输出，以及 meteortest.yml 集成协议。"
      }
    ],
    capabilitiesTitle: "能力概览",
    capabilities: [
      "项目和套件管理",
      "构建产物登记",
      "任务创建和排队",
      "AI 辅助项目、套件和任务操作",
      "本地执行器状态",
      "日志和 Allure 报告采集",
      "AI 辅助失败分析"
    ],
    statusTitle: "当前可见能力",
    statusItems: [
      "MeteorTest 仍是 MVP 和主动开发项目。",
      "Local Agent 已经可以通过测试仓库自己的虚拟环境执行 iOS-Automation-Framework 的 API smoke suite。",
      "当前 API smoke 测试已经通过 MeteorTest Local Agent 基于 iOS-Automation-Framework 的本地 mock API 产生真实通过/失败结果。",
      "MeteorTest Web 已作为公网预览上线到 meteortest.jcmeteor.com。",
      "公网预览模式保持 Local Agent 执行私有；公网联网执行尚未启用。",
      "公开官网已经提供交互式产品 walkthrough 和项目验证结果更新。"
    ],
    demoTitle: "Demo 状态",
    demo:
      "当前官网 Demo 是一个浏览器内交互 walkthrough，用来说明项目导入、任务准备、Local Agent 交接、报告上下文和 AI 后续动作。独立的 MeteorTest Web 预览已经上线到 meteortest.jcmeteor.com，用于验证控制台界面。Local Agent 执行仍保持私有，公网联网执行仍延期。"
  }
};

export const demoCopy = {
  en: {
    title: "MeteorTest Interactive Demo",
    subtitle: "A browser-side walkthrough of the AI-assisted project, suite, task, execution, report, and next-action loop.",
    status: "Interactive mock demo",
    summary:
      "This demo puts the AI operation entry first: the assistant can help import a project contract, register suites, prepare a task, hand execution to the Local Agent, inspect report context, and suggest the next action. The current website demo remains browser-side mock data, while the same API smoke path has been validated locally through MeteorTest Local Agent.",
    stagesTitle: "What this demo shows",
    stages: [
      {
        title: "1. AI as operation entry",
        status: "Shown",
        body:
          "The flow starts from AI-assisted project and suite operations instead of treating AI as a report-only feature."
      },
      {
        title: "2. Local Agent handoff",
        status: "Shown",
        body:
          "The simulation shows how a prepared task is handed to a Local Agent and executed through the test repository runtime. The same mock-backed smoke suite has completed successfully in a local MeteorTest Agent run."
      },
      {
        title: "3. Report and next action",
        status: "Shown",
        body:
          "The final step highlights report inspection and AI-assisted follow-up, including environment or rerun suggestions."
      }
    ],
    resultsTitle: "What is available now",
    resultsItems: [
      "Interactive browser walkthrough for the AI-assisted operation loop.",
      "Local MeteorTest Agent run results for the mock-backed iOS-Automation-Framework API smoke suite.",
      "Task status, pytest summary, runtime, and report artifact summary prepared for public-safe display.",
      "Public-safe project links and implementation notes."
    ],
    nextTitle: "Next step",
    next:
      "Next, harden the live MeteorTest Web preview with public-preview mode, access protection, safe demo data, and clearer task/report surfaces. A public connected execution demo remains a later design topic."
  },
  zh: {
    title: "MeteorTest 交互 Demo",
    subtitle: "用浏览器内交互演示 AI 辅助的项目、套件、任务、执行、报告和下一步动作闭环。",
    status: "可交互 mock Demo",
    summary:
      "这个 Demo 把 AI 操作入口放在最前面：AI 助手可以辅助导入项目协议、登记套件、准备任务、交给 Local Agent 执行、查看报告上下文，并建议下一步动作。当前官网 Demo 仍是浏览器内 mock 数据，但同一条 API smoke 链路已经通过 MeteorTest Local Agent 完成本地验证。",
    stagesTitle: "这个 Demo 展示什么",
    stages: [
      {
        title: "1. AI 作为操作入口",
        status: "已展示",
        body:
          "流程从 AI 辅助项目和套件操作开始，而不是把 AI 只当成报告分析功能。"
      },
      {
        title: "2. 交给 Local Agent",
        status: "已展示",
        body:
          "模拟展示准备好的任务如何交给 Local Agent，并通过测试仓库自己的运行时执行。同一套 mock-backed smoke suite 已经在本地 MeteorTest Agent 运行中成功完成。"
      },
      {
        title: "3. 报告和下一步",
        status: "已展示",
        body:
          "最后一步突出报告查看和 AI 辅助跟进，包括环境配置或重跑建议。"
      }
    ],
    resultsTitle: "当前可见内容",
    resultsItems: [
      "展示 AI 辅助操作闭环的浏览器内交互 walkthrough。",
      "来自 MeteorTest Local Agent 的本地运行结果，覆盖 mock-backed iOS-Automation-Framework API smoke suite。",
      "任务状态、pytest 摘要、运行时和报告产物摘要已经整理为公开安全的展示内容。",
      "公开安全的项目链接和实现说明。"
    ],
    nextTitle: "下一步计划",
    next:
      "下一步是围绕公网预览模式、访问保护、安全 demo 数据和更清晰的任务/报告界面，加固已上线的 MeteorTest Web 预览。公网联网执行 Demo 会作为后续独立设计。"
  }
};

export const validationRunCopy = {
  en: {
    eyebrow: "Validated local run",
    title: "MeteorTest ran the mock-backed API smoke suite locally",
    summary:
      "A MeteorTest Local Agent task executed iOS-Automation-Framework `api_smoke` against the deterministic local mock API and collected task-specific logs plus Allure result artifacts.",
    stats: [
      { label: "Task", value: "phase9-api-smoke-001" },
      { label: "Result", value: "Succeeded" },
      { label: "Pytest", value: "6 passed" },
      { label: "Exit code", value: "0" }
    ],
    detailsTitle: "Run summary",
    details: [
      "Suite: api_smoke",
      "Environment: local-mock-api",
      "Runtime: iOS-Automation-Framework/.venv on Python 3.13",
      "Selection: 6 smoke cases selected, 16 non-smoke cases deselected",
      "Artifacts: output.log and Allure results collected under task-specific report paths"
    ],
    note:
      "The public website still uses a browser-side mock demo, and the live Web preview keeps execution private. Public connected execution is a later design topic after authentication, data isolation, and executor safety are designed."
  },
  zh: {
    eyebrow: "已验证的本地运行",
    title: "MeteorTest 已在本地运行 mock-backed API smoke suite",
    summary:
      "一个 MeteorTest Local Agent 任务基于确定性的本地 mock API 执行了 iOS-Automation-Framework 的 `api_smoke`，并采集了任务级日志和 Allure 结果产物。",
    stats: [
      { label: "任务", value: "phase9-api-smoke-001" },
      { label: "结果", value: "Succeeded" },
      { label: "Pytest", value: "6 passed" },
      { label: "退出码", value: "0" }
    ],
    detailsTitle: "运行摘要",
    details: [
      "套件：api_smoke",
      "环境：local-mock-api",
      "运行时：iOS-Automation-Framework/.venv，Python 3.13",
      "用例选择：选中 6 个 smoke 用例，排除 16 个非 smoke 用例",
      "产物：output.log 和 Allure results 已写入任务级报告路径"
    ],
    note:
      "公开官网仍使用浏览器内 mock Demo，已上线的 Web 预览也保持执行私有。公网联网执行要等认证、数据隔离和执行器安全设计完成后再推进。"
  }
};

export const screenshotResultsCopy = {
  en: {
    eyebrow: "Local preview screenshots",
    title: "MeteorTest Web is visible as a real console surface",
    summary:
      "These screenshots were captured from a local MeteorTest Web preview using sanitized mock data. They show the current console structure without exposing private Supabase data, local paths, credentials, or real test accounts.",
    items: [
      {
        title: "Execution workspace",
        body:
          "The dashboard shows task status, project onboarding, executor health, AI-assisted entry points, and the execution loop in a populated console layout.",
        image: "/screenshots/meteortest-dashboard-preview.png",
        alt: "MeteorTest local dashboard preview screenshot"
      },
      {
        title: "Report center",
        body:
          "The report page shows task outcomes, failure context, report summaries, and AI analysis surfaces with mock execution data.",
        image: "/screenshots/meteortest-reports-preview.png",
        alt: "MeteorTest local report center preview screenshot"
      },
      {
        title: "AI operation console",
        body:
          "The AI page presents conversations, executable quick templates, task-oriented prompts, and the assistant workspace as an operations surface rather than a simple chat box.",
        image: "/screenshots/meteortest-ai-preview.png",
        alt: "MeteorTest local AI operation console preview screenshot"
      }
    ],
    note:
      "This is not a public connected demo. MeteorTest Web is now online as a public preview, but Local Agent execution remains private."
  },
  zh: {
    eyebrow: "本地预览截图",
    title: "MeteorTest Web 已经具备真实控制台界面",
    summary:
      "这些截图来自本地 MeteorTest Web 预览，使用脱敏 mock 数据捕获。它们展示当前控制台结构，不暴露私有 Supabase 数据、本机路径、凭据或真实测试账号。",
    items: [
      {
        title: "执行工作台",
        body:
          "Dashboard 在有数据的控制台布局中展示任务状态、项目接入、执行器健康、AI 辅助入口和执行链路。",
        image: "/screenshots/meteortest-dashboard-preview.png",
        alt: "MeteorTest 本地 Dashboard 预览截图"
      },
      {
        title: "报告中心",
        body:
          "报告页面基于 mock 执行数据展示任务结果、失败上下文、报告摘要和 AI 分析入口。",
        image: "/screenshots/meteortest-reports-preview.png",
        alt: "MeteorTest 本地报告中心预览截图"
      },
      {
        title: "AI 操作台",
        body:
          "AI 页面展示会话列表、可执行快捷模板、任务化提示词和助手工作区，使 AI 更像操作入口，而不是单纯聊天框。",
        image: "/screenshots/meteortest-ai-preview.png",
        alt: "MeteorTest 本地 AI 操作台预览截图"
      }
    ],
    note:
      "这不是公网联网 Demo。MeteorTest Web 现在已经作为公网预览上线，但 Local Agent 执行仍保持私有。"
  }
};
