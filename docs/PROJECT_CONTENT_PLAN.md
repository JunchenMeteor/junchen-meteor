# Project Content And Demo Plan

This document records how the JC Meteor personal website was built into a project-led portfolio without overstating project maturity. It also tracks the remaining engineering stages for stronger MeteorTest validation results.

## Goals

- Make the website feel like a serious engineering portfolio, not only a visual landing page.
- Explain why each project exists, what has been built, and how the projects relate to each other.
- Keep MeteorTest as the flagship project while keeping the personal brand hierarchy clear.
- Add project validation results gradually: problem statements, architecture, AI-assisted operations, status, roadmap, and demo links.
- Avoid implying that the website is showing the real MeteorTest UI unless a section is explicitly a real screenshot or live demo.

## Status Legend

Use these status labels so future agents can quickly understand progress:

- `Not Started`: planned but not implemented.
- `In Progress`: implementation has started but is not complete.
- `Blocked`: waiting on a decision, missing data, or another project fix.
- `Done`: implemented and validated.
- `Deferred`: intentionally postponed.

## Phase Status Summary

| Phase | Status | Current Notes |
| --- | --- | --- |
| Phase 1: Homepage Content Depth | Done | Homepage now includes MeteorTest problem, capability, status, and milestone content. |
| Phase 2: Projects Page As Portfolio | Done | Projects page now presents each project with purpose, built work, status, and ecosystem role. |
| Phase 3: MeteorTest Detail Page | Done | MeteorTest detail page now includes background, capabilities, responsibilities, available status, demo plan, and roadmap. |
| Phase 4: Demo Strategy | Done | Added an in-site interactive mock demo and status page without fake real execution. |
| Phase 5: MeteorTest Debugging After Website MVP | Done | Local Agent now executes iOS-Automation-Framework through the test repository Python environment; API smoke tests require API_BASE_URL for real assertions. |
| Phase 6: Contact Surface | Done | Homepage now includes project-first contact links through GitHub profile and project issues. |
| Phase 7: Localization Content Layer | Done | Shared UI labels, route helpers, and demo simulator copy now live in content modules instead of component-level language branches. |
| Phase 8: Local Mock API For Real Smoke Results | Done | iOS-Automation-Framework now has a deterministic local mock API; `-m smoke` produces real pass/fail results against `API_BASE_URL=http://127.0.0.1:8010`. |
| Phase 8.5: Public Copy Reframe | Done | Public website copy now emphasizes available capabilities, completed work, validation results, and next steps instead of internal guardrail-style boundary language. |
| Phase 8.6: Theme System Foundation | Done | Built a medium-complexity token-first theme system with runtime switching, persisted selection, localized labels, and stable theme override blocks. |
| Phase 8.7: Temporary Public Website Preview | Done | Added GitHub Pages static export workflow and deployment instructions for a public website preview without enabling public test execution. |
| Phase 8.8: Productized Website Surfaces | Done | Homepage flagship section now presents MeteorTest as a project workspace snapshot, and non-flagship projects now have detail pages instead of only appearing as list items. |
| Phase 9: Real Local MeteorTest Loop Run Results | Done | MeteorTest Local Agent ran `api_smoke` against the local mock API and produced public-safe task status, pytest summary, and artifact summary. |
| Phase 10: Screenshot Or Recording Results | Done | Added sanitized local MeteorTest Web preview screenshots for the dashboard and report center, labeled separately from public connected execution. |
| Phase 11: MeteorTest Web Public Preview | In Progress | MeteorTest now has the environment template and public-preview boundary docs; the remaining work is choosing a deployment target and publishing the separate Web console preview. |
| Phase 12: Public Connected Demo | Deferred | Consider only after authentication, data isolation, secrets handling, permission checks, rate limits, and executor sandboxing are designed. |

## Non-Goals

- Do not connect the website to real Supabase or MeteorTest execution data in the first content pass.
- Do not expose local machine services, local Agent endpoints, secrets, private app artifacts, or internal test account data.
- Do not claim MeteorTest is production-ready SaaS.
- Do not start debugging MeteorTest target-project failures before this website content pass is stable.

## Completed Website Baseline

The website MVP now covers the earlier content gaps:

