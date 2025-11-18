function Portfolio() {
  const projects = [
    {
      title: 'Lançamento de Marca de Moda',
      desc: 'Estratégia de branding, identidade visual e social media com crescimento de 120% em 3 meses.',
      tags: ['Branding', 'Social Media', 'Paid Media']
    },
    {
      title: 'Restaurante Local',
      desc: 'Calendário de conteúdo, produção de foto/vídeo e campanhas para reservas (+85% em 2 meses).',
      tags: ['Conteúdo', 'Gestão de Redes', 'Anúncios']
    },
    {
      title: 'Startup Tech B2B',
      desc: 'Posicionamento de marca, design system e LinkedIn orgânico com geração de leads qualificados.',
      tags: ['Identidade', 'Design', 'LinkedIn']
    }
  ]

  return (
    <section id="portfolio" className="relative py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">Portfólio</h2>
          <p className="text-emerald-100/80 mt-3">Alguns resultados do nosso trabalho.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((p) => (
            <div key={p.title} className="rounded-2xl bg-slate-900/70 border border-emerald-500/20 p-6">
              <div className="h-36 rounded-xl bg-gradient-to-br from-emerald-400/20 to-emerald-600/10 border border-emerald-500/20 mb-4" />
              <h3 className="text-white font-semibold">{p.title}</h3>
              <p className="text-emerald-100/80 text-sm mt-1">{p.desc}</p>
              <div className="flex flex-wrap gap-2 mt-3">
                {p.tags.map((t) => (
                  <span key={t} className="text-xs px-2 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-200">{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Portfolio
