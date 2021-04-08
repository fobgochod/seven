# 虚拟文件系统，文件描述符，IO重定向


VFS (Virtual File System)


Inode: 文件的元信息
```sh
stat /etc/profile
```


PageCache
- 又称pcache，其中文名称为页高速缓冲存储器，简称页高缓
- page cache的大小为一页，通常为4K
- 内核会在以下三种情况下将dirty page 写回磁盘:
  - 用户进程调用sync() 和 fsync()系统调用
  - 空闲内存低于特定的阈值(threshold)
  - Dirty数据在内存中驻留的时间超过一个特定的阈值


df

```sh
mount
# 将 /dev/hda1 挂在 /mnt 之下
#mount /dev/hda1 /mnt


umount
# 通过设备名卸载
umount -v /dev/sda1          
/dev/sda1 umounted  
# 通过挂载点卸载
umount -v /mnt/mymount/
/tmp/diskboot.img umounted 
```

#### 冯·诺依曼(Von Neumann): 计算机的发展史上做出杰出贡献的著名应用数学家

![计算机的组成框架](/images/msb/computer_framework.png)


冯·诺依曼计算机结构包含3条重要的设计思想，具体如下：
- 计算机应由`运算器`、`控制器`、`存储器`、`输入设备`和`输出设备` 5大部分组成。
- 以二进制的形式表示数据和指令。
- 程序预先存入存储器中，计算机在工作中能够自动地从存储器中取出程序指令并加以执行。


#### 文件类型

- -: 普通文件(可执行文件、图片、文本) REG
- d: 目录
- l: 链接(软链接(windows快捷方式)、硬链接)
- b: 块设备(从一个地方读数据，来回读，如硬盘)
- c: 字符设备(从一个地方读数据，有约束（读不到过去和未来）、如键盘、socket网卡) CHR
- s: socket
- p: pipeline
- [eventpoll]: 


>硬链接：与普通文件没什么不同，inode 都指向同一个文件在硬盘中的区块  
>软链接：保存了其代表的文件的绝对路径，是另外一种文件，在硬盘上有独立的区块，访问时替换自身路径。

```sh
vi msb.txt
# 硬链接(磁盘只有一个文件)
ln /root/msb.txt /root/xxoo.txt
ll
stat msb.txt
stat xxoo.txt
# 两个文件的Inode一样

# 软链接
ln -s /root/xxoo.txt /root/msb.txt

# if=input file of=output file 1048576=1M 
dd if=/dev/zero of=mydisk.img bs=1048576 count=100
ll -h
# 挂载mydisk
losetup /dev/loop0 mydisk.img
# 格式化
mke2fs /dev/loop0

cd /mnt
mkdir ooxx
cd ooxx/
# 挂载
mount -t ext2 /dev/loop0 /mnt/ooxx/
df
文件系统          1K-块    已用     可用 已用% 挂载点
/dev/vda1      41151808 3964104 35074272   11% /
devtmpfs        1931340       0  1931340    0% /dev
tmpfs           1940844       0  1940844    0% /dev/shm
tmpfs           1940844     468  1940376    1% /run
tmpfs           1940844       0  1940844    0% /sys/fs/cgroup
tmpfs            388172       0   388172    0% /run/user/0
/dev/loop0        99150    1550    92480    2% /mnt/ooxx

[root@seven ooxx]# whereis bash
bash: /usr/bin/bash /usr/share/man/man1/bash.1.gz

mkdir bin
cp /usr/bin/bash bin
cd bin
[root@seven bin]# ldd bash
linux-vdso.so.1 =>  (0x00007ffec0753000)
libtinfo.so.5 => /lib64/libtinfo.so.5 (0x00007fa5399ee000)
libdl.so.2 => /lib64/libdl.so.2 (0x00007fa5397ea000)
libc.so.6 => /lib64/libc.so.6 (0x00007fa539426000)
/lib64/ld-linux-x86-64.so.2 (0x0000564bf0d02000)

cd ..
mkdir lib64
cp /lib64/{libtinfo.so.5,libdl.so.2,libc.so.6,ld-linux-x86-64.so.2} ./lib64/

chroot ./
echo $$
echo "hello mashibing" > /abc.txt
cd /mnt/ooxx/
ll

umount /mnt/ooxx
mount -t ext2 /dev/loop0 /mnt/ooxx/
```

