export default function Article({ titulo, link }) {
  return (
    <article className="artigo">
      <h2>{titulo}</h2>
      <a href={link} target="_blank" rel="noopener noreferrer">
        Ler a matéria completa
      </a>
    </article>
  )
}
