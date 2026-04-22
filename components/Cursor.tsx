'use client'

import { useEffect } from 'react'

export const Cursor = () => {
  useEffect(() => {
    const dot = document.getElementById('cursor-dot')
    const ring = document.getElementById('cursor-ring')
    if (!dot || !ring) return

    let mx = -100, my = -100, rx = -100, ry = -100
    let rafId: number

    const onMove = (e: MouseEvent) => { mx = e.clientX; my = e.clientY }
    document.addEventListener('mousemove', onMove)

    const loop = () => {
      rx += (mx - rx) * 0.18
      ry += (my - ry) * 0.18
      dot.style.left = mx + 'px'
      dot.style.top = my + 'px'
      ring.style.left = rx + 'px'
      ring.style.top = ry + 'px'
      rafId = requestAnimationFrame(loop)
    }
    rafId = requestAnimationFrame(loop)

    const onOver = (e: MouseEvent) => {
      const t = e.target as Element
      if (t.closest('a, button, input, textarea, [role="button"]')) {
        document.body.classList.add('cursor-hover')
      } else {
        document.body.classList.remove('cursor-hover')
      }
    }
    document.addEventListener('mouseover', onOver)

    return () => {
      document.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseover', onOver)
      cancelAnimationFrame(rafId)
    }
  }, [])

  return null
}