- The homepage explains MeteorTest's engineering problem, AI-first execution model, companion test project, project ecosystem, and contact entry points.
- The Projects page presents each repository with purpose, built work, status, links, and ecosystem role.
- The MeteorTest detail page includes background, problem framing, responsibilities, execution loop, capabilities, available status, demo status, and roadmap.
- The demo page is an interactive mock demo that makes the AI-assisted operation loop visible without pretending to be a public real-execution service.
- The planning document now separates completed website work from future validation-results work.

## Content Principles

1. **Project claims must be grounded**
   - Use wording that can be backed by the actual repository README, current code, local validation results, or a clearly marked future stage.
   - Prefer `MVP`, `active development`, `interactive mock demo`, `validated local execution path`, and `real execution demo is not public yet` over broad marketing claims.

2. **Bilingual content must stay aligned**
   - English is the default route.
   - Simplified Chinese lives under `/zh-CN`.
   - If one language needs a rewrite, update the matching language at the same time.

3. **Visuals must not mislead**
   - Real product screenshots should be labeled as screenshots.
   - Abstract diagrams should be labeled as system flow, architecture, or execution model.
   - Do not make abstract visuals look like the current MeteorTest UI.

4. **MeteorTest remains the flagship**
   - It should be the strongest project section on the homepage.
   - It should not be a top-level nav item beside the personal brand.
   - It should have a dedicated detail page and later a demo entry.

## Phase 1: Homepage Content Depth

Status: `Done`

Add more substance to the homepage while keeping the current visual style.

### Add a stronger MeteorTest flagship block

Content to include:

- Problem:
  - test scripts are scattered across repositories
  - task execution is often manual
  - reports and logs are hard to connect to task context
  - AI assistants are less useful if they can only analyze logs instead of operating with platform context
- What MeteorTest does:
  - imports projects and test suites from `meteortest.yml`
  - lets AI assist with project import, suite import, task creation, report inspection, and failure analysis
  - lets a Local Agent execute tests
  - collects logs and report artifacts
  - keeps AI-assisted operation history tied to platform context
- Current status:
  - MVP
  - core flow has been walked through
  - target test project integration path has been validated through the Local Agent
  - API smoke tests still need API_BASE_URL before they can run real assertions
- Current follow-up milestones:
  - configure a real API_BASE_URL for API smoke execution
  - add a local mock API for real pass/fail smoke validation results
  - improve report and AI-assisted operation presentation

### Add project validation sections

Recommended homepage sections:

- `Why MeteorTest exists`
- `Execution model`
- `Companion project`
- `Current status`
- `Current follow-up milestones`

## Phase 2: Projects Page As Portfolio

Status: `Done`

Turn the Projects page from a card list into a portfolio-style project index.

Each project should show:

- Why it exists
- What was built
- Current status
- Tech stack
- Links
- Relationship to the broader JC Meteor ecosystem

Recommended project summaries:

### MeteorTest

- Role: flagship testing platform
- Why it exists: connect test projects, task scheduling, local execution, reports, and AI-assisted operations
- Status: MVP / active development
- Next: local mock API and real API target configuration

### iOS-Automation-Framework

- Role: companion test project and first integration sample
- Why it exists: provides real test code, pytest/Appium structure, Allure reports, and `meteortest.yml`
- Status: active sample project; MeteorTest-triggered API smoke execution path is validated
- Next: configure API_BASE_URL for real API assertions

### senior-engineering-guardrails

- Role: coding-agent workflow guardrails
- Why it exists: keep Codex/Claude Code/OpenClaw style work focused, small, and verifiable
- Status: maintained skill
- Next: use as a reference for future project `AGENTS.md` files

### douyin-video-toolkit

- Role: creator workflow automation toolkit
- Why it exists: convert authorized Douyin replay footage into reviewed vertical short-video drafts
- Status: toolkit
- Next: keep publishing boundary and copyright guidance clear

## Phase 3: MeteorTest Detail Page

Status: `Done`

Make `/meteortest` the strongest project page.

Recommended sections:

- Background
- Problem
- System responsibilities
- Execution loop
- Capability overview
- Companion repository
- Available now
- Demo plan
- Roadmap

Important limitation text:

> The MeteorTest Local Agent can execute the iOS-Automation-Framework API smoke suite through the test repository's own Python environment. The current API smoke tests are skipped unless API_BASE_URL points to a real target service.

Chinese equivalent:

