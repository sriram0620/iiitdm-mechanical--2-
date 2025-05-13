import { ResearchScholarsHeader } from "@/components/people/research-scholars-header"
import { ResearchScholarsContent } from "@/components/people/research-scholars-content"

export default function ResearchScholarsPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <ResearchScholarsHeader />
      <ResearchScholarsContent />
    </main>
  )
}
