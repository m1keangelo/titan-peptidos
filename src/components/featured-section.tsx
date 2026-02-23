'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Star, TrendingUp, Shield, Clock } from 'lucide-react'

const stats = [
  { value: '15%', label: 'Pérdida de peso promedio', icon: TrendingUp },
  { value: '2,500+', label: 'Pacientes atendidos', icon: Star },
  { value: '100%', label: 'Medicamentos verificados', icon: Shield },
  { value: '24-48h', label: 'Tiempo de respuesta', icon: Clock },
]

const featuredProducts = [
  {
    id: 'semaglutida',
    name: 'Semaglutida',
    description: 'El péptido más efectivo para pérdida de peso. Reduce el apetito y mejora el metabolismo.',
    dosage: '2.4mg semanal',
    price: 'Desde $299/mes',
    popular: true,
  },
  {
    id: 'tirzepatida',
    name: 'Tirzepatida',
    description: 'Doble acción GLP-1/GIP. Resultados superiores en pérdida de peso y control glucémico.',
    dosage: '15mg semanal',
    price: 'Desde $399/mes',
    popular: false,
  },
]

export function FeaturedSection() {
  return (
    <section id="consulta" className="hers-section bg-white">
      <div className="hers-container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="hers-heading-lg text-[#1a1a1a] mb-4">
            Productos Destacados
          </h2>
          <p className="hers-body">
            Los péptidos más populares respaldados por investigación clínica 
            y miles de pacientes satisfechos.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center p-6 rounded-2xl bg-[hsl(340,30%,98%)]"
            >
              <stat.icon className="w-6 h-6 text-[hsl(340,65%,55%)] mx-auto mb-3" />
              <p className="stat-number">{stat.value}</p>
              <p className="text-sm text-[hsl(0,0%,40%)] mt-1">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Featured Products */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-16">
          {featuredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="hers-card p-6 md:p-8 relative"
            >
              {product.popular && (
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-[hsl(340,65%,55%)] text-white text-xs font-medium rounded-full">
                    Más Popular
                  </span>
                </div>
              )}

              <div className="flex items-start gap-4 mb-6">
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-to-br from-[hsl(340,65%,55%)] to-[hsl(15,85%,60%)] flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xl md:text-2xl font-bold">
                    {product.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-semibold text-[#1a1a1a]">
                    {product.name}
                  </h3>
                  <p className="text-sm text-[hsl(340,65%,55%)] font-medium mt-1">
                    {product.dosage}
                  </p>
                </div>
              </div>

              <p className="text-[hsl(0,0%,40%)] mb-6">
                {product.description}
              </p>

              <div className="flex items-center justify-between">
                <div>
                  <p className="text-2xl md:text-3xl font-bold text-[#1a1a1a]">
                    {product.price}
                  </p>
                  <p className="text-xs text-[hsl(0,0%,40%)]">
                    Incluye consulta médica
                  </p>
                </div>
                <Link
                  href="#consulta"
                  className="hers-button-primary text-sm py-3 px-6"
                >
                  Consultar
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Full-width CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-[#1a1a1a] rounded-3xl p-8 md:p-12 text-center text-white"
        >
          <h3 className="text-2xl md:text-3xl font-semibold mb-4">
            ¿Listo para comenzar tu transformación?
          </h3>
          <p className="text-white/70 max-w-xl mx-auto mb-8">
            Agenda tu consulta médica en línea hoy. Evaluaremos tu historial 
            médico y diseñaremos un protocolo personalizado para ti.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="#consulta" className="hers-button-primary bg-white text-[#1a1a1a] hover:bg-gray-100">
              Agendar Consulta
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
            <Link href="#productos" className="inline-flex items-center justify-center px-8 py-4 rounded-full font-medium border border-white/30 hover:bg-white/10 transition-all">
              Ver Todos los Productos
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
