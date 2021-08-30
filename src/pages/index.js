import { graphql, Link } from "gatsby"
import React from "react"
import Layout from "../components/Layout"
import * as styles from "../styles/home.module.css"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

export default function Home({ data }) {
  return (
    <Layout>
      <section className={styles.header}>
        <div>
          <h2>Design</h2>
          <h3>Develop & Deploy</h3>
          <h3>About</h3>
          <p>Font End Developer based in Manchester</p>
          <Link className={styles.btn} to="/projects">
            My Portfolio Project
          </Link>
        </div>
        <GatsbyImage
          image={getImage(data.file)}
          alt="our image"
          className={styles.image}
        />
        <p></p>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query Banner {
    file(relativePath: { eq: "banner.png" }) {
      id
      childImageSharp {
        gatsbyImageData(formats: AUTO, placeholder: TRACED_SVG)
      }
    }
  }
`
