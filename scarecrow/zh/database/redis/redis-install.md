# Install

## 文档

- [https://redis.io/download](https://redis.io/download)
- [https://download.redis.io/releases/redis-6.0.10.tar.gz](https://download.redis.io/releases/redis-6.0.10.tar.gz)

## 源码安装

```sh
mkdir /root/install
cd /root/install
# 下载
wget https://download.redis.io/releases/redis-6.0.10.tar.gz
# 解压
tar xf redis-6.0.10.tar.gz 
cd /root/install/redis-6.0.10
# 编译
make
yum install gcc
make distclean
make
# 安装到/opt/seven/redis
make install PREFIX=/opt/seven/redis
cd /opt/seven/redis/bin

# 启动服务端、客户端
redis-server
redis-cli

service redis start
service redis stop

cd /usr/local/redis-5.0.8
# 后台启动
src/redis-server &
# 指定配置启动
src/redis-server /usr/local/redis-5.0.8/redis.conf
```

### 设定环境变量

```sh
# 设定环境变量
vi /etc/profile
export REDIS_HOME=/opt/seven/redis
export PATH=$PATH:$REDIS_HOME/bin
# 使环境变量生效
source /etc/profile
echo $PATH
```

### 安装多个Redis

```sh
# 安装多个Redis
cd /root/install/redis-6.0.10/utils
./install_server.sh

# Redis运行命令目录
cd /etc/init.d/
```

### 修改配置

>Redis的配置文件默认为允许本机可访问（bind  127.0.0.1）

```sh
vi /etc/redis/6379.conf

# 方式一
# 注释掉配置文件中的bind 【ip address】
# bind 127.0.0.1
# 关闭Redis的服务保护模式
protected-mode no


# 方式二
bind 0.0.0.0
# PS 该模式下Redis的服务保护模式不需要关闭
protected-mode yes
```

### FAQ

```sh
# gcc版本低了
yum -y install centos-release-scl
yum -y install devtoolset-9-gcc devtoolset-9-gcc-c++ devtoolset-9-binutils
scl enable devtoolset-9 bash
echo "source /opt/rh/devtoolset-9/enable" >> /etc/profile
gcc -v
```

```sh
# 以前安装过低版本redis 
service redis start 
vi /etc/init.d redis  里面的redis_service路径是老版本5.0的redis，但是/etc/redis/6379.conf是6.0的

Starting Redis server...

*** FATAL CONFIG FILE ERROR ***
Reading the configuration file, at line 356
>>> 'rdb-del-sync-files no'
Bad directive or wrong number of arguments
```

## YUM安装