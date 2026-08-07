---
build:
  render: never
  list: never
  publishResources: false
---

# 新增新闻与动态

每则新闻使用一个独立文件夹，文件夹中必须包含一份 `index.md`。如需添加图片，也放在同一文件夹中。

```text
lab-award-2026/
├── index.md
├── featured.jpg
└── group-photo.jpg
```

新闻目录名没有强制格式，只要不与已有目录重复即可。建议使用能够概括新闻内容的简短英文名称，并用短横线连接，例如：

```text
lab-award-2026
academic-visit-2026
ppfl-aaai-2026
```

目录名建议只使用小写英文字母、数字和短横线，不使用空格、中文或特殊符号。创建并发布后尽量不要修改目录名，否则新闻网址也会随之改变。

如果需要一次提交多则新闻，请将每则新闻分别放在独立文件夹中，再把这些文件夹放入同一个总目录后压缩发送。不要把多则新闻写入同一个 `index.md`。

## 完整样例

```markdown
---
title: "获奖喜讯｜实验室团队获得某某竞赛一等奖"
date: 2026-08-07
summary: "实验室团队在某某竞赛中获得一等奖。"
authors:
  - zongwei-zhu
  - san-zhang
---

近日，实验室团队参加了某某竞赛，并获得一等奖。

本次工作围绕……展开，主要完成了……。

![团队合影](group-photo.jpg)

## 相关信息

- 参赛成员：张三、李四
- 指导教师：朱宗卫
- 比赛时间：2026年8月

[查看团队成员](/people/) · [了解相关研究方向](/research/)
```

第一个和第二个 `---` 之间是新闻配置；第二个 `---` 后面是新闻正文。正文使用 Markdown 编写，会显示在新闻详情页中。

## 配置字段

| 字段 | 是否必填 | 说明 |
|---|---|---|
| `title` | 是 | 新闻标题；包含冒号等特殊符号时建议使用双引号 |
| `date` | 是 | 新闻日期，也是首页和动态页的排序依据 |
| `summary` | 建议 | 新闻摘要，显示在首页“最新动态”和动态列表中 |
| `authors` | 否 | 关联实验室成员，填写成员目录对应的标识；不填则不显示作者卡片 |

日期统一使用：

```yaml
date: 2026-08-07
```

优先填写事件实际发生日期；如果事件持续多天，建议填写第一天。如果新闻对应录用、获奖或正式通知，也可以填写官方公布日期。同一天的多则新闻没有额外的固定排序规则。

## 关联实验室成员

如需在新闻详情页底部显示相关成员，在 `authors` 中填写成员目录名：

```yaml
authors:
  - zongwei-zhu
  - boyu-li
```

它们分别对应：

```text
content/authors/zongwei-zhu/
content/authors/boyu-li/
```

这里不要填写中文姓名或展示用的英文姓名。多个成员按照 `authors` 中的顺序显示。

如果新闻不需要关联具体成员，直接省略 `authors`，不要填写空姓名：

```yaml
---
title: "实验室通知｜……"
date: 2026-08-07
summary: "……"
---
```

未填写 `authors` 时，新闻详情页不会默认显示任何成员。新闻中的作者关联不会从论文或正文中自动推断。

## 添加站内链接

链接到网站内其他页面时，推荐使用以 `/` 开头的站内路径，不要写 `localhost:1313`，也不需要填写网站域名。

常用页面：

```markdown
[返回首页](/)
[查看研究方向](/research/)
[查看团队成员](/people/)
[查看全部出版物](/publication/)
[查看最新动态](/post/)
[查看加入我们](/contact/)
```

链接到某位成员时，路径使用该成员的目录标识：

```markdown
[查看朱宗卫老师的个人主页](/author/zongwei-zhu/)
```

链接到某篇论文时，路径使用该论文的目录名：

```markdown
[查看 PPFL 论文详情](/publication/ppfl-a-parameter-behavior-driven-plug-in-personalization-engine-for-federated-le/)
```

例如，论文目录为：

```text
content/publication/example-paper-san-zhang/
```

则链接写成：

```markdown
[查看论文详情](/publication/example-paper-san-zhang/)
```

站内路径末尾建议保留 `/`。添加后应在本地预览中点击链接，确认目标页面存在。

## 添加外部链接

外部网站需要填写完整的 `https://` 地址：

```markdown
[访问会议官网](https://example.com/)
[阅读论文](https://doi.org/10.xxxx/example)
```

不要把外部链接写成：

```markdown
[访问会议官网](/example.com/)
```

## 添加图片

### 新闻封面

将封面图片放在新闻目录中并命名为 `featured.jpg` 或 `featured.png`：

```text
lab-award-2026/
├── index.md
└── featured.jpg
```

封面建议使用清晰的横向图片。网站会自动处理页面所需尺寸，不要把 Hugo 自动生成的 `_gen` 或 `resources` 文件一起提交。

### 正文图片

正文图片同样放在新闻目录中，然后使用相对文件名引用：

```markdown
![实验室团队合影](group-photo.jpg)
```

图片说明应准确描述图片内容。不要使用服务器本地的绝对文件路径，例如 `/home/.../group-photo.jpg`，否则部署后无法访问。

## Markdown 正文常用写法

二级标题：

```markdown
## 活动概况
```

项目列表：

```markdown
- 时间：2026年8月7日
- 地点：中国科学技术大学苏州高等研究院
- 参与成员：张三、李四
```

加粗文字：

```markdown
本次活动获得了 **一等奖**。
```

正文可以包含多个段落、标题、列表、图片和链接，但不建议直接粘贴 Word 生成的 HTML。新闻详情页目前不显示社交分享按钮。

## 发布前检查

发布前建议确认：

1. 一则新闻对应一个独立文件夹和一份 `index.md`；
2. `title`、`date` 和 `summary` 内容准确；
3. `authors` 只填写网站中已存在的成员目录标识；
4. 站内链接以 `/` 开头，并且目标页面可以正常打开；
5. 外部链接包含完整的 `https://`；
6. 图片位于新闻目录中，文件名与 Markdown 引用完全一致；
7. 图片和正文中不包含不宜公开或涉密信息；
8. 本地预览确认首页、动态列表和新闻详情页显示正常。
