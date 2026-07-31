# EPIC 学术主页 · 格式规范文档

> 本文件记录樊富龙学术主页（academic-v1/v2/v3.html）的全部设计规范与展示规则。
> **每次修改页面代码前，先查阅本文件确保符合所有规范。**

---

## 1. 论文展示规范（硬性要求）

- **每一篇论文必须列出全部作者**，一个都不能省。
- **本人的名字必须加粗突出**（HTML 用 `<b class="me">` 或 `<b>`，颜色为暖铜 `--warm`）。
- 格式顺序：论文标题（链接）→ 全部作者（本人加粗）→ 会议/期刊 + 年份 + 等级。
- 多篇论文用编号圆角徽章（`.idx`）区分。
- 论文标题带 DOI/ACL 链接时加 `<a target="_blank" rel="noopener">`。

示例：
```html
<div class="pa"><b>Fulong Fan</b>, Peilin Liu, Liu FengZhe, Shuyan Yang, Gang Yan</div>
<div class="pv"><span class="venue">Findings of ACL</span><span class="yr">2026</span><span class="lvl">CCF-A 会议</span></div>
```

## 2. 字段展示规则（硬性要求）

- **所有信息字段都必须展示，包括没有填写内容的字段。**
- 示例：某作者没有填写 GitHub，仍显示「GitHub」标签，值用 `（未填写）` 灰色斜体占位。
- **不允许因为字段为空就隐藏整个标签行**。
- 空值样式：`class="v empty"` 或 `class="empty-tip"`（灰色 + 斜体）。

| 字段 | 标签 | 空值占位 |
|------|------|---------|
| 姓名 | 姓名 | —（必有） |
| 身份/职称 | 身份 | （未填写） |
| 机构 | 机构 | （未填写） |
| 导师 | 导师 | （未填写） |
| 入学年份 | 入学年份 | （未填写） |
| 邮箱 | 邮箱 | （未填写） |
| GitHub | GitHub | （未填写） |
| Google Scholar | Google Scholar | （未填写） |
| 个人主页 URL | 个人主页 | （未填写） |
| 研究方向 | 标签组 | （未填写） |
| 教育经历 | 时间线 | （未填写） |
| 论文 | 编号列表 | （暂无论文） |
| 项目经历 | 卡片 | （暂无项目信息，待补充） |
| 获奖荣誉 | 卡片 | （暂无获奖信息，待补充） |
| 技能 | 标签组 | （未填写） |

## 3. 社交图标使用规范

- **邮箱、个人主页 URL、GitHub、Google Scholar 必须用图标展示**。
- 图标：✉️ 邮箱 / 🐙 GitHub / 🎓 Scholar / 🌐 主页（v3 可换成 Font Awesome 或 SVG）。
- 点击图标跳转对应链接：
  - 邮箱 → `mailto:xxx`
  - GitHub/Scholar/主页 → 对应 URL
- **没有填写链接的图标：仍显示，但用 `<span class="... disabled">`（半透明 + 点击完全无反应），不可隐藏、不可用 `<a href="#">`**。
  - ⚠️ 教训：`<a href="#">` 点击会跳回页面顶部，违反"点击没反应"的预期——必须用 `<span>` 而不是带 href 的 `<a>`。
- 所有图标统一在 Hero 区 `.hero-social`，样式 `.hlink`（v1 为 `.icon-link`）。

## 4. 设计规范

### 4.1 配色（三轮迭代融合）
| 变量 | 浅色 | 深色 | 用途 |
|------|------|------|------|
| `--ink` | #2C3E50 | #b9cce8 | 主标题/深蓝 |
| `--accent` | #3172B4 | #6fa8dc | 链接/强调 |
| `--warm` | #C17F3B | #d9a35f | 本人名字/点缀 |
| `--bg` | #F6F8FB | #10161f | 页面背景 |
| `--card` | #FFFFFF | #182130 | 卡片 |
| `--line` | #e7ebf1 | #2a3648 | 分割线 |

### 4.2 字体
- 正文/标题：`Inter` + `Noto Sans SC`（sans，学术感 + 中文兼容）
- 时间/年份：`JetBrains Mono` 等宽（`.time`）

