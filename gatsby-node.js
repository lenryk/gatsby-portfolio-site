const path = require("path")

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return graphql(
    `
      query Projects {
        allMarkdownRemark {
          nodes {
            frontmatter {
              slug
              thumb {
                childImageSharp {
                  gatsbyImageData(placeholder: TRACED_SVG, formats: AUTO)
                }
              }
            }
            id
          }
        }
      }
    `,
    { limit: 1000 }
  ).then(result => {
    if (result.errors) {
      throw result.errors
    }

    result.data.allMarkdownRemark.nodes.forEach(node => {
      createPage({
        path: "/projects/" + node.frontmatter.slug,
        component: path.resolve("./src/templates/project-details.js"),
        context: { slug: node.frontmatter.slug },
      })
    })
  })
}
