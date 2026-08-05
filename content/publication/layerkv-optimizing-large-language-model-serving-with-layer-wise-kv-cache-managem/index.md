---
title: "LayerKV: Optimizing Large Language Model Serving with Layer-wise KV Cache Management"
authors:
  - yi-xiong
authors_display:
  - Yi Xiong
  - Hao Wu
  - Changxu Shao
  - Ziqing Wang
  - Rui Zhang
  - Yuhong Guo
  - Junping Zhao
  - Ke Zhang
  - Zhenxuan Pan
date: "2024-01-01T00:00:00Z"
publication_types: ["preprint"]
publication: arXiv
url_source: "https://arxiv.org/abs/2410.00428"
abstract: The expanding context windows in large language models (LLMs) have greatly enhanced their capabilities in various applications, but they also introduce significant challenges in maintaining low latency, particularly in Time to First Token (TTFT). This paper identifies that the sharp rise in TTFT as context length increases is predominantly driven by queuing delays, which are caused by the growing demands for GPU Key-Value (KV) cache allocation clashing with the limited availability of KV cache blocks. To address this issue, we propose LayerKV, a simple yet effective plug-in method that effectively reduces TTFT without requiring additional hardware or compromising output performance, while seamlessly integrating with existing parallelism strategies and scheduling techniques. Specifically, LayerKV introduces layer-wise KV block allocation, management, and offloading for fine-grained control over system memory, coupled with an SLO-aware scheduler to optimize overall Service Level Objectives (SLOs). Comprehensive evaluations on representative models, ranging from 7B to 70B parameters, across various GPU configurations, demonstrate that LayerKV improves TTFT latency up to 69x and reduces SLO violation rates by 28.7%, significantly enhancing the user experience.
featured: false
---
