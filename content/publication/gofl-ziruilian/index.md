---
title: "GOFL: An Accurate and Efficient Federated Learning Framework Based on Gradient Optimization in Heterogeneous IoT Systems"
authors:
  - zirui-lian
  - zongwei-zhu
authors_display:
  - "Zirui Lian"
  - "Jing Cao"
  - "Zongwei Zhu*"
  - "Xuehai Zhou"
  - "Weihong Liu"
date: "2024-04-01T00:00:00Z"
publication_types: ["journal"]
publication: "IEEE Internet of Things Journal (IoT-J)"
level: "CCF-C"
url_source: "https://doi.org/10.1109/jiot.2023.3333419"
abstract: "Federated learning (FL) is designed for training models using data distributed across multiple Internet of Things (IoT) devices or servers, reducing data transfer overhead and ensuring data security. However, the decentralization and diversity of IoT devices introduce statistical and system heterogeneity, which can lead to unstable model training and even system crashes. Although many studies attribute performance issues to client-drift caused by this heterogeneity, there is a lack of insight into how different forms of heterogeneity impact local model gradient variations and model convergence. In this article, we investigate model gradient distribution characteristics in heterogeneous training. We find that the challenge is not solely due to client-drift but is also closely linked to a high degree of model overfitting, which negatively affects local model training and equilibrium convergence. To address this challenge, we introduce an efficient framework called gradient optimization with FL (GOFL). First, GOFL incorporates the federated gradient normalization (FGN) technique to maintain gradient distribution consistency while mitigating client-drift stemming from heterogeneity. We also highlight the benefits of FGN in reducing local model overfitting and improving convergence. Second, GOFL introduces the federated device aggregation (FDA) strategy, a critical addition to FGN. It adaptively guides device selection and aggregation based on device contributions, ensuring a more balanced training approach in the face of system heterogeneity. The experimental results demonstrate that GOFL achieves state-of-the-art training accuracy while reducing the number of training rounds. In particular, it improves the accuracy of the classical FL framework FedAvg by 30.57% and reduces the number of convergence rounds by 5.17 times."
featured: false
---
