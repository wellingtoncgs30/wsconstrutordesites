import React from "react"
import banner from "../images/banner-tecnologia.jpg"
import { Button } from "react-bootstrap"
import { ImWhatsapp } from "react-icons/im"
import { Link } from "gatsby"

export default function Home() {
    return(
        <section id="#home">
            <img src={banner} alt="Banner de tecnologia do site WS - Construtor de sites" id="banner"/>
            <div className="content text-center">
            <h1>Faça o seu orçamento sobre site, portal, blog ou loja virtual</h1>
            <Link to="https://wa.me/5519982380486">
                <Button variant="light" className="call-to-action">
                    <ImWhatsapp style={{color: "darkgreen", fontSize: "50px"}}></ImWhatsapp>
                    Entre em contato agora mesmo
                </Button>
            </Link>
            </div>
      </section>
    )
}