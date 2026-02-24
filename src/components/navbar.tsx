'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { Menu, X, Moon, Sun } from 'lucide-react'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isDark, setIsDark] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)
  const navRef = useRef<HTMLElement>(null)
  const logoRef = useRef<HTMLAnchorElement>(null)

  useEffect(() => {
    let ctx: { revert: () => void } | null = null

    const initGSAP = async () => {
      try {
        const gsapModule = await import('gsap')
        const scrollTriggerModule = await import('gsap/ScrollTrigger')
        const gsap = gsapModule.gsap
        const ScrollTrigger = scrollTriggerModule.ScrollTrigger

        gsap.registerPlugin(ScrollTrigger)

        // Initial animation
        ctx = gsap.context(() => {
          gsap.from(navRef.current, {
            y: -100,
            opacity: 0,
            duration: 0.8,
            ease: 'power3.out',
            delay: 0.2
          })

          gsap.from('.nav-link', {
            y: -20,
            opacity: 0,
            duration: 0.5,
            stagger: 0.08,
            ease: 'power2.out',
            delay: 0.5
          })
        })

        setIsLoaded(true)
      } catch (error) {
        console.error('GSAP initialization error:', error)
        // Ensure content is visible even if GSAP fails
        setIsLoaded(true)
      }
    }

    initGSAP()

    return () => {
      if (ctx) ctx.revert()
    }
  }, [])

  useEffect(() => {
    // Scroll behavior - glass effect on scroll
    const handleScroll = () => {
      if (navRef.current) {
        if (window.scrollY > 50) {
          navRef.current.classList.add('scrolled')
        } else {
          navRef.current.classList.remove('scrolled')
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleDark = () => {
    setIsDark(!isDark)
    document.documentElement.classList.toggle('dark')
  }

  const navLinks = [
    { label: 'Péptidos', href: '#productos' },
    { label: 'Resultados', href: '#resultados' },
    { label: 'Médicos', href: '#medicos' },
    { label: 'Cómo Funciona', href: '#como-funciona' },
  ]

  return (
    <nav ref={navRef} className={`fixed top-10 left-0 right-0 z-50 transition-all duration-500 ${isLoaded ? '' : 'opacity-100'}`}>
      <div className="hers-container">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link 
            ref={logoRef}
            href="/" 
            className="flex items-center group"
          >
            <span className="text-2xl font-bold text-[#E91E63] tracking-tight transition-transform duration-300 group-hover:scale-105">
              TITAN
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link 
                key={link.label}
                href={link.href}
                className="nav-link relative text-sm font-medium text-foreground/80 hover:text-[#E91E63] transition-colors duration-300 py-2 group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#E91E63] transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </div>

          {/* Right Side */}
          <div className="hidden lg:flex items-center gap-4">
            <button
              onClick={toggleDark}
              className="p-2.5 rounded-full hover:bg-accent/50 transition-all duration-300 hover:scale-110"
              aria-label="Toggle dark mode"
            >
              {isDark ? (
                <Sun className="h-5 w-5 text-foreground" />
              ) : (
                <Moon className="h-5 w-5 text-foreground" />
              )}
            </button>
            
            <Link 
              href="#consulta" 
              className="hers-btn-primary text-sm py-3 px-6 hover:scale-105 transition-transform duration-300"
            >
              Comenzar
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={toggleDark}
              className="p-2 rounded-full hover:bg-accent/50 transition-colors"
            >
              {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-full hover:bg-accent/50 transition-colors"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden overflow-hidden transition-all duration-500 ease-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="py-6 border-t border-border/50 space-y-1">
            {navLinks.map((link) => (
              <Link 
                key={link.label}
                href={link.href}
                className="block text-base font-medium text-foreground/80 hover:text-[#E91E63] py-3 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-4">
              <Link 
                href="#consulta" 
                className="hers-btn-primary block text-center w-full"
                onClick={() => setIsOpen(false)}
              >
                Comenzar
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
