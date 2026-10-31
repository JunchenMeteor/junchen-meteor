// Real numbers collected from the public repositories on 2026-10-31.
// Regenerate by rerunning the collection script and updating the values.

export const projectStats = {
  collectedOn: "2026-10-31",
  commits: 626,
  repositories: 10,
  codeMegabytes: 3.0,
  languages: [
    { name: "TypeScript", bytes: 1944859, percent: 65 },
    { name: "Swift", bytes: 392051, percent: 13 },
    { name: "Python", bytes: 283090, percent: 9.5 },
    { name: "JavaScript", bytes: 136245, percent: 4.6 },
    { name: "CSS", bytes: 115860, percent: 3.9 },
    { name: "Other", bytes: 113445, percent: 4 }
  ],
  perProject: [
    { slug: "meteortest", commits: 138, main: "TypeScript", primaryBytes: 398241 },
    { slug: "sprout", commits: 8, main: "Swift", primaryBytes: 375364 },
    { slug: "ios-automation-framework", commits: 81, main: "Python", primaryBytes: 155709 },
    { slug: "meteorvoice", commits: 240, main: "TypeScript", primaryBytes: 779865 },
    { slug: "tankquest-academy", commits: 70, main: "TypeScript", primaryBytes: 587962 },
    { slug: "agentshot", commits: 19, main: "JavaScript", primaryBytes: 41355 },
    { slug: "lensport", commits: 1, main: "TypeScript", primaryBytes: 48348 },
    { slug: "timetracker", commits: 1, main: "Java", primaryBytes: 19464 },
    { slug: "senior-engineering-guardrails", commits: 6, main: "JavaScript", primaryBytes: 2547 },
    { slug: "junchen-meteor", commits: 62, main: "TypeScript", primaryBytes: 130443 }
  ]
};

export const statsCopy = {
  en: {
    label: "By the numbers",
    title: "What is actually in the repositories.",
    note: "Counted from the public GitHub repositories on 31 October 2026. Private repositories are not included.",
    items: [
      { value: "626", label: "commits" },
      { value: "10", label: "public repositories" },
      { value: "3.0 MB", label: "tracked source" },
      { value: "6", label: "smoke tests passing" }
    ],
    languageTitle: "Where the code actually lives",
    architectureLabel: "System",
    architectureTitle: "How the three Sprout repositories fit together",
    architectureNote:
      "One interface contract, versioned and hash-distributed, keeps the iOS client, the cross-platform client and the backend in step."
  },
  zh: {
    label: "数据",
    title: "仓库里实际有什么。",
    note: "统计自 2026 年 10 月 31 日的公开 GitHub 仓库，不含私有仓库。",
    items: [
      { value: "626", label: "次提交" },
      { value: "10", label: "个公开仓库" },
      { value: "3.0 MB", label: "受版本管理的源码" },
      { value: "6", label: "条 smoke 测试通过" }
    ],
    languageTitle: "代码实际都写在哪",
    architectureLabel: "系统结构",
    architectureTitle: "Sprout 的三个仓库如何拼在一起",
    architectureNote: "一份接口契约，按版本与哈希分发，让 iOS 客户端、跨端客户端和后端保持同步。"
  }
};
