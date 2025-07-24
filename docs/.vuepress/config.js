import { viteBundler } from "@vuepress/bundler-vite";
import { defaultTheme } from "@vuepress/theme-default";
import { searchPlugin } from "@vuepress/plugin-search";
import { readingTimePlugin } from "@vuepress/plugin-reading-time";
import { defineUserConfig } from "vuepress";

export default defineUserConfig({
  bundler: viteBundler(),
  plugins: [
    // plugins configs
    searchPlugin({
      locales: {
        "/": {
          placeholder: "搜索",
        },
        "/en/": {
          placeholder: "Search",
        },
      },
    }),
    readingTimePlugin(),
    // commentPlugin({
    //   provider: "Waline",
    // }),
  ],
  lang: "zh-CN",
  title: "中山大学网络空间安全学院手册",
  description: "共建共享，薪火相传",
  base: "/SYSU-SCST-Application/",

  theme: defaultTheme({
    navbar: [
      {
        text: "生活",
        prefix: "/life/",
        children: [
          {
            text: "衣",
            prefix: "clothing/",
            children: ["weather"],
          },
          {
            text: "食",
            prefix: "eat/",
            children: ["shenzhen", "guangzhou-south"],
          },
          {
            text: "住",
            prefix: "accommodation/",
            children: ["guangzhou-south", "shenzhen"],
          },
          {
            text: "行",
            prefix: "entertainment/",
            children: ["guangzhou-south", "shenzhen"],
          },
        ],
      },

      {
        text: "学习",
        prefix: "/learn/",
        children: [
          {
            text: "课内",
            prefix: "curricular/",
            children: ["majors", "exam", "gpa", "transfer_major"],
          },
          {
            text: "课外",
            prefix: "extra/",
            children: ["contests", "clubs", "research", "internship"],
          },
        ],
      },

      {
        text: "飞跃",
        prefix: "/beyond/",
        children: [
          {
            text: "境内",
            prefix: "mainland/",
            children: ["recommend_graduate", "unified_admission", "phd"],
          },
          {
            text: "境外",
            prefix: "abroad/",
            children: ["master", "phd"],
          },
        ],
      },
      {
        text: "就业",
        prefix: "/employment/",
        children: ["security", "development", "algorithm", "others"],
        // children: [
        //   {
        //     text: "安全",
        //     prefix: "security/",
        //     children: ["README"],
        //   },
        //   {
        //     text: "开发",
        //     prefix: "development/",
        //     children: ["README"],
        //   },
        //   {
        //     text: "算法",
        //     prefix: "algorithm/",
        //     children: ["README"],
        //   },
        // ],
      },
      {
        text: "立命",
        prefix: "/health/",
        children: ["alive_first"],
      },

      {
        text: "其他",
        prefix: "/others/",
        children: ["contributing"],
      },
    ],

    contributors: true,
    repo: "HiUniya/SYSU-SCST-Application/",
    editLink: true,
    docsDir: "docs",
    search: true,
    searchMaxSuggestions: 10,
  }),
});


