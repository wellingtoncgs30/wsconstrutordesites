import React, { useState } from "react"
//import axios from "axios"
import { navigate } from "gatsby"
import { Container, Row, Col, Form, FormGroup, Button, Modal } from "react-bootstrap"
import { FaPhoneAlt } from "react-icons/fa"
import { ImWhatsapp } from "react-icons/im"
import Input from "./input"

export default function Contact() {
    /*
    TRECHO DO CÓDIGO PARA ENVIO DE FORMULÁRIO LOCAL
    const [form, setForm] = useState({
        name: "",
        telephone: "",
        email: "",
        subject: "",
        message: ""
    })
    const [show, setShow] = useState(false)
    function openModal() {
        setShow(true)
    }
    function closeModal() {
        setShow(false)
        resetForm()
    }
    function handleInputChange(event) {
        const {name, value} = event.target
        setForm(values => ({...values, [name]: value}))
    }
    async function submitForm(event) {
        const url = "http://localhost:3000/contact"
        const { name, telephone, email, subject, message } = form
        event.preventDefault()
        await axios.post(url, {
            name,
            telephone,
            email,
            subject,
            message
        }).then((response) => {
            setForm(response.data)
            openModal()
        }).catch((error) => {
            console.log(`Erro: ${error}`)
        })
    }
    function resetForm() {
        setForm({
            name: "",
            telephone: "",
            email: "",
            subject: "",
            message: ""
        })
    }*/
    //FUNCIONAMENTO EM SITE HOSPEDADO NO NETLIFY
    const [form, setForm] = useState({
        name: "",
        telephone: "",
        email: "",
        subject: "",
        message: ""
    })
    const [show, setShow] = useState(false)
    function openModal() {
        setShow(true)
    }
    function closeModal() {
        setShow(false)
        resetForm()
    }
    function handleInputChange(event) {
        const {name, value} = event.target
        setForm(values => ({...values, [name]: value}))
    }
    function encode(data) {
        return Object.keys(data).map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])).join("&")
    }
    function submitForm(event) {
        event.preventDefault()
        const formContact = event.target
        fetch("/", {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body: encode({
                "form-name": "contact",
                ...form
            })
        })
        .then(() => 
            navigate(formContact.getAttribute("action"),
            openModal()
        ))
        .catch((error) => console.log(`Erro: ${error}`))
    }
    function resetForm() {
        setForm({
            name: "",
            telephone: "",
            email: "",
            subject: "",
            message: ""
        })
    }
    return(
        <section id="#contact">
            <h1 className="text-center">Entre em contato</h1>
            <Container>
                <Row>
                    <Col sm={12} md={6}>
                        <address className="text-justify">
                            <p>Rua Nossa Senhora da Aparecida - 609</p>
                            <p>Bairro Vila Padre Anchieta</p>
                            <p>CEP: 13068-507</p>
                            <p>Campinas - SP</p>
                            <p><FaPhoneAlt style={{fontSize: "40px"}}></FaPhoneAlt>: (19)98238-0486</p>
                            <p><ImWhatsapp style={{
                                fontSize: "40px",
                                color: "green"
                            }}></ImWhatsapp>: (19)98238-0486</p>
                        </address>
                    </Col>
                    <Col sm={12} md={6}>
                        <Form onSubmit={submitForm} method="POST" name="contact" data-netlify="true" data-netlify-honeypot="bot-field">
                            <input type="hidden" name="form-name" value="contact"></input>
                            <FormGroup>
                                <Form.Control name="name" placeholder="Nome:" value={form.name} onChange={handleInputChange} required></Form.Control>
                            </FormGroup> 
                            <FormGroup>
                                <Input></Input>
                            </FormGroup>                   
                            <FormGroup>
                                <Form.Control name="email" placeholder="E-mail:" value={form.email} onChange={handleInputChange} required></Form.Control>
                            </FormGroup>
                            <FormGroup>
                                <Form.Control name="subject" placeholder="Assunto:" value={form.subject} onChange={handleInputChange} required></Form.Control>
                            </FormGroup>
                            <FormGroup>
                                <Form.Control as="textarea" name="message" placeholder="Mensagem:" value={form.message} onChange={handleInputChange} required></Form.Control>
                            </FormGroup>
                            <FormGroup className="text-center">
                                <Button variant="outline-success" type="submit" onClick={resetForm}>Enviar</Button>
                                <Modal show={show} onHide={closeModal} backdrop="static" keyboard={false} centered>
                                    <Modal.Header closeButton>
                                        <Modal.Title>Informação</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>
                                        <p className="text-center">Sua mensagem foi enviada com sucesso!</p>
                                    </Modal.Body>
                                    <Modal.Footer>
                                        <Button variant="secondary" onClick={closeModal}>Ok</Button>
                                    </Modal.Footer>
                                </Modal>
                                <Button className="ml-2" variant="outline-secondary" type="reset" /*onClick={resetForm}*/>Limpar</Button>
                            </FormGroup>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}