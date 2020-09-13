# Windows

## 常用

### 命令
```sh
# 查看端口
netstat -ano
netstat -ano | findstr 8080

# 查看进程
tasklist | findstr java

# 结束进程
taskkill /f /t /im java.exe
```

### 快捷键
```sh
# 讲述人
Windows+Enter 
# 我的电脑
Windows+E
# 运行
Windows+R
# 远程桌面连接
mstsc
# 服务
services.msc
# 注册表编辑器
regedit
# 打开系统属性
sysdm.cpl
# 查看win10系统版本信息
dxdiag
# 记事本
notepad
```

## 路径
```sh
# 任务栏图片
%APPDATA%\Microsoft\Internet Explorer\Quick Launch\User Pinned\TaskBar
# 开始菜单：
%APPDATA%\Microsoft\Windows\Start Menu\Programs
```

## 压测
```sh
# 界面修改、重启生效
regedit>计算机\HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\Tcpip\Parameters
添加 DWORD(32位)值(D)
TcpTimedWaitDelay 小于30(s)

# 命令行修改注册表的值
REG ADD "HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\Tcpip\Parameters" /v MaxFreeTcbs /d "65534" /t REG_DWORD
REG ADD "HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\Tcpip\Parameters" /v MaxHashTableSize /d "65534" /t REG_DWORD
REG ADD "HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\Tcpip\Parameters" /v MaxUserPort /d "65534" /t REG_DWORD
REG ADD "HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\Tcpip\Parameters" /v TcpNumConnections /d "65534" /t REG_DWORD

# 查看动态端口范围
netsh interface ipv4 show dynamicportrange protocol=tcp
netsh int ipv4 show dynamicportrange tcp

# 设置动态端口
netsh int ipv4 set dynamicport tcp start=1024 num=64512

# 查看TCP连接状态的数量
netstat -an|find "ESTABLISHED" /c
netstat -an|find "TIME_WAIT" /c
```