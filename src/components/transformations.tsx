'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Quote, User } from 'lucide-react'

const testimonials = [
  {
    quote:
      'Después de 3 meses con el protocolo de pérdida de peso, bajé 15kg. La atención médica fue clave para mantenerme motivado.',
    name: 'Carlos M.',
    location: 'Santa Cruz, Bolivia',
    category: 'Pérdida de Peso',
    result: '-15kg en 3 meses',
    avatar: '/images/weightloss.jpg',
  },
  {
    quote:
      'Como atleta, la recuperación es todo. BPC-157 me ayudó a sanar una lesión de hombro que arrastraba por años.',
    name: 'Andrea L.',
    location: 'La Paz, Bolivia',
    category: 'Recuperación',
    result: 'Recuperación completa',
    avatar: '/images/recovery.jpg',
  },
  {
    quote:
      'Mi energía y enfoque mejoraron drásticamente. Los péptidos cognitivos me dieron ventaja en mi trabajo.',
    name: 'Miguel R.',
    location: 'Cochabamba, Bolivia',
    category: 'Cognitivo',
    result: '+40% productividad',
    avatar: '/images/cognitive.jpg',
  },
  {
    quote:
      'PT-141 cambió mi vida. La disfunción eréctil afectaba mi confianza. Ahora me siento como en mis 20s.',
    name: 'Javier P.',
    location: 'Sucre, Bolivia',
    category: 'Salud Sexual',
    result: 'Confianza restaurada',
    avatar: '/images/fitness.jpg',
  },
  {
    quote:
      'La piel de mi rostro se ve 10 años más joven. GHK-Cu es mágico combinado con el protocolo de longevidad.',
    name: 'Laura G.',
    location: 'Tarija, Bolivia',
    category: 'Longevidad',
    result: '-10 años apariencia',
    avatar: '/images/skin.jpg',
  },
  {
    quote:
      'Gané 5kg de músculo magro en 4 meses. El seguimiento médico me dio confianza de que lo hacía bien.',
    name: 'Diego S.',
    location: 'Oruro, Bolivia',
    category: 'Rendimiento',
    result: '+5kg músculo',
    avatar: '/images/fitness.jpg',
  },
]

export function Transformations() {
  return (
    <section className="py-24 bg-background">
      <div className="container">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="titan-subheading mb-4"
          >
            Conoce a Quienes Transformaron Su Vida
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-muted-foreground max-w-2xl mx-auto"
          >
            Historias reales de personas que alcanzaron sus objetivos con nuestros protocolos médicos.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-card p-6"
            >
              <Quote className="h-8 w-8 text-primary/40 mb-4" />
              <p className="text-foreground mb-6 leading-relaxed">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  {/* Avatar */}
                  <div className="relative w-10 h-10 rounded-full overflow-hidden bg-muted">
                    <Image
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.location}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <span className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                    {testimonial.category}
                  </span>
                  <p className="text-sm font-medium text-foreground mt-1">
                    {testimonial.result}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
