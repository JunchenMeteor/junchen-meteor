# Junchen Meteor

Personal project hub for **JC Meteor**. The site presents automation testing, iOS engineering systems, and AI-assisted development workflows, with MeteorTest as the flagship project.

## Stack

- Next.js App Router
- TypeScript
- React
- CSS modules/global CSS

## Local Development

```bash
npm install
npm run dev -- -H 127.0.0.1 -p 3010
```

Open:

```text
http://127.0.0.1:3010
```

## Validation

```bash
npm run lint
npm run build
```

## Static Public Preview

The site can be published as a static GitHub Pages preview. The preview is only the public website; it does not expose MeteorTest Local Agent endpoints, Supabase secrets, local machines, devices, or test execution services.

GitHub Pages setup:

1. Open repository Settings.
2. Go to Pages.
3. Set Source to `GitHub Actions`.
4. Merge to `main` or run the `GitHub Pages` workflow manually.

Expected preview URL:

```text
https://junchenmeteor.github.io/junchen-meteor/
```

Local static-export check:

```bash
npm run build
```

GitHub Pages base-path check:

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

## Key Projects

- [MeteorTest](https://github.com/JunchenMeteor/MeteorTest)
- [iOS-Automation-Framework](https://github.com/JunchenMeteor/iOS-Automation-Framework)
- [senior-engineering-guardrails](https://github.com/JunchenMeteor/senior-engineering-guardrails)
- [douyin-video-toolkit](https://github.com/JunchenMeteor/douyin-video-toolkit)

## Contact

The site uses project-first public contact links:

- [GitHub Profile](https://github.com/JunchenMeteor)
- [MeteorTest Issues](https://github.com/JunchenMeteor/MeteorTest/issues)
- [iOS-Automation-Framework Issues](https://github.com/JunchenMeteor/iOS-Automation-Framework/issues)

Do not post private credentials, internal URLs, device identifiers, or test accounts in public issues.

## Planning Docs

- [Project content and demo plan](docs/PROJECT_CONTENT_PLAN.md)
