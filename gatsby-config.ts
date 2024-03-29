// const { resolve } = require(`path`)
// const { platform } = require(`os`)
const siteMetadata = require("./src/data/siteMetadata");
import adapter from "gatsby-adapter-netlify";

import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  adapter: adapter({
    excludeDatastoreFromEngineFunction: false,
  }),
  siteMetadata,
  flags: {
    // FAST_DEV: true,
    // FAST_REFRESH: true,
    // DEV_SSR: true,
    // QUERY_ON_DEMAND: false,
    // LAZY_IMAGES: false
  },
  plugins: [
    // "gatsby-plugin-ffmpeg",
    // "gatsby-transformer-ffmpeg",
    "gatsby-plugin-image",
    "gatsby-plugin-mdx",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-react-svg",
    "gatsby-plugin-sass",
    {
      resolve: `gatsby-transformer-remark`,
      // options: {
      //   plugins: [
      //     {
      //       resolve: `gatsby-remark-images`,
      //       options: {
      //         // It's important to specify the maxWidth (in pixels) of
      //         // the content container as this plugin uses this as the
      //         // base for generating different widths of each image.
      //         maxWidth: 590,
      //         showCaptions: true
      //       },
      //     },
      //   ],
      // },
    },

    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          formats: [`auto`],
          placeholder: `blurred`,
          quality: 100,
          backgroundColor: `transparent`,
        },
      },
    },
    {
      resolve: "gatsby-transformer-sharp",

      // options: {
      //   // The option defaults to true
      //   checkSupportedExtensions: true,
      // },
    },
    "gatsby-plugin-sitemap",
    // {
    //   resolve: 'gatsby-plugin-manifest',
    //   options: {
    //     "icon": "src/assets/icons/favicon-32.png"
    //   }
    // },
    {
      resolve: `gatsby-transformer-yaml`,
      options: {
        // Conditionally set the typeName so that we both use a lowercased and capitalized type name
        typeName: ({ node }) => {
          const name = node.sourceInstanceName;
          if (name === `projects`) {
            return `Projects`;
          }
          if (name === `stacks`) {
            return `Stacks`;
          }
          return name;
        },
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "projects",
        path: `${__dirname}/src/posts/projects`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "stacks",
        path: `${__dirname}/src/posts/stacks`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images`,
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "png",
        path: `${__dirname}/src/assets/images/png`,
      },
      __key: "png",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "svg",
        path: `${__dirname}/src/assets/images/svg`,
      },
      __key: "svg",
    },
  ],
};

export default config;
