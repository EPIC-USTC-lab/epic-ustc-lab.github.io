---
title: PPFL-A-Parameter-Behavior-Driven-Plug-in-Personalization-Engine-for-Federated-Learning
authors:
  - Qianyue Cao
authors_display:
  - Zongwei Zhu*
  - Zirui Lian
  - Rui Zhang
  - Boyu Li
  - Yi Xiong
  - Xuehai Zhou
date: "2025-11-08T00:00:00Z"
publication_types: ["Conference"]
publication: AAAI2026
level: CCF-A 会议
url_source: "https://doi.org/10.1609/aaai.v40i24.39073"
abstract: Personalized Federated Learning (PFL) customizes models for each client to mitigate challenges from non-IID data, wherein a dominant strategy is model decoupling that partitions models into shared and personalized parts based on architectural priors (e.g., backbone vs. head). However, we reveal a critical flaw in this strategy: it induces ”intrinsic drift,” a performance degradation often more severe than the wellknown client drift, which limits final accuracy. We trace this drift to a steep cliff of high loss emerging from the naive stitching of shared and personalized parts. To address this, we shift from architectural partitioning to a parameter behaviordriven paradigm. We introduce PPFL, an approach that employs a novel soft-fusion strategy guided by parameter-wise behavioral perception. PPFL dynamically infers each parameter’s functional role—whether it behaves more like a ’personalist’ or a ’generalist’ in the current context—by synthesizing its multifaceted behavior observed during local training. Extensive experiments on image, text, and multimodal classification benchmarks show that PPFL outperforms eight state-of-the-art baselines by up to 5.3%. Moreover, it can function as a plug-in module, boosting the accuracy of vanilla FedAvg with a 16.82% absolute gain.
featured: false
---
