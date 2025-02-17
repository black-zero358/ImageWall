# IMGwall - 瀑布流图片展示网站

## 项目简介

IMGwall 是一个基于 Next.js 开发的现代化图片展示网站，采用瀑布流布局展示图片，提供流畅的浏览体验。本项目使用了最新的 Next.js App Router 和 React Server Components，结合 Tailwind CSS 实现了响应式设计。

## 功能特性

- 瀑布流布局：自适应的图片展示方式
- 响应式设计：完美适配各种屏幕尺寸
- 图片预览：支持图片放大预览
- 图片管理：支持图片上传和管理
- 性能优化：使用 Next.js 图片组件实现图片优化

## 技术栈

- **前端框架**：[Next.js](https://nextjs.org)
- **UI 框架**：[Tailwind CSS](https://tailwindcss.com)
- **字体优化**：[next/font](https://nextjs.org/docs/app/building-your-application/optimizing/fonts)
- **类型检查**：TypeScript
- **代码规范**：ESLint

## 快速开始

### 环境要求

- Node.js 18.x 或更高版本
- npm 或 yarn 或 pnpm

### 安装步骤

1. 克隆项目
```bash
git clone https://github.com/black-zero358/ImageWall.git
cd my-app
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

访问 [http://localhost:3000](http://localhost:3000) 查看网站运行效果。

## 项目结构

```
my-app/
├── public/          # 静态资源目录
│   ├── images/      # 图片资源
│   └── thumbnails/  # 缩略图
├── src/
│   └── app/        # 应用程序代码
├── tailwind.config.ts    # Tailwind CSS 配置
├── next.config.ts        # Next.js 配置
└── package.json          # 项目依赖和脚本
```

## 配置说明

项目使用 `.env.local` 文件进行配置管理，位于项目根目录。以下是配置项的详细说明：

### host与port
在package.json中配置

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

## 部署

本项目可以轻松部署到 [Vercel 平台](https://vercel.com)。也支持其他托管平台，如 Netlify、AWS 等。

## 贡献指南

欢迎提交 Issue 和 Pull Request 来帮助改进项目。


