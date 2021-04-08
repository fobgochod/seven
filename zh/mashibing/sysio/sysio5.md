# 网络编程之多路复用器及Epoll精讲

### 多路复用器

多条路(IO)通过一个系统调用，获得其中有状态的IO，又程序自己对有状态的IO进行R/W

IO模型是同步的

只关注IO：不关注从IO读写完之后的事情
同步：app自己R/W
异步：kernel完成R/W 没有访问IO Buffer win:iocp

阻塞：BLOCKING
非阻塞：NONBLOCKING

linux以及成熟的框架 netty
同步阻塞
同步非阻塞


SELECT POSIX
POLL
EPOLL

linux epoll
unix kqueue

#### SELECT

synchronous I/O multiplexing
FD_SETSIZE(1024)

#### POLL
没有FD_SETSIZE限制


多路复用器：select poll的弊端，问题：
每次都要重新，重复传递fds
每次内核被调用后，针对这次调用，触发一个遍历fds全量的复杂度


时钟中断 晶振


EPOLL之前callback 只是完成了将网卡发来的数据，走内核的网络协议栈(2、3、4)最终关联到fd的buffer，
所以你某一时间从APP询问内核某一个或多个fd是否可R/W，会有状态返回


yum install man man-pages


cat /proc/sys/fs/epoll/max_user_watches