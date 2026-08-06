---
title: 基于 LLM 的端侧智能与分布式计算
date: 2026-07-30
weight: 20
direction: 方向二
summary: 将模型、上下文与网络视为可调度资源，在动态预算下提供低时延、低能耗的持续智能能力。
lead: 将模型、上下文与网络共同视为可调度资源，让大模型在设备受限、预算变化和网络动态的环境中保持可用、高效与可靠。
cover: /uploads/research/leo-collaborative-inference.png
cover_alt: LEO 星座中的分段大模型协同推理
keywords:
  - 低比特模型
  - 端侧长上下文
  - 分布式训推
  - 星座协同
overview: 端侧智能正在从“调用云端模型”转向“模型随设备、数据和网络状态动态部署与协同”。这一变化要求模型压缩、运行时系统和分布式网络不再独立优化，而是共同满足内存、时延、能耗、温控和连接质量等约束。
highlights:
  - title: 模型可部署
    text: 通过低比特训练与量化降低模型的计算和存储成本。
  - title: 上下文可持续
    text: 在动态资源预算下协调 Prefill、KV Cache 与分层存储。
  - title: 网络可协同
    text: 面向时变连接完成模型切分、任务调度和故障切换。
sections:
  - id: model-layer
    title: 模型层：低比特原生训练与量化
    text: 研究重心从训练后压缩进一步延伸到量化感知训练、低精度原生训练和亚 2-bit 模型。核心问题包括数值稳定性、训练状态精度、硬件数据格式与计算内核协同，从而让更强的模型进入手机、机器人、汽车和卫星等资源受限平台。
    images:
      - src: /uploads/research/efficientqat.png
        alt: EfficientQAT 的两阶段量化感知训练流程
        caption: EfficientQAT：面向大模型的两阶段量化感知训练流程。
      - src: /uploads/research/bitlens-qat.png
        alt: BitLens-QAT 方法概览
        caption: BitLens-QAT：针对低于 4-bit 量化误差的训练方法。
  - id: system-layer
    title: 系统层：预算感知的端侧长上下文
    text: 长上下文能力不能只依靠扩大窗口。我们关注如何在给定内存、首 Token 时延、持续生成时延和能耗预算下，统一协调 Prefill、KV Cache、跨轮次状态以及 DRAM、Flash 等存储层次。
    images:
      - src: /uploads/research/llm-flash-memory.png
        alt: 端侧存储层级与带宽差异
        caption: 端侧分层存储具有显著不同的容量、带宽与访问代价。
      - src: /uploads/research/minference-sparse-attention.png
        alt: 长上下文注意力中的三类动态稀疏模式
        caption: 利用动态稀疏模式降低长上下文注意力计算开销。
  - id: network-layer
    title: 网络层：面向 LEO 星座的协同训练与推理
    text: 低轨卫星网络的连接具有可预测但持续变化的特点。训练侧关注模型新鲜度、异步聚合和通信机会利用；推理侧关注模型切分、激活压缩、轨道感知调度与故障切换，使多节点协同适应周期性连接和严格功耗约束。
    images:
      - src: /uploads/research/fedspace.png
        alt: 卫星与地面站的联邦学习框架
        caption: 面向卫星与地面站协同的联邦学习框架。
      - src: /uploads/research/leo-collaborative-inference.png
        alt: LEO 星座中的分段大模型协同推理
        caption: LEO 星座中的模型切分与大模型协同推理。
share: false
profile: false
---
