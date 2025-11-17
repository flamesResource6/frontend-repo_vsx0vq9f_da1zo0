import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'

const projects = [
  {
    title: 'TaskFlow - Manajer Tugas',
    description: 'Aplikasi manajemen tugas realtime dengan drag & drop dan kolaborasi tim.',
    tags: ['React', 'FastAPI', 'MongoDB'],
    image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=1200&auto=format&fit=crop',
    live: '#',
    repo: '#'
  },
  {
    title: 'ShopX - E-commerce',
    description: 'Platform e-commerce modern dengan sistem keranjang, pembayaran, dan admin dashboard.',
    tags: ['Vite', 'Stripe', 'Tailwind'],
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=1200&auto=format&fit=crop',
    live: '#',
    repo: '#'
  },
  {
    title: 'Insightly - Dashboard Data',
    description: 'Dashboard analitik interaktif dengan grafik dinamis dan filter pintar.',
    tags: ['React', 'D3', 'Framer Motion'],
    image: 'https://images.unsplash.com/photo-1607706189992-eae578626c86?q=80&w=1200&auto=format&fit=crop',
    live: '#',
    repo: '#'
  }
]

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 bg-slate-900">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_20%_20%,rgba(34,211,238,0.08),transparent_40%),radial-gradient(circle_at_80%_30%,rgba(59,130,246,0.08),transparent_40%)]" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Proyek Unggulan</h2>
          <p className="mt-3 text-slate-300">Kumpulan aplikasi pilihan yang pernah saya bangun.</p>
        </div>

        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="group bg-slate-800/40 border border-white/5 rounded-2xl overflow-hidden hover:border-cyan-400/40 transition-colors"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img src={p.image} alt={p.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent" />
              </div>
              <div className="p-5">
                <h3 className="text-white font-semibold text-lg">{p.title}</h3>
                <p className="text-slate-300 text-sm mt-1">{p.description}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.tags.map(t => (
                    <span key={t} className="px-2.5 py-1 text-xs rounded-full bg-white/10 text-slate-200">{t}</span>
                  ))}
                </div>
                <div className="mt-4 flex items-center gap-3">
                  <a href={p.live} className="inline-flex items-center gap-1 text-cyan-300 hover:text-cyan-200 text-sm">
                    <ExternalLink size={16} /> Live
                  </a>
                  <a href={p.repo} className="inline-flex items-center gap-1 text-slate-300 hover:text-white text-sm">
                    <Github size={16} /> Code
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
