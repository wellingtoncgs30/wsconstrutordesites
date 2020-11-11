import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import { AiOutlineCheck } from "react-icons/ai"
import devices from "../images/dispositivos.jpg"
import blog from "../images/blog.jpg"
import eCommerce from "../images/ecommerce.jpg"
import portal from "../images/portal-noticias.jpg"

export default function Services() {
    const styles = {
        color: "darkgreen",
        fontSize: "30px"
    }
    return(
        <section id="services" className="text-justify">
        <Container>
          <h1 className="text-center">Nossos serviços</h1>
          <Row>
            <Col sm={12} md={6}>
              <img src={devices} alt="Imagem de dispositivos - WS - Construtor de sites" id="devices"></img>
              <h2 className="text-center">Sites</h2>
              <ul>
                <li>Desenvolvimento responsivo</li>
                <li>Estratégias para que seu site esteja bem posicionado nos principais buscadores (Google, Bing e Yahoo!).</li>
                <li>Gerenciamento de conteúdos para postagens diversas dentro do seu site.</li>
                <li>Manutenções para garantir o conteúdo atualizado e a performance do seu site.</li>
              </ul>
            </Col>
            <Col sm={12} md={6}>
              <img src={blog} alt="Imagem de dispositivos - WS - Construtor de sites" id="blog"></img>
              <h2 className="text-center">Blogs</h2>
              <ul>
                <li>Desenvolvimento responsivo</li>
                <li>Gerenciamento de conteúdos.</li>
                <li>Integrações com redes sociais.</li>
                <li>Manutenções para garantir o conteúdo atualizado e a performance do seu blog.</li>
              </ul>
            </Col>
            <Col sm={12} md={6}>
              <img src={eCommerce} alt="Imagem de e-commerce - WS - Construtor de sites" id="e-commerce"/>
              <h2 className="text-center">Lojas virtuais</h2>
              <ul>
                <li>Desenvolvimento responsivo</li>
                <li>Realizações de ações para que seu site esteja bem posicionado nas pesquisas do Google.</li>
                <li>Manutenções para promoções da sua loja virtual em diferentes eventos como, por exemplo, dia das mães, black friday, dia do consumidor e outras datas comemorativas importantes para o comércio.</li>
                <li>Ações para trazer mais usuários.</li>
              </ul>
            </Col>
            <Col sm={12} md={6}>
              <img src={portal} alt="Imagem de portal de notícias - WS - Construtor de sites" id="portal"/>
              <h2 className="text-center">Portais</h2>
              <ul>
                <li>Desenvolvimento responsivo</li>
                <li>Gerenciamento de conteúdos</li>
                <li>Atualização de feeds de notícias</li>
                <li>Inclusão de podcasts</li>
              </ul>
            </Col>
          </Row>
          <div className="text-justify p-2">
              <h1 className="text-center">Vantagens ao contratar a WS - Construtor de sites</h1>
              <ul className="list-unstyled">
                <li>
                    <AiOutlineCheck style={styles}></AiOutlineCheck>
                    Atendimento personalizado para atender a sua necessidade.
                </li>
                <li>
                    <AiOutlineCheck style={styles}></AiOutlineCheck>
                    Performance em qualquer dispositivo.
                </li>
                <li>
                    <AiOutlineCheck style={styles}></AiOutlineCheck>
                    Design moderno, seguindo os padrões atuais de desenvolvimento.
                </li>
                <li>
                    <AiOutlineCheck style={styles}></AiOutlineCheck>
                    Identidade visual
                </li>
                <li>
                    <AiOutlineCheck style={styles}></AiOutlineCheck>
                    Preço justo
                </li>
                <li>
                    <AiOutlineCheck style={styles}></AiOutlineCheck>
                    Qualidade na entrega
                </li>
              </ul>
          </div>
        </Container>
      </section>
    ) 
}