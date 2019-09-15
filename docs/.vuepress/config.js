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
        text: 'design',
        link: '/design/'
      },
      {
        text: 'Thinking',
        link: '/thinking/'
      },
      {
        text: 'Reading',
        link: '/reading/'
      },
      {
        text: 'My-word', link: 'https://github.com/Abraham-Thomas/my-word'
      },
      {
        text: '文档规范',
        link: '/specification/'
      },
      {text: 'Github', link: 'https://github.com/Abraham-Thomas'}
    ],

    sidebar:{
      '/design/': [
        '', // accumulate文件夹的README.md 不是下拉框形式
        {
          title: '2019design',
          collapsable: true,
          children: [
            '/design/2019design/优秀的设计',
          ]
        },
      ],
      '/thinking/': [
        '', // accumulate文件夹的README.md 不是下拉框形式
        {
          title: '2019',
          collapsable: true,
          children: [
            '/thinking/2019/虚度光阴',
            '/thinking/2019/开发人员的未来',
            '/thinking/2019/纸质书的去向',
            '/thinking/2019/技术是好是坏',
            '/thinking/2019/关注自然环境'
          ]
        },
        {
          title: '2018',
          collapsable: true,
          children: [
            '/thinking/2018/对于产品的思考',
            '/thinking/2018/你想要什么',
            '/thinking/2018/投资的非理性',
            '/thinking/2018/网贷产品的深情告白',
            '/thinking/2018/关于乐观',
            '/thinking/2018/选择过多',
            '/thinking/2018/误解自律',
          ]
        }
      ],
      '/reading/': [
        '',
        {
          title: '2019以前',
          collapsable: true,
          children: [
            '/reading/before2019/提升幸福感的方法',
            '/reading/before2019/漫步华尔街',
            '/reading/before2019/浅谈用户思维（三）',
            '/reading/before2019/浅谈用户思维（二）',
            '/reading/before2019/浅谈用户思维（一）',
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
