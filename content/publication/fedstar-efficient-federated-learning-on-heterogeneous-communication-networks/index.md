---
title: "FedStar: Efficient Federated Learning on Heterogeneous Communication Networks"
authors:
  - zongwei-zhu
authors_display:
  - Jing Cao
  - Ran Wei
  - Qianyue Cao
  - Yongchun Zheng
  - Zongwei Zhu*
  - Cheng Ji
  - Xuehai Zhou
date: "2023-01-01T00:00:00Z"
publication_types: ["article-journal"]
publication: IEEE Transactions on Computer-Aided Design of Integrated Circuits and Systems (TCAD)
level: CCF-A 期刊
url_source: "https://doi.org/10.1109/TCAD.2023.3346274"
abstract: The proliferation of multimedia applications and increased computing power of mobile devices have led to the development of personalized artificial intelligent (AI) applications that utilize the massive user-information residing on them. However, the traditional centralized training paradigm is not applicable in this scenario due to potential privacy risks and high communication overhead. Federated learning (FL) provides an option to these applications. Nevertheless, the heterogeneity of computing and communication latency among devices have posed great challenges to building efficient learning frameworks. Existing optimizations on FL either fail to speed up training on heterogeneous devices or suffer from poor communication efficiency. In this article, we propose FedStar, an efficient FL framework that supports decentralized asynchronous training on heterogeneous communication networks. Considering the heterogeneous computing power in the network, FedStar supports running heterogeneity-aware local steps on each device. What is more, considering the heterogeneous communication latency and possibly unreachable communication path between some devices, FedStar generates a decentralized communication topology that can achieve maximal training throughput. Finally, it adopts weighted aggregation to guarantee high convergence accuracy of global model. Theoretical analysis results show the convergence behavior of FedStar under nonconvex settings. Experimental results show that FedStar can achieve a speedup of 4.81x than the state-of-the-art FL schemes with high convergence accuracy.
featured: false
---
