'use client'

import { X } from 'lucide-react'
import { useState } from 'react'

export function PromoBanner() {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) return null

  return (
    <div className="bg-[#E91E63] text-white py-2 px-4 relative">
      <div className="container mx-auto text-center text-sm">
        <span className="font-semibold">20% off</span> pedidos de $500+ 
        <span className="hidden sm:inline"> incluyendo planes de pérdida de peso</span>
        <button className="ml-2 underline hover:no-underline">Click para reclamar</button>
      </div>
      <button 
        onClick={() => setIsVisible(false)}
        className="absolute right-4 top-1/2 -translate-y-1/2 hover:opacity-70"
      >
        <X className="h-4 w-4" />
      </button>
    </div>
  )
}
