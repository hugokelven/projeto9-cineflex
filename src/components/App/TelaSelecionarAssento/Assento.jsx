import { useState } from "react"
import styled from 'styled-components'

export default function Assento({estaDisponivel, numeroAssento, id, obterAssentoInfo}) {

    const [selecionado, setSelecionado] = useState("")

    function selecionar(e) {
        if (!estaDisponivel) {
            alert("Esse assento não está disponível")
        } else if (selecionado === "") {
            setSelecionado("selecionado")
            obterAssentoInfo([parseInt(e.target.id), e.target.innerText], "adicionar")
        } else {
            setSelecionado("")
            obterAssentoInfo([parseInt(e.target.id), e.target.innerText], "remover")
        }
    }

    return(
        <Cadeira
            id={id}
            className={`centralizar-conteudo ${selecionado}`}
            estaDisponivel={estaDisponivel}
            onClick={selecionar}>

            {numeroAssento}
        </Cadeira>
    )
}

const Cadeira = styled.div`
    width: 26px;
    height: 26px;

    margin: 0 3.5px 18px 3.5px;

    border-radius: 12px;
    border: 1px solid ${props => props.estaDisponivel === true ? "#808F9D" : "#F7C52B"};

    background: ${props => props.estaDisponivel === true ? "#C3CFD9" : "#FBE192"};
`