---
build:
  render: never
  list: never
  publishResources: false
---

# 新增出版物

每篇论文必须使用一个独立文件夹，每个论文文件夹中放置一份 `index.md`。如果需要一次提交多篇论文，请把多个论文文件夹放进同一个总目录，再压缩整个总目录发送。

```text
publication-submission/
├── arch2end-weihongliu/
│   └── index.md
├── mp3-yixiong/
│   └── index.md
└── powerlens-jiaweigeng/
    └── index.md
```

上面的压缩包包含三篇论文。不要把多篇论文写进同一个 `index.md`，也不要把多个 `index.md` 直接堆在同一级目录中；必须保持“一篇论文一个文件夹”。

论文目录名没有强制格式，只要与其他论文目录不重复即可。为了便于填写和辨认，建议采用“论文简称 + 第一作者英文名”的形式：

```text
arch2end-weihongliu
mp3-yixiong
powerlens-jiaweigeng
```

如果论文没有明确简称，可以使用一两个标题关键词加第一作者英文名，例如：

```text
edge-inference-san-zhang
```

目录名建议使用小写英文字母、数字和短横线，不使用空格、中文或特殊符号。无需把论文英文全称全部写进目录名；名称保持简短、唯一且创建后尽量不要修改即可。如果仍然重名，可以在末尾增加年份或关键词。

注意：出版物使用 `index.md`，不是作者目录使用的 `_index.md`。

## 完整配置样例

```yaml
---
title: "Example: Efficient Edge LLM Inference"
authors:
  - san-zhang
  - zongwei-zhu
authors_display:
  - San Zhang
  - Si Li
  - Zongwei Zhu*
date: "2026-05-18T00:00:00Z"
publication_types: ["conference"]
publication: ACM/IEEE Design Automation Conference (DAC)
level: CCF-A 会议
url_source: "https://doi.org/10.xxxx/example"
abstract: "这里填写论文摘要。可以保留英文原始摘要，也可以填写准确的中文摘要。"
featured: false
---
```

第二个 `---` 后面通常不需要再写正文。当前出版物列表、首页最新论文和作者详情页均直接读取 YAML 字段。

## 字段说明

| 字段 | 是否必填 | 说明 |
|---|---|---|
| `title` | 是 | 完整论文标题，包含冒号时建议使用双引号 |
| `authors` | 是 | 用于关联实验室成员个人页，填写成员目录对应的 `slug` |
| `authors_display` | 是 | 按论文原始顺序填写完整作者姓名，用于网页展示 |
| `date` | 是 | 用于展示和排序的论文日期，按下方统一口径填写完整 ISO 日期 |
| `publication_types` | 是 | 出版物类型，见下方类型说明 |
| `publication` | 建议 | 期刊、会议或预印本平台名称；会议年份由 `date` 自动生成，不要重复填写 |
| `level` | 否 | CCF 等级及类型，例如 `CCF-A 会议`、`CCF-A 期刊` |
| `url_source` | 建议 | DOI、出版社、会议论文集或 arXiv 链接 |
| `abstract` | 建议 | 论文摘要；作者详情页支持展开查看 |
| `featured` | 建议 | 是否作为代表作；`true` 表示精选，普通论文填写 `false` |

## 代表作与排序

普通论文填写：

```yaml
featured: false
```

需要重点展示的代表作填写：

```yaml
featured: true
```

设置为代表作后：

- 出版物页顶部会出现“代表作”区域并展示所有精选论文；
- 精选论文不会在下方“全部论文”中重复出现；
- 作者个人页会把精选论文排在普通论文之前；
- 多篇精选论文之间按 `date` 倒序排列；
- 如果没有任何 `featured: true` 的论文，出版物页不会显示“代表作”区域。

`featured` 只用于实验室内部选择代表性成果，不等同于论文封面图片，也不会改变作者关联规则。

## `authors`：自动关联个人页面

`authors` 不用于展示完整作者名单，而是决定这篇论文出现在哪些实验室成员的个人页面中。这里必须填写成员的 `slug`：

```yaml
authors:
  - san-zhang
  - zongwei-zhu
```

对应成员目录应为：

```text
content/authors/san-zhang/
content/authors/zongwei-zhu/
```

并且作者 `_index.md` 中分别包含：

```yaml
slug: san-zhang
```

```yaml
slug: zongwei-zhu
```

当前网站约定通常只关联实验室内的第一作者和通讯作者；如果希望其他实验室成员的个人页面也展示该论文，也可以加入其 `slug`。

不要在 `authors` 中填写英文姓名、中文姓名或校外作者。未建立成员目录的作者只需写入 `authors_display`。

## `authors_display`：完整作者名单

`authors_display` 必须按照论文原始署名顺序填写所有作者：

