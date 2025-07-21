import { defineConfig } from 'vitepress'
import { set_sidebar } from '../utils/auto_create_sidebar'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/anylemon-blog/',
  title: "AnyLemon的编程世界",
  description: "AnyLemon的编程世界，前端，学习！",
  head: [['link', { rel: 'icon', href: '/anylemon-blog/logo.png' }]],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/logo.png',
    nav: [
      {
        text: '前端',
        items: [
          {
            text: 'Vue',
            items: [
              {
                text: 'element-ui',
                link: '/element-ui'
              }
            ]
          },
          {
            text: 'React',
            items: [
              {
                text: '测试',
                link: '/测试'
              }
            ]
          }
        ]
      },
      { text: '学习', link: '/学习/api-examples' },
      { text: '日常', link: '/日常/markdown-examples' }
    ],

    sidebar: {
      '/学习/': set_sidebar('/学习'),
      '/日常/': set_sidebar('/日常'),
    },

    // aside: 'left',

    outline: {
      level: 'deep',
      label: '文章目录'
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/AnyLemon' },
      {
        icon: {
          svg: '<svg t="1752680372381" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5557" width="200" height="200"><path d="M512 1024C229.2224 1024 0 794.7776 0 512S229.2224 0 512 0s512 229.2224 512 512-229.2224 512-512 512z m259.1488-568.8832H480.4096a25.2928 25.2928 0 0 0-25.2928 25.2928l-0.0256 63.2064c0 13.952 11.3152 25.2928 25.2672 25.2928h177.024c13.9776 0 25.2928 11.3152 25.2928 25.2672v12.6464a75.8528 75.8528 0 0 1-75.8528 75.8528H366.592a25.2928 25.2928 0 0 1-25.2672-25.2928v-240.1792a75.8528 75.8528 0 0 1 75.8272-75.8528h353.9456a25.2928 25.2928 0 0 0 25.2672-25.2928l0.0768-63.2064a25.2928 25.2928 0 0 0-25.2672-25.2928H417.152a189.6192 189.6192 0 0 0-189.6192 189.6448v353.9456c0 13.9776 11.3152 25.2928 25.2928 25.2928h372.9408a170.6496 170.6496 0 0 0 170.6496-170.6496v-145.408a25.2928 25.2928 0 0 0-25.2928-25.2672z" fill="#C71D23" p-id="5558"></path></svg>'
        },
        link: 'https://gitee.com/anylemon'
      }
    ],

    footer: {
      copyright: "Copyright © 2025-present AnyLemon"
    },

    lastUpdated: {
      text: '最后更新于: ',
      formatOptions: {
        dateStyle: 'full',
        timeStyle: 'medium'
      }
    },

    docFooter: {
      prev: '上一篇',
      next: '下一篇'
    },

    darkModeSwitchLabel: '主题',

    lightModeSwitchTitle: '切换到浅色模式',

    darkModeSwitchTitle: '切换到深色模式',

    sidebarMenuLabel: '菜单',

    returnToTopLabel: '回到顶部',

    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: '搜索文档',
            buttonAriaLabel: '搜索文档'
          },
          modal: {
            displayDetails: '展示详情列表',
            noResultsText: '无法找到相关结果',
            resetButtonTitle: '清除查询条件',
            footer: {
              selectText: '选择',
              navigateText: '切换',
              closeText: '关闭'
            }
          }
        }
      }
    }
  }
})
