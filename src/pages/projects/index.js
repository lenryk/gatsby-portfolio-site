import { graphql, Link } from "gatsby"
import React from "react"
import Layout from "../../components/Layout"
import * as Styles from "../../styles/projects.module.css"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

export default function Projects({ data }) {
  const projects = data.projects.nodes
  const contact = data.contact.siteMetadata.contact
  console.log(data)

  return (
    <Layout>
      <div className={Styles.portfolio}>
        <h2>Portfolio</h2>
        <h3>Projects ya boy has made</h3>
        <div className={Styles.projects}>
          {projects.map(({ id, frontmatter }) => (
            <Link to={"/projects/" + frontmatter.slug} key={id}>
              <GatsbyImage
                image={getImage(frontmatter.thumb.childImageSharp)}
                alt="test"
              />
              <h3>{frontmatter.title}</h3>
              <p>{frontmatter.stack}</p>
            </Link>
          ))}
        </div>
        <p>Like what you see? Email me at {contact}</p>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query ProjectPage {
    projects: allMarkdownRemark(
      sort: { order: DESC, fields: frontmatter___date }
    ) {
      nodes {
        frontmatter {
          slug
          stack
          title
          thumb {
            childImageSharp {
              gatsbyImageData(placeholder: TRACED_SVG, formats: AUTO)
            }
          }
        }
        id
      }
    }
    contact: site {
      siteMetadata {
        contact
      }
    }
  }
`
