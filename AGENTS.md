# AGENTS.md

Guidance for AI coding agents working on the `JC Meteor` personal website.

This website is a public project hub for `JC Meteor`, with `MeteorTest` as the flagship project and `iOS-Automation-Framework` as its companion test project. Treat it as a polished engineering portfolio and project gateway, not a generic personal card page.

## Project Intent

The site should communicate:

- `JC Meteor` as the public technical identity.
- `MeteorTest` as the main project: an automation testing platform for projects, suites, local executors, reports, and AI-assisted operations.
- `iOS-Automation-Framework` as the first practical test-code repository and `meteortest.yml` integration sample.
- `senior-engineering-guardrails` as an AI coding-agent workflow discipline layer.
- `douyin-video-toolkit` as a creator workflow automation toolkit.

Use public GitHub links under:

```text
https://github.com/JunchenMeteor
```

Do not use the old owner name `qd1332543` in public-facing content.

## Public Presence Strategy

Use two different surfaces for two different jobs:

- `JunchenMeteor/JunchenMeteor`: GitHub Profile README. Keep it lightweight, clean, and link-focused.
- `jc-meteor-site`: personal website. Make it more complete, more visual, and more project-led.

It is acceptable to borrow the concise entry style of polished GitHub Profile READMEs, but do not reduce the website to a sparse profile README. The website should explain the MeteorTest ecosystem and project relationships in more depth.

## Brand And Language Rules

- Public English name: `JC Meteor`
- Chinese name: `钧宸流星`
- GitHub username: `JunchenMeteor`
- English should be the default public language.
- Simplified Chinese should be available under `/zh-CN`.
- Keep English and Chinese content structurally aligned.
- Do not let English claims sound more mature or complete than Chinese claims, or vice versa.
- If a Chinese phrase does not translate naturally, rewrite both versions to keep the same meaning.
- Keep `MeteorTest` as the English product/engineering name.
- The Chinese product name for MeteorTest may be shown as `星流测试台` when useful.

## Project Content Plan

Before expanding homepage sections, project pages, MeteorTest demo messaging, or project portfolio content, read:

```text
docs/PROJECT_CONTENT_PLAN.md
```

Implement the plan in phases. Start with website content depth, then project portfolio structure, then MeteorTest detail content, then static demo messaging. Do not jump into real MeteorTest execution debugging until the website MVP is stable unless the user explicitly redirects the task.

## Content Boundaries

Do not overstate project maturity.

Acceptable wording:

- `active development`
- `MVP`
- `static demo planned`
- `AI-assisted project import`
- `AI-assisted suite import`
- `AI-assisted task creation`
- `AI-assisted report inspection`
- `AI-assisted failure analysis`
- `local executor`
- `project integration contract`

Avoid vague or overpromising wording:

- `fully automated publishing`
- `production-ready SaaS`
- `enterprise-grade`
- `one-click solves everything`
- `autonomous agent execution without review`

For MeteorTest, describe the loop precisely:

```text
test project contract -> AI/platform import -> AI-assisted task creation -> local execution -> report upload -> AI-assisted report inspection and failure analysis
```

## Visual Direction

Build a polished engineering-product site.

Prefer strong first-screen identity, MeteorTest as the dominant flagship section, clear project hierarchy, dense but readable project metadata, subtle borders, grids, badges, and structured layout.

Avoid generic resume layouts, copying a GitHub Profile README as the entire website, nested UI cards, one-color themes, and text that overlaps or wraps badly.

## Validation Commands

```bash
npm run lint
npm run build
```

For visual changes, also verify desktop and mobile layouts, English and Chinese routes, header navigation, project links, and text wrapping.
