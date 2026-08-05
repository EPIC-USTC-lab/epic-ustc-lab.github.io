---
title: 耿家伟
role: 特任副研究员
name_en: Jiawei Geng
superuser: false
organizations:
  - name: 中国科学技术大学 苏州高等研究院
    url: https://sz.ustc.edu.cn/
slug: jiawei-geng
user_groups:
  - 教师
is_teacher: true
academic_position: 长期担任 IEEE TC、IEEE TCAD 等 CCF-A 期刊审稿人
supervision: 参与指导博士、硕士研究生
bio: 耿家伟，特任副研究员，2026年6月于中国科学技术大学计算机科学与技术学院获博士学位，导师为周学海教授与朱宗卫研究员。主要研究方向为高能效智能计算，以软硬件协同为主线，致力于构建面向大模型与智能体（LLM/Agent Infra）、星载智能计算及系统级推理优化的高能效智能计算系统，服务于智能计算在云、边、端与在轨环境下的高效部署。作为研究骨干参与国家自然科学基金面上项目、国家重点研发计划、中国科学院战略性先导科技专项（C类）等多项国家级课题。近年来，在 DAC、IEEE TCAD、IEEE TITS 等计算机系统结构领域国际知名会议与期刊发表多篇论文，论文曾入选 DAC 会议 Hot-interest Topic。
interests:
  - 高能效智能计算（LLM/Agent 基础设施…
  - 星载智能计算（在轨具身智能、星座分布式训推）
education:
  courses:
    - degree: 博士
      institution: 中国科学技术大学
      major: 计算机科学与技术
      year: 2026
      year_end: 2026
      advisor: 周学海教授、朱宗卫研究员
email: jwgeng@ustc.edu.cn
office: 仁爱路西区敏学楼202
social:
  - icon: envelope
    icon_pack: fas
    link: mailto:jwgeng@ustc.edu.cn
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
    link: "#"
weight: 10
awards:
  - 2026年 安徽省高等学校优秀毕业生
  - 2025年 博士生国家奖学金
