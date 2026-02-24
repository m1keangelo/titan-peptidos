'use client'

import { useEffect, useRef, useState } from 'react'

const pressLogos = [
  { name: 'Forbes', initials: 'F' },
  { name: 'TechCrunch', initials: 'TC' },
  { name: 'Wired', initials: 'W' },
  { name: 'Bloomberg', initials: 'B' },
  { name: 'CNN', initials: 'CNN' },
  { name: 'Reuters', initials: 'R' }
]

export function PressSection() {
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
          gsap.from('.press-header', {
            y: 30,
            opacity: 0,
            duration: 0.6,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 85%',
              toggleActions: 'play none none reverse'
            }
          })

          gsap.from('.press-logo', {
            y: 20,
            opacity: 0,
            duration: 0.5,
            stagger: 0.08,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: '.press-grid',
              start: 'top 90%',
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
    <section ref={sectionRef} className={`py-12 bg-accent border-y border-border ${isLoaded ? '' : 'opacity-100'}`}>
      <div className="hers-container">
        <div className="press-header text-center mb-8">
          <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
            Destacados en
          </p>
        </div>

        <div className="press-grid flex flex-wrap items-center justify-center gap-8 md:gap-12">
          {pressLogos.map((logo) => (
            <div 
              key={logo.name}
              className="press-logo flex items-center justify-center w-20 h-12 text-muted-foreground/50 hover:text-muted-foreground transition-colors"
            >
              <span className="text-xl font-bold tracking-tight">
                {logo.initials}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
