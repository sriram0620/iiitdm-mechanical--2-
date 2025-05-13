import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { AcademicProgramsHero } from "@/components/academic-programs-hero"
import { AcademicProgramsContent } from "@/components/academic-programs-content"

export default function AcademicProgramsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <AcademicProgramsHero />
        <AcademicProgramsContent />
      </main>
      <Footer />
    </div>
  )
}
