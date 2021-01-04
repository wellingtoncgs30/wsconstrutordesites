import React from "react"
import { Container } from "react-bootstrap"

export default function Blog({children}) {
    return(
        <section id="blog">
            <Container>
                {children}
            </Container>
        </section>
    )
}