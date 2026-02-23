import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { HeroSection } from '@/components/hero-section'
import { HowItWorks } from '@/components/how-it-works'
import { ProductShowcase } from '@/components/product-showcase'
import { Transformations } from '@/components/transformations'
import { TrustSignals } from '@/components/trust-signals'
import { CTASection } from '@/components/cta-section'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustSignals />
      <HowItWorks />
      <ProductShowcase />
      <Transformations />
      <CTASection />
    </>
  )
}
