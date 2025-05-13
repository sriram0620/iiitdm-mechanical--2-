import { Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function SearchSection() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-primary mb-2">Search ME Website</h2>
            <p className="text-muted-foreground">
              Looking for specific information? Use our search feature to find what you need.
            </p>
          </div>
          <div className="flex gap-2">
            <Input placeholder="Search for courses, research, faculty..." className="flex-1" />
            <Button className="bg-primary hover:bg-primary/90">
              <Search className="h-4 w-4 mr-2" />
              Search
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
