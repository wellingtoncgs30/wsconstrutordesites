import React from "react"
import InputMask from "react-input-mask"
import { Form } from "react-bootstrap"

export default function Input(props) {
    return(
        <InputMask mask="(99)99999-9999" value={props.value} onChange={props.onChange}>
            {(inputProps) => <Form.Control {...inputProps} name="telephone" placeholder="Telefone:" required></Form.Control>}
        </InputMask>
    )
}