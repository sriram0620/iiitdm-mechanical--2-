import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"

export function FacultyHeader() {
  return (
    <div className="relative overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70 z-10"></div>

      {/* Background pattern */}
      <div className="absolute inset-0 opacity-20 z-0">
        <div className="absolute inset-0 bg-[url('/abstract-dots-lines.png')] bg-cover bg-center"></div>
      </div>

      {/* Content */}
      <div className="container relative z-20 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <div className="relative inline-block">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">Faculty</h1>
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-white/70 rounded-full"></div>
              <div className="absolute -bottom-2 left-0 w-1/2 h-1 bg-secondary animate-pulse rounded-full"></div>
            </div>
            <p className="text-white/90 text-lg md:text-xl mt-6 max-w-xl">
              Meet our distinguished faculty members who are leaders in their fields, driving innovation through
              cutting-edge research and excellence in teaching.
            </p>

            <div className="mt-8 relative max-w-md">
              <Input
                type="text"
                placeholder="Search by name, research area, or expertise..."
                className="pl-10 pr-4 py-2 bg-white/90 border-none focus-visible:ring-secondary text-primary"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-primary/70" />
            </div>
          </div>

          <div className="hidden md:flex justify-end">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20 shadow-xl">
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-white/10 rounded-lg">
                  <h3 className="text-3xl font-bold text-white">20+</h3>
                  <p className="text-white/80 text-sm mt-1">Faculty Members</p>
                </div>
                <div className="text-center p-4 bg-white/10 rounded-lg">
                  <h3 className="text-3xl font-bold text-white">15+</h3>
                  <p className="text-white/80 text-sm mt-1">Research Areas</p>
                </div>
                <div className="text-center p-4 bg-white/10 rounded-lg">
                  <h3 className="text-3xl font-bold text-white">200+</h3>
                  <p className="text-white/80 text-sm mt-1">Publications</p>
                </div>
                <div className="text-center p-4 bg-white/10 rounded-lg">
                  <h3 className="text-3xl font-bold text-white">50+</h3>
                  <p className="text-white/80 text-sm mt-1">Ongoing Projects</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
