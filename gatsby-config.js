module.exports = {
  siteMetadata: {
    navbarLinks: [
      { to: "/aixinghui", name: "机构介绍" },
      { to: "/dieyin", name: "“蝶音” @ 艺术科技指导" },
      { to: "/drama", name: "音乐剧师资培训" },
      { to: "/summer-camp", name: "招生与夏令营" },
      { to: "/serve", name: " 资源与服务" },
      { to: "/performance", name: " 演出与活动" }
    ],
    title: "爱星汇",
    description: "Tyra is a fast, feminine, and chic Gatsby.js theme.",
    siteUrl: "https://tyra-starter.netlify.com",
    homepageHeader: "爱星汇（北京）文化传媒有限公司",
    homepageAbout:
      "致力于综合类艺术教育（如音乐剧、乐团等教育培训、组织策划国际演出交流、影视音乐制作以及演艺经纪等开拓型项目，集教育、演出、制作、经纪于一体的综合传媒公司",
    mailChimpUrl: "https://mailchimp.com",
    mailChimpToken: "MAILCHIMP TOKEN HERE",
    youtube: "", // YOUR YOUTUBE PROFILE HERE
    github: "", // YOUR GITHUB PROFILE HERE
    pinterest: "", // YOUR PINTEREST PROFILE HERE
    facebook: "", // YOUR FACEBOOK PROFILE HERE
    twitter: "" // YOUR TWITTER PROFILE HERE
  },
  plugins: [
    "gatsby-plugin-antd",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-react-helmet",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-plugin-feed",
      options: {
        query: `
        {
          site {
            siteMetadata {
              title
              description
              siteUrl
              site_url: siteUrl
            }
          }
        }
      `,
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) => {
              return allMarkdownRemark.edges.map(edge => {
                return Object.assign({}, edge.node.frontmatter, {
                  description: edge.node.excerpt,
                  date: edge.node.frontmatter.date,
                  url: site.siteMetadata.siteUrl + edge.node.frontmatter.slug,
                  guid: site.siteMetadata.siteUrl + edge.node.frontmatter.slug,
                  custom_elements: [{ "content:encoded": edge.node.html }]
                });
              });
            },
            query: `
            {
              allMarkdownRemark(
                limit: 1000,
                sort: { order: DESC, fields: [frontmatter___date] },
                filter: {frontmatter: {type: {eq: "post"}}}
              ) {
                edges {
                  node {
                    excerpt
                    html
                    frontmatter {
                      slug
                      title
                      date
                    }
                  }
                }
              }
            }
          `,
            output: "/rss.xml",
            title: "Gatsby RSS Feed"
          }
        ]
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/content`,
        name: "content"
      }
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          "gatsby-remark-copy-linked-files",
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 1400
            }
          }
        ]
      }
    },
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        google: {
          families: ["Karla", "Playfair Display", "Lora"]
        }
      }
    },
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "",
        head: false,
        anonymize: true,
        respectDNT: true,
        exclude: ["/success"],
        cookieDomain: "tyra-starter.netlify.com"
      }
    }
  ]
};
