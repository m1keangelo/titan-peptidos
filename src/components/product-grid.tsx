'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

const products = [
  {
    id: 'muscle-growth',
    title: 'Crecimiento Muscular',
    subtitle: 'CJC-1295 / Ipamorelin',
    image: '/images/fitness.jpg',
    hoverImage: '/images/peptide-vial.jpg',
    href: '#muscle'
  },
  {
    id: 'recovery',
    title: 'Recuperación',
    subtitle: 'BPC-157 / TB-500',
    image: '/images/recovery.jpg',
    hoverImage: '/images/peptide-vial.jpg',
    href: '#recovery'
  },
  {
    id: 'cognitive',
    title: 'Rendimiento Mental',
    subtitle: 'Semax / Selank',
    image: '/images/cognitive.jpg',
    hoverImage: '/images/peptide-vial.jpg',
    href: '#cognitive'
  },
  {
    id: 'longevity',
    title: 'Longevidad',
    subtitle: 'Epitalon / GHK-Cu',
    image: '/images/longevity.jpg',
    hoverImage: '/images/peptide-vial.jpg',
    href: '#longevity'
  },
]

export function ProductGrid() {
  const sectionRef = useRef<HTMLElement>(null)
  const cardsRef = useRef<(HTMLAnchorElement | null)[]>([])
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    let ctx: { revert: () => void } | null = null

    const initGSAP = async () => {
      try {
        const gsapModule = await import('gsap')
        const scrollTriggerModule = await import('gsap/ScrollTrigger')
        const gsap = gsapModule.gsap
        const ScrollTrigger = scrollTriggerModule.ScrollTrigger

        gsap.registerPlugin(ScrollTrigger)

        ctx = gsap.context(() => {
          // Staggered card reveal
          gsap.from(cardsRef.current.filter(Boolean), {
            y: 60,
            opacity: 0,
            duration: 0.8,
            stagger: 0.15,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 80%',
              toggleActions: 'play none none reverse'
            }
          })
        }, sectionRef)

        setIsLoaded(true)
      } catch (error) {
        console.error('GSAP initialization error:', error)
        setIsLoaded(true)
      }
    }

    initGSAP()

    return () => {
      if (ctx) ctx.revert()
    }
  }, [])

  return (
    <section ref={sectionRef} id="productos" className={`hers-section bg-background ${isLoaded ? '' : 'opacity-100'}`}>
      <div className="hers-container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="hers-heading-lg text-foreground mb-4">
            Protocolos especializados
          </h2>
          <p className="hers-body max-w-2xl mx-auto">
            Cada protocolo está diseñado para objetivos específicos de salud y rendimiento
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {products.map((product, index) => (
            <Link
              key={product.id}
              ref={el => { cardsRef.current[index] = el }}
              href={product.href}
              className="group relative block hers-card"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="relative h-64 lg:h-80 overflow-hidden">
                {/* Default Image */}
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className={`object-cover transition-all duration-700 ${hoveredIndex === index ? 'opacity-0 scale-110' : 'opacity-100 scale-100'}`}
                />
                {/* Hover Image */}
                <Image
                  src={product.hoverImage}
                  alt={`${product.title} - vial`}
                  fill
                  className={`object-cover transition-all duration-700 ${hoveredIndex === index ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
              </div>
              
              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
                <div className="flex items-end justify-between">
                  <div>
                    <h3 className="text-xl lg:text-2xl font-bold text-white mb-1">
                      {product.title}
                    </h3>
                    <p className="text-white/80 text-sm">
                      {product.subtitle}
                    </p>
                  </div>
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm group-hover:bg-[#E91E63] transition-all duration-300">
                    <ArrowUpRight className="h-5 w-5 text-white transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
