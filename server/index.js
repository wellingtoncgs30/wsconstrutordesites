const express = require("express")
const morgan = require("morgan")
const cors = require("cors")
const bodyParser = require("body-parser")
const nodemailer = require("nodemailer")
require("dotenv").config()
const app = express()
const port = 3000

app.use(express.json())
app.use(morgan("tiny"))
app.use(bodyParser.urlencoded({extended: true}))
app.use(cors())

const mailer = nodemailer.createTransport({
    service: "Gmail",
    host: "smtp.gmail.com",
    port: 465,
    auth: {
        user: process.env.GMAIL_USERNAME,
        pass: process.env.GMAIL_PASSWORD
    }
})

app.post("/contact", function(request, response) {
    mailer.sendMail(
        {
            from: [request.body.name] + " " + [request.body.email],
            replyTo: [request.body.name] + " " + [request.body.email],
            to: [process.env.GMAIL_USERNAME],
            subject: request.body.subject || "[Sem assunto]",
            html: request.body.message || "[Sem mensagem]"
        },
        function(error, info) {
            if(error) {
                console.log(error)
                return response.status(500).send(error)
            }
            response.status(200)
            response.redirect("http://localhost:8000/#contact")
        }
    )
})

app.listen(port, () => {
    console.log("servidor em execução!".toUpperCase())
})