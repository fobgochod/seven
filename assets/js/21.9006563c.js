(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{580:function(v,_,l){"use strict";l.r(_);var e=l(12),i=Object(e.a)({},(function(){var v=this,_=v.$createElement,l=v._self._c||_;return l("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[l("h1",{attrs:{id:"juc"}},[v._v("JUC")]),v._v(" "),l("h2",{attrs:{id:"解析自旋锁cas操作与volatile"}},[v._v("解析自旋锁CAS操作与volatile")]),v._v(" "),l("h2",{attrs:{id:"juc包下atomicxxx类与新的同步机制：latch-semaphore等"}},[v._v("JUC包下AtomicXXX类与新的同步机制：Latch Semaphore等")]),v._v(" "),l("p",[v._v("ReentrantLock vs synchronized")]),v._v(" "),l("ul",[l("li",[l("p",[v._v("cas vs sync")])]),v._v(" "),l("li",[l("p",[v._v("tryLock")])]),v._v(" "),l("li",[l("p",[v._v("lockInterruptibly")])]),v._v(" "),l("li",[l("p",[v._v("公平和非公平")])]),v._v(" "),l("li",[l("p",[v._v("CountDownLatch")])]),v._v(" "),l("li",[l("p",[v._v("CyclicBarrier")])]),v._v(" "),l("li",[l("p",[v._v("Phaser")])]),v._v(" "),l("li",[l("p",[v._v("ReadWriteLock")]),v._v(" "),l("ul",[l("li",[v._v("共享锁")]),v._v(" "),l("li",[v._v("排他锁")])])]),v._v(" "),l("li",[l("p",[v._v("Semaphore")]),v._v(" "),l("ul",[l("li",[v._v("限流")]),v._v(" "),l("li",[v._v("车道 收费站")])])])]),v._v(" "),l("h2",{attrs:{id:"locksupport，高频面试题，aqs源码，以及源码阅读方法论"}},[v._v("LockSupport，高频面试题，AQS源码，以及源码阅读方法论")]),v._v(" "),l("ul",[l("li",[l("p",[v._v("TestLockSupport")])]),v._v(" "),l("li",[l("p",[v._v("淘宝面试题")]),v._v(" "),l("ul",[l("li",[v._v("实现一个容器，提供两个方法，add, size")]),v._v(" "),l("li",[v._v("写2个线程，线程1添加10个元素到容器中，线程2实现监控元素的个数，当个数到5个时，线程2会给出提示并结束")]),v._v(" "),l("li",[v._v("面试题：写一个固定容量的同步器，拥有put和get方法，以及getCount方法，能够支持2个生产者线程以及10个消费者线程的阻塞调用")])])]),v._v(" "),l("li",[l("p",[v._v("源码阅读技巧")])]),v._v(" "),l("li",[l("p",[v._v("AQS源码解析")])])]),v._v(" "),l("h2",{attrs:{id:"强软弱虚四种引用以及threadlocal的原理与源码"}},[v._v("强软弱虚四种引用以及ThreadLocal的原理与源码")]),v._v(" "),l("ul",[l("li",[v._v("AQS源码\n"),l("ul",[l("li",[v._v("VarHandle 1、普通属性也能进行原子操作 2、比反射快，直接操纵二进制码")])])]),v._v(" "),l("li",[v._v("强软弱虚\n"),l("ul",[l("li",[v._v("强 - 普通引用 Object obj = new Object()")]),v._v(" "),l("li",[v._v("软 - 内存不够才回收")]),v._v(" "),l("li",[v._v("弱 - 遇到gc就回收 应用 ThreadLocal")]),v._v(" "),l("li",[v._v("虚 -")])])]),v._v(" "),l("li",[v._v("ThreadLocal")])]),v._v(" "),l("p",[v._v("Memory Leak - 内存泄漏\nOOM((Out Of Memory)-内存溢出")]),v._v(" "),l("h2",{attrs:{id:"线程池可用的各种高并发容器详解：copyonwritelist，blockingqueue等"}},[v._v("线程池可用的各种高并发容器详解：CopyOnWriteList，BlockingQueue等")]),v._v(" "),l("ul",[l("li",[v._v("容器 - Vector - Hashtable")]),v._v(" "),l("li",[v._v("CopyOnWriteList")]),v._v(" "),l("li",[v._v("ConcurrentHashMap")]),v._v(" "),l("li",[v._v("ConcurrentSkipListMap")]),v._v(" "),l("li",[v._v("BlockingQueue")]),v._v(" "),l("li",[v._v("目标 为ThreadPool做准备")])]),v._v(" "),l("p",[v._v("Vector和Hashtable自带锁，基本不用")]),v._v(" "),l("p",[v._v("Hashtable 方法上加锁 -> @since 1.0\nHashMap 无锁 -> @since 1.2\nCollections.synchronizedMap (SynchronizedMap) 锁力度变小 -> @since 1.2\nConcurrentHashMap -> @since 1.5")]),v._v(" "),l("ul",[l("li",[v._v("Vector -> Queue")]),v._v(" "),l("li",[v._v("Queue List区别")]),v._v(" "),l("li",[v._v("Queue添加了对多线程友好的API   offer peek poll")]),v._v(" "),l("li",[v._v("BlockingQueue put take 阻塞")])]),v._v(" "),l("h2",{attrs:{id:"详解线程池：自定义线程池，jdk自带线程池，forkjoin，源码解析等-一）"}},[v._v("详解线程池：自定义线程池，JDK自带线程池，ForkJoin，源码解析等(一）")]),v._v(" "),l("p",[v._v("Callable -> Runnable + Result\nFuture -> 存储执行的 将来才会产生结果\nFutureTask -> Future + Runnable\nCompletableFuture -> 管理多个Future")]),v._v(" "),l("ul",[l("li",[v._v("ThreadPoolExecutor")]),v._v(" "),l("li",[v._v("ForkJoinPool\n"),l("ul",[l("li",[v._v("分解汇总的任务")]),v._v(" "),l("li",[v._v("用很少的线程可以执行很多的任务（子任务）TPE做不到先执行子任务")]),v._v(" "),l("li",[v._v("CPU密集型")])])])]),v._v(" "),l("h2",{attrs:{id:"详解线程池：自定义线程池，jdk自带线程池，forkjoin，源码解析等-二）"}},[v._v("详解线程池：自定义线程池，JDK自带线程池，ForkJoin，源码解析等(二）")]),v._v(" "),l("p",[v._v("Executors -> 线程池工厂")]),v._v(" "),l("ul",[l("li",[l("p",[v._v("newSingleThreadExecutor 为什么有单线程的线程池")]),v._v(" "),l("ul",[l("li",[v._v("有任务队列")]),v._v(" "),l("li",[v._v("生命周期管理")])])]),v._v(" "),l("li",[l("p",[v._v("newCachedThreadPool")])]),v._v(" "),l("li",[l("p",[v._v("newFixedThreadPool")])]),v._v(" "),l("li",[l("p",[v._v("什么时候用Cached 什么时候用Fixed")]),v._v(" "),l("ul",[l("li",[v._v("任务数目不稳定 忽高忽低 Cached")]),v._v(" "),l("li",[v._v("任务平稳")])])]),v._v(" "),l("li",[l("p",[v._v("newScheduledThreadPool")])]),v._v(" "),l("li",[l("p",[v._v("并发concurrent、并行parallel")]),v._v(" "),l("ul",[l("li",[v._v("并发：任务提交")]),v._v(" "),l("li",[v._v("并行：任务执行")])])]),v._v(" "),l("li",[l("p",[v._v("并行是并发的子集")])])]),v._v(" "),l("p",[v._v("Worker类")]),v._v(" "),l("ul",[l("li",[v._v("Runnable AQS")]),v._v(" "),l("li",[v._v("thread")])]),v._v(" "),l("h2",{attrs:{id:"单机压测工具jmh，单机最快mq-disruptor原理解析"}},[v._v("单机压测工具JMH，单机最快MQ - Disruptor原理解析")]),v._v(" "),l("ul",[l("li",[v._v("JMH\n"),l("ul",[l("li",[v._v("JMH 是 Java Microbenchmark Harness 的缩写")])])]),v._v(" "),l("li",[v._v("2013年首发\n"),l("ul",[l("li",[v._v("又JIT的开发人员开发")]),v._v(" "),l("li",[v._v("归于OpenJDK")])])])])])}),[],!1,null,null,null);_.default=i.exports}}]);