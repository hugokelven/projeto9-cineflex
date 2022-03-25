import { useState, useEffect } from "react"
import { Link } from "react-router-dom";
import axios from "axios"

import Filme from "./Filme"

import './styles.css'

export default function TelaSelecionarFilme() {

    const [filmes, setFilmes] = useState([])

    useEffect(() => {
        const promessa = axios.get("https://mock-api.driven.com.br/api/v5/cineflex/movies")

        promessa.then(resposta => {
            console.log(resposta.data)
            setFilmes(resposta.data)
        })

        promessa.catch(erro => console.log(erro.response))
    }, [])

    return(
        <div className="TelaSelecionarFilme">
            <h2>Selecione o Filme</h2>
            <section>
                {filmes.map(filme => 
                <Link key={filme.id} to={`/sessoes/${filme.id}`}>
                    <Filme src={filme.posterURL} alt={filme.title}/>
                </Link>)}
            </section>
        </div>
    )
}