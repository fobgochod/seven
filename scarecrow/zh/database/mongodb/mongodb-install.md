# Install

## YUM安装

>参考：[https://docs.mongodb.com/manual/tutorial/install-mongodb-on-red-hat](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-red-hat)

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
sudo yum install -y mongodb-org
# 或者指定版本
sudo yum install -y mongodb-org-4.4 mongodb-org-server-4.4 mongodb-org-shell-4.4 mongodb-org-mongos-4.4 mongodb-org-tools-4.4
```

```sh
# 修改默认配置
vi /etc/mongod.conf 
```

>mongod参数说明：[Options](https://docs.mongodb.com/manual/reference/program/mongod)  
>MongoDB配置说明：[mongod.conf](https://docs.mongodb.com/manual/reference/configuration-options)

```sh {17}
# mongod.conf

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
```

```sh
# /usr/lib/systemd/system/mongod.service 

sudo systemctl start mongod
# Failed to start mongod.service: Unit mongod.service not found.
sudo systemctl daemon-reload

sudo systemctl status mongod
sudo systemctl enable mongod
sudo systemctl stop mongod
sudo systemctl restart mongod
```

```sh
# 卸载
sudo service mongod stop
sudo yum erase $(rpm -qa | grep mongodb-org)
sudo rm -r /var/log/mongodb
sudo rm -r /var/lib/mongo
```

## 源码安装

>参考：[https://docs.mongodb.com/manual/tutorial/install-mongodb-on-red-hat-tarball](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-red-hat-tarball)

```sh
# 安装前准备
sudo yum install cyrus-sasl cyrus-sasl-gssapi cyrus-sasl-plain krb5-libs libcurl net-snmp openldap openssl xz-libs
# 下载
wget https://fastdl.mongodb.org/linux/mongodb-linux-x86_64-rhel70-4.4.5.tgz
# 解压
tar -zxvf mongodb-linux-x86_64-rhel70-4.4.5.tgz
cd mongodb-linux-x86_64-rhel70-4.4.5
# 创建数据目录data和日志目录logs
mkdir data logs
# 添加conf文件
vi bin/mongod.conf
```

>mongod参数说明：[Options](https://docs.mongodb.com/manual/reference/program/mongod)  
>MongoDB配置说明：[mongod.conf](https://docs.mongodb.com/manual/reference/configuration-options) 

```yaml
systemLog:
   destination: file
   logAppend: true
   path: /DAP/install/mongo/mongodb-linux-x86_64-rhel70-4.4.5/logs/mongodb.log
storage:
   dbPath: /DAP/install/mongo/mongodb-linux-x86_64-rhel70-4.4.5/data
   journal:
      enabled: true
   directoryPerDB: true
processManagement:
   fork: true
   pidFilePath: /DAP/install/mongo/mongodb-linux-x86_64-rhel70-4.4.5/bin/mongod.pid
   timeZoneInfo: /usr/share/zoneinfo
net:
   port: 27017
   bindIp: 0.0.0.0
setParameter:
   enableLocalhostAuthBypass: false
```

```sh
# 添加环境变量
vi /etc/profile
export MONGODB_HOME=/DAP/install/mongo/mongodb-linux-x86_64-rhel70-4.4.5
export PATH=$PATH:${MONGODB_HOME}/bin
# 使修改生效
source /etc/profile
```

```sh
# 启动服务
mongod -f /DAP/install/mongo/mongodb-linux-x86_64-rhel70-4.4.5/bin/mongod.conf
# 关闭服务
mongod --shutdown -f /DAP/install/mongo/mongodb-linux-x86_64-rhel70-4.4.5/bin/mongod.conf
# 或者
pkill mongod
# 或进入 mongo shell
mongo
use admin
db.shutdownServer()
```

```shell
# 启动客户端
mongo
db.version()

# 退出客户端
quit()
```

```sh
## 卸载
sudo yum erase $(rpm -qa | grep mongodb-org)
sudo rm -r /DAP/install/mongo
```