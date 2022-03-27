import styled from 'styled-components'

export default function Filme({src, title}) {
    return (
        <$Filme>
            <img src={src} alt={title} />
        </$Filme>
    )
}

const $Filme = styled.article`
    width: 145px;
    height: 209px;

    margin-bottom: 11px;

    padding: 8px;

    img {
        width: 129px;
        height: 193px;
    }
`