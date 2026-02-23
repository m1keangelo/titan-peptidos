'use client'

import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-[#E91E63]">
            TITAN
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/peptidos" className="text-sm font-medium text-gray-700 hover:text-[#E91E63] transition-colors">
              Péptidos
            </Link>
            <Link href="/como-funciona" className="text-sm font-medium text-gray-700 hover:text-[#E91E63] transition-colors">
              Cómo Funciona
            </Link>
            <Link href="/laboratorio" className="text-sm font-medium text-gray-700 hover:text-[#E91E63] transition-colors">
              Laboratorio
            </Link>
            <Link href="/blog" className="text-sm font-medium text-gray-700 hover:text-[#E91E63] transition-colors">
              Blog
            </Link>
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-4">
            <Link href="/login" className="text-sm font-medium text-gray-700 hover:text-[#E91E63]">
              Iniciar sesión
            </Link>
            <Link href="/evaluacion" className="hers-btn-primary text-sm">
              Comenzar
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <div className="flex flex-col gap-4">
              <Link href="/peptidos" className="text-sm font-medium text-gray-700">
                Péptidos
              </Link>
              <Link href="/como-funciona" className="text-sm font-medium text-gray-700">
                Cómo Funciona
              </Link>
              <Link href="/laboratorio" className="text-sm font-medium text-gray-700">
                Laboratorio
              </Link>
              <Link href="/blog" className="text-sm font-medium text-gray-700">
                Blog
              </Link>
              <Link href="/login" className="text-sm font-medium text-gray-700">
                Iniciar sesión
              </Link>
              <Link href="/evaluacion" className="hers-btn-primary text-center text-sm">
                Comenzar
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
