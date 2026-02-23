'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Check, ChevronLeft, Sparkles } from 'lucide-react'

const quizSteps = [
  {
    id: 1,
    question: '¿Cuál es tu objetivo principal de salud?',
    options: [
      { id: 'weight', label: 'Perder peso', icon: '⚖️' },
      { id: 'performance', label: 'Mejorar rendimiento físico', icon: '💪' },
      { id: 'recovery', label: 'Recuperación y curación', icon: '🏃' },
      { id: 'cognitive', label: 'Claridad mental y focus', icon: '🧠' },
      { id: 'skin', label: 'Rejuvenecimiento de piel', icon: '✨' },
      { id: 'longevity', label: 'Longevidad y anti-edad', icon: '🕐' },
    ],
  },
  {
    id: 2,
    question: '¿Cuál es tu rango de edad?',
    options: [
      { id: '18-29', label: '18-29 años', icon: '' },
      { id: '30-39', label: '30-39 años', icon: '' },
      { id: '40-49', label: '40-49 años', icon: '' },
      { id: '50-59', label: '50-59 años', icon: '' },
      { id: '60+', label: '60+ años', icon: '' },
    ],
  },
  {
    id: 3,
    question: '¿Has usado péptidos antes?',
    options: [
      { id: 'never', label: 'Nunca', icon: '' },
      { id: 'beginner', label: 'Una vez o pocas veces', icon: '' },
      { id: 'intermediate', label: 'Regularmente (6+ meses)', icon: '' },
      { id: 'advanced', label: 'Experto (2+ años)', icon: '' },
    ],
  },
]

const recommendations: Record<string, { title: string; products: string[]; description: string }> = {
  weight: {
    title: 'Protocolo de Pérdida de Peso',
    products: ['Semaglutida', 'Tirzepatida'],
    description: 'Péptidos diseñados para controlar el apetito y acelerar el metabolismo.',
  },
  performance: {
    title: 'Protocolo de Rendimiento',
    products: ['CJC-1295', 'Ipamorelina'],
    description: 'Mejora tu fuerza, resistencia y recuperación muscular.',
  },
  recovery: {
    title: 'Protocolo de Recuperación',
    products: ['BPC-157', 'TB-500'],
    description: 'Acelera la curación de lesiones y reduce la inflamación.',
  },
  cognitive: {
    title: 'Protocolo Cognitivo',
    products: ['Semax', 'Selank'],
    description: 'Mejora tu memoria, focus y claridad mental.',
  },
  skin: {
    title: 'Protocolo de Piel',
    products: ['GHK-Cu'],
    description: 'Rejuvenece tu piel desde adentro con cobre peptídico.',
  },
  longevity: {
    title: 'Protocolo de Longevidad',
    products: ['Epitalon'],
    description: 'Activa tu telomerasa y revierte el reloj biológico.',
  },
}

export function QuizSection() {
  const [currentStep, setCurrentStep] = useState(0)
  const [answers, setAnswers] = useState<Record<number, string>>({})
  const [showResults, setShowResults] = useState(false)

  const handleSelect = (optionId: string) => {
    setAnswers({ ...answers, [quizSteps[currentStep].id]: optionId })
    
    if (currentStep < quizSteps.length - 1) {
      setTimeout(() => setCurrentStep(currentStep + 1), 300)
    } else {
      setTimeout(() => setShowResults(true), 300)
    }
  }

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    }
  }

  const getRecommendation = () => {
    const primaryGoal = answers[1]
    return recommendations[primaryGoal] || recommendations.weight
  }

  const progress = ((currentStep + 1) / quizSteps.length) * 100

  if (showResults) {
    const recommendation = getRecommendation()
    return (
      <section id="quiz" className="hers-section bg-[hsl(340,30%,98%)]">
        <div className="hers-container max-w-2xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-3xl p-8 md:p-12 shadow-xl text-center"
          >
            <div className="w-16 h-16 bg-[hsl(340,65%,55%)]/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Sparkles className="w-8 h-8 text-[hsl(340,65%,55%)]" />
            </div>
            <h3 className="hers-heading-md text-[#1a1a1a] mb-4">
              Tu Protocolo Recomendado
            </h3>
            <h4 className="text-xl font-semibold text-[hsl(340,65%,55%)] mb-4">
              {recommendation.title}
            </h4>
            <p className="text-[hsl(0,0%,40%)] mb-6">
              {recommendation.description}
            </p>
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {recommendation.products.map((product) => (
                <span
                  key={product}
                  className="px-4 py-2 bg-[hsl(340,30%,96%)] rounded-full text-sm font-medium text-[#1a1a1a]"
                >
                  {product}
                </span>
              ))}
            </div>
            <Link href="#consulta" className="hers-button-primary inline-flex">
              Comenzar Consulta
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    )
  }

  return (
    <section id="quiz" className="hers-section bg-[hsl(340,30%,98%)]">
      <div className="hers-container max-w-2xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[hsl(340,15%,92%)] mb-4">
            <Sparkles className="w-4 h-4 text-[hsl(340,65%,55%)]" />
            <span className="text-sm font-medium text-[#1a1a1a]">
              Quiz de Salud Personalizado
            </span>
          </div>
          <h2 className="hers-heading-md text-[#1a1a1a]">
            Encuentra tu protocolo ideal en 2 minutos
          </h2>
        </motion.div>

        {/* Quiz Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl p-6 md:p-8 shadow-xl"
        >
          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex justify-between text-sm text-[hsl(0,0%,40%)] mb-2">
              <span>Paso {currentStep + 1} de {quizSteps.length}</span>
              <span>{Math.round(progress)}%</span>
            </div>
            <div className="h-2 bg-[hsl(340,30%,96%)] rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-[hsl(340,65%,55%)] rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </div>

          {/* Question */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-xl md:text-2xl font-semibold text-[#1a1a1a] mb-6">
                {quizSteps[currentStep].question}
              </h3>

              {/* Options */}
              <div className="space-y-3">
                {quizSteps[currentStep].options.map((option) => {
                  const isSelected = answers[quizSteps[currentStep].id] === option.id
                  return (
                    <button
                      key={option.id}
                      onClick={() => handleSelect(option.id)}
                      className={`quiz-option ${isSelected ? 'selected' : ''}`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          {option.icon && (
                            <span className="text-2xl">{option.icon}</span>
                          )}
                          <span className="font-medium text-[#1a1a1a]">
                            {option.label}
                          </span>
                        </div>
                        {isSelected && (
                          <Check className="w-5 h-5 text-[hsl(340,65%,55%)]" />
                        )}
                      </div>
                    </button>
                  )
                })}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Back Button */}
          {currentStep > 0 && (
            <button
              onClick={handleBack}
              className="mt-6 flex items-center gap-2 text-sm text-[hsl(0,0%,40%)] hover:text-[#1a1a1a] transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
              Anterior
            </button>
          )}
        </motion.div>
      </div>
    </section>
  )
}
