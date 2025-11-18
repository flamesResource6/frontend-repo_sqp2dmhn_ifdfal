function About() {
  return (
    <section id="sobre" className="relative py-20">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(40%_40%_at_80%_10%,rgba(16,185,129,0.12),transparent)]" />
      <div className="mx-auto max-w-4xl px-6">
        <div className="rounded-2xl bg-slate-900/70 border border-emerald-500/20 p-8">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white text-center">Sobre a Jungle de Gorilas</h2>
          <p className="text-emerald-100/80 mt-4 text-lg text-center">
            Somos uma equipa criativa e orientada a resultados. Unimos estratégia, design e conteúdo para construir marcas fortes e relevantes.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mt-8">
            {[
              { kpi: '+120%', label: 'Crescimento médio em engajamento' },
              { kpi: '98%', label: 'Satisfação de clientes' },
              { kpi: '7 anos', label: 'De experiência no mercado' }
            ].map((i) => (
              <div key={i.label} className="text-center rounded-xl bg-slate-800/60 border border-emerald-500/20 p-6">
                <p className="text-3xl font-extrabold text-white">{i.kpi}</p>
                <p className="text-emerald-200/80 text-sm mt-1">{i.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
