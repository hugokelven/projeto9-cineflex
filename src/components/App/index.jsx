import {BrowserRouter, Routes, Route} from "react-router-dom"

import TelaSelecionarFilme from "./TelaSelecionarFilme"
import TelaSelecionarHorario from "./TelaSelecionarHorario"
import TelaSelecionarAssento from "./TelaSelecionarAssento"
import TelaFinalizacao from "./TelaFinalizacao"

import "./styles.css"

export default function App() {
    return(
        <div className="App">
            <BrowserRouter>
                <header className="centralizar-conteudo">CINEFLEX</header>
                <Routes>
                    <Route path="/" element={<TelaSelecionarFilme/>}></Route>
                    <Route path="/sessoes/:idFilme" element={<TelaSelecionarHorario/>}></Route>
                    <Route path="/assentos/:idSessao" element={<TelaSelecionarAssento/>}></Route>
                    <Route path="/sucesso" element={<TelaFinalizacao/>}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}