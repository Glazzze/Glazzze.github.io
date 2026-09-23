# Yajing Liu · Academic Blog

这是 **Yajing Liu** 的学术个人主页与 Markdown 笔记网站，部署于 [glazzze.github.io](https://glazzze.github.io)。网站用于展示个人简介、研究方向、项目、教育经历、奖项，以及持续整理的学习和科研笔记。

## 网站内容

- 学术主页：个人简介、研究兴趣、精选项目与教育经历
- Research：AI for Science、AI agents、backend systems 等研究方向
- Notes：使用 Markdown 编写的学习、科研和工程笔记
- Projects：研究项目和开源项目展示
- Awards：奖学金、竞赛、志愿服务和其他荣誉
- Search：基于 Pagefind 的静态全文搜索
- RSS、Sitemap、代码高亮、LaTeX 数学公式和响应式布局

## 技术栈

- [Astro](https://astro.build/) 7
- TypeScript
- Astro Content Collections
- Markdown / MathML / Expressive Code
- Pagefind 静态搜索
- GitHub Actions + GitHub Pages

## 本地运行

项目要求 Node.js `>=22.12.0`。推荐使用项目中的 `blog-node` Conda 环境：

```bash
conda activate blog-node
cd ~/Projects/Glazzze.github.io
npm install
npm run dev
```

开发服务器默认地址：`http://localhost:4321`

常用命令：

```bash
npm run dev          # 启动开发服务器
npm run build        # 类型检查并构建网站，同时生成 Pagefind 索引
npm run preview      # 预览构建结果
npm run format       # 格式化代码
npm run format:check # 检查代码格式
```

## 发布一篇笔记

在 `src/content/blog/` 下新建 Markdown 文件，例如 `src/content/blog/my-note.md`：

```markdown
---
title: "笔记标题"
description: "一段简短的文章摘要。"
date: 2026-09-23
authors:
  - enscribe
tags:
  - 学习笔记
  - AI
draft: false
---

# 笔记标题

在这里编写 Markdown 正文。
```

`authors` 必须引用 `src/content/authors/` 中已有作者文件的 ID。`draft: true` 的文章不会显示在正式文章列表中。

本地确认无误后提交：

```bash
git add src/content/blog/my-note.md
git commit -m "content: publish a new note"
git push origin main
```

推送到 `main` 后，GitHub Actions 会自动完成检查、构建、Pagefind 索引生成和 GitHub Pages 部署。

## 内容目录

```text
src/content/
├── authors/    # 作者资料
├── blog/       # Markdown 笔记
├── research/   # 研究方向
├── projects/   # 项目
├── experience/ # 教育与研究经历
└── awards/     # 奖项与荣誉
```

## 个性化配置

- `src/consts.ts`：网站标题、简介、导航和社交链接
- `src/content/authors/enscribe.md`：个人资料
- `src/content/research/`：研究方向内容
- `src/content/experience/`：教育与经历内容
- `src/content/awards/`：奖项内容
- `src/styles/color.css`：颜色和主题变量
- `src/components/MetaHead.astro`：网页元信息和 favicon
- `astro.config.ts`：生产站点地址和 Astro 配置

## 在线网站

- 网站：[https://glazzze.github.io](https://glazzze.github.io)
- 源代码：[https://github.com/Glazzze/Glazzze.github.io](https://github.com/Glazzze/Glazzze.github.io)