papers:
  - title: "MultiLens: A Multi-Objective Adaptive DVFS Framework for Energy-Efficient DNN Inference"
    authors: Jiawei Geng, Zongwei Zhu*, Weihong Liu, Xuehai Zhou
    venue: IEEE Transactions on Computer-Aided Design of Integrated Circuits and Systems (TCAD)
    year: 2025
    level: CCF-A 期刊
    url: "https://doi.org/10.1109/TCAD.2025.3597236"
    abstract: "To tackle power management challenges in deep neural networks (DNNs), dynamic voltage and frequency scaling (DVFS) has gained attention for its ability to enhance energy efficiency without modifying DNN structures. This article presents MultiLens (MTL), a multiobjective adaptive DVFS framework: we propose a power-sensitive feature extraction method along with multiobjective constraint modeling to characterize DNN inference behavior, identify critical power blocks through clustering based on inference behavior similarity, and integrate a complete deployment process to enhance adaptability across platforms and scenarios. Experimental results demonstrate the effectiveness of MTL in optimizing energy efficiency across different hardware platforms and deployment scenarios."
  - title: "PowerLens: An Adaptive DVFS Framework for Optimizing Energy Efficiency in Deep Neural Networks"
    authors: Jiawei Geng, Zongwei Zhu*, Weihong Liu, Xuehai Zhou, Boyu Li
    venue: The 61st ACM/IEEE Design Automation Conference (DAC 2024)
    year: 2024
    level: CCF-A 会议
    url: "https://doi.org/10.1145/3649329.3655956"
    abstract: "To address the power management challenges in deep neural networks (DNNs), dynamic voltage and frequency scaling (DVFS) technology is garnering attention for its ability to enhance energy efficiency without modifying the structure of DNNs. This paper introduces PowerLens, an adaptive DVFS framework: we develop a power-sensitive feature extraction method for DNNs and identify critical power blocks through clustering based on power behavior similarity, thereby achieving adaptive DVFS instrumentation point settings. Then the framework adaptively presets the target frequency for each power block through a decision model. Experimental results confirm the effectiveness of the framework in energy efficiency optimization."
  - title: "Sniper: Cloud-Edge Collaborative Inference Scheduling with Neural Network Similarity Modeling"
    authors: Weihong Liu, Jiawei Geng, Zongwei Zhu*, Jing Cao, Zirui Lian
    venue: The 59th ACM/IEEE Design Automation Conference (DAC 2022)
    year: 2022
    level: CCF-A 会议（Hot-interest Topic）
    url: "https://doi.org/10.1145/3489517.3530474"
    abstract: The cloud-edge collaborative inference demands scheduling the artificial intelligence (AI) tasks efficiently to the appropriate edge smart device. However, the continuously iterative deep neural networks (DNNs) and heterogeneous devices pose great challenges for inference tasks scheduling. In this paper, we propose a self-update cloud-edge collaborative inference scheduling system (Sniper) with time awareness. At first, considering that similar networks exhibit similar behaviors, we develop a non-invasive performance characterization network (PCN) based on neural network similarity (NNS) to accurately predict the inference time of DNNs. Moreover, PCN and time-based scheduling algorithms can be flexibly combined into the scheduling module of Sniper. Experimental results show that the average relative error of network inference time prediction is about 8.06%. Compared with the traditional method without time awareness, Sniper can reduce the waiting time by 52% on average while achieving a stable increase in throughput.
  - title: "Heter-Train: A Distributed Training Framework Based on Semi-Asynchronous Parallel Mechanism for Heterogeneous Intelligent Transportation Systems"
    authors: Jiawei Geng, Jing Cao, Haipeng Jia, Zongwei Zhu*, et al.
    venue: IEEE Transactions on Intelligent Transportation Systems (TITS)
    year: 2024
    level: CCF-B 期刊
    url: "https://doi.org/10.1109/TITS.2023.3286400"
    abstract: Transportation big data (TBD) are increasingly combined with artificial intelligence to mine novel patterns due to the powerful representational capabilities of deep neural networks (DNNs). We introduce a distributed training framework, Heter-Train. First, a communication-efficient semi-asynchronous parallel mechanism (SAP-SGD) is proposed, which can take full advantage of the acceleration effect of asynchronous strategy on heterogeneous training and constrain the straggler problem by using global interval synchronization. Second, considering the difference in node bandwidth, we design a solution for heterogeneous communication. Moreover, a novel weighted aggregation strategy is proposed to aggregate model parameters with different versions. Experimental results show that our proposed strategy can achieve up to 6.74x speedups on training time, with almost no accuracy decrease.
  - title: "Ace-Sniper: Cloud–Edge Collaborative Scheduling Framework with DNN Inference Latency Modeling on Heterogeneous Devices"
    authors: Weihong Liu, Jiawei Geng, Zongwei Zhu*, Yang Zhao, Cheng Ji, Changlong Li, Zirui Lian, Xuehai Zhou
    venue: IEEE Transactions on Computer-Aided Design of Integrated Circuits and Systems (TCAD)
    year: 2024
    level: CCF-A 期刊
    url: "https://doi.org/10.1109/TCAD.2023.3314388"
    abstract: "The cloud-edge collaborative inference requires efficient scheduling of AI tasks to the appropriate edge intelligence devices. We propose Ace-Sniper, a scheduling framework with DNN inference latency modeling on heterogeneous devices: a unified hardware resource modeling (HRM) treats platforms as black-box functions, neural network similarity (NNS) extracts features of diverse DNNs, and a performance characterization network predicts latencies of unseen DNNs on heterogeneous devices. Experimental results show the average relative error of latency prediction is 11.11%, prediction accuracy reaches 93.2%, average waiting time is reduced by 82.95%, and platform throughput improves by 63% on average."
