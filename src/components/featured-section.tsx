'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Star, TrendingUp, Shield, Clock, Check } from 'lucide-react'

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
    description: 'El péptido más efectivo para pérdida de peso. Reduce el apetito y mejora el metabolismo con resultados clínicos comprobados.',
    dosage: '2.4mg semanal',
    price: 'Desde $299/mes',
    popular: true,
    features: ['Control de apetito', 'Pérdida sostenida', 'Consulta incluida'],
  },
  {
    id: 'tirzepatida',
    name: 'Tirzepatida',
    description: 'Doble acción GLP-1/GIP. Resultados superiores en pérdida de peso y control glucémico para máxima efectividad.',
    dosage: '15mg semanal',
    price: 'Desde $399/mes',
    popular: false,
    features: ['Doble mecanismo', 'Mayor pérdida de peso', 'Supervisión médica'],
  },
]

export function FeaturedSection() {
  return (
    <section id="consulta" className="hers-section bg-background">
      <div className="hers-container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="hers-heading-md text-foreground mb-4">
            Productos Destacados
          </h2>
          <p className="hers-body">
            Los péptidos más populares respaldados por investigación clínica 
            y miles de pacientes satisfechos en Bolivia.
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
              className="text-center p-6 rounded-2xl bg-accent"
            >
              <stat.icon className="w-6 h-6 text-[#E91E63] mx-auto mb-3" />
              <p className="stat-number">{stat.value}</p>
              <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Featured Products - Side by Side Layouts */}
        <div className="space-y-8 mb-16">
          {featuredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="hers-card overflow-hidden"
            >
              <div className="grid md:grid-cols-2 gap-0">
                {/* Content Side */}
                <div className={`p-8 md:p-12 flex flex-col justify-center ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                  {product.popular && (
                    <span className="inline-flex w-fit bg-[#E91E63] text-white text-xs font-bold px-3 py-1 rounded-full mb-4">
                      Más Popular
                    </span>
                  )}
                  
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                    {product.name}
                  </h3>
                  <p className="text-sm text-[#E91E63] font-medium mb-4">
                    {product.dosage}
                  </p>
                  <p className="text-muted-foreground mb-6">
                    {product.description}
                  </p>
                  
                  {/* Features */}
                  <div className="space-y-2 mb-6">
                    {product.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-[#E91E63]" />
                        <span className="text-sm text-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-2xl md:text-3xl font-bold text-foreground">
                        {product.price}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Consulta médica incluida
                      </p>
                    </div>
                    <Link
                      href="#consulta"
                      className="hers-btn-primary text-sm py-2.5 px-5"
                    >
                      Consultar
                    </Link>
                  </div>
                </div>
                
                {/* Image Side */}
                <div className={`relative h-64 md:h-auto ${index % 2 === 1 ? 'md:order-1' : ''}`}>
                  <Image
                    src="/images/peptide-vial.jpg"
                    alt={product.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent md:bg-gradient-to-r" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Full-width CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-foreground rounded-3xl p-8 md:p-12 text-center text-background"
        >
          <h3 className="text-2xl md:text-3xl font-semibold mb-4">
            ¿Listo para comenzar tu transformación?
          </h3>
          <p className="text-background/70 max-w-xl mx-auto mb-8">
            Agenda tu consulta médica en línea hoy. Evaluaremos tu historial 
            médico y diseñaremos un protocolo personalizado para ti.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="#consulta" className="hers-btn-primary bg-background text-foreground hover:bg-background/90">
              Agendar Consulta
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
            <Link href="#productos" className="inline-flex items-center justify-center px-8 py-3 rounded-full font-medium border border-background/30 hover:bg-background/10 transition-all text-background">
              Ver Todos los Productos
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
