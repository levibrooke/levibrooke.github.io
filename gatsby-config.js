module.exports = {
  siteMetadata: {
    title: `Levi Porter`
  },
  plugins: [
    `gatsby-plugin-sass`,
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        typekit: {
          id: 'sjc2rlh'
        }
      }
    }
  ]
};
