# 多线程与高并发（进程内高并发）

::: tip 总览
1. 单机高并发应该掌握的线程基础：线程状态，异常与锁等 [视频41](https://ke.qq.com/webcourse/index.html#cid=398381&term_id=100475149&taid=3385529446306861&type=1024&vid=5285890793201449862)
2. 解析自旋锁CAS操作与volatile [视频46](https://ke.qq.com/webcourse/index.html#cid=398381&term_id=100475149&taid=3826180205974573&type=1024&vid=5285890793489922415)
3. JUC包下AtomicXXX类与新的同步机制：Latch Semaphore等 [视频52](https://ke.qq.com/webcourse/index.html#cid=398381&term_id=100475149&taid=3852263542363181&type=1024&vid=5285890793810836226)
4. LockSupport，高频面试题，AQS源码，以及源码阅读方法论 [视频58](https://ke.qq.com/webcourse/index.html#cid=398381&term_id=100475149&taid=3385576690947117&type=1024&vid=5285890794254224450)
5. 强软弱虚四种引用以及ThreadLocal的原理与源码 [视频62](https://ke.qq.com/webcourse/index.html#cid=398381&term_id=100475149&taid=3385593870816301&type=1024&vid=5285890794418013695)
6. 线程池可用的各种高并发容器详解：CopyOnWriteList，BlockingQueue等 [视频64](#)
7. 详解线程池：自定义线程池，JDK自带线程池，ForkJoin，源码解析等(一） [视频69](#)
8. 详解线程池：自定义线程池，JDK自带线程池，ForkJoin，源码解析等(二） [视频74](#)
9. 单机压测工具JMH，单机最快MQ - Disruptor原理解析 [视频76](#)
:::

<p class="tip">进度</p>

[[toc]]

## 单机高并发应该掌握的线程基础：线程状态，异常与锁等

- 线程的概念、启动方式、常用方法
- synchronized(Object)
  - 不能用String常量、Integer、Long
  - object
- 线程同步
- synchronized
  - 锁的是对象不是代码
  - this *.class
  - 锁的方法 非锁定方法 可以同时执行
  - 锁升级
    - 无锁 偏向锁 自旋锁 重量级锁
    - 执行时间短（加锁代码），线程数少，用自旋
    - 执行时间长，线程数多，用系统锁

## 解析自旋锁CAS操作与volatile

- volatile
  - 保证线程可见性
    - MESI
    - 缓存一致性协议
  - 禁止指令重排
    - DCL 单例
    - Double Check Lock
    - loadfence原语指令
    - storefence原语指令

class A {
    private a = 1;
}

A obj = new A();
- 申请内存，对象内部默认值 此时a=0
- 对象初始化，调用对象初始化方法 此时a=1
- 对象赋值 将内存指向obj

第二三步可能发生指令重排


CAS(无锁优化 自旋 乐观锁)
 - Compare And Set/Swap
 - cas(V, Expected, NewValue)
 - if V == E 
   V = New
   otherwise try again or fail
  - CPU原语支持 
ABA问题(在进行CAS操作时候，另一个线程修改)
 - 加version
 - A 1.0
 - B 2.0
 - A 3.0
 - cas(version)
 - 如果基础类型 无所谓
 - 如果引用类型 
 
Unsafe(jdk1.8) = c c++的指针
- 直接操作内存
  - allocateMemory putXX freeMemory pageSize
- 直接生成类实例
  - allocateInstance
- 直接操作类或者实例变量
  - objectFieldOffset getInt getObject
- CAS相关操作
  - compareAndSwapObject Int Long
- c -> malloc free 
- c++ -> new delete

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