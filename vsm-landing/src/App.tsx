import { About } from './components/About/About'
import { Benefits } from './components/Benefits/Benefits'
import { CTA } from './components/CTA/CTA'
import { FAQ } from './components/FAQ/FAQ'
import { Footer } from './components/Footer/Footer'
import { Header } from './components/Header/Header'
import { Hero } from './components/Hero/Hero'
import { Solutions } from './components/Solutions/Solutions'
import { Technology } from './components/Technology/Technology'
import { useReveal } from './hooks/useReveal'

export default function App() {
  useReveal()

  return (
    <>
      <a href="#conteudo" className="skip-link">
        Pular para o conteúdo
      </a>
      <Header />
      <main id="conteudo" tabIndex={-1}>
        <Hero />
        <About />
        <Solutions />
        <Technology />
        <Benefits />
        <CTA />
        <FAQ />
      </main>
      <Footer />
    </>
  )
}
