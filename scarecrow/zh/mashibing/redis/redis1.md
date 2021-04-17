# redis 介绍及NIO原理介绍

常识：
磁盘：
1、寻址：ms
2、带宽：G/M

内存
1、寻址：ns
秒>毫秒>微秒>纳秒
2、带宽：很大
磁盘比内存在寻址上慢了10万倍

I/O buffer：成本问题
磁盘与磁道，扇区，一扇区512Byte带来一个成本变大：索引

4K 操作系统 无论你读多少，都是最少4K从磁盘拿


数据库引擎：https://db-engines.com/en

Redis 秒级10万
关系型数据库 千级别


# 允许的最大连接数
CONFIG GET maxclients
# 当前的redis连接数
info clients
# 获取客户端列表
CLIENT LIST
# 查看当前连接的名称
CLIENT GETNAME
# 查看超时配置
config get timeout
# 杀死指定连接
CLIENT KILL ip:port