---
title: "EPipe: Pipeline Inference Framework with High-quality Offline Parallelism Planning for Heterogeneous Edge Devices"
authors:
  - yi-xiong
authors_display:
  - Yi Xiong
  - Weihong Liu
  - Rui Zhang
  - Yulong Zu
  - Zongwei Zhu*
  - Xuehai Zhou*
date: "2024-11-18T00:00:00Z"
publication_types: ["paper-conference"]
publication: ICCAD 2024
level: CCF-B
abstract: "Pipeline parallelism is essential for edge computing as it effectively consolidates the limited resources of edge devices, enabling the deployment of large Deep Neural Network (DNN) models and accelerating inference processes without compromising the performance of models. Accurate computation and communication latency estimation on heterogeneous edge devices is essential for searching for a superior parallelism plan. However, existing heterogeneous pipeline inference approaches either incur substantial resource wastage during online parallelism planning, as they utilize profiling strategies that occupy physical devices; or rely on cost models with inadequate representational capabilities, leading to inaccurate predictions, thereby harming the result of pipeline planning. This paper proposes EPipe, a novel pipeline inference framework that supports high-quality offline planning in heterogeneous edge environments. EPipe integrates two core components: the Task-Device Co-analyzer (TDC) and the Multi-pipeline Parallelism Planner (MPP). TDC utilizes an undirected connected graph to depict the compatibility of DNNs across device groups and precisely estimates inference and communication latencies through fine-grained modeling. Based on TDC, MPP utilizes a dynamic programming-based genetic algorithm to explore multi-pipeline solutions, extending beyond traditional single-pipeline methods. A comprehensive experimental evaluation on an edge testbed confirms the effectiveness of EPipe, demonstrating significant speedups in inference tasks for both task streams and single tasks."
featured: false
---
