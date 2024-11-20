/**
 * @type {import('gatsby').GatsbyConfig}
 */
const siteUrl = "https://mobite.in"; // Your actual domain

module.exports = {
  siteMetadata: {
    title: `Mobite`,
    siteUrl: siteUrl,
    description: `Welcome to Mobite, your go-to destination for delicious and fun baked snacks in India!`,
    author: `NAINARAB`,
    keywords: `Madurai, Mobite, crunchy, a bite of happiness, delicious and fun, baked snacks, corn puff, Masala Mania, Swiss Cheese, seasoning masala, Mighty Mint, taste crispy, flavorful`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    "gatsby-plugin-postcss",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `mobite`,
        short_name: `mobite`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#000000`,
        display: `minimal-ui`,
        icon: `src/images/homePage/logo.png`,
      },
    },
    {
      resolve: "gatsby-plugin-sitemap",
      options: {
        query: `
          {
            site {
              siteMetadata {
                siteUrl
              }
            }
            allSitePage {
              nodes {
                path
              }
            }
          }
        `,
        resolveSiteUrl: ({ site }) => site.siteMetadata.siteUrl,
      },
    },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: siteUrl,
        sitemap: `${siteUrl}/sitemap-index.xml`,
        policy: [
          {
            userAgent: "*",
            allow: "/",
            disallow: ["/admin", "/private", "/404"],
          },
        ],
      },
    },
  ],
};
