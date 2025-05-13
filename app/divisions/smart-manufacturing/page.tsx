import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { SmartManufacturingHero } from "@/components/divisions/smart-manufacturing-hero"
import { SmartManufacturingContent } from "@/components/divisions/smart-manufacturing-content"

export default function SmartManufacturingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <SmartManufacturingHero />
        <SmartManufacturingContent />
      </main>
      <Footer />
    </div>
  )
}
