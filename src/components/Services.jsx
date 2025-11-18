import { Instagram, Palette, Megaphone, BarChart3, Sparkles, Layers } from 'lucide-react'

function Services() {
  const services = [
    {
      icon: <Instagram className="text-emerald-400" size={28} />,
      title: 'Gestão de Redes Sociais',
      desc: 'Planeamento, criação e gestão diária para Instagram, Facebook, TikTok e LinkedIn com estratégia orientada a resultados.'
    },
    {
      icon: <Palette className="text-emerald-400" size={28} />,
      title: 'Identidade Visual',
      desc: 'Criação de logótipos, guias de estilo, paletas e aplicações visuais para marcas memoráveis e consistentes.'
    },
    {
      icon: <Layers className="text-emerald-400" size={28} />,
      title: 'Branding',
      desc: 'Posicionamento, tom de voz e presença visual alinhados à sua essência e ao seu público.'
    },
    {
      icon: <Megaphone className="text-emerald-400" size={28} />,
      title: 'Paid Media',
      desc: 'Campanhas de anúncios em Meta e Google com segmentação precisa e otimização contínua.'
    },
    {
      icon: <BarChart3 className="text-emerald-400" size={28} />,
      title: 'Relatórios e KPI',
      desc: 'Medição de desempenho com dashboards claros e insights acionáveis.'
    },
    {
      icon: <Sparkles className="text-emerald-400" size={28} />,
      title: 'Conteúdo Criativo',
      desc: 'Produção de conteúdos visuais e copywriting que captam atenção e geram interação.'
    }
  ]

  return (
    <section id="servicos" className="relative py-20">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(40%_40%_at_20%_20%,rgba(16,185,129,0.15),transparent)]" />
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">Serviços</h2>
          <p className="text-emerald-100/80 mt-3">Tudo o que precisa para fortalecer a sua marca.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div key={s.title} className="rounded-2xl bg-slate-900/70 border border-emerald-500/20 p-6 hover:border-emerald-400/40 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center mb-4">
                {s.icon}
              </div>
              <h3 className="text-white font-semibold text-lg">{s.title}</h3>
              <p className="text-emerald-100/80 text-sm mt-2">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
