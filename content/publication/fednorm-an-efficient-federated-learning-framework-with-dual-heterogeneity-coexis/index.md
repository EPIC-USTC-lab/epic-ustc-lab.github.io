---
title: "FedNorm: An Efficient Federated Learning Framework with Dual Heterogeneity Coexistence on Edge Intelligence Systems"
authors:
  - zirui-lian
  - zongwei-zhu
authors_display:
  - Zirui Lian
  - Weihong Liu
  - Jing Cao
  - Zongwei Zhu*
  - Xuehai Zhou
date: "2022-12-19T00:00:00Z"
publication_types: ["conference"]
publication: ICCD 2022
level: CCF-B
abstract: Federated learning (FL) is an emerging distributed learning paradigm, which aims to train machine learning models on geo-decentralized edge devices while keeping the training data stored locally. However, due to the scattered and diverse properties of edge devices, FL is often accompanied by typical heterogeneous features. One of the key challenges is statistical heterogeneity (aka non-independent identically distributed data, Non-IID), which leads to severe client-drift problem and unstable convergence. Moreover, the computational heterogeneity of devices can result in large computation time variation and thus exacerbate client-drift through inconsistent local training steps. The previous studies either ignore the client-drift problem or ignore the scatter in local gradient information, causing limited optimization effect. This paper proposes FedNorm framework to enable training Non-IID data on heterogeneous devices efficiently. First, a local model consistency update method is introduced to mitigate client-drift by allowing heterogeneous edge devices to implement different local training steps. Next, a federated gradient normalization method is introduced to reduce gradient scattering and achieves stable convergence of the model by balancing the gradient information of each edge device. We conducted extensive ablation experiments on different training tasks and training platforms with dual heterogeneity. The experimental results show that FedNorm achieves 1.52 x -3.52x speedup on convergence ratio and 7.38%-13.90% improvement in accuracy, compared to the state-of-the-art frameworks on CIFAR10.
featured: false
---
