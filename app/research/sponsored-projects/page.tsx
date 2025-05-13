import { Footer } from "@/components/footer"
import { SponsoredProjectsHeader } from "@/components/research/sponsored-projects-header"
import { SponsoredProjectsContent } from "@/components/research/sponsored-projects-content"

export default function SponsoredProjectsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SponsoredProjectsHeader />
      <main className="flex-1">
        <SponsoredProjectsContent />
      </main>
      <Footer />
    </div>
  )
}
