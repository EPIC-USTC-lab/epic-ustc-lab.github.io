---
title: "Efficient Transformer-based Edge Detector"

authors:
  - jinghuai-jie

authors_display:
  - Jinghuai Jie
  - Qifan Wang
  - Junmin Wu
  - Yan Guo*
  - Baojian Hua*

date: "2024-06-30T00:00:00Z"

publication_types: ["conference"]

publication: IEEE International Joint Conference on Neural Networks (IJCNN)

level: "CCF-C"

url_source: "https://doi.org/10.1109/IJCNN60899.2024.10651431"

abstract: "Edge detection is a core component in a wide range of vision tasks, and is expected to be both efficient and accurate to identify boundaries and edges in images. And it has been a hot research field for long period. Currently, vision transformers are playing an increasingly prominent role in various downstream tasks, and the SOTA edge detector EDTER employs vision transformer as its encoder. However, ViTs are also known for their computational burden due to the large amount of parameters, leading to higher processing latency than lightweight CNNs. Recently, EfficientFormerV2, which has a novel network with low latency and high parameter efficiency, has proved that transformer-based network could outperform CNN-based network in both accuracy and efficiency. Inspired by this architecture, this paper proposes a novel edge detector EFED with EfficientFormerV2 as the encoder, and an efficient Multi-Level Aggregation decoder SMLA to extract both local and global features. Extensive experiments are conducted on two widely employed datasets, BSDS500 and NYUDv2, demonstrating that compared with EDTER, our detector not only improves the throughput by 10 times, but also achieves competitive accuracy. With single scale input on BSDS500 dataset, our EFED model achieves ODS F-measure and OIS F-measure of 82.4% and 84.2%, while for EDTER the corresponding values are 82.4% and 84.1%, respectively."

featured: false
---
