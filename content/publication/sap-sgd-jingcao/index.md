---
title: "SAP-SGD: Accelerating Distributed Parallel Training with High Communication Efficiency on Heterogeneous Clusters"
authors:
  - jing-cao
  - zongwei-zhu
authors_display:
  - "Jing Cao"
  - "Zongwei Zhu*"
  - "Xuehai Zhou"
date: "2021-09-07T00:00:00Z"
publication_types: ["conference"]
publication: "IEEE International Conference on Cluster Computing (CLUSTER)"
level: "CCF-B 会议"
url_source: "https://doi.org/10.1109/cluster48925.2021.00023"
abstract: "Due to rapid product iterations and high prices, the phenomenon that GPUs in clusters have heterogeneous configurations is widespread. However, existing parallel training mechanisms perform poorly on heterogeneous clusters. The synchronous parallel mechanism can cause fast GPUs to wait for the slowest GPU for synchronization, thus wasting their computing power. The asynchronous parallel mechanism has communication bottlenecks and can exacerbate the straggler problem, causing increased training iterations and even incorrect convergence. In this paper, we introduce a communication-efficient semi-asynchronous parallel mechanism (SAP-SGD), which can take full advantage of the acceleration effect of asynchronous strategy on heterogeneous training and can constrain the straggler problem by using interval global synchronization. A novel weighted aggregation strategy is proposed to aggregate the model parameters with different versions. Experimental results show that our proposed strategy can achieve up to $6.74\\times$ speedup on training time, with almost no accuracy decrease."
featured: false
---
