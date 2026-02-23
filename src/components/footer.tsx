'use client'

import Link from 'next/link'
import { Instagram, Facebook, Mail, MapPin, Phone, Twitter, Youtube } from 'lucide-react'

const footerLinks = {
  productos: [
    { label: 'Semaglutida', href: '#' },
    { label: 'Tirzepatida', href: '#' },
    { label: 'CJC-1295', href: '#' },
    { label: 'Ipamorelina', href: '#' },
    { label: 'BPC-157', href: '#' },
    { label: 'TB-500', href: '#' },
    { label: 'Ver todos', href: '#productos' },
  ],
  empresa: [
    { label: 'Sobre Nosotros', href: '#' },
    { label: 'Nuestro Equipo', href: '#medicos' },
    { label: 'Blog', href: '#blog' },
    { label: 'Prensa', href: '#' },
    { label: 'Carreras', href: '#' },
  ],
  soporte: [
    { label: 'Preguntas Frecuentes', href: '#' },
    { label: 'Contacto', href: '#' },
    { label: 'Envíos', href: '#' },
    { label: 'Política de Privacidad', href: '#' },
    { label: 'Términos de Servicio', href: '#' },
  ],
}

const socialLinks = [
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Youtube, href: '#', label: 'Youtube' },
]

export function Footer() {
  return (
    <footer className="bg-accent border-t border-border">
      <div className="hers-container py-16">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <span className="text-2xl font-bold text-[#E91E63]">TITAN</span>
            </Link>
            <p className="text-sm text-muted-foreground mb-6 max-w-xs">
              Telemedicina de péptidos premium en Bolivia. 
              Transforma tu salud con ciencia respaldada por médicos certificados.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-2">
              {socialLinks.map((social) => (
                <a 
                  key={social.label}
                  href={social.href} 
                  className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center hover:bg-[#E91E63] hover:text-white hover:border-[#E91E63] transition-all"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Products Column */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Productos</h4>
            <ul className="space-y-3">
              {footerLinks.productos.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="footer-link">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Empresa</h4>
            <ul className="space-y-3">
              {footerLinks.empresa.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="footer-link">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Column */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Soporte</h4>
            <ul className="space-y-3">
              {footerLinks.soporte.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="footer-link">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Contacto</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-[#E91E63]" />
                <span>La Paz, Bolivia</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="w-4 h-4 flex-shrink-0 text-[#E91E63]" />
                <span>+591 2 123 4567</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="w-4 h-4 flex-shrink-0 text-[#E91E63]" />
                <span>hola@titanpeptidos.bo</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Titan Peptidos. Todos los derechos reservados.
            </p>
            
            {/* Trust Badges */}
            <div className="flex items-center gap-4 text-xs text-muted-foreground">
              <span className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-green-500" />
                Consulta Médica
              </span>
              <span className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-green-500" />
                Laboratorio GMP
              </span>
              <span className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-green-500" />
                Envío Nacional
              </span>
            </div>
          </div>
          
          {/* Disclaimer */}
          <p className="text-xs text-muted-foreground/70 mt-6 max-w-4xl">
            Los péptidos son medicamentos que requieren prescripción médica. 
            Los resultados individuales pueden variar. Consulte siempre con un médico 
            antes de iniciar cualquier tratamiento. Este sitio no proporciona consejo médico.
          </p>
        </div>
      </div>
    </footer>
  )
}
