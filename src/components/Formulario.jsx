import { useEffect, useState } from "react"
import styled from "@emotion/styled"
import { useSelectMonedas } from "../hooks/useSelectMonedas"
import { monedas } from "../data/monedas"
import { fetchData } from "../data/fetchData"

const InputSubmit = styled.input`
    background-color: #9497ff;
    border:none;
    width: 100%;
    padding: 10px;
    color: #fff;
    font-weight: 700;
    text-transform: uppercase;
    font-size: 20px;
    border-radius: 5px;
    transition: background-color .3d ease;
    margin-top: 30px;
    &:hover{
        background-color: #7a7bf4;
        cursor: pointer;
        
    }
`
export const Formulario = () => {
    const [cripto] = fetchData()
    const [moneda, SelectMonedas] = useSelectMonedas('Elige tu moneda', monedas, 'Moneda')
    const [criptoMoneda, SelectCriptoMonedas] = useSelectMonedas('Elige tu cripto moneda', cripto, 'Criptomoneda')

    const handleSubmit = (e) => {
        e.preventDefault()

    }
    return (

        <form
            onSubmit={handleSubmit}
        >
            <SelectMonedas />
            <SelectCriptoMonedas />
            <InputSubmit
                type='submit'
                value='Cotizar'
            />
        </form>
    )
}
