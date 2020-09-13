# Redis

>参考：[http://doc.redisfans.com](http://doc.redisfans.com)

#### 切换数据库
```sh
172.16.2.141:0>select 1
"OK"
172.16.2.141:1>
```

#### 返回当前数据库的 key 的数量
```sh
172.16.2.141:1>dbsize
"4"
172.16.2.141:1>
```

#### 将当前数据库的 key 移动到给定的数据库 db 当中
```sh
172.16.2.141:0>select 1
"OK"
172.16.2.141:1>setex key1 100 value1
"OK"
172.16.2.141:1>move key1 2
"1"
172.16.2.141:1>select 2
"OK"
172.16.2.141:2>get key1
"value1"
172.16.2.141:2>
```

## Key
```sh
# 删除给定的一个或多个 key 
del key1 key2
# key是否存在
exists key1
# 设置key过期时间
expire key1 1000
# 设置key不过期
persist key1
# 获取key过期时间
ttl key1
pttl key1
# 模糊查询key
KEYS *
```

## String

### GET
```sh
# 获取key对应value
get key1
# 将给定 key 的值设为 value ，并返回 key 的旧值(old value)。
getset key value
```

### SET
```sh
set key1 value1
set key2 value2 EX 100
set key3 value3 PX 100000

# key存在则不能修改
set key4 value4 NX
set key4 new-value4 NX

# key存在才可以修改
set key5 value5 XX
set key5 value5
set key5 new-value5 XX


# 将值 value 关联到 key ，并将 key 的生存时间设为 seconds (以秒为单位)。
setex key6 60 value6

# 将 key 中储存的数字值加减一。如果 key 不存在，那么 key 的值会先被初始化为 0 
incr key7
incrby key7 99

decr key7
decrby key7 99

将 key 中储存的数字值减一。

# 将 key 的值设为 value ，当且仅当 key 不存在。
setnx key8 value8
```