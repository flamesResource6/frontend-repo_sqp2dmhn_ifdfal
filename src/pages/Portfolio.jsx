import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function PortfolioPage() {
  const items = Array.from({ length: 9 }).map((_, i) => ({
    title: `Projeto ${i + 1}`,
    tag: i % 2 === 0 ? 'Social' : 'Branding',
  }))

  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar />
      <section className="pt-32 pb-12">
        <div className="mx-auto max-w-7xl px-6">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white">Portfólio</h1>
          <p className="mt-3 text-emerald-200/80 max-w-2xl">Alguns dos nossos trabalhos favoritos em social, identidade visual e campanhas.</p>
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map((item, idx) => (
              <div key={idx} className="group relative overflow-hidden rounded-2xl border border-emerald-500/20 bg-slate-900/50 aspect-[4/3]">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <span className="inline-block text-xs text-emerald-300/80 bg-slate-900/70 border border-emerald-500/20 px-2 py-1 rounded-full mb-2">{item.tag}</span>
                  <h3 className="text-white font-semibold">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default PortfolioPage
