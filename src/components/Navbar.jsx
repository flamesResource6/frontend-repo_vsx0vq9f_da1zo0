import { useState } from 'react'
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react'

function NavLink({ href, children, onClick }) {
  return (
    <a href={href} onClick={onClick} className="text-slate-200 hover:text-white transition-colors">
      {children}
    </a>
  )
}

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const close = () => setOpen(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-900/60 backdrop-blur border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-md bg-gradient-to-tr from-blue-500 to-cyan-400 shadow-lg" />
            <span className="text-white font-semibold tracking-tight">Portfolio</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            <NavLink href="#projects">Proyek</NavLink>
            <NavLink href="#about">Tentang</NavLink>
            <NavLink href="#contact">Kontak</NavLink>
            <div className="h-6 w-px bg-white/10" />
            <a href="mailto:you@example.com" className="text-slate-200 hover:text-white" aria-label="Email">
              <Mail size={20} />
            </a>
            <a href="https://github.com" target="_blank" rel="noreferrer" className="text-slate-200 hover:text-white" aria-label="GitHub">
              <Github size={20} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-slate-200 hover:text-white" aria-label="LinkedIn">
              <Linkedin size={20} />
            </a>
          </nav>

          <button className="md:hidden text-white" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            {open ? <X /> : <Menu />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col gap-3 border-t border-white/5 pt-4">
              <NavLink href="#projects" onClick={close}>Proyek</NavLink>
              <NavLink href="#about" onClick={close}>Tentang</NavLink>
              <NavLink href="#contact" onClick={close}>Kontak</NavLink>
              <div className="flex items-center gap-4 pt-2">
                <a href="mailto:you@example.com" className="text-slate-200 hover:text-white" aria-label="Email">
                  <Mail size={20} />
                </a>
                <a href="https://github.com" target="_blank" rel="noreferrer" className="text-slate-200 hover:text-white" aria-label="GitHub">
                  <Github size={20} />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-slate-200 hover:text-white" aria-label="LinkedIn">
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
