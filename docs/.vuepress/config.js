module.exports = {
  title: 'Abraham的个人集',
  description: '一点行动，一点记录、一点想法',
  head: [
    ['link', { rel: 'icon', href: '/img/logo.ico' }]
  ],
  port: 8081,
  markdown: {
    lineNumbers: true // 代码块显示行号
  },
  themeConfig: {
    sidebarDepth: 2,
    displayAllHeaders: true,
    activeHeaderLinks: false, // 默认值：true
    nav: [
      /**
       * 多级菜单
       * 开头 text 为一级标题
       * 数组内 text 为二级标题
       * link 为链接，注意带 /
       */
      {
        text: '文集',
        items: [
          {
            text: '随想录',
            link: '/blog/thinking/'
          },
          {
            text: '个人日志',
            link: '/blog/ownLog/'
          },
          {
            text: '中文技术文档的写作规范',
            link: '/blog/specification/'
          }
        ]
      },
      {
        text: '前端杂记',
        link: '/blog/record/'
      },
      {
        text: '前端学习资源',
        items: [
          {
            text: '掘金',
            link: 'https://juejin.im/timeline'
          },
          {
            text: '印记中文',
            link: 'https://docschina.org/'
          },
          {
            text: 'stackoverflow',
            link: 'https://stackoverflow.com/'
          },
          {
            text: '廖雪峰老师',
            link: 'https://www.liaoxuefeng.com/'
          },
          {
            text: 'Bootstrap中文网',
            link: 'http://www.bootcss.com/'
          }
        ]
      },
      {text: 'Github', link: 'https://github.com/Abraham-Thomas'},
      {
        text: '外链',
        items: [
          {
            text: '豆瓣读书',
            link: 'https://book.douban.com/'
          },
          {
            text: '语雀',
            link: 'https://www.yuque.com/explore/headlines'
          },
          {
            text: '设计导航',
            link: 'http://hao.shejidaren.com/'
          },
          {
            text: 'sci-hub的使用',
            link: 'https://zhuanlan.zhihu.com/p/24299207'
          },
          {
            text: '关于Chrome',
            link: 'https://36kr.com/p/5131432'
          },
          {
            text: '阮一峰的个人网络日志',
            link: 'http://www.ruanyifeng.com/home.html'
          }
          
        ]
      }
    ],

    sidebar:{
      // docs文件夹下面的accumulate文件夹 文档中md文件 书写的位置(命名随意)
      '/blog/thinking/': [
          '', // accumulate文件夹的README.md 不是下拉框形式
          '/blog/thinking/技术是好是坏',
          '/blog/thinking/关注自然环境',
          '/blog/thinking/漫步华尔街',
          '/blog/thinking/提升幸福感的方法',
          '/blog/thinking/开发人员的未来',
          '/blog/thinking/纸质书的去向',
        ],
        // docs文件夹下面的文件夹 这是第二组侧边栏 跟第一组侧边栏没关系
        '/blog/ownLog/': [
          '', 
          '/blog/ownLog/使用nvm控制node版本',
          '/blog/ownLog/终于恢复了Github的访问',
          '/blog/ownLog/vuepress中的README',
          '/blog/ownLog/关于系统文件hosts',
        ],
        '/blog/record/': [
          
          {
            title: 'Javascript',
            collapsable: true,
            children: [
              '/blog/record/JS/Javascript简介',
              '/blog/record/JS/Javascript标签',
              '/blog/record/JS/严格模式与with',
              '/blog/record/JS/正则表达式（Regular Expression）',
              '/blog/record/JS/DOMReady',
              '/blog/record/JS/JS面向对象',
              '/blog/record/JS/原型链',
              '/blog/record/JS/事件',
              '/blog/record/JS/JS运行机制',
            ]
          },
          {
            title: '浏览器与HTTP',
            collapsable: true,
            children: [
              '/blog/record/Browser/浏览器组成',
              '/blog/record/Browser/渲染机制',
              '/blog/record/Browser/HTTP文件缓存和localStorage',
              '/blog/record/Browser/HTTP头部域信息',
              '/blog/record/Browser/长连接与HTTP特性',
              '/blog/record/Browser/AJAX与XMLHttpRequest对象',
              '/blog/record/Browser/页面性能与错误监控',
              '/blog/record/Browser/Yahoo军规',
            ]
          },
          '', // 文件夹的README.md 不是下拉框形式
          '/blog/record/MVVM框架',
          '/blog/record/小程序',
          '/blog/record/关于构建工具',
          '/blog/record/Webpack简介',
          '/blog/record/项目技术选型分析',
          
        ],
        '/blog/specification/': [
          '', 
          {
            title: '目录',
            collapsable: false,
            children: [
              '/blog/specification/docs/title',
              '/blog/specification/docs/structure',
              '/blog/specification/docs/paragraph',
              '/blog/specification/docs/text',
              '/blog/specification/docs/marks',
              '/blog/specification/docs/number',
              '/blog/specification/docs/reference',
            ]
          }
          
          
        ],
    }


    // sidebar: [
    //   {
    //     title: '随想录',
    //     collapsable: false,
    //     children: [
    //       '/blog/thinking/技术是好是坏',
    //       '/blog/thinking/关注自然环境',
    //       '/blog/thinking/提升幸福感的方法',
    //     ]
    //   },
    //   {
    //     title: '个人日志',
    //     collapsable: false,
    //     children: [
    //       '/blog/ownLog/终于恢复了GIthub的访问',
    //     ]
    //   },
    //   {
    //     title: '前端杂记',
    //     collapsable: false,
    //     children: [
    //       '/blog/前端杂记/关于构建工具',
    //       '/blog/前端杂记/JS运行机制',
    //       '/blog/前端杂记/JS面向对象',
    //       '/blog/前端杂记/原型链',
    //       '/blog/前端杂记/渲染机制',
    //       '/blog/前端杂记/页面性能与错误监控',
    //       '/blog/前端杂记/MVVM框架',
    //     ]
    //   },
    //   {
    //     title: '中文技术文档的写作规范',
    //     collapsable: true,
    //     children: [
    //       '/blog/中文技术文档的写作规范/docs/title',
    //       '/blog/中文技术文档的写作规范/docs/structure',
    //       '/blog/中文技术文档的写作规范/docs/paragraph',
    //       '/blog/中文技术文档的写作规范/docs/text',
    //       '/blog/中文技术文档的写作规范/docs/marks',
    //       '/blog/中文技术文档的写作规范/docs/number',
    //       '/blog/中文技术文档的写作规范/docs/reference',
    //     ]
    //   }
    // ]

  }
}