---
build:
  render: never
  list: never
  publishResources: false
---

# 新增实验室成员

每位成员准备一个独立资料目录。目录直接以英文姓名标识命名，不需要添加 `content/authors/` 等路径前缀。例如张三的资料目录可以命名为：

```text
san-zhang/
├── _index.md
└── avatar.jpg
```

这里的 `san-zhang` 是成员在网站中的英文姓名标识：全部使用小写字母，名字之间用短横线连接。目录名与 `_index.md` 中的 `slug` 必须完全一致。

如果需要将资料发给网站维护者，可以直接把整个 `san-zhang/` 目录压缩发送。维护者解压后，将该目录放入网站的 `content/authors/` 即可。

头像支持 `avatar.jpg` 或 `avatar.png`，建议使用清晰的近正方形照片；没有头像时网站会显示姓名首字。

## 学生配置样例

```yaml
---
title: 张三
role: 硕士研究生
name_en: San Zhang
superuser: false
organizations:
  - name: 中国科学技术大学 苏州高等研究院
    url: https://sz.ustc.edu.cn/
slug: san-zhang
user_groups:
  - 硕士研究生
summary: ""
bio: 中国科学技术大学软件工程专业2026级硕士研究生，研究方向为边缘智能计算。
interests:
  - 边缘智能计算
  - 大模型推理优化
education:
  courses:
    - degree: 硕士
      institution: 中国科学技术大学苏州高等研究院
      major: 软件工程
      year: 2026
      year_end: 至今
      advisor: 朱宗卫
    - degree: 学士
      institution: 某某大学
      major: 计算机科学与技术
      year: 2022
      year_end: 2026
      advisor: ""
email: example@mail.ustc.edu.cn
office: ""
social:
  - icon: envelope
    icon_pack: fas
    link: mailto:example@mail.ustc.edu.cn
  - icon: github
    icon_pack: fab
    link: "#"
  - icon: graduation-cap
    icon_pack: fas
    link: "#"
  - icon: orcid
    icon_pack: fab
    link: "#"
  - icon: globe
    icon_pack: fas
    link: "#"
advisor: 朱宗卫
enrollment: 2026
graduation_year: ""
current_position: ""
awards:
  - 2025年 研究生国家奖学金
  - 2024年 某某程序设计竞赛一等奖
projects:
  - name: 面向边缘设备的大模型推理优化研究
    years: 2025–2026
    detail: 项目成员
  - name: 某某大学生创新训练项目
    years: 2023–2024
    detail: 主持
---
```

第二个 `---` 后面不需要再写个人简介、教育经历或论文。当前作者详情模板只读取 YAML；论文由出版物数据自动关联。

## 教师配置差异

教师使用：

```yaml
role: 副研究员
user_groups:
  - 教师
is_teacher: true
academic_position: 硕士生导师
supervision: 指导硕士研究生
office: 敏学楼000
homepage: ""
recruitment: ""
weight: 20
```

教师按 `weight` 升序排列，数值越小越靠前。在读博士、硕士按 `enrollment` 升序排列，学生的 `weight` 不参与团队页排序。

## 字段说明

| 字段 | 是否必填 | 说明 |
|---|---|---|
| `title` | 是 | 中文姓名 |
| `name_en` | 建议 | 英文姓名 |
| `slug` | 是 | 唯一标识，必须与成员目录名一致 |
| `role` | 是 | `博士研究生`、`硕士研究生`或教师职称 |
| `user_groups` | 是 | `教师`、`博士研究生`、`硕士研究生`、`已毕业校友`之一 |
| `superuser` | 是 | 一般为 `false`，网站负责人可设为 `true` |
| `organizations` | 建议 | 所属机构及机构链接 |
| `summary` | 否 | 卡片补充说明；空值不会显示，校友摘要由模板自动生成 |
| `bio` | 建议 | 个人详情页的完整简介 |
| `interests` | 建议 | 研究方向，同时作为成员卡片标签 |
| `education.courses` | 建议 | 教育经历列表，可填写多段 |
| `degree` | 建议 | 学位层次，统一填写`博士`、`硕士`或`学士`；`year_end: 至今` 已表示在读 |
| `year` / `year_end` | 建议 | 教育经历起止年份 |
| `advisor` | 学生建议 | 导师；顶层字段用于基本信息，教育经历内字段用于时间线 |
| `enrollment` | 学生必填 | 入学年份，用于显示“20xx级”和在读成员排序 |
| `email` | 建议 | 个人详情页邮箱；同时更新 `social` 中的 `mailto:` 链接 |
| `office` | 否 | 办公地点 |
| `social` | 建议 | 社交链接配置；保留示例结构，只需填写每一项的 `link` |
| `weight` | 仅教师建议 | 教师排序，越小越靠前；学生和校友无需填写 |
| `awards` | 否 | 获奖与荣誉列表，无内容时使用 `[]` |
| `projects` | 否 | 项目经历列表，无内容时使用 `[]` |
| `graduation_year` | 校友必填 | 毕业年份；在读时保持空字符串 |
| `current_position` | 校友建议 | 毕业去向；在读时保持空字符串 |
| `is_teacher` | 教师必填 | 教师设为 `true`，启用教师详情布局 |
| `academic_position` | 教师可选 | 学术职务 |
| `supervision` | 教师可选 | 研究生指导信息 |
| `recruitment` | 教师可选 | 教师个人招生说明 |

## 项目与荣誉写法

```yaml
awards:
  - 2026年 博士生国家奖学金
  - 2025年 安徽省优秀毕业生

projects:
  - name: 国家自然科学基金面上项目
    years: 2025–2028
    detail: 参与
  - name: 某某科研项目
    years: 2024–2026
    detail: 项目成员
```

## 社交链接

`social` 的图标和类型已经在样例中配置好，通常不需要修改 `icon` 和 `icon_pack`，只需把对应项目的 `link` 替换成自己的真实链接：

```yaml
social:
  - icon: envelope
    icon_pack: fas
    link: mailto:example@mail.ustc.edu.cn
  - icon: github
    icon_pack: fab
    link: https://github.com/example
  - icon: graduation-cap
    icon_pack: fas
    link: https://scholar.google.com/citations?user=example
  - icon: orcid
    icon_pack: fab
    link: https://orcid.org/0000-0000-0000-0000
  - icon: globe
    icon_pack: fas
    link: https://example.com/
```

没有某项链接时保留 `link: "#"` 即可：团队页会显示禁用图标，个人详情页不会显示该链接。

邮箱需要同时填写两处，内容保持一致：

```yaml
email: example@mail.ustc.edu.cn

social:
  - icon: envelope
    icon_pack: fas
    link: mailto:example@mail.ustc.edu.cn
```

图标约定：

- `envelope`：邮箱
- `github`：GitHub
- `graduation-cap`：Google Scholar
- `orcid`：ORCID
- `globe`：个人主页

## 自动关联论文

作者文件不填写论文列表。只需在对应的 `content/publication/.../index.md` 中加入成员 `slug`：

```yaml
authors:
  - san-zhang
  - zongwei-zhu
```

论文便会自动出现在成员详情页。`authors_display` 只控制显示姓名和强调样式，不负责关联。
