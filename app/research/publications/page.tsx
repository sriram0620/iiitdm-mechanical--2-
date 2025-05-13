import { ResearchPublicationsHeader } from "@/components/research/research-publications-header"
import { ResearchPublicationsContent } from "@/components/research/research-publications-content"

export default function ResearchPublicationsPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <ResearchPublicationsHeader />
      <ResearchPublicationsContent />
    </main>
  )
}
