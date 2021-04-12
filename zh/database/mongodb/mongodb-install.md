# Install

## 文档

[https://docs.mongodb.com/manual/tutorial/install-mongodb-on-red-hat](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-red-hat)


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

```shell
/var/lib/mongo (the data directory)
/var/log/mongodb (the log directory)

# 修改默认位置
vi /etc/mongod.conf 
---------------------------------------------
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
#  engine:
#  wiredTiger:

# network interfaces
net:
  port: 27017
  bindIp: 0.0.0.0  # Enter 0.0.0.0,:: to bind to all IPv4 and IPv6 addresses or, alternatively, use the net.bindIpAll setting.
```

```sh
sudo systemctl start mongod
# Failed to start mongod.service: Unit mongod.service not found.
sudo systemctl daemon-reload

sudo systemctl status mongod
sudo systemctl enable mongod
sudo systemctl stop mongod
sudo systemctl restart mongod

# 卸载
sudo service mongod stop
sudo yum erase $(rpm -qa | grep mongodb-org)
sudo rm -r /var/log/mongodb
sudo rm -r /var/lib/mongo
```