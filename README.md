# my-blog

Personal blog frontend built with Next.js App Router, TypeScript, Tailwind CSS, and [shadcn/ui](https://ui.shadcn.com).

基于 [Next.js](https://nextjs.org) App Router 的个人博客前端项目，使用 TypeScript、Tailwind CSS 与 [shadcn/ui](https://ui.shadcn.com) 组件库。

**Languages:** [English](#english) · [简体中文](#简体中文)

---

## English

### Tech stack

- **Framework**: Next.js 16, React 19
- **Styling**: Tailwind CSS 4, DaisyUI
- **UI**: shadcn/ui (Base UI), Lucide icons
- **Forms & validation**: React Hook Form, Zod
- **Theming**: next-themes (light/dark)
- **Code quality**: ESLint (`eslint-config-next`), Prettier

### Requirements

- Node.js 20+ (latest LTS aligned with your CI is recommended)
- npm, pnpm, yarn, or bun

### Getting started

```bash
# Install dependencies
npm install

# Development (http://localhost:3000 by default)
npm run dev
```

Production build and local preview:

```bash
npm run build
npm run start
```

### Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Create a production build |
| `npm run start` | Run the production server |
| `npm run lint` | Run ESLint |
| `npm run lint:fix` | ESLint with auto-fix |
| `npm run format` | Format with Prettier (writes files) |
| `npm run format:check` | Check formatting only (CI-friendly) |

### Code style

- **ESLint**: [`eslint.config.mjs`](./eslint.config.mjs) extends Next.js Core Web Vitals and TypeScript rules; `eslint-config-prettier` disables stylistic rules that conflict with Prettier.
- **Prettier**: [`.prettierrc`](./.prettierrc) and [`.prettierignore`](./.prettierignore).

#### Editor (VS Code / Cursor)

[`.vscode/settings.json`](./.vscode/settings.json) enables format on save and ESLint fixes. Recommended extensions are listed in [`.vscode/extensions.json`](./.vscode/extensions.json):

- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

### Project layout

```text
src/
├── app/                    # App Router pages and layouts
│   ├── (shared-layout)/    # Shared layout (e.g. home)
│   ├── auth/               # Auth pages (e.g. sign-up)
│   └── schemas/            # Zod validation schemas
├── components/
│   ├── ui/                 # shadcn/ui components
│   └── web/                # Site components (Navbar, ThemeToggle, etc.)
└── lib/                    # Utilities
```

Path alias: `@/*` → `src/*` (see [`tsconfig.json`](./tsconfig.json)).

### Deployment

Deploy to [Vercel](https://vercel.com) or any platform that supports Next.js. Keep secrets in local `.env*` files (do not commit them) and set the same variables in your hosting provider.

See the [Next.js deployment docs](https://nextjs.org/docs/app/building-your-application/deploying) for details.

---

## 简体中文

### 技术栈

- **框架**：Next.js 16、React 19
- **样式**：Tailwind CSS 4、DaisyUI
- **UI**：shadcn/ui（Base UI）、Lucide 图标
- **表单与校验**：React Hook Form、Zod
- **主题**：next-themes（明/暗色）
- **代码质量**：ESLint（`eslint-config-next`）、Prettier

### 环境要求

- Node.js 20+（推荐与团队 CI 一致的最新 LTS）
- npm / pnpm / yarn / bun 任选其一

### 快速开始

```bash
# 安装依赖
npm install

# 开发模式（默认 http://localhost:3000）
npm run dev
```

生产构建与本地预览：

```bash
npm run build
npm run start
```

### 常用脚本

| 命令 | 说明 |
| --- | --- |
| `npm run dev` | 启动开发服务器 |
| `npm run build` | 生产构建 |
| `npm run start` | 运行构建产物 |
| `npm run lint` | ESLint 检查 |
| `npm run lint:fix` | ESLint 自动修复 |
| `npm run format` | Prettier 格式化并写回文件 |
| `npm run format:check` | 仅检查格式（适合 CI） |

### 代码规范

- **ESLint**：配置见 [`eslint.config.mjs`](./eslint.config.mjs)，继承 Next.js Core Web Vitals 与 TypeScript 规则，并通过 `eslint-config-prettier` 关闭与 Prettier 冲突的样式规则。
- **Prettier**：配置见 [`.prettierrc`](./.prettierrc)，忽略目录见 [`.prettierignore`](./.prettierignore)。

#### 编辑器（VS Code / Cursor）

仓库已包含 [`.vscode/settings.json`](./.vscode/settings.json)，建议在保存时自动格式化并执行 ESLint 修复。推荐扩展见 [`.vscode/extensions.json`](./.vscode/extensions.json)：

- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

### 目录结构（简要）

```text
src/
├── app/                    # App Router 页面与布局
│   ├── (shared-layout)/    # 带公共布局的首页等
│   ├── auth/               # 认证相关页面（如 sign-up）
│   └── schemas/            # Zod 等校验 schema
├── components/
│   ├── ui/                 # shadcn/ui 组件
│   └── web/                # 站点级组件（Navbar、ThemeToggle 等）
└── lib/                    # 工具函数
```

路径别名：`@/*` 对应 `src/*`（见 [`tsconfig.json`](./tsconfig.json)）。

### 部署

可部署至 [Vercel](https://vercel.com) 或任意支持 Next.js 的平台。环境变量请放在 `.env*` 本地文件中（勿提交密钥），部署时在平台控制台配置同名变量。

更多说明见 [Next.js 部署文档](https://nextjs.org/docs/app/building-your-application/deploying)。
