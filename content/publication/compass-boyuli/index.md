---
title: "Compass: Co-Exploration of Mapping and Hardware for Heterogeneous Multi-Chiplet Accelerators Targeting LLM Inference Service Workloads"
authors:
  - boyu-li
  - zongwei-zhu
authors_display:
  - Boyu Li
  - Zongwei Zhu*
  - Qianyue Cao
  - Xi Li
  - Xuehai Zhou
date: "2026-11-11T00:00:00Z"
publication_types: ["journal"]
publication: IEEE Transactions on Computer-Aided Design of Integrated Circuits and Systems (TCAD)
level: CCF-A
url_source: "https://doi.org/10.1109/TCAD.2026.3753182"
abstract: "Large language models (LLMs) bring huge computational demands, which makes multi-chiplet accelerators that can integrate large-scale computing resources a powerful solution. However, existing design space exploration (DSE) efforts for such accelerators primarily focus on traditional CNN/Transformer workloads and fall short in supporting the highly dynamic behavior of real-world LLM inference services. This dynamic nature manifests in two key aspects: 1) Mixed request types: the prefill and decode phases exhibit significantly different computational patterns and are frequently interleaved by modern system-level service schedulers; 2) Variable sequence lengths: the sequence length differences across requests can span several orders of magnitude, rendering padding-based assumptions inefficient. Moreover, many prior works assume homogeneous chiplets and overlook the potential beneficial interaction between LLM dynamics and heterogeneous chiplet architectures. To bridge this gap, we introduce Compass, a coexploration framework designed to optimize mapping strategies and hardware design for multi-chiplet accelerators, specifically tailored for dynamic LLM workloads. First, we propose a computation execution graph-based mapping encoding scheme that decouples micro-batch and layer dimensions, enabling fine-grained execution control on heterogeneous chiplets and flexibly representing various parallelism strategies. Second, based on this scheme, we develop the Compass framework itself, which integrates an evaluation engine, a mapping generation engine based on genetic algorithm, and a hardware sampling engine based on Bayesian optimization, enabling fast and flexible cross-level co-design. Compared with the SOTA DSE works Gemini and MOHaM, Compass reduces latency by 63.92% and energy by 40.32% on average in various scenarios, with only a 3.11% increase in monetary cost. Furthermore, we combine Compass with cutting-edge inference service scheduling strategies such as Chunked Prefill, demonstrating the mutual influence between scheduling policies and multi-chiplet accelerators."
featured: false
---
