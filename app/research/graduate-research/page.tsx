import { Footer } from "@/components/footer"
import { GraduateResearchHeader } from "@/components/research/graduate-research-header"
import { GraduateResearchContent } from "@/components/research/graduate-research-content"

export default function GraduateResearchPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <GraduateResearchHeader />
      <main className="flex-1">
        <GraduateResearchContent />
      </main>
      <Footer />
    </div>
  )
}
