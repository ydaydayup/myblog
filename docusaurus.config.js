const path = require('path')
const beian = '闽ICP备2020017848号-2'
// import remarkPlugin from 'remark-plugin';
const announcementBarContent = ''
const {themes} = require('prism-react-renderer')
const lightTheme = themes.github
const darkTheme = themes.dracula

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Ray的小站',
  url: 'https://ydaydayup.cn',
  baseUrl: '/',
  favicon: 'img/favicon-logo.png',
  organizationName: 'Ray',
  projectName: 'blog',
  tagline: '道阻且长，行则将至',
  /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
  themes: ['@docusaurus/theme-live-codeblock'],
  themeConfig: {
    image:'img/favicon-logo.png',
    // announcementBar: {
    //   id: 'announcementBar-3',
    //   content: announcementBarContent,
    // },
    metadata: [
      {
        name: 'keywords',
        content: 'Ray, ray',
      },
      {
        name: 'keywords',
        content: 'blog, javascript, typescript, node, react, vue, web',
      },
      {
        name: 'keywords',
        content: '编程爱好者, Web开发者, 写过爬虫, 学过逆向，现在主攻ts全栈',
      },
    ],
    docs: {
      sidebar: {
        hideable: true,
      },
    },
    navbar: {
      logo: {
        alt: 'Ray',
        src: 'img/favicon-logo.png',
        srcDark: 'img/favicon-logo.png',
      },
      hideOnScroll: true,
      items: [
        {
          label: '博客',
          position: 'right',
          to: 'blog',
        },
        {
          label: '项目',
          position: 'right',
          to: 'project',
        },
        {
          label: '归档',
          position: 'right',
          to: 'blog/archive',
        },
        {
          label: '笔记',
          position: 'right',
          to: 'docs/skill/',
        },
        {
          label: '工作随想',
          position: 'right',
          to: 'docs/thought_on_work/',
        },
        // {
        //   label: '工作随想2',
        //   position: 'right',
        //   to: 'docs/work/',
        // },
        {
          label: '资源',
          position: 'right',
          to: 'resource',
        },
        {
          label:  '友链',
          position: 'right',
          to: 'friends',
        },
        {
          label: '工具推荐',
          position: 'right',
          to: 'docs/tools/',
        },
        {
          type: 'localeDropdown',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: '学习',
          items: [
            {
              label: '博客',
              to: 'blog',
            },
            {
              label: '归档',
              to: 'blog/archive',
            },
            {
              label: '技术笔记',
              to: 'docs/skill',
            },
            {
              label: '实战项目',
              to: 'project',
            },
            {
              label: '前端示例',
              to: 'https://example.Ray.cn',
            },
          ],
        },
        {
          title: '社交媒体',
          items: [
            {
              label: '关于我',
              to: '/about',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/ydaydayup',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/ydaydayup',
            },
            {
              label: '掘金',
              href: 'https://juejin.cn/user/1565318510545901',
            },
            {
              label: 'Discord',
              href: 'https://discord.gg/M8cVcjDxkz',
            },
          ],
        },
        {
          title: '更多',
          items: [
            {
              label: '友链',
              position: 'right',
              to: 'friends',
            },
            {
              label: '导航',
              position: 'right',
              to: 'resource',
            },
            // {
            //   label: '我的站点',
            //   position: 'right',
            //   to: 'website',
            // },
            {
              html: `<a href="https://docusaurus.io/zh-CN/" target="_blank"><img style="height:50px;margin-top:0.5rem" src="/img/buildwith.png" /><a/>`,
            },
          ],
        },
      ],
      copyright: `<p><a href="http://beian.miit.gov.cn/" >${beian}</a></p><p>Copyright © 2020 - PRESENT Ray Built with Docusaurus.</p>`,
    },
    prism: {
      theme: lightTheme,
      darkTheme: darkTheme,
      additionalLanguages: ['java', 'php', 'rust', 'toml'],
      defaultLanguage: 'javascript',
      magicComments: [
        {
          className: 'theme-code-block-highlighted-line',
          line: 'highlight-next-line',
          block: { start: 'highlight-start', end: 'highlight-end' },
        },
        {
          className: 'code-block-error-line',
          line: 'This will error',
        },
      ],
    },
    tableOfContents: {
      minHeadingLevel: 2,
      maxHeadingLevel: 4,
    },
    algolia: {
      appId: 'CP7031IGM2',
      apiKey: '2faf032dffcb1c0693f445fe157ddc9a',
      indexName: 'SunnyBlog',
      contextualSearch: true,
    },
    zoom: {
      selector: '.markdown :not(em) > img',
      background: {
        light: 'rgb(255, 255, 255)',
        dark: 'rgb(50, 50, 50)',
      },
      config: {},
    },
    giscus: {
      repo: 'ydaydayup/myblog',
      repoId: 'R_kgDOKMY26A',
      category: 'Q&A',
      categoryId: 'DIC_kwDOKMY26M4CY_q7',
      theme: 'light',
      darkTheme: 'dark',
    },
    liveCodeBlock: {
      playgroundPosition: 'top',
    },
    socials: {
      github: 'https://github.com/ydaydayup',
      twitter: 'https://twitter.com/ydaydayup',
      juejin: 'https://juejin.cn/user/1565318510545901',
      csdn: 'https://blog.csdn.net/ydaydayup12',
      qq: 'https://wpa.qq.com/msgrd?v=3&amp;uin=911993023&amp;site=qq',
      zhihu: 'https://www.zhihu.com/people/ydaydayup',
      cloudmusic: 'https://music.163.com/#/user/home?id=1333010742',
      mail: 'mailto:hi@Ray.cn',
    },
  },
  headTags: [
    {
      tagName: 'meta',
      attributes: {
        name: 'description',
        content: 'Ray Blog',
      },
    },
  ],
  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          path: 'docs',
          sidebarPath: 'sidebars.js',
        },
        blog: false,
        theme: {
          customCss: [require.resolve('./src/css/custom.scss')],
        },
        sitemap: {
          changefreq: 'daily',
          priority: 0.5,
        },
        gtag: {
          trackingID: 'G-S4SD5NXWXF',
          anonymizeIP: true,
        },
        // debug: true,
      }),
    ],
  ],
  plugins: [
    'docusaurus-plugin-image-zoom',
    'docusaurus-plugin-sass',
    path.resolve(__dirname, './src/plugin/plugin-baidu-tongji'),
    path.resolve(__dirname, './src/plugin/plugin-baidu-push'),
    [
      path.resolve(__dirname, './src/plugin/plugin-content-blog'),
      {
        path: 'blog',
        editUrl: ({ locale, blogDirPath, blogPath, permalink }) =>
          `https://github.com/ydaydayup/myblog/edit/main/${blogDirPath}/${blogPath}`,
        editLocalizedFiles: false,
        blogDescription: 'Ray的个人博客',
        blogSidebarCount: 10,
        blogSidebarTitle: 'Blogs',
        postsPerPage: 10,
        showReadingTime: true,
        readingTime: ({ content, frontMatter, defaultReadingTime }) =>
          defaultReadingTime({ content, options: { wordsPerMinute: 300 } }),
        feedOptions: {
          type: 'all',
          title: 'Ray',
          copyright: `Copyright © ${new Date().getFullYear()} Ray Built with Docusaurus.<p><a href="http://beian.miit.gov.cn/" class="footer_lin">${beian}</a></p>`,
        },
      },
    ],
    [
      '@docusaurus/plugin-ideal-image',
      {
        disableInDev: false,
      },
    ],
    [
      '@docusaurus/plugin-pwa',
      {
        debug: true,
        offlineModeActivationStrategies: [
          'appInstalled',
          'standalone',
          'queryString',
        ],
        pwaHead: [
          {
            tagName: 'link',
            rel: 'icon',
            href: '/img/favicon-logo.png',
          },
          {
            tagName: 'link',
            rel: 'manifest',
            href: '/manifest.json',
          },
          {
            tagName: 'meta',
            name: 'theme-color',
            content: 'rgb(51 139 255)',
          },
        ],
      },
    ],
  ],
  stylesheets: [],
  i18n: {
    defaultLocale: 'zh-CN',
    locales: ['en', 'zh-CN'],
    localeConfigs: {
      en: {
        htmlLang: 'en-GB',
      },
    },
  },
}

export default config
