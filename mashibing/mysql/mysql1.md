# mysql调优--使用profiles,performance_schema性能监控

client

server
- 连接器
- 分析器
  - AST(抽象语法树)
- 优化器
  - RBO 基于规则
  - [X] CBO 基于代价
- 执行器

- MySQL版本8之前 有缓存

存储引擎

- IO
  - 减少量
  - 减少次数

```sql
SET profiling = 1;
SELECT * FROM seven;
SHOW PROFILES;
SHOW PROFILE;
```
profile参考：
>最下面-> DOCUMENTATION -> MySQL Reference Manual -> SQL Statements -> Database Administration Statements -> SHOW Statements -> SHOW PROFILE Statement
 
https://dev.mysql.com/doc/refman/8.0/en/show-profile.html

## mysql调优--数据类型和schema优化

https://www.cs.usfca.edu/~galles/visualization/Algorithms.html