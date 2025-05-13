import Link from "next/link"
import { Separator } from "@/components/ui/separator"

export function Footer() {
  const quickLinks = [
    { href: "/", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#academics", label: "Academic Programs" },
    { href: "#divisions", label: "Divisions" },
    { href: "#research", label: "Research" },
    { href: "#people", label: "People" },
  ]

  const studentLinks = [
    { href: "/", label: "Academic Calendar" },
    { href: "/", label: "Time Table" },
    { href: "/", label: "Online Fee" },
    { href: "/", label: "Academic Certificates" },
    { href: "/", label: "NPTEL Courses" },
  ]

  const prospectiveStudentLinks = [
    { href: "/", label: "Opening and Closing Ranks" },
    { href: "/", label: "M.Tech Admission Counseling" },
    { href: "/", label: "Placement Cell" },
    { href: "/", label: "Programs Available" },
    { href: "/", label: "Campus Infrastructure" },
  ]

  const socialLinks = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
        </svg>
      ),
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
        </svg>
      ),
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
        </svg>
      ),
    },
  ]

  return (
    <footer className="bg-primary text-white py-12">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="text-white/80 hover:text-secondary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 text-white">For Students</h3>
            <ul className="space-y-2">
              {studentLinks.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="text-white/80 hover:text-secondary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 text-white">For Prospective Students</h3>
            <ul className="space-y-2">
              {prospectiveStudentLinks.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="text-white/80 hover:text-secondary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Contact</h3>
            <p className="text-white/80 mb-2">
              Prof. B. Raja
              <br />
              Head of the Department
              <br />
              Email: hod-me@iiitdm.ac.in
              <br />
              Ph: +91-44-27476355
              <br />
              Room No: 109H
            </p>
            <div className="flex gap-4 mt-4">
              {socialLinks.map((social, index) => (
                <Link key={index} href="/" className="text-white hover:text-secondary transition-colors">
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                    {social.icon}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-white/20" />

        <div className="text-center">
          <p className="text-white/60">
            &copy; {new Date().getFullYear()} Department of Mechanical Engineering, IIITDM Kancheepuram. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
