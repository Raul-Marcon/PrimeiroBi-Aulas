import { useState } from 'react'
import Header from './components/Header'
import Navigation from './components/Navigation'
import Article from './components/Article'
import Sidebar from './components/Sidebar'
import Footer from './components/Footer'
import { artigos } from './data'

export default function App() {
  const [tema, setTema] = useState('claro')

  function alternarTema() {
    setTema(tema === 'claro' ? 'escuro' : 'claro')
  }

  return (
    <div className="pagina" data-tema={tema}>
      <Header
        titulo="Estudo do tempo e fenômenos climáticos"
        tema={tema}
        aoAlternarTema={alternarTema}
      />
      <Navigation />
      <main className="conteudo">
        <section className="artigos">
          {artigos.map((artigo) => (
            <Article key={artigo.id} titulo={artigo.titulo} link={artigo.link} />
          ))}
        </section>
        <Sidebar />
      </main>
      <Footer />
    </div>
  )
}
