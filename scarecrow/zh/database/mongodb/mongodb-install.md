# Install

## 文档

- [https://www.mongodb.com/try/download/community?tck=docs_server](https://www.mongodb.com/try/download/community?tck=docs_server)

## Linux

> 目录结构

```
/
├── opt
│   ├── install
│   │   └── mongodb
│   │       ├── bin
│   │       ├── data
│   │       ├── etc
│   │       │   └── mongod.conf
│   │       └── logs
│   └── package
│       └── mongodb
│           ├── mongodb-linux-x86_64-rhel80-4.4.6
│           └── mongodb-linux-x86_64-rhel80-4.4.6.tgz
├── root(me)
└── usr
```

### 源码安装

> 参考：

- [【【官网】】Install MongoDB Community Edition using .tgz Tarball](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-red-hat-tarball)

> 安装

```sh
# 安装前准备
mkdir -p /opt/{install/mongodb/{bin,data,etc,logs},package/mongodb}
yum -y install libcurl openssl xz-libs
# 下载
cd /opt/package/mongodb
wget https://fastdl.mongodb.org/linux/mongodb-linux-x86_64-rhel80-4.4.6.tgz
# 解压
tar -zxvf mongodb-linux-x86_64-rhel80-4.4.6.tgz
cp ./mongodb-linux-x86_64-rhel80-4.4.6/bin/* /opt/install/mongodb/bin/
# 添加conf文件
vi /opt/install/mongodb/etc/mongod.conf
```

> mongod参数说明：[Options](https://docs.mongodb.com/manual/reference/program/mongod)  
> MongoDB配置说明：[mongod.conf](https://docs.mongodb.com/manual/reference/configuration-options)

```yaml
# /opt/install/mongodb/etc/mongod.conf
systemLog:
  destination: file
  logAppend: true
  path: /opt/install/mongodb/logs/mongodb.log
storage:
  dbPath: /opt/install/mongodb/data
  journal:
    enabled: true
  directoryPerDB: true
processManagement:
  fork: true
  pidFilePath: /opt/install/mongodb/bin/mongod.pid
  timeZoneInfo: /usr/share/zoneinfo
net:
  port: 27017
  bindIp: 0.0.0.0
setParameter:
  enableLocalhostAuthBypass: false
# 登陆密码授权(enabled)
security:
  authorization: disabled
```

```sh
# 添加环境变量
vi /etc/profile
export MONGODB_HOME=/opt/install/mongodb
export PATH=$PATH:${MONGODB_HOME}/bin
# 使修改生效
source /etc/profile
# 查看Path
echo $PATH
```

> 启动

```sh
# 启动服务
mongod -f /opt/install/mongodb/etc/mongod.conf
# 关闭服务
mongod --shutdown -f /opt/install/mongodb/etc/mongod.conf
# 或者
pkill mongod
# 或进入 mongo shell
mongo
db.version()
use admin
db.shutdownServer()
```

> 卸载

```sh
## 卸载
sudo yum erase $(rpm -qa | grep mongodb-org)
sudo rm -r /opt/package/mongodb
```

> 防火墙

```sh
firewall-cmd --permanent --zone=public --add-port=27017/tcp
firewall-cmd --permanent --zone=public --remove-port=27017/tcp
firewall-cmd --reload
firewall-cmd --list-ports
```

### YUM安装

> 参考：

- [【官网】Install MongoDB Community Edition](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-red-hat)

```sh
vi /etc/yum.repos.d/mongodb-org-4.4.repo
```

```sh
[mongodb-org-4.4]
name=MongoDB Repository
baseurl=https://repo.mongodb.org/yum/redhat/$releasever/mongodb-org/4.4/x86_64/
gpgcheck=1
enabled=1
gpgkey=https://www.mongodb.org/static/pgp/server-4.4.asc
```

```sh
# 最新稳定版本
yum install -y mongodb-org
# 或者指定版本
yum install -y mongodb-org-4.4 mongodb-org-server-4.4 mongodb-org-shell-4.4 mongodb-org-mongos-4.4 mongodb-org-tools-4.4
```

```sh
# 修改默认配置
vi /etc/mongod.conf 
```

> mongod参数说明：[Options](https://docs.mongodb.com/manual/reference/program/mongod)  
> MongoDB配置说明：[mongod.conf](https://docs.mongodb.com/manual/reference/configuration-options)

```yaml {17}
# /etc/mongod.conf

# for documentation of all options, see:
#   http://docs.mongodb.org/manual/reference/configuration-options/

# where to write logging data.
systemLog:
  destination: file
  logAppend: true
  path: /var/log/mongodb/mongod.log

# Where and how to store data.
storage:
  dbPath: /var/lib/mongo
  journal:
    enabled: true
  directoryPerDB: true # uses a separate directory to store data for each database
#  engine:
#  wiredTiger:

# how the process runs
processManagement:
  fork: true  # fork and run in background
  pidFilePath: /var/run/mongodb/mongod.pid  # location of pidfile
  timeZoneInfo: /usr/share/zoneinfo

# network interfaces
net:
  port: 27017
  bindIp: 0.0.0.0  # Enter 0.0.0.0,:: to bind to all IPv4 and IPv6 addresses or, alternatively, use the net.bindIpAll setting.

# 登陆密码授权(enabled)
security:
  authorization: disabled
```

> 启动

```sh
# /usr/lib/systemd/system/mongod.service 
systemctl daemon-reload
systemctl enable mongod
systemctl start mongod
```

> 卸载

```sh
# 卸载
systemctl stop mongod
yum erase $(rpm -qa | grep mongodb-org)
rm -r /var/log/mongodb
rm -r /var/lib/mongo
```
