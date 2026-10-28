---
title: "EdgeNAT: Transformer for Efficient Edge Detection"

authors:
  - jinghuai-jie

authors_display:
  - Jinghuai Jie
  - Yan Guo*
  - Guixing Wu
  - Junmin Wu
  - Baojian Hua*

date: "2024-10-19T00:00:00Z"

publication_types: ["conference"]

publication: European Conference on Artificial Intelligence (ECAI)

level: "CCF-B"

url_source: "https://doi.org/10.3233/FAIA240518"

abstract: "Transformers, renowned for their powerful feature extraction capabilities, have played an increasingly prominent role in various vision tasks. Especially, recent advancements present transformer with hierarchical structures such as Dilated Neighborhood Attention Transformer (DiNAT), demonstrating outstanding ability to efficiently capture both global and local features. However, transformers’ application in edge detection has not been fully exploited. In this paper, we propose EdgeNAT, a one-stage transformer-based edge detector with DiNAT as the encoder, capable of extracting object boundaries and meaningful edges both accurately and efficiently. On the one hand, EdgeNAT captures global contextual information and detailed local cues with DiNAT, on the other hand, it enhances feature representation with a novel SCAF-MLA decoder by utilizing both inter-spatial and inter-channel relationships of feature maps. Extensive experiments on multiple datasets show that our method achieves state-of-the-art performance on both RGB and depth images. Notably, on the widely used BSDS500 dataset, our L model achieves impressive performances, with ODS F-measure and OIS F-measure of 86.0%, 87.6% for multi-scale input,and 84.9%, and 86.3% for single-scale input, surpassing the current state-of-the-art EDTER by 1.2%, 1.1%, 1.7%, and 1.6%, respectively. Moreover, as for throughput, our approach runs at 20.87 FPS on RTX 4090 GPU with single-scale input. Code: https://github.com/jhjie/EdgeNAT."

featured: false
---
