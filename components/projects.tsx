"use client"

import { useState } from "react"
import { ExternalLink, Github, Calendar } from "lucide-react"

const projects = [
  {
    title: "Aivest",
    subtitle: "AI-driven Stock Market Trading Assistant",
    period: "March 2025 – April 2025",
    description:
      "Built a web-based trading platform combining technical indicators (RSI, MACD, Bollinger Bands) with real-time sentiment analysis using the ChatGPT API.",
    highlights: [
      "Integrated Finage APIs for live and historical stock data to generate actionable buy/sell/hold recommendations",
      "Developed full-stack system with ReactJS frontend and Node.js backend, including dashboards and sentiment scoring",
      "Implemented backtesting module to validate AI-generated trading strategies against historical data",
    ],
    technologies: ["React.js", "Node.js", "ChatGPT API", "Finage API", "Technical Analysis"],
    projectUrl: "#", // Replace with actual project URL
    githubUrl: "https://github.com/YashPatel2395/aivest", // Replace with actual repo URL
  },
  {
    title: "Blockcerti",
    subtitle: "Digital Credential Issuer & Verifier Engine",
    period: "October 2023 – November 2023",
    description:
      "Contributed to a blockchain-anchored credentialing platform for issuing, storing, and verifying certificates in a decentralized way.",
    highlights: [
      "Ensured minimal on-chain data (hashes only) while keeping personal data off-chain to protect privacy",
      "Enhanced verification tools so credentials could be validated via web/mobile without centralized servers",
      "Integrated with wallets/apps for credential import, management, and secure sharing",
    ],
    technologies: ["Blockchain", "Web3", "Cryptography", "Decentralized Systems"],
    projectUrl: "#", // Replace with actual project URL
    githubUrl: "https://github.com/YashPatel2395/blockcerti", // Replace with actual repo URL
  },
  {
    title: "Connect Assist",
    subtitle: "Community-driven assistance and support platform",
    period: "October 2023",
    description:
      "Developed a web platform for users to connect with local helpers for daily tasks, services, or assistance requests.",
    highlights: [
      "Built features for browsing, messaging, and scheduling help sessions between helpers and requesters",
      "Designed a clean, intuitive UI to enhance user trust and ease-of-use",
      "Implemented backend to handle user profiles, service listings, and service request workflows securely",
    ],
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "REST APIs"],
    projectUrl: "#", // Replace with actual project URL
    githubUrl: "https://github.com/YashPatel2395/connect-assist", // Replace with actual repo URL
  },
]

export function Projects() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section id="projects" className="py-20 sm:py-32 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 2px, currentColor 2px, currentColor 3px),
                           repeating-linear-gradient(90deg, transparent, transparent 2px, currentColor 2px, currentColor 3px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="section-container relative">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-20 relative">
          <div className="inline-block relative">
            <div className="absolute -inset-4 bg-foreground/5 blur-2xl rounded-full" />
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 relative px-4">Featured Projects</h2>
          </div>
          <div className="flex items-center justify-center gap-4 mt-6 px-4">
            <div className="h-px w-12 sm:w-20 bg-gradient-to-r from-transparent to-foreground/20" />
            <p className="text-muted-foreground text-base sm:text-lg">Building innovative solutions</p>
            <div className="h-px w-12 sm:w-20 bg-gradient-to-l from-transparent to-foreground/20" />
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-6 sm:gap-8 md:grid-cols-2 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group relative h-full"
            >
              {/* Project Card */}
              <div className="relative flex h-full flex-col bg-background border-2 border-foreground/10 hover:border-foreground/30 transition-all duration-500 overflow-hidden">
                {/* Hover Gradient Effect */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `radial-gradient(600px circle at ${hoveredIndex === index ? "var(--mouse-x, 50%) var(--mouse-y, 50%)" : "50% 50%"}, rgba(255,255,255,0.06), transparent 40%)`,
                  }}
                />

                <div className="relative flex flex-1 flex-col gap-6 p-6 sm:p-8 lg:p-10">
                  <div className="grid gap-6 sm:gap-8 lg:grid-cols-[2fr,1fr]">
                    {/* Left Column - Content */}
                    <div className="space-y-4 sm:space-y-6">
                      {/* Title & Subtitle */}
                      <div>
                        <h3 className="text-xl sm:text-2xl font-bold mb-2 group-hover:translate-x-2 transition-transform duration-300">
                          {project.title}
                        </h3>
                        <p className="text-sm sm:text-base text-muted-foreground font-medium">{project.subtitle}</p>
                      </div>

                      {/* Description */}
                      <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                        {project.description}
                      </p>

                      {/* Highlights */}
                      <div className="space-y-2 sm:space-y-3">
                        {project.highlights.map((highlight, hIndex) => (
                          <div key={hIndex} className="flex gap-2 sm:gap-3 group/item">
                            <div className="mt-1.5 w-1.5 h-1.5 bg-foreground rounded-full flex-shrink-0 group-hover/item:scale-150 transition-transform" />
                            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{highlight}</p>
                          </div>
                        ))}
                      </div>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2 pt-4">
                        {project.technologies.map((tech, tIndex) => (
                          <span
                            key={tIndex}
                            className="px-2 sm:px-3 py-1 text-xs font-mono border border-foreground/20 hover:border-foreground hover:bg-foreground/5 transition-all"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Right Column - Meta Info */}
                    <div className="space-y-4 sm:space-y-6">
                      {/* Date */}
                      <div className="border-l-2 border-foreground/20 pl-4 sm:pl-6">
                        <div className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground mb-2">
                          <Calendar className="w-3 h-3 sm:w-4 sm:h-4" />
                          <span className="font-mono">Timeline</span>
                        </div>
                        <p className="text-xs sm:text-sm font-medium">{project.period}</p>
                      </div>

                      {/* Action Buttons */}
                      <div className="space-y-2 sm:space-y-3">
                        <a
                          href={project.projectUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full flex items-center justify-center gap-2 px-4 py-2 sm:px-6 sm:py-3 border-2 border-foreground hover:bg-foreground hover:text-background transition-all group/btn text-sm sm:text-base"
                        >
                          <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 group-hover/btn:rotate-45 transition-transform" />
                          <span className="font-bold">View Project</span>
                        </a>
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full flex items-center justify-center gap-2 px-4 py-2 sm:px-6 sm:py-3 border border-foreground/30 hover:border-foreground hover:bg-foreground/5 transition-all group/btn text-sm sm:text-base"
                        >
                          <Github className="w-3 h-3 sm:w-4 sm:h-4 group-hover/btn:scale-110 transition-transform" />
                          <span className="font-bold">Source Code</span>
                        </a>
                      </div>

                      {/* Decorative Element */}
                      <div className="pt-6">
                        <div className="w-full h-px bg-gradient-to-r from-foreground/20 to-transparent" />
                        <div className="mt-4 flex gap-2">
                          {[...Array(3)].map((_, i) => (
                            <div
                              key={i}
                              className="w-2 h-2 border border-foreground/30 group-hover:bg-foreground/20 transition-all"
                              style={{ transitionDelay: `${i * 50}ms` }}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Corner Accents */}
                <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-foreground/20 group-hover:border-foreground/40 transition-colors" />
                <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-foreground/20 group-hover:border-foreground/40 transition-colors" />
              </div>

              {/* Connecting Line (except for last item) */}
              {index < projects.length - 1 && (
                <div className="flex justify-center py-4 md:hidden">
                  <div className="w-px h-8 bg-gradient-to-b from-foreground/20 to-transparent" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
