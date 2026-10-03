import { useState } from 'react'
import { dicas } from '../data'

export default function Sidebar() {
  const [aberto, setAberto] = useState(false)

  return (
    <aside className="lateral">
      <p>Blog criado no ano de 2026</p>
      <button
        type="button"
        aria-expanded={aberto}
        aria-controls="dicas-seguranca"
        onClick={() => setAberto(!aberto)}
      >
        {aberto ? 'Ocultar dicas de segurança' : 'Dicas de segurança em temporais'}
      </button>
      {aberto && (
        <div id="dicas-seguranca" className="dicas">
          <ul>
            {dicas.map((dica) => (
              <li key={dica}>{dica}</li>
            ))}
          </ul>
          <small>Informações gerais. Siga sempre as orientações da Defesa Civil.</small>
        </div>
      )}
    </aside>
  )
}
