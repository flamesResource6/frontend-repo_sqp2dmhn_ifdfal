import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const services = [
  {
    title: 'Gestão de Redes Sociais',
    desc: 'Planeamento editorial, produção de conteúdo e crescimento orgânico com métricas claras.',
    bullets: ['Calendário Editorial', 'Criação de Conteúdo', 'Gestão de Comunidade', 'Relatórios Mensais']
  },
  {
    title: 'Identidade Visual',
    desc: 'Design de logotipo, paleta de cores, tipografia e guias de marca que destacam a sua empresa.',
    bullets: ['Logotipo & Marca', 'Manual de Identidade', 'Kits de Social Media', 'Templates Editáveis']
  },
  {
    title: 'Branding & Estratégia',
    desc: 'Posicionamento, tom de voz e storytelling, aliado a campanhas pagas de performance.',
    bullets: ['Estratégia de Marca', 'Copywriting', 'Campanhas Performance', 'Landing Pages']
  }
]

function Servicos() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar />
      <section className="pt-32 pb-12">
        <div className="mx-auto max-w-7xl px-6">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white">Serviços</h1>
          <p className="mt-3 text-emerald-200/80 max-w-2xl">Soluções completas para marcas que querem crescer com estratégia e criatividade.</p>
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {services.map((s) => (
              <div key={s.title} className="rounded-2xl border border-emerald-500/20 bg-slate-900/50 p-6">
                <h3 className="text-white font-semibold text-xl">{s.title}</h3>
                <p className="mt-2 text-sm text-emerald-100/80">{s.desc}</p>
                <ul className="mt-4 space-y-2 text-sm text-emerald-200/80 list-disc pl-5">
                  {s.bullets.map(b => <li key={b}>{b}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default Servicos
