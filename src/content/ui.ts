import type { Locale } from "@/content/site";

export const uiCopy = {
  en: {
    aria: {
      home: "JC Meteor home",
      primaryNav: "Primary navigation",
      githubProfile: "GitHub profile",
      meteorFlow: "MeteorTest system flow",
      themeSwitcher: "Switch visual theme"
    },
    common: {
      github: "GitHub",
      docs: "Docs",
      issues: "Issues",
      openLink: "Open link",
      backToMeteorTest: "Back to MeteorTest",
      interactiveDemo: "Interactive demo",
      openInteractiveDemo: "Open interactive demo"
    },
    home: {
      flowSteps: [
        "AI operation entry",
        "Project and suite import",
        "Task creation",
        "Local Agent",
        "Reports",
        "AI next action"
      ],
      flowLabel: "AI-first execution model",
      flowCaption:
        "This is a simplified AI-assisted operation model, not a screenshot of the current MeteorTest web console.",
      projectSubstance: "Project substance",
      ecosystemHeading: "Projects that support the same loop",
      focusHeading: "What this site is about"
    },
    meteortest: {
      flagshipProject: "Flagship project",
      iosCompanion: "iOS companion",
      controlPlane: "Control plane",
      controlPlaneDetail: "Projects / suites / tasks",
      localAgent: "Local Agent",
      localAgentDetail: "Executor and report collector",
      aiAssist: "AI assist",
      aiAssistDetail: "Project, suite, task, and report operations",
      demoStatus: "Demo status"
    },
    projects: {
      pageLabel: "Projects",
      pageTitle: "A project-led engineering portfolio",
      pageIntro:
        "MeteorTest is the center of the current system, with companion repositories that cover test implementation, agent guardrails, and creator tooling.",
      ecosystemRole: "Ecosystem role",
      validationResults: "Validation results",
      why: "Why it exists",
      built: "What I built",
      roleAndValidation: "Role and validation results"
    },
    demo: {
      nextStep: "Next step",
      currentStep: "Current step"
    }
  },
  zh: {
    aria: {
      home: "JC Meteor 首页",
      primaryNav: "主导航",
      githubProfile: "GitHub 主页",
      meteorFlow: "MeteorTest 系统流程",
      themeSwitcher: "切换视觉主题"
    },
    common: {
      github: "GitHub",
      docs: "Docs",
      issues: "Issues",
      openLink: "打开链接",
      backToMeteorTest: "返回 MeteorTest",
      interactiveDemo: "交互 Demo",
      openInteractiveDemo: "打开交互 Demo"
    },
    home: {
      flowSteps: ["AI 操作入口", "项目和套件导入", "任务创建", "本地执行器", "报告回传", "AI 下一步建议"],
      flowLabel: "AI 优先执行模型",
      flowCaption: "这是简化后的 AI 辅助操作模型，不是当前 MeteorTest Web 控制台截图。",
      projectSubstance: "项目内容",
      ecosystemHeading: "围绕同一执行闭环的项目",
      focusHeading: "这个站点关注什么"
    },
    meteortest: {
      flagshipProject: "主推项目",
      iosCompanion: "iOS 配套项目",
      controlPlane: "控制平面",
      controlPlaneDetail: "项目 / 套件 / 任务",
      localAgent: "本地执行器",
      localAgentDetail: "执行器与报告采集",
      aiAssist: "AI 辅助",
      aiAssistDetail: "项目、套件、任务和报告操作",
      demoStatus: "Demo 状态"
    },
    projects: {
      pageLabel: "项目",
      pageTitle: "以项目为核心的工程作品集",
      pageIntro: "MeteorTest 是当前项目体系的中心，配套仓库覆盖测试实现、Agent 工作规则和创作工具。",
      ecosystemRole: "生态角色",
      validationResults: "验证结果",
      why: "为什么存在",
      built: "做了什么",
      roleAndValidation: "角色与验证结果"
    },
    demo: {
      nextStep: "下一步计划",
      currentStep: "当前步骤"
    }
  }
} satisfies Record<Locale, object>;
