import { Navbar, Nav, Container } from "react-bootstrap"
import { FaBars } from "react-icons/fa"
import PropTypes from "prop-types"
import React from "react"
import logo from "../images/logo-novo-WS.png"

export default function Header({ siteTitle }) {
  return(
    <header className="header">
      {siteTitle}
      <Container>
        <Navbar>
          <Navbar.Brand>
            <img src={logo} alt="Logotipo da WS - Construtor de sites" id="logo"></img>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="menu">
            <FaBars style={{color: "white", fontSize: "40px"}}></FaBars>
          </Navbar.Toggle>
          <Navbar.Collapse id="menu">
            <Nav className="ml-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="#about">Sobre</Nav.Link>
              <Nav.Link href="#services">Serviços</Nav.Link>
              <Nav.Link href="#depositions">Depoimentos</Nav.Link>
              <Nav.Link href="#portfolio">Portfólio</Nav.Link>
              <Nav.Link href="#blog">Blog</Nav.Link>
              <Nav.Link href="#contact">Contato</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </header>
  )
} 

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}