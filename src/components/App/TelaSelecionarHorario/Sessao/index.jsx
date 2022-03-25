import { Link  } from "react-router-dom";
import styled from 'styled-components'

export default function Sessao({data, horarios, diaSemana}) {
    return(
        <FilmeSessao>
            <p>{diaSemana} - {data}</p>
            <div>
                {horarios.map(horario => 
                    <Link key={horario.id} to={`/assentos/${horario.id}`}>
                        <button>
                            {horario.name}
                        </button>
                    </Link>)
                }
            </div>
        </FilmeSessao>
    )
}

const FilmeSessao = styled.div`
    width: 100%

    p {
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 23px;
        letter-spacing: 0.02em;
        color: #293845;
    }

    button {
        width: 83px;
        height: 43px;

        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 21px;
        text-align: center;
        letter-spacing: 0.02em;
        color: #FFFFFF;

        margin: 25px 8px 25px 0;

        border: none;
        border-radius: 3px;

        background: #E8833A;
    }
`