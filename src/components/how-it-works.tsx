'use client'

import { motion } from 'framer-motion'
import { ClipboardList, Video, FileText, Package } from 'lucide-react'

const steps = [
  {
    number: '01',
    icon: ClipboardList,
    title: 'Evaluación en Línea',
    description:
      'Completa nuestro formulario médico seguro. Nuestra IA y enfermeras revisan tu historial y objetivos de salud.',
  },
  {
    number: '02',
    icon: Video,
    title: 'Consulta Médica',
    description:
      'Videollamada con nuestro equipo médico. Discutimos tus labs, objetivos y creamos un protocolo personalizado.',
  },
  {
    number: '03',
    icon: FileText,
    title: 'Laboratorios',
    description:
      'Te enviamos a un laboratorio partner en tu ciudad. Recibimos resultados en 24-48 horas.',
  },
  {
    number: '04',
    icon: Package,
    title: 'Recibe Tu Protocolo',
    description:
      'Médico emite receta. Enviamos péptidos certificados con guías de inyección y soporte continuo.',
  },
]

export function HowItWorks() {
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
            Cómo Funciona
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-muted-foreground max-w-2xl mx-auto"
          >
            Proceso médico completo desde la comodidad de tu hogar.
            <br />
            Supervisión profesional en cada paso.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-full w-full h-px bg-gradient-to-r from-border to-transparent" />
              )}

              <div className="glass-card p-6 h-full">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <step.icon className="h-6 w-6 text-primary" />
                  </div>
                  <span className="text-4xl font-bold text-muted-foreground/30">
                    {step.number}
                  </span>
                </div>
                <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
