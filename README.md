# 项目说明

借鉴 [HTML5 UP](https://html5up.net) 的 **Ethereal** 模板搭建的个人静态网页（纯 HTML + CSS + JS，横向滚动单页）。

## 目录结构

- `index.html`：页面入口（单页、横向滚动）。
- `assets/sass/`：样式**源码**（SCSS），入口为 `main.scss` 与 `noscript.scss`。
- `assets/css/`：编译产物 `main.css`、`noscript.css`，以及第三方库 `fontawesome-all.min.css`（Font Awesome，**不要改**）。
- `assets/js/main.js`：页面脚本（依赖 `jquery.min.js`），顶部 `settings` 可开关拖拽 / 滚轮 / 键盘 / 边缘滚动等横向滚动行为。
- `images/`：图片资源，画廊分 `images/gallery/fulls`（大图）与 `images/gallery/thumbs`（缩略图）。
- `ReferenceExample/html5up-ethereal/`：原始模板参照，内含 `README.txt` 讲清 panel / span / color 等修饰类用法。

## 样式开发工作流

1. **改源码**：编辑 `assets/sass/*.scss`（不要手改 `assets/css/main.css` / `noscript.css`，它们是编译产物）。
2. **编译**：
   - 首次安装依赖：`pnpm install`（`.npmrc` 的 `save-exact` 会精确锁定 `sass` 版本）。
   - 一次性编译：`pnpm build:css`
   - 开发时实时编译：`pnpm watch:css`
3. 编译时 Dart Sass 可能打印 `@import` / 颜色函数的 deprecation 警告，属预期、非错误。

> 注意：`assets/css/fontawesome-all.min.css` 由 `main.scss` 以 `@import` 方式外链加载，编译后体现在 `main.css` 顶部的 `@import url(fontawesome-all.min.css);` 中，永远不要手动修改它。

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

模板来自 HTML5 UP 的 Ethereal，遵循 [CCA 3.0](https://html5up.net/license)（个人与商业用途免费）。
