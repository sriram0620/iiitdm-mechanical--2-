import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { DesignDivisionHero } from "@/components/divisions/design-division-hero"
import { DesignDivisionContent } from "@/components/divisions/design-division-content"

export default function DesignDivisionPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <DesignDivisionHero />
        <DesignDivisionContent />
      </main>
      <Footer />
    </div>
  )
}
