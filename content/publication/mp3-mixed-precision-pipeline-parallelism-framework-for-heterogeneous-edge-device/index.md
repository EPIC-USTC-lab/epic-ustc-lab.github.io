---
title: "MP3: Mixed-Precision Pipeline Parallelism Framework for Heterogeneous Edge Devices"
authors:
  - yi-xiong
  - zongwei-zhu
authors_display:
  - Yi Xiong
  - Weihong Liu
  - Boyu Li
  - Qianyue Cao
  - Zongwei Zhu*
  - Jiawei Geng
  - Rui Zhang
  - Yulong Zu
  - Xuehai Zhou
date: "2026-02-10T00:00:00Z"
publication_types: ["journal"]
publication: IEEE Transactions on Computer-Aided Design of Integrated Circuits and Systems (TCAD)
level: CCF-A 期刊
url_source: "https://doi.org/10.1109/TCAD.2026.3663279"
abstract: "Owing to the inherent advantages of edge computing in latency, privacy, and always-on availability, Deep Neural Network (DNN) tasks are progressively shifting to edge devices. However, limited edge resources pose significant challenges for deploying large DNNs. Pipeline parallelism (PP) and post-training quantization (PTQ) are essential techniques for addressing these resource constraints, and mainstream frameworks (e.g., DeepSpeed, PyTorch) encapsulate them independently. Nonetheless, this decoupled treatment inevitably traps the optimization process into local optima and results in inferior throughput-accuracy trade-offs in heterogeneous edge environments, due to the natural circular dependency between the PP and PTQ optimization processes. To this end, we propose MP3, a novel framework for joint PP-PTQ optimization in heterogeneous edge environments. MP3 integrates three core components: (1) Task-Device Co-analyzer (TDC) utilizes a fine-grained modeling method to estimate computation and communication latencies precisely. (2) Information-Fused Accuracy Proxy (FAP) characterizes quantized DNN accuracy through a unified proxy combining intra-layer and inter-layer information, with a data-driven fusion function search strategy. (3) Pipeline Quantization Co-optimizer (PQC), leveraging latency estimates from TDC and accuracy characterizations from FAP, navigates the joint optimization space effectively by formulating it as a Constraint Programming (CP) problem. A comprehensive experimental evaluation on an edge testbed confirms the effectiveness of MP3, demonstrating that it lies on a superior Pareto curve (achieving up to 3.2x throughput speedup with accuracy drop within 1%) and exhibits robust adaptability across heterogeneous devices."
featured: false
---
