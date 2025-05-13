import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"

export function StaffHeader() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-white to-primary/10 py-16">
      {/* Decorative elements */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute left-0 top-0 h-64 w-64 rounded-full bg-primary/20 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 h-64 w-64 rounded-full bg-secondary/20 blur-3xl"></div>
      </div>

      {/* Circular patterns */}
      <div className="absolute inset-0 z-0">
        <div className="absolute left-10 top-10 h-20 w-20 rounded-full border border-primary/20"></div>
        <div className="absolute right-20 bottom-20 h-32 w-32 rounded-full border border-secondary/20"></div>
        <div className="absolute left-1/3 bottom-10 h-16 w-16 rounded-full border border-primary/20"></div>
      </div>

      <div className="container relative z-10">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="flex flex-col justify-center">
            <div className="mb-2 inline-block rounded-full bg-primary/10 px-4 py-1 text-sm font-medium text-primary">
              Our Team
            </div>
            <h1 className="mb-4 text-4xl font-bold text-primary md:text-5xl">
              Technical Staff
              <span className="relative ml-2">
                <span className="absolute -bottom-2 left-0 h-1.5 w-full bg-secondary"></span>
              </span>
            </h1>
            <p className="mb-6 max-w-lg text-lg text-muted-foreground">
              Meet our dedicated technical staff who provide essential support for the department's teaching and
              research activities, ensuring smooth operation of laboratories and technical facilities.
            </p>

            <div className="relative max-w-md">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search staff by name or position..."
                className="pl-10 pr-4 py-6 rounded-xl border-primary/20 bg-white/80 backdrop-blur-sm"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-xl bg-white/80 p-6 shadow-lg backdrop-blur-sm border border-primary/10 transform transition-transform hover:scale-105">
              <div className="mb-2 text-3xl font-bold text-primary">5+</div>
              <div className="text-sm text-muted-foreground">Technical Staff Members</div>
              <div className="mt-4 h-1 w-12 rounded-full bg-primary"></div>
            </div>

            <div className="rounded-xl bg-white/80 p-6 shadow-lg backdrop-blur-sm border border-primary/10 transform transition-transform hover:scale-105">
              <div className="mb-2 text-3xl font-bold text-primary">10+</div>
              <div className="text-sm text-muted-foreground">Years of Combined Experience</div>
              <div className="mt-4 h-1 w-12 rounded-full bg-secondary"></div>
            </div>

            <div className="rounded-xl bg-white/80 p-6 shadow-lg backdrop-blur-sm border border-primary/10 transform transition-transform hover:scale-105">
              <div className="mb-2 text-3xl font-bold text-primary">8+</div>
              <div className="text-sm text-muted-foreground">Specialized Laboratories</div>
              <div className="mt-4 h-1 w-12 rounded-full bg-primary"></div>
            </div>

            <div className="rounded-xl bg-white/80 p-6 shadow-lg backdrop-blur-sm border border-primary/10 transform transition-transform hover:scale-105">
              <div className="mb-2 text-3xl font-bold text-primary">100%</div>
              <div className="text-sm text-muted-foreground">Commitment to Excellence</div>
              <div className="mt-4 h-1 w-12 rounded-full bg-secondary"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
