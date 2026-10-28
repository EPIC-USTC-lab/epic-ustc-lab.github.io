---
title: "iAware: Interaction Aware Task Scheduling for Reducing Resource Contention in Mobile Systems"
authors:
  - yongchun-zheng
  - zongwei-zhu
authors_display:
  - "Yongchun Zheng†"
  - "Changlong Li†"
  - "Yi Xiong"
  - "Weihong Liu"
  - "Cheng Ji"
  - "Zongwei Zhu*"
  - "Lichen Yu"
date: "2023-10-31T00:00:00Z"
publication_types: ["journal"]
publication: "ACM Transactions on Embedded Computing Systems (TECS)"
level: "CCF-B"
url_source: "https://doi.org/10.1145/3609391"
abstract: "To ensure the user experience of mobile systems, the foreground application can be differentiated to minimize the impact of background applications. However, this article observes that system services in the kernel and framework layer, instead of background applications, are now the major resource competitors. Specifically, these service tasks tend to be quiet when people rarely interact with the foreground application and active when interactions become frequent, and this high overlap of busy times leads to contention for resources. This article proposes iAware, an interaction-aware task scheduling framework in mobile systems. The key insight is to make use of the previously ignored idle period and schedule service tasks to run at that period. iAware quantify the interaction characteristic based on the screen touch event, and successfully stagger the periods of frequent user interactions. With iAware, service tasks tend to run when few interactions occur, for example, when the device’s screen is turned off, instead of when the user is frequently interacting with it. iAware is implemented on real smartphones. Experimental results show that the user experience is significantly improved with iAware. Compared to the state-of-the-art, the application launching speed and frame rate are enhanced by 38.89% and 7.97% separately, with no more than 1% additional battery consumption."
featured: false
---
