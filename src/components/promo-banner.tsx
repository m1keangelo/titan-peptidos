'use client'

import { X } from 'lucide-react'
import { useState } from 'react'

export function PromoBanner() {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) return null

  return (
    <div className="bg-[#E91E63] text-white py-2.5 px-4 relative">
      <div className="container mx-auto text-center text-sm font-medium">
        <span className="font-bold">20% OFF</span> en tu primera consulta 
        <span className="hidden sm:inline"> — Protocolos personalizados con médicos certificados</span>
        <button className="ml-2 underline hover:no-underline font-semibold">Reclamar ahora</button>
      </div>
      <button 
        onClick={() => setIsVisible(false)}
        className="absolute right-4 top-1/2 -translate-y-1/2 hover:bg-white/20 rounded-full p-1 transition-colors"
        aria-label="Cerrar banner"
      >
        <X className="h-4 w-4" />
      </button>
    </div>
  )
}
