'use client'

import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowRight, Check } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const quizOptions = [
  { id: 'weight', label: 'Perder peso o mejorar mi metabolismo', icon: '🔥' },
  { id: 'muscle', label: 'Aumentar masa muscular', icon: '💪' },
  { id: 'recovery', label: 'Recuperación más rápida', icon: '⚡' },
  { id: 'cognitive', label: 'Rendimiento mental y enfoque', icon: '🧠' },
  { id: 'longevity', label: 'Anti-envejecimiento y vitalidad', icon: '✨' },
  { id: 'other', label: 'Algo más', icon: '💭' },
]

export function QuizSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [selected, setSelected] = useState<string | null>(null)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Section reveal
      gsap.from('.quiz-header', {
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

      // Options stagger
      gsap.from('.quiz-option-item', {
        y: 30,
        opacity: 0,
        duration: 0.6,
        stagger: 0.08,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.quiz-options',
          start: 'top 85%',
          toggleActions: 'play none none reverse'
        }
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const handleSelect = (id: string) => {
    setSelected(id)
    // Animate progress
    gsap.to({ val: progress }, {
      val: 20,
      duration: 0.5,
      ease: 'power2.out',
      onUpdate: function() {
        setProgress(Math.round(this.targets()[0].val))
      }
    })
  }

  return (
    <section ref={sectionRef} id="consulta" className="hers-section bg-gradient-to-b from-[#E91E63]/5 to-background">
      <div className="hers-container max-w-3xl">
        {/* Progress Bar */}
        <div className="mb-12">
          <div className="flex items-center justify-between text-sm text-muted-foreground mb-2">
            <span>Paso 1 de 5</span>
            <span>{progress}%</span>
          </div>
          <div className="h-2 bg-muted rounded-full overflow-hidden">
            <div 
              className="h-full bg-[#E91E63] rounded-full transition-all duration-500 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Header */}
        <div className="quiz-header text-center mb-10">
          <span className="inline-flex items-center gap-2 text-sm font-medium text-[#E91E63] mb-4">
            <span className="w-8 h-px bg-[#E91E63]" />
            Evaluación Personalizada
            <span className="w-8 h-px bg-[#E91E63]" />
          </span>
          <h2 className="hers-heading-lg text-foreground">
            ¿Qué es lo más importante<br />
            <span className="text-[#E91E63]">para tu salud ahora?</span>
          </h2>
        </div>

        {/* Quiz Options */}
        <div className="quiz-options space-y-3 mb-8">
          {quizOptions.map((option) => (
            <button
              key={option.id}
              onClick={() => handleSelect(option.id)}
              className={`quiz-option-item quiz-option flex items-center gap-4 ${selected === option.id ? 'selected' : ''}`}
            >
              <span className="text-2xl">{option.icon}</span>
              <span className="flex-1 text-left font-medium">{option.label}</span>
              {selected === option.id && (
                <Check className="h-5 w-5 text-[#E91E63]" />
              )}
            </button>
          ))}
        </div>

        {/* Next Button */}
        <button
          disabled={!selected}
          className="w-full hers-btn-primary disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
        >
          Continuar
          <ArrowRight className="h-5 w-5 ml-2" />
        </button>

        {/* Trust note */}
        <p className="text-center text-sm text-muted-foreground mt-6">
          Solo toma 2 minutos. Los resultados son personalizados para ti.
        </p>
      </div>
    </section>
  )
}