```yaml
authors_display:
  - San Zhang
  - Si Li
  - Zongwei Zhu*
```

通讯作者在姓名末尾添加 `*`：

```yaml
  - Zongwei Zhu*
```

这里填写的是展示文本，不负责关联个人页面。作者个人页会根据其 `name_en` 自动加粗该作者姓名。

## 日期填写规则

网站的出版物总页和首页“最新论文”都按 `date` 倒序排列，因此不要只填写年份对应的 `1 月 1 日`，否则同一年论文的顺序不稳定。

统一使用：

```yaml
date: "2026-05-18T00:00:00Z"
```

日期口径：

1. 会议论文优先填写会议实际召开日期，统一采用会议第一天；这样页面年份会与会议年份保持一致；
2. 期刊论文优先填写正式卷期出版日期，使页面年份与期刊卷期年份一致；
3. 期刊尚未分配正式卷期时，暂时填写出版社首次在线发表日期（如 Early Access、Online First）；
4. 如果会议时间或期刊在线发表时间均未确定，填写论文正式录用日期；正式时间确定后应及时更新；
5. arXiv 论文在没有其他正式会议、期刊日期时，填写首次提交日期；
6. 官方只提供到月份时，使用该月 1 日，例如 `2026-05-01`；
7. 只确定年份、无法核实月份时，可以暂用当年 1 月 1 日，但同年论文之间的排序将无法保证；
8. 不要自行猜测不存在的具体日期。

建议优先从会议官网、出版社页面、录用通知、DOI/Crossref 或 arXiv 核对日期，并按上述优先级选择，而不是简单使用 DOI 的登记时间。

例如某会议于 2026 年 7 月 12–16 日召开，应填写：

```yaml
date: "2026-07-12T00:00:00Z"
```

如果会议日期尚未公布，但论文于 2025 年 11 月 3 日正式录用，可以暂填：

```yaml
date: "2025-11-03T00:00:00Z"
```

待会议时间确定后，再将 `date` 更新为会议第一天。

例如期刊论文于 2025 年 8 月首次在线发表，之后正式编入 2026 年 3 月卷期，应最终填写：

```yaml
date: "2026-03-01T00:00:00Z"
```

如果正式卷期尚未确定，可以暂用在线日期 `2025-08-01`；卷期发布后再更新为正式出版日期。

## 出版物类型

期刊论文：

```yaml
publication_types: ["journal"]
```

会议论文：

```yaml
publication_types: ["conference"]
```

预印本：

```yaml
publication_types: ["preprint"]
```

不要写成：

```yaml
publication_type: article
```

当前主题使用的字段名是复数 `publication_types`，并且值需要写成列表。

## 会议、期刊和等级示例

会议论文：

```yaml
publication: ACM/IEEE Design Automation Conference (DAC)
level: CCF-A 会议
```

页面会根据 `date` 自动显示年份，因此不要写成：

```yaml
publication: DAC 2026
```

否则页面可能出现会议名称中已有 `2026`、后面又自动显示一次 `2026` 的重复情况。会议正式名称中的届次只有在确有需要时才保留，例如 `The 63rd ACM/IEEE Design Automation Conference`；届次和年份都不应替代 `date`。

期刊论文：

```yaml
publication: IEEE Transactions on Computer-Aided Design of Integrated Circuits and Systems (TCAD)
level: CCF-A 期刊
```

没有明确等级时保持空字符串：

```yaml
level: ""
```

## 论文链接

优先填写永久且权威的链接：

```yaml
url_source: "https://doi.org/10.xxxx/example"
```

链接优先级建议为：

1. DOI；
2. 出版社或会议论文集页面；
3. ACL Anthology、USENIX 等官方论文页面；
4. arXiv；
5. 项目主页。

## 新增后自动出现的位置

配置正确后，论文会自动出现在：

- “论文成果”页面；
- 首页“最新论文”（按日期倒序取前 5 篇）；
- `authors` 中所列成员的个人详情页。

不需要在首页、出版物总页或作者文件中再次手动复制论文信息。

## 提交前检查清单

1. 每篇论文使用独立且不重名的简短目录，目录中使用 `index.md`。
2. `title` 是完整论文标题。
3. `authors` 只填写需要关联的实验室成员 `slug`。
4. `authors_display` 包含全部作者且顺序正确。
5. 通讯作者姓名末尾已添加 `*`。
6. `date` 已按“会议召开日 / 期刊正式出版日 / 首次在线日 / 正式录用日”的优先级核实。
7. `publication_types` 使用正确的复数列表格式。
8. `publication`、`level` 和 `url_source` 信息准确。
9. 摘要没有误删引号或破坏 YAML 格式。
10. 不需要在第二个 `---` 后重复填写论文信息。
