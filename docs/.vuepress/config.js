module.exports = {
  title: 'The space of Abraham',
  description: 'Small change make big difference',
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
        text: 'Thinking',
        link: '/thinking/'
      },
      {
        text: '一种前端',
        items: [
          {
            text: '个人笔记',
            link: '/record/'
          },
          {
            text: '日志记录',
            link: '/ownLog/'
          },
          {
            text: '中文技术文档的写作规范',
            link: '/specification/'
          },
          {
            text: '掘金',
            link: 'https://juejin.im/timeline'
          },
          {
            text: 'stackoverflow',
            link: 'https://stackoverflow.com/'
          }
        ]
      },
      {text: 'Github', link: 'https://github.com/Abraham-Thomas'},
      {text: '语雀', link: 'https://www.yuque.com/explore/headlines'}
    ],

    sidebar:{
      // docs文件夹下面的accumulate文件夹 文档中md文件 书写的位置(命名随意)
      '/thinking/': [
          '', // accumulate文件夹的README.md 不是下拉框形式
          '/thinking/虚度光阴',
          '/thinking/开发人员的未来',
          '/thinking/纸质书的去向',
          '/thinking/技术是好是坏',
          '/thinking/关注自然环境',
          '/thinking/漫步华尔街',
          '/thinking/提升幸福感的方法',
        ],
        // docs文件夹下面的文件夹 这是第二组侧边栏 跟第一组侧边栏没关系
        '/ownLog/': [
          '',
          '/ownLog/对比小程序的开发者工具', 
          '/ownLog/使用nvm控制node版本',
          '/ownLog/终于恢复了Github的访问',
          '/ownLog/vuepress中的README',
          '/ownLog/关于系统文件hosts',
        ],
        '/record/': [
          '',
          {
            title: 'TypeScript',
            collapsable: true,
            children: [
              '/record/TypeScript/基础',
              '/record/TypeScript/interface',
              '/record/TypeScript/class',
              '/record/TypeScript/function',
              '/record/TypeScript/generic',
            ]
          },
          {
            title: 'Javascript',
            collapsable: true,
            children: [
              '/record/JavaScript/Javascript简介',
              '/record/JavaScript/Javascript标签',
              '/record/JavaScript/严格模式与with',
              '/record/JavaScript/正则表达式（Regular Expression）',
              '/record/JavaScript/DOMReady',
              '/record/JavaScript/JS面向对象',
              '/record/JavaScript/原型链',
              '/record/JavaScript/事件',
              '/record/JavaScript/JS运行机制',
            ]
          },
          {
            title: '浏览器与HTTP',
            collapsable: true,
            children: [
              '/record/Browser/浏览器组成',
              '/record/Browser/渲染机制',
              '/record/Browser/HTTP文件缓存和localStorage',
              '/record/Browser/HTTP头部域信息',
              '/record/Browser/长连接与HTTP特性',
              '/record/Browser/AJAX与XMLHttpRequest对象',
              '/record/Browser/页面性能与错误监控',
              '/record/Browser/Yahoo军规',
            ]
          },
          {
            title: '前端杂谈',
            collapsable: true,
            children: [
              '/record/前端杂谈/项目技术选型分析',
              '/record/前端杂谈/关于构建工具',
              '/record/前端杂谈/MVVM框架',
              '/record/前端杂谈/小程序',
              '/record/前端杂谈/Webpack简介',
            ]
          },
        ],
        '/specification/': [
          '', 
          {
            title: '目录',
            collapsable: false,
            children: [
              '/specification/docs/title',
              '/specification/docs/structure',
              '/specification/docs/paragraph',
              '/specification/docs/text',
              '/specification/docs/marks',
              '/specification/docs/number',
              '/specification/docs/reference',
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