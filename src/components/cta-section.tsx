'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ArrowRight, MessageCircle } from 'lucide-react'

export function CTASection() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 via-background to-background" />

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="glass-card p-8 md:p-12 text-center max-w-4xl mx-auto"
        >
          <h2 className="titan-subheading mb-4">
            ¿Listo para Transformar Tu Potencial?
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            Comienza tu evaluación médica hoy. Nuestro equipo te guiará en cada paso
            hacia tus objetivos de salud y rendimiento.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="btn-glow text-lg px-8 py-6">
              Comenzar Evaluación
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6">
              <MessageCircle className="mr-2 h-5 w-5" />
              Hablar por WhatsApp
            </Button>
          </div>

          <p className="text-sm text-muted-foreground mt-6">
            Evaluación gratuita • Sin compromiso • 100% confidencial
          </p>
        </motion.div>
      </div>
    </section>
  )
}
