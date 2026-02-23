'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X, ShoppingCart, User } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ThemeSwitcher } from '@/components/theme-switcher'
import { cn } from '@/lib/utils'

const navLinks = [
  { href: '/como-funciona', label: 'Cómo Funciona' },
  { href: '/peptidos', label: 'Péptidos' },
  { href: '/transformaciones', label: 'Transformaciones' },
  { href: '/ciencia', label: 'Ciencia' },
  { href: '/faq', label: 'FAQ' },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-xl">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <span className="titan-heading text-2xl sm:text-3xl tracking-tighter">
            TITAN
          </span>
          <span className="text-xs font-medium text-muted-foreground uppercase tracking-widest hidden sm:inline">
            Peptidos
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground animated-underline"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-2">
          <ThemeSwitcher />
          
          <Button variant="ghost" size="icon" className="hidden sm:flex">
            <User className="h-5 w-5" />
            <span className="sr-only">Cuenta</span>
          </Button>
          
          <Button variant="ghost" size="icon" className="relative">
            <ShoppingCart className="h-5 w-5" />
            <span className="sr-only">Carrito</span>
            <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-primary text-[10px] font-bold text-primary-foreground flex items-center justify-center">
              0
            </span>
          </Button>

          <Button className="hidden sm:flex btn-glow" size="sm">
            Comenzar
          </Button>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            <span className="sr-only">Menú</span>
          </Button>
        </div>
      </div>

      {/* Mobile Nav */}
      <div
        className={cn(
          'lg:hidden border-t border-border/40 bg-background/95 backdrop-blur-xl',
          isOpen ? 'block' : 'hidden'
        )}
      >
        <nav className="container flex flex-col gap-4 py-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-lg font-medium text-muted-foreground transition-colors hover:text-foreground"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Button className="w-full btn-glow mt-2">Comenzar Ahora</Button>
        </nav>
      </div>
    </header>
  )
}
