'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Sparkles } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const headlineRef = useRef<HTMLHeadingElement>(null)
  const subheadRef = useRef<HTMLParagraphElement>(null)
  const cardRef = useRef<HTMLAnchorElement>(null)
  const badgeRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Headline reveal
      gsap.from(headlineRef.current, {
        y: 60,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        delay: 0.4
      })

      // Subhead reveal
      gsap.from(subheadRef.current, {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: 'power2.out',
        delay: 0.7
      })

      // Card entrance
      gsap.from(cardRef.current, {
        y: 80,
        opacity: 0,
        duration: 1.2,
        ease: 'power3.out',
        delay: 0.9
      })

      // Badge pulse
      gsap.to(badgeRef.current, {
        scale: 1.05,
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut'
      })

      // Parallax on scroll
      gsap.to(cardRef.current, {
        y: -50,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1
        }
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="relative min-h-screen pt-32 pb-20 overflow-hidden">
      {/* Soft gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#E91E63]/3 via-background to-background -z-10" />
      
      {/* Subtle animated gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#E91E63]/5 rounded-full blur-3xl -z-10 animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#E91E63]/3 rounded-full blur-3xl -z-10" style={{ animationDelay: '1s' }} />

      <div className="hers-container">
        {/* Headline */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 
            ref={headlineRef}
            className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] text-foreground mb-6"
          >
            El cuidado que
            <span className="block text-[#E91E63]">siempre mereciste</span>
          </h1>
          <p 
            ref={subheadRef}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
          >
            Péptidos premium con soporte médico certificado. Transforma tu salud desde Bolivia con telemedicina de clase mundial.
          </p>
        </div>

        {/* Featured Product Card - Hers Style */}
        <div className="max-w-5xl mx-auto">
          <Link 
            ref={cardRef}
            href="#consulta" 
            className="group block bg-card rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-border/50 hover:border-[#E91E63]/20"
          >
            <div className="grid lg:grid-cols-2">
              {/* Image Side */}
              <div className="relative h-80 lg:h-[500px] overflow-hidden">
                <Image
                  src="/images/weightloss.jpg"
                  alt="Protocolo de pérdida de peso con péptidos"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  priority
                />
                {/* Subtle gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-background/20 lg:to-transparent" />
              </div>
              
              {/* Content Side */}
              <div className="p-8 lg:p-12 flex flex-col justify-center bg-gradient-to-br from-[#E91E63]/5 via-card to-[#E91E63]/10">
                <span 
                  ref={badgeRef}
                  className="inline-flex items-center gap-2 bg-[#E91E63] text-white text-xs font-bold px-4 py-2 rounded-full w-fit mb-6 shadow-lg shadow-[#E91E63]/20"
                >
                  <Sparkles className="h-3.5 w-3.5" />
                  Más Popular
                </span>
                
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 leading-tight">
                  Pierde peso
                  <span className="block text-[#E91E63]">a tu manera</span>
                </h2>
                
                <p className="text-2xl lg:text-3xl font-semibold text-foreground mb-2">
                  desde $299/mes*
                </p>
                <p className="text-sm text-muted-foreground mb-8">
                  Semaglutida y Tirzepatida con consulta médica incluida
                </p>
                
                <div className="flex items-center text-[#E91E63] font-semibold text-lg group-hover:gap-3 transition-all duration-300">
                  Comenzar ahora
                  <ArrowRight className="h-5 w-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  )
}
