---
title:
date: 2026-06-10
type: landing

sections:
  - block: hero
    content:
      title: "EPIC 实验室"
      text: |
        **EPIC 实验室** 隶属于中国科学技术大学，致力于人工智能、机器学习、智能系统等方向的研究。

        我们关注高效、可靠、可解释的智能计算方法，并探索其在科学研究、工程系统和社会应用中的价值。

  - block: markdown
    content:
      title: "研究方向"
      text: |
        我们目前关注以下研究方向：

        - 人工智能
        - 机器学习
        - 计算机视觉
        - 多模态学习
        - 大语言模型
        - 智能系统
    design:
      columns: "1"

  - block: collection
    content:
      title: "最新动态"
      count: 5
      filters:
        page_type: post
        order: desc
    design:
      view: card
      columns: "1"

  - block: collection
    content:
      title: "代表论文"
      count: 5
      filters:
        folders:
          - publication
    design:
      view: citation
      columns: "1"
---