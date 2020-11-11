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

export default function Index() {
  return(
    <Layout>
      <SEO title="Teste" />
      <Home></Home>
      <About></About>
      <Services></Services>
      <Depositions></Depositions>
      <Portfolio></Portfolio>
      <Blog></Blog>
      <Contact></Contact>
      <Footer></Footer>
    </Layout>
  )
}