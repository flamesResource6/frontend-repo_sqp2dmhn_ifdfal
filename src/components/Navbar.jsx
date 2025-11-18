import { useState } from 'react'
import { Menu, X } from 'lucide-react'

function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { label: 'Início', href: '#inicio' },
    { label: 'Serviços', href: '#servicos' },
    { label: 'Portfólio', href: '#portfolio' },
    { label: 'Sobre', href: '#sobre' },
    { label: 'Contacto', href: '#contacto' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl">
        <div className="mx-4 mt-4 rounded-2xl bg-slate-900/70 backdrop-blur border border-emerald-500/20">
          <div className="flex items-center justify-between px-6 py-4">
            <a href="#inicio" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-400 to-green-600 flex items-center justify-center shadow-lg shadow-emerald-600/30">
                <span className="text-2xl">🦍</span>
              </div>
              <div>
                <p className="text-white font-bold leading-tight">Jungle de Gorilas</p>
                <p className="text-emerald-300/80 text-xs -mt-0.5">Marketing Digital</p>
              </div>
            </a>

            <nav className="hidden md:flex items-center gap-6">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} className="text-sm text-emerald-100/80 hover:text-white transition-colors">
                  {item.label}
                </a>
              ))}
              <a href="#contacto" className="ml-2 inline-flex items-center rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 text-sm font-semibold shadow-lg shadow-emerald-600/30 transition-colors">
                Pedir Proposta
              </a>
            </nav>

            <button className="md:hidden text-white" onClick={() => setOpen(!open)} aria-label="Abrir menu">
              {open ? <X /> : <Menu />}
            </button>
          </div>

          {open && (
            <div className="md:hidden border-t border-emerald-500/20 px-6 pb-4">
              <nav className="flex flex-col gap-3 pt-3">
                {navItems.map((item) => (
                  <a key={item.href} href={item.href} className="text-sm text-emerald-100/90 hover:text-white" onClick={() => setOpen(false)}>
                    {item.label}
                  </a>
                ))}
                <a href="#contacto" className="mt-2 inline-flex items-center justify-center rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 text-sm font-semibold shadow-lg shadow-emerald-600/30" onClick={() => setOpen(false)}>
                  Pedir Proposta
                </a>
              </nav>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}

export default Navbar
