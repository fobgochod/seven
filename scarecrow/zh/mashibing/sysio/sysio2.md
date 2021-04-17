# 内核中PageCache、mmap作用、java文件系统io、nio、内存中缓冲区作用

MMU是Memory Management Unit的缩写，中文名是内存管理单元

缺页

PCB：每个进程在内核中都有一个进程控制块(Processing Control Block)


sysctl -a | grep dirty
```sh
vm.dirty_background_bytes = 0
vm.dirty_background_ratio = 10
vm.dirty_bytes = 0
vm.dirty_ratio = 30
vm.dirty_expire_centisecs = 3000
vm.dirty_writeback_centisecs = 500
```


ll -h && pcstat ooxx.txt

FileOutputStream、 BufferedOutputStream 默认 8kb


jps

strace -ff -o out java OSFileIO $1

lsof -op java-pid

ByteBuffer

RandomAccessFile
FileChannel
MappedByteBuffer

