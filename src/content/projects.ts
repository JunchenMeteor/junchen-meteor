export type ProjectRole = "flagship" | "product" | "companion" | "skill" | "toolkit";
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

const projectDisplayOrder = [
  "meteortest",
  "meteorvoice",
  "ios-automation-framework",
  "junchen-meteor",
  "timetracker",
  "idea-to-app-spec",
  "senior-engineering-guardrails",
  "douyin-video-toolkit"
];

const projectRank = new Map(projectDisplayOrder.map((slug, index) => [slug, index]));

const projectEntries: Project[] = [
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
    slug: "meteorvoice",
    name: "MeteorVoice",
    role: "product",
    status: "Active",
    stack: ["Next.js", "Expo iOS", "Supabase", "DeepSeek", "Xunfei ASR/TTS"],
    summary: {
      en: "A bilingual voice conversation coach for English speaking practice across mobile and web sessions.",
      zh: "面向英语口语练习的双语语音会话教练，覆盖移动端与 Web 会话。"
    },
    portfolio: {
      why: {
        en: "MeteorVoice turns English practice into a spoken loop where listening, endpointing, AI feedback, and speech playback can be measured and improved together.",
        zh: "MeteorVoice 把英语练习做成可说、可听、可衡量的闭环，让监听、断句、AI 反馈和语音播放可以一起优化。"
      },
      built: {
        en: [
          "Mobile and Web session surfaces with shared API client behavior, authentication, preferences, history, and settings.",
          "ASR provider layer with native STT fallback, Xunfei WebSocket routing, PCM capture diagnostics, and provider-level observability.",
          "TTS provider routing, session lifecycle controls, echo guard, endpointing, grouped loading feedback, and deployment paths for Tencent Cloud and Vercel."
        ],
        zh: [
          "移动端和 Web 会话界面，共用 API client 行为、登录、偏好、历史记录和设置能力。",
          "统一 ASR Provider 层，覆盖原生 STT fallback、讯飞 WebSocket 路由、PCM 采集诊断和供应商级观测。",
          "TTS Provider 路由、会话生命周期控制、回声防护、断句、聚合加载反馈，以及腾讯云和 Vercel 的部署路径。"
        ]
      },
      role: {
        en: "Voice-first learning product and cross-platform AI interaction system.",
        zh: "语音优先学习产品和跨端 AI 交互系统。"
      },
      next: {
        en: "Improve bilingual response routing, voice quality, ASR/TTS diagnostics, and production deployment hardening.",
        zh: "继续优化中英文回复路由、音色质量、ASR/TTS 诊断能力和生产部署防护。"
      }
    },
    highlights: {
      en: [
        "Bilingual speaking practice",
        "ASR provider routing",
        "TTS playback control",
        "Mobile session lifecycle"
      ],
      zh: [
        "双语口语练习",
        "ASR Provider 路由",
        "TTS 播放控制",
        "移动端会话生命周期"
      ]
    },
    links: {
      github: "https://github.com/JunchenMeteor/MeteorVoice",
      docs: "https://github.com/JunchenMeteor/MeteorVoice#readme",
      issues: "https://github.com/JunchenMeteor/MeteorVoice/issues",
      preview: "https://meteorvoice.jcmeteor.com/"
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
  },
  {
    slug: "junchen-meteor",
    name: "junchen-meteor",
    zhName: "JC Meteor 个人主页",
    role: "companion",
    status: "Active",
    stack: ["Next.js", "TypeScript", "Localization", "Theme System"],
    summary: {
      en: "A bilingual personal website that presents JC Meteor's project hub, technical identity, and public project ecosystem.",
      zh: "一个双语个人网站，用于展示 JC Meteor 的项目主页、技术身份和公开项目生态。"
    },
    portfolio: {
      why: {
        en: "A personal homepage gives the project family one stable public entry point instead of scattering context across individual repositories.",
        zh: "个人主页为项目家族提供一个稳定的公开入口，避免把上下文分散在各个仓库里。"
      },
      built: {
        en: [
          "Bilingual project showcase with localized routes and shared content modules.",
          "Flagship project framing for MeteorTest and related companion projects.",
          "Structured project pages that keep public project context easy to scan."
        ],
        zh: [
          "具备本地化路由和共享内容模块的双语项目展示。",
          "围绕 MeteorTest 和配套项目构建主项目叙事。",
          "结构化项目页面，方便快速浏览公开项目上下文。"
        ]
      },
      role: {
        en: "Public project hub and portfolio site.",
        zh: "公开项目主页和作品集站点。"
      },
      next: {
        en: "Keep the project list current as new repos land, and continue tightening the relationship between the homepage and each project detail page.",
        zh: "随着新仓库增加持续更新项目列表，并继续加强首页与各项目详情页之间的关联。"
      }
    },
    highlights: {
      en: [
        "Bilingual content structure",
        "Localized project routes",
        "Project ecosystem overview",
        "Shared content modules"
      ],
      zh: [
        "双语内容结构",
        "本地化项目路由",
        "项目生态总览",
        "共享内容模块"
      ]
    },
    links: {
      github: "https://github.com/JunchenMeteor/junchen-meteor",
      docs: "https://github.com/JunchenMeteor/junchen-meteor#readme"
    }
  },
  {
    slug: "idea-to-app-spec",
    name: "idea-to-app-spec",
    role: "skill",
    status: "Maintained",
    stack: ["Codex", "Claude Code", "Workflow Design", "Chronicle"],
    summary: {
      en: "An AI workflow skill that turns rough ideas into specs, plans, one-shot prompts, and implementation handoff artifacts.",
      zh: "一个 AI 工作流 skill，可把模糊想法转成 spec、plan、one-shot prompt 和 implementation handoff 产物。"
    },
    portfolio: {
      why: {
        en: "Many AI builds fail because the idea is not shaped well enough before implementation starts.",
        zh: "很多 AI 项目失败，是因为在开始实现前，想法还没有被整理清楚。"
      },
      built: {
        en: [
          "Explore, package, and skill-mining modes for shaping delivery workflows.",
          "Spec, plan, one-shot prompt, handoff, chronicle, and skill suggestion outputs.",
          "Codex and Claude Code installation guidance for reusable workflow packaging."
        ],
        zh: [
          "用于整理交付流程的 Explore、Package 和 Skill Mining 模式。",
          "输出 spec、plan、one-shot prompt、handoff、chronicle 和 skill suggestion。",
          "提供面向 Codex 和 Claude Code 的安装与复用说明。"
        ]
      },
      role: {
        en: "Reusable AI workflow package.",
        zh: "可复用的 AI 工作流包。"
      },
      next: {
        en: "Keep tightening the workflow packaging, documentation, and reusable skill suggestions.",
        zh: "继续打磨工作流打包、文档和可复用 skill 建议。"
      }
    },
    highlights: {
      en: [
        "Idea-to-spec workflow",
        "One-shot prompt generation",
        "Implementation handoff",
        "Chronicle and skill mining"
      ],
      zh: [
        "想法转 spec 工作流",
        "One-shot prompt 生成",
        "实现交接",
        "Chronicle 和 skill 挖掘"
      ]
    },
    links: {
      github: "https://github.com/JunchenMeteor/idea-to-app-spec",
      docs: "https://github.com/JunchenMeteor/idea-to-app-spec#readme"
    }
  },
  {
    slug: "timetracker",
    name: "TimeTracker",
    zhName: "TimeTracker 后端服务",
    role: "companion",
    status: "Active",
    stack: ["Java", "Spring Boot", "Docker", "MySQL", "Redis"],
    summary: {
      en: "A backend service for tracking users, devices, events, and daily sessions.",
      zh: "一个用于跟踪用户、设备、事件和每日会话的后端服务。"
    },
    portfolio: {
      why: {
        en: "Operational systems work better when attendance, device, and session data are structured instead of scattered in ad hoc records.",
        zh: "当考勤、设备和会话数据被结构化管理，而不是散落在零散记录中时，运营系统会更好用。"
      },
      built: {
        en: [
          "REST APIs for registration, login, device reporting, and session queries.",
          "Docker Compose setup for backend, MySQL, and Redis.",
          "Simple service-layer structure for model, repository, controller, and security code."
        ],
        zh: [
          "用于注册、登录、设备上报和会话查询的 REST API。",
          "提供后端、MySQL 和 Redis 的 Docker Compose 启动方案。",
          "采用 model、repository、controller 和 security 分层的服务结构。"
        ]
      },
      role: {
        en: "Utility backend service.",
        zh: "实用型后端服务。"
      },
      next: {
        en: "Expand the reporting and workflow layer if it becomes part of a larger product system.",
        zh: "如果它演进为更大产品体系的一部分，再扩展报表和流程层。"
      }
    },
    highlights: {
      en: [
        "Device and session tracking",
        "REST API service",
        "Dockerized local stack",
        "Simple layered backend design"
      ],
      zh: [
        "设备和会话跟踪",
        "REST API 服务",
        "Docker 化本地栈",
        "简洁的后端分层设计"
      ]
    },
    links: {
      github: "https://github.com/JunchenMeteor/TimeTracker",
      docs: "https://github.com/JunchenMeteor/TimeTracker#readme"
    }
  }
];

export const projects = [...projectEntries].sort((left, right) => {
  return (projectRank.get(left.slug) ?? Number.MAX_SAFE_INTEGER) - (projectRank.get(right.slug) ?? Number.MAX_SAFE_INTEGER);
});

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
