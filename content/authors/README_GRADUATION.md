---
build:
  render: never
  list: never
  publishResources: false
---

# 将在读成员改为已毕业校友

毕业时不需要新建作者文件，也不要修改 `slug`、目录名、`role` 或 `enrollment`。例如原配置为：

```yaml
role: 硕士研究生
user_groups:
  - 硕士研究生
enrollment: 2023
graduation_year: ""
current_position: ""
```

改为：

```yaml
role: 硕士研究生
user_groups:
  - 已毕业校友
enrollment: 2023
graduation_year: 2026
current_position: 字节跳动
```

同时将本段教育经历的 `year_end` 从 `至今` 改为实际毕业年份：

```yaml
education:
  courses:
    - degree: 硕士
      institution: 中国科学技术大学苏州高等研究院
      major: 软件工程
      year: 2023
      year_end: 2026
      advisor: 朱宗卫
```

建议同步更新 `bio`，将“在读”描述改成毕业去向，例如：

```yaml
bio: 硕士毕业于中国科学技术大学苏州高等研究院，现就职于字节跳动。
```

## 页面自动生成的内容

校友卡片会根据结构化字段自动显示：

```text
2023级 硕士研究生
2026届，毕业就职于字节跳动
```

因此校友不需要手写 `summary`，保留：

```yaml
summary: ""
```

即可。校友按以下规则排序：

1. `graduation_year` 降序，最近毕业的届别在前；
2. 同一届按 `enrollment` 升序，入学更早的在前；
3. 同届且同级时不强制规定先后。

## 毕业时检查清单

1. 将 `user_groups` 改为 `已毕业校友`。
2. 填写 `graduation_year`。
3. 填写 `current_position`；暂未确定可保持空字符串。
4. 将最高学历经历的 `year_end: 至今` 改成毕业年份。
5. 更新 `bio` 中的在读状态和毕业去向。
6. `role` 保持 `博士研究生` 或 `硕士研究生`。
7. `enrollment`、`slug` 和目录名保持不变。
8. 无需维护论文列表，原有论文关联不会受影响。
