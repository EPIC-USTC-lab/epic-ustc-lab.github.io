---
title: "Memory-Efficient Federated Fine-Tuning of LLMs via Block-wise Progressive Training"
authors:
  - qianyue-cao
  - zongwei-zhu
  - boyu-li
  - yi-xiong
  - zirui-lian
authors_display:
  - Qianyue Cao
  - Zongwei Zhu*
  - Boyu Li
  - Yi Xiong
  - Zirui Lian
  - Xuehai Zhou
date: "2026-09-25T00:00:00Z"
publication_types: ["conference"]
publication: "NeurIPS 2026"
level: CCF-A 会议
url_source: "https://neurips.cc/Conferences/2026/Schedule?showEvent=149884"
abstract: >-
  Federated fine-tuning has become a dominant paradigm for privacy-preserving Large Language Model (LLM) adaptation. While integrating Parameter-Efficient Fine-Tuning (PEFT) reduces communication and computational costs, existing methods neglect the peak memory bottlenecks caused by full forward passes through the frozen LLM. This excludes low-memory devices, leading to data loss and suboptimal global performance. In this paper, we propose BP-FedPEFT, a framework utilizing progressive training to decompose the end-to-end computational graph, reducing peak memory to the block level. While enabling low-memory device participation, this paradigm incurs prolonged training latency and introduces growing memory burdens for deep-layer inputs, alongside suffering from cascading feature misalignment due to the absence of global supervision, leading to suboptimal model performance. To ensure efficiency, BP-FedPEFT employs functional-aware overlapping planning coupled with a local-global stability criterion to regulate training steps and communication rounds. To ensure effectiveness, we utilize depth-injected input synthesis and block overlaps to bridge the supervision gap, establishing valid optimization trajectories that align shallow representations with deep functional expectations. We establish theoretical convergence guarantees for BP-FedPEFT. Experiments on a heterogeneous testbed show that BP-FedPEFT supports diverse PEFT methods on dense LLMs, reducing average memory usage by 44.7-76.2%, accelerating training by 2.3-12.6×, and improving accuracy by 3.7-8.7% through inclusive participation.
featured: false
---
