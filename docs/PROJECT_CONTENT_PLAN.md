# Project Content And Demo Plan

This document records how the JC Meteor personal website was built into a project-led portfolio without overstating project maturity. It also tracks the remaining engineering stages for stronger MeteorTest evidence.

## Goals

- Make the website feel like a serious engineering portfolio, not only a visual landing page.
- Explain why each project exists, what has been built, and how the projects relate to each other.
- Keep MeteorTest as the flagship project while keeping the personal brand hierarchy clear.
- Add project evidence gradually: problem statements, architecture, AI-assisted operations, status, roadmap, and demo links.
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
| Phase 3: MeteorTest Detail Page | Done | MeteorTest detail page now includes background, capabilities, responsibilities, limitations, demo plan, and roadmap. |
| Phase 4: Demo Strategy | Done | Added an in-site interactive mock demo and boundary page without fake real execution. |
| Phase 5: MeteorTest Debugging After Website MVP | Done | Local Agent now executes iOS-Automation-Framework through the test repository Python environment; API smoke tests require API_BASE_URL for real assertions. |
| Phase 6: Contact Surface | Done | Homepage now includes project-first contact links through GitHub profile and project issues. |
| Phase 7: Localization Content Layer | Done | Shared UI labels, route helpers, and demo simulator copy now live in content modules instead of component-level language branches. |
| Phase 8: Local Mock API For Real Smoke Results | Not Started | Build a local mock API so iOS-Automation-Framework smoke tests can produce real pass/fail results without a private backend. |
| Phase 9: Real Local MeteorTest Loop Evidence | Not Started | Run MeteorTest Agent against the mock API and capture real local logs/reports for website-safe evidence. |
| Phase 10: Screenshot Or Recording Evidence | Deferred | Add sanitized screenshots or recordings only after UI and private-data handling are stable. |
| Phase 11: Public Connected Demo | Deferred | Consider only after authentication, data isolation, secrets handling, permission checks, rate limits, and executor sandboxing are designed. |

## Non-Goals

- Do not connect the website to real Supabase or MeteorTest execution data in the first content pass.
- Do not expose local machine services, local Agent endpoints, secrets, private app artifacts, or internal test account data.
- Do not claim MeteorTest is production-ready SaaS.
- Do not start debugging MeteorTest target-project failures before this website content pass is stable.

## Completed Website Baseline

The website MVP now covers the earlier content gaps:

- The homepage explains MeteorTest's engineering problem, AI-first execution model, companion test project, project ecosystem, and contact entry points.
- The Projects page presents each repository with purpose, built work, status, links, and ecosystem role.
- The MeteorTest detail page includes background, problem framing, responsibilities, execution loop, capabilities, limitations, demo boundary, and roadmap.
- The demo page is an interactive mock demo that makes the AI-assisted operation loop visible without pretending to be a public real-execution service.
- The planning document now separates completed website work from future evidence-building work.

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
  - add a local mock API for real pass/fail smoke evidence
  - improve report and AI-assisted operation presentation

### Add project evidence sections

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
- Current limitations
- Demo plan
- Roadmap

Important limitation text:

> The MeteorTest Local Agent can execute the iOS-Automation-Framework API smoke suite through the test repository's own Python environment. The current API smoke tests are skipped unless API_BASE_URL points to a real target service.

Chinese equivalent:

> MeteorTest Local Agent 已经可以通过测试仓库自己的 Python 环境执行 iOS-Automation-Framework 的 API smoke suite。当前 API smoke 测试在没有 API_BASE_URL 指向真实目标服务时会被跳过。

## Phase 4: Demo Strategy

Status: `Done`

MeteorTest now has an online interactive mock demo. Future demo work should add evidence gradually without crossing execution-safety boundaries.

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

Status: `Not Started`

Next recommended engineering stage.

Goal:

- Add a lightweight local mock API for the endpoints used by the iOS-Automation-Framework API smoke tests.
- Run smoke tests with `API_BASE_URL=http://127.0.0.1:<port>` so they produce real pass/fail results instead of skip-only output.

Expected work:

- Identify the exact endpoints used by `API_Automation/cases`.
- Add a local mock service under iOS-Automation-Framework.
- Document startup and test commands.
- Keep mock data public-safe and deterministic.
- Verify direct pytest execution through the project `.venv`.

## Phase 9: Real Local MeteorTest Loop Evidence

Status: `Not Started`

After the mock API exists, use MeteorTest itself to execute the same API smoke suite.

Expected evidence:

- MeteorTest task created for `api_smoke`.
- Local Agent uses the iOS-Automation-Framework `.venv`.
- Mock API receives requests.
- pytest returns real pass/fail instead of skip.
- Logs and Allure artifacts are written under task-specific report paths.

Website update rule:

- The website can say the local loop is validated with a mock API.
- The website should still avoid claiming public real execution until a safe connected demo exists.

## Phase 10: Screenshot Or Recording Evidence

Status: `Deferred`

Screenshots or recordings can make the website more convincing, but only after the MeteorTest UI and sample data are stable enough to represent.

Requirements:

- Sanitize private paths, local usernames, internal URLs, device IDs, tokens, and test accounts.
- Label screenshots or videos clearly as local demo evidence.
- Keep English and Chinese explanations aligned.

## Phase 11: Public Connected Demo

Status: `Deferred`

A real online demo that triggers execution is possible later, but it needs an explicit safety design first.

Required design topics:

- Authentication and authorization.
- Demo data isolation.
- Supabase secrets handling.
- Local Agent endpoint exposure strategy.
- Task permission checks.
- Rate limits and abuse prevention.
- Executor sandboxing.
- Log and artifact redaction.

Until these are designed, the public website should stay with the interactive mock demo plus local validation evidence.

## Implementation Tracker

| Item | Status | Notes |
| --- | --- | --- |
| Add homepage content depth for MeteorTest | Done | Added homepage project substance section for MeteorTest. |
| Convert Projects page into a portfolio-style index | Done | Expanded each project with purpose, built work, status, and ecosystem role. |
| Expand the MeteorTest detail page | Done | Added background, capabilities, responsibilities, limitations, demo plan, and roadmap content. |
| Add a clear demo status section | Done | Added a MeteorTest demo status page and links from project surfaces. |
| Add interactive demo | Done | Added an interactive mock demo; screenshots can be added later only if real UI is stable and sanitized. |
| Run `npm run lint` and `npm run build` | Done | Verified after adding CI and syncing completed phase descriptions. |
| Add pull request CI | Done | Added GitHub Actions workflow for npm ci, lint, and build on pull requests and main pushes. |
| Verify desktop and mobile pages | Done | Interactive mock demo and main routes were previously visually checked; repeat when large layout changes are made. |
| Switch focus back to MeteorTest integration debugging | Done | Local Agent to iOS-Automation-Framework execution path validated; API_BASE_URL remains the real API prerequisite. |
| Add homepage contact module | Done | Added project-first GitHub profile and issue links. |
| Centralize localization content | Done | Added UI, locale routing, and demo simulator content modules. |
| Build local mock API for smoke tests | Not Started | Recommended next engineering step. |
| Capture real local MeteorTest loop evidence | Not Started | Requires local mock API first. |
| Add sanitized screenshots or recordings | Deferred | Only after UI and sample data are stable. |
| Design public connected demo | Deferred | Requires security and execution isolation design. |

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
