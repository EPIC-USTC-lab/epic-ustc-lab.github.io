---
title: 朱宗卫
role: 研究员、博士生导师
name_en: Zongwei Zhu
superuser: true
organizations:
  - name: 中国科学技术大学 苏州高等研究院
    url: https://sz.ustc.edu.cn/
slug: zongwei-zhu
user_groups:
  - 教师
is_teacher: true
academic_position: 博士生导师；中国科学技术大学软件学院实验教学中心（苏州）主任
supervision: 指导博士、硕士研究生
bio: 朱宗卫，研究员，博士生导师，中国科学技术大学软件学院实验教学中心（苏州）主任。2014年博士毕业于中国科学技术大学计算机学院；2014-2018年先后工作于中国矿业大学、华为；2018年加入中科大苏州研究院。近年来，个人主持了国自然面上基金、重点研发计划子课题、中科院XX子课题、中科院先导C子课题、国自然青年基金、中国博士后面上基金、江苏省青年基金、江苏省海洋科技创新项目等多项国家级或省部级课题，个人主持竞争性项目合同经费近4000万元。以第一作者或通信作者在DAC、FAST、ICCAD、TOCS、TCAD、ToS、TSC等高水平学术期刊和会议上发表论文30余篇，第一发明人授权发明专利9项。期间形成的多项研究成果已实际应用于多家知名企事业单位。
interests:
  - 边缘智能计算（联邦学习+功耗优化）
  - 天基智能计算系统（具身智能卫星+星座分布式计…
education:
  courses:
    - degree: 博士
      institution: 中国科学技术大学
      major: 计算机科学与技术
      year: 2014
      year_end: 2014
email: zzw1988@ustc.edu.cn
office: 敏学楼202
social:
  - icon: envelope
    icon_pack: fas
    link: mailto:zzw1988@ustc.edu.cn
  - icon: github
    icon_pack: fab
    link: "#"
  - icon: graduation-cap
    icon_pack: fas
    link: "#"
  - icon: orcid
    icon_pack: fab
    link: "#"
  - icon: globe
    icon_pack: fas
    link: http://staff.ustc.edu.cn/~zzw1988/
weight: 10
homepage: "http://staff.ustc.edu.cn/~zzw1988/"
awards:
  - "2019年 江苏省\"双创博士\"称号"
  - 2019年 国家级科技竞赛一等奖（两项）
