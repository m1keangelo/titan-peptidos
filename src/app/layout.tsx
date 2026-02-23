import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../styles/globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-sans',
})

export const metadata: Metadata = {
  title: 'Titan Peptidos | Telemedicina de Péptidos en Bolivia',
  description: 'Consultas médicas en línea, péptidos premium de laboratorios certificados. Transforma tu salud con Semaglutida, Tirzepatida, CJC-1295 y más.',
  keywords: ['péptidos', 'telemedicina', 'Bolivia', 'semaglutida', 'tirzepatida', 'pérdida de peso', 'CJC-1295'],
  openGraph: {
    title: 'Titan Peptidos | Telemedicina de Péptidos',
    description: 'Péptidos premium con soporte médico certificado en Bolivia',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans`}>
        {children}
      </body>
    </html>
  )
}
