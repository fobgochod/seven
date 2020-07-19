# JUC



## 解析自旋锁CAS操作与volatile



## JUC包下AtomicXXX类与新的同步机制：Latch Semaphore等

ReentrantLock vs synchronized
- cas vs sync
- tryLock
- lockInterruptibly
- 公平和非公平

- CountDownLatch

- CyclicBarrier

- Phaser

- ReadWriteLock
  - 共享锁
  - 排他锁

- Semaphore
  - 限流
  - 车道 收费站

## LockSupport，高频面试题，AQS源码，以及源码阅读方法论

- TestLockSupport
- 淘宝面试题
  - 实现一个容器，提供两个方法，add, size
  - 写2个线程，线程1添加10个元素到容器中，线程2实现监控元素的个数，当个数到5个时，线程2会给出提示并结束
  - 面试题：写一个固定容量的同步器，拥有put和get方法，以及getCount方法，能够支持2个生产者线程以及10个消费者线程的阻塞调用

- 源码阅读技巧
- AQS源码解析

## 强软弱虚四种引用以及ThreadLocal的原理与源码

- AQS源码
  - VarHandle 1、普通属性也能进行原子操作 2、比反射快，直接操纵二进制码
- 强软弱虚
  - 强 - 普通引用 Object obj = new Object()
  - 软 - 内存不够才回收
  - 弱 - 遇到gc就回收 应用 ThreadLocal
  - 虚 -  
- ThreadLocal

Memory Leak - 内存泄漏
OOM((Out Of Memory)-内存溢出


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