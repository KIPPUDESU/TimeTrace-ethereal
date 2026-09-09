# 项目说明

**时痕（TimeTrace）** 的静态发布页：为 GitHub 仓库 [KIPPUDESU/KIPPU_Trace](https://github.com/KIPPUDESU/KIPPU_Trace)（Android 应用，Kotlin · Compose / Material 3）做的落地页。页面布局借鉴 HTML5 UP 的 **Ethereal** 模板（纯 HTML + CSS + JS，横向滚动单页），只改了内容与少量专属样式，未动模板的配色引擎。

## 目录结构

- `index.html`：页面入口（单页、横向滚动），支持**简体中文 / English / 日本語**三语切换（文本节点用 `data-i18n` 键标记）。
- `assets/sass/`：样式**源码**（SCSS），入口为 `main.scss` 与 `noscript.scss`。
  - `components/_custom.scss`：**本项目专属修饰**（截图不裁剪 `.tt-frame`、图标展示块 `.tt-logo`、标签行 `.tt-kicker` 等），在 `main.scss` 末尾引入。
  - `libs/_vars.scss`：配色与**中文字体栈**（CJK 回退，不再引远程 Google Fonts）。
- `assets/css/`：编译产物 `main.css`、`noscript.css`，以及第三方库 `fontawesome-all.min.css`（Font Awesome，**不要改**）。
- `assets/js/main.js`：页面脚本（依赖 `jquery.min.js`），顶部 `settings` 可开关拖拽 / 滚轮 / 键盘 / 边缘滚动等横向滚动行为。
- `assets/js/i18n.js`：三语（zh / en / ja）文案字典与切换逻辑；新增可翻译文本时在元素上加 `data-i18n="键名"` 并在该文件三个语言块里各加一条。
- `images/`：页面图片资源。
  - `app-icon.png`：应用图标（自 KIPPU_Trace 的 `assets/icon1.png` 复制）。
  - `screens/`：应用界面截图（自 KIPPU_Trace 的 `assets/HJQH-*.jpg` 复制）。
  - `bg.jpg`：页面背景图（编译 CSS 引用）；`overlay.png`：面板渐变纹理（编译 CSS 引用）。**两者勿删**。
- `ReferenceExample/html5up-ethereal/`：原始模板参照，内含 `README.txt` 讲清 panel / span / color 等修饰类用法。
- `note-haruki*`：个人 Obsidian 笔记目录（已被 .gitignore 忽略），非项目源码。

## 样式开发工作流

1. **改源码**：编辑 `assets/sass/*.scss`（不要手改 `assets/css/main.css` / `noscript.css`，它们是编译产物）。
2. **编译**：
   - 首次安装依赖：`pnpm install`（`.npmrc` 的 `save-exact` 会精确锁定 `sass` 版本）。
   - 一次性编译：`pnpm build:css`
   - 开发时实时编译：`pnpm watch:css`
3. 编译时 Dart Sass 可能打印 `@import` / 颜色函数的 deprecation 警告，属预期、非错误。

> 注意：`assets/css/fontawesome-all.min.css` 由 `main.scss` 以 `@import` 方式外链加载，编译后体现在 `main.css` 顶部的 `@import url(fontawesome-all.min.css);` 中，永远不要手动修改它。
>
> 页面专属的排版规则写在 `components/_custom.scss`，其余改动优先落在对应组件 / 布局 partial，不要堆进 `_custom.scss`。

## 素材同步

页面用的图标与截图从 KIPPU_Trace 复制而来，若 App 有新截图，重新复制同名文件覆盖即可：

```bash
cp /Users/kippu/KIPPU-Code/GitHub/KIPPU_Trace/assets/icon1.png      images/app-icon.png
cp /Users/kippu/KIPPU-Code/GitHub/KIPPU_Trace/assets/HJQH-*.jpg      images/screens/
```

## 本地预览

用 `pnpm serve`（脚本为 `http-server ./ -p 60825`）起本地静态服务器：

```bash
pnpm serve
```

然后浏览器访问 `http://localhost:60825/`。也可直接双击打开 `index.html`。

## 横向滚动布局要点

- 整段 `panel` 用 size 修饰类满足固定宽度：`small` / `medium` / `large`。
- 不带 size 修饰的 `panel`，其内部元素用 `span-*`（如 `span-3`、`span-1-75`）给定固定宽度。
- 详见 `ReferenceExample/html5up-ethereal/README.txt`。

## 许可证

页面模板来自 HTML5 UP 的 Ethereal，遵循 [CCA 3.0](https://html5up.net/license)（个人与商业用途免费），页脚已保留署名。应用本体（TimeTrace）遵循 MIT License。
