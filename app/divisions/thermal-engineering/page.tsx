import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ThermalEngineeringHero } from "@/components/divisions/thermal-engineering-hero"
import { ThermalEngineeringContent } from "@/components/divisions/thermal-engineering-content"

export default function ThermalEngineeringPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <ThermalEngineeringHero />
        <ThermalEngineeringContent />
      </main>
      <Footer />
    </div>
  )
}
