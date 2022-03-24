import "./styles.css"

export default function Filme({src, title}) {
    return (
        <article className="Filme">
            <img src={src} alt={title} />
        </article>
    )
}