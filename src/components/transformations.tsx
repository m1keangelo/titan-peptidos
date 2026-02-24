'use client'

import { useEffect, useRef, useState } from 'react'
import { TrendingDown, Calendar, Award } from 'lucide-react'

const transformations = [
  {
    name: 'María G.',
    age: 34,
    location: 'La Paz',
    treatment: 'Semaglutida',
    duration: '3 meses',
    result: '-11 kg',
    quote: 'No solo perdí peso, recuperé mi energía y confianza.',
    stats: [
      { label: 'Peso perdido', value: '11 kg' },
      { label: 'IMC reducción', value: '-4.2' },
      { label: 'Energía', value: '+80%' }
    ]
  },
  {
    name: 'Juan P.',
    age: 42,
    location: 'Santa Cruz',
    treatment: 'CJC-1295 + Ipamorelin',
    duration: '4 meses',
    result: '+4 kg músculo',
    quote: 'A mis 42 años nunca pensé ver estos resultados.',
    stats: [
      { label: 'Músculo ganado', value: '4 kg' },
      { label: 'Grasa corporal', value: '-6%' },
      { label: 'Recuperación', value: '2x' }
    ]
  },
  {
    name: 'Carla R.',
    age: 38,
    location: 'Cochabamba',
    treatment: 'BPC-157',
    duration: '2 meses',
    result: 'Recuperación',
    quote: 'Mi lesión de rodilla que duró años finalmente sanó.',
    stats: [
      { label: 'Dolor reducido', value: '90%' },
      { label: 'Movilidad', value: '+75%' },
      { label: 'Actividad', value: 'Completa' }
    ]
  }
]

export function Transformations() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const initGSAP = async () => {
      try {
        const gsapModule = await import('gsap')
        const { ScrollTrigger } = await import('gsap/ScrollTrigger')
        const gsap = gsapModule.gsap
        
        gsap.registerPlugin(ScrollTrigger)
        
        const ctx = gsap.context(() => {
          gsap.from('.transform-header', {
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

          gsap.from('.transform-card', {
            y: 50,
            opacity: 0,
            duration: 0.7,
            stagger: 0.15,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: '.transform-grid',
              start: 'top 85%',
              toggleActions: 'play none none reverse'
            }
          })
        }, sectionRef)

        setIsLoaded(true)
        return () => ctx.revert()
      } catch (error) {
        console.error('GSAP error:', error)
        setIsLoaded(true)
      }
    }
    
    initGSAP()
  }, [])

  return (
    <section ref={sectionRef} id="resultados" className={`hers-section bg-gradient-to-b from-background to-accent ${isLoaded ? '' : 'opacity-100'}`}>
      <div className="hers-container">
        {/* Header */}
        <div className="transform-header text-center max-w-2xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 text-sm font-medium text-[#E91E63] mb-4">
            <Award className="h-4 w-4" />
            Resultados reales
          </span>
          <h2 className="hers-heading-lg text-foreground mb-4">
            Transformaciones<br />
            <span className="text-[#E91E63]">que inspiran</span>
          </h2>
          <p className="hers-body">
            Cada persona es diferente, pero estos son resultados típicos 
            de pacientes que siguieron su tratamiento consistentemente.
          </p>
        </div>

        {/* Transformations Grid */}
        <div className="transform-grid grid md:grid-cols-3 gap-6">
          {transformations.map((item, index) => (
            <div 
              key={index}
              className="transform-card bg-card rounded-3xl p-6 border border-border hover:border-[#E91E63]/30 hover:shadow-lg transition-all duration-300"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="font-bold text-foreground">{item.name}</h3>
                  <p className="text-sm text-muted-foreground">{item.age} años • {item.location}</p>
                </div>
                <div className="text-right">
                  <div className="inline-flex items-center gap-1 bg-[#E91E63]/10 text-[#E91E63] px-3 py-1 rounded-full text-sm font-bold">
                    <TrendingDown className="h-3.5 w-3.5" />
                    {item.result}
                  </div>
                </div>
              </div>

              {/* Treatment Info */}
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                <Calendar className="h-4 w-4" />
                <span>{item.treatment} • {item.duration}</span>
              </div>

              {/* Quote */}
              <blockquote className="text-foreground italic mb-6 border-l-2 border-[#E91E63] pl-4">
                "{item.quote}"
              </blockquote>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 pt-4 border-t border-border">
                {item.stats.map((stat, i) => (
                  <div key={i} className="text-center">
                    <p className="text-lg font-bold text-[#E91E63]">{stat.value}</p>
                    <p className="text-xs text-muted-foreground">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <p className="text-center text-xs text-muted-foreground mt-8">
          Los resultados individuales pueden variar. Estos casos representan experiencias típicas 
          pero no garantizan resultados específicos para todos los pacientes.
        </p>
      </div>
    </section>
  )
}
