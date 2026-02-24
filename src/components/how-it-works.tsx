'use client'

import { useEffect, useRef, useState } from 'react'
import { ClipboardList, MessageCircle, Package, TrendingUp } from 'lucide-react'

const steps = [
  {
    number: '1',
    icon: ClipboardList,
    title: 'Evaluación en línea',
    description: 'Responde algunas preguntas sobre tu salud y objetivos. Toma menos de 5 minutos.',
    time: '5 min'
  },
  {
    number: '2',
    icon: MessageCircle,
    title: 'Consulta médica',
    description: 'Un médico certificado revisa tu caso y te contacta con un plan personalizado.',
    time: '24-48h'
  },
  {
    number: '3',
    icon: Package,
    title: 'Recibe tu tratamiento',
    description: 'Enviamos tus péptidos directo a tu puerta en empaque discreto con instrucciones.',
    time: '2-3 días'
  },
  {
    number: '4',
    icon: TrendingUp,
    title: 'Seguimiento continuo',
    description: 'Tu médico monitorea tu progreso y ajusta el tratamiento según tus resultados.',
    time: 'Continuo'
  }
]

export function HowItWorks() {
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
          gsap.from('.how-header', {
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

          gsap.from('.step-card', {
            y: 50,
            opacity: 0,
            duration: 0.7,
            stagger: 0.15,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: '.steps-grid',
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
    <section ref={sectionRef} id="como-funciona" className={`hers-section bg-accent ${isLoaded ? '' : 'opacity-100'}`}>
      <div className="hers-container">
        {/* Header */}
        <div className="how-header text-center max-w-2xl mx-auto mb-16">
          <h2 className="hers-heading-lg text-foreground mb-4">
            Así de simple<br />
            <span className="text-[#E91E63]">es empezar</span>
          </h2>
          <p className="hers-body">
            Todo el proceso desde la evaluación hasta tu transformación, 
            respaldado por médicos certificados.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="steps-grid grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div 
              key={step.number}
              className="step-card relative bg-background rounded-2xl p-6 text-center group hover:shadow-lg transition-all duration-300"
            >
              {/* Step Number Badge */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#E91E63] text-white font-bold text-sm flex items-center justify-center shadow-lg">
                {step.number}
              </div>

              {/* Icon */}
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-[#E91E63]/10 flex items-center justify-center group-hover:bg-[#E91E63] transition-colors duration-300">
                <step.icon className="h-7 w-7 text-[#E91E63] group-hover:text-white transition-colors" />
              </div>

              {/* Content */}
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {step.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-3">
                {step.description}
              </p>

              {/* Time Badge */}
              <span className="inline-flex items-center text-xs font-medium text-[#E91E63] bg-[#E91E63]/10 px-3 py-1 rounded-full">
                {step.time}
              </span>

              {/* Connector Line (except last) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-px bg-border" />
              )}
            </div>
          ))}
        </div>

        {/* Trust Bar */}
        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground">
            <span className="text-[#E91E63] font-semibold">2,500+</span> pacientes ya transformaron su salud con nosotros
          </p>
        </div>
      </div>
    </section>
  )
}