projects:
  - name: 国家自然科学基金面上项目
    years: 在研
    detail: 研究骨干
  - name: 国家重点研发计划
    years: 在研
    detail: 研究骨干
  - name: 中国科学院战略性先导科技专项（C类）
    years: 在研
    detail: 研究骨干
---

## 个人简介

耿家伟，特任副研究员，2026年6月于中国科学技术大学计算机科学与技术学院获博士学位，导师为周学海教授与朱宗卫研究员。主要研究方向为高能效智能计算，以软硬件协同为主线，致力于构建面向大模型与智能体（LLM/Agent Infra）、星载智能计算及系统级推理优化的高能效智能计算系统，服务于智能计算在云、边、端与在轨环境下的高效部署。作为研究骨干参与国家自然科学基金面上项目、国家重点研发计划、中国科学院战略性先导科技专项（C类）等多项国家级课题。近年来，在 DAC、IEEE TCAD、IEEE TITS 等计算机系统结构领域国际知名会议与期刊发表多篇论文，论文曾入选 DAC 会议 Hot-interest Topic。



## 研究方向

- 高能效智能计算（LLM/Agent 基础设施）

- 星载智能计算（在轨具身智能、星座分布式训推）

- 系统级推理优化（软硬件协同功耗-性能建模）


## 教育背景

- 2026，博士，中国科学技术大学，计算机科学与技术，导师：周学海教授、朱宗卫研究员


## 代表论文

- 1. **Jiawei Geng**, Zongwei Zhu*, Weihong Liu, Xuehai Zhou. *MultiLens: A Multi-Objective Adaptive DVFS Framework for Energy-Efficient DNN Inference*. IEEE Transactions on Computer-Aided Design of Integrated Circuits and Systems (TCAD), 2025。CCF-A 期刊
  [链接](https://doi.org/10.1109/TCAD.2025.3597236)
- 2. **Jiawei Geng**, Zongwei Zhu*, Weihong Liu, Xuehai Zhou, Boyu Li. *PowerLens: An Adaptive DVFS Framework for Optimizing Energy Efficiency in Deep Neural Networks*. The 61st ACM/IEEE Design Automation Conference (DAC 2024), 2024。CCF-A 会议
  [链接](https://doi.org/10.1145/3649329.3655956)
- 3. Weihong Liu, **Jiawei Geng**, Zongwei Zhu*, Jing Cao, Zirui Lian. *Sniper: Cloud-Edge Collaborative Inference Scheduling with Neural Network Similarity Modeling*. The 59th ACM/IEEE Design Automation Conference (DAC 2022), 2022。CCF-A 会议（Hot-interest Topic）
  [链接](https://doi.org/10.1145/3489517.3530474)
- 4. **Jiawei Geng**, Jing Cao, Haipeng Jia, Zongwei Zhu*, et al.. *Heter-Train: A Distributed Training Framework Based on Semi-Asynchronous Parallel Mechanism for Heterogeneous Intelligent Transportation Systems*. IEEE Transactions on Intelligent Transportation Systems (TITS), 2024。CCF-B 期刊
  [链接](https://doi.org/10.1109/TITS.2023.3286400)
- 5. Weihong Liu, **Jiawei Geng**, Zongwei Zhu*, Yang Zhao, Cheng Ji, Changlong Li, Zirui Lian, Xuehai Zhou. *Ace-Sniper: Cloud–Edge Collaborative Scheduling Framework with DNN Inference Latency Modeling on Heterogeneous Devices*. IEEE Transactions on Computer-Aided Design of Integrated Circuits and Systems (TCAD), 2024。CCF-A 期刊
  [链接](https://doi.org/10.1109/TCAD.2023.3314388)


## 获奖与荣誉

- 2026年 安徽省高等学校优秀毕业生

- 2025年 博士生国家奖学金

