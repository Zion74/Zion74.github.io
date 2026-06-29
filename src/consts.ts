import type { Site, Page, Links, Socials } from "@types"

// Global
export const SITE: Site = {
  TITLE: "Stephen Zheng",
  DESCRIPTION: "郑浩男 (Stephen Zheng) 的个人主页 —— 全栈 & AI Agent 开发者，浙江大学硕士在读。作品集、项目与思考。",
  AUTHOR: "Stephen Zheng",
}

// Work Page
export const WORK: Page = {
  TITLE: "Work",
  DESCRIPTION: "我的实习与工作经历。",
}

// Blog Page
export const BLOG: Page = {
  TITLE: "Blog",
  DESCRIPTION: "项目复盘、技术笔记与一些思考。",
}

// Projects Page
export const PROJECTS: Page = {
  TITLE: "Projects",
  DESCRIPTION: "我做过的产品与项目。",
}

// Search Page
export const SEARCH: Page = {
  TITLE: "Search",
  DESCRIPTION: "按关键词搜索文章与项目。",
}

// Links
export const LINKS: Links = [
  {
    TEXT: "Home",
    HREF: "/",
  },
  {
    TEXT: "Work",
    HREF: "/work",
  },
  {
    TEXT: "Blog",
    HREF: "/blog",
  },
  {
    TEXT: "Projects",
    HREF: "/projects",
  },
]

// Socials
export const SOCIALS: Socials = [
  {
    NAME: "Email",
    ICON: "email",
    TEXT: "stephenzheng74@outlook.com",
    HREF: "mailto:stephenzheng74@outlook.com",
  },
  {
    NAME: "Github",
    ICON: "github",
    TEXT: "Zion74",
    HREF: "https://github.com/Zion74",
  },
]
