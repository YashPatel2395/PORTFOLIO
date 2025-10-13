"use client"

import { Mail, Phone, Github, Linkedin, Send } from "lucide-react"
import { useState } from "react"

export function Contact() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "yashpatel77667@gmail.com",
      href: "mailto:yashpatel77667@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+1 (360) 469-9829",
      href: "tel:+13604699829",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "YashPatel2395",
      href: "https://github.com/YashPatel2395",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Yashkumar K Patel",
      href: "https://linkedin.com/in/yashkumar-k-patel",
    },
  ]

  return (
    <section id="contact" className="py-20 sm:py-24 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 border border-border/20 rounded-full" />
      <div className="absolute bottom-20 right-10 w-96 h-96 border border-border/20 rounded-full" />

      <div className="section-container relative z-10 max-w-4xl">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-20 relative">
          <div className="inline-block relative">
            <div className="absolute -inset-4 bg-foreground/5 blur-2xl rounded-full" />
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4 sm:mb-6 relative px-4">
              <span className="inline-block hover:scale-110 transition-transform duration-300">Let's</span>{" "}
              <span className="inline-block hover:scale-110 transition-transform duration-300 delay-75">Connect</span>
            </h2>
          </div>
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-12 sm:w-16 bg-gradient-to-r from-transparent to-border" />
            <p className="text-muted-foreground text-base sm:text-lg font-mono">Get in touch</p>
            <div className="h-px w-12 sm:w-16 bg-gradient-to-l from-transparent to-border" />
          </div>
        </div>

        <div className="max-w-3xl mx-auto space-y-4 sm:space-y-6">
          {contactInfo.map((item, index) => {
            const Icon = item.icon
            return (
              <a
                key={index}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
                className="group block relative"
              >
                {/* Card Background Layers */}
                <div className="absolute inset-0 bg-foreground/5 rounded-2xl transform transition-transform duration-300 group-hover:scale-[1.02]" />
                <div className="absolute inset-0 border-2 border-border rounded-2xl transform transition-all duration-300 group-hover:border-foreground" />

                {/* Hover Glow Effect */}
                <div
                  className={`absolute inset-0 bg-foreground/10 rounded-2xl blur-xl transition-opacity duration-300 ${hoveredCard === index ? "opacity-100" : "opacity-0"}`}
                />

                <div className="relative p-6 sm:p-8 flex items-center gap-4 sm:gap-6">
                  {/* Icon Container */}
                  <div className="relative">
                    <div className="absolute inset-0 bg-foreground rounded-xl transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6" />
                    <div className="relative bg-background border-2 border-foreground rounded-xl p-3 sm:p-4 transform transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6">
                      <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <p className="text-xs sm:text-sm font-bold text-muted-foreground mb-1 font-mono uppercase tracking-wider">
                      {item.label}
                    </p>
                    <p className="text-base sm:text-lg font-bold truncate group-hover:text-foreground transition-colors">
                      {item.value}
                    </p>
                  </div>

                  {/* Arrow */}
                  <Send className="w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground transform transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-foreground" />
                </div>

                {/* Corner Accents */}
                <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-foreground rounded-tl-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-foreground rounded-br-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </a>
            )
          })}
        </div>

        {/* Bottom Decorative Line */}
        <div className="mt-20 flex items-center justify-center gap-4">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-border to-transparent" />
          <div className="w-2 h-2 rounded-full bg-foreground animate-pulse" />
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-border to-transparent" />
        </div>
      </div>
    </section>
  )
}
