import { viteBundler } from "@vuepress/bundler-vite";
import { defineUserConfig } from "vuepress";
import recoTheme from "vuepress-theme-reco";

export default defineUserConfig({
  base: "/my-blog/",
  title: "Li Zhiyang's Blog",
  description: "Frontend notes, product thinking, and small discoveries from daily coding.",
  bundler: viteBundler(),
  theme: recoTheme({
    logo: "/logo.svg",
    author: "Li Zhiyang",
    authorAvatar: "/head.webp",
    docsRepo: "https://github.com/vuepress-reco/vuepress-theme-reco-next",
    docsBranch: "main",
    docsDir: "example",
    lastUpdatedText: "",
    navbar: [
      { text: "首页", link: "/" },
      { text: "文章", link: "/categories/yewuzujiankaifa/1.html" },
      { text: "标签", link: "/tags/monaco-editor/1.html" },
      { text: "GitHub", link: "https://github.com/li-2019220129" },
    ],
  }),
});
