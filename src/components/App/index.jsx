import {BrowserRouter, Routes, Route} from "react-router-dom"

import TelaSelecionarFilme from "./TelaSelecionarFilme"
import TelaSelecionarHorario from "./TelaSelecionarHorario"
import TelaSelecionarAssento from "./TelaSelecionarAssento"
import TelaFinalizacao from "./TelaFinalizacao"

import styled from 'styled-components'

export default function App() {
    return(
        <$App>
            <BrowserRouter>
                <header className="centralizar-conteudo">CINEFLEX</header>
                <Routes>
                    <Route path="/" element={<TelaSelecionarFilme/>}></Route>
                    <Route path="/sessoes/:idFilme" element={<TelaSelecionarHorario/>}></Route>
                    <Route path="/assentos/:idSessao" element={<TelaSelecionarAssento/>}></Route>
                    <Route path="/sucesso" element={<TelaFinalizacao/>}></Route>
                </Routes>
            </BrowserRouter>
        </$App>
    )
}

const $App = styled.div`
    width: 100vw;
    height: 100vh;

    header{
        position: sticky;
        top: 0; left: 0; right: 0;

        height: 67px;

        font-style: normal;
        font-weight: 400;
        font-size: 34px;
        color: #E8833A;

        background-color: #C3CFD9;
    }
`