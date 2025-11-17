import { motion } from 'framer-motion'
import { Mail, Send } from 'lucide-react'

export default function Contact() {
  const backend = import.meta.env.VITE_BACKEND_URL

  const handleSubmit = async (e) => {
    e.preventDefault()
    const formData = Object.fromEntries(new FormData(e.currentTarget))

    try {
      const res = await fetch(`${backend}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })
      const data = await res.json()
      alert(data.message || 'Terima kasih!')
      e.currentTarget.reset()
    } catch (err) {
      alert('Gagal mengirim pesan. Coba lagi ya.')
    }
  }

  return (
    <section id="contact" className="relative py-24 bg-slate-950">
      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Kontak</h2>
          <p className="mt-3 text-slate-300">Ada ide proyek? Kirim pesan singkat di bawah ini.</p>
        </div>

        <motion.form onSubmit={handleSubmit} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="mt-10 bg-white/5 border border-white/10 rounded-2xl p-6">
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-slate-300 mb-1">Nama</label>
              <input name="name" required className="w-full px-3 py-2 rounded-lg bg-slate-900/60 border border-white/10 text-white outline-none focus:ring-2 focus:ring-cyan-400" />
            </div>
            <div>
              <label className="block text-sm text-slate-300 mb-1">Email</label>
              <input name="email" type="email" required className="w-full px-3 py-2 rounded-lg bg-slate-900/60 border border-white/10 text-white outline-none focus:ring-2 focus:ring-cyan-400" />
            </div>
          </div>
          <div className="mt-4">
            <label className="block text-sm text-slate-300 mb-1">Pesan</label>
            <textarea name="message" rows="4" required className="w-full px-3 py-2 rounded-lg bg-slate-900/60 border border-white/10 text-white outline-none focus:ring-2 focus:ring-cyan-400" />
          </div>
          <button className="mt-4 inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-cyan-400 text-slate-900 font-semibold hover:bg-cyan-300 transition-colors">
            <Send size={18} /> Kirim Pesan
          </button>
          <p className="mt-3 text-xs text-slate-400 inline-flex items-center gap-1"><Mail size={14}/> Pesan akan disimpan aman di backend.</p>
        </motion.form>
      </div>
    </section>
  )
}
