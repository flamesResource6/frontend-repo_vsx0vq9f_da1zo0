import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import About from './components/About'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-slate-900">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_10%,rgba(34,211,238,0.06),transparent_40%),radial-gradient(circle_at_90%_20%,rgba(59,130,246,0.06),transparent_40%)]" />
      <Navbar />
      <main className="relative">
        <Hero />
        <Projects />
        <About />
        <Contact />
      </main>
      <footer className="relative border-t border-white/5 py-8 text-center text-slate-400">
        © {new Date().getFullYear()} Portfolio • Dibangun dengan cinta dan teknologi modern
      </footer>
    </div>
  )
}

export default App
