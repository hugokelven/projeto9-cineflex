import { useState, useEffect } from "react"
import { useParams  } from "react-router-dom";
import styled from 'styled-components'
import axios from "axios"

import Sessao from "./Sessao";

export default function TelaSelecionarHorario() {

    const [filme, setFilme] = useState([])

    const { idFilme } = useParams();
    
    useEffect(() => {
    
        const promessa = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${idFilme}/showtimes`)
    
        promessa.then(resposta => {
            setFilme(resposta.data)
        })
    
        promessa.catch(erro => console.log(erro.response))
    }, [])
    
    return(
        <SelecionarHorario>
            <h2>Selecione o Horário</h2>
            {filme.days?.map(sessao =>
                <Sessao
                    key={sessao.id}
                    data={sessao.date}
                    horarios={sessao.showtimes}
                    diaSemana={sessao.weekday}
                />)
            }
            <footer>
                <div className="centralizar-conteudo">
                    <img src={filme.posterURL} alt={filme.title} />
                </div>
                <h1>{filme.title}</h1>
            </footer>
        </SelecionarHorario>
    )
}

const SelecionarHorario = styled.div`
    margin: 0 24px;

    footer {
        position: fixed;
        bottom: 0; left: 0; right: 0;
        
        height: 117px;
        
        display: flex;
        align-items: center;
        
        margin-top: 100px;

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

    footer div {
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