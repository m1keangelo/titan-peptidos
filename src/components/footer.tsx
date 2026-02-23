import Link from 'next/link'
import { Instagram, Youtube, Facebook, MessageCircle } from 'lucide-react'

const footerLinks = {
  productos: [
    { label: 'Pérdida de Peso', href: '/peptidos/perdida-de-peso' },
    { label: 'Rendimiento', href: '/peptidos/rendimiento' },
    { label: 'Recuperación', href: '/peptidos/recuperacion' },
    { label: 'Cognitivo', href: '/peptidos/cognitivo' },
    { label: 'Salud Sexual', href: '/peptidos/salud-sexual' },
  ],
  empresa: [
    { label: 'Cómo Funciona', href: '/como-funciona' },
    { label: 'Nuestro Equipo Médico', href: '/equipo-medico' },
    { label: 'Certificaciones', href: '/certificaciones' },
    { label: 'Ciencia', href: '/ciencia' },
    { label: 'Blog', href: '/blog' },
  ],
  soporte: [
    { label: 'FAQ', href: '/faq' },
    { label: 'Contacto', href: '/contacto' },
    { label: 'Envíos', href: '/envios' },
    { label: 'Devoluciones', href: '/devoluciones' },
  ],
  legal: [
    { label: 'Términos de Servicio', href: '/terminos' },
    { label: 'Privacidad', href: '/privacidad' },
    { label: 'Descargo Médico', href: '/descargo-medico' },
    { label: 'Consentimiento Telemedicina', href: '/consentimiento' },
  ],
}

const socialLinks = [
  { icon: Instagram, href: 'https://instagram.com/titanpeptidos', label: 'Instagram' },
  { icon: Youtube, href: 'https://youtube.com/titanpeptidos', label: 'YouTube' },
  { icon: Facebook, href: 'https://facebook.com/titanpeptidos', label: 'Facebook' },
  { icon: MessageCircle, href: 'https://wa.me/1234567890', label: 'WhatsApp' },
]

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-background">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1">
            <Link href="/" className="inline-block">
              <span className="titan-heading text-3xl tracking-tighter">TITAN</span>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground max-w-xs">
              Telemedicina de péptidos premium en Bolivia. Transforma tu potencial con ciencia y supervisión médica.
            </p>
            <div className="mt-6 flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <social.icon className="h-5 w-5" />
                  <span className="sr-only">{social.label}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-semibold mb-3">Productos</h3>
            <ul className="space-y-2">
              {footerLinks.productos.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-3">Empresa</h3>
            <ul className="space-y-2">
              {footerLinks.empresa.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-3">Soporte</h3>
            <ul className="space-y-2">
              {footerLinks.soporte.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-3">Legal</h3>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-border/40 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Titan Peptidos. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              Bolivia
            </span>
            <span>•</span>
            <span>Hecho con 💪 en Santa Cruz</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
