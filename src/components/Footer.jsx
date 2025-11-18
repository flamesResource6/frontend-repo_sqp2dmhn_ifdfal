function Footer() {
  return (
    <footer className="border-t border-emerald-500/20 py-10 bg-slate-950/60">
      <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-3 gap-8 text-emerald-100/80">
        <div>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-400 to-green-600 flex items-center justify-center shadow-lg shadow-emerald-600/30">
              <span className="text-2xl">🦍</span>
            </div>
            <div>
              <p className="text-white font-bold leading-tight">Jungle de Gorilas</p>
              <p className="text-emerald-300/80 text-xs -mt-0.5">Marketing Digital</p>
            </div>
          </div>
          <p className="mt-4 text-sm text-emerald-200/70 max-w-sm">Impulsionamos marcas com estratégia, criatividade e performance nas redes sociais.</p>
        </div>
        <div>
          <p className="text-white font-semibold mb-3">Navegação</p>
          <ul className="space-y-2 text-sm">
            <li><a href="/" className="hover:text-white">Início</a></li>
            <li><a href="/servicos" className="hover:text-white">Serviços</a></li>
            <li><a href="/portfolio" className="hover:text-white">Portfólio</a></li>
            <li><a href="/estudos-de-caso" className="hover:text-white">Estudos de Caso</a></li>
            <li><a href="/contacto" className="hover:text-white">Contacto</a></li>
          </ul>
        </div>
        <div>
          <p className="text-white font-semibold mb-3">Contactos</p>
          <ul className="space-y-2 text-sm">
            <li>Email: <a className="hover:text-white" href="mailto:ola@jungledegorilas.com">ola@jungledegorilas.com</a></li>
            <li>Instagram: <a className="hover:text-white" href="https://instagram.com" target="_blank" rel="noreferrer">@jungledegorilas</a></li>
          </ul>
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-6 mt-8 flex flex-col md:flex-row items-center justify-between gap-3 text-emerald-200/60">
        <p>© {new Date().getFullYear()} Jungle de Gorilas. Todos os direitos reservados.</p>
        <p className="text-xs">Feito com paixão na selva digital.</p>
      </div>
    </footer>
  )
}

export default Footer
