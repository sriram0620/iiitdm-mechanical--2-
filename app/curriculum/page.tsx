import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CurriculumHero } from "@/components/curriculum-hero"
import { CurriculumContent } from "@/components/curriculum-content"

export default function CurriculumPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <CurriculumHero />
        <CurriculumContent />
      </main>
      <Footer />
    </div>
  )
}
