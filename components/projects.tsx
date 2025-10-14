import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, TrendingUp, Shield, Users } from "lucide-react"

export function Projects() {
  const projects = [
    {
      title: "AIVEST",
      subtitle: "AI-driven Stock Trading Assistant",
      period: "Mar 2025 – Apr 2025",
      description: [
        "Built an AI-powered stock trading platform integrating technical indicators with ChatGPT-based sentiment analysis.",
        "Implemented real-time data visualization, backtesting, and predictive analytics for strategy evaluation.",
      ],
      tech: ["React.js", "Node.js", "ChatGPT API", "Finage API", "TensorFlow", "RSI", "MACD", "Bollinger Bands"],
      links: {
        github: "#",
        demo: "#",
      },
      icon: TrendingUp,
      gradient: "from-blue-500/20 via-cyan-500/20 to-teal-500/20",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-10-13%20at%207.23.07%E2%80%AFPM-QJyaieN9IDhXXbuAX8894A314cH7je.png",
    },
    {
      title: "BlockCerti",
      subtitle: "Digital Credential Issuer & Verifier",
      period: "Jan 2023 – Nov 2023",
      description: [
        "Engineered a decentralized credential verification system using blockchain for secure certificate management.",
        "Designed privacy-preserving architecture storing only hashed data on-chain with off-chain metadata.",
      ],
      tech: [
        "Blockchain",
        "React.js",
        "Node.js",
        "Express.js",
        "Web3",
        "Tailwind CSS",
        "ORMs",
        "Modular API Design",
        "MySQL",
      ],
      links: {
        github: "#",
        demo: "#",
      },
      icon: Shield,
      gradient: "from-purple-500/20 via-violet-500/20 to-indigo-500/20",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-10-13%20at%207.26.07%E2%80%AFPM-2YTeKazJaTtNYQhsuWMZVBeKR2qWxf.png",
    },
    {
      title: "ConnectAssist",
      subtitle: "Community Assistance Platform",
      period: "Oct 2023",
      description: [
        "Developed a task-based platform connecting local users with verified service providers.",
        "Built secure backend APIs, profile management, and real-time messaging for seamless communication.",
      ],
      tech: ["React.js", "Node.js", "Express", "MySQL"],
      links: {
        github: "#",
        demo: "#",
      },
      icon: Users,
      gradient: "from-emerald-500/20 via-green-500/20 to-teal-500/20",
      image: "/community-service-platform-with-user-profiles.jpg",
    },
  ]

  return (
    <section
      id="projects"
      className="py-20 sm:py-24 md:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-muted/30 to-background"
    >
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6 text-balance bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Building innovative solutions with cutting-edge technology
          </p>
        </div>

        <div className="grid gap-8 sm:gap-10 lg:gap-12">
          {projects.map((project, index) => {
            const Icon = project.icon
            return (
              <Card
                key={index}
                className="group relative overflow-hidden border-2 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-500"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />

                <div className="relative grid lg:grid-cols-2 gap-6 sm:gap-8 p-6 sm:p-8 lg:p-10">
                  <div className="relative overflow-hidden rounded-xl bg-muted/50 aspect-video lg:aspect-auto">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute top-3 right-3 sm:top-4 sm:right-4 p-2 sm:p-3 rounded-xl bg-background/90 backdrop-blur-sm border-2 border-primary/20 group-hover:border-primary/50 transition-colors">
                      <Icon className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                    </div>
                  </div>

                  <div className="flex flex-col justify-between">
                    <div>
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4 gap-3">
                        <div className="flex-1">
                          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2 group-hover:text-primary transition-colors">
                            {project.title}
                          </h3>
                          <p className="text-sm sm:text-base font-semibold text-primary/80 mb-2">{project.subtitle}</p>
                          <p className="text-xs sm:text-sm text-muted-foreground">{project.period}</p>
                        </div>
                        <div className="flex gap-2 sm:gap-3">
                          <a
                            href={project.links.github}
                            className="p-2 sm:p-2.5 rounded-lg bg-muted/50 hover:bg-primary/10 border border-border hover:border-primary/50 text-muted-foreground hover:text-primary transition-all"
                            aria-label="View on GitHub"
                          >
                            <Github className="h-4 w-4 sm:h-5 sm:w-5" />
                          </a>
                          <a
                            href={project.links.demo}
                            className="p-2 sm:p-2.5 rounded-lg bg-muted/50 hover:bg-primary/10 border border-border hover:border-primary/50 text-muted-foreground hover:text-primary transition-all"
                            aria-label="View live demo"
                          >
                            <ExternalLink className="h-4 w-4 sm:h-5 sm:w-5" />
                          </a>
                        </div>
                      </div>

                      <div className="space-y-3 sm:space-y-4 mb-4 sm:mb-6">
                        {project.description.map((desc, i) => (
                          <p key={i} className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                            • {desc}
                          </p>
                        ))}
                      </div>
                    </div>

                    <div>
                      <p className="text-xs sm:text-sm font-semibold text-foreground/70 mb-2 sm:mb-3">
                        Technologies Used
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, i) => (
                          <Badge
                            key={i}
                            variant="secondary"
                            className="text-xs sm:text-sm px-3 sm:px-4 py-1 sm:py-1.5 bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 hover:border-primary/40 transition-all font-medium"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
