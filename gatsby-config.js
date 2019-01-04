module.exports = {
  siteMetadata: {
    title: `Proloc Locações Profissionais`,
    description: `Somos uma empresa especializada em locações de filmagem. Avaliamos seu projeto, argumento, decupagem de cena ou mesmo seu roteiro, cruzamos com informações em nosso banco de dados e devolvemos uma proposta com fotos das locações mais adequadas. Resolvemos toda a parte contratual e jurídica, solicitamos as autorizações junto às entidades responsáveis e acompanhamos sua produção, até a conclusão das gravações em nossas locações. Assistencia completa de um time consciente do que é uma produção de filme.`,
    author: `@aledebarba`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
}
