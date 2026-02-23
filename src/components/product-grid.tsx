'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { useState } from 'react'

const products = [
  {
    title: 'Rendimiento Físico',
    description: 'CJC-1295, Ipamorelina, Ibutamoren',
    href: '/rendimiento',
    image: '/images/fitness.jpg',
    hoverImage: '/images/peptide-vial.jpg',
  },
  {
    title: 'Recuperación Rápida',
    description: 'BPC-157, TB-500, GHK-Cu',
    href: '/recuperacion',
    image: '/images/recovery.jpg',
    hoverImage: '/images/peptide-vial.jpg',
  },
  {
    title: 'Salud Cognitiva',
    description: 'Semax, Selank, Dihexa',
    href: '/cognitivo',
    image: '/images/cognitive.jpg',
    hoverImage: '/images/peptide-vial.jpg',
  },
  {
    title: 'Longevidad',
    description: 'Epitalon, NAD+, GHK-Cu',
    href: '/longevidad',
    image: '/images/longevity.jpg',
    hoverImage: '/images/peptide-vial.jpg',
  },
]

export function ProductGrid() {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            {products.map((product) => (
              <ProductCard key={product.title} {...product} />
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">¿No sabes por dónde empezar?</p>
            <Link href="/evaluacion" className="hers-btn-primary inline-flex items-center">
              Empieza aquí
              <ArrowRight className="h-4 w-4 ml-2" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

function ProductCard({ title, description, href, image, hoverImage }: {
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
      <div className="relative h-64 overflow-hidden">
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
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-[#E91E63] transition-colors">
          {title}
        </h3>
        <p className="text-gray-600 text-sm">
          {description}
        </p>
      </div>
    </Link>
  )
}
