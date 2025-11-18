import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function Sobre() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar />
      <section className="pt-32 pb-12">
        <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white">Sobre a Jungle de Gorilas</h1>
            <p className="mt-4 text-emerald-200/80 max-w-2xl">Somos uma agência de marketing digital orientada a resultados — combinamos estratégia, branding e conteúdo para acelerar o crescimento de marcas.</p>
            <div className="mt-8 grid sm:grid-cols-2 gap-6">
              {[
                { label: 'Projetos entregues', value: '120+' },
                { label: 'Média ROAS', value: '3,8x' },
                { label: 'Aumento de alcance', value: '220%' },
                { label: 'Clientes ativos', value: '25' },
              ].map((k) => (
                <div key={k.label} className="rounded-2xl border border-emerald-500/20 bg-slate-900/50 p-6">
                  <p className="text-3xl font-extrabold text-white">{k.value}</p>
                  <p className="text-sm text-emerald-100/80 mt-1">{k.label}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-3xl border border-emerald-500/20 bg-slate-900/50 p-6">
            <h2 className="text-white font-semibold text-xl">O nosso método</h2>
            <ul className="mt-4 space-y-4 text-sm text-emerald-100/80">
              <li><span className="text-white font-medium">1. Diagnóstico:</span> imersão na marca, público e dados atuais.</li>
              <li><span className="text-white font-medium">2. Estratégia:</span> posicionamento, proposta de valor e roadmap.</li>
              <li><span className="text-white font-medium">3. Produção:</span> identidade visual, conteúdo e landing pages.</li>
              <li><span className="text-white font-medium">4. Performance:</span> campanhas pagas, testes e otimização contínua.</li>
            </ul>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default Sobre
