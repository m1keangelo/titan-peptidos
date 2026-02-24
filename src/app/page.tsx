import { PromoBanner } from '../components/promo-banner'
import { Navbar } from '../components/navbar'
import { HeroSection } from '../components/hero-section'
import { PressSection } from '../components/press-section'
import { ProductGrid } from '../components/product-grid'
import { HowItWorks } from '../components/how-it-works'
import { QuizSection } from '../components/quiz-section'
import { FeaturedSection } from '../components/featured-section'
import { Transformations } from '../components/transformations'
import { Testimonials } from '../components/testimonials'
import { MedicalTeam } from '../components/medical-team'
import { FAQSection } from '../components/faq-section'
import { TrustSection } from '../components/trust-section'
import { StickyCTA } from '../components/sticky-cta'
import { Footer } from '../components/footer'

export default function HomePage() {
  return (
    <>
      <PromoBanner />
      <Navbar />
      <main>
        <HeroSection />
        <PressSection />
        <ProductGrid />
        <HowItWorks />
        <QuizSection />
        <FeaturedSection />
        <Transformations />
        <Testimonials />
        <MedicalTeam />
        <FAQSection />
        <TrustSection />
      </main>
      <Footer />
      <StickyCTA />
    </>
  )
}