```sh
# 进程打开哪些文件
# 0 标准输入 1 标准输出 2 报错输出
[root@seven ooxx]# lsof -p $$
COMMAND  PID USER   FD   TYPE DEVICE  SIZE/OFF    NODE NAME
bash    9737 root  cwd    DIR  253,1      4096  524331 /mnt/ooxx
bash    9737 root  rtd    DIR  253,1      4096       2 /
bash    9737 root  txt    REG  253,1    960608 1050319 /usr/bin/bash
bash    9737 root  mem    REG  253,1     62184 1050007 /usr/lib64/libnss_files-2.17.so
bash    9737 root  mem    REG  253,1 106070960 1050292 /usr/lib/locale/locale-archive
bash    9737 root  mem    REG  253,1   2127336 1049989 /usr/lib64/libc-2.17.so
bash    9737 root  mem    REG  253,1     19776 1049995 /usr/lib64/libdl-2.17.so
bash    9737 root  mem    REG  253,1    174576 1050317 /usr/lib64/libtinfo.so.5.9
bash    9737 root  mem    REG  253,1    164264 1049982 /usr/lib64/ld-2.17.so
bash    9737 root  mem    REG  253,1     26254 1050291 /usr/lib64/gconv/gconv-modules.cache
bash    9737 root    0u   CHR  136,0       0t0       3 /dev/pts/0
bash    9737 root    1u   CHR  136,0       0t0       3 /dev/pts/0
bash    9737 root    2u   CHR  136,0       0t0       3 /dev/pts/0
bash    9737 root  255u   CHR  136,0       0t0       3 /dev/pts/0



[root@seven ~]# exec 8< ooxx.txt 
[root@seven ~]# cd /proc/$$/fd
[root@seven fd]# ll
总用量 0
lrwx------ 1 root root 64 1月   3 16:11 0 -> /dev/pts/0
lrwx------ 1 root root 64 1月   3 16:11 1 -> /dev/pts/0
lrwx------ 1 root root 64 1月   3 16:11 2 -> /dev/pts/0
lrwx------ 1 root root 64 1月   3 16:11 255 -> /dev/pts/0
lr-x------ 1 root root 64 1月   3 18:20 8 -> /root/ooxx.txt
[root@seven fd]# lsof -p $$
COMMAND  PID USER   FD   TYPE DEVICE  SIZE/OFF     NODE NAME
bash    9737 root  cwd    DIR    0,3         0 52887457 /proc/9737/fd
bash    9737 root  rtd    DIR  253,1      4096        2 /
bash    9737 root  txt    REG  253,1    960608  1050319 /usr/bin/bash
bash    9737 root  mem    REG  253,1     62184  1050007 /usr/lib64/libnss_files-2.17.so
bash    9737 root  mem    REG  253,1 106070960  1050292 /usr/lib/locale/locale-archive
bash    9737 root  mem    REG  253,1   2127336  1049989 /usr/lib64/libc-2.17.so
bash    9737 root  mem    REG  253,1     19776  1049995 /usr/lib64/libdl-2.17.so
bash    9737 root  mem    REG  253,1    174576  1050317 /usr/lib64/libtinfo.so.5.9
bash    9737 root  mem    REG  253,1    164264  1049982 /usr/lib64/ld-2.17.so
bash    9737 root  mem    REG  253,1     26254  1050291 /usr/lib64/gconv/gconv-modules.cache
bash    9737 root    0u   CHR  136,0       0t0        3 /dev/pts/0
bash    9737 root    1u   CHR  136,0       0t0        3 /dev/pts/0
bash    9737 root    2u   CHR  136,0       0t0        3 /dev/pts/0
bash    9737 root    8r   REG  253,1        36   138861 /root/ooxx.txt
bash    9737 root  255u   CHR  136,0       0t0        3 /dev/pts/0
[root@seven fd]# stat ~/ooxx.txt 
  文件："/root/ooxx.txt"
  大小：36              块：8          IO 块：4096   普通文件
设备：fd01h/64769d      Inode：138861      硬链接：1
权限：(0644/-rw-r--r--)  Uid：(    0/    root)   Gid：(    0/    root)
最近访问：2021-01-03 18:19:36.765077198 +0800
最近更改：2021-01-03 18:19:36.765077198 +0800
最近改动：2021-01-03 18:19:36.765077198 +0800
创建时间：-
[root@seven fd]# read  a 0<& 8
[root@seven fd]# echo $a
1
[root@seven fd]# lsof -op $$
COMMAND  PID USER   FD   TYPE DEVICE OFFSET     NODE NAME
bash    9737 root  cwd    DIR    0,3        52887457 /proc/9737/fd
bash    9737 root  rtd    DIR  253,1               2 /
bash    9737 root  txt    REG  253,1         1050319 /usr/bin/bash
bash    9737 root  mem    REG  253,1         1050007 /usr/lib64/libnss_files-2.17.so
bash    9737 root  mem    REG  253,1         1050292 /usr/lib/locale/locale-archive
bash    9737 root  mem    REG  253,1         1049989 /usr/lib64/libc-2.17.so
bash    9737 root  mem    REG  253,1         1049995 /usr/lib64/libdl-2.17.so
bash    9737 root  mem    REG  253,1         1050317 /usr/lib64/libtinfo.so.5.9
bash    9737 root  mem    REG  253,1         1049982 /usr/lib64/ld-2.17.so
bash    9737 root  mem    REG  253,1         1050291 /usr/lib64/gconv/gconv-modules.cache
bash    9737 root    0u   CHR  136,0    0t0        3 /dev/pts/0
bash    9737 root    1u   CHR  136,0    0t0        3 /dev/pts/0
bash    9737 root    2u   CHR  136,0    0t0        3 /dev/pts/0
bash    9737 root    8r   REG  253,1    0t2   138861 /root/ooxx.txt
bash    9737 root  255u   CHR  136,0    0t0        3 /dev/pts/0

```


