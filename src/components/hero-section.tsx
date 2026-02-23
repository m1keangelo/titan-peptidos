'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export function HeroSection() {
  return (
    <section className="py-12 md:py-20 bg-gradient-to-b from-pink-50/50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h1 className="hers-heading text-gray-900 mb-6">
            El cuidado que siempre mereciste
          </h1>
        </div>

        {/* Featured Product Card */}
        <div className="max-w-5xl mx-auto">
          <Link href="/perdida-de-peso" className="block hers-card group cursor-pointer">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="relative h-64 md:h-96 overflow-hidden">
                <Image
                  src="/images/weightloss.jpg"
                  alt="Pérdida de peso con péptidos"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-8 md:p-12 flex flex-col justify-center bg-gradient-to-br from-[#E91E63]/5 to-pink-100/20">
                <span className="inline-flex items-center gap-2 bg-[#E91E63] text-white text-xs font-semibold px-3 py-1 rounded-full w-fit mb-4">
                  Más Popular
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Pierde peso a tu manera
                </h2>
                <p className="text-xl text-gray-600 mb-2">
                  desde $69/mes*
                </p>
                <p className="text-sm text-gray-500 mb-6">
                  Semaglutida y Tirzepatida con soporte médico
                </p>
                <div className="flex items-center text-[#E91E63] font-medium group-hover:gap-2 transition-all">
                  Comenzar ahora
                  <ArrowRight className="h-5 w-5 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  )
}
