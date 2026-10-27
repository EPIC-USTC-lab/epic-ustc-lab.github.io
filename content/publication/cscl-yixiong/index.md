---
title: "CSCL: Bridging the plasticity-stability gap in continuous supervised contrastive learning"
authors:
  - yi-xiong
authors_display:
  - "Yi Xiong"
  - "Liqi Xiang"
  - "Qianyue Cao"
  - "Zongwei Zhu"
  - "Zirui Lian"
  - "Jing Cao"
  - "Xuehai Zhou"
date: "2026-04-01T00:00:00Z"
publication_types: ["journal"]
publication: "Neural Networks"
level: "CCF-B 期刊"
url_source: "https://doi.org/10.1016/j.neunet.2025.108179"
abstract: "In real-world scenarios characterized by non-stationary data streams, Continual Learning (CL) aims to enable learners to acquire information from new classes without interrupting previously learned knowledge. Recently, several empirical studies have indicated that incorporating Supervised Contrastive Learning (SCL) into CL results in notable performance improvements. This paper delves into its underlying reason and theoretically suggests the SCL's potential to bolster the model's resistance to forgetting. However, despite the advancements, this paper also notes that models trained under SCL still exhibit challenges in learning plasticity and memory stability within representation space throughout the continual learning process. To address these challenges, this paper proposes a novel framework named Continual Supervised Contrastive Learning (CSCL). CSCL incorporates its key components, the De-redundant Interpolation Method and the Magnetic Force Method, into the SCL training paradigm, aiming to enhance the model's adaptability to new tasks and its ability to retain the knowledge of previously learned tasks. The De-redundant Interpolation Method enhances negative sample diversity through intra-class de-redundancy and inter-class linear interpolation, promoting better learning plasticityof new class representations. Concurrently, the Magnetic Force Method ensures inter-class separation via magnetic repulsion while fostering intra-class aggregation through magnetic attraction, thus forming a uniform distribution of all classes in latent space and supporting the memory stability of old class representations. Extensive experimental validations under popular benchmark image classification datasets indicate the advanced performance of the proposed framework. Additionally, the De-redundant Interpolation Method and Magnetic Force Method demonstrate their flexibility by seamlessly integrating with existing SCL-based continual learning frameworks as plug-ins, boosting classification accuracy by 2.20 to 15.56 points."
featured: false
---
