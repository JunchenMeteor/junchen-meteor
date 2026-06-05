# Junchen Meteor

<p align="center">
  <strong>用于串联自动化测试、语音 AI 练习、iOS 工程体系和 AI 辅助开发工作流的项目型个人官网</strong>
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

**JC Meteor** 的个人项目官网。这个站点用于展示自动化测试、语音 AI 练习、iOS 工程体系和 AI 辅助开发工作流，其中 **MeteorTest** 是当前主推项目，**MeteorVoice** 是语音优先学习产品。

## 在线预览

启用 GitHub Pages 后，公网预览地址为：

```text
https://jcmeteor.com/
```

这个预览只包含静态公开官网，不会暴露 MeteorTest Local Agent 端点、Supabase 密钥、本机服务、设备或测试执行服务。

腾讯云国内部署使用同一个公开域名，并在页面底部展示备案号：

```text
陕ICP备2026014092号-1
```

MeteorTest Web 已经作为独立公网预览上线：

```text
https://meteortest.jcmeteor.com/
```

这个 MeteorTest Web 预览用于验证控制台界面。Local Agent 执行仍保持私有，公网联网执行尚未启用。

## 这个站点包含什么

- **MeteorTest**：主推的自动化测试平台项目。
- **MeteorVoice**：面向英语口语练习的双语语音会话教练。
- **iOS-Automation-Framework**：配套测试代码仓库，也是 `meteortest.yml` 集成样例。
- **senior-engineering-guardrails**：面向 AI 编码 Agent 的工程工作规则。
- **douyin-video-toolkit**：创作者工作流自动化工具。
- **idea-to-app-spec**：把模糊想法整理成可执行交付产物的可复用 AI 工作流 skill。
- **TimeTracker**：用于用户、设备、事件和会话跟踪的实用型后端服务。

这个网站以项目为核心，说明这些仓库如何围绕可复现测试闭环、语音交互闭环、本地执行、报告、AI 辅助操作、可复用工作流打包和产品实验形成关系。

## 关键项目

| 项目 | 角色 | 链接 |
| --- | --- | --- |
| MeteorTest | 主推自动化测试平台 | [Web 预览](https://meteortest.jcmeteor.com/) / [GitHub](https://github.com/JunchenMeteor/MeteorTest) |
| MeteorVoice | 语音优先英语口语练习产品 | [预览](https://meteorvoice.jcmeteor.com/) / [GitHub](https://github.com/JunchenMeteor/MeteorVoice) |
| iOS-Automation-Framework | iOS 配套测试项目和集成样例 | [GitHub](https://github.com/JunchenMeteor/iOS-Automation-Framework) |
| junchen-meteor | 个人主页和项目入口 | [GitHub](https://github.com/JunchenMeteor/junchen-meteor) |
| TimeTracker | 实用型后端服务 | [GitHub](https://github.com/JunchenMeteor/TimeTracker) |
| idea-to-app-spec | 可复用 AI 想法转规格工作流 skill | [GitHub](https://github.com/JunchenMeteor/idea-to-app-spec) |
| senior-engineering-guardrails | Agent 工作规则 | [GitHub](https://github.com/JunchenMeteor/senior-engineering-guardrails) |
| douyin-video-toolkit | 创作者工作流自动化工具 | [GitHub](https://github.com/JunchenMeteor/douyin-video-toolkit) |

## 技术栈

- Next.js App Router
- TypeScript
- React
- 基于 token 的全局 CSS 主题系统

## 本地开发

本项目固定使用 `3010` 端口。

安装依赖并启动本地服务：

```bash
npm install
npm run dev:local
```

打开：

```text
http://127.0.0.1:3010
```

`npm run dev:local` 是推荐的本地预览入口。它会先清理正在监听
`127.0.0.1:3010` 的旧本地进程，再启动 Next.js，避免 UI 修改后继续看到
卡住或过期的 dev-server 会话。

## 静态预览部署

项目已经包含 GitHub Pages workflow，用于发布临时公网预览。

GitHub Pages 设置步骤：

1. 打开仓库 `Settings`。
2. 进入 `Pages`。
3. 将 `Source` 设置为 `GitHub Actions`。
4. 合并部署 PR 到 `main`，或手动运行 `GitHub Pages` workflow。

本地静态导出检查：

```bash
npm run lint
npm run build
```

GitHub Pages 构建面向自定义根域名：

```text
https://jcmeteor.com/
```

## 验证

```bash
npm run lint
npm run build
```

## 内容规则

- 英文是默认公开语言。
- 简体中文位于 `/zh-CN`。
- 中英文内容需要保持结构一致。
- 公开 GitHub 链接统一使用 `https://github.com/JunchenMeteor`。
- 不要在公开内容中暴露私有路径、token、本地账号信息或旧用户名。
- 扩展项目内容或 Demo 文案时，遵循 `docs/PROJECT_CONTENT_PLAN.md`。
- 新增视觉区域应使用共享主题 token，不要在组件里写死颜色。

## 联系方式

站点优先使用项目公开渠道：

- [GitHub Profile](https://github.com/JunchenMeteor)
- [MeteorTest Issues](https://github.com/JunchenMeteor/MeteorTest/issues)
- [MeteorVoice Issues](https://github.com/JunchenMeteor/MeteorVoice/issues)
- [iOS-Automation-Framework Issues](https://github.com/JunchenMeteor/iOS-Automation-Framework/issues)

不要在公开 issue 中发布私有凭据、内部 URL、设备标识或测试账号。

## 规划文档

- [项目内容和 Demo 计划](docs/PROJECT_CONTENT_PLAN.md)
