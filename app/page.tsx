import { Header } from "@/components/header"
import { EnhancedHeroSection } from "@/components/enhanced-hero-section"
import { NotificationsCarousel } from "@/components/notifications-carousel"
import { AboutSection } from "@/components/about-section"
import { CoreAreasSection } from "@/components/core-areas-section"
import { DivisionsSection } from "@/components/divisions-section"
import { AcademicProgramsSection } from "@/components/academic-programs-section"
import { ResearchHighlightsSection } from "@/components/research-highlights-section"
import { CampusTourSection } from "@/components/campus-tour-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <EnhancedHeroSection />
        <NotificationsCarousel />
        <AboutSection />
        <CoreAreasSection />
        <DivisionsSection />
        <AcademicProgramsSection />
        <ResearchHighlightsSection />
        <CampusTourSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
