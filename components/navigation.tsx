"use client"

import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"
import { Menu, X } from "lucide-react"

export function Navigation() {
  const [activeSection, setActiveSection] = useState("home")
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)

      const sections = ["home", "about", "experience", "projects", "skills", "certifications", "education", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setMobileMenuOpen(false)
  }

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-background/98 backdrop-blur-xl border-b-2 border-border shadow-lg"
          : "bg-background/95 backdrop-blur-md border-b border-border/50",
      )}
    >
      <div className="section-container py-4 sm:py-5">
        <div className="flex items-center justify-between">
          <button
            onClick={() => scrollToSection("home")}
            className="text-xl sm:text-2xl font-bold font-mono hover:opacity-70 transition-all border-2 border-foreground px-3 py-1.5 sm:px-4 sm:py-2 hover:bg-foreground hover:text-background"
          >
            YP
          </button>

          <div className="hidden lg:flex gap-6 xl:gap-8">
            {["home", "about", "experience", "projects", "skills", "certifications", "education", "contact"].map(
              (section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={cn(
                    "text-sm font-bold transition-all hover:text-foreground capitalize relative group tracking-wide",
                    activeSection === section ? "text-foreground" : "text-muted-foreground",
                  )}
                >
                  {section}
                  <span
                    className={cn(
                      "absolute -bottom-1 left-0 h-0.5 bg-foreground transition-all duration-300",
                      activeSection === section ? "w-full" : "w-0 group-hover:w-full",
                    )}
                  />
                </button>
              ),
            )}
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 hover:bg-foreground/10 transition-colors rounded-lg"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-border pt-4 space-y-2">
            {["home", "about", "experience", "projects", "skills", "certifications", "education", "contact"].map(
              (section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={cn(
                    "w-full text-left px-4 py-3 rounded-lg font-bold transition-all capitalize",
                    activeSection === section
                      ? "bg-foreground text-background"
                      : "text-muted-foreground hover:bg-foreground/10 hover:text-foreground",
                  )}
                >
                  {section}
                </button>
              ),
            )}
          </div>
        )}
      </div>
    </nav>
  )
}
