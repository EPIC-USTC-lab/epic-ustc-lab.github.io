---
title: "A GPU-Oriented Onboard Imaging Framework for High-Resolution Sliding Spotlight SAR on an Embedded GPU Platform"
authors:
  - ziyang-dai
authors_display:
  - "Ziyang Dai"
  - "Jian Liu"
  - "Zhanyang Ai"
  - "Yang Liu*"
  - "Ziyan Wang"
  - "Zongwei Zhu"
date: "2026-07-20T00:00:00Z"
publication_types: ["journal"]
publication: "Sensors"
level: ""
url_source: "https://doi.org/10.3390/s26144592"
abstract: "In conventional spaceborne Synthetic Aperture Radar (SAR) systems, raw echo data are usually downlinked to ground stations for image formation, resulting in substantial communication burden and processing delay. Although onboard SAR imaging can alleviate this problem, onboard processors are constrained by power consumption, memory capacity, thermal dissipation, and physical size. Therefore, low-power embedded GPU platforms have become a practical choice for onboard SAR processing. Existing onboard processing is mainly suitable for relatively low-complexity imaging modes and algorithms, while high-resolution sliding spotlight SAR requires more accurate frequency-domain processing due to its extended azimuth bandwidth, strong range–azimuth coupling, and nonlinear range cell migration. The ω-k algorithm is well-suited for such high-resolution imaging scenarios, but its large-scale FFTs, phase compensation, and Stolt interpolation impose significant pressure on the memory capacity, memory bandwidth, and computational resources of embedded GPU platforms. To address these challenges, this paper presents a GPU-oriented ω-k imaging framework for high-resolution sliding spotlight SAR on the Jetson AGX Orin embedded platform. The proposed framework formulates a complete sliding spotlight ω-k processing flow and develops GPU-oriented optimization strategies for efficient execution on the embedded GPU platform. Specifically, hybrid data partitioning is designed to adapt memory access patterns to range- and azimuth-dominant stages, an asynchronous multi-stream pipeline with reusable GPU buffers is introduced to overlap data movement and computation, and customized kernels are developed for Stolt interpolation and FFT-related spectral centering. Experiments on simulated sliding spotlight SAR data demonstrate that the proposed method achieves well-focused imaging results with consistent impulse response characteristics. For a 32,768× 32,768 simulated SAR dataset, the proposed implementation achieves an end-to-end imaging time of 32.17 s on Jetson AGX Orin. These results demonstrate the feasibility of the proposed framework for onboard high-resolution SAR imaging on an embedded GPU platform."
featured: false
---
