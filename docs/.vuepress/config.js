module.exports = {
  title: 'Abraham的个人空间',
  description: 'to do something, to make difference',
  head: [
    ['link', { rel: 'icon', href: '/avator/logo.ico' }]
  ],
  port: 8080,
  extendMarkdown(md) {
    lineNumbers: true // 代码块显示行号
  },
  plugins: [
    ['@vuepress/google-analytics', {
      ga: 'UA-12345678-9'
    }]
  ],
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
        text: '思考',
        link: '/thinking/'
      },
      {
        text: '我的阅读',
        link: '/reading/'
      },
      {
        text: '个人月刊',
        link: '/monthly/'
      },
      {
        text: '关于我',
        link: '/aboutme/'
      },
      {
        text: '文档规范',
        link: '/specification/'
      },
      {
        text: 'Github',
        link: 'https://github.com/Abraham-Thomas'
      }
    ],

    sidebar:{
      '/thinking/': [
        '', // accumulate文件夹的README.md 不是下拉框形式
        {
          title: '2020',
          children: [
            '/thinking/2020/产品思维：自私的另一种反馈',
          ]
        },
        {
          title: '2019',
          children: [
            '/thinking/2019/虚度光阴',
            '/thinking/2019/纸质书的去向',
            '/thinking/2019/技术是好是坏',
            '/thinking/2019/关注自然环境',
          ]
        },
        {
          title: '2018',
          children: [
            '/thinking/2018/对于产品的思考',
            '/thinking/2018/你想要什么',
            '/thinking/2018/投资的非理性',
            '/thinking/2018/网贷产品的深情告白',
            '/thinking/2018/关于乐观',
          ]
        }
      ],
      '/reading/': [
        '',
        {
          title: '2020以前',
          children: [
            '/reading/before2020/提升幸福感的方法',
            '/reading/before2020/漫步华尔街',
            '/reading/before2020/浅谈用户思维（三）',
            '/reading/before2020/浅谈用户思维（二）',
            '/reading/before2020/浅谈用户思维（一）',
          ]
        },
        {
          title: '在2020',
          children: [
            '/reading/in2020/优秀的设计',
          ]
        }
      ],
      '/monthly/': [
        '',
        {
          title: '个人月刊',
          children: [
            '/monthly/about2020/February2020',
          ]
        }
      ],
      '/specification/': [
        '',
        {
          title: '目录',
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
  }
}
