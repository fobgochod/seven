# redis开发：spring.data.redis、连接、序列化、high/low api


击穿：
- Redis做缓存、
- Key过期 LRU LFU 
- Key过期造成并发访问数据库

穿透
- 查询系统不存在的数据

雪崩
- 大量的key同时失效


