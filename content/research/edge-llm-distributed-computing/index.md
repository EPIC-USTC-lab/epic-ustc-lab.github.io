---
title: 基于 LLM 的端侧智能与分布式计算
date: 2026-07-30
summary: 将模型、上下文与网络视为可调度资源，在动态预算下持续提供可信、低时延、低能耗的智能能力。
share: false
profile: false
---

<div class="research-detail">
  <p class="research-detail__back"><a href="/research/">← 返回研究方向</a></p>

  <p class="research-detail__meta">Direction 02 · Edge LLM and Distributed Computing</p>

  <p class="research-detail__lead">
    本方向将模型、上下文与网络都变成可调度的资源，在动态预算下持续提供可信、低时延、低能耗的智能能力。
  </p>

  <p>
    基于大语言模型（LLM）的端侧智能与分布式计算，正在把智能计算从“云端集中式调用”推进到“模型随设备、数据与网络状态动态迁移和协同”的新范式：低比特原生训练与量化让更强模型进入手机、机器人、汽车与卫星等受限平台；预算感知的上下文系统使模型在给定内存、首 Token 时延、持续生成时延、能耗与温控约束下仍能保持可用的长上下文能力；面向低轨卫星（LEO）星座的协同训推则把多节点并行、联邦/拆分学习和流水线推理扩展到周期性连接、频繁切换和严格功耗限制的空间网络。
  </p>

  <h2 id="model-layer">模型层：低比特原生训练与量化</h2>

  <p>
    研究重心正从“训练后压缩”转向 QAT、FP4 原生预训练与三值/亚 2-bit 架构；真正的门槛是数值稳定性、训练状态精度、硬件格式和内核协同。已有研究 BitLens-QAT 将数据、块分组及目标与量化引起的误差相匹配，以实现高效的 4-bit 以下量化感知训练。
  </p>

  <div class="research-detail__figures">
    <figure class="research-detail__figure">
      <a class="research-detail__zoom" href="/uploads/research/efficientqat.png" title="点击查看大图">
        <img src="/uploads/research/efficientqat.png" alt="EfficientQAT 的两阶段量化感知训练流程">
      </a>
      <figcaption>EfficientQAT 的两阶段量化感知训练流程</figcaption>
    </figure>
    <figure class="research-detail__figure">
      <a class="research-detail__zoom" href="/uploads/research/bitlens-qat.png" title="点击查看大图">
        <img src="/uploads/research/bitlens-qat.png" alt="BitLens-QAT 方法概览">
      </a>
      <figcaption>BitLens-QAT 方法概览</figcaption>
    </figure>
  </div>

  <h2 id="system-layer">系统层：预算感知的端侧长上下文</h2>

  <p>
    端侧长上下文不能只靠扩大窗口，需要把 Prefill、KV Cache、跨轮次状态、DRAM/Flash 等纳入统一预算控制。
  </p>

  <div class="research-detail__figures">
    <figure class="research-detail__figure">
      <a class="research-detail__zoom" href="/uploads/research/llm-flash-memory.png" title="点击查看大图">
        <img src="/uploads/research/llm-flash-memory.png" alt="端侧存储层级与带宽差异">
      </a>
      <figcaption>端侧存储层级与带宽差异</figcaption>
    </figure>
    <figure class="research-detail__figure">
      <a class="research-detail__zoom" href="/uploads/research/minference-sparse-attention.png" title="点击查看大图">
        <img src="/uploads/research/minference-sparse-attention.png" alt="长上下文注意力中的三类动态稀疏模式">
      </a>
      <figcaption>长上下文注意力中的三类动态稀疏模式</figcaption>
    </figure>
  </div>

  <h2 id="network-layer">网络层：面向 LEO 星座的协同训练与推理</h2>

  <p>
    LEO 的连接是可预测但时变的，适合轨道感知调度；训练强调模型新鲜度与异步聚合，推理强调模型切分、激活压缩与故障切换。
  </p>

  <div class="research-detail__figures">
    <figure class="research-detail__figure">
      <a class="research-detail__zoom" href="/uploads/research/fedspace.png" title="点击查看大图">
        <img src="/uploads/research/fedspace.png" alt="卫星与地面站的联邦学习框架">
      </a>
      <figcaption>卫星与地面站的联邦学习框架</figcaption>
    </figure>
    <figure class="research-detail__figure">
      <a class="research-detail__zoom" href="/uploads/research/leo-collaborative-inference.png" title="点击查看大图">
        <img src="/uploads/research/leo-collaborative-inference.png" alt="LEO 星座中的分段 LLM 协同推理">
      </a>
      <figcaption>LEO 星座中的分段 LLM 协同推理</figcaption>
    </figure>
  </div>
</div>
