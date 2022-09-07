---
# 这是侧边栏索引
index: 1
icon: biji
# 这是文章的标题
title: C++笔记
date: 2022-04-20
category:
  - cpp
# 此页面会出现在首页的文章板块中
star: true
# 你可以自定义页脚
footer: 
---

# C++ Tutorial



## vector

```cpp
//二维vector初始化
vector< vector<int> > vt;//初始化一个 二维vector
vector<vector<int> > vect(vt);//使用另一个 二维 vector 初始化当前二维vector
vector< vector<int> > vec(row,vector<int>(column));//初始化一个 二维的vector 行row,列column,且值为0
vector<vector<int> > visited(row,vector<int>(column,6));//初始化一个 二维vector 行row,列column ,且 值为data=6 自定义data;
vector<vector<int> > vecto(row,vector<int>(vt[0].begin()+1,vt[0].begin()+3));////初始化一个 二维vector 行row,第二个参数为一维vector;
```



## string

[C++ String类 （C++字符串）完全攻略](http://c.biancheng.net/view/400.html)



## STL

### multiset

与set的区别是，可以添加重复的元素

### auto x 和 auto &x

**`For(auto x : str)`是利用`x`生成`str`中每一个值的复制，对`x`的赋值不会影响到原容器。**

**`For(auto &x : str)`是利用`x`生成`str`中每一个值的引用，对`x`的操作会影响到原容器。**



### PriorityQueue 优先级队列

[优先级队列](https://blog.csdn.net/qjh5606/article/details/81630611)



## 位运算

## **位操作符**

- & 与运算 两个位都是 1 时，结果才为 1，否则为 0，如

  > &emsp;1 0 0 1 1
  >
  > & 1 1 0 0 1 
  >
  > &nbsp;&nbsp;`--------`
  >
  > &emsp;1 0 0 0 1

- | 或运算 两个位都是 0 时，结果才为 0，否则为 1，如

  > &emsp;1 0 0 1 1
  >
  > & 1 1 0 0 1 
  >
  > &nbsp;&nbsp;`--------`
  >
  > &emsp;1 1 0 1 1

- ^ 异或运算，两个位相同则为 0，不同则为 1，如

  > &emsp;1 0 0 1 1
  >
  > & 1 1 0 0 1 
  >
  > &nbsp;&nbsp;`--------`
  >
  > &emsp;0 1 0 1 0

- ~ 取反运算，0 则变为 1，1 则变为 0，如

  > ~ 1 0 0 1 1 
  >
  > &nbsp;&nbsp;`--------` 
  >
  > &emsp;0 1 1 0 0

- << 左移运算，向左进行移位操作，高位丢弃，低位补 0，如

```
int a = 8; a << 3; 
移位前：0000 0000 0000 0000 0000 0000 0000 1000 
移位后：0000 0000 0000 0000 0000 0000 0100 0000
```

- \>\> 右移运算，向右进行移位操作，对无符号数，高位补 0，对于有符号数，高位补符号位，如

`unsigned int a = 8; a >> 3;`

移位前：0000 0000 0000 0000 0000 0000 0000 1000 

移位后：0000 0000 0000 0000 0000 0000 0000 0001

`int a = -8; a >> 3; `

移位前：1111 1111 1111 1111 1111 1111 1111 1000 

移位后：1111 1111 1111 1111 1111 1111 1111 1111`

### 位运算小技巧

**或运算携带信息**
**再进行与操作解析出是否携带信息**
```cpp
	// 网络编程中常见这种或语句
	/*
	 * 该事件携带三个事件的信息，EPOLLONESHOT EPOLLRDHUP EPOLLET
	 * 正常读不出来信息，上面三个宏定义无 0
	 */
	connEvent_ = EPOLLONESHOT | EPOLLRDHUP | EPOLLET;
	
	// 再进行位与操作可以判断是否含有某些信息
	bool flag = connEvent_ & EPOLLET;
	/*
	 * 上述 flag 一定为 true，非零，因为三个宏定义没有0，位或操作之后再位与，则能解析出来 EPOLLET
	 * 又因为宏定义非 0，所以返回值为非0数，即为真，则可以判断该事件含有EPOLLET信息
	 */
	
```



## 分割字符串函数

```cpp
// s: 原始字符串
// ip: 接收分割后的字符串数组
// c: 分割字符
// 例如：s = "1.117.176.213"
// 分割后 ip = {"1", "117", 176, 213}

void split(string s, vector<string>&ip, char c){
    stringstream ss(s);
    string tmp;
    while(getline(ss,tmp,c))ip.push_back(tmp);
    if(s.size()>0&&s.back()==c)ip.push_back({});
}
```

