'use client'

import Link from 'next/link'
import { Menu, X, Moon, Sun } from 'lucide-react'
import { useState } from 'react'
import { useTheme } from './theme-provider'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const { theme, toggleTheme } = useTheme()

  const navLinks = [
    { label: 'Péptidos', href: '#productos' },
    { label: 'Cómo Funciona', href: '#como-funciona' },
    { label: 'Médicos', href: '#medicos' },
    { label: 'Blog', href: '#blog' },
  ]

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="hers-container">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo - Left */}
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-bold text-[#E91E63]">TITAN</span>
          </Link>

          {/* Desktop Nav - Center */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link 
                key={link.label}
                href={link.href} 
                className="text-sm font-medium text-foreground/80 hover:text-[#E91E63] transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right Side - Dark Mode + Login + CTA */}
          <div className="hidden md:flex items-center gap-3">
            {/* Dark Mode Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-accent transition-colors"
              aria-label={theme === 'dark' ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
            >
              {theme === 'dark' ? (
                <Sun className="h-5 w-5 text-foreground" />
              ) : (
                <Moon className="h-5 w-5 text-foreground" />
              )}
            </button>
            
            <Link 
              href="/login" 
              className="text-sm font-medium text-foreground/80 hover:text-[#E91E63] transition-colors px-3"
            >
              Iniciar sesión
            </Link>
            <Link 
              href="#consulta" 
              className="hers-btn-primary text-sm py-2.5 px-5"
            >
              Comenzar
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 md:hidden">
            {/* Mobile Dark Mode Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-accent transition-colors"
              aria-label={theme === 'dark' ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
            >
              {theme === 'dark' ? (
                <Sun className="h-5 w-5 text-foreground" />
              ) : (
                <Moon className="h-5 w-5 text-foreground" />
              )}
            </button>
            
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-full hover:bg-accent transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link 
                  key={link.label}
                  href={link.href} 
                  className="text-sm font-medium text-foreground/80 hover:text-[#E91E63] py-3 px-2 rounded-lg hover:bg-accent transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="border-t border-border my-2" />
              <Link 
                href="/login" 
                className="text-sm font-medium text-foreground/80 hover:text-[#E91E63] py-3 px-2 rounded-lg hover:bg-accent transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Iniciar sesión
              </Link>
              <Link 
                href="#consulta" 
                className="hers-btn-primary text-center text-sm mt-2"
                onClick={() => setIsOpen(false)}
              >
                Comenzar
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
