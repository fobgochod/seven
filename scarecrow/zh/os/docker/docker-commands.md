# Commands

```sh
docker version
docker info
```

```sh
# 导出镜像
docker save -o /opt/package/docker/image/{imageName}.tar REPOSITORY:TAG
# 导入镜像
docker load -i /opt/package/docker/image/{imageName}.tar
```

[Prune unused Docker objects](https://docs.docker.com/config/pruning)

```sh
# 删除<none>镜像
docker rmi $(docker images | grep "none" | awk '{print $3}') 
# 删除未使用镜像
docker image prune
```