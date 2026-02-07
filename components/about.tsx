import { Card } from "@/components/ui/card"
import { Sparkles } from "lucide-react"

export function About() {
  return (
    <section
      id="about"
      className="py-20 sm:py-24 md:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-muted/30 relative overflow-hidden"
    >
      <div className="absolute top-20 right-20 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent mb-4 sm:mb-6">
            <Sparkles className="h-4 w-4" />
            <span className="text-sm font-semibold">Get to know me</span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6 text-balance">About Me</h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-accent via-primary to-accent mx-auto rounded-full" />
        </div>

        <Card className="p-8 sm:p-12 md:p-16 shadow-2xl shadow-primary/10 border-2 hover:shadow-3xl hover:shadow-primary/15 transition-all duration-500 bg-gradient-to-br from-card/80 to-card/50 backdrop-blur-sm relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="relative z-10">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 text-balance bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            Cloud Software Engineer
            </h3>
            <p className="text-muted-foreground leading-relaxed text-base sm:text-lg md:text-xl">
            Software Engineer specializing in cloud-native application development on Google Cloud, with experience designing scalable backend services, deploying containerized workloads, and integrating full-stack web applications. Proficient in Python, JavaScript, React, Node.js, and Django, with strong understanding of system design, APIs, and data storage.
            Google Cloud Professional Cloud Architect (PCA) certified, with practical experience building and deploying production-ready systems using managed cloud infrastructure.
            </p>
          </div>
        </Card>
      </div>
    </section>
  )
}
