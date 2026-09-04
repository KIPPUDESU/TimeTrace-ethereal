# AGENTS.md

## 语言要求（重要）

- 本项目所有沟通、注释、文档、提交说明一律使用**中文**。
- 编写任何新文件（说明、笔记、配置注释等）也要用中文，不要在仓库里留下英文文档或英文说明。
- 用户明确要求在 `AGENTS.md` 中强调：用中文。

## 项目是什么

- 纯静态网页（HTML + CSS + JS），纵向模板借鉴 HTML5 UP 的 "Ethereal"。
- 目标是借鉴 `ReferenceExample\html5up-ethereal` 模板来做自己的网页。
- 当前仓库里的 `index.html`、`images`、`assets` 都是从 `ReferenceExample\html5up-ethereal` 复制过来的。

## 结构与入口

- 页面入口是根目录的 `index.html`（单页、横向滚动的 side-scrolling 模板）。
- 样式源码是 `assets/sass/*.scss`（入口 `main.scss`、`noscript.scss`），编译产物是 `assets/css/main.css` 和 `assets/css/noscript.css`，脚本是 `assets/js/main.js`（依赖 `jquery.min.js`）。
- `ReferenceExample\html5up-ethereal` 是原始模板，需要对照/复制内容时以它为参照；它的 `README.txt` 详细说明了 panel / span / color 等修饰类用法。

## 样式工作流（重要）

- **改样式：编辑 `assets/sass/*.scss` 源码，再编译，不要手改 `assets/css/main.css` / `noscript.css`。** 这两个 css 是 sass 编译产物，手改会被下次编译覆盖。
- 编译命令（见下方「命令」）：`pnpm build:css` 一次性编译，`pnpm watch:css` 开发时实时编译。
- **`assets/css/fontawesome-all.min.css` 是第三方库（Font Awesome），永远不要改。** 它由 `assets/sass/main.scss` 第 6 行 `@import 'fontawesome-all.min.css';` 外链加载，编译后体现在 `main.css` 顶部的 `@import url(fontawesome-all.min.css);` 中。
- 横向滚动页面要求元素有固定宽度：整段 `panel` 用 size 修饰（`small`/`medium`/`large`），或内部元素用 `span-*` 修饰。不要随意删掉这些修饰类，否则布局会错。
- 滚动行为（拖拽、滚轮转横向、键盘左右键、边缘滚动区）在 `assets/js/main.js` 顶部的 `settings` 里可开关/调参。

## 命令

- `pnpm install`：安装开发依赖（仅需一次；`sass` 由 `.npmrc` 的 `save-exact` 精确锁定版本）。
- `pnpm build:css`：把 `assets/sass` 编译到 `assets/css`（生成 `main.css`、`noscript.css`）。
- `pnpm watch:css`：监听 `assets/sass` 改动并实时编译。
- 编译时 Dart Sass 可能打印 `@import` / 颜色函数的 **deprecation 警告**，属预期、非错误，可忽略。
- `main.css` 由 sass 生成但**入库**（仓库无 CI 构建，静态托管直接依赖它）；规则一律「改 scss → 重编译」，不要直接改 css。

## 预览方式

- 本地预览用 `pnpm serve`（脚本为 `http-server ./ -p 60825`），然后浏览器访问 `http://localhost:60825/`。
- 也可直接双击打开 `index.html`，或起任意静态文件服务器。

## 其他

- `.gitignore` 已忽略 `node_modules`、`dist`、构建/测试产物，以及 `note-haruki*` 下的 Obsidian 配置（`/.obsidian`、`**/.$*`）。`note-haruki*` 是个人笔记目录，不要把它当作项目源码来改。
- `.npmrc` 设了 `save-exact=true`：引入 npm 依赖时安装会锁定精确版本。
