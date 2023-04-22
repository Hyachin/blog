import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base:"/blog/",
  title: "前端星球",
  description: "A VitePress Site",
  lastUpdated:true,
  head:[
    ['link', { rel: 'icon', href: '/favicon.ico' }]
  ],
  themeConfig: {
    logo:"/logo.png",
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '中级前端进阶', 
      items:[
        {text:'前端可视化',link:'/intermediate/前端可视化'}
      ]
    }
    ],

    sidebar: [
      {
        text: '中级前端进阶',
        items: [
          { text: '前端可视化', link: '/intermediate/前端可视化' },
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
