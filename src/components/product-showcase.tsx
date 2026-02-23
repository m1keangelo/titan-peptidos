'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const categories = [
  {
    title: 'Pérdida de Peso',
    description: 'Semaglutida, Tirzepatida, Tesamorelina',
    href: '/peptidos/perdida-de-peso',
    image: '/images/weightloss.jpg',
    gradient: 'from-blue-500/20 to-cyan-500/20',
  },
  {
    title: 'Rendimiento',
    description: 'CJC-1295, Ipamorelina, Ibutamoren',
    href: '/peptidos/rendimiento',
    image: '/images/fitness.jpg',
    gradient: 'from-orange-500/20 to-red-500/20',
  },
  {
    title: 'Recuperación',
    description: 'BPC-157, TB-500, GHK-Cu',
    href: '/peptidos/recuperacion',
    image: '/images/recovery.jpg',
    gradient: 'from-green-500/20 to-emerald-500/20',
  },
  {
    title: 'Cognitivo',
    description: 'Semax, Selank, Dihexa',
    href: '/peptidos/cognitivo',
    image: '/images/cognitive.jpg',
    gradient: 'from-purple-500/20 to-pink-500/20',
  },
  {
    title: 'Piel & Belleza',
    description: 'GHK-Cu, Péptidos capilares',
    href: '/peptidos/piel',
    image: '/images/skin.jpg',
    gradient: 'from-rose-500/20 to-pink-500/20',
  },
  {
    title: 'Longevidad',
    description: 'Epitalon, NAD+, GHK-Cu',
    href: '/peptidos/longevidad',
    image: '/images/longevity.jpg',
    gradient: 'from-amber-500/20 to-yellow-500/20',
  },
]

export function ProductShowcase() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="titan-subheading mb-4"
          >
            Péptidos Disponibles
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-muted-foreground max-w-2xl mx-auto"
          >
            Cada péptido incluye certificación de laboratorio y guía médica.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Link
                href={category.href}
                className="group block glass-card overflow-hidden h-full hover:bg-white/10 transition-all duration-300"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={category.image}
                    alt={category.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-60 group-hover:opacity-40 transition-opacity`} />
                </div>
                
                <div className="p-6">
                  <h3 className="font-semibold text-xl mb-2 group-hover:text-primary transition-colors">
                    {category.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {category.description}
                  </p>
                  <div className="flex items-center text-sm font-medium text-primary">
                    Explorar
                    <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
