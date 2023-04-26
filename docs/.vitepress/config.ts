import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base:"/blog/",
  title: "Hyachin的博客",
  description: "锵锵，这里有一个博客",
  lastUpdated:true,
  head:[
    ['link', { rel: 'icon', href: '/favicon.ico' }]
  ],
  themeConfig: {
    outline:[1,6],
    logo:"/logo.png",
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { 
        text: '中级前端进阶', 
        items:[
          {text:'前端可视化',link:'/intermediate/前端可视化'}
        ]
      },
      { 
        text: '软考', 
        items:[
          {
            text:'中级',
            items:[
              {text:'软件设计师',link:'/software/designer'}
            ]
          }
        ]
      },
    ],

    sidebar: [
      {
        text: '中级前端进阶',
        items: [
          { text: '前端可视化', link: '/intermediate/前端可视化' },
        ]
      },
      {
        text: '软考',
        items: [
          { text: '软件设计师', link: '/software/designer' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Hyachin/blog' }
    ],
    lastUpdatedText: "最近更新时间",
    editLink: {
      pattern: 'https://github.com/Hyachin/blog',
      text: 'Edit this page on GitHub'
    }
  }
})
