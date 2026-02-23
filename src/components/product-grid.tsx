'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { useState } from 'react'

const categories = [
  {
    title: 'Rendimiento Físico',
    description: 'CJC-1295, Ipamorelina, Ibutamoren',
    href: '#rendimiento',
    image: '/images/fitness.jpg',
    hoverImage: '/images/peptide-vial.jpg',
  },
  {
    title: 'Recuperación Rápida',
    description: 'BPC-157, TB-500, GHK-Cu',
    href: '#recuperacion',
    image: '/images/recovery.jpg',
    hoverImage: '/images/peptide-vial.jpg',
  },
  {
    title: 'Salud Cognitiva',
    description: 'Semax, Selank, Dihexa',
    href: '#cognitivo',
    image: '/images/cognitive.jpg',
    hoverImage: '/images/peptide-vial.jpg',
  },
  {
    title: 'Longevidad',
    description: 'Epitalon, NAD+, GHK-Cu',
    href: '#longevidad',
    image: '/images/longevity.jpg',
    hoverImage: '/images/peptide-vial.jpg',
  },
]

export function ProductGrid() {
  return (
    <section id="productos" className="py-16 md:py-24 bg-background">
      <div className="hers-container">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <h2 className="hers-heading-md text-foreground mb-4">
            Encuentra lo que necesitas
          </h2>
          <p className="hers-body">
            Péptidos de grado farmacéutico para cada objetivo de salud. Todos con prescripción médica y seguimiento profesional.
          </p>
        </div>

        {/* 2x2 Product Grid with Hover Image Swap */}
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            {categories.map((category) => (
              <CategoryCard key={category.title} {...category} />
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">¿No sabes por dónde empezar?</p>
            <Link href="#quiz" className="hers-btn-primary inline-flex items-center">
              Descubre tu protocolo ideal
              <ArrowRight className="h-4 w-4 ml-2" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

function CategoryCard({ title, description, href, image, hoverImage }: {
  title: string
  description: string
  href: string
  image: string
  hoverImage: string
}) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <Link 
      href={href}
      className="hers-card group block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container with Hover Swap */}
      <div className="relative h-56 md:h-64 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className={`object-cover transition-opacity duration-500 ${isHovered ? 'opacity-0' : 'opacity-100'}`}
        />
        <Image
          src={hoverImage}
          alt={title}
          fill
          className={`object-cover transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'}`}
        />
        {/* Subtle overlay on hover */}
        <div className={`absolute inset-0 bg-[#E91E63]/10 transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`} />
      </div>
      
      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-[#E91E63] transition-colors">
          {title}
        </h3>
        <p className="text-muted-foreground text-sm">
          {description}
        </p>
      </div>
    </Link>
  )
}
