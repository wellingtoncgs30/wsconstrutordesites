import React from "react"
//import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Home from "../components/home"
import About from "../components/about"
import Services from "../components/services"
import Depositions from "../components/depositions"
import Portfolio from "../components/portfolio"
import Contact from "../components/contact"
import Blog from "../components/blog"
import Footer from "../components/footer"
import { graphql } from "gatsby"
import { Row, Col } from "react-bootstrap"

export default function Index({data}) {
  console.log(data)
  const posts = data.allMarkdownRemark.edges
  return(
    <Layout>
      <SEO title="Teste" />
      <Home></Home>
      <About></About>
      <Services></Services>
      <Depositions></Depositions>
      <Portfolio></Portfolio>
      <Blog>
        <h1 className="text-center">Últimas informações</h1>
        <Row>
          {posts ? (
            posts.map((post) => (  
              <Col key={post.node.id} sm={12} md={3}>
                <h1>{post.node.frontmatter.title}</h1>
              </Col>
            ))
          ) : ""}
        </Row>
      </Blog>
      <Contact></Contact>
      <Footer></Footer>
    </Layout>
  )
}

export const pageQuery = graphql`
query MyQuery {
    allMarkdownRemark {
      edges {
        node {
            id
          frontmatter {
            title
            date
            path {
              relativePath
            }
          }
          internal {
            content
          }
        }
      }
    }
  }
`