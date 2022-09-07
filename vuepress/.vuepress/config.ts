import { defineHopeConfig } from "vuepress-theme-hope";
import themeConfig from "./themeConfig";

export default defineHopeConfig({
  lang: "zh-CN",
  title: "Yoosen",
  description: "Yoosen's blog",

  base: "/blog/",

  head: [
	[
	  "script",
	  {
		src: "https://kit.fontawesome.com/ca37c296c5.js",
		crossorigin: "anonymous",
	  },
	],
    [
      "link",
      {
        rel: "stylesheet",
        href: "//at.alicdn.com/t/c/font_3443684_7gukxs1ccvv.css",
      },
    ],
  ],

  themeConfig,
});
