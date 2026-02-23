'use client'

import { motion } from 'framer-motion'
import { GraduationCap, Award, Stethoscope, CheckCircle } from 'lucide-react'

const doctors = [
  {
    name: 'Dra. Carmen Vargas',
    title: 'Médica Endocrinóloga',
    specialty: 'Medicina Regenerativa',
    experience: '15+ años',
    education: 'Universidad de São Paulo',
    certifications: ['Endocrinología', 'Medicina Anti-edad', 'Péptidos Bioactivos'],
  },
  {
    name: 'Dr. Andrés Morales',
    title: 'Médico Especialista',
    specialty: 'Medicina Deportiva',
    experience: '12+ años',
    education: 'Universidad de Buenos Aires',
    certifications: ['Medicina Deportiva', 'Nutrición Clínica', 'Rendimiento Físico'],
  },
  {
    name: 'Dra. Laura Santos',
    title: 'Médica Dermatóloga',
    specialty: 'Cosmiatría Avanzada',
    experience: '10+ años',
    education: 'Universidad Mayor de San Andrés',
    certifications: ['Dermatología', 'Estética Médica', 'Rejuvenecimiento'],
  },
]

const values = [
  {
    icon: Stethoscope,
    title: 'Evaluación Médica',
    description: 'Cada paciente recibe una evaluación completa antes de cualquier tratamiento. Historial médico detallado.',
  },
  {
    icon: Award,
    title: 'Laboratorios Certificados',
    description: 'Todos nuestros péptidos provienen de laboratorios con certificación GMP internacional.',
  },
  {
    icon: GraduationCap,
    title: 'Seguimiento Continuo',
    description: 'Acompañamiento médico durante todo tu tratamiento con ajustes según respuesta individual.',
  },
]

export function MedicalTeam() {
  return (
    <section id="medicos" className="hers-section bg-background">
      <div className="hers-container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="hers-heading-md text-foreground mb-4">
            Respaldado por médicos certificados
          </h2>
          <p className="hers-body">
            Nuestro equipo médico cuenta con especialización en medicina regenerativa 
            y años de experiencia en tratamientos con péptidos.
          </p>
        </motion.div>

        {/* Doctors Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {doctors.map((doctor, index) => (
            <motion.div
              key={doctor.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              {/* Doctor Avatar */}
              <div className="relative mb-6">
                <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-[#E91E63]/10 to-[#E91E63]/5 flex items-center justify-center border-2 border-[#E91E63]/20">
                  <span className="text-4xl font-bold text-[#E91E63]">
                    {doctor.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div className="absolute bottom-0 right-1/2 translate-x-10 bg-[#E91E63] text-white px-3 py-1 rounded-full text-xs font-bold">
                  {doctor.experience}
                </div>
              </div>

              {/* Doctor Info */}
              <h3 className="text-xl font-semibold text-foreground mb-1">
                {doctor.name}
              </h3>
              <p className="text-[#E91E63] font-medium mb-1">
                {doctor.title}
              </p>
              <p className="text-sm text-muted-foreground mb-4">
                {doctor.education}
              </p>

              {/* Certifications */}
              <div className="flex flex-wrap justify-center gap-2">
                {doctor.certifications.map((cert) => (
                  <span
                    key={cert}
                    className="inline-flex items-center gap-1 px-3 py-1 bg-accent rounded-full text-xs font-medium text-foreground"
                  >
                    <CheckCircle className="w-3 h-3 text-[#E91E63]" />
                    {cert}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-accent rounded-3xl p-8 md:p-12"
        >
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-card shadow-sm flex items-center justify-center">
                  <value.icon className="w-6 h-6 text-[#E91E63]" />
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-2">
                  {value.title}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
