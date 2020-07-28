# JUC
 
## 线程池可用的各种高并发容器详解：CopyOnWriteList，BlockingQueue等

- 容器 - Vector - Hashtable
- CopyOnWriteList
- ConcurrentHashMap
- ConcurrentSkipListMap
- BlockingQueue
- 目标 为ThreadPool做准备

Vector和Hashtable自带锁，基本不用

Hashtable 方法上加锁 -> @since 1.0
HashMap 无锁 -> @since 1.2
Collections.synchronizedMap (SynchronizedMap) 锁力度变小 -> @since 1.2
ConcurrentHashMap -> @since 1.5

- Vector -> Queue 
- Queue List区别
- Queue添加了对多线程友好的API   offer peek poll
- BlockingQueue put take 阻塞


## 详解线程池：自定义线程池，JDK自带线程池，ForkJoin，源码解析等(一） 

Callable -> Runnable + Result
Future -> 存储执行的 将来才会产生结果
FutureTask -> Future + Runnable
CompletableFuture -> 管理多个Future

- ThreadPoolExecutor
- ForkJoinPool
  - 分解汇总的任务
  - 用很少的线程可以执行很多的任务（子任务）TPE做不到先执行子任务
  - CPU密集型

## 详解线程池：自定义线程池，JDK自带线程池，ForkJoin，源码解析等(二）

Executors -> 线程池工厂

- newSingleThreadExecutor 为什么有单线程的线程池
  - 有任务队列
  - 生命周期管理
- newCachedThreadPool 
- newFixedThreadPool
- 什么时候用Cached 什么时候用Fixed
  - 任务数目不稳定 忽高忽低 Cached
  - 任务平稳

- newScheduledThreadPool

- 并发concurrent、并行parallel
  - 并发：任务提交
  - 并行：任务执行
- 并行是并发的子集

Worker类
- Runnable AQS  
- thread

## 单机压测工具JMH，单机最快MQ - Disruptor原理解析

- JMH
  - JMH 是 Java Microbenchmark Harness 的缩写
- 2013年首发
  - 又JIT的开发人员开发
  - 归于OpenJDK