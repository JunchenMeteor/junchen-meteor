# Junchen Meteor

Personal project hub for **JC Meteor**. The site presents automation testing, iOS engineering systems, and AI-assisted development workflows, with **MeteorTest** as the flagship project.

## Live Preview

After GitHub Pages is enabled for this repository, the public preview will be available at:

```text
https://junchenmeteor.github.io/junchen-meteor/
```

This preview is the static public website only. It does not expose MeteorTest Local Agent endpoints, Supabase secrets, local machines, devices, or test execution services.

## What This Site Covers

- **MeteorTest**: the flagship automation testing platform project.
- **iOS-Automation-Framework**: the companion test-code repository and `meteortest.yml` integration sample.
- **senior-engineering-guardrails**: a coding-agent workflow discipline layer.
- **douyin-video-toolkit**: a creator workflow automation toolkit.

The website is intentionally project-led. It explains how these repositories relate to repeatable testing loops, local execution, reports, and AI-assisted operations.

## Key Projects

| Project | Role | Link |
| --- | --- | --- |
| MeteorTest | Flagship automation testing platform | [GitHub](https://github.com/JunchenMeteor/MeteorTest) |
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
npm run dev -- -H 127.0.0.1 -p 3010
```

Open:

```text
http://127.0.0.1:3010
```

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
GITHUB_PAGES=true npm run build
```

The GitHub Pages build uses the repository base path:

```text
/junchen-meteor
```

## Validation

```bash
npm run lint
npm run build
```

For GitHub Pages base-path validation:

```bash
GITHUB_PAGES=true npm run build
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
