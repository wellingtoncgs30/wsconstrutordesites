import React from "react"
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
import { graphql, Link } from "gatsby"
import { Row, Col, Button } from "react-bootstrap"

export default function Index({data}) {
  const posts = data.allMarkdownRemark.edges
  return(
    <Layout>
      <SEO title="Página Inicial" />
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
                <img src={post.node.frontmatter.image} alt="Imagem do post" title="Imagem em dispositivos diferentes" id="image-post"></img>
                <p className="text-justify">{post.node.internal.content.slice(0, 57)}...</p>
                <Button variant="link" className="btn btn-block">
                  <Link to={post.node.frontmatter.path.name}>Leia mais</Link>
                </Button>
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