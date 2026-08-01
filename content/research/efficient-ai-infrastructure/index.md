---
title: 高能效智能计算
date: 2026-07-30
summary: 面向 AI 基础设施中的算子、单机和多机系统，研究软硬件协同设计、AI 编译器、模型轻量化、运行时优化以及高效通信。
share: false
profile: false
---

<div class="research-detail">
  <p class="research-detail__back"><a href="/research/">← 返回研究方向</a></p>

  <p class="research-detail__meta">Direction 01 · AI Infrastructure</p>

  <p class="research-detail__lead">
    本方向关注 AI 基础设施（AI Infra），按照系统规模可划分为算子、单机和多机三个层次。
  </p>


  <p>
    算子 Infra 问题可以划分为高效性和泛化性两个方面，从而衍生出软硬协同设计和 AI 编译器两个方向。单机设备上的核心问题是访存，所有性能问题都源自于硬件元器件在关键路径的等待。解决访存问题可以从需求和供给两方面出发，需求侧方法是模型轻量化技术，供给侧方法可以是运行时的参数调优、提高缓存命中等。
  </p>

  <p>
    多机系统中的核心问题是通信，具体划分为 P2P 通信和集合通信两类。更灵活的路由方法和更高效的硬件设施都能够缓解系统中的通信问题。目前本方向在多机通信和单机访存上均有一定研究，欢迎对 AI Infra 方向感兴趣的同学联系交流。
  </p>

  <h2>研究层次</h2>

  <div class="research-detail__grid">
    <section>
      <h3>算子层</h3>
      <p>围绕高效性与泛化性，开展软硬件协同设计和 AI 编译器研究。</p>
    </section>
    <section>
      <h3>单机层</h3>
      <p>针对访存瓶颈，从模型轻量化、运行时参数调优和缓存命中优化两侧协同推进。</p>
    </section>
    <section>
      <h3>多机层</h3>
      <p>面向 P2P 通信与集合通信，探索更灵活的路由方法和更高效的硬件设施。</p>
    </section>
  </div>

  <figure class="research-detail__figure">
    <a class="research-detail__zoom" href="/uploads/research/efficient-ai-infrastructure.png" title="点击查看大图">
      <img src="/uploads/research/efficient-ai-infrastructure.png" alt="高能效智能计算研究框架">
    </a>
    <figcaption>
      高能效智能计算研究框架：覆盖大语言模型、多模态大模型、视觉大模型、智能体和视频生成大模型等应用，以及分布式训练与推理、资源管理调度、单机部署、存储、量化、剪枝、蒸馏、算子优化、编译器和软硬件协同等关键技术。
    </figcaption>
  </figure>
</div>
