'use client'

import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const testimonials = [
  {
    id: 1,
    name: 'Carlos M.',
    age: 34,
    location: 'Santa Cruz',
    result: '-12kg en 3 meses',
    product: 'Semaglutida',
    quote: 'No entendía cuánto había perdido hasta que empecé a recibir cumplidos. Mi confianza se disparó. Los resultados superaron mis expectativas.',
    avatar: 'CM',
    rating: 5
  },
  {
    id: 2,
    name: 'Andrea L.',
    age: 28,
    location: 'La Paz',
    result: '+5kg músculo',
    product: 'CJC-1295 + Ipamorelin',
    quote: 'La consulta, el precio y el seguimiento me dieron la oportunidad de tener éxito con un tratamiento que pensé que estaba fuera de mi alcance.',
    avatar: 'AL',
    rating: 5
  },
  {
    id: 3,
    name: 'Miguel R.',
    age: 42,
    location: 'Cochabamba',
    result: 'Recuperación 2x',
    product: 'BPC-157',
    quote: 'Elegí Titan porque el proceso fue rápido, fácil y confidencial. Los médicos responden rápido y dan respuestas reales.',
    avatar: 'MR',
    rating: 5
  },
  {
    id: 4,
    name: 'Laura G.',
    age: 36,
    location: 'Sucre',
    result: 'Energía renovada',
    product: 'GHK-Cu + Epitalon',
    quote: 'Ha sido verdaderamente transformador. La mayor diferencia es mi relación con mi cuerpo—ahora es saludable. Estoy emocionada de continuar.',
    avatar: 'LG',
    rating: 5
  }
]

export function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.testimonials-header', {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        }
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const animateCard = (direction: 'next' | 'prev') => {
    if (isAnimating || !cardRef.current) return
    
    setIsAnimating(true)
    const xOffset = direction === 'next' ? -100 : 100
    
    gsap.to(cardRef.current, {
      x: xOffset,
      opacity: 0,
      duration: 0.3,
      ease: 'power2.in',
      onComplete: () => {
        setCurrentIndex(prev => {
          if (direction === 'next') {
            return prev === testimonials.length - 1 ? 0 : prev + 1
          }
          return prev === 0 ? testimonials.length - 1 : prev - 1
        })
        
        gsap.fromTo(cardRef.current, 
          { x: -xOffset, opacity: 0 },
          { 
            x: 0, 
            opacity: 1, 
            duration: 0.4, 
            ease: 'power2.out',
            onComplete: () => setIsAnimating(false)
          }
        )
      }
    })
  }

  const next = () => animateCard('next')
  const prev = () => animateCard('prev')

  const current = testimonials[currentIndex]

  return (
    <section ref={sectionRef} id="resultados" className="hers-section bg-background overflow-hidden">
      <div className="hers-container">
        {/* Header */}
        <div className="testimonials-header text-center mb-16">
          <h2 className="hers-heading-lg text-foreground mb-4">
            Historias reales,<br />
            <span className="text-[#E91E63]">resultados reales</span>
          </h2>
          <p className="hers-body max-w-xl mx-auto">
            Clientes de toda Bolivia comparten su experiencia
          </p>
        </div>

        {/* Testimonial Card */}
        <div className="max-w-4xl mx-auto">
          <div 
            ref={cardRef}
            className="testimonial-card relative"
          >
            {/* Quote Icon */}
            <Quote className="absolute top-8 right-8 h-12 w-12 text-[#E91E63]/10" />
            
            <div className="grid lg:grid-cols-[auto_1fr] gap-8 items-center">
              {/* Avatar & Info */}
              <div className="text-center lg:text-left">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#E91E63] to-[#C2185B] flex items-center justify-center text-white text-xl font-bold mx-auto lg:mx-0 mb-4">
                  {current.avatar}
                </div>
                <h4 className="font-bold text-lg">{current.name}</h4>
                <p className="text-sm text-muted-foreground">{current.age} años • {current.location}</p>
                <div className="flex justify-center lg:justify-start gap-1 mt-2">
                  {[...Array(current.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-[#E91E63] text-[#E91E63]" />
                  ))}
                </div>
              </div>

              {/* Quote & Result */}
              <div>
                <div className="inline-flex items-center gap-2 bg-[#E91E63]/10 text-[#E91E63] text-sm font-semibold px-4 py-2 rounded-full mb-4">
                  {current.result}
                </div>
                <blockquote className="text-xl lg:text-2xl text-foreground font-medium leading-relaxed mb-4">
                  "{current.quote}"
                </blockquote>
                <p className="text-sm text-muted-foreground">
                  Producto: <span className="font-medium text-foreground">{current.product}</span>
                </p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-8">
            <div className="flex items-center gap-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    if (idx !== currentIndex) {
                      animateCard(idx > currentIndex ? 'next' : 'prev')
                    }
                  }}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${idx === currentIndex ? 'bg-[#E91E63] w-8' : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'}`}
                />
              ))}
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={prev}
                disabled={isAnimating}
                className="p-3 rounded-full border border-border hover:border-[#E91E63] hover:text-[#E91E63] transition-all duration-300 disabled:opacity-50"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={next}
                disabled={isAnimating}
                className="p-3 rounded-full border border-border hover:border-[#E91E63] hover:text-[#E91E63] transition-all duration-300 disabled:opacity-50"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Counter */}
          <p className="text-center text-sm text-muted-foreground mt-4">
            {currentIndex + 1} de {testimonials.length}
          </p>
        </div>
      </div>
    </section>
  )
}