### 4.3 布局
- Hero 居中：头像 + 中文名 + 英文名 + 身份徽章 + 机构 + 社交图标
- 主体 Bento Grid：`1.4fr 1fr` 双栏，宽区块 `grid-column: span 2`
- 响应式断点 `820px`：变单栏

### 4.4 交互
- 深色/浅色模式切换（localStorage 记忆，`data-theme` 属性）
- 滚动渐入动画（`.reveal` + IntersectionObserver）
- 卡片 hover 上浮 + 阴影

### 4.5 浏览器兼容（2026-08-01 自检后补充）
- **`color-mix()` 必须配 fallback**：旧浏览器（2023 前）不支持，所有 `color-mix` 声明前一行写一个近似纯色兜底（如 `background: #eef3fa;` 再写 `background: color-mix(...)`）。
- **localStorage 必须包 try/catch**：`file://` 协议或隐私模式下可能抛异常。
- **头像内嵌用 base64**：`data:image/png;base64,...` 保证单文件在任何环境（含预览面板）都能显示；换头像时重新生成 base64。

## 5. 数据来源

- 数据文件：`data/fulong-fan.yaml`（姓名/角色/机构/导师/入学年份/邮箱/研究方向/教育/论文/头像）
- 头像：`data/picture/fulong-fan.jpg`（有照片时替换 hero 的占位 `👤` 为 `<img>`）
- 更新流程：改 yaml → 手动同步到 HTML 对应区块 → 检查空字段占位 → 发布

## 6. 版本历史

| 版本 | 设计决策来源 | 核心变化 |
|------|------------|---------|
| v1 | 经典左侧边栏（经济学学者模板）+ 米白背景（Dr. Paul Gordon Brown）| 首次完整页面 |
| v2 | 极简学术模板配色 #2C3E50/#3172B4 + Typographic Hero + Bento Box | 侧栏改 Hero + 模块化网格 |
| v3 | Stanford/MIT 教师站 + Readymag 极简交互 | 深色模式 + 滚动动画 + 时间线 + 论文徽章 |
| v4 | al-folio / as-folio / Folio 学术主题 | 系统感知暗色防闪屏 + 阅读进度条 + scrollspy + 回到顶部 + 打印友好 + SEO(JSON-LD/OG) |
| v5 | 2025 获奖学术主页（Kamšek 论文概述）+ 大学站设计 | 论文可展开摘要 + ::selection + 自定义滚动条 + footer 更新 |
| v6 | 简历数据可视化（雷达图/统计卡，Show-Your-Talents） | 技能 Canvas 雷达图 + 学术亮点统计卡 |
| v7（最终） | 2025 无障碍趋势（WCAG/prefers-reduced-motion/性能） | skip link + focus-visible + reduced-motion + preconnect + 打印隐藏雷达 |

### v5-v7 新增特性说明
- **v5 论文摘要**：`<details class="paper-abs">` 可展开摘要（SABA 框架一句话），`::selection` 选中色、自定义滚动条、论文 hover 高亮。
- **v6 技能雷达图**：纯 Canvas 自绘（无外部库），5 轴（LLM 推理/工程实现/PyTorch/论文写作/系统优化），深色模式自动重绘（MutationObserver 监听 data-theme）；「学术亮点」统计卡（论文数/方向数/入学年份/一作数）。
- **v7 无障碍与性能**：
  - `@media (prefers-reduced-motion: reduce)` 关闭所有动画
  - `:focus-visible` 键盘焦点可见样式
  - `.skip-link` 跳转主内容链接（屏幕阅读器）
  - `<link rel="preconnect">` 字体预连接
  - 打印时隐藏 canvas/统计卡/摘要
  - footer「回到顶部」链接（键盘可达）

