import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/40 via-slate-900/60 to-slate-900 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-8 items-center py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-white"
        >
          <p className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-slate-200 text-xs mb-4">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            Tersedia untuk proyek freelance
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
            Portofolio Kreator Aplikasi
          </h1>
          <p className="mt-4 text-slate-300 text-lg">
            Showcase karya aplikasi modern dengan sentuhan interaktif 3D. Cepat, responsif, dan penuh vibe teknologi.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#projects" className="px-5 py-3 rounded-lg bg-cyan-400 text-slate-900 font-semibold hover:bg-cyan-300 transition-colors text-center">
              Lihat Proyek
            </a>
            <a href="#contact" className="px-5 py-3 rounded-lg bg-white/10 text-white font-semibold hover:bg-white/20 transition-colors text-center">
              Kontak Saya
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
