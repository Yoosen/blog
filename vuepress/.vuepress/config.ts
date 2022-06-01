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
        href: "//at.alicdn.com/t/font_3443684_71pshnv7jh9.css",
      },
    ],
  ],

  themeConfig,
});
