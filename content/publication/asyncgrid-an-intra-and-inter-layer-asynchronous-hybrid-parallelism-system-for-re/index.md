---
title: "AsyncGrid: An Intra- and Inter-Layer Asynchronous Hybrid Parallelism System for Responsive Edge LLM Inference"
authors:
  - yi-xiong
  - zongwei-zhu
authors_display:
  - Yi Xiong
  - Rui Zhang
  - Yulong Zu
  - Weihong Liu
  - Zongwei Zhu*
  - Jiawei Geng
  - Boyu Li
  - Qianyue Cao
  - Xuehai Zhou
date: "2025-10-21T00:00:00Z"
publication_types: ["journal"]
publication: IEEE Transactions on Computer-Aided Design of Integrated Circuits and Systems (TCAD)
level: CCF-A 期刊
url_source: "https://doi.org/10.1109/TCAD.2025.3624135"
abstract: "Edge deployment of large language models (LLMs) is increasingly attractive due to its advantages in privacy, customization, and availability. However, edge environments face significant challenges in reducing time-to-first-token (TTFT). TTFT consists of: 1) queuing delay and 2) prefill latency, both of which are exacerbated by edge-resource constraints. The substantial computational demands of LLM inference grow superlinearly with prompt length, causing high prefill latency; and limited edge resources restrict prefill throughput, preventing the timely handling of incoming requests, thereby exacerbating queuing delays. Model parallelism is a commonly used solution in cloud-based systems, but directly applying it to edge environments proves ineffective. Intralayer parallelism (e.g., tensor/sequence parallelism (SP)) can reduce prefill latency but suffers from frequent global synchronization, which bottlenecks prefill throughput due to edge-limited interconnection bandwidth. Interlayer parallelism (e.g., pipeline parallelism (PP)) improves prefill throughput via fully asynchronous execution but retains high prefill latency due to stage-wise serialized computation. To address this dilemma, this article leverages the properties of the causal attention mechanism in LLMs and proposes intralayer asynchronous parallelism (IAP), which performs intralayer parallel computations to reduce prefill latency while avoiding global synchronization to mitigate prefill throughput bottlenecks. Moreover, considering communication sensitivity in intralayer parallelism, this article integrates IAP with interlayer asynchronous parallelism into a unified plan space. This hybrid parallelism adapts to diverse hardware and request loads, enabling more effective TTFT optimization. To enable the end-to-end implementation of this hybrid parallelism, this article proposes AsyncGrid, an LLM inference system tailored for responsive edge LLM inference. AsyncGrid: 1) models runtime overheads through a performance profiler; 2) employs an integer programming (IP) formulation to optimize execution plan, with the objective of minimizing latency while meeting throughput requirements; and 3) implements fine-grained communication optimization (FCO) during runtime. A comprehensive evaluation on an edge testbed demonstrates AsyncGrid's significant advantages over existing methods, achieving substantial improvements in both homogeneous and heterogeneous settings."
featured: false
---
