import { PromoBanner } from '@/components/promo-banner'
import { Navbar } from '@/components/navbar'
import { HeroSection } from '@/components/hero-section'
import { ProductGrid } from '@/components/product-grid'
import { QuizSection } from '@/components/quiz-section'
import { FeaturedSection } from '@/components/featured-section'
import { Testimonials } from '@/components/testimonials'
import { MedicalTeam } from '@/components/medical-team'
import { TrustSection } from '@/components/trust-section'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <PromoBanner />
      <Navbar />
      <HeroSection />
      <ProductGrid />
      <QuizSection />
      <FeaturedSection />
      <Testimonials />
      <MedicalTeam />
      <TrustSection />
      <Footer />
    </main>
  )
}
