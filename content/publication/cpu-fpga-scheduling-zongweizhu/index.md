---
title: "A Hardware and Software Task-Scheduling Framework Based on CPU+FPGA Heterogeneous Architecture in Edge Computing"
authors:
  - zongwei-zhu
authors_display:
  - "Zongwei Zhu"
  - "Junneng Zhang"
  - "Jinjin Zhao"
  - "Jing Cao"
  - "Duan Zhao*"
  - "Gangyong Jia"
  - "Qingyong Meng"
date: "2019-09-01T00:00:00Z"
publication_types: ["journal"]
publication: "IEEE Access"
level: ""
url_source: "https://doi.org/10.1109/access.2019.2943179"
abstract: "Real-time performance is the primary requirement for edge computing systems. However, with the surge in data volume and the growing demand for computing power, a computing framework consisting solely of CPUs is no longer competent. As a result, CPU+ heterogeneous architecture using accelerators to improve edge computing systems' computing capacity has received great attention. The type of accelerators determines the performance of the edge computing system largely. The accelerators include Graphics Processing Unit (GPU), Application Specific Integrated Circuit (ASIC) and Field Programmable Gate Array (FPGA). FPGAs with its reconfigurability and high energy efficiency are widely used in many edge computing scenarios. Nontheless, the performance depends also on the scheduling efficiency between software tasks on CPUs and hardware tasks on FPGAs. Unfortunately, the existing strategies have not fully exploited the differences between hardware and software tasks, thus resulting in low scheduling efficiency. This paper proposes a task scheduling framework on the Dynamic Partial Reconfiguration (DPR) platform. We take full account of the characteristics of task switching overhead and predictable execution time of hardware tasks in DPR, and reduce the number of task-switching times and active tasks in the system, thus improving the scheduling efficiency. We conduct a set of experiments on the Zynq platform to verify the proposed framework. Experimental results demonstrate that when the execution time of the accelerator exceeds the reconfiguration cost by an order of magnitude, the efficiencies of all the cases are more than 98%, and the efficiencies can reach 90%-98% in the same order of magnitude."
featured: false
---
