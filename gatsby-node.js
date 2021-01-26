/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require("path")
exports.createPages = ({ graphql, actions: { createPage }}) => {
    return new Promise((resolve, reject) => {
        graphql(`
        query MyQuery {
          allMarkdownRemark {
            edges {
              node {
                frontmatter {
                  path {
                    relativePath
                    name
                    publicURL
                  }
                }
              }
            }
          }
        }        
        `).then(result => {
            result.data.allMarkdownRemark.edges.map(({ node }) => {
                createPage({
                    path: node.frontmatter.path.name,
                    component: path.resolve("./src/templates/blog.js"),
                    context: {
                        name: node.frontmatter.path.name
                    }
                })
            })
            resolve()
        })
    })
}