import { BookOpen, Award, TrendingUp, Users } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ResearchPublicationsHeader() {
  return (
    <section className="relative overflow-hidden">
      {/* Top decorative element */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary/20 via-primary to-primary/20"></div>

      {/* Main header content */}
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          {/* Left side - Text content */}
          <div className="flex-1 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
              <BookOpen className="h-4 w-4" />
              <span>Research Excellence</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-primary leading-tight">
              Research{" "}
              <span className="relative">
                Publications
                <svg
                  className="absolute -bottom-2 left-0 w-full"
                  height="8"
                  viewBox="0 0 200 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 5.5C20 2.5 40 1.5 60 2.5C80 3.5 100 5.5 120 6.5C140 7.5 160 7 180 5C190 4 199 2.5 199 2.5"
                    stroke="#3b82f6"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h1>

            <p className="text-lg text-gray-600 max-w-2xl">
              Explore groundbreaking research from our faculty and students, advancing knowledge in mechanical
              engineering and interdisciplinary fields.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <Button className="bg-primary hover:bg-primary/90">Browse Publications</Button>
              <Button variant="outline" className="border-primary text-primary hover:bg-primary/10">
                Submit Research
              </Button>
            </div>
          </div>

          {/* Right side - Stats cards */}
          <div className="flex-1">
            <div className="grid grid-cols-2 gap-4">
              {/* Publication count card */}
              <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-primary/5 to-primary/20 p-6 shadow-md transition-all hover:shadow-lg">
                <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-primary/10 blur-2xl"></div>
                <BookOpen className="h-10 w-10 text-primary mb-3" />
                <h3 className="text-4xl font-bold text-primary">250+</h3>
                <p className="text-sm text-gray-600">Publications in last 5 years</p>
              </div>

              {/* Citation card */}
              <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-primary/5 to-primary/20 p-6 shadow-md transition-all hover:shadow-lg">
                <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-primary/10 blur-2xl"></div>
                <TrendingUp className="h-10 w-10 text-primary mb-3" />
                <h3 className="text-4xl font-bold text-primary">5000+</h3>
                <p className="text-sm text-gray-600">Citations</p>
              </div>

              {/* Journal card */}
              <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-primary/5 to-primary/20 p-6 shadow-md transition-all hover:shadow-lg">
                <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-primary/10 blur-2xl"></div>
                <Award className="h-10 w-10 text-primary mb-3" />
                <h3 className="text-4xl font-bold text-primary">75+</h3>
                <p className="text-sm text-gray-600">High-impact journals</p>
              </div>

              {/* Collaborations card */}
              <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-primary/5 to-primary/20 p-6 shadow-md transition-all hover:shadow-lg">
                <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-primary/10 blur-2xl"></div>
                <Users className="h-10 w-10 text-primary mb-3" />
                <h3 className="text-4xl font-bold text-primary">30+</h3>
                <p className="text-sm text-gray-600">International collaborations</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom decorative element */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary/20 via-primary to-primary/20"></div>
    </section>
  )
}
