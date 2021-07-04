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