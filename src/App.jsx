import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Portfolio from './components/Portfolio'
import About from './components/About'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Portfolio />
        <About />
        <Contact />
      </main>
      <footer className="border-t border-emerald-500/20 py-8">
        <div className="mx-auto max-w-7xl px-6 flex flex-col md:flex-row items-center justify-between gap-3 text-emerald-200/80">
          <p>© {new Date().getFullYear()} Jungle de Gorilas. Todos os direitos reservados.</p>
          <a href="#contacto" className="text-emerald-300 hover:text-white">Fale connosco</a>
        </div>
      </footer>
    </div>
  )
}

export default App
