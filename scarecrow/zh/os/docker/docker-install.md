# Install

## 文档

## Linux

### 源码安装

### YUM安装

> 参考：

- [Install Docker Engine on CentOS](https://docs.docker.com/engine/install/centos/)

```sh
## 卸载旧版本
yum remove docker \
           docker-client \
           docker-client-latest \
           docker-common \
           docker-latest \
           docker-latest-logrotate \
           docker-logrotate \
           docker-engine

# Install the yum-utils package (which provides the yum-config-manager utility) and set up the stable repository.
yum install -y yum-utils
yum-config-manager \
    --add-repo \
    https://download.docker.com/linux/centos/docker-ce.repo 
          
# Install the latest version of Docker Engine and containerd
yum -y install docker-ce docker-ce-cli containerd.io

# 启动和测试
systemctl start docker
docker run hello-world
```
