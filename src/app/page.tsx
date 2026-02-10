import { HeroSection } from '@/components/sections/hero-section'
import { ServicesSection } from '@/components/sections/services-section'
import { AboutSection } from '@/components/sections/about-section'
import { TestimonialsSection } from '@/components/ui/testimonials-section'
import { ContactSection } from '@/components/sections/contact-section'
import { FooterSection } from '@/components/sections/footer-section'
import { FloatingCta } from '@/components/ui/floating-cta'
import { BottomNav } from '@/components/ui/bottom-nav'

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <TestimonialsSection />
      <ContactSection />
      <FooterSection />
      <FloatingCta />
      <BottomNav />
    </main>
  )
}
