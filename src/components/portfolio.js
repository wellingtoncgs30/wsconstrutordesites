import React, { useState } from "react"
import { Container, Row, Col, Modal, Button } from "react-bootstrap"
import logoPestalozzi from "../images/logo-pestalozzi.jpg"
import logoAuroraFashion from "../images/aurora-Fashion.png"
import logoDiviLover from "../images/some_logo_dark.png"
import { Link } from "gatsby"

export default function Portfolio() {
    const [show, setShow] = useState(false)
    function showModal() {
        setShow(true)
    }
    function closeModal() {
        setShow(false)
    }
    const [showModalTwo, setShowModalTwo] = useState(false)
    function openModalTwo() {
        setShowModalTwo(true)
    }
    function closeModalTwo() {
        setShowModalTwo(false)
    }
    const [showModalThree, setShowModalThree] = useState(false)
    function openModalThree() {
        setShowModalThree(true)
    }
    function closeModalThree() {
        setShowModalThree(false)
    }
    const link = {
        color: "black"
    }
    return(
        <section id="portfolio">
            <Container>
                <h1 className="text-center">Últimos trabalhos</h1>
                <h2 className="text-center">Parte em construção!</h2>
                <Row>   
                    <Col sm={12} md={3}>
                        <img src={logoPestalozzi} alt="Logotipo da Associação Pestalozzi Campinas" id="logo-pestalozzi"></img>

                    </Col>
                    <Col sm={12} md={3}>
                        <img src={logoDiviLover} alt="Logotipo da Divi Lover" id="logo-divi-lover"></img>
                        <div className="text-justify">
                            <p>A Divi Lover é um site de caráter fictício baseado em uma empresa norte-americana.</p>
                            <Button variant="outline-info" block onClick={openModalThree}>Clique aqui para saber mais</Button>
                            <Modal show={showModalThree} onHide={closeModal} backdrop="static" keyboard={false}>
                                <Modal.Header closeButton className="text-center">Informação</Modal.Header>
                                <Modal.Body>
                                    <div className="text-justify">
                                        <p>A Divi Lover é um site de caráter fictício baseado em uma empresa norte-americana.
                                            É um site institucional no qual oferece serviços de design e marketing com layout
                                            ultra moderno que segue as tendências atuais de design. 
                                        </p>
                                        <p>Para desenvolvimento desse site foi utilizado o WordPress e o tema Divi, tema este
                                            que é muito utilizado para desenvolvimento de sites com o WordPress e que em sua versão
                                            paga oferece muitas possibilidades de customização, o que permite deixar o site com uma
                                            identidade visual própria e moderna.
                                        </p>
                                        <p>Link do site: <Link to="https://site-divi.000webhostapp.com" target="__blank" style={link}>site-divi.000webhostapp.com</Link></p>
                                    </div>
                                </Modal.Body>
                                <Modal.Footer>
                                    <Button variant="secondary" onClick={closeModalThree}>Ok</Button>
                                </Modal.Footer>
                            </Modal>
                        </div>
                    </Col>
                    <Col sm={12} md={3}>
                        <img src={logoAuroraFashion} alt="Logotipo da Aurora Fashion - Loja virtual de roupas femininas" id="logo-aurora-fashion"></img>
                        <div className="text-justify">
                            <p>A Aurora Fashion é uma loja virtual que vende pela Internet roupas femininas.</p>
                            <Button variant="outline-info" block onClick={openModalTwo}>Clique aqui para saber mais</Button>
                            <Modal show={showModalTwo} onHide={closeModal} backdrop="static" keyboard={false}>
                                <Modal.Header closeButton className="text-center">Informação</Modal.Header>
                                <Modal.Body>
                                    <div className="text-justify">
                                        <p>A Aurora Fashion é uma loja virtual que vende pela Internet roupas femininas. Esta loja é fictícia, na qual foi produzida com o
                                            objetivo de colocar em prática novas formas de design responsivo e moderno de uma loja virtual, onde grande parte das vendas de
                                            um produto são oriundas da Internet por meio de um e-commerce.
                                        </p>
                                        <p>Ferramentas utilizadas para o desenvolvimento dessa loja virtual foram o WordPress e o WooCommerce, que nada mais é do que um
                                            plugin feito para o Wordpress para implementação de funcionalidades necessárias para se ter uma loja virtual, como cadastramento
                                            de produtos, definição de preços, promoções, cupons de promoção e também foi utilizado para a confecção desse site o plugin do pag
                                            seguro para realização de pagamentos.
                                        </p>
                                        <p>Link do site: <Link to="http://lojawoocommerce.epizy.com" target="__blank" style={link}>lojawoocommerce.epizy.com</Link></p>
                                    </div>
                                </Modal.Body>
                                <Modal.Footer>
                                    <Button variant="secondary" onClick={closeModalTwo}>Ok</Button>
                                </Modal.Footer>
                            </Modal>
                        </div>
                    </Col>
                    <Col sm={12} md={3}>
                        <img src={logoPestalozzi} alt="Logotipo da Associação Pestalozzi Campinas" id="logo-pestalozzi"></img>
                        <div className="text-justify">
                            <p>A Associação Pestalozzi de Campinas é uma instituição que cuida de pessoas com autismo e que realiza um grande trabalho.</p>
                            <Button variant="outline-info" block onClick={showModal}>Clique aqui para saber mais</Button>
                            <Modal show={show} onHide={closeModal} backdrop="static" keyboard={false}>
                                <Modal.Header closeButton className="text-center">Informação</Modal.Header>
                                <Modal.Body>
                                    <div className="text-justify">
                                        <p>A Associação Pestalozzi de Campinas é uma instituição que cuida de pessoas com autismo e que 
                                        realiza um grande trabalho na cidade de Campinas. A insituição, para divulgar o grande trabalho
                                        realizado, em meados de 2018 foi constatado a necessidade de se fazer um novo site para a insti
                                        tuição, na qual foi constatada que o mesmo já existia, porém com um layout muito simples e sem
                                        muito conteúdo atualizado para informar aos parceiros, pessoas interessadas em ajudar a instituição
                                        e os órgãos públicos para saber mais sobre ela e ajudar também.</p>
                                        <p>Diante dessa necessidade levantada, foi feito o trabalho de levantamento de todas as informações
                                        e busca por imagens para inserir nesse novo site foi feito o processo de desenvolvimento do site,
                                        onde a primeira etapa foi a busca de uma identidade visual do mesmo, com utilização de cores que
                                        transmitissem uma identidade. Foi feito também a prototipação do mesmo para aplicar a versão final.
                                        </p>
                                        <p>Com esse novo site desenvolvido para a Associação Pestalozzi de Campinas, a instituição passou
                                        a ter informações mais atualizadas e um design mais moderno, seguindo as tendências atuais de
                                        desenvolvimento, trazendo mais visitas e arrecadando doações maiores.
                                        </p>
                                        <p>As tecnologias utilizadas para a confecção desse site foram: HTML5, CSS3, JavaScript e PHP7.</p>
                                        <p>Link do site: <Link to="https://www.pestalozzicampinas.com.br" target="__blank" style={link}>www.pestalozzicampinas.com.br</Link></p>
                                    </div>
                                </Modal.Body>
                                <Modal.Footer>
                                    <Button variant="secondary" onClick={closeModal}>Ok</Button>
                                </Modal.Footer>
                            </Modal>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}