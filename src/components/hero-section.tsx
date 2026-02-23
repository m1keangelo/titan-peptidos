'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export function HeroSection() {
  return (
    <section className="py-12 md:py-20 bg-gradient-to-b from-[#E91E63]/5 to-background">
      <div className="hers-container">
        {/* Main Headline */}
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <h1 className="hers-heading text-foreground mb-6">
            El cuidado que siempre mereciste
          </h1>
          <p className="hers-body max-w-2xl mx-auto">
            Péptidos premium con soporte médico certificado. Transforma tu salud desde Bolivia con telemedicina de clase mundial.
          </p>
        </div>

        {/* Featured Product Card - Hers Style: Image Left, Text Right */}
        <div className="max-w-5xl mx-auto">
          <Link href="#consulta" className="block hers-card group cursor-pointer hover:border-[#E91E63]/30">
            <div className="grid md:grid-cols-2 gap-0">
              {/* Image Left */}
              <div className="relative h-72 md:h-[480px] overflow-hidden">
                <Image
                  src="/images/weightloss.jpg"
                  alt="Protocolo de pérdida de peso con péptidos"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#E91E63]/10 md:to-transparent" />
              </div>
              
              {/* Text Right with Pink Accent */}
              <div className="p-8 md:p-12 flex flex-col justify-center bg-gradient-to-br from-[#E91E63]/5 via-background to-[#E91E63]/10">
                <span className="inline-flex items-center gap-2 bg-[#E91E63] text-white text-xs font-bold px-3 py-1.5 rounded-full w-fit mb-4">
                  Más Popular
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 leading-tight">
                  Pierde peso a tu manera
                </h2>
                <p className="text-xl text-foreground/80 font-semibold mb-2">
                  desde $299/mes*
                </p>
                <p className="text-sm text-muted-foreground mb-8">
                  Semaglutida y Tirzepatida con consulta médica incluida
                </p>
                <div className="flex items-center text-[#E91E63] font-semibold group-hover:gap-2 transition-all">
                  Comenzar ahora
                  <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  )
}
