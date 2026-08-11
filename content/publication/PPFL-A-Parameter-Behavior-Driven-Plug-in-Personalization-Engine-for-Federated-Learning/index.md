---
title: "PPFL: A Parameter Behavior-Driven Plug-in Personalization Engine for Federated Learning"
authors:
  - qianyue-cao
  - zongwei-zhu
authors_display:
  - Qianyue Cao
  - Zongwei Zhu*
  - Zirui Lian
  - Rui Zhang
  - Boyu Li
  - Yi Xiong
  - Xuehai Zhou
date: "2026-03-14T00:00:00Z"
publication_types: ["conference"]
publication: AAAI
level: CCF-A 会议
url_source: "https://doi.org/10.1609/aaai.v40i24.39073"
abstract: "Personalized Federated Learning (PFL) customizes models for each client to mitigate challenges from non-IID data, wherein a dominant strategy is model decoupling that partitions models into shared and personalized parts based on architectural priors (e.g., backbone vs. head). However, we reveal a critical flaw in this strategy: it induces \"intrinsic drift,\" a performance degradation often more severe than the well-known client drift, which limits final accuracy. We trace this drift to a steep cliff of high loss emerging from the naive stitching of shared and personalized parts. To address this, we shift from architectural partitioning to a parameter behavior-driven paradigm. We introduce PPFL, an approach that employs a novel soft-fusion strategy guided by parameter-wise behavioral perception. PPFL dynamically infers each parameter's functional role—whether it behaves more like a 'personalist' or a 'generalist' in the current context—by synthesizing its multifaceted behavior observed during local training. Extensive experiments on image, text, and multimodal classification benchmarks show that PPFL outperforms eight state-of-the-art baselines by up to 5.3%. Moreover, it can function as a plug-in module, boosting the accuracy of vanilla FedAvg with a 16.82% absolute gain."
featured: false
---
