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
- `junchen-meteor`: personal website. Make it more complete, more visual, and more project-led.

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

## Localization Rules

- This is a project-wide rule with no exceptions: all multilingual display text must live in content modules, not component logic.
- Do not put translated display copy directly in components with `locale === "en" ? ... : ...`.
- Do not add ad hoc language branches in components for labels, headings, button text, aria text, captions, status text, or helper text.
- Put shared UI labels in `src/content/ui.ts`.
- Put route prefixes, locale switch labels, and localized path helpers in `src/content/locales.ts`.
- Put page and project content in `src/content/site.ts`, `src/content/projects.ts`, or another focused content module.
- Components may use `locale` only to select content objects or call helpers such as `localizedPath(locale, "/meteortest")`.
- When adding English text, add the Simplified Chinese equivalent in the same content module in the same change.
- If a new feature needs many strings, create a focused content module instead of placing strings in the component.

## Project Content Plan

Before expanding homepage sections, project pages, MeteorTest demo messaging, or project portfolio content, read:

```text
docs/PROJECT_CONTENT_PLAN.md
```

Implement the plan in phases. The website MVP, interactive mock demo, contact surface, MeteorTest-to-iOS-Automation-Framework local execution-path debugging, local mock API validation, public website preview, productized homepage surface, local MeteorTest Agent run results, and sanitized local preview screenshots are complete. Next work should focus on Phase 11 MeteorTest Web Public Preview before Phase 12 Public Connected Demo. Richer seeded demo data and optional recordings can support those phases, but public execution still requires explicit safety design.

When a phase status, validation claim, capability boundary, terminology rule, project milestone, backend behavior, interaction flow, environment variable, port, command, or test capability changes, update all affected surfaces in the same change:

- `docs/PROJECT_CONTENT_PLAN.md` for agent/project continuity.
- Visible website copy in `src/content/*` when users would otherwise see stale information.
- Any related implementation code, configuration, examples, commands, or tests that would otherwise contradict the new behavior.

Do not treat a documentation-only update as complete if the public UI, backend behavior, interaction logic, configuration, examples, or tests still say or implement the old status, next step, terminology, or runtime behavior.

MeteorTest Web public access is Phase 11 and comes before the Phase 12 public connected execution demo. If Phase 11 starts, update the MeteorTest repository docs in the same change, especially `PROGRESS.md`, `AGENTS.md`, and `apps/web/README.md`. Do not rely on local-only `.env.local` values or machine paths; add safe environment templates, deployment-provider secret instructions, and a public-preview boundary before exposing any Web console.

## Content Boundaries

Do not overstate project maturity.

Write public website copy for visitors, not for agents or the project owner. Visible pages should emphasize:

- what exists
- what has been built
- what is currently available
- what is in progress
- what is planned next

Keep detailed "do not", safety, maturity, and execution-boundary instructions in `AGENTS.md`, `docs/PROJECT_CONTENT_PLAN.md`, or repository READMEs. On public pages, use short visitor-facing caveats only when they prevent a real misunderstanding.

Acceptable wording:

- `active development`
- `MVP`
- `interactive mock demo`
- `validated local execution path`
- `real execution demo is not public yet`
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

For visual configurability, use the existing medium-complexity token-first theme system:

- Organize theme CSS custom properties into base tokens, semantic tokens, and component tokens.
- Base tokens include palette primitives, font references, spacing, radius, shadow, and glow primitives.
- Semantic tokens include page background, text, muted text, surface, border, accent, status colors, link, focus, and selection states.
- Component tokens may cover hero visuals, project cards, badges, buttons, flow visuals, and demo panels when they reduce future CSS churn.
- Theme metadata and display labels live in `src/content/themes.ts`; visible theme text must remain localized there.
- Runtime theme behavior lives in the theme components; do not scatter `localStorage`, `data-theme`, or theme-name logic across unrelated components.
- Add new themes through stable `[data-theme="..."]` override blocks and the shared theme metadata.
- New pages, layout sections, cards, panels, buttons, badges, diagrams, and demo surfaces must participate in the theme system from the first implementation.
- Use semantic or component tokens for colors, backgrounds, borders, shadows, focus states, and highlighted surfaces; avoid hardcoded colors in component CSS unless defining a token.
- When changing a layout or visual component, verify at least one dark theme and one light theme so the component is not accidentally locked to a single palette.
- Keep layout and module order stable unless there is a concrete product reason to change them.
- Do not build a visual theme editor or arbitrary user-defined theme builder before there is a real product reason.

Temporary public website hosting is allowed and is separate from public connected test execution. A Vercel, Cloudflare Pages, Netlify, or GitHub Pages preview may expose the static website, but must not expose MeteorTest Local Agent endpoints, Supabase secrets, local machines, devices, or test execution services.

## Validation Commands

```bash
npm run lint
npm run build
```

For local preview, use port `3010` by default:

```bash
npm run dev -- -H 127.0.0.1 -p 3010
```

For visual changes, also verify desktop and mobile layouts, English and Chinese routes, header navigation, project links, and text wrapping.
