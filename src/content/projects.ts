export type ProjectRole = "flagship" | "companion" | "skill" | "toolkit";
export type ProjectStatus = "Active" | "MVP" | "Maintained" | "Toolkit";

export type Project = {
  slug: string;
  name: string;
  zhName?: string;
  role: ProjectRole;
  status: ProjectStatus;
  stack: string[];
  summary: {
    en: string;
    zh: string;
  };
  portfolio: {
    why: {
      en: string;
      zh: string;
    };
    built: {
      en: string[];
      zh: string[];
    };
    role: {
      en: string;
      zh: string;
    };
    next: {
      en: string;
      zh: string;
    };
  };
  highlights: {
    en: string[];
    zh: string[];
  };
  links: {
    github: string;
    docs?: string;
    issues?: string;
    roadmap?: string;
    preview?: string;
  };
};

export const projects: Project[] = [
  {
    slug: "meteortest",
    name: "MeteorTest",
    zhName: "星流测试台",
    role: "flagship",
    status: "MVP",
    stack: ["Next.js", "Supabase", "Python Agent", "AI Operations"],
    summary: {
      en: "Automation testing platform for projects, suites, local executors, reports, and AI-assisted operations.",
      zh: "面向项目、测试套件、本地执行器、报告和 AI 辅助操作的自动化测试平台。"
    },
    portfolio: {
      why: {
        en: "MeteorTest exists to connect scattered test repositories, task scheduling, local execution, reports, and AI-assisted project operations into one practical platform loop.",
        zh: "MeteorTest 用于把分散的测试仓库、任务调度、本地执行、报告和 AI 辅助项目操作连接成一个实用的平台闭环。"
      },
      built: {
        en: [
          "Next.js web console for projects, suites, tasks, builds, executors, reports, settings, and AI assistant surfaces.",
          "Python Local Agent for task polling, suite execution, log capture, and report upload.",
          "AI assistant surfaces for project import, suite import, task creation, report inspection, and failure analysis."
        ],
        zh: [
          "基于 Next.js 的 Web 控制台，覆盖项目、套件、任务、构建产物、执行器、报告、设置和 AI 助手入口。",
          "Python 本地执行器，用于轮询任务、执行套件、采集日志和回传报告。",
          "AI 助手入口支持项目导入、套件导入、任务创建、报告查看和失败分析。"
        ]
      },
      role: {
        en: "Flagship platform and control plane.",
        zh: "主推平台项目和控制平面。"
      },
      next: {
        en: "Harden the live Web preview with public-preview mode, access protection, safe demo data, and clearer task/report surfaces.",
        zh: "围绕公网预览模式、访问保护、安全 demo 数据和更清晰的任务/报告界面，加固已上线的 Web 预览。"
      }
    },
    highlights: {
      en: [
        "AI-assisted project and suite import",
        "AI-assisted task creation",
        "Run through a Python Local Agent",
        "Collect logs, reports, and AI operation context"
      ],
      zh: [
        "AI 辅助项目和套件导入",
        "AI 辅助创建测试任务",
        "通过 Python 本地执行器运行",
        "收集日志、报告和 AI 操作上下文"
      ]
    },
    links: {
      github: "https://github.com/JunchenMeteor/MeteorTest",
      docs: "https://github.com/JunchenMeteor/MeteorTest#readme",
      issues: "https://github.com/JunchenMeteor/MeteorTest/issues",
      roadmap: "https://github.com/JunchenMeteor/MeteorTest#roadmap",
      preview: "https://meteortest.jcmeteor.com/"
    }
  },
  {
    slug: "ios-automation-framework",
    name: "iOS-Automation-Framework",
    role: "companion",
    status: "Active",
    stack: ["Python", "pytest", "Appium", "Allure", "meteortest.yml"],
    summary: {
      en: "The first practical test-code carrier and platform integration sample for MeteorTest.",
      zh: "MeteorTest 的第一个实际测试代码载体和平台集成样例。"
    },
    portfolio: {
      why: {
        en: "This repository gives MeteorTest a real automation project to integrate with instead of only demonstrating platform screens.",
        zh: "这个仓库让 MeteorTest 有一个真实自动化项目可以集成，而不是只展示平台页面。"
      },
      built: {
        en: [
          "pytest-based API, iOS UI, and performance suite structure.",
          "Appium/XCUITest Page Object workflow and Allure report output.",
          "meteortest.yml contract used as the first platform integration sample."
        ],
        zh: [
          "基于 pytest 的 API、iOS UI 和性能测试套件结构。",
          "Appium/XCUITest Page Object 工作流和 Allure 报告输出。",
          "作为第一个平台集成样例的 meteortest.yml 协议文件。"
        ]
      },
      role: {
        en: "Companion test-code project and integration sample.",
        zh: "配套测试代码项目和集成样例。"
      },
      next: {
        en: "Keep the deterministic local mock API as the stable target for direct smoke execution and MeteorTest Agent validation runs.",
        zh: "继续把确定性的本地 mock API 作为直接 smoke 执行和 MeteorTest Agent 验证运行的稳定目标。"
      }
    },
    highlights: {
      en: [
        "pytest API suites",
        "Appium/XCUITest UI suites",
        "Allure report output",
        "MeteorTest integration contract"
      ],
      zh: [
        "pytest API 测试套件",
        "Appium/XCUITest UI 测试套件",
        "Allure 报告输出",
        "MeteorTest 集成协议"
      ]
    },
    links: {
      github: "https://github.com/JunchenMeteor/iOS-Automation-Framework",
      docs: "https://github.com/JunchenMeteor/iOS-Automation-Framework#readme",
      issues: "https://github.com/JunchenMeteor/iOS-Automation-Framework/issues"
    }
  },
  {
    slug: "senior-engineering-guardrails",
    name: "senior-engineering-guardrails",
    role: "skill",
    status: "Maintained",
    stack: ["Codex", "Claude Code", "Agent Rules", "Skill"],
    summary: {
      en: "A small discipline layer for coding agents that keeps implementation work focused, simple, and verifiable.",
      zh: "一个面向编码 Agent 的轻量规则层，用于让实现工作保持聚焦、简单和可验证。"
    },
    portfolio: {
      why: {
        en: "Agent tools are powerful, but project work still needs constraints around scope, validation, and user-owned changes.",
        zh: "Agent 工具很强，但项目工作仍然需要围绕范围、验证和用户已有改动建立约束。"
      },
      built: {
        en: [
          "Codex-compatible SKILL.md guardrails.",
          "Claude Code guidance snippet.",
          "Installation and repository packaging for reuse across projects."
        ],
        zh: [
          "兼容 Codex 的 SKILL.md 规则文件。",
          "Claude Code 可用的指导片段。",
          "可在多个项目复用的安装说明和仓库打包结构。"
        ]
      },
      role: {
        en: "Agent workflow quality layer.",
        zh: "Agent 工作流质量约束层。"
      },
      next: {
        en: "Use it as a reference for future project AGENTS.md files.",
        zh: "作为后续项目 AGENTS.md 的参考规则。"
      }
    },
    highlights: {
      en: [
        "Codex skill rules",
        "Claude Code guidance",
        "Small-diff discipline",
        "Validation-first workflow"
      ],
      zh: [
        "Codex skill 规则",
        "Claude Code 指导",
        "小范围改动约束",
        "验证优先的工作流"
      ]
    },
    links: {
      github: "https://github.com/JunchenMeteor/senior-engineering-guardrails",
      docs: "https://github.com/JunchenMeteor/senior-engineering-guardrails#readme"
    }
  },
  {
    slug: "douyin-video-toolkit",
    name: "douyin-video-toolkit",
    role: "toolkit",
    status: "Toolkit",
    stack: ["OpenClaw", "FFmpeg", "PowerShell", "Bash"],
    summary: {
      en: "A toolkit for turning authorized Douyin live replay footage into reviewed vertical short-video drafts.",
      zh: "一个用于将已授权的抖音直播回放处理成可人工确认的竖屏短视频草稿的工具包。"
    },
    portfolio: {
      why: {
        en: "Creator workflows benefit from repeatable video processing steps before a human reviews and publishes the final draft.",
        zh: "创作流程适合先用可复现的视频处理步骤产出草稿，再由人工审核和发布。"
      },
      built: {
        en: [
          "FFmpeg scripts for replay download, clipping, vertical conversion, slow motion, subtitles, and BGM mixing.",
          "Bash and PowerShell variants for cross-platform use.",
          "OpenClaw/Codex/Claude Code guidance for reviewed publishing and copyright-aware preparation."
        ],
        zh: [
          "用于回放下载、剪辑、竖屏转换、慢动作、字幕和 BGM 混音的 FFmpeg 脚本。",
          "同时提供 Bash 和 PowerShell 版本，便于跨平台使用。",
          "面向 OpenClaw、Codex、Claude Code 的使用规则，支持带人工审核和版权意识的草稿准备。"
        ]
      },
      role: {
        en: "Separate creator tooling project.",
        zh: "独立的创作工具项目。"
      },
      next: {
        en: "Improve reviewed draft preparation guidance and keep source-material usage clear.",
        zh: "继续完善草稿审核流程说明，并保持素材使用说明清晰。"
      }
    },
    highlights: {
      en: [
        "FFmpeg processing scripts",
        "Bash and PowerShell support",
        "Reviewed draft workflow",
        "Copyright and BGM guidance"
      ],
      zh: [
        "FFmpeg 处理脚本",
        "支持 Bash 和 PowerShell",
        "草稿审核流程",
        "版权和 BGM 说明"
      ]
    },
    links: {
      github: "https://github.com/JunchenMeteor/douyin-video-toolkit",
      docs: "https://github.com/JunchenMeteor/douyin-video-toolkit#readme"
    }
  }
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