> MeteorTest Local Agent 已经可以通过测试仓库自己的 Python 环境执行 iOS-Automation-Framework 的 API smoke suite。当前 API smoke 测试在没有 API_BASE_URL 指向真实目标服务时会被跳过。

## Phase 4: Demo Strategy

Status: `Done`

MeteorTest now has an online interactive mock demo. Future demo work should add validation results gradually while keeping public execution disabled until the required safeguards exist.

### Recommended order

1. Interactive mock product demo
   - Browser-accessible demo page.
   - Uses mock data only.
   - Lets visitors step through AI-assisted project import, task creation, Local Agent execution, report context, and next-action suggestions.
   - Shows suite metadata, executor/runtime information, report detail, and AI operation context.
   - Does not connect Supabase, Local Agent, real devices, or real app artifacts.

2. Recorded or screenshot-backed demo
   - Use real screenshots only after the actual MeteorTest UI is stable enough to represent.
   - Label screenshots clearly.
   - Avoid showing private data, internal URLs, tokens, or local device identifiers.

3. Real connected demo
   - Only after secrets, data isolation, permissions, and execution safety are designed.
   - Not needed for the first public personal website release.

### Demo wording

Use:

- `Interactive mock demo`
- `Mock-data demo`
- `Real execution demo is not public yet`

Avoid:

- `Live production demo`
- `Fully automated test execution`
- `One-click AI testing platform`

## Phase 5: MeteorTest Debugging After Website MVP

Status: `Done`

After the personal website MVP became stable, the MeteorTest-to-iOS-Automation-Framework execution path was debugged.

Result:

- MeteorTest no longer forces suite commands to use the Agent's own Python interpreter.
- The Local Agent prefers `parameters.python_executable`, `METEORTEST_TEST_PYTHON`, or the test repository `.venv` / `venv` before falling back to `python`.
- iOS-Automation-Framework API suites use `-n 0` for stable Windows Local Agent execution.
- The API smoke command succeeds through the Local Agent and uses `iOS-Automation-Framework\.venv\Scripts\python.exe`.
- API smoke tests are collected but skipped when `API_BASE_URL` is not configured.

Follow-up checklist:

- Configure `API_BASE_URL` for a real test service.
- Run API smoke tests directly in iOS-Automation-Framework.
- Run the same API smoke suite through the MeteorTest Local Agent.
- Only present API smoke assertions as executed after the target API responds successfully.

## Phase 6: Contact Surface

Status: `Done`

The homepage includes a project-first contact section.

Current contact model:

- GitHub profile for public project hub context.
- MeteorTest issues for flagship platform questions and roadmap feedback.
- iOS-Automation-Framework issues for test-project integration questions.
- No personal email is shown yet because no public email address has been provided.

Public-contact boundary:

- Do not ask visitors to post private credentials, internal URLs, device identifiers, or test accounts in public issues.
- If a private contact channel is added later, document where it appears and what information is safe to send.

## Phase 7: Localization Content Layer

Status: `Done`

The site now keeps translated UI labels and locale routing details out of display components.

Current localization model:

- `src/content/ui.ts`: shared UI labels, aria labels, page labels, and small repeated strings.
- `src/content/locales.ts`: locale prefixes, language switch labels, and localized path helpers.
- `src/content/demo-simulator.ts`: interactive demo simulator copy and ordered demo steps.
- `src/content/site.ts` and `src/content/projects.ts`: page-level and project-level content.

Rules:

- Components can select content with `copy[locale]` or call helpers such as `localizedPath(locale, "/meteortest")`.
- Components must not own translated display strings with `locale === "en" ? ... : ...`.
- This rule applies across the whole project with no exceptions: labels, headings, buttons, aria text, captions, status text, helper text, and demo copy all belong in content modules.
- Add English and Simplified Chinese strings in the same content module and same change.

## Phase 8: Local Mock API For Real Smoke Results

Status: `Done`

The local mock API stage is implemented in iOS-Automation-Framework.

Result:

- Added a lightweight deterministic mock API under `tools/mock_api`.
- Covered the current smoke endpoints used by user, product, order, and cart API cases.
- Added a mock API contract test.
- Verified direct smoke execution with `API_BASE_URL=http://127.0.0.1:8010`.

Validation:

- `.venv\Scripts\python.exe -m pytest tests\test_mock_api_contract.py -q -n 0 -p no:cacheprovider --basetemp=.pytest-basetemp-mock-api`
- `$env:API_BASE_URL='http://127.0.0.1:8010'; .venv\Scripts\python.exe -m pytest API_Automation\cases -v -n 0 -m smoke -p no:cacheprovider --basetemp=.pytest-basetemp-api-smoke`

Observed result:

- `6 passed, 16 deselected`

## Phase 9: Real Local MeteorTest Loop Run Results

Status: `Done`

MeteorTest has now executed the mock-backed API smoke suite through its own Local Agent path.

Completed run:

- Task ID: `phase9-api-smoke-001`
- Project key: `yunlu-ios`
- Suite: `api_smoke`
- Environment: `local-mock-api`
- Executor: `phase9-local-agent`
- Runtime: `iOS-Automation-Framework/.venv` with Python 3.13
- Result: `succeeded`
- Exit code: `0`
- pytest summary: `6 passed, 16 deselected`
- Artifacts: `output.log` and Allure results written under task-specific report paths

Validation command shape:

```powershell
$env:API_BASE_URL='http://127.0.0.1:8010'
$env:METEORTEST_TEST_PYTHON='../iOS-Automation-Framework/.venv/Scripts/python.exe'
python -m agent.agent --config .meteortest-agent/config.phase9.yaml --interval 1
```

Website update rule:

- The website can say the local loop is validated with a mock API through MeteorTest Local Agent.
- The website can show public-safe task status, suite, environment, runtime, pytest summary, exit code, and artifact summary.
- The website must not expose full local machine paths, private config, credentials, local service details beyond the mock API concept, or raw private logs.
- The website should still avoid claiming public real execution until a safe connected demo exists.

Completed website changes:

- Added a reusable bilingual validation run panel.
- Updated homepage, MeteorTest detail page, and demo status page to reference the completed local Agent run.
- Reframed old "next run through Local Agent" copy into completed run-results language.
- Kept public execution disabled; the browser demo remains mock-data based.

Validation:

- Local MeteorTest Agent run result: `6 passed, 16 deselected`, exit code `0`.
- Website validation: run `npm run lint` and `npm run build` before PR.

## Phase 8.5: Public Copy Reframe

Status: `Done`

Goal:

- Make the public website read like it is written for visitors, not only for the project owner or coding agents.
- Replace heavy "should / should not / boundary / limitation" language in visible UI with:
  - what exists
  - what has been built
  - what is running locally
  - what is in progress
  - what is planned next

Recommended changes:

- Keep safety and maturity guidance in `AGENTS.md`, `docs/PROJECT_CONTENT_PLAN.md`, and repository READMEs.
- Keep only short public-facing caveats on the website when needed.
- Use visitor-friendly `Current status` or `What is available now` sections for maturity details.
- Use `Demo status` or `What the demo shows` for demo readiness details.
- Keep the English and Chinese versions structurally aligned.

Completed changes:

- Renamed visible maturity surfaces to `Available now` / `当前可见能力`.
- Renamed visible demo readiness surfaces to `Demo status`, `What is available now`, and `Next step`.
- Reframed demo copy around the browser walkthrough, local mock API validation results, and the next MeteorTest Local Agent validation run.
- Reframed contact and toolkit language to avoid public pages reading like internal safety instructions.
- Updated component and CSS naming where old `limitation` / `boundary` concepts would otherwise contradict the new public copy.

Validation:

- Public pages should not feel like internal agent instructions.
- The website should still avoid overclaiming public real execution.
- `npm run lint`
- `npm run build`

## Phase 8.6: Theme System Foundation

Status: `Done`

Goal:

- Make visual style easier to evolve without rewriting page components.
- Provide a medium-complexity theme system now so future visual experiments can happen through tokens and theme metadata instead of ad hoc component edits.

Design direction:

- Use CSS custom properties for layered base, semantic, and component tokens.
- Support runtime switching through a small header control.
- Persist the selected theme in local storage.
- Keep theme labels in localized content modules.
- Add new themes through stable `[data-theme="..."]` override blocks and shared theme metadata.

Recommended scope:

- Base tokens:
  - color palette primitives
  - font family and type scale references
  - spacing scale
  - border radius scale
  - shadow and glow primitives
