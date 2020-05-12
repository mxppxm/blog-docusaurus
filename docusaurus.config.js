const currentYear = new Date().getFullYear();
module.exports = {
  title: "无双",
  tagline: "散播欢笑散播爱",
  url: "https://your-docusaurus-test-site.com",
  baseUrl: "/",
  favicon: "img/favicon.ico",
  organizationName: "mxppxm", // Usually your GitHub org/user name.
  projectName: "blog-docusaurus", // Usually your repo name.
  themeConfig: {
    navbar: {
      title: "无双",
      logo: {
        alt: "My Site Logo",
        src: "img/logo.svg",
      },
      links: [
        {
          to: "docs/doc1",
          activeBasePath: "docs",
          label: "文档",
          position: "left",
        },
        {
          to: "blog",
          label: "博客",
          position: "left",
        },
        {
          to: "grocery",
          label: "百宝箱",
          position: "left",
        },
        {
          href: "https://github.com/mxppxm",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "文章",
          items: [
            {
              label: "Style Guide",
              to: "docs/doc1",
            },
            {
              label: "Second Doc",
              to: "docs/doc2",
            },
          ],
        },
        {
          title: "相关",
          items: [
            {
              label: "mxp的Github",
              href: "https://github.com/mxppxm",
            },
            {
              label: "mxm的Github",
              href: "https://github.com/Ljazz",
            },
          ],
        },
        {
          title: "备案信息",
          items: [
            {
              label: "ICP证：宁ICP备20000656号",
              href: "http://www.beian.miit.gov.cn",
            },
          ],
        },
      ],
      copyright: `Copyright © ${currentYear} mxppxm, Inc. Built with Docusaurus`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl: "https://github.com/mxppxm/blog-docusaurus/blob/master",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl: "https://github.com/mxppxm/blog-docusaurus/blob/master",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
