'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Shield, CheckCircle } from 'lucide-react'

export function TrustSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Trusted treatments */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="hers-subheading text-gray-900 mb-4">
                Tratamientos de confianza, farmacias autorizadas
              </h2>
              <p className="text-gray-600 mb-4">
                Las farmacias están autorizadas y reguladas a nivel estatal y también sujetas a las leyes federales aplicables.
              </p>
              <Link href="/calidad" className="text-[#E91E63] font-medium hover:underline">
                Saber más
              </Link>
            </div>
            <div className="relative h-64 rounded-2xl overflow-hidden bg-white p-8 flex items-center justify-center">
              <div className="text-center">
                <Shield className="h-16 w-16 text-[#E91E63] mx-auto mb-4" />
                <p className="font-semibold text-gray-900">Farmacias certificadas</p>
                <p className="text-sm text-gray-500">Janoshik + Bolivia</p>
              </div>
            </div>
          </div>
        </div>

        {/* Licensed providers */}
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 relative h-64 rounded-2xl overflow-hidden">
              <Image
                src="/images/cognitive.jpg"
                alt="Proveedores licenciados"
                fill
                className="object-cover"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="hers-subheading text-gray-900 mb-4">
                Siempre prescrito por proveedores autorizados
              </h2>
              <p className="text-gray-600 mb-4">
                Acceso a tratamientos formulados con ingredientes de confianza médica. Planes prescritos por médicos reales autorizados en Bolivia.
              </p>
              <div className="flex items-center gap-2 text-green-600 mb-6">
                <CheckCircle className="h-5 w-5" />
                <span>100% online en tu horario</span>
              </div>
              <Link href="/evaluacion" className="hers-btn-primary inline-block">
                Obtener tratamiento personalizado
              </Link>
              <p className="text-xs text-gray-500 mt-4">
                Los productos compuestos no están aprobados por la FDA. Requiere consulta médica en línea.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
