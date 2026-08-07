---
title: Real-time bit-level encryption of full high-definition video without pixel diffusion
authors:
  - xijue-zhao
authors_display:
  - Dong Jiang
  - Hui-ran Luo
  - Zi-jian Cui
  - Xi-Jue Zhao
  - Liang-liang Lu*
date: "2026-03-25T00:00:00Z"
publication_types: ["journal"]
publication: Journal of Information Security and Applications
url_source: "https://doi.org/10.1016/j.jisa.2026.104450"
abstract: Despite the widespread adoption of Shannon's confusion-diffusion architecture in image encryption, the implementation of diffusion to sequentially establish inter-pixel dependencies to attain plaintext sensitivity constrains algorithmic parallelism, while the need for multiple rounds of diffusion operations to meet sensitivity metrics incurs considerable computational overhead. To address this limitation, this paper proposes a real-time video encryption protocol based on heterogeneous parallel computing. The protocol incorporates the SHA-256 hashes of original frames as input, employs multiple CPU threads to concurrently generate encryption-related data, and utilizes numerous GPU threads to encrypt pixels simultaneously. By eliminating the reliance on diffusion, it enables the allocation of a dedicated GPU thread to encrypt each pixel within every channel, thus enhancing the algorithm's parallelism. Experimental results show that the proposed approach achieves delay-free bit-level encryption of 1920 x 1080 (Full HD) video at 30 FPS, with an average encryption time of 25.84 ms on a server equipped with an Intel Xeon Gold 6226R CPU and an NVIDIA GeForce RTX 3090 GPU.
featured: false
---
