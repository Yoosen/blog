---
# 这是侧边栏索引
index: 1
# 这是页面的图标
icon: bolt
# 这是文章的标题
title: C++
category:
  - 教程
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

  > ​    1 0 0 1 1
  >
  > & 1 1 0 0 1 
  >
  >   `--------`
  >
  > ​    1 0 0 0 1

- | 或运算 两个位都是 0 时，结果才为 0，否则为 1，如

  > ​    1 0 0 1 1
  >
  > & 1 1 0 0 1 
  >
  >   `--------`
  >
  > ​    1 1 0 1 1

- ^ 异或运算，两个位相同则为 0，不同则为 1，如

  > ​    1 0 0 1 1
  >
  > & 1 1 0 0 1 
  >
  >   `--------`
  >
  > ​    0 1 0 1 0

- ~ 取反运算，0 则变为 1，1 则变为 0，如

  > ~ 1 0 0 1 1 
  >
  >  `--------` 
  >
  >    0 1 1 0 0

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