### v4 新增特性说明
- **防闪屏暗色模式**：`<head>` 内联脚本在 CSS 生效前读取 localStorage / `prefers-color-scheme`，避免刷新时白闪。
- **阅读进度条**：`#progressBar` 顶部细条，随滚动更新宽度。
- **导航 scrollspy**：滚动时高亮当前章节（`.nav-links a.active` + 底部滑入线）。
- **回到顶部**：`#backTop` 按钮，滚动 >300px 显示。
- **打印友好**：`@media print` 隐藏导航/按钮/动画，输出干净 CV 布局，链接自动显示 URL（`a[href^="http"]::after`）。
- **SEO**：JSON-LD Person 结构化数据 + Open Graph meta。
- **Hero 装饰**：`hero::before` 径向渐变光晕（含 rgba fallback）。

---

## 7. People 页样式规范（Hugo 版，2026-08-01 三轮迭代）

> 作用对象：EPIC 主页 `/people/` 成员卡片页。实现文件：仓库 `layouts/partials/blocks/people.html`（覆盖 Hugo Blox 默认 widget）。
> 与 academic 单页版（§1-6）是**两套独立规范**，改 people 页只看本节 + 避坑指南 §9.8/§9.10。

### 7.1 卡片布局（第 1 轮迭代）
- **白卡样式**：圆角 `14px` + 柔和阴影；hover 时 `translateY(-5px)` 上浮 + 边框高亮。
- **头像**：圆形 `border-radius:50%`，外圈主题色 ring（`box-shadow: 0 0 0 3px var(--accent)`），hover `scale(1.05)`。
- **信息层级**：名字 → 角色 → summary 一句话 → interests 标签 chips → 社交图标。
- **响应式**：flex 网格 `calc(25% - 16px)`（4列）→ `33.33%`（3列）→ `50%`（2列）→ `100%`（1列），断点 992/768/480px。
- **卡片等高对齐**：`stretch` + `min-height:38px`，防止 summary 长短不一导致错位遮挡。

### 7.2 无照片成员（第 2 轮迭代）
- **禁止引用不存在的 avatar 文件**（会破图）——无照片时渲染 **首字母渐变头像**：
  - `.avatar-letter`：蓝→暖铜渐变背景 + 姓名首字居中，替代 `<img>`。
  - 深色模式下卡片/标签/首字母头像自动适配。

### 7.3 动效与无障碍（第 3 轮迭代）
- **卡片入场 stagger 动画**：`.people-widget > .people-person:nth-child(n)` 依次 `transition-delay: .05s` 递增。
- 社交图标 hover/focus 依次上浮（同 stagger 逻辑）。
- `:focus-within` 保证键盘可达；`@media (prefers-reduced-motion: reduce)` 关闭全部动画。

### 7.4 卡片内容规范（数据侧）
- **summary**：卡片只显示一句话（≤50 字，超出省略号）。成员在 data yaml 手写；**校友自动生成**「XX届博士，现就职于XX」。
- **interests 标签**：单条 ≤22 字（超长省略号 + `nowrap`），最多 2 条。
- **完整 bio**：详情页顶部 `## 个人简介` 展示全文——卡片短、详情页全。

### 7.5 社交图标（Hugo 版）
- **必须自绘**（不用 Hugo Blox 默认 `social_links.html`——它的 `relLangURL` 会把 `#` 解析成站点根路径 `/`，点击空图标跳首页）。
- **有链接**：渲染 `<a href="...">`（外链加 `target="_blank" rel="noopener"`，在 `<a>` 内条件输出，不用变量拼属性）。
- **空链接**：渲染 `<span class="epic-social disabled">`（半透明、点击无反应），**不可用 `<a href="#">`**。
- **YAML 输出**：空链接必须写 `link: "#"`（带引号）——裸 `#` 是 YAML 注释符会被解析成 null。

### 7.6 关键坑速记
| 坑 | 正确做法 |
|----|---------|
| YAML 裸 `link: #` = null | 输出 `link: "#"` |
| Go template 变量拼含引号属性 → 构建失败 | 直接在标签内条件输出 |
| `social_links.html` 把 `#` 变 `/` | partial 自绘图标 |
| nth-child 计数错乱 | 写 `.people-widget > .people-person:nth-child(n)` |
| Hugo 输出属性无引号（`class=people-person`） | 验证正则兼容 `class=` 与 `class="` |
