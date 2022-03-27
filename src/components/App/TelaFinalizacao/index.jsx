import { useNavigate, useLocation } from "react-router-dom";
import styled from 'styled-components'

export default function TelaFinalizacao() {

    const {state} = useLocation()
    const navigate = useNavigate()

    const {filme, assentos, comprador} = state

    return(
        <$Telafinalizacao>
            <h2>Pedido feito com sucesso!</h2>
            <div>
                <h3>Filme e sessão</h3>
                <p>{filme.nome}</p>
                <p>{filme.data} {filme.hora}</p>
            </div>
            <div>
                <h3>Ingressos</h3>
                {assentos.map(assento => <p key={assento}>Assento {assento}</p>)}
            </div>
            <div>
                <h3>Comprador</h3>
                <p>Nome: {comprador.nome}</p>
                <p>CPF: {comprador.cpf}</p>
            </div>

            <button onClick={() => {navigate("/")}}>Voltar pra Home</button>
        </$Telafinalizacao>
    )
}

const $Telafinalizacao = styled.div`
    h2 {
        font-style: normal;
        font-weight: 700;
        font-size: 24px;
        line-height: 28px;
        letter-spacing: 0.04em;
        color: #247A6B;
    }

    h3 {
        font-style: normal;
        font-weight: 700;
        font-size: 24px;
        line-height: 28px;
        letter-spacing: 0.04em;
        color: #293845;
    }

    p {
        font-style: normal;
        font-weight: 400;
        font-size: 22px;
        line-height: 26px;
        letter-spacing: 0.04em;
        color: #293845;
    }

    div {
        margin: 0 0 50px 29px
    }

    button {
        width: 225px;
        height: 42px;
        left: 74px;
        top: 622px;

        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 21px;
        letter-spacing: 0.04em;
        color: #FFFFFF;

        margin: 0 calc(50% - (225px / 2));

        border: none;
        border-radius: 3px;

        background: #E8833A;
    }
`