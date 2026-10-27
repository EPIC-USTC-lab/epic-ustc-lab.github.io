---
title: "Inspection and Characterization of App File Usage in Mobile Devices"
authors:
  - zongwei-zhu
authors_display:
  - "Cheng Ji"
  - "Riwei Pan"
  - "Li-Pin Chang"
  - "Liang Shi"
  - "Zongwei Zhu*"
  - "Yu Liang"
  - "Tei-Wei Kuo"
  - "Chun Jason Xue"
date: "2020-11-30T00:00:00Z"
publication_types: ["journal"]
publication: "ACM Transactions on Storage (TOS)"
level: "CCF-A 期刊"
url_source: "https://doi.org/10.1145/3404119"
abstract: "While the computing power of mobile devices has been quickly evolving in recent years, the growth of mobile storage capacity is, however, relatively slower. A common problem shared by budget-phone users is that they frequently run out of storage space. This article conducts a deep inspection of file usage of mobile applications and their potential implications on user experience. Our major findings are as follows: First, mobile applications could rapidly consume storage space by creating temporary cache files, but these cache files quickly become obsolete after being re-used for a short period of time. Second, file access patterns of large files, especially executable files, appear highly sparse and random, and therefore large portions of file space are never visited. Third, file prefetching brings an excessive amount of file data into page cache but only a few prefetched data are actually used. The unnecessary memory pressure causes premature memory reclamation and prolongs application launching time. Through the feasibility study of two preliminary optimizations, we demonstrated a high potential to eliminate unnecessary storage and memory space consumption with a minimal impact on user experience."
featured: false
---
