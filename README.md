# IMGwall - 瀑布流图片展示网站

## 项目简介

IMGwall 是一个基于 Next.js 开发的现代化图片展示网站，采用瀑布流布局展示图片，提供流畅的浏览体验。本项目使用了最新的 Next.js App Router 和 React Server Components，结合 Tailwind CSS 实现了响应式设计。

## 功能特性

- 瀑布流布局：使用 react-masonry-css 实现自适应的图片展示方式
- 响应式设计：完美适配各种屏幕尺寸
- 图片预览：支持图片放大预览
- 图片管理：支持图片上传和管理
- 性能优化：使用 Next.js 图片组件和 Sharp 实现图片优化
- 图标支持：集成 Font Awesome 图标库

## 技术栈

- **前端框架**：[Next.js](https://nextjs.org) 15.1.7
- **UI 框架**：[Tailwind CSS](https://tailwindcss.com)
- **字体优化**：[next/font](https://nextjs.org/docs/app/building-your-application/optimizing/fonts)
- **类型检查**：TypeScript
- **代码规范**：ESLint
- **图片处理**：Sharp
- **图标库**：Font Awesome
- **布局组件**：react-masonry-css

## 快速开始

### 环境要求

- Node.js 18.x 或更高版本
- npm 或 yarn 或 pnpm

### 安装步骤

1. 克隆项目
```bash
git clone https://github.com/black-zero358/ImageWall.git
```

2. 安装依赖
```bash
npm install
# 或
yarn install
# 或
pnpm install
```

3. 启动开发服务器
```bash
npm run dev
# 或
yarn dev
# 或
pnpm dev
```

访问 [http://127.0.0.1:3001](http://127.0.0.1:3001) 查看网站运行效果。

## 项目结构

```
my-app/
├── public/          # 静态资源目录
│   ├── images/      # 图片资源
│   ├── thumbnails/  # 缩略图
│   └── *.svg        # SVG 图标文件
├── src/
│   ├── app/        # 应用程序代码
│   │   ├── api/    # API 路由
│   │   ├── components/ # 组件
│   │   ├── utils/  # 工具函数
│   │   ├── globals.css # 全局样式
│   │   ├── layout.tsx # 布局组件
│   │   └── page.tsx   # 主页面
├── tailwind.config.ts    # Tailwind CSS 配置
├── next.config.ts        # Next.js 配置
├── postcss.config.mjs    # PostCSS 配置
├── eslint.config.mjs     # ESLint 配置
└── package.json          # 项目依赖和脚本
```

## 配置说明

项目使用 `.env.local` 文件进行配置管理，位于项目根目录。以下是配置项的详细说明：

### 服务器配置

在 `package.json` 的 scripts 中配置了开发服务器的主机和端口：

```json
"dev": "next dev --turbopack -H 127.0.0.1 -p 3001"
```

### 环境变量配置项

- **NEXT_PUBLIC_IMAGE_CHECK_INTERVAL**: 设置图片检查的时间间隔，单位为毫秒。默认值为60000（1分钟）。

### 配置示例

```env
# 图片检查间隔时间（毫秒）
NEXT_PUBLIC_IMAGE_CHECK_INTERVAL=60000
```

### 配置项说明

- **imageCheckInterval**: 设置图片检查的时间间隔，单位为毫秒。默认值为60000（1分钟）。

你可以根据需要修改这些配置项来自定义项目的行为。

## 开发指南

- 页面开发：修改 `src/app` 目录下的文件
- 样式调整：使用 Tailwind CSS 类名或修改 `tailwind.config.ts`
- 静态资源：将图片等静态资源放在 `public` 目录下
- 组件开发：在 `src/app/components` 目录下创建新组件
- API 开发：在 `src/app/api` 目录下添加新的 API 路由

## 部署

本项目可以轻松部署到 [Vercel 平台](https://vercel.com)。也支持其他托管平台，如 Netlify、AWS 等。

## 贡献指南

欢迎提交 Issue 和 Pull Request 来帮助改进项目。


