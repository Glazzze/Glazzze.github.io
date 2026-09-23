# Yajing Liu · Academic Blog

这是 Yajing Liu 的个人学术主页与博客网站，用于展示个人简介、研究方向、项目经历、教育经历、奖项以及学习和科研笔记。

## 网站入口

- 个人网站：[https://glazzze.github.io](https://glazzze.github.io)
- GitHub 仓库：[https://github.com/Glazzze/Glazzze.github.io](https://github.com/Glazzze/Glazzze.github.io)

## 本地运行

要求 Node.js `>=22.12.0`。进入项目目录后执行：

```bash
conda activate blog-node
cd ~/Projects/Glazzze.github.io
npm install
npm run dev
```

开发服务器地址：

```text
http://localhost:4321
```

## 常用命令

```bash
npm run dev      # 启动本地开发服务器
npm run build    # 构建生产版本
npm run preview  # 预览生产构建结果
```

## 网站部署

网站使用 GitHub Actions 自动部署到 GitHub Pages。向 `main` 分支推送更新后，GitHub Actions 会自动构建并发布网站。
