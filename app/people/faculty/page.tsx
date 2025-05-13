import type { Metadata } from "next"
import { FacultyHeader } from "@/components/people/faculty-header"
import { FacultyContent } from "@/components/people/faculty-content"

export const metadata: Metadata = {
  title: "Faculty | Department of Mechanical Engineering",
  description:
    "Meet the distinguished faculty members of the Department of Mechanical Engineering at IIITDM Kancheepuram.",
}

export default function FacultyPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <FacultyHeader />
      <FacultyContent />
    </main>
  )
}
