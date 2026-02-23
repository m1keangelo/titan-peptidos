'use client'

import { motion } from 'framer-motion'
import { GraduationCap, Award, Stethoscope } from 'lucide-react'

const doctors = [
  {
    name: 'Dra. Carmen Vargas',
    title: 'Médica Endocrinóloga',
    specialty: 'Medicina Regenerativa',
    experience: '15+ años',
    education: 'Universidad de São Paulo',
    certifications: ['Endocrinología', 'Medicina Anti-edad'],
  },
  {
    name: 'Dr. Andrés Morales',
    title: 'Médico Especialista',
    specialty: 'Medicina Deportiva',
    experience: '12+ años',
    education: 'Universidad de Buenos Aires',
    certifications: ['Medicina Deportiva', 'Nutrición Clínica'],
  },
  {
    name: 'Dra. Laura Santos',
    title: 'Médica Dermatóloga',
    specialty: 'Cosmiatría Avanzada',
    experience: '10+ años',
    education: 'Universidad Mayor de San Andrés',
    certifications: ['Dermatología', 'Estética Médica'],
  },
]

const values = [
  {
    icon: Stethoscope,
    title: 'Evaluación Médica',
    description: 'Cada paciente recibe una evaluación completa antes de cualquier tratamiento.',
  },
  {
    icon: Award,
    title: 'Laboratorios Certificados',
    description: 'Todos nuestros péptidos provienen de laboratorios con certificación GMP.',
  },
  {
    icon: GraduationCap,
    title: 'Seguimiento Continuo',
    description: 'Acompañamiento médico durante todo tu tratamiento con ajustes según respuesta.',
  },
]

export function MedicalTeam() {
  return (
    <section className="hers-section bg-white">
      <div className="hers-container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="hers-heading-lg text-[#1a1a1a] mb-4">
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
              {/* Doctor Image Placeholder */}
              <div className="relative mb-6">
                <div className="w-40 h-40 mx-auto rounded-full bg-gradient-to-br from-[hsl(340,30%,96%)] to-[hsl(340,65%,55%)]/10 flex items-center justify-center">
                  <span className="text-5xl font-bold text-[hsl(340,65%,55%)]">
                    {doctor.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div className="absolute bottom-0 right-1/2 translate-x-16 bg-[hsl(340,65%,55%)] text-white px-3 py-1 rounded-full text-xs font-medium">
                  {doctor.experience}
                </div>
              </div>

              {/* Doctor Info */}
              <h3 className="text-xl font-semibold text-[#1a1a1a] mb-1">
                {doctor.name}
              </h3>
              <p className="text-[hsl(340,65%,55%)] font-medium mb-2">
                {doctor.title}
              </p>
              <p className="text-sm text-[hsl(0,0%,40%)] mb-4">
                {doctor.education}
              </p>

              {/* Certifications */}
              <div className="flex flex-wrap justify-center gap-2">
                {doctor.certifications.map((cert) => (
                  <span
                    key={cert}
                    className="px-3 py-1 bg-[hsl(340,30%,96%)] rounded-full text-xs font-medium text-[hsl(340,50%,25%)]"
                  >
                    {cert}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Values */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-[hsl(340,30%,98%)] rounded-3xl p-8 md:p-12"
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
                <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-white shadow-sm flex items-center justify-center">
                  <value.icon className="w-6 h-6 text-[hsl(340,65%,55%)]" />
                </div>
                <h4 className="text-lg font-semibold text-[#1a1a1a] mb-2">
                  {value.title}
                </h4>
                <p className="text-sm text-[hsl(0,0%,40%)]">
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
