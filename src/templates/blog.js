import React from "react"
import Layout from "../components/layout"
import Footer from "../components/footer"
import SEO from "../components/seo"
import "../css/styles.css"
import { graphql } from "gatsby"
import { Container } from "react-bootstrap"
import { Comments, FacebookProvider } from "react-facebook"

export default function Blog({data}) {
    const post = data.allMarkdownRemark.edges[0].node
    return(
        <Layout>
            <SEO title={post.frontmatter.title}></SEO>
            <section id="content">
                <Container>
                    <h1 className="text-center">{post.frontmatter.title}</h1>
                    <img src={post.frontmatter.image} id="image-post" alt="Imagem do post" title="Imagem em diferentes dispostivos"></img>
                    <p className="text-justify">{post.internal.content}</p>
                    <h2 className="text-center">Deixe seu comentário</h2>
                    <FacebookProvider appId="828577297915717">
                      <Comments href="http://www.facebook.com">
                        <div className="fb-comments text-center" 
                        data-href="https://localhost:8000/templates/blog.js" 
                        data-numposts="10" 
                        width="1100" 
                        data-order-by="reverse_time"></div>
                      </Comments>
                    </FacebookProvider>
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