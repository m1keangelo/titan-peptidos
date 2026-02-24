'use client'

import { useState } from 'react'
import { X } from 'lucide-react'

export function PromoBanner() {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) return null

  return (
    <div className="fixed top-0 left-0 right-0 z-[60] bg-[#E91E63] text-white">
      <div className="hers-container py-2.5">
        <div className="flex items-center justify-center gap-2 text-sm font-medium">
          <span className="hidden sm:inline">🎉</span>
          <span>
            <strong>20% de descuento</strong> en tu primera consulta con código <strong>TITAN20</strong>
          </span>
          <button
            onClick={() => setIsVisible(false)}
            className="absolute right-4 p-1 hover:bg-white/20 rounded-full transition-colors"
            aria-label="Cerrar banner"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  )
}
