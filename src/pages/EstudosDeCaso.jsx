import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function EstudosDeCaso() {
  const cases = [
    {
      brand: 'EcoDrinks',
      kpi: '+245% alcance',
      summary: 'Série de Reels + UGC + Ads otimizados para crescimento orgânico e vendas.',
    },
    {
      brand: 'FitWear',
      kpi: '-38% CPA',
      summary: 'Estratégia de funil completo com criativos iterativos e landing pages A/B.',
    },
    {
      brand: 'Casa Verde',
      kpi: '+4,2x ROAS',
      summary: 'Reposicionamento de marca e nova identidade visual com campanhas de performance.',
    },
  ]

  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar />
      <section className="pt-32 pb-12">
        <div className="mx-auto max-w-7xl px-6">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white">Estudos de Caso</h1>
          <p className="mt-3 text-emerald-200/80 max-w-2xl">Resultados reais com estratégia, criatividade e dados.</p>
          <div className="mt-10 space-y-6">
            {cases.map(c => (
              <div key={c.brand} className="rounded-2xl border border-emerald-500/20 bg-slate-900/50 p-6">
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-white font-semibold text-xl">{c.brand}</h3>
                  <span className="text-emerald-300 bg-slate-900/70 border border-emerald-500/20 text-xs px-3 py-1 rounded-full">{c.kpi}</span>
                </div>
                <p className="mt-3 text-sm text-emerald-100/80">{c.summary}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default EstudosDeCaso