```sh
## 再开一个bash
[root@seven ~]# echo $$
21068
[root@seven ~]# cd /proc/$$/fd
[root@seven fd]# ll
总用量 0
lrwx------ 1 root root 64 1月   3 18:28 0 -> /dev/pts/2
lrwx------ 1 root root 64 1月   3 18:28 1 -> /dev/pts/2
lrwx------ 1 root root 64 1月   3 18:28 2 -> /dev/pts/2
lrwx------ 1 root root 64 1月   3 18:29 255 -> /dev/pts/2
[root@seven fd]# exec 6< ~/ooxx.txt 
[root@seven fd]# lsof -op $$
COMMAND   PID USER   FD   TYPE DEVICE OFFSET     NODE NAME
bash    21068 root  cwd    DIR    0,3        54250074 /proc/21068/fd
bash    21068 root  rtd    DIR  253,1               2 /
bash    21068 root  txt    REG  253,1         1050319 /usr/bin/bash
bash    21068 root  mem    REG  253,1         1050007 /usr/lib64/libnss_files-2.17.so
bash    21068 root  mem    REG  253,1         1050292 /usr/lib/locale/locale-archive
bash    21068 root  mem    REG  253,1         1049989 /usr/lib64/libc-2.17.so
bash    21068 root  mem    REG  253,1         1049995 /usr/lib64/libdl-2.17.so
bash    21068 root  mem    REG  253,1         1050317 /usr/lib64/libtinfo.so.5.9
bash    21068 root  mem    REG  253,1         1049982 /usr/lib64/ld-2.17.so
bash    21068 root  mem    REG  253,1         1050291 /usr/lib64/gconv/gconv-modules.cache
bash    21068 root    0u   CHR  136,2    0t0        5 /dev/pts/2
bash    21068 root    1u   CHR  136,2    0t0        5 /dev/pts/2
bash    21068 root    2u   CHR  136,2    0t0        5 /dev/pts/2
bash    21068 root    6r   REG  253,1    0t0   138861 /root/ooxx.txt
bash    21068 root  255u   CHR  136,2    0t0        5 /dev/pts/2
[root@seven fd]# read a <& 6
[root@seven fd]# echo $a
1
[root@seven fd]# read a <& 6
[root@seven fd]# echo $a
2
[root@seven fd]# lsof -op $$
COMMAND   PID USER   FD   TYPE DEVICE OFFSET     NODE NAME
bash    21068 root  cwd    DIR    0,3        54250074 /proc/21068/fd
bash    21068 root  rtd    DIR  253,1               2 /
bash    21068 root  txt    REG  253,1         1050319 /usr/bin/bash
bash    21068 root  mem    REG  253,1         1050007 /usr/lib64/libnss_files-2.17.so
bash    21068 root  mem    REG  253,1         1050292 /usr/lib/locale/locale-archive
bash    21068 root  mem    REG  253,1         1049989 /usr/lib64/libc-2.17.so
bash    21068 root  mem    REG  253,1         1049995 /usr/lib64/libdl-2.17.so
bash    21068 root  mem    REG  253,1         1050317 /usr/lib64/libtinfo.so.5.9
bash    21068 root  mem    REG  253,1         1049982 /usr/lib64/ld-2.17.so
bash    21068 root  mem    REG  253,1         1050291 /usr/lib64/gconv/gconv-modules.cache
bash    21068 root    0u   CHR  136,2    0t0        5 /dev/pts/2
bash    21068 root    1u   CHR  136,2    0t0        5 /dev/pts/2
bash    21068 root    2u   CHR  136,2    0t0        5 /dev/pts/2
bash    21068 root    6r   REG  253,1    0t4   138861 /root/ooxx.txt
bash    21068 root  255u   CHR  136,2    0t0        5 /dev/pts/2
[root@seven fd]#
```


