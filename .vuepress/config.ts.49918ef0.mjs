// .vuepress/config.ts
import { defineUserConfig } from "vuepress";
import recoTheme from "vuepress-theme-reco";
import { viteBundler } from "@vuepress/bundler-vite";
var config_default = defineUserConfig({
  base: "/my-blog/",
  title: "Li Zhiyang's Blog",
  description: "Just playing around",
  bundler: viteBundler(),
  // bundler: webpackBundler(),
  theme: recoTheme({
    logo: "/logo.svg",
    author: "lizhiyang",
    authorAvatar: "/head.webp",
    docsRepo: "https://github.com/vuepress-reco/vuepress-theme-reco-next",
    docsBranch: "main",
    docsDir: "example",
    lastUpdatedText: "",
    // series 为原 sidebar
    // series: {
    //   "/docs/theme-reco/": [
    //     {
    //       text: "module one",
    //       children: ["home", "theme"],
    //     },
    //     {
    //       text: "module two",
    //       children: ["api", "plugin"],
    //     },
    //   ],
    // },
    navbar: [
      { text: "\u9996\u9875", link: "/" },
      { text: "\u535A\u5BA2", link: "/categories/yewuzujiankaifa/1.html" },
      { text: "\u6807\u7B7E", link: "/tags/monaco-editor/1.html" }
      // {
      //   text: "Docs",
      //   children: [
      //     { text: "vuepress-reco", link: "/docs/theme-reco/theme" },
      //     { text: "vuepress-theme-reco", link: "/blogs/other/guide" },
      //   ],
      // },
    ]
    // bulletin: {
    //   body: [
    //     {
    //       type: "text",
    //       content: `🎉🎉🎉 reco 主题 2.x 已经接近 Beta 版本，在发布 Latest 版本之前不会再有大的更新，大家可以尽情尝鲜了，并且希望大家在 QQ 群和 GitHub 踊跃反馈使用体验，我会在第一时间响应。`,
    //       style: "font-size: 12px;",
    //     },
    //     {
    //       type: "hr",
    //     },
    //     {
    //       type: "title",
    //       content: "QQ 群",
    //     },
    //     {
    //       type: "text",
    //       content: `
    //       <ul>
    //         <li>QQ群1：1037296104</li>
    //         <li>QQ群2：1061561395</li>
    //         <li>QQ群3：962687802</li>
    //       </ul>`,
    //       style: "font-size: 12px;",
    //     },
    //     {
    //       type: "hr",
    //     },
    //     {
    //       type: "title",
    //       content: "GitHub",
    //     },
    //     {
    //       type: "text",
    //       content: `
    //       <ul>
    //         <li><a href="https://github.com/vuepress-reco/vuepress-theme-reco-next/issues">Issues<a/></li>
    //         <li><a href="https://github.com/vuepress-reco/vuepress-theme-reco-next/discussions/1">Discussions<a/></li>
    //       </ul>`,
    //       style: "font-size: 12px;",
    //     },
    //     {
    //       type: "hr",
    //     },
    //     {
    //       type: "buttongroup",
    //       children: [
    //         {
    //           text: "打赏",
    //           link: "/docs/others/donate.html",
    //         },
    //       ],
    //     },
    //   ],
    // },
    // commentConfig: {
    //   type: 'valine',
    //   // options 与 1.x 的 valineConfig 配置一致
    //   options: {
    //     // appId: 'xxx',
    //     // appKey: 'xxx',
    //     // placeholder: '填写邮箱可以收到回复提醒哦！',
    //     // verify: true, // 验证码服务
    //     // notify: true,
    //     // recordIP: true,
    //     // hideComments: true // 隐藏评论
    //   },
    // },
  })
  // debug: true,
});
export {
  config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLnZ1ZXByZXNzL2NvbmZpZy50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkM6L1VzZXJzLzIwNjU4L0Rlc2t0b3AvbXktcmVjby1ibG9nL2Jsb2cvLnZ1ZXByZXNzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFwyMDY1OFxcXFxEZXNrdG9wXFxcXG15LXJlY28tYmxvZ1xcXFxibG9nXFxcXC52dWVwcmVzc1xcXFxjb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0M6L1VzZXJzLzIwNjU4L0Rlc2t0b3AvbXktcmVjby1ibG9nL2Jsb2cvLnZ1ZXByZXNzL2NvbmZpZy50c1wiO2ltcG9ydCB7IGRlZmluZVVzZXJDb25maWcgfSBmcm9tIFwidnVlcHJlc3NcIjtcclxuaW1wb3J0IHJlY29UaGVtZSBmcm9tIFwidnVlcHJlc3MtdGhlbWUtcmVjb1wiO1xyXG5pbXBvcnQgeyB2aXRlQnVuZGxlciB9IGZyb20gJ0B2dWVwcmVzcy9idW5kbGVyLXZpdGUnXHJcbmltcG9ydCB7IHdlYnBhY2tCdW5kbGVyIH0gZnJvbSAnQHZ1ZXByZXNzL2J1bmRsZXItd2VicGFjaydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGRlZmluZVVzZXJDb25maWcoe1xyXG4gIGJhc2U6ICcvbXktYmxvZy8nLFxyXG4gIHRpdGxlOiBcIkxpIFpoaXlhbmcncyBCbG9nXCIsXHJcbiAgZGVzY3JpcHRpb246IFwiSnVzdCBwbGF5aW5nIGFyb3VuZFwiLFxyXG4gIGJ1bmRsZXI6IHZpdGVCdW5kbGVyKCksXHJcbiAgLy8gYnVuZGxlcjogd2VicGFja0J1bmRsZXIoKSxcclxuICB0aGVtZTogcmVjb1RoZW1lKHtcclxuICAgIGxvZ286IFwiL2xvZ28uc3ZnXCIsXHJcbiAgICBhdXRob3I6IFwibGl6aGl5YW5nXCIsXHJcbiAgICBhdXRob3JBdmF0YXI6IFwiL2hlYWQud2VicFwiLFxyXG4gICAgZG9jc1JlcG86IFwiaHR0cHM6Ly9naXRodWIuY29tL3Z1ZXByZXNzLXJlY28vdnVlcHJlc3MtdGhlbWUtcmVjby1uZXh0XCIsXHJcbiAgICBkb2NzQnJhbmNoOiBcIm1haW5cIixcclxuICAgIGRvY3NEaXI6IFwiZXhhbXBsZVwiLFxyXG4gICAgbGFzdFVwZGF0ZWRUZXh0OiBcIlwiLFxyXG4gICAgLy8gc2VyaWVzIFx1NEUzQVx1NTM5RiBzaWRlYmFyXHJcbiAgICAvLyBzZXJpZXM6IHtcclxuICAgIC8vICAgXCIvZG9jcy90aGVtZS1yZWNvL1wiOiBbXHJcbiAgICAvLyAgICAge1xyXG4gICAgLy8gICAgICAgdGV4dDogXCJtb2R1bGUgb25lXCIsXHJcbiAgICAvLyAgICAgICBjaGlsZHJlbjogW1wiaG9tZVwiLCBcInRoZW1lXCJdLFxyXG4gICAgLy8gICAgIH0sXHJcbiAgICAvLyAgICAge1xyXG4gICAgLy8gICAgICAgdGV4dDogXCJtb2R1bGUgdHdvXCIsXHJcbiAgICAvLyAgICAgICBjaGlsZHJlbjogW1wiYXBpXCIsIFwicGx1Z2luXCJdLFxyXG4gICAgLy8gICAgIH0sXHJcbiAgICAvLyAgIF0sXHJcbiAgICAvLyB9LFxyXG4gICAgbmF2YmFyOiBbXHJcbiAgICAgIHsgdGV4dDogXCJcdTk5OTZcdTk4NzVcIiwgbGluazogXCIvXCIgfSxcclxuICAgICAgeyB0ZXh0OiBcIlx1NTM1QVx1NUJBMlwiLCBsaW5rOiBcIi9jYXRlZ29yaWVzL3lld3V6dWppYW5rYWlmYS8xLmh0bWxcIiB9LFxyXG4gICAgICB7IHRleHQ6IFwiXHU2ODA3XHU3QjdFXCIsIGxpbms6IFwiL3RhZ3MvbW9uYWNvLWVkaXRvci8xLmh0bWxcIiB9LFxyXG4gICAgICAvLyB7XHJcbiAgICAgIC8vICAgdGV4dDogXCJEb2NzXCIsXHJcbiAgICAgIC8vICAgY2hpbGRyZW46IFtcclxuICAgICAgLy8gICAgIHsgdGV4dDogXCJ2dWVwcmVzcy1yZWNvXCIsIGxpbms6IFwiL2RvY3MvdGhlbWUtcmVjby90aGVtZVwiIH0sXHJcbiAgICAgIC8vICAgICB7IHRleHQ6IFwidnVlcHJlc3MtdGhlbWUtcmVjb1wiLCBsaW5rOiBcIi9ibG9ncy9vdGhlci9ndWlkZVwiIH0sXHJcbiAgICAgIC8vICAgXSxcclxuICAgICAgLy8gfSxcclxuICAgIF0sXHJcbiAgICAvLyBidWxsZXRpbjoge1xyXG4gICAgLy8gICBib2R5OiBbXHJcbiAgICAvLyAgICAge1xyXG4gICAgLy8gICAgICAgdHlwZTogXCJ0ZXh0XCIsXHJcbiAgICAvLyAgICAgICBjb250ZW50OiBgXHVEODNDXHVERjg5XHVEODNDXHVERjg5XHVEODNDXHVERjg5IHJlY28gXHU0RTNCXHU5ODk4IDIueCBcdTVERjJcdTdFQ0ZcdTYzQTVcdThGRDEgQmV0YSBcdTcyNDhcdTY3MkNcdUZGMENcdTU3MjhcdTUzRDFcdTVFMDMgTGF0ZXN0IFx1NzI0OFx1NjcyQ1x1NEU0Qlx1NTI0RFx1NEUwRFx1NEYxQVx1NTE4RFx1NjcwOVx1NTkyN1x1NzY4NFx1NjZGNFx1NjVCMFx1RkYwQ1x1NTkyN1x1NUJCNlx1NTNFRlx1NEVFNVx1NUMzRFx1NjBDNVx1NUMxRFx1OUM5Q1x1NEU4Nlx1RkYwQ1x1NUU3Nlx1NEUxNFx1NUUwQ1x1NjcxQlx1NTkyN1x1NUJCNlx1NTcyOCBRUSBcdTdGQTRcdTU0OEMgR2l0SHViIFx1OEUwQVx1OERDM1x1NTNDRFx1OTk4OFx1NEY3Rlx1NzUyOFx1NEY1M1x1OUE4Q1x1RkYwQ1x1NjIxMVx1NEYxQVx1NTcyOFx1N0IyQ1x1NEUwMFx1NjVGNlx1OTVGNFx1NTRDRFx1NUU5NFx1MzAwMmAsXHJcbiAgICAvLyAgICAgICBzdHlsZTogXCJmb250LXNpemU6IDEycHg7XCIsXHJcbiAgICAvLyAgICAgfSxcclxuICAgIC8vICAgICB7XHJcbiAgICAvLyAgICAgICB0eXBlOiBcImhyXCIsXHJcbiAgICAvLyAgICAgfSxcclxuICAgIC8vICAgICB7XHJcbiAgICAvLyAgICAgICB0eXBlOiBcInRpdGxlXCIsXHJcbiAgICAvLyAgICAgICBjb250ZW50OiBcIlFRIFx1N0ZBNFwiLFxyXG4gICAgLy8gICAgIH0sXHJcbiAgICAvLyAgICAge1xyXG4gICAgLy8gICAgICAgdHlwZTogXCJ0ZXh0XCIsXHJcbiAgICAvLyAgICAgICBjb250ZW50OiBgXHJcbiAgICAvLyAgICAgICA8dWw+XHJcbiAgICAvLyAgICAgICAgIDxsaT5RUVx1N0ZBNDFcdUZGMUExMDM3Mjk2MTA0PC9saT5cclxuICAgIC8vICAgICAgICAgPGxpPlFRXHU3RkE0Mlx1RkYxQTEwNjE1NjEzOTU8L2xpPlxyXG4gICAgLy8gICAgICAgICA8bGk+UVFcdTdGQTQzXHVGRjFBOTYyNjg3ODAyPC9saT5cclxuICAgIC8vICAgICAgIDwvdWw+YCxcclxuICAgIC8vICAgICAgIHN0eWxlOiBcImZvbnQtc2l6ZTogMTJweDtcIixcclxuICAgIC8vICAgICB9LFxyXG4gICAgLy8gICAgIHtcclxuICAgIC8vICAgICAgIHR5cGU6IFwiaHJcIixcclxuICAgIC8vICAgICB9LFxyXG4gICAgLy8gICAgIHtcclxuICAgIC8vICAgICAgIHR5cGU6IFwidGl0bGVcIixcclxuICAgIC8vICAgICAgIGNvbnRlbnQ6IFwiR2l0SHViXCIsXHJcbiAgICAvLyAgICAgfSxcclxuICAgIC8vICAgICB7XHJcbiAgICAvLyAgICAgICB0eXBlOiBcInRleHRcIixcclxuICAgIC8vICAgICAgIGNvbnRlbnQ6IGBcclxuICAgIC8vICAgICAgIDx1bD5cclxuICAgIC8vICAgICAgICAgPGxpPjxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vdnVlcHJlc3MtcmVjby92dWVwcmVzcy10aGVtZS1yZWNvLW5leHQvaXNzdWVzXCI+SXNzdWVzPGEvPjwvbGk+XHJcbiAgICAvLyAgICAgICAgIDxsaT48YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL3Z1ZXByZXNzLXJlY28vdnVlcHJlc3MtdGhlbWUtcmVjby1uZXh0L2Rpc2N1c3Npb25zLzFcIj5EaXNjdXNzaW9uczxhLz48L2xpPlxyXG4gICAgLy8gICAgICAgPC91bD5gLFxyXG4gICAgLy8gICAgICAgc3R5bGU6IFwiZm9udC1zaXplOiAxMnB4O1wiLFxyXG4gICAgLy8gICAgIH0sXHJcbiAgICAvLyAgICAge1xyXG4gICAgLy8gICAgICAgdHlwZTogXCJoclwiLFxyXG4gICAgLy8gICAgIH0sXHJcbiAgICAvLyAgICAge1xyXG4gICAgLy8gICAgICAgdHlwZTogXCJidXR0b25ncm91cFwiLFxyXG4gICAgLy8gICAgICAgY2hpbGRyZW46IFtcclxuICAgIC8vICAgICAgICAge1xyXG4gICAgLy8gICAgICAgICAgIHRleHQ6IFwiXHU2MjUzXHU4RDRGXCIsXHJcbiAgICAvLyAgICAgICAgICAgbGluazogXCIvZG9jcy9vdGhlcnMvZG9uYXRlLmh0bWxcIixcclxuICAgIC8vICAgICAgICAgfSxcclxuICAgIC8vICAgICAgIF0sXHJcbiAgICAvLyAgICAgfSxcclxuICAgIC8vICAgXSxcclxuICAgIC8vIH0sXHJcbiAgICAvLyBjb21tZW50Q29uZmlnOiB7XHJcbiAgICAvLyAgIHR5cGU6ICd2YWxpbmUnLFxyXG4gICAgLy8gICAvLyBvcHRpb25zIFx1NEUwRSAxLnggXHU3Njg0IHZhbGluZUNvbmZpZyBcdTkxNERcdTdGNkVcdTRFMDBcdTgxRjRcclxuICAgIC8vICAgb3B0aW9uczoge1xyXG4gICAgLy8gICAgIC8vIGFwcElkOiAneHh4JyxcclxuICAgIC8vICAgICAvLyBhcHBLZXk6ICd4eHgnLFxyXG4gICAgLy8gICAgIC8vIHBsYWNlaG9sZGVyOiAnXHU1ODZCXHU1MTk5XHU5MEFFXHU3QkIxXHU1M0VGXHU0RUU1XHU2NTM2XHU1MjMwXHU1NkRFXHU1OTBEXHU2M0QwXHU5MTkyXHU1NEU2XHVGRjAxJyxcclxuICAgIC8vICAgICAvLyB2ZXJpZnk6IHRydWUsIC8vIFx1OUE4Q1x1OEJDMVx1NzgwMVx1NjcwRFx1NTJBMVxyXG4gICAgLy8gICAgIC8vIG5vdGlmeTogdHJ1ZSxcclxuICAgIC8vICAgICAvLyByZWNvcmRJUDogdHJ1ZSxcclxuICAgIC8vICAgICAvLyBoaWRlQ29tbWVudHM6IHRydWUgLy8gXHU5NjkwXHU4NUNGXHU4QkM0XHU4QkJBXHJcbiAgICAvLyAgIH0sXHJcbiAgICAvLyB9LFxyXG4gIH0pLFxyXG4gIC8vIGRlYnVnOiB0cnVlLFxyXG59KTtcclxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUFzVSxTQUFTLHdCQUF3QjtBQUN2VyxPQUFPLGVBQWU7QUFDdEIsU0FBUyxtQkFBbUI7QUFHNUIsSUFBTyxpQkFBUSxpQkFBaUI7QUFBQSxFQUM5QixNQUFNO0FBQUEsRUFDTixPQUFPO0FBQUEsRUFDUCxhQUFhO0FBQUEsRUFDYixTQUFTLFlBQVk7QUFBQTtBQUFBLEVBRXJCLE9BQU8sVUFBVTtBQUFBLElBQ2YsTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLElBQ1IsY0FBYztBQUFBLElBQ2QsVUFBVTtBQUFBLElBQ1YsWUFBWTtBQUFBLElBQ1osU0FBUztBQUFBLElBQ1QsaUJBQWlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQWNqQixRQUFRO0FBQUEsTUFDTixFQUFFLE1BQU0sZ0JBQU0sTUFBTSxJQUFJO0FBQUEsTUFDeEIsRUFBRSxNQUFNLGdCQUFNLE1BQU0scUNBQXFDO0FBQUEsTUFDekQsRUFBRSxNQUFNLGdCQUFNLE1BQU0sNkJBQTZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVFuRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFvRUYsQ0FBQztBQUFBO0FBRUgsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
