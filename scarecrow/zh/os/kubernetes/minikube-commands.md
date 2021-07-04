# Commands

## minikube

## kubectl

![useful command](img.png)

```sh
# 将本地 docker 与 K8S 依赖的 docker 进行绑定
eval $(minikube docker-env)
# 取消与 minikube 中的 docker 进行绑定
eval $(minikube docker-env -u)
```
