import { arraySidebar } from "vuepress-theme-hope";

export const software = arraySidebar([
  "/",
  "/home",
  {
    text: "C++ Tutorial",
    icon: "cpp",
    prefix: "/cpp/",
    children: [
      "",
      "C++Tutorial",
      "Vector",
    ],
  },
  {
    text: "算法",
    icon: "suanfabaoguanli",
    prefix: "/algorithm/",
    children: "structure",
  },
]);