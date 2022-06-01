---
# 这是侧边栏索引
index: 2
# 这是页面的图标

# 这是文章的标题
title: Vector
category:
  - 教程
# 此页面会出现在首页的文章板块中
star: true
---

```cpp
//二维vector初始化
vector< vector<int> > vt;//初始化一个 二维vector
vector<vector<int> > vect(vt);//使用另一个 二维 vector 初始化当前二维vector
vector< vector<int> > vec(row,vector<int>(column));//初始化一个 二维的vector 行row,列column,且值为0
vector<vector<int> > visited(row,vector<int>(column,6));//初始化一个 二维vector 行row,列column ,且 值为data=6 自定义data;
vector<vector<int> > vecto(row,vector<int>(vt[0].begin()+1,vt[0].begin()+3));////初始化一个 二维vector 行row,第二个参数为一维vector;

```

