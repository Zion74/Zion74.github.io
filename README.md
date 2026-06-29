# Stephen Zheng

我的个人主页，基于 [Astro Sphere](https://github.com/markhorn-dev/astro-sphere) 构建，通过 GitHub Actions 部署在 GitHub Pages。

🌐 https://zion74.github.io

## 本地开发

```bash
npm install
npm run dev      # 本地预览 http://localhost:4321
npm run build    # 构建到 dist/
```

## 部署

推送到 `main` 分支会自动触发 GitHub Actions 构建并部署到 GitHub Pages（见 `.github/workflows/deploy.yml`）。

## 内容维护

| 内容 | 位置 |
| --- | --- |
| 个人信息 / 社交链接 | `src/consts.ts` |
| 首页文案（Hero / 关于我） | `src/pages/index.astro` |
| 博客文章 | `src/content/blog/` |
| 项目 | `src/content/projects/` |
| 工作经历 | `src/content/work/` |
