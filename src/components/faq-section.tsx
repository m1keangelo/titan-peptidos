'use client'

import { useEffect, useRef, useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    question: '¿Qué son los péptidos y cómo funcionan?',
    answer: 'Los péptidos son cadenas cortas de aminoácidos que actúan como mensajeros naturales en el cuerpo. Regulan funciones como el metabolismo, la recuperación muscular y la regeneración celular. Nuestros tratamientos utilizan péptidos bioactivos de laboratorios certificados que imitan los compuestos naturales de tu cuerpo.'
  },
  {
    question: '¿Necesito receta médica?',
    answer: 'Sí, todos nuestros tratamientos requieren evaluación médica. La buena noticia es que la consulta está incluida en tu plan. Un médico certificado evaluará tu historial médico y determinará si los péptidos son adecuados para ti antes de emitir cualquier receta.'
  },
  {
    question: '¿Cuánto tiempo hasta que vea resultados?',
    answer: 'Los resultados varían según el tratamiento. Para pérdida de peso con Semaglutida, muchos pacientes notan reducción de apetito en la primera semana y pérdida de peso sostenida después de 4-8 semanas. Para recuperación muscular y anti-envejecimiento, los resultados suelen verse en 4-12 semanas.'
  },
  {
    question: '¿Los envíos son discretos?',
    answer: 'Absolutamente. Todos nuestros envíos utilizan empaque neutral sin identificación del contenido. El remitente aparece como "TP Medical" y no incluimos facturas o documentación dentro del paquete. Tu privacidad es nuestra prioridad.'
  },
  {
    question: '¿Qué pasa si tengo efectos secundarios?',
    answer: 'Todos los tratamientos incluyen seguimiento médico continuo. Si experimentas efectos secundarios, puedes contactar a tu médico asignado 24/7 a través de nuestra plataforma. Realizamos ajustes de dosis según sea necesario y en casos raros donde no hay compatibilidad, ofrecemos garantía de satisfacción.'
  },
  {
    question: '¿Puedo pausar o cancelar mi suscripción?',
    answer: 'Sí, tienes control total. Puedes pausar, modificar o cancelar tu tratamiento en cualquier momento desde tu cuenta. No hay contratos a largo plazo ni cargos ocultos. Si cancelas, solo te facturamos hasta el envío más reciente.'
  },
  {
    question: '¿Los péptidos son legales en Bolivia?',
    answer: 'Sí, todos nuestros péptidos son legales para uso médico en Bolivia. Trabajamos bajo regulaciones de telemedicina y todos nuestros médicos están colegiados en el Colegio Médico de Bolivia. Cumplimos con todas las normativas sanitarias vigentes.'
  },
  {
    question: '¿Cómo se almacenan los péptidos?',
    answer: 'La mayoría de nuestros péptidos vienen en formato liofilizado (polvo seco) que es estable a temperatura ambiente hasta su reconstitución. Una vez mezclados con agua bacteriostática, deben refrigerarse entre 2-8°C y usarse dentro de 28 días. Incluimos instrucciones detalladas con cada envío.'
  }
]

export function FAQSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [openIndex, setOpenIndex] = useState<number | null>(0)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const initGSAP = async () => {
      try {
        const gsapModule = await import('gsap')
        const { ScrollTrigger } = await import('gsap/ScrollTrigger')
        const gsap = gsapModule.gsap
        
        gsap.registerPlugin(ScrollTrigger)
        
        const ctx = gsap.context(() => {
          gsap.from('.faq-header', {
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

          gsap.from('.faq-item', {
            y: 30,
            opacity: 0,
            duration: 0.6,
            stagger: 0.08,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: '.faq-list',
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
    <section ref={sectionRef} id="faq" className={`hers-section bg-background ${isLoaded ? '' : 'opacity-100'}`}>
      <div className="hers-container max-w-3xl">
        {/* Header */}
        <div className="faq-header text-center mb-12">
          <h2 className="hers-heading-lg text-foreground mb-4">
            Preguntas<br />
            <span className="text-[#E91E63]">frecuentes</span>
          </h2>
          <p className="hers-body">
            Todo lo que necesitas saber sobre nuestros tratamientos con péptidos.
          </p>
        </div>

        {/* FAQ List */}
        <div className="faq-list space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="faq-item border border-border rounded-2xl overflow-hidden bg-card hover:border-[#E91E63]/30 transition-colors"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-5 text-left"
              >
                <span className="font-semibold text-foreground pr-4">
                  {faq.question}
                </span>
                <ChevronDown 
                  className={`h-5 w-5 text-[#E91E63] flex-shrink-0 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}
                />
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-96' : 'max-h-0'}`}
              >
                <p className="px-5 pb-5 text-muted-foreground leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-12 text-center p-8 bg-accent rounded-2xl">
          <p className="text-foreground font-medium mb-2">
            ¿Tienes más preguntas?
          </p>
          <p className="text-muted-foreground text-sm mb-4">
            Nuestro equipo médico está disponible para ayudarte.
          </p>
          <a href="#consulta" className="hers-btn-primary inline-flex">
            Contactar soporte
          </a>
        </div>
      </div>
    </section>
  )
}
