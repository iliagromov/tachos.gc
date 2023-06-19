/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require('path');

exports.createPages = async ({ graphql, actions: { createPage }  }) => {

    const { data } =  await graphql(`
       {
        allMarkdownRemark {
            nodes {
            frontmatter {
                category
                url
            }
            }
        }
       }
     `);
    
    data.allMarkdownRemark.nodes.forEach(node => {
        const { url, category} = node.frontmatter;
        createPage({
          path: `${category}/${url}`,
          component: path.resolve(`./src/templates/page-single-project.tsx`),
          context: {
            // This is the $slug variable passed to blog-post.js
            url: url,
            slug: url,
            category: category,
          },
        });
    });

}