- Semantic tokens:
  - page background
  - text, muted text, and subtle text
  - surface and elevated surface
  - border and strong border
  - accent, secondary accent, success, warning, and danger
  - link, focus, and selection states
- Component tokens where they reduce future churn:
  - hero visual
  - project cards
  - badges/status pills
  - buttons/links
  - flow visual
  - demo panels
- Runtime behavior:
  - ThemeProvider initializes the active theme from local storage.
  - ThemeSwitcher cycles through the curated theme list.
  - The current click order groups darker themes first, then lighter themes: `ink`, `indigo`, `forest`, `dune`, `aurora`, `parchment`, `sky`, `glacier`, `mint`, and `sakura`.
- Keep existing layout and component structure.

Completed changes:

- Added layered CSS custom properties for palette, semantic, and component-level styling.
- Added stable `[data-theme="..."]` theme override blocks.
- Added `src/content/themes.ts` for theme IDs, localized labels, storage key, and validation helper.
- Added ThemeProvider and ThemeSwitcher components.
- Added a header theme switcher with localized accessible labels.
- Updated AGENTS.md so future UI/theme changes use the shared theme system.

Medium-complexity extension path:

- Add `src/styles/themes.css` if `globals.css` becomes too large.
- Add richer theme metadata only when it is needed by the UI.
- Add per-route or per-section theme defaults only if the site needs editorial control later.

Non-goals for this phase:

- Do not make module order, page layout, or content sections fully configurable yet.
- Do not introduce a visual theme editor.
- Do not create per-section layout configuration.
- Do not add cookies, server-side user preferences, or arbitrary custom theme editing.

Validation:

- The default visual style should look the same or slightly cleaner after token extraction.
- The token names should describe intent, not only raw colors.
- Component CSS should start depending on semantic/component tokens rather than hardcoded colors where practical.
- Theme switching should work on desktop and mobile without breaking layout.
- Desktop and mobile text wrapping should remain stable.
- `npm run lint`
- `npm run build`

## Phase 8.7: Temporary Public Website Preview

Status: `Done`

Goal:

- Make the personal website temporarily accessible through a public URL for sharing and review.
- This is not the same as Phase 11.

Scope:

- Deploy the static/presentational website only.
- Do not expose MeteorTest Local Agent endpoints.
- Do not connect public visitors to Supabase secrets, local machines, devices, or test execution services.
- Prefer Vercel, Cloudflare Pages, Netlify, or GitHub Pages for a temporary preview URL.

Recommended order:

1. Decide deployment target. `Done`: GitHub Pages with GitHub Actions.
2. Add minimal deployment documentation if needed. `Done`: README includes setup steps and expected URL.
3. Verify English and Chinese routes after deployment. `Pending after merge`: verify once Pages publishes from `main`.
4. Keep custom domain work optional until the brand/domain decision is stable. `Done`: no custom domain is required for this phase.

Completed changes:

- Added static export settings in `next.config.ts`.
- Added `.github/workflows/pages.yml` to build and deploy the `out` directory with GitHub Pages.
- Configured the GitHub Pages build to use `/junchen-meteor` as the repository base path.
- Documented the static preview setup in README.
- Kept the preview explicitly separate from public connected test execution.

Validation:

- `npm run lint`
- `npm run build`
- GitHub Pages static export build with `GITHUB_PAGES=true npm run build`
- Public URL opens the homepage. `Pending after merge`
- `/zh-CN`, `/projects`, and `/meteortest/demo` routes work. `Pending after merge`
- No private environment variables are required for the public static website.

Relationship to Phase 11:

- Phase 8.7 is static/public website hosting.
- Phase 11 is MeteorTest Web public preview and should come before any public connected execution.
- Phase 12 is public connected test execution and remains deferred until security and execution isolation are designed.

## Phase 8.8: Productized Website Surfaces

Status: `Done`

Goal:

- Reduce the feeling that the website is only a set of presentation slides.
- Use the completed Phase 9 local run result to make the homepage feel more like a product/project status surface.
- Keep the change scoped to public website presentation, not a full MeteorTest Web console clone.

Completed changes:

