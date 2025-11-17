import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="relative py-24 bg-gradient-to-b from-slate-900 to-slate-950">
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Tentang Saya</h2>
            <p className="mt-4 text-slate-300 leading-relaxed">
              Saya adalah pengembang yang fokus pada pembuatan aplikasi web modern. Menggabungkan desain estetik, performa cepat, dan pengalaman interaktif.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                <p className="text-3xl font-bold text-white">5+</p>
                <p className="text-sm text-slate-400">Tahun pengalaman</p>
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                <p className="text-3xl font-bold text-white">30+</p>
                <p className="text-sm text-slate-400">Proyek selesai</p>
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-white/5 bg-gradient-to-br from-cyan-400/20 to-blue-500/10">
              <img src="https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1200&auto=format&fit=crop" alt="About" className="w-full h-full object-cover mix-blend-overlay opacity-80" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
