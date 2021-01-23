import React from "react"
import { Container } from "react-bootstrap"

export default function About() {
    return(
        <section id="about" className="text-justify">
            <Container>
                <h1 className="text-center">Sobre a WS - Construtor de sites</h1>
                <p>A WS surgiu em setembro de 2020. Seu fundador Wellington César que é uma pessoa apaixonada por tecnologia, inovação e desenvolvimento de sites e que ao perceber como usuário, sites que entregavam pouca experiência de uso ao usuário, lentidão no carregamento das páginas e pouco resultado para algumas empresas na divulgação de seus produtos e serviços.</p>
                <p>Assim surgiu uma oportunidade de oferecer aos clientes sites, lojas virtuais, blogs e sites de notícias com alto desempenho nas hospedagens existentes a preços competitivos e justos.</p>
                <p>A prestação de serviços ocorre no levantamento das necessidades dos clientes que querem além de ter um site, que é o endereço virtual próprio, ter uma excelente performance com preço justo e resultados. Para alcançar esses resultados realizamos o trabalho de SEO para que seu site sempre esteja bem posicionado em pesquisas do Google.</p>
                <h2 className="text-center">Missão</h2>
                <ul>
                    <li>Desenvolver serviços inovadores para que nossos clientes tenham desempenho e resultados nas pesquisas do google, gerando retorno financeiro, valores e lucros.</li>
                    <li>Buscar sempre a satisfação do cliente.</li>
                </ul>
                <h2 className="text-center">Visão</h2>
                <ul>
                    <li>Ser uma empresa inovadora no desenvolvimento dos serviços oferecidos.</li>
                    <li>Oferecer o melhor em experiência do usuário e interfaces modernas.</li>
                    <li>Ser uma referência no desenvolvimento de sites, lojas virtuais, blogs e portais de notícias na região.</li>
                </ul>
                <h2 className="text-center">Valores</h2>
                <ul>
                    <li>Transparência</li>
                    <li>Ética</li>
                    <li>Honestidade</li>
                    <li>Comprometimento</li>
                    <li>Respeito ao cliente e as leis vigentes.</li>
                </ul>
            </Container>
        </section>
    )
}