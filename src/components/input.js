import React from "react"
import InputMask from "react-input-mask"
import { Form } from "react-bootstrap"

export default function Input(props) {
    return(
        <InputMask mask="(99)99999-9999" name="telephone" value={props.value} onChange={props.onChange}>
            {(inputProps) => <Form.Control {...inputProps} placeholder="Telefone:" required></Form.Control>}
        </InputMask>
    )
}