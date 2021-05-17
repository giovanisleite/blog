require(`dotenv`).config({
  path: `.env`,
});

module.exports = {
  siteMetadata: {
    // Used for the title template on pages other than the index site
    siteTitle: `Giovani`,
    // Default title of the page
    siteTitleAlt: `Giovani - Aprendendo e fazendo coisas`,
    // Can be used for e.g. JSONLD
    siteHeadline: `Giovani - Aprendendo e fazendo coisas`,
    // Will be used to generate absolute URLs for og:image etc.
    siteUrl: `https://giovanisleite.dev`,
    // Used for SEO
    siteDescription: `Um lugar na web para compartilhar o que eu estudo, aprendo ou tento...`,
    // Will be set on the <html /> tag
    siteLanguage: `pt-BR`,
    // Used for og:image and must be placed inside the `static` folder
    siteImage: `/banner.webp`,
    // Twitter Handle
    author: `@queleabraco`,
  },
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-minimal-blog`,
      options: {
        navigation: [
          {
            title: `Blog`,
            slug: `/blog`,
          },
          {
            title: `About`,
            slug: `/about`,
          },
        ],
        externalLinks: [
          {
            name: `Twitter`,
            url: `https://twitter.com/queleabraco`,
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-138722564-1",
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Giovani - Aprendendo e fazendo coisas`,
        short_name: `Giovani Blog`,
        description: `Um lugar na web para compartilhar o que eu estudo, aprendo ou tento...`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#6B46C1`,
        display: `standalone`,
        icons: [
          {
            src: `/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify`,
  ],
};
