export default function Header({ titulo, tema, aoAlternarTema }) {
  return (
    <header className="cabecalho">
      <h1>{titulo}</h1>
      <button type="button" onClick={aoAlternarTema}>
        {tema === 'claro' ? 'Modo escuro' : 'Modo claro'}
      </button>
    </header>
  )
}
