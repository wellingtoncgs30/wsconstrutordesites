import React from "react"
import Layout from "../components/layout"
import Footer from "../components/footer"
import SEO from "../components/seo"
import "../css/styles.css"
import { graphql } from "gatsby"
import { Container } from "react-bootstrap"

export default function Blog({data}) {
    console.log(data)
    const post = data.allMarkdownRemark.edges[0].node
    return(
        <Layout>
            <SEO title={post.frontmatter.title}></SEO>
            <section id="content">
                <Container>
                    <h1 className="text-center">{post.frontmatter.title}</h1>
                    <img src={post.frontmatter.image} id="image-post" alt="Imagem do post" title="Imagem em diferentes dispostivos"></img>
                    <p className="text-justify">{post.internal.content}</p>
                </Container>
            </section>
            <Footer></Footer>
        </Layout>
    )
}

export const pageQuery = graphql`
query {
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            title
            date
            path {
              relativePath
              name
            }
            image
          }
          internal {
            content
          }
        }
      }
    }
  }
`