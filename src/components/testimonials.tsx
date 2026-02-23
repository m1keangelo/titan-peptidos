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
    image: '/images/weightloss.jpg',
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
    image: '/images/fitness.jpg',
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
    image: '/images/recovery.jpg',
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
    image: '/images/cognitive.jpg',
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
    image: '/images/skin.jpg',
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
    <section className="hers-section bg-accent">
      <div className="hers-container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <h2 className="hers-heading-md text-foreground mb-4">
            Historias de éxito
          </h2>
          <p className="hers-body">
            Miles de personas en Bolivia ya transformaron su vida con nuestros protocolos.
          </p>
        </motion.div>

        {/* Testimonials Carousel */}
        <div className="relative max-w-5xl mx-auto">
          {/* Main Testimonial Card - Image + Quote Side by Side */}
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
                <div className="grid md:grid-cols-[1fr,1.2fr] gap-8 items-center">
                  {/* Image Side */}
                  <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden bg-gradient-to-br from-[#E91E63]/20 to-[#E91E63]/5 flex items-center justify-center">
                    <div className="text-center p-8">
                      <div className="w-20 h-20 mx-auto rounded-full bg-[#E91E63]/10 flex items-center justify-center mb-4">
                        <span className="text-3xl font-bold text-[#E91E63]">
                          {testimonials[currentIndex].name.charAt(0)}
                        </span>
                      </div>
                      <p className="text-4xl md:text-5xl font-bold text-[#E91E63]">
                        {testimonials[currentIndex].result}
                      </p>
                      <p className="text-sm text-muted-foreground mt-2">Resultado</p>
                    </div>
                  </div>

                  {/* Content Side */}
                  <div className="py-4">
                    {/* Stars */}
                    <div className="flex gap-1 mb-4">
                      {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>

                    {/* Quote */}
                    <Quote className="w-10 h-10 text-[#E91E63]/20 mb-4" />
                    <p className="text-lg md:text-xl text-foreground leading-relaxed mb-6">
                      &ldquo;{testimonials[currentIndex].text}&rdquo;
                    </p>

                    {/* Author */}
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#E91E63] to-[#C2185B] flex items-center justify-center text-white font-semibold">
                        {testimonials[currentIndex].name.charAt(0)}
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">
                          {testimonials[currentIndex].name}, {testimonials[currentIndex].age}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {testimonials[currentIndex].location} • {testimonials[currentIndex].product}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-8">
            {/* Progress Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 rounded-full transition-all ${
                    index === currentIndex
                      ? 'w-8 bg-[#E91E63]'
                      : 'w-2 bg-border hover:bg-[#E91E63]/50'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            {/* Arrows */}
            <div className="flex gap-2">
              <button
                onClick={prevTestimonial}
                className="p-3 rounded-full border border-border hover:bg-card transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5 text-foreground" />
              </button>
              <button
                onClick={nextTestimonial}
                className="p-3 rounded-full bg-foreground text-background hover:bg-foreground/90 transition-colors"
                aria-label="Next testimonial"
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
          <p className="text-5xl md:text-6xl font-bold text-foreground mb-2">
            4.9<span className="text-[#E91E63]">/5</span>
          </p>
          <p className="text-muted-foreground">
            Calificación promedio de nuestros pacientes
          </p>
        </motion.div>
      </div>
    </section>
  )
}
