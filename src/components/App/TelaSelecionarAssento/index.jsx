import { useState, useEffect } from "react"
import { useParams  } from "react-router-dom";
import styled from 'styled-components'
import axios from "axios"

export default function TelaSelecionarAssento() {

    const [sessao, setSessao] = useState([])

    const { idSessao } = useParams();
    console.log("sessao id: " + idSessao);

    useEffect(() => {
        const promessa = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${idSessao}/seats`)

        promessa.then(resposta => {
            console.log(resposta.data)
            setSessao(resposta.data)
        })

        promessa.catch(erro => console.log(erro.response))
    }, [])

    return(
        <SelecionarAssento>
            <h2>Selecione o(s) assento(s)</h2>

            <div className="assentos">
                {sessao.seats?.map(assento =>
                    <Assento
                        key={assento.id}
                        className="centralizar-conteudo"
                        estaDisponivel={assento.isAvailable}>

                        {assento.name}

                    </Assento>)
                }
            </div>

            <div className="legenda">
                <div>
                    <Assento className="selecionado"></Assento>
                    <p>Selecionado</p>
                </div>
                <div>
                    <Assento estaDisponivel={true}></Assento>
                    <p>Disponível</p>
                </div>
                <div>
                    <Assento></Assento>
                    <p>Indisponível</p>
                </div>
            </div>

            <div className="inputs">
                <div>
                    <p>Nome do comprador:</p>
                    <input type="text" placeholder="Digite seu nome..."/>
                </div>
                <div>
                    <p>CPF do comprador:</p>
                    <input type="text" placeholder="Digite seu CPF..." />
                </div>
            </div>

            <button>Reservar assento(s)</button>

            <footer>
                <div className="centralizar-conteudo">
                    <img src={sessao.movie?.posterURL} alt={sessao.movie?.title} />
                </div>
                <div>
                    <h1>{sessao.movie?.title}</h1>
                    <h1>{sessao.day?.weekday} - {sessao.name}</h1>
                </div>
            </footer>
        </SelecionarAssento>
    )
}

const SelecionarAssento = styled.div`
    display: flex;
    flex-direction: column;
    align-itens: center;

    .assentos {
        display: flex;
        flex-wrap: wrap;

        margin: 0 23.5px;
    }

    .legenda {
        display: flex;
        justify-content: space-between;
        align-itens: center;

        margin: 0 56px;
    }
    .legenda div {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .legenda p {
        font-style: normal;
        font-weight: 400;
        font-size: 13px;
        line-height: 15px;
        letter-spacing: -0.013em;

        margin-bottom: 40px;

        color: #4E5A65;
    }

    .selecionado {
        border: 1px solid #1AAE9E;

        background: #8DD7CF;
    }

    .inputs {
        margin: 0 24px;
    }
    .inputs div {
        margin-bottom: 7px;
    }
    .inputs p {
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 21px;
        color: #293845;
    }
    .inputs input {
        width: 100%;
        height: 51px;

        font-weight: 400;
        font-size: 24px;

        border-radius: 3px;
        border: 1px solid #D5D5D5;
    }

    button {
        width: 225px;
        height: 42px;

        align-self: center;

        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 21px;
        text-align: center;
        letter-spacing: 0.02em;
        color: #FFFFFF;

        border: none;
        border-radius: 3px;

        background: #E8833A;
    }

    footer {
        position: fixed;
        bottom: 0; left: 0; right: 0;
        
        height: 117px;
        
        display: flex;
        align-items: center;
        
        margin-top: 117px;

        border: 1px solid #9EADBA;
        
        background: #DFE6ED;
    }

    footer h1 {
        font-style: normal;
        font-weight: 400;
        font-size: 26px;
        line-height: 30px;
        color: #293845;
    }

    footer div:first-child {
        width: 64px;
        height: 89px;

        margin: 0 14px 0 10px;

        border-radius: 2px;

        box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
        background: #FFFFFF;
    }
    footer div img {
        width: 48px;
        height: 72px;
    }
`

const Assento = styled.div`
    width: 26px;
    height: 26px;

    margin: 0 3.5px 18px 3.5px;

    border-radius: 12px;
    border: 1px solid ${props => props.estaDisponivel === true ? "#808F9D" : "#F7C52B"};

    background: ${props => props.estaDisponivel === true ? "#C3CFD9" : "#FBE192"};
`