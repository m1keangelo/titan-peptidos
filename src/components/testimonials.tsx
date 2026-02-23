'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react'

const testimonials = [
  {
    id: 1,
    name: 'María G.',
    age: 34,
    location: 'La Paz',
    product: 'Semaglutida',
    rating: 5,
    text: 'Después de años luchando con mi peso, finalmente encontré algo que funciona. He perdido 12 kg en 3 meses y me siento con más energía que nunca. El apoyo médico ha sido increíble.',
    result: '-12 kg',
  },
  {
    id: 2,
    name: 'Carlos R.',
    age: 42,
    location: 'Santa Cruz',
    product: 'CJC-1295 + Ipamorelina',
    rating: 5,
    text: 'Como atleta de 40+, necesitaba algo para mantener mi rendimiento. Mi recuperación mejoró notablemente y he ganado masa muscular manteniendo mi peso. Totalmente recomendado.',
    result: '+5 kg músculo',
  },
  {
    id: 3,
    name: 'Ana M.',
    age: 38,
    location: 'Cochabamba',
    product: 'BPC-157',
    rating: 5,
    text: 'Tenía una lesión de rodilla que no sanaba. Después de 6 semanas con BPC-157, el dolor desapareció y pude volver a correr. Me salvó de una cirugía.',
    result: 'Recuperación completa',
  },
  {
    id: 4,
    name: 'Luis P.',
    age: 45,
    location: 'La Paz',
    product: 'Semax',
    rating: 5,
    text: 'Mi concentración mejoró drásticamente. Puedo trabajar horas sin distracciones y mi memoria es notablemente mejor. Un cambio de juego para mi productividad.',
    result: 'Focus mejorado',
  },
  {
    id: 5,
    name: 'Diana K.',
    age: 52,
    location: 'Santa Cruz',
    product: 'GHK-Cu',
    rating: 5,
    text: 'Mi piel luce 10 años más joven. Las líneas finas se suavizaron y tengo un brillo natural que no tenía antes. La gente nota la diferencia.',
    result: 'Piel rejuvenecida',
  },
]

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="hers-section bg-[hsl(340,30%,98%)]">
      <div className="hers-container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <h2 className="hers-heading-lg text-[#1a1a1a] mb-4">
            Historias de éxito
          </h2>
          <p className="hers-body">
            Miles de personas en Bolivia ya transformaron su vida con nuestros protocolos.
          </p>
        </motion.div>

        {/* Testimonials Carousel */}
        <div className="relative max-w-4xl mx-auto">
          {/* Main Testimonial Card */}
          <div className="relative overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.4 }}
                className="testimonial-card"
              >
                <div className="grid md:grid-cols-[1fr,auto] gap-8 items-center">
                  {/* Content */}
                  <div>
                    {/* Stars */}
                    <div className="flex gap-1 mb-4">
                      {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-[hsl(38,90%,55%)] text-[hsl(38,90%,55%)]" />
                      ))}
                    </div>

                    {/* Quote */}
                    <Quote className="w-8 h-8 text-[hsl(340,65%,55%)]/20 mb-4" />
                    <p className="text-lg md:text-xl text-[#1a1a1a] leading-relaxed mb-6">
                      "{testimonials[currentIndex].text}"
                    </p>

                    {/* Author */}
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[hsl(340,65%,55%)] to-[hsl(15,85%,60%)] flex items-center justify-center text-white font-semibold">
                        {testimonials[currentIndex].name.charAt(0)}
                      </div>
                      <div>
                        <p className="font-semibold text-[#1a1a1a]">
                          {testimonials[currentIndex].name}, {testimonials[currentIndex].age}
                        </p>
                        <p className="text-sm text-[hsl(0,0%,40%)]">
                          {testimonials[currentIndex].location} • {testimonials[currentIndex].product}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Result Badge */}
                  <div className="flex-shrink-0">
                    <div className="bg-[hsl(340,65%,55%)]/10 rounded-2xl p-6 text-center min-w-[140px]">
                      <p className="text-3xl md:text-4xl font-bold text-[hsl(340,65%,55%)]">
                        {testimonials[currentIndex].result}
                      </p>
                      <p className="text-sm text-[hsl(0,0%,40%)] mt-1">Resultado</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-8">
            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex
                      ? 'w-6 bg-[hsl(340,65%,55%)]'
                      : 'bg-[hsl(340,15%,92%)] hover:bg-[hsl(340,65%,55%)]/50'
                  }`}
                />
              ))}
            </div>

            {/* Arrows */}
            <div className="flex gap-2">
              <button
                onClick={prevTestimonial}
                className="p-3 rounded-full border border-[hsl(340,15%,92%)] hover:bg-white transition-colors"
              >
                <ChevronLeft className="w-5 h-5 text-[#1a1a1a]" />
              </button>
              <button
                onClick={nextTestimonial}
                className="p-3 rounded-full bg-[#1a1a1a] text-white hover:bg-[#333] transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Trust Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-5xl md:text-6xl font-bold text-[#1a1a1a] mb-2">
            4.9<span className="text-[hsl(340,65%,55%)]">/5</span>
          </p>
          <p className="text-[hsl(0,0%,40%)]">
            Calificación promedio de nuestros pacientes
          </p>
        </motion.div>
      </div>
    </section>
  )
}
