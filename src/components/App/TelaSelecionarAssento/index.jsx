import { useState, useEffect } from "react"
import { useParams  } from "react-router-dom";
import styled from 'styled-components'
import axios from "axios"

import Assento from "./Assento";

export default function TelaSelecionarAssento() {

    const [sessao, setSessao] = useState([])

    const [ids, setIds] = useState([])

    const [nome, setNome] = useState("")
    const [CPF, setCPF] = useState("")

    function obterIds(id, acao) {
        if (acao === "adicionar") {
            setIds([...ids, id])
        } else {
            const idsAtualizados = ids.filter(el => {
                if (el !== id) {
                    return true
                }
            })
            setIds(idsAtualizados)
        }
        console.log(ids)
    }

    const { idSessao } = useParams();

    useEffect(() => {
        const promessa = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${idSessao}/seats`)

        promessa.then(resposta => {
            console.log(resposta.data)
            setSessao(resposta.data)
        })

        promessa.catch(erro => console.log(erro.response))
    }, [])

    function enviarDadosUsuario(e) {
        e.preventDefault()
        
        const promessa = axios.post("https://mock-api.driven.com.br/api/v5/cineflex/seats/book-many", {ids: ids, name: nome, cpf: CPF})

        promessa.then(resposta => {console.log(resposta.data)})

        promessa.catch(erro => {console.log(erro.response)})
    }

    return(
        <SelecionarAssento>
            <h2>Selecione o(s) assento(s)</h2>

            <div className="assentos">
                {sessao.seats?.map(assento =>
                    <Assento
                        key={assento.id}
                        id={assento.id}
                        estaDisponivel={assento.isAvailable}
                        numeroAssento={assento.name}
                        obterIds={obterIds}
                    />)
                }
            </div>

            <div className="legenda">
                <div>
                    <div className="legenda__icone selecionado"></div>
                    <p>Selecionado</p>
                </div>
                <div>
                    <div className="legenda__icone disponivel"></div>
                    <p>Disponível</p>
                </div>
                <div>
                    <div className="legenda__icone indisponivel"></div>
                    <p>Indisponível</p>
                </div>
            </div>

            <form onSubmit={enviarDadosUsuario}>
                <div>
                    <label htmlFor="nome">Nome do comprador:</label>
                    <input
                        id="nome"
                        type="text" required
                        placeholder="Digite seu nome..."
                        value={nome}
                        onChange={e => setNome(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="CPF">CPF do comprador:</label>
                    <input
                        id="CPF"
                        type="text" required
                        placeholder="Digite seu CPF..."
                        value={CPF}
                        onChange={e => setCPF(e.target.value)}
                    />
                </div>

                <button type="submit">Reservar assento(s)</button>
            </form>


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
    .legenda__icone {
        width: 26px;
        height: 26px;

        margin: 0 3.5px 18px 3.5px;

        border-radius: 12px;
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
    .legenda .disponivel {
        border: 1px solid #808F9D;
        background: #C3CFD9;
    }
    .legenda .indisponivel {
        border: 1px solid #F7C52B;
        background: #FBE192;
    }

    .selecionado {
        border: 1px solid #1AAE9E;

        background: #8DD7CF;
    }

    form {
        margin: 0 24px;
    }
    form div {
        margin-bottom: 7px;
    }
    form label {
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 21px;
        color: #293845;
    }
    form input {
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