```sh
exec 8<> /dev/tcp/www.baidu.com/80
cd /proc/$$/fd
ll
lsof -op $$
```


```sh
# 任何程序都有
# 0：标准输入
# 1：标准输出
# 2：错误输出

cd /proc

$$: 当前bash的pid
$BASHPID

# 当前进程所有文件描述符
cd /proc/$$/fd
ll  
# 文件描述符细节
lsof -op $$

# 重定向：不是命令，是机制
输入
输出
<
>

ls ./ 1> ~/ls.out
cat 0< ooxx.txt 1> cat.out


read a 0< cat.out
echo $a


ls ./ /ooxx 1> ls01.out 2> ls02.out
ls ./ /ooxx 1> ls03.out 2> ls03.out
ls ./ /ooxx 1> ls04.txt 2>& 1


head ooxx.txt
head -8 ooxx.txt 

tail ooxx.txt
tail -8 ooxx.txt

# 文件第八行
head -8 ooxx.txt | tail -1


## 父子进程

[root@seven ~]# echo $$
9737
[root@seven ~]# /bin/bash
[root@seven ~]# echo $$
20678
[root@seven ~]# pstree
systemd─┬─AliSecGuard───6*[{AliSecGuard}]
        ├─AliYunDun───22*[{AliYunDun}]
        ├─AliYunDunUpdate───3*[{AliYunDunUpdate}]
        ├─2*[agetty]
        ├─aliyun-service───7*[{aliyun-service}]
        ├─argusagent───/usr/local/clou───18*[{/usr/local/clou}]
        ├─assist_daemon───7*[{assist_daemon}]
        ├─atd
        ├─auditd───{auditd}
        ├─crond
        ├─dbus-daemon
        ├─dhclient
        ├─irqbalance
        ├─java───43*[{java}]
        ├─mysqld───39*[{mysqld}]
        ├─nginx───2*[nginx]
        ├─ntpd
        ├─polkitd───5*[{polkitd}]
        ├─reportor───2*[{reportor}]
        ├─rsyslogd───2*[{rsyslogd}]
        ├─sshd─┬─sshd─┬─bash───bash───pstree
        │      │      ├─bash───top
        │      │      └─bash───sleep
        │      └─sshd───6*[sftp-server]
        ├─systemd-journal
        ├─systemd-logind
        ├─systemd-udevd
        └─tuned───4*[{tuned}]
[root@seven ~]# 
[root@seven ~]# ps -fe | grep 9737
root      9737  9735  0 16:11 pts/0    00:00:00 -bash
root     19737     1  0  2020 ?        00:05:40 [watchdog/0]
root     20678  9737  0 19:31 pts/0    00:00:00 /bin/bash
root     21235 20678  0 19:31 pts/0    00:00:00 grep --color=auto 9737
[root@seven ~]# exit
exit
[root@seven ~]# echo $$
9737
[root@seven ~]# 


# export
[root@seven ~]# x=100
[root@seven ~]# echo $x
100
[root@seven ~]# /bin/bash
[root@seven ~]# echo $x

[root@seven ~]# exit
exit
[root@seven ~]# export x
[root@seven ~]# /bin/bash
[root@seven ~]# echo $x
100
[root@seven ~]# 

# 指令块
{ echo "hello"; echo "world"; }


# 管道两边开启子进程
[root@seven ~]# a=1
[root@seven ~]# echo $a
1
[root@seven ~]# { a=9; echo "hello"; } | cat 
hello
[root@seven ~]# echo $a
1


# $$优先级高于管道| 
[root@seven ~]# echo $$
24353
[root@seven ~]# echo $$ | cat
24353
[root@seven ~]# echo $BASHPID | cat
31131
[root@seven ~]# 


# 管道 pipe
[root@seven ~]# echo $$
24353
[root@seven ~]# { echo $BASHPID; read x; } | { cat; echo $BASHPID; read y; }
3347

# 再开一个bash
[root@seven ~]# ps -fe | grep 24353
root      3347 24353  0 19:46 pts/0    00:00:00 /bin/bash
root      3348 24353  0 19:46 pts/0    00:00:00 /bin/bash
root      4819  3514  0 19:46 pts/2    00:00:00 grep --color=auto 24353
root     24353  9737  0 19:34 pts/0    00:00:00 /bin/bash
[root@seven ~]# cd /proc/3347/fd
[root@seven fd]# ll
总用量 0
lrwx------ 1 root root 64 1月   3 19:46 0 -> /dev/pts/0
l-wx------ 1 root root 64 1月   3 19:46 1 -> pipe:[55629994]
lrwx------ 1 root root 64 1月   3 19:46 2 -> /dev/pts/0
lrwx------ 1 root root 64 1月   3 19:46 255 -> /dev/pts/0
lr-x------ 1 root root 64 1月   3 19:46 8 -> /root/ooxx.txt
[root@seven fd]# cd /proc/3348/fd
[root@seven fd]# ll
总用量 0
lr-x------ 1 root root 64 1月   3 19:46 0 -> pipe:[55629994]
lrwx------ 1 root root 64 1月   3 19:46 1 -> /dev/pts/0
lrwx------ 1 root root 64 1月   3 19:46 2 -> /dev/pts/0
lrwx------ 1 root root 64 1月   3 19:46 255 -> /dev/pts/0
lr-x------ 1 root root 64 1月   3 19:46 8 -> /root/ooxx.txt
[root@seven fd]# lsof -op 3347
COMMAND  PID USER   FD   TYPE DEVICE OFFSET     NODE NAME
bash    3347 root  cwd    DIR  253,1          131073 /root
bash    3347 root  rtd    DIR  253,1               2 /
bash    3347 root  txt    REG  253,1         1050319 /usr/bin/bash
bash    3347 root  mem    REG  253,1         1050007 /usr/lib64/libnss_files-2.17.so
bash    3347 root  mem    REG  253,1         1050292 /usr/lib/locale/locale-archive
bash    3347 root  mem    REG  253,1         1049989 /usr/lib64/libc-2.17.so
bash    3347 root  mem    REG  253,1         1049995 /usr/lib64/libdl-2.17.so
bash    3347 root  mem    REG  253,1         1050317 /usr/lib64/libtinfo.so.5.9
bash    3347 root  mem    REG  253,1         1049982 /usr/lib64/ld-2.17.so
bash    3347 root  mem    REG  253,1         1050291 /usr/lib64/gconv/gconv-modules.cache
bash    3347 root    0u   CHR  136,0    0t0        3 /dev/pts/0
bash    3347 root    1w  FIFO    0,8    0t0 55629994 pipe
bash    3347 root    2u   CHR  136,0    0t0        3 /dev/pts/0
bash    3347 root    8r   REG  253,1    0t2   138861 /root/ooxx.txt
bash    3347 root  255u   CHR  136,0    0t0        3 /dev/pts/0
[root@seven fd]# lsof -op 3348
COMMAND  PID USER   FD   TYPE DEVICE OFFSET     NODE NAME
bash    3348 root  cwd    DIR  253,1          131073 /root
bash    3348 root  rtd    DIR  253,1               2 /
bash    3348 root  txt    REG  253,1         1050319 /usr/bin/bash
bash    3348 root  mem    REG  253,1         1050007 /usr/lib64/libnss_files-2.17.so
bash    3348 root  mem    REG  253,1         1050292 /usr/lib/locale/locale-archive
bash    3348 root  mem    REG  253,1         1049989 /usr/lib64/libc-2.17.so
bash    3348 root  mem    REG  253,1         1049995 /usr/lib64/libdl-2.17.so
bash    3348 root  mem    REG  253,1         1050317 /usr/lib64/libtinfo.so.5.9
bash    3348 root  mem    REG  253,1         1049982 /usr/lib64/ld-2.17.so
bash    3348 root  mem    REG  253,1         1050291 /usr/lib64/gconv/gconv-modules.cache
bash    3348 root    0r  FIFO    0,8    0t0 55629994 pipe
bash    3348 root    1u   CHR  136,0    0t0        3 /dev/pts/0
bash    3348 root    2u   CHR  136,0    0t0        3 /dev/pts/0
bash    3348 root    8r   REG  253,1    0t2   138861 /root/ooxx.txt
bash    3348 root  255u   CHR  136,0    0t0        3 /dev/pts/0
[root@seven fd]# 

```


## 缓存

int 0x80
int cpu指令
0x80：128
1000 0000
值、寄存器

中断描述符表
0
1
2
128 call back（保护现场、切换用户态、内核态）
255

协处理器 DMA
- DMA，全称Direct Memory Access，即直接存储器访问。


```sh
rm -rf *out*
javac OSFileIO.java
strace -ff -o out java OSFileIO $1

```