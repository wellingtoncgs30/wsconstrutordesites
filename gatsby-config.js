module.exports = {
  siteMetadata: {
    title: `WS - Construtor de sites`,
    description: `Site para divulgação de portfólio de trabalhos de sites realizados para contratação por parte de potenciais futuros clientes.`,
    author: `@wellingtoncgs30`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    /*{
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/src/markdown-pages`,
      },
    },*/
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        /*icon: `src/images/gatsby-icon.png`,*/ //vou utilizar depois
        icon: `src/images/logo-WS.png`
      },
    },
    `gatsby-plugin-netlify-cms`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
