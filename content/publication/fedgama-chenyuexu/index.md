---
title: "FedGAMA: Federated Learning on Heterogeneous and Long-Tailed Data via Group-Wise Asymmetric Masked Aggregation"
authors:
  - chenyue-xu
  - zongwei-zhu
authors_display:
  - Chenyue Xu
  - Zongwei Zhu*
  - Qianyue Cao
  - Rui Zhang
  - Xuehai Zhou*
date: "2026-07-17T00:00:00Z"
publication_types: ["conference"]
publication: Knowledge Science, Engineering and Management (KSEM)
level: CCF-C 会议
url_source: "http://dx.doi.org/10.1007/978-981-92-2759-4_18"
abstract: "Real-world Federated Learning (FL) deployments face the coupled challenges of data heterogeneity and long-tailed distributions. This creates a dilemma: prioritizing global long-tailed optimization yields a robust generic model but fails to adapt to client-specific heterogeneous distributions; conversely, relying solely on personalization is ineffective because the misalignment between global and local tail definitions prevents clients from learning critical shared representations. Existing approaches typically isolate these challenges, addressing either global imbalance or personalization on balanced data, thus failing to reconcile the conflict between generic robustness and local specificity. To address this, we propose FedGAMA (Federated Group-wise Asymmetric Masked Aggregation), a novel framework that decouples representation learning from classifier re-balancing to simultaneously enhance global and personalized performance. First, to resolve the misalignment of tail definitions, it employs a frozen Global Anchor Classifier (GAC) for robust feature extraction and a Global Probing Classifier (GPC) to estimate global distributions. Based on the GPC weight norms, it partitions head and tail classes to establish alignment of tail definitions for subsequent targeted optimization. Second, to reconcile the conflict between global and local optimization, it introduces Group-wise Asymmetric Masked Aggregation, which updates head classes universally while restricting tail updates to relevant clients, shielding tail knowledge from gradient noise. Extensive experiments demonstrate that FedGAMA outperforms state-of-the-art Federated Long-Tailed and Personalized FL methods."
featured: false
---