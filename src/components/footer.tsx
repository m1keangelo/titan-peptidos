'use client'

import Link from 'next/link'

const footerLinks = {
  learn: [
    { label: 'Péptidos', href: '/peptidos' },
    { label: 'Pérdida de Peso', href: '/perdida-de-peso' },
    { label: 'Rendimiento', href: '/rendimiento' },
    { label: 'Recuperación', href: '/recuperacion' },
    { label: 'Longevidad', href: '/longevidad' },
  ],
  tools: [
    { label: 'Calculadora IMC', href: '/tools/imc' },
    { label: 'Calculadora TDEE', href: '/tools/tdee' },
    { label: 'Calculadora Proteína', href: '/tools/proteina' },
    { label: 'Evaluación', href: '/evaluacion' },
  ],
  popular: [
    { label: 'Semaglutida', href: '/peptidos/semaglutida' },
    { label: 'Tirzepatida', href: '/peptidos/tirzepatida' },
    { label: 'BPC-157', href: '/peptidos/bpc-157' },
    { label: 'CJC-1295', href: '/peptidos/cjc-1295' },
    { label: 'GHK-Cu', href: '/peptidos/ghk-cu' },
  ],
  company: [
    { label: 'Sobre Nosotros', href: '/about' },
    { label: 'Blog', href: '/blog' },
    { label: 'Cómo Funciona', href: '/como-funciona' },
    { label: 'Calidad y Seguridad', href: '/calidad' },
  ],
}

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="text-2xl font-bold text-[#E91E63]">
              TITAN
            </Link>
            <p className="text-gray-400 text-sm mt-4">
              Telemedicina de péptidos premium en Bolivia.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4">Aprender</h4>
            <ul className="space-y-2">
              {footerLinks.learn.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-gray-400 hover:text-white text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Herramientas</h4>
            <ul className="space-y-2">
              {footerLinks.tools.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-gray-400 hover:text-white text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Popular</h4>
            <ul className="space-y-2">
              {footerLinks.popular.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-gray-400 hover:text-white text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Titan</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-gray-400 hover:text-white text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © 2026 Titan Peptidos. Todos los derechos reservados.
            </p>
            <div className="flex gap-6">
              <Link href="/terms" className="text-gray-500 hover:text-white text-sm">
                Términos
              </Link>
              <Link href="/privacy" className="text-gray-500 hover:text-white text-sm">
                Privacidad
              </Link>
              <Link href="/consentimiento" className="text-gray-500 hover:text-white text-sm">
                Consentimiento
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
