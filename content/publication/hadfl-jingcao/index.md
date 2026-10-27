---
title: "HADFL: Heterogeneity-aware Decentralized Federated Learning Framework"
authors:
  - jing-cao
  - zongwei-zhu
authors_display:
  - "Jing Cao"
  - "Zirui Lian"
  - "Weihong Liu"
  - "Zongwei Zhu*"
  - "Cheng Ji"
date: "2021-12-05T00:00:00Z"
publication_types: ["conference"]
publication: "ACM/IEEE Design Automation Conference (DAC)"
level: "CCF-A 会议"
url_source: "https://doi.org/10.1109/dac18074.2021.9586101"
abstract: "Federated learning (FL) supports training models on geographically distributed devices. However, traditional FL systems adopt a centralized synchronous strategy, putting high communication pressure and model generalization challenge. Existing optimizations on FL either fail to speedup training on heterogeneous devices or suffer from poor communication efficiency. In this paper, we propose HADFL, a framework that supports decentralized asynchronous training on heterogeneous devices. The devices train model locally with heterogeneity-aware local steps using local data. In each aggregation cycle, they are selected based on probability to perform model synchronization and aggregation. Compared with the traditional FL system, HADFL can relieve the central server’s communication pressure, efficiently utilize heterogeneous computing power, and can achieve a maximum speedup of 3.15x than decentralized-FedAvg and 4.68x than Pytorch distributed training scheme, respectively, with almost no loss of convergence accuracy."
featured: false
---
