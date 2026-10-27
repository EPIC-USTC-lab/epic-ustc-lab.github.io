---
title: "PHDFS: Optimizing I/O performance of HDFS in deep learning cloud computing platform"
authors:
  - zongwei-zhu
  - yinzhen-li
authors_display:
  - "Zongwei Zhu"
  - "Luchao Tan"
  - "Yinzhen Li*"
  - "Cheng Ji"
date: "2020-10-01T00:00:00Z"
publication_types: ["journal"]
publication: "Journal of Systems Architecture (JSA)"
level: "CCF-B 期刊"
url_source: "https://doi.org/10.1016/j.sysarc.2020.101810"
abstract: "For deep learning cloud computing platforms, file system is a fundamental and critical component. Hadoop distributed file system (HDFS) is widely used in large scale clusters due to its high performance and high availability. However, in deep learning datasets, the number of files is huge but the file size is small, making HDFS suffer a severe performance penalty. Although there have been many optimizing methods for addressing the small file problem, none of them take the file correlation in deep learning datasets into consideration. To address such problem, this paper proposes a Pile-HDFS (PHDFS) based on a new file aggregation approach. Pile is designed as the I/O unit merging a group of small files according to their correlation. In order to effectively access small files, we design a two-layer manager and add the inner organization information to data blocks. Experimental results demonstrate that, compared with the original HDFS, PHDFS can dramatically decrease the latency when accessing small files and improve the FPS (Frames Per Second) of typical deep learning models by 40%."
featured: false
---
