'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Shield, Lock, FileCheck, Truck, Clock, MessageCircle, CheckCircle, Heart } from 'lucide-react'

const safetyFeatures = [
  {
    icon: Shield,
    title: 'Médicos Certificados',
    description: 'Todos nuestros médicos están colegiados y especializados en medicina regenerativa y péptidos.',
  },
  {
    icon: Lock,
    title: 'Datos Protegidos',
    description: 'Tu información médica está encriptada y protegida bajo estándares internacionales de privacidad.',
  },
  {
    icon: FileCheck,
    title: 'Laboratorios GMP',
    description: 'Péptidos de grado farmacéutico de laboratorios certificados bajo Buenas Prácticas de Manufactura.',
  },
  {
    icon: Truck,
    title: 'Envío Discreto',
    description: 'Empaque neutral sin identificación para tu privacidad. Rastreo en tiempo real incluido.',
  },
  {
    icon: Clock,
    title: 'Soporte 24/7',
    description: 'Atención médica disponible para consultas urgentes sobre tu tratamiento en cualquier momento.',
  },
  {
    icon: MessageCircle,
    title: 'Chat Médico',
    description: 'Comunícate directamente con tu médico a través de nuestra plataforma segura y privada.',
  },
]

const guarantees = [
  'Consulta médica incluida en cada pedido',
  'Seguimiento continuo durante tu tratamiento',
  'Ajustes de dosis según respuesta individual',
  'Acceso a tu historial médico en línea',
  'Privacidad garantizada en todos los procesos',
  'Garantía de autenticidad de productos',
]

export function TrustSection() {
  return (
    <section id="como-funciona" className="hers-section bg-foreground text-background">
      <div className="hers-container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-background/10 mb-6">
            <Shield className="w-4 h-4 text-[#E91E63]" />
            <span className="text-sm font-medium">Tu seguridad es nuestra prioridad</span>
          </div>
          <h2 className="hers-heading-md mb-4">
            Confianza y seguridad garantizada
          </h2>
          <p className="text-background/70">
            Cumplimos con todos los estándares médicos y regulatorios para 
            brindarte un servicio seguro, confiable y profesional.
          </p>
        </motion.div>

        {/* Safety Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {safetyFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-6 rounded-2xl bg-background/5 border border-background/10 hover:bg-background/10 transition-colors"
            >
              <div className="w-12 h-12 rounded-xl bg-[#E91E63]/20 flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-[#E91E63]" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-sm text-background/60">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Side by Side Layout - Guarantees */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-background/5 rounded-3xl p-8 md:p-12 border border-background/10"
        >
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Content Side */}
            <div>
              <h3 className="text-2xl md:text-3xl font-semibold mb-4">
                Nuestra promesa de calidad
              </h3>
              <p className="text-background/70 mb-8">
                Nos comprometemos a brindarte la mejor experiencia posible 
                en tu tratamiento con péptidos. Tu salud y satisfacción son nuestra prioridad.
              </p>
              <div className="space-y-4">
                {guarantees.map((guarantee, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-[#E91E63] flex-shrink-0" />
                    <span className="text-sm text-background/80">{guarantee}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Visual Side */}
            <div className="relative">
              <div className="aspect-square max-w-sm mx-auto rounded-2xl bg-gradient-to-br from-[#E91E63]/20 to-transparent flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-24 h-24 mx-auto rounded-full bg-[#E91E63]/10 flex items-center justify-center mb-6">
                    <Heart className="w-12 h-12 text-[#E91E63]" />
                  </div>
                  <p className="text-5xl font-bold mb-2">100%</p>
                  <p className="text-background/70">Garantía de calidad</p>
                  <p className="text-sm text-background/50 mt-4 max-w-xs">
                    Todos nuestros productos son verificados y aprobados por médicos certificados
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
