import type { Metadata } from "next"
import { StaffHeader } from "@/components/people/staff-header"
import { StaffContent } from "@/components/people/staff-content"

export const metadata: Metadata = {
  title: "Staff | Department of Mechanical Engineering",
  description: "Meet the dedicated technical staff of the Department of Mechanical Engineering at IIITDM Kancheepuram.",
}

export default function StaffPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <StaffHeader />
      <StaffContent />
    </main>
  )
}
