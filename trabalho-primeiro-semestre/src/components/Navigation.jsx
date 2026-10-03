import { sites } from '../data'

export default function Navigation() {
  return (
    <nav className="navegacao" aria-label="Sites recomendados">
      <p>Sites recomendados:</p>
      <ul>
        {sites.map((site) => (
          <li key={site.nome}>
            <a href={site.url} target="_blank" rel="noopener noreferrer">
              {site.nome}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
