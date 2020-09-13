# Nginx

>下载：[http://nginx.org/en/download.html](http://nginx.org/en/download.html)

## Linux

### 安装1

>参考：[https://www.cnblogs.com/chenxiaochan/p/7253407.html](https://www.cnblogs.com/chenxiaochan/p/7253407.html)
[https://blog.csdn.net/t8116189520/article/details/81909574](https://blog.csdn.net/t8116189520/article/details/81909574)

```sh
# 新建目录，拷贝解压nginx:
cd /usr/local/
wget http://nginx.org/download/nginx-1.16.1.tar.gz
mkdir nginx
cd nginx
tar -zxvf nginx-1.16.1.tar.gz
# 一键安装四个依赖
yum -y install gcc zlib zlib-devel pcre-devel openssl openssl-devel
# 安装
cd nginx-1.16.1
./configure --prefix=/usr/local/nginx
./configure
make
make install
# 打开配置文件，修改默认端口
vi /usr/local/nginx/conf/nginx.conf
# 启动
cd ../sbin/
./nginx
# 停止
nginx -s stop
# 重启
nginx -s reload
# 查看nginx进程是否启动：
ps -ef | grep nginx
```

### 安装2

>参考：[http://nginx.org/en/linux_packages.html#RHEL-CentOS](http://nginx.org/en/linux_packages.html#RHEL-CentOS)

```sh
# 安装
yum install nginx
# 配置文件路径
vi /etc/nginx/nginx.conf
# 启动、关闭
systemctl start nginx.service
systemctl stop nginx.service
# 重启
nginx -s reload
# 允许开机启动
systemctl enable nginx.service
# 验证是否启动
ps -ef |grep nginx
```

## Windows

### 常用命令
```sh
# 启动nginx
start nginx
# 验证配置文件是否正确
nginx -t -c nginx.conf
# 重新加载配置文件
nginx -s reload
# 快速停止nginx
nginx -s stop
# 完整的停止nginx
nginx -s quit
# 查看Nginx版本：
nginx -v
# 重新打开日志文件：
nginx -s reopen
```