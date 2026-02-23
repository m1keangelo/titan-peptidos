import type { Metadata } from 'next'
import { Inter, Cal_Sans } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-sans',
})

const calSans = Cal_Sans({
  subsets: ['latin'],
  variable: '--font-display',
  weight: '600',
})

export const metadata: Metadata = {
  title: 'Titan Peptidos | Transforma Tu Potencial',
  description: 'Telemedicina de péptidos premium en Bolivia. Consultas médicas en línea, laboratorios certificados, protocolos personalizados.',
  keywords: ['péptidos', 'telemedicina', 'Bolivia', 'salud', 'rendimiento', 'BPC-157', 'semaglutida'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={`${inter.variable} ${calSans.variable} font-sans`}>
        <ThemeProvider>
          <div className="relative min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
