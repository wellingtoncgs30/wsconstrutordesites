import React from "react"
import { Link } from "gatsby"
import { Container, Row, Col } from "react-bootstrap"
import { AiOutlineCopyright } from "react-icons/ai"
import { FaFacebook, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa"
import mercadoPago from "../images/mercado-pago.svg"
import picPay from "../images/pic-pay.svg"

export default function Footer() {
    const styles = {
        marginLeft: "3vh"
    }
    const listSocials = {
        color: "white"
    }
    return(
        <footer className="footer">
            <Container>
                <Row>
                    <Col md={6}>
                        <h1 className="text-center">Formas de pagamento</h1>
                        <div className="text-center">
                            <img src={mercadoPago} alt="Logo do mercado pago" id="mercado-pago"></img>
                            <img src={picPay} alt="Logo do pic-pay" id="pic-pay"></img>
                        </div>
                    </Col>
                    <Col md={2} className="d-none d-md-block">
                        <div id="vr"></div>
                    </Col>
                    <Col md={4}>
                        <h1 className="text-center">Redes sociais</h1>
                        <div className="list-socials text-center">
                            <Link to="https://www.facebook.com/wsconstrutordesites" target="__blank" style={listSocials}>
                                <FaFacebook></FaFacebook>
                            </Link>
                            <Link to="https://www.instagram.com/wsconstrutordesites/" target="__blank" style={listSocials}>
                                <FaInstagram style={styles}></FaInstagram>
                            </Link>
                            <Link to="https://www.linkedin.com/in/wellington-cesar" target="__blank" style={listSocials}>
                                <FaLinkedin style={styles}></FaLinkedin>
                            </Link>
                            <Link to="https://github.com/wellingtoncgs30" target="__blank" style={listSocials}>
                                <FaGithub style={styles}></FaGithub>
                            </Link>
                        </div>
                    </Col>
                </Row>
                <hr></hr>
                <div className="signature">
                    <Row>
                        <Col sm={12} md={6}>
                            <p><AiOutlineCopyright></AiOutlineCopyright> Todos os direitos reservados</p>
                        </Col>
                        <Col sm={12} md={6}>
                            <p>Site desenvolvido por WS - Desenvolvedor Web</p>
                        </Col>
                    </Row>
                </div>
            </Container>
        </footer>
    )
}