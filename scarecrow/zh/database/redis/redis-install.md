# Install

## 文档

- [https://redis.io/download](https://redis.io/download)
- [https://download.redis.io/releases/redis-6.0.10.tar.gz](https://download.redis.io/releases/redis-6.0.10.tar.gz)

## Linux

> 目录结构

```
/
├── opt
│   ├── install
│   │   └── redis
│   │       ├── bin
│   │       └── etc
│   │           └── redis.conf
│   └── package
│       └── redis
│           ├── redis-6.2.4
│           └── redis-6.2.4.tar.gz
├── root(me)
└── usr
```

### 源码安装

> 安装

```sh
mkdir -p /opt/{install/redis/etc,package/redis}
cd /opt/package/redis
# 下载
wget https://download.redis.io/releases/redis-6.2.4.tar.gz
# 解压
tar -zxvf redis-6.2.4.tar.gz
cd redis-6.2.4
# 编译
make
# 不成功可以再试试
# yum install gcc
# make distclean
# make
# 安装到/opt/install/redis
make install PREFIX=/opt/install/redis
```

> 启动

```sh
# 启动服务端、客户端
cd /opt/install/redis/bin
./redis-server
./redis-cli
# 关闭服务端
./redis-cli shutdown
# 或者
ps -aux|grep redis-server
kill -9 pid

# 或者通过src/redis-server启动
cd /opt/package/redis-6.2.4
# 后台启动
src/redis-server &
# 指定配置启动
src/redis-server redis.conf
```

> 设定环境变量

```sh
# 设定环境变量
vi /etc/profile
export REDIS_HOME=/opt/install/redis
export PATH=$PATH:${REDIS_HOME}/bin
# 使环境变量生效
source /etc/profile
echo $PATH
```

> 修改配置

```sh
# 复制conf
cp /opt/package/redis/redis-6.2.4/redis.conf /opt/install/redis/etc/redis.conf 
# 修改配置如下
vi /opt/install/redis/etc/redis.conf

redis-server /opt/install/redis/etc/redis.conf
```

> 配置文件变动

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

# Redis后台启动
daemonize yes
```

#### 安装多个Redis

```sh
# 安装多个Redis
cd /opt/package/redis/redis-6.2.4/utils
./install_server.sh

# Redis运行命令目录
cd /etc/init.d/
```

#### FAQ

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

### YUM安装