- Replaced the homepage MeteorTest featured card with a richer project workspace snapshot.
- Added direct actions for opening MeteorTest, trying the interactive demo, and opening the GitHub repository.
- Added a compact snapshot for project, suite, executor, and report artifacts.
- Added an AI-assisted operation loop panel and latest local validation rows.
- Added generic project detail pages for non-flagship repositories.
- Added project detail entry links from project cards and the Projects page.
- Kept copy bilingual and stored in content modules.
- Kept styling on existing theme tokens so dark and light themes can render the new surface.

Non-goals:

- Do not claim the homepage is the actual MeteorTest Web console.
- Do not make public visitors trigger real Local Agent execution.
- Do not connect the personal website to Supabase, local Agent services, or private report storage.
- Do not replace the later screenshot/recording phase.

Validation:

- `npm run lint`
- `npm run build`
- GitHub Pages static export build with `GITHUB_PAGES=true npm run build`
- Browser check for desktop and mobile homepage rendering.

## Phase 10: Screenshot Or Recording Results

Status: `Done`

Screenshots can make the website more convincing without exposing a public connected execution service.

Completed changes:

- Captured two sanitized MeteorTest Web local preview screenshots:
  - Dashboard / execution workspace.
  - Report center empty-state surface.
- Used placeholder environment variables and empty demo data.
- Stored images under `public/screenshots`.
- Added a bilingual screenshot results section to the MeteorTest detail page and demo status page.
- Labeled the screenshots as local preview screenshots, not public connected execution.

Requirements:

- Sanitize private paths, local usernames, internal URLs, device IDs, tokens, and test accounts.
- Label screenshots or videos clearly as local demo validation results.
- Keep English and Chinese explanations aligned.

Validation:

- Visual inspection confirmed the screenshots do not contain private local paths, tokens, real accounts, or Supabase secrets.
- `npm run lint`
- `npm run build`
- GitHub Pages static export build with `GITHUB_PAGES=true npm run build`

Follow-up:

- Replace placeholder/empty-state screenshots with richer seeded demo data after MeteorTest Web has a safe demo-data strategy.
- Recording remains optional and should only be added after the screen flow is stable and private-data handling is reviewed.

## Phase 11: MeteorTest Web Public Preview

Status: `In Progress`

The MeteorTest Web console can become publicly accessible before any public connected execution demo, but it should be treated as a separate deployment effort from this personal website.

Why this is separate:

- The personal website is a static public project hub.
- MeteorTest Web is an application console that depends on Supabase, AI provider keys, Agent behavior, report storage, and environment-specific configuration.
- Some current MeteorTest Web parameters live only on the local machine and are not synchronized to GitHub.

Required preparation:

- Add or verify safe environment templates such as `.env.local.example`. `Done in MeteorTest`
- Document required variables without real values. `Done in MeteorTest`
- Decide which variables are public browser variables and which must stay server-only. `Done in MeteorTest`
- Make local-only machine paths, tokens, service-role keys, and private API keys impossible to commit accidentally. `Done in MeteorTest`
- Choose a deployment target such as Vercel, Cloudflare Pages/Workers, Netlify, or a controlled server.
- Decide whether the public preview is read-only, demo-data only, authenticated, or connected to a real Supabase project.
- Keep Local Agent execution endpoints private unless a dedicated execution-safety design exists.
- Mirror this plan into the MeteorTest repository docs, such as `PROGRESS.md`, `AGENTS.md`, and `apps/web/README.md`, before starting the deployment implementation. `Done in MeteorTest`

Recommended first implementation:

- Deploy a Web console preview with demo or seeded data only.
- Keep task creation and real execution disabled or authenticated.
- Use GitHub secrets or deployment-provider environment variables instead of committing local `.env.local`.
- Add a deployment checklist to MeteorTest before opening public access.

Deployment runbook for the next operator:

1. Work in the MeteorTest repository first; use the detailed runbook in `apps/web/README.md`.
2. Choose an application host with Next.js server-route support, such as Vercel, Netlify, Cloudflare Workers/Pages with a server runtime, or a controlled server. Do not use GitHub Pages for MeteorTest Web.
3. Create an isolated preview Supabase project or schema and run the MeteorTest migrations.
4. Configure provider-managed environment variables: `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`, `SUPABASE_SERVICE_ROLE_KEY`, and optional `DEEPSEEK_API_KEY`.
5. Keep local Agent paths, machine-local runtime variables, private configs, and direct Agent endpoints out of the public Web deployment.
6. Deploy `apps/web` with Node.js 22, `npm ci`, and `npm run build`.
7. Smoke-check dashboard, projects, tasks, reports, builds, executors, settings, and API routes for clean loading and no secret/path exposure.
8. Return to this personal website only after the MeteorTest Web URL exists, then update visible links, README, AGENTS, and this plan together.

