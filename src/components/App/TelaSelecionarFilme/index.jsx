import { useState, useEffect } from "react"
import { Link } from "react-router-dom";
import axios from "axios"

import Filme from "./Filme"

import styled from 'styled-components'

export default function TelaSelecionarFilme() {

    const [filmes, setFilmes] = useState([])

    useEffect(() => {
        const promessa = axios.get("https://mock-api.driven.com.br/api/v5/cineflex/movies")

        promessa.then(resposta => {
            setFilmes(resposta.data)
        })

        promessa.catch(erro => console.log(erro.response))
    }, [])

    return(
        <$TelaSelecionarFilme>
            <h2>Selecione o Filme</h2>
            <section>
                {filmes.map(filme => 
                <Link key={filme.id} to={`/sessoes/${filme.id}`}>
                    <Filme src={filme.posterURL} alt={filme.title}/>
                </Link>)}
            </section>
        </$TelaSelecionarFilme>
    )
}

const $TelaSelecionarFilme = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    section {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    
        margin: 0 25px 0 30px;
    
        border-radius: 3px;
        box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
    }
`