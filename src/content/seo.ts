import type { Metadata } from "next";
import type { Locale } from "@/content/site";
import type { Project } from "@/content/projects";

export const siteUrl = "https://jcmeteor.com";

type SeoEntry = {
  title: string;
  description: string;
  path: string;
};

const seoCopy = {
  en: {
    home: {
      title: "JC Meteor | Automation Testing And AI-Assisted Engineering",
      description:
        "A project-led engineering portfolio for automation testing platforms, iOS test infrastructure, local execution loops, and AI-assisted development workflows.",
      path: "/"
    },
    meteortest: {
      title: "MeteorTest | Automation Testing Control Plane",
      description:
        "MeteorTest connects project contracts, AI-assisted task operations, private Local Agent execution, reports, and failure analysis in one testing platform loop.",
      path: "/meteortest"
    },
    projects: {
      title: "Projects | JC Meteor",
      description:
        "Explore JC Meteor projects including MeteorTest, iOS-Automation-Framework, MeteorVoice, idea-to-app-spec, and reusable AI workflow tools.",
      path: "/projects"
    }
  },
  zh: {
    home: {
      title: "JC Meteor | 自动化测试与 AI 辅助工程",
      description: "以项目为核心的工程主页，串联自动化测试平台、iOS 测试基础设施、本地执行闭环和 AI 辅助研发工作流。",
      path: "/zh-CN"
    },
    meteortest: {
      title: "MeteorTest | 自动化测试控制平面",
      description:
        "MeteorTest 连接项目协议、AI 辅助任务操作、私有 Local Agent 执行、报告采集和失败分析，形成一个测试平台闭环。",
      path: "/zh-CN/meteortest"
    },
    projects: {
      title: "项目 | JC Meteor",
      description: "查看 JC Meteor 项目，包括 MeteorTest、iOS-Automation-Framework、MeteorVoice、idea-to-app-spec 和可复用 AI 工作流工具。",
      path: "/zh-CN/projects"
    }
  }
} satisfies Record<Locale, Record<"home" | "meteortest" | "projects", SeoEntry>>;

function absoluteUrl(path: string) {
  return new URL(path, siteUrl).toString();
}

export function pageMetadata(locale: Locale, page: keyof (typeof seoCopy)["en"]): Metadata {
  const entry = seoCopy[locale][page];
  const alternateLocale = locale === "en" ? "zh" : "en";
  const alternateEntry = seoCopy[alternateLocale][page];

  return {
    title: entry.title,
    description: entry.description,
    alternates: {
      canonical: absoluteUrl(entry.path),
      languages: {
        en: absoluteUrl(seoCopy.en[page].path),
        "zh-CN": absoluteUrl(seoCopy.zh[page].path)
      }
    },
    openGraph: {
      title: entry.title,
      description: entry.description,
      url: absoluteUrl(entry.path),
      siteName: "JC Meteor",
      locale: locale === "zh" ? "zh_CN" : "en_US",
      alternateLocale: [alternateLocale === "zh" ? "zh_CN" : "en_US"],
      type: "website"
    },
    twitter: {
      card: "summary_large_image",
      title: entry.title,
      description: entry.description
    }
  };
}

export function projectMetadata(locale: Locale, project: Project): Metadata {
  const title = `${project.name} | JC Meteor`;
  const description = project.summary[locale];
  const path = `${locale === "zh" ? "/zh-CN" : ""}/projects/${project.slug}`;

  return {
    title,
    description,
    alternates: {
      canonical: absoluteUrl(path),
      languages: {
        en: absoluteUrl(`/projects/${project.slug}`),
        "zh-CN": absoluteUrl(`/zh-CN/projects/${project.slug}`)
      }
    },
    openGraph: {
      title,
      description,
      url: absoluteUrl(path),
      siteName: "JC Meteor",
      locale: locale === "zh" ? "zh_CN" : "en_US",
      alternateLocale: [locale === "zh" ? "en_US" : "zh_CN"],
      type: "article"
    },
    twitter: {
      card: "summary_large_image",
      title,
      description
    }
  };
}
