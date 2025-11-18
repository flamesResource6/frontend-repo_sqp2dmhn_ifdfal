import Navbar from '../components/Navbar'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

function Contacto() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar />
      <main className="pt-24">
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default Contacto
