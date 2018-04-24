module.exports = {
  siteMetadata: {
    title: 'Source View Bible',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/data/`,
      },
    },
    'gatsby-transformer-json',
  ],
};
