'use client'

import { motion } from 'framer-motion'
import { Shield, FlaskConical, Truck, Clock } from 'lucide-react'

const trustPoints = [
  {
    icon: Shield,
    title: 'Doble Certificación',
    description: 'Janoshik Lab + Bolivia Ministerio de Salud',
  },
  {
    icon: FlaskConical,
    title: 'Pureza Garantizada',
    description: 'HPLC/MS testing en cada lote',
  },
  {
    icon: Truck,
    title: 'Envío Discreto',
    description: 'Packaging privado a todo Bolivia',
  },
  {
    icon: Clock,
    title: 'Soporte 24/7',
    description: 'WhatsApp médico siempre disponible',
  },
]

export function TrustSignals() {
  return (
    <section className="py-12 border-y border-border/40 bg-muted/30">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {trustPoints.map((point, index) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                <point.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-sm">{point.title}</h3>
              <p className="text-xs text-muted-foreground mt-1">
                {point.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