papers:
  - title: "MP3: Mixed-Precision Pipeline Parallelism Framework for Heterogeneous Edge Devices"
    authors: Yi Xiong, Weihong Liu, Boyu Li, Qianyue Cao, Zongwei Zhu*, Jiawei Geng, Rui Zhang, Yulong Zu, Xuehai Zhou
    venue: IEEE Transactions on Computer-Aided Design of Integrated Circuits and Systems (TCAD)
    year: 2026
    level: CCF-A 期刊
    url: "https://doi.org/10.1109/TCAD.2026.3663279"
    abstract: "Owing to the inherent advantages of edge computing in latency, privacy, and always-on availability, Deep Neural Network (DNN) tasks are progressively shifting to edge devices. However, limited edge resources pose significant challenges for deploying large DNNs. Pipeline parallelism (PP) and post-training quantization (PTQ) are essential techniques for addressing these resource constraints, and mainstream frameworks (e.g., DeepSpeed, PyTorch) encapsulate them independently. Nonetheless, this decoupled treatment inevitably traps the optimization process into local optima and results in inferior throughput-accuracy trade-offs in heterogeneous edge environments, due to the natural circular dependency between the PP and PTQ optimization processes. To this end, we propose MP3, a novel framework for joint PP-PTQ optimization in heterogeneous edge environments. MP3 integrates three core components: (1) Task-Device Co-analyzer (TDC) utilizes a fine-grained modeling method to estimate computation and communication latencies precisely. (2) Information-Fused Accuracy Proxy (FAP) characterizes quantized DNN accuracy through a unified proxy combining intra-layer and inter-layer information, with a data-driven fusion function search strategy. (3) Pipeline Quantization Co-optimizer (PQC), leveraging latency estimates from TDC and accuracy characterizations from FAP, navigates the joint optimization space effectively by formulating it as a Constraint Programming (CP) problem. A comprehensive experimental evaluation on an edge testbed confirms the effectiveness of MP3, demonstrating that it lies on a superior Pareto curve (achieving up to 3.2x throughput speedup with accuracy drop within 1%) and exhibits robust adaptability across heterogeneous devices."
  - title: "eLLM: Elastic Memory Management Framework for Efficient LLM Serving"
    authors: Jiale Xu, Yi Xiong, Rui Zhang, Cong Guo*, Zihan Liu, Yangjie Zhou, Weiming Hu, Hao Wu, Boyu Li, Junping Zhao, Minyi Guo, Zongwei Zhu*, Xuehai Zhou, Jingwen Leng
    venue: The Chips to Systems Conference (DAC 2026)
    year: 2026
    level: CCF-A 会议
    url: "https://arxiv.org/abs/2506.15155"
    abstract: "Large Language Models are increasingly being deployed in datacenters. Serving these models requires careful memory management, as their memory usage includes static weights, dynamic activations, and key-value caches. While static weights are constant and predictable, dynamic components such as activations and KV caches change frequently during runtime, presenting significant challenges for efficient memory management. Modern LLM serving systems typically handle runtime memory and KV caches at distinct abstraction levels: runtime memory management relies on static tensor abstractions, whereas KV caches utilize a page table-based virtualization layer built on top of the tensor abstraction. This virtualization dynamically manages KV caches to mitigate memory fragmentation. However, this dual-level approach fundamentally isolates runtime memory and KV cache management, resulting in suboptimal memory utilization under dynamic workloads, which can lead to a nearly 20% drop in throughput. To address these limitations, we propose eLLM, an elastic memory management framework inspired by the classical memory ballooning mechanism in operating systems. The core components of eLLM include: (1) Virtual Tensor Abstraction, which decouples the virtual address space of tensors from the physical GPU memory, creating a unified and flexible memory pool; (2) an Elastic Memory Mechanism that dynamically adjusts memory allocation through runtime memory inflation and deflation, leveraging CPU memory as an extensible buffer; and (3) a Lightweight Scheduling Strategy employing SLO-aware policies to optimize memory utilization and effectively balance performance trade-offs under stringent SLO constraints. Comprehensive evaluations demonstrate that eLLM significantly outperforms state-of-the-art systems, 2.32x higher decoding throughput, and supporting 3x larger batch sizes for 128K-token inputs."
  - title: "PPFL: A Parameter Behavior-Driven Plug-in Personalization Engine for Federated Learning"
    authors: Qianyue Cao, Zongwei Zhu*, Zirui Lian, Rui Zhang, Boyu Li, Yi Xiong, Xuehai Zhou
    venue: The 40th AAAI Conference on Artificial Intelligence (AAAI 2026)
    year: 2026
    level: CCF-A 会议
    url: "https://ojs.aaai.org/index.php/AAAI/article/view/39073"
    abstract: "Personalized Federated Learning (PFL) customizes models for each client to mitigate challenges from non-IID data, wherein a dominant strategy is model decoupling that partitions models into shared and personalized parts based on architectural priors. We reveal a critical flaw in this strategy: it induces intrinsic drift, a performance degradation often more severe than the well-known client drift. We introduce PPFL, an approach that employs a novel soft-fusion strategy guided by parameter-wise behavioral perception, dynamically inferring each parameter's functional role. Extensive experiments show PPFL outperforms eight state-of-the-art baselines by up to 5.3%, and boosts vanilla FedAvg with a 16.82% absolute gain."
  - title: "Archer: Adaptive Memory Compression with Page-Association-Rule Awareness for High-Speed Response of Mobile Devices"
    authors: Changlong Li, Zongwei Zhu*, Chao Wang, Fangming Liu, Fei Xu, Edwin H.-M. Sha, Xuehai Zhou
    venue: The 23rd USENIX Conference on File and Storage Technologies (FAST '25)
    year: 2025
    level: CCF-A 会议
    url: "https://www.usenix.org/conference/fast25/presentation/li"
    abstract: In mobile systems, memory can be compressed page-by-page to save space. This paper shows that the system response speed is significantly limited by page-grained compression, and observes that approximately a quarter of anonymous memory pages are highly correlated. We propose Archer, an association-rule-aware memory compression framework that compresses memory with flexible granularity, redesigning the LRU mechanism and an adaptive memory compression region. Experimental results show the average app launching speed is 1.55x faster, photographic speed and frame rate increase by 1.42x and 1.31x.
  - title: Freezing-based Memory and Process Co-design for User Experience on Resource-limited Mobile Devices
    authors: Changlong Li, Zongwei Zhu*, Yu Liang, Xuehai Zhou
    venue: ACM Transactions on Computer Systems (TOCS)
    year: 2025
    level: CCF-A 期刊
    url: "https://doi.org/10.1145/3714409"
    abstract: "Mobile devices with limited resources are prevalent, as they have a relatively low price. Providing a good user experience with limited resources has been a big challenge. This work finds that foreground applications are often unexpectedly interfered by background applications memory activities. This article proposes Ice, a framework to optimize the user experience on resource-limited mobile devices: processes that will cause frequent refaults in the background are identified and frozen accordingly, and thawed when memory condition allows. Evaluation shows Ice boosts the frame rate by 1.57x on average over the state of the art."
  - title: "Magnifier: A Chiplet Feature-Aware Test Case Generation Method for Deep Learning Accelerators"
    authors: Boyu Li, Zongwei Zhu*, Weihong Liu, Qianyue Cao, Changlong Li, Cheng Ji, Xi Li, Xuehai Zhou
    venue: IEEE Transactions on Computer-Aided Design of Integrated Circuits and Systems (TCAD)
    year: 2025
    level: CCF-A 期刊
    url: "https://doi.org/10.1109/TCAD.2025.3528358"
    abstract: "The development of deep learning has led to increasing demands for computation and memory, making multichiplet accelerators a powerful solution. Multichiplet accelerators require more precise consideration of hardware configurations and mapping schemes in terms of computation, memory, and communication patterns compared to monolithic designs, in order to avoid underutilization of performance. However, there is currently a lack of performance testing methods specifically tailored for multichiplet accelerators. This article proposes Magnifier, a test case generation method for performance testing of multichiplet accelerators: we analyze typical multichiplet accelerator prototypes from computation, memory, and communication perspectives, summarize a chiplet feature-aware operator task set, and build a generative adversarial network to learn the distribution of high-diversity test cases, enabling rapid generation of high-quality test cases. Experiments show that Magnifier can improve the metric of test cases by up to 3.42 times and significantly reduce generation time."
  - title: "HaloFL: Efficient Heterogeneity-Aware Federated Learning through Optimal Submodel Extraction and Dynamic Sparse Adjustment"
    authors: Zirui Lian, Qianyue Cao, Chao Liang, Jing Cao, Zongwei Zhu*, Zhi Yang, Cheng Ji, Changlong Li, Xuehai Zhou
    venue: IEEE Transactions on Computer-Aided Design of Integrated Circuits and Systems (TCAD)
    year: 2025
    level: CCF-A 期刊
    url: "https://doi.org/10.1109/TCAD.2025.3548003"
    abstract: "Federated learning (FL) is an advanced framework that enables collaborative training of machine learning models across edge devices. To address system and data heterogeneity challenges, we propose HaloFL, an efficient FL framework that dynamically adjusts the structure and parameter budget of submodels during training by evaluating three dimensions: model-wise, layer-wise, and unit-wise performance. We design a data-aware model unit importance evaluation method to determine the optimal submodel structure, reallocate parameters from noncritical layers to critical layers within a fixed parameter budget, and introduce a resource-aware dual-UCB multiarmed bandit agent to dynamically adjust the total parameter budget. Experimental results demonstrate that HaloFL achieves up to a 14.80% improvement in accuracy and a 3.06x speedup compared to existing FL frameworks."
  - title: A Lightweight I/O Throttling Service to Improve the User Experience of Mobile Devices
    authors: Changlong Li, Zongwei Zhu*, Yuyangjun Lu, Chao Wang, Xuehai Zhou, Edwin H.-M. Sha
    venue: IEEE Transactions on Services Computing (TSC)
    year: 2025
    level: CCF-A 期刊
    url: "https://doi.org/10.1109/TSC.2025.3576691"
    abstract: As one of the most frequently occurring operations, I/Os significantly affect the application launching time and frame rate of mobile devices, hence influencing the user experience. This paper shows that high I/O latency is usually due to the congestion inside Flash instead of the system layer. We propose a lightweight I/O throttling framework in mobile systems named FlashDAM, which throttles the I/O flow to make way for I/Os that may block the foreground application. FlashDAM is the first work that proves that proper I/O throttling positively affects the user experience. Experimental results illustrate that the app launching speed and frame rate are enhanced by 72% and 45% separately compared to the state-of-the-art.
  - title: "MultiLens: A Multi-Objective Adaptive DVFS Framework for Energy-Efficient DNN Inference"
    authors: Jiawei Geng, Zongwei Zhu*, Weihong Liu, Xuehai Zhou
    venue: IEEE Transactions on Computer-Aided Design of Integrated Circuits and Systems (TCAD)
    year: 2025
    level: CCF-A 期刊
    url: "https://doi.org/10.1109/TCAD.2025.3597236"
    abstract: "To tackle power management challenges in deep neural networks (DNNs), dynamic voltage and frequency scaling (DVFS) has gained attention for its ability to enhance energy efficiency without modifying DNN structures. This article presents MultiLens (MTL), a multiobjective adaptive DVFS framework: we propose a power-sensitive feature extraction method along with multiobjective constraint modeling to characterize DNN inference behavior, identify critical power blocks through clustering based on inference behavior similarity, and integrate a complete deployment process to enhance adaptability across platforms and scenarios. Experimental results demonstrate the effectiveness of MTL in optimizing energy efficiency across different hardware platforms and deployment scenarios."
  - title: "AsyncGrid: An Intra- and Inter-Layer Asynchronous Hybrid Parallelism System for Responsive Edge LLM Inference"
    authors: Yi Xiong, Rui Zhang, Yulong Zu, Weihong Liu, Zongwei Zhu*, Jiawei Geng, Boyu Li, Qianyue Cao, Xuehai Zhou
    venue: IEEE Transactions on Computer-Aided Design of Integrated Circuits and Systems (TCAD)
    year: 2025
    level: CCF-A 期刊
    url: "https://doi.org/10.1109/TCAD.2025.3624135"
    abstract: "Edge deployment of large language models (LLMs) is increasingly attractive due to its advantages in privacy, customization, and availability. However, edge environments face significant challenges in reducing time-to-first-token (TTFT). TTFT consists of: 1) queuing delay and 2) prefill latency, both of which are exacerbated by edge-resource constraints. The substantial computational demands of LLM inference grow superlinearly with prompt length, causing high prefill latency; and limited edge resources restrict prefill throughput, preventing the timely handling of incoming requests, thereby exacerbating queuing delays. Model parallelism is a commonly used solution in cloud-based systems, but directly applying it to edge environments proves ineffective. Intralayer parallelism (e.g., tensor/sequence parallelism (SP)) can reduce prefill latency but suffers from frequent global synchronization, which bottlenecks prefill throughput due to edge-limited interconnection bandwidth. Interlayer parallelism (e.g., pipeline parallelism (PP)) improves prefill throughput via fully asynchronous execution but retains high prefill latency due to stage-wise serialized computation. To address this dilemma, this article leverages the properties of the causal attention mechanism in LLMs and proposes intralayer asynchronous parallelism (IAP), which performs intralayer parallel computations to reduce prefill latency while avoiding global synchronization to mitigate prefill throughput bottlenecks. Moreover, considering communication sensitivity in intralayer parallelism, this article integrates IAP with interlayer asynchronous parallelism into a unified plan space. This hybrid parallelism adapts to diverse hardware and request loads, enabling more effective TTFT optimization. To enable the end-to-end implementation of this hybrid parallelism, this article proposes AsyncGrid, an LLM inference system tailored for responsive edge LLM inference. AsyncGrid: 1) models runtime overheads through a performance profiler; 2) employs an integer programming (IP) formulation to optimize execution plan, with the objective of minimizing latency while meeting throughput requirements; and 3) implements fine-grained communication optimization (FCO) during runtime. A comprehensive evaluation on an edge testbed demonstrates AsyncGrid's significant advantages over existing methods, achieving substantial improvements in both homogeneous and heterogeneous settings."
  - title: "Ace-Sniper: Cloud–Edge Collaborative Scheduling Framework with DNN Inference Latency Modeling on Heterogeneous Devices"
    authors: Weihong Liu, Jiawei Geng, Zongwei Zhu*, Yang Zhao, Cheng Ji, Changlong Li, Zirui Lian, Xuehai Zhou
    venue: IEEE Transactions on Computer-Aided Design of Integrated Circuits and Systems (TCAD)
    year: 2024
    level: CCF-A 期刊
    url: "https://doi.org/10.1109/TCAD.2023.3314388"
    abstract: "The cloud-edge collaborative inference requires efficient scheduling of AI tasks to the appropriate edge intelligence devices. We propose Ace-Sniper, a scheduling framework with DNN inference latency modeling on heterogeneous devices: a unified hardware resource modeling (HRM) treats platforms as black-box functions, neural network similarity (NNS) extracts features of diverse DNNs, and a performance characterization network predicts latencies of unseen DNNs on heterogeneous devices. Experimental results show the average relative error of latency prediction is 11.11%, prediction accuracy reaches 93.2%, average waiting time is reduced by 82.95%, and platform throughput improves by 63% on average."
  - title: "NebulaFL: Self-Organizing Efficient Multilayer Federated Learning Framework with Adaptive Load Tuning in Heterogeneous Edge Systems"
    authors: Zirui Lian, Jing Cao, Qianyue Cao, Weihong Liu, Zongwei Zhu*, Xuehai Zhou
    venue: IEEE Transactions on Computer-Aided Design of Integrated Circuits and Systems (TCAD)
    year: 2024
    level: CCF-A 期刊
    url: "https://doi.org/10.1109/TCAD.2024.3443715"
    abstract: "As a promising edge intelligence technology, federated learning (FL) enables Internet of Things (IoT) devices to train models collaboratively while ensuring data privacy and security. This article proposes NebulaFL, a dual heterogeneity-aware multilayer FL framework to support efficient distributed training in IoT scenarios: through finer-grained division of the hierarchical FL hierarchy, hybrid synchronous-asynchronous training is implemented at both the global system and local device-layer levels, and an augmented multiarmed bandit technique based on reinforcement learning adjusts the device-layer training load. Experiments demonstrate that NebulaFL achieves up to a 15.68x speed-up ratio and a 23.94% increase in training accuracy compared to the latest or classic approaches."
  - title: "Arch2End: Two-Stage Unified System-Level Modeling for Heterogeneous Intelligent Devices"
    authors: Weihong Liu, Zongwei Zhu*, Boyu Li, Yi Xiong, Zirui Lian, Jiawei Geng, Xuehai Zhou
    venue: IEEE Transactions on Computer-Aided Design of Integrated Circuits and Systems (TCAD)
    year: 2024
    level: CCF-A 期刊
    url: "https://doi.org/10.1109/TCAD.2024.3443706"
    abstract: "The surge in intelligent edge computing has propelled the adoption and expansion of the distributed embedded systems (DESs). We introduce Arch2End, a two-stage system-level modeling method combining limited architecture information with scalable benchmark models to achieve a unified performance representation: stage one leverages public information to analyze architectures in a uniform abstraction and design benchmark models for exploring device performance boundaries; stage two extracts critical device features from end-to-end inference metrics of extensive simulation models. Compared to the state-of-the-art methods, Arch2End achieves the lowest DNN latency prediction relative errors in the NAS-Bench-201 (1.7%) and real-world DNNs (8.2%), and showcases superior performance in inter-group balanced device grouping strategies."
  - title: "PowerLens: An Adaptive DVFS Framework for Optimizing Energy Efficiency in Deep Neural Networks"
    authors: Jiawei Geng, Zongwei Zhu*, Weihong Liu, Xuehai Zhou, Boyu Li
    venue: The 61st ACM/IEEE Design Automation Conference (DAC 2024)
    year: 2024
    level: CCF-A 会议
    url: "https://doi.org/10.1145/3649329.3655956"
    abstract: "To address the power management challenges in deep neural networks (DNNs), dynamic voltage and frequency scaling (DVFS) technology is garnering attention for its ability to enhance energy efficiency without modifying the structure of DNNs. This paper introduces PowerLens, an adaptive DVFS framework: we develop a power-sensitive feature extraction method for DNNs and identify critical power blocks through clustering based on power behavior similarity, thereby achieving adaptive DVFS instrumentation point settings. Then the framework adaptively presets the target frequency for each power block through a decision model. Experimental results confirm the effectiveness of the framework in energy efficiency optimization."
  - title: "FedStar: Efficient Federated Learning on Heterogeneous Communication Networks"
    authors: Jing Cao, Ran Wei, Qianyue Cao, Yongchun Zheng, Zongwei Zhu*, Cheng Ji, Xuehai Zhou
    venue: IEEE Transactions on Computer-Aided Design of Integrated Circuits and Systems (TCAD)
    year: 2023
    level: CCF-A 期刊
    url: "https://doi.org/10.1109/TCAD.2023.3346274"
    abstract: The proliferation of multimedia applications and increased computing power of mobile devices have led to the development of personalized artificial intelligent (AI) applications that utilize the massive user-information residing on them. However, the traditional centralized training paradigm is not applicable in this scenario due to potential privacy risks and high communication overhead. Federated learning (FL) provides an option to these applications. Nevertheless, the heterogeneity of computing and communication latency among devices have posed great challenges to building efficient learning frameworks. Existing optimizations on FL either fail to speed up training on heterogeneous devices or suffer from poor communication efficiency. In this article, we propose FedStar, an efficient FL framework that supports decentralized asynchronous training on heterogeneous communication networks. Considering the heterogeneous computing power in the network, FedStar supports running heterogeneity-aware local steps on each device. What is more, considering the heterogeneous communication latency and possibly unreachable communication path between some devices, FedStar generates a decentralized communication topology that can achieve maximal training throughput. Finally, it adopts weighted aggregation to guarantee high convergence accuracy of global model. Theoretical analysis results show the convergence behavior of FedStar under nonconvex settings. Experimental results show that FedStar can achieve a speedup of 4.81x than the state-of-the-art FL schemes with high convergence accuracy.
projects:
  - name: 国家自然科学基金面上项目
    years: 在研
    detail: 主持
  - name: 国家重点研发计划子课题
    years: 在研
    detail: 主持
  - name: 中国科学院战略性先导科技专项（C类）子课题
    years: 在研
    detail: 主持
  - name: 国家自然科学基金青年基金
    years: 在研
    detail: 主持
  - name: 江苏省海洋科技创新项目
    years: 在研
    detail: 主持
---

## 个人简介

朱宗卫，研究员，博士生导师，中国科学技术大学软件学院实验教学中心（苏州）主任。2014年博士毕业于中国科学技术大学计算机学院；2014-2018年先后工作于中国矿业大学、华为；2018年加入中科大苏州研究院。近年来，个人主持了国自然面上基金、重点研发计划子课题、中科院XX子课题、中科院先导C子课题、国自然青年基金、中国博士后面上基金、江苏省青年基金、江苏省海洋科技创新项目等多项国家级或省部级课题，个人主持竞争性项目合同经费近4000万元。以第一作者或通信作者在DAC、FAST、ICCAD、TOCS、TCAD、ToS、TSC等高水平学术期刊和会议上发表论文30余篇，第一发明人授权发明专利9项。期间形成的多项研究成果已实际应用于多家知名企事业单位。



## 研究方向

- 边缘智能计算（联邦学习+功耗优化）

- 天基智能计算系统（具身智能卫星+星座分布式计算）


## 教育背景

- 2014，博士，中国科学技术大学，计算机科学与技术


## 代表论文

- 1. Yi Xiong, Weihong Liu, Boyu Li, Qianyue Cao, **Zongwei Zhu***, Jiawei Geng, Rui Zhang, Yulong Zu, Xuehai Zhou. *MP3: Mixed-Precision Pipeline Parallelism Framework for Heterogeneous Edge Devices*. IEEE Transactions on Computer-Aided Design of Integrated Circuits and Systems (TCAD), 2026。CCF-A 期刊
  [链接](https://doi.org/10.1109/TCAD.2026.3663279)
- 2. Jiale Xu, Yi Xiong, Rui Zhang, Cong Guo*, Zihan Liu, Yangjie Zhou, Weiming Hu, Hao Wu, Boyu Li, Junping Zhao, Minyi Guo, **Zongwei Zhu***, Xuehai Zhou, Jingwen Leng. *eLLM: Elastic Memory Management Framework for Efficient LLM Serving*. The Chips to Systems Conference (DAC 2026), 2026。CCF-A 会议
  [链接](https://arxiv.org/abs/2506.15155)
- 3. Qianyue Cao, **Zongwei Zhu***, Zirui Lian, Rui Zhang, Boyu Li, Yi Xiong, Xuehai Zhou. *PPFL: A Parameter Behavior-Driven Plug-in Personalization Engine for Federated Learning*. The 40th AAAI Conference on Artificial Intelligence (AAAI 2026), 2026。CCF-A 会议
  [链接](https://ojs.aaai.org/index.php/AAAI/article/view/39073)
- 4. Changlong Li, **Zongwei Zhu***, Chao Wang, Fangming Liu, Fei Xu, Edwin H.-M. Sha, Xuehai Zhou. *Archer: Adaptive Memory Compression with Page-Association-Rule Awareness for High-Speed Response of Mobile Devices*. The 23rd USENIX Conference on File and Storage Technologies (FAST '25), 2025。CCF-A 会议
  [链接](https://www.usenix.org/conference/fast25/presentation/li)
- 5. Changlong Li, **Zongwei Zhu***, Yu Liang, Xuehai Zhou. *Freezing-based Memory and Process Co-design for User Experience on Resource-limited Mobile Devices*. ACM Transactions on Computer Systems (TOCS), 2025。CCF-A 期刊
  [链接](https://doi.org/10.1145/3714409)
- 6. Boyu Li, **Zongwei Zhu***, Weihong Liu, Qianyue Cao, Changlong Li, Cheng Ji, Xi Li, Xuehai Zhou. *Magnifier: A Chiplet Feature-Aware Test Case Generation Method for Deep Learning Accelerators*. IEEE Transactions on Computer-Aided Design of Integrated Circuits and Systems (TCAD), 2025。CCF-A 期刊
  [链接](https://doi.org/10.1109/TCAD.2025.3528358)
- 7. Zirui Lian, Qianyue Cao, Chao Liang, Jing Cao, **Zongwei Zhu***, Zhi Yang, Cheng Ji, Changlong Li, Xuehai Zhou. *HaloFL: Efficient Heterogeneity-Aware Federated Learning through Optimal Submodel Extraction and Dynamic Sparse Adjustment*. IEEE Transactions on Computer-Aided Design of Integrated Circuits and Systems (TCAD), 2025。CCF-A 期刊
  [链接](https://doi.org/10.1109/TCAD.2025.3548003)
- 8. Changlong Li, **Zongwei Zhu***, Yuyangjun Lu, Chao Wang, Xuehai Zhou, Edwin H.-M. Sha. *A Lightweight I/O Throttling Service to Improve the User Experience of Mobile Devices*. IEEE Transactions on Services Computing (TSC), 2025。CCF-A 期刊
  [链接](https://doi.org/10.1109/TSC.2025.3576691)
- 9. Jiawei Geng, **Zongwei Zhu***, Weihong Liu, Xuehai Zhou. *MultiLens: A Multi-Objective Adaptive DVFS Framework for Energy-Efficient DNN Inference*. IEEE Transactions on Computer-Aided Design of Integrated Circuits and Systems (TCAD), 2025。CCF-A 期刊
  [链接](https://doi.org/10.1109/TCAD.2025.3597236)
- 10. Yi Xiong, Rui Zhang, Yulong Zu, Weihong Liu, **Zongwei Zhu***, Jiawei Geng, Boyu Li, Qianyue Cao, Xuehai Zhou. *AsyncGrid: An Intra- and Inter-Layer Asynchronous Hybrid Parallelism System for Responsive Edge LLM Inference*. IEEE Transactions on Computer-Aided Design of Integrated Circuits and Systems (TCAD), 2025。CCF-A 期刊
  [链接](https://doi.org/10.1109/TCAD.2025.3624135)
- 11. Weihong Liu, Jiawei Geng, **Zongwei Zhu***, Yang Zhao, Cheng Ji, Changlong Li, Zirui Lian, Xuehai Zhou. *Ace-Sniper: Cloud–Edge Collaborative Scheduling Framework with DNN Inference Latency Modeling on Heterogeneous Devices*. IEEE Transactions on Computer-Aided Design of Integrated Circuits and Systems (TCAD), 2024。CCF-A 期刊
  [链接](https://doi.org/10.1109/TCAD.2023.3314388)
- 12. Zirui Lian, Jing Cao, Qianyue Cao, Weihong Liu, **Zongwei Zhu***, Xuehai Zhou. *NebulaFL: Self-Organizing Efficient Multilayer Federated Learning Framework with Adaptive Load Tuning in Heterogeneous Edge Systems*. IEEE Transactions on Computer-Aided Design of Integrated Circuits and Systems (TCAD), 2024。CCF-A 期刊
  [链接](https://doi.org/10.1109/TCAD.2024.3443715)
- 13. Weihong Liu, **Zongwei Zhu***, Boyu Li, Yi Xiong, Zirui Lian, Jiawei Geng, Xuehai Zhou. *Arch2End: Two-Stage Unified System-Level Modeling for Heterogeneous Intelligent Devices*. IEEE Transactions on Computer-Aided Design of Integrated Circuits and Systems (TCAD), 2024。CCF-A 期刊
  [链接](https://doi.org/10.1109/TCAD.2024.3443706)
- 14. Jiawei Geng, **Zongwei Zhu***, Weihong Liu, Xuehai Zhou, Boyu Li. *PowerLens: An Adaptive DVFS Framework for Optimizing Energy Efficiency in Deep Neural Networks*. The 61st ACM/IEEE Design Automation Conference (DAC 2024), 2024。CCF-A 会议
  [链接](https://doi.org/10.1145/3649329.3655956)
- 15. Jing Cao, Ran Wei, Qianyue Cao, Yongchun Zheng, **Zongwei Zhu***, Cheng Ji, Xuehai Zhou. *FedStar: Efficient Federated Learning on Heterogeneous Communication Networks*. IEEE Transactions on Computer-Aided Design of Integrated Circuits and Systems (TCAD), 2023。CCF-A 期刊
  [链接](https://doi.org/10.1109/TCAD.2023.3346274)


## 获奖与荣誉

- 2019年 江苏省"双创博士"称号

- 2019年 国家级科技竞赛一等奖（两项）

