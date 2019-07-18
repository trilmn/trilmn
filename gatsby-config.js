module.exports = {
  siteMetadata: {
    title: `Tri Nguyen`,
    description: `A designer who loves solving problem. I’ve been designing software interfaces, coding HTML/CSS/JS since 2009. I also like co-buidling great working culture and mentoring young designers.`,
    author: `Tri Nguyen`,
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Tri Nguyen`,
        short_name: `Tri`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#00A6D5`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-postcss`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: "gatsby-plugin-purgecss",
      options: {
        tailwind: true,
        purgeOnly: ["src/styles/main.css"]
      }
    },
    `gatsby-plugin-offline`,
  ],
}
