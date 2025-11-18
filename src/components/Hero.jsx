import { ArrowRight } from 'lucide-react'

function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden pt-28">
      {/* background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950" />
        <div className="absolute inset-0 opacity-30 bg-[radial-gradient(70%_50%_at_50%_0%,rgba(16,185,129,0.35),transparent)]" />
        <div className="absolute -top-32 -right-32 w-[36rem] h-[36rem] rounded-full bg-emerald-500/20 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 text-emerald-300 border border-emerald-500/30 px-3 py-1 text-xs mb-6">
              <span>Agência de Marketing Digital</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight text-white">
              Cresça a sua marca na selva digital com a Jungle de Gorilas
            </h1>
            <p className="mt-5 text-lg text-emerald-100/80 max-w-xl mx-auto lg:mx-0">
              Somos especialistas em gestão de redes sociais, identidade visual e branding. Estratégia, criatividade e performance para impulsionar resultados.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
              <a href="#contacto" className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white px-5 py-3 font-semibold shadow-lg shadow-emerald-600/30 transition-colors">
                Pedir proposta
                <ArrowRight size={18} />
              </a>
              <a href="#servicos" className="inline-flex items-center justify-center rounded-xl border border-emerald-500/40 text-emerald-100 hover:text-white hover:border-emerald-400/70 px-5 py-3 font-semibold transition-colors">
                Conhecer serviços
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl bg-emerald-500/20 blur-2xl" />
            <div className="relative rounded-3xl bg-gradient-to-br from-slate-800 to-slate-900 border border-emerald-500/20 p-6 shadow-2xl">
              <div className="grid grid-cols-3 gap-4">
                {[
                  'Estratégia', 'Conteúdo', 'Gestão', 'Design', 'Branding', 'Paid Media', 'Relatórios', 'SEO', 'Comunidade'
                ].map((tag) => (
                  <div key={tag} className="col-span-1">
                    <div className="h-24 rounded-2xl bg-slate-800/70 border border-emerald-500/10 flex items-center justify-center text-emerald-200 text-sm">
                      {tag}
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-4 text-center text-emerald-300/80 text-sm">
                Ferramentas e processos pensados para crescer o seu negócio
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
