module.exports = {
  siteMetadata: {
    siteTitle: 'Juan David´s Portfolio',
    siteTitleAlt: 'Juan David´s Portfolio',
    siteHeadline: 'Juan David´s Portfolio',
    siteUrl: 'https://juandape.dev',
    siteDescription:
      'Juan David´s Portfolio, a place where I share my projects',
    siteLanguage: 'en',
    siteImage: 'https://res.cloudinary.com/dahm4ko9b/image/upload/v1690509970/upload-folder/ba1ce73258ee5d67e3cf4829b6478f41.jpg',
    author: 'Juan David Peña',
    basePath: '/',
  },
  plugins: [
    'gatsby-plugin-emotion',
    'gatsby-plugin-mdx',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sharp',
    'gatsby-plugin-theme-ui',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'sections',
        path: `${__dirname}/src/sections`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
  ],
};
