'use client'

import { useState, useEffect } from 'react'
import { Cursor } from './Cursor'
import { Nav } from './Nav'
import { Hero } from './Hero'
import { About } from './About'
import { Projects } from './Projects'
import { Skills } from './Skills'
import { Experience } from './Experience'
import { Contact } from './Contact'
import { TweaksPanel } from './TweaksPanel'

interface Tweaks {
  accentColor: string
  secondaryColor: string
  bgColor: string
  showParticles: boolean
  fontScale: number
}

const TWEAK_DEFAULTS: Tweaks = {
  accentColor: '#3b82f6',
  secondaryColor: '#ffffff',
  bgColor: '#06060a',
  showParticles: true,
  fontScale: 1,
}

const SECTIONS = ['hero', 'about', 'projects', 'skills', 'experience', 'contact']

export const Portfolio = () => {
  const [activeChapter, setActiveChapter] = useState('hero')
  const [tweaks, setTweaks] = useState<Tweaks>(TWEAK_DEFAULTS)
  const [tweaksVisible, setTweaksVisible] = useState(false)

  useEffect(() => {
    const root = document.documentElement
    root.style.setProperty('--cyan', tweaks.accentColor)
    root.style.setProperty('--violet', tweaks.secondaryColor)
    root.style.setProperty('--bg', tweaks.bgColor)
    root.style.fontSize = `${tweaks.fontScale * 100}%`
  }, [tweaks])

  useEffect(() => {
    const handler = (e: MessageEvent) => {
      if (e.data?.type === '__activate_edit_mode') setTweaksVisible(true)
      if (e.data?.type === '__deactivate_edit_mode') setTweaksVisible(false)
    }
    window.addEventListener('message', handler)
    window.parent.postMessage({ type: '__edit_mode_available' }, '*')
    return () => window.removeEventListener('message', handler)
  }, [])

  useEffect(() => {
    const observers = SECTIONS.map(id => {
      const el = document.getElementById(id)
      if (!el) return null
      const obs = new IntersectionObserver(
        ([e]) => { if (e.isIntersecting) setActiveChapter(id) },
        { threshold: 0.4 },
      )
      obs.observe(el)
      return obs
    })
    return () => observers.forEach(o => o?.disconnect())
  }, [])

  const handleTweaks = (t: Tweaks) => {
    setTweaks(t)
    window.parent.postMessage({ type: '__edit_mode_set_keys', edits: t }, '*')
  }

  return (
    <div style={{ minHeight: '100vh' }}>
      <div id="cursor-dot" />
      <div id="cursor-ring" />
      <Cursor />
      <Nav activeChapter={activeChapter} />
      <Hero showParticles={tweaks.showParticles} />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Contact />
      <TweaksPanel tweaks={tweaks} onChange={handleTweaks} visible={tweaksVisible} />
    </div>
  )
}
