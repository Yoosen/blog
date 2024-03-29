import { defineNavbarConfig } from "vuepress-theme-hope";

export default defineNavbarConfig([
  { text: "主页", icon: "shouye", link: "/" },
  { text: "使用指南", icon: "guide", link: "/guide/" },
  { 
	text: "笔记", 
    icon: "biji", 
    prefix: "/cpp/",
    children: [
      { text: "C++ Tutorial", icon: "cpp", link: "C++Tutorial" },
      { text: "Vector", icon: "bolt", link: "Vector" },
    ],
  },
  { text: "算法", icon: "suanfabaoguanli", link: "/algorithm/" },
  { 
	text: "面试", 
    icon: "tanhuamianshi", 
    prefix: "/interview/",
    children: [
      { text: "面试", icon: "mianshianpai", link: "question" },
      { text: "MySQL", icon: "mysql", link: "MySQL" },
      { text: "操作系统", icon: "caozuoxitong", link: "os" },
      { text: "计算机网络", icon: "networks", link: "network" },
    ],
  },
]);
