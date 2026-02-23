import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../styles/globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-sans',
})

export const metadata: Metadata = {
  title: 'Titan Peptidos | Transforma Tu Potencial',
  description: 'Telemedicina de péptidos premium en Bolivia. Consultas médicas en línea, laboratorios certificados, protocolos personalizados.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={`${inter.variable} font-sans`}>
        {children}
      </body>
    </html>
  )
}
