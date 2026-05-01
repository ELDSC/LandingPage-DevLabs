import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TechCarousel from './components/TechCarousel'
import Projects from './components/Projects'
import Footer from './components/Footer'

export default function App() {
  const [dark, setDark] = useState(false)

  useEffect(() => {
    const root = document.documentElement
    if (dark) {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }
    localStorage.setItem('theme', dark ? 'dark' : 'light')
  }, [dark])

  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 transition-colors">
      <Navbar dark={dark} setDark={setDark} />
      <Hero />
      <TechCarousel />
      <Projects />
      <Footer />
    </div>
  )
}
