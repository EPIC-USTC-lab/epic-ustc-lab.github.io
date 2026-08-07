---
# Leave the homepage title empty to use the site title
title:
date: 2022-10-24
type: landing

sections:
  - block: hero
    content:
      title: |
        EPIC Lab
      text: |
        **EPIC 实验室**（**E**nergy-efficient · **P**arallel · **I**ntelligent · **C**omputing）隶属于中国科学技术大学 · 苏州高等研究院，致力于<span class="epic-hero-accent">高能效智能计算</span>、<span class="epic-hero-accent">端侧智能与分布式计算</span>等方向的研究。

        我们关注模型、系统与网络的协同设计，探索低时延、低能耗的智能计算方法。
    design:
      css_class: epic-ai-hero
      background:
        image:
          filename: epic-ai-hero.png
          filters:
            brightness: 1
          parallax: false
          position: center
          size: cover
          text_color_light: true
      spacing:
        padding: ['112px', '0', '112px', '0']
  
  - block: markdown
    content:
      title: 研究方向
      subtitle: 聚焦高效、可靠、可部署的智能计算系统
      text: |
        ### 高能效智能计算

        面向 AI 基础设施中的算子、单机和多机系统，研究软硬件协同设计、AI 编译器、模型轻量化、运行时优化以及高效通信，重点解决计算、访存与通信瓶颈。

        ### 基于 LLM 的端侧智能与分布式计算

        将模型、上下文与网络视为可调度资源，围绕低比特模型、预算感知的长上下文系统和低轨卫星协同训推，在动态资源约束下持续提供可信、低时延、低能耗的智能能力。

        {{% cta cta_link=./research/ cta_text=查看研究方向详情 %}}
    design:
      columns: '1'

  - block: people
    content:
      title: 团队成员
      subtitle: 教师团队
      text: |
        实验室教师团队围绕高能效智能计算、端侧智能与分布式计算开展研究与人才培养。
      user_groups:
        - 教师
      sort_by: Params.weight
      sort_ascending: true
    design:
      show_interests: true
      show_role: true
      show_social: true
      show_avatar: true
      text_align: center

  - block: collection
    content:
      title: 最新论文
      text: ""
      count: 5
      filters:
        folders:
          - publication
      offset: 0
      order: desc
    design:
      view: citation
      columns: '1'

  - block: collection
    content:
      title: 最新动态
      subtitle:
      text:
      count: 5
      filters:
        author: ''
        category: ''
        exclude_featured: false
        publication_type: ''
        tag: ''
      offset: 0
      order: desc
      page_type: post
    design:
      view: card
      columns: '1'

  - block: markdown
    enabled: false  # 涉及合作信息，确认可公开后改为 true
    content:
      title: 合作伙伴
      subtitle: 产学研合作
      text: |
        <img src="/uploads/home/partners.png" alt="EPIC 实验室合作伙伴" loading="lazy">
    design:
      columns: '1'
      css_class: epic-partners

---
