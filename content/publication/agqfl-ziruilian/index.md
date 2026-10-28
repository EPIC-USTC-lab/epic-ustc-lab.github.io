---
title: "AGQFL: Communication-efficient Federated Learning via Automatic Gradient Quantization in Edge Heterogeneous Systems"
authors:
  - zirui-lian
  - zongwei-zhu
authors_display:
  - "Zirui Lian"
  - "Jing Cao"
  - "Yanru Zuo"
  - "Weihong Liu"
  - "Zongwei Zhu*"
date: "2021-10-24T00:00:00Z"
publication_types: ["conference"]
publication: "IEEE International Conference on Computer Design (ICCD)"
level: "CCF-B"
url_source: "https://doi.org/10.1109/iccd53106.2021.00089"
abstract: "With the widespread use of artificial intelligent (AI) applications and dramatic growth in data volumes from edge devices, there are currently many works that place the training of AI models onto edge devices. The state-of-the-art edge training framework, federated learning (FL), requires to transfer of a large amount of data between edge devices and the central server, which causes heavy communication overhead. To alleviate the communication overhead, gradient compression techniques are widely used. However, the bandwidth of the edge devices is usually different, causing communication heterogeneity. Existing gradient compression techniques usually adopt a fixed compression rate and do not take the straggler problem caused by the communication heterogeneity into account. To address these issues, we propose AGQFL, an automatic gradient quantization method consisting of three modules: quantization indicator module, quantization strategy module and quantization optimizer module. The quantization indicator module automatically determines the adjustment direction of quantization precision by measuring the convergence ability of the current model. Following the indicator and the physical bandwidth of each node, the quantization strategy module adjusts the quantization precision at run-time. Furthermore, the quantization optimizer module designs a new optimizer to reduce the training bias and eliminate the instability during the training process. Experimental results show that AGQFL can greatly speed up the training process in edge AI systems while maintaining or even improving model accuracy."
featured: false
---
