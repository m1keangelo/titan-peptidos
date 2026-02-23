import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export type Theme = 'midnight' | 'titan-gold' | 'bio-teal' | 'royal-purple'

export const themes: { id: Theme; name: string; description: string }[] = [
  {
    id: 'midnight',
    name: 'Midnight',
    description: 'Electric blue on deep black',
  },
  {
    id: 'titan-gold',
    name: 'Titan Gold',
    description: 'Luxury gold and copper accents',
  },
  {
    id: 'bio-teal',
    name: 'Bio Teal',
    description: 'Medical teal with green highlights',
  },
  {
    id: 'royal-purple',
    name: 'Royal Purple',
    description: 'Purple to pink gradient accents',
  },
]

export function setTheme(theme: Theme) {
  if (typeof document !== 'undefined') {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('titan-theme', theme)
  }
}

export function getTheme(): Theme {
  if (typeof window !== 'undefined') {
    return (localStorage.getItem('titan-theme') as Theme) || 'midnight'
  }
  return 'midnight'
}

export function initTheme() {
  if (typeof document !== 'undefined') {
    const savedTheme = getTheme()
    document.documentElement.setAttribute('data-theme', savedTheme)
  }
}
