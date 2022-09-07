import { defineSidebarConfig } from "vuepress-theme-hope";

export default defineSidebarConfig([
  "/",
  {
    text: "C++ Tutorial",
    icon: "cpp",
    prefix: "/cpp/",
    children: [
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
  {
    text: "面试",
    icon: "tanhuamianshi",
    prefix: "/interview/",
    children: [
      "question",
      "MySQL",
      "os",
      "network",
    ],
  },
  "/slide",
]);
