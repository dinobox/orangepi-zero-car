### 一个使用orange pi zero来驱动的带摄像头的小车

目前还没有使用AI，所以现在仅仅是一个遥控小车，而不是智能小车。这个小车的名字叫monkey。

首先，车子的前后左右，是通过车轮控制的。这个小车一共有3个轮子，2个马达。

马达的转动，靠一个硬件驱动模块来实现。输入5v电压，4个高电平触发，可以让2个马达呈现各种转动状态。

orange pi zero 安装了dietpi。

开启wifi热点。默认ip是192.168.42.1

安装npm

```
apt install npm
```

安装n模块

```
npm install n -g
```
安装稳定版node
```
n stable
```

更新 npm

```

```


```
npm install
```

```
node app.js
```



```
nano /etc/rc.local
```

```
cd /root/monkey
./start.sh
```

```
su root -c "bash /root/monkey/start.sh"
```

