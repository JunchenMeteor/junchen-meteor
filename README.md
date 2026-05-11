# Junchen Meteor

<p align="center">
  <strong>A project-led personal website for automation testing, iOS engineering systems, and AI-assisted development workflows</strong>
</p>

<p align="center">
  <img alt="Next.js" src="https://img.shields.io/badge/Next.js-16-black?style=for-the-badge&logo=nextdotjs" />
  <img alt="React" src="https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black" />
  <img alt="TypeScript" src="https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=white" />
  <img alt="Theme System" src="https://img.shields.io/badge/Theme-Token_System-74D6B3?style=for-the-badge" />
  <br />
  <a href="https://jcmeteor.com/"><img alt="Live Preview" src="https://img.shields.io/badge/Live-Preview-1F6FEB" /></a>
  <a href="https://github.com/JunchenMeteor/junchen-meteor/issues"><img alt="Issues" src="https://img.shields.io/badge/Links-Issues-1F6FEB" /></a>
  <a href="docs/PROJECT_CONTENT_PLAN.md"><img alt="Roadmap" src="https://img.shields.io/badge/Links-Roadmap-8957E5" /></a>
  <br />
  <a href="README.md"><img alt="Docs English" src="https://img.shields.io/badge/Docs-English-black" /></a>
  <a href="README.zh-CN.md"><img alt="Docs 中文" src="https://img.shields.io/badge/Docs-%E4%B8%AD%E6%96%87-red" /></a>
</p>

Personal project hub for **JC Meteor**. The site presents automation testing, iOS engineering systems, and AI-assisted development workflows, with **MeteorTest** as the flagship project.

## Live Preview

After GitHub Pages is enabled for this repository, the public preview is available at:

```text
https://jcmeteor.com/
```

This preview is the static public website only. It does not expose MeteorTest Local Agent endpoints, Supabase secrets, local machines, devices, or test execution services.

MeteorTest Web is available separately as a public preview:

```text
https://meteortest.jcmeteor.com/
```

The MeteorTest Web preview is for console-surface validation. Local Agent execution remains private, and public connected execution is not enabled.

## What This Site Covers

- **MeteorTest**: the flagship automation testing platform project.
- **iOS-Automation-Framework**: the companion test-code repository and `meteortest.yml` integration sample.
- **senior-engineering-guardrails**: a coding-agent workflow discipline layer.
- **douyin-video-toolkit**: a creator workflow automation toolkit.

The website is intentionally project-led. It explains how these repositories relate to repeatable testing loops, local execution, reports, and AI-assisted operations.

## Key Projects

| Project | Role | Link |
| --- | --- | --- |
| MeteorTest | Flagship automation testing platform | [Web Preview](https://meteortest.jcmeteor.com/) / [GitHub](https://github.com/JunchenMeteor/MeteorTest) |
| iOS-Automation-Framework | Companion iOS test project and integration sample | [GitHub](https://github.com/JunchenMeteor/iOS-Automation-Framework) |
| senior-engineering-guardrails | Agent workflow guardrails | [GitHub](https://github.com/JunchenMeteor/senior-engineering-guardrails) |
| douyin-video-toolkit | Creator workflow automation toolkit | [GitHub](https://github.com/JunchenMeteor/douyin-video-toolkit) |

## Stack

- Next.js App Router
- TypeScript
- React
- Global CSS with a token-based theme system

## Local Development

Use port `3010` for this project.

Install dependencies and start the local server:

```bash
npm install
npm run dev:local
```

Open:

```text
http://127.0.0.1:3010
```

`npm run dev:local` is the preferred preview entry point. It clears an existing
local process listening on `127.0.0.1:3010` before starting Next.js, which avoids
stale dev-server sessions after UI changes.

## Static Preview Deployment

The project includes a GitHub Pages workflow for a temporary public preview.

GitHub Pages setup:

1. Open repository `Settings`.
2. Go to `Pages`.
3. Set `Source` to `GitHub Actions`.
4. Merge the deployment PR to `main`, or run the `GitHub Pages` workflow manually.

Local static-export checks:

```bash
npm run lint
npm run build
```

The GitHub Pages build targets the custom root domain:

```text
https://jcmeteor.com/
```

## Validation

```bash
npm run lint
npm run build
```

## Content Rules

- English is the default public language.
- Simplified Chinese is available under `/zh-CN`.
- Keep English and Chinese content structurally aligned.
- Keep public GitHub links under `https://github.com/JunchenMeteor`.
- Do not expose private paths, tokens, local account details, or old owner names in public content.
- Follow the project content plan in `docs/PROJECT_CONTENT_PLAN.md` when expanding project sections or demo messaging.
- New visual surfaces should use the shared theme tokens instead of hardcoded component colors.

## Contact

The site uses project-first public contact links:

- [GitHub Profile](https://github.com/JunchenMeteor)
- [MeteorTest Issues](https://github.com/JunchenMeteor/MeteorTest/issues)
- [iOS-Automation-Framework Issues](https://github.com/JunchenMeteor/iOS-Automation-Framework/issues)

Do not post private credentials, internal URLs, device identifiers, or test accounts in public issues.

## Planning Docs

- [Project content and demo plan](docs/PROJECT_CONTENT_PLAN.md)
