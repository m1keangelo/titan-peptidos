'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export function StickyCTA() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling past hero section (approx 600px)
      const scrollY = window.scrollY
      setIsVisible(scrollY > 600)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (!isVisible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-background border-t border-border p-4 lg:hidden">
      <div className="flex items-center justify-between gap-4">
        <div className="flex-1">
          <p className="text-sm font-semibold text-foreground">Comienza tu transformación</p>
          <p className="text-xs text-muted-foreground">Consulta médica incluida</p>
        </div>
        <Link 
          href="#consulta"
          className="hers-btn-primary text-sm py-2.5 px-5 flex-shrink-0"
        >
          Comenzar
          <ArrowRight className="h-4 w-4 ml-1" />
        </Link>
      </div>
    </div>
  )
}
