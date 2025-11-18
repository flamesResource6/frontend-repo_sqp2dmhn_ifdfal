import { useState } from 'react'

function Contact() {
  const [status, setStatus] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    const form = new FormData(e.currentTarget)
    const payload = {
      name: form.get('name'),
      email: form.get('email'),
      message: form.get('message')
    }

    try {
      const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${baseUrl}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })
      if (!res.ok) throw new Error('Erro no envio')
      setStatus('success')
      e.currentTarget.reset()
    } catch (err) {
      setStatus('error')
    }
  }

  return (
    <section id="contacto" className="relative py-20">
      <div className="mx-auto max-w-5xl px-6">
        <div className="grid md:grid-cols-2 gap-8 items-stretch">
          <div className="rounded-2xl bg-slate-900/70 border border-emerald-500/20 p-8">
            <h2 className="text-3xl font-extrabold text-white">Vamos conversar</h2>
            <p className="text-emerald-100/80 mt-2">Conte-nos sobre o seu projeto e voltamos rapidamente com uma proposta.</p>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div>
                <label className="block text-sm text-emerald-100/80 mb-1">Nome</label>
                <input name="name" required className="w-full rounded-xl bg-slate-800/70 border border-emerald-500/20 px-4 py-2 text-white placeholder:text-emerald-200/40 focus:outline-none focus:ring-2 focus:ring-emerald-400" placeholder="O seu nome" />
              </div>
              <div>
                <label className="block text-sm text-emerald-100/80 mb-1">Email</label>
                <input type="email" name="email" required className="w-full rounded-xl bg-slate-800/70 border border-emerald-500/20 px-4 py-2 text-white placeholder:text-emerald-200/40 focus:outline-none focus:ring-2 focus:ring-emerald-400" placeholder="email@exemplo.com" />
              </div>
              <div>
                <label className="block text-sm text-emerald-100/80 mb-1">Mensagem</label>
                <textarea name="message" rows="4" required className="w-full rounded-xl bg-slate-800/70 border border-emerald-500/20 px-4 py-2 text-white placeholder:text-emerald-200/40 focus:outline-none focus:ring-2 focus:ring-emerald-400" placeholder="Fale-nos sobre o seu objetivo" />
              </div>
              <button className="w-full md:w-auto inline-flex items-center justify-center rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white px-5 py-3 font-semibold shadow-lg shadow-emerald-600/30 transition-colors">
                Enviar mensagem
              </button>

              {status === 'sending' && <p className="text-emerald-200/80 text-sm">A enviar...</p>}
              {status === 'success' && <p className="text-emerald-300 text-sm">Mensagem enviada com sucesso!</p>}
              {status === 'error' && <p className="text-red-300 text-sm">Ocorreu um erro. Tente novamente.</p>}
            </form>
          </div>

          <div className="rounded-2xl bg-gradient-to-br from-emerald-400/10 to-emerald-600/10 border border-emerald-500/20 p-8">
            <div className="h-full flex flex-col justify-center">
              <h3 className="text-white font-semibold text-lg">Por que escolher a Jungle de Gorilas?</h3>
              <ul className="mt-4 space-y-3 text-emerald-100/90">
                <li>• Estratégia clara e foco em resultados</li>
                <li>• Criatividade com consistência de marca</li>
                <li>• Relatórios transparentes e acompanhamento próximo</li>
                <li>• Equipa dedicada e experiente</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
