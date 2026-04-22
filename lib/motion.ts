import type { Variants } from 'framer-motion'

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number]

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
}

export const slideRight: Variants = {
  hidden: { opacity: 0, x: -16 },
  show:   { opacity: 1, x: 0, transition: { duration: 0.5, ease } },
}

export const stagger = (delay = 0.1): Variants => ({
  hidden: {},
  show:   { transition: { staggerChildren: delay } },
})

export const terminalVariant: Variants = {
  hidden: { opacity: 0, y: 32, scale: 0.97 },
  show:   { opacity: 1, y: 0, scale: 1, transition: { duration: 0.8, ease, delay: 0.5 } },
}