## Phase 12: Public Connected Demo

Status: `Deferred`

A real online demo that triggers execution is possible after the Web preview path exists, but it needs an explicit safety design first.

Required design topics:

- Authentication and authorization.
- Demo data isolation.
- Supabase secrets handling.
- Local Agent endpoint exposure strategy.
- Task permission checks.
- Rate limits and abuse prevention.
- Executor sandboxing.
- Log and artifact redaction.

Until these are designed, the public website should stay with the interactive mock demo plus local validation results.

## Implementation Tracker

| Item | Status | Notes |
| --- | --- | --- |
| Add homepage content depth for MeteorTest | Done | Added homepage project substance section for MeteorTest. |
| Convert Projects page into a portfolio-style index | Done | Expanded each project with purpose, built work, status, and ecosystem role. |
| Expand the MeteorTest detail page | Done | Added background, capabilities, responsibilities, available status, demo plan, and roadmap content. |
| Add a clear demo status section | Done | Added a MeteorTest demo status page and links from project surfaces. |
| Add interactive demo | Done | Added an interactive mock demo; screenshots can be added later only if real UI is stable and sanitized. |
| Run `npm run lint` and `npm run build` | Done | Verified after adding CI and syncing completed phase descriptions. |
| Add pull request CI | Done | Added GitHub Actions workflow for npm ci, lint, and build on pull requests and main pushes. |
| Verify desktop and mobile pages | Done | Interactive mock demo and main routes were previously visually checked; repeat when large layout changes are made. |
| Switch focus back to MeteorTest integration debugging | Done | Local Agent to iOS-Automation-Framework execution path validated; API_BASE_URL remains the real API prerequisite. |
| Add homepage contact module | Done | Added project-first GitHub profile and issue links. |
| Centralize localization content | Done | Added UI, locale routing, and demo simulator content modules. |
| Build local mock API for smoke tests | Done | Implemented in iOS-Automation-Framework and verified with 6 smoke tests against the local mock API. |
| Reframe public website copy for visitors | Done | Public UI copy now uses available status, completed validation results, and next-step messaging; detailed guardrails remain in docs and AGENTS. |
| Add theme system foundation | Done | Added layered tokens, curated theme overrides, a localized theme switcher, and persisted runtime theme selection. |
| Publish temporary public website preview | Done | Added GitHub Pages workflow and README setup instructions; public URL verification happens after merge and Pages publish. |
| Productize homepage MeteorTest surface | Done | Replaced the sparse featured card with a project workspace snapshot, operation loop, latest local validation rows, and direct actions. |
| Add non-flagship project detail pages | Done | Added `/projects/<slug>` and `/zh-CN/projects/<slug>` for other repositories so project hierarchy is not limited to MeteorTest only. |
| Capture real local MeteorTest loop run results | Done | MeteorTest Local Agent ran `api_smoke` against the local mock API with `6 passed, 16 deselected`. |
| Add sanitized screenshots or recordings | Done | Added dashboard and report center screenshots from a local MeteorTest Web preview using placeholder env and empty demo data. |
| Plan MeteorTest Web public preview | Done | MeteorTest now has `apps/web/.env.local.example`, secret-boundary guidance, and public-preview documentation. |
| Deploy MeteorTest Web public preview | In Progress | Choose Vercel, Cloudflare, Netlify, or a controlled server; configure provider-managed environment variables and a dedicated preview backend before publishing. |
| Design public connected demo | Deferred | Requires security and execution isolation design after the Web preview path exists. |

When completing an item, update both the row status and any relevant phase status above.

## Validation

Run:

```bash
npm run lint
npm run build
```

Manual checks:

- The homepage explains the project value without needing the visitor to open GitHub.
- MeteorTest is strong but not misleading.
- The abstract flow visual is clearly not a real UI screenshot.
- English and Chinese pages remain equivalent.
- Project links still use `JunchenMeteor`.
- Contact links do not expose private email, tokens, local paths, or internal account data.
- The site does not expose private credentials, local paths, or old GitHub owner names.
