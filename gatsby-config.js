require(`dotenv`).config({
  path: `.env`,
})

const shouldAnalyseBundle = process.env.ANALYSE_BUNDLE

module.exports = {
  siteMetadata: {
    siteTitle: `Elkin Urango`,
    siteTitleAlt: `Elkin Urango - Remote Software Developer`,
    siteHeadline: `Blog - Programación y trabajo remoto`,
    siteDescription: `Tengo mas de 5 años de experiencia trabajando con diferentes compañias de forma remota, actualmente trabajo como Remote Frontend Developer`,
    siteUrl: `https://elkinurango.co`,
    siteLanguage: `es`,
    author: `@kin3xc`,
  },
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-minimal-blog`,
      // See the theme's README for all available options
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
            url: `https://twitter.com/kin3xc`,
          },
          {
            name: `Instagram`,
            url: `https://www.instagram.com/kin3xc/`,
          },
          {
            name: `Linkedin`,
            url: `https://www.linkedin.com/in/elkinurango/`,
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_ID,
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Elkin Urango - Remote Software Developer`,
        short_name: `elkinurango`,
        description: `Tengo mas de 5 años de experiencia trabajando con diferentes compañias de forma remota, actualmente trabajo como Remote Frontend Developer`,
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
    shouldAnalyseBundle && {
      resolve: `gatsby-plugin-webpack-bundle-analyser-v2`,
      options: {
        analyzerMode: `static`,
        reportFilename: `_bundle.html`,
        openAnalyzer: false,
      },
    },
  ].filter(Boolean),
}
