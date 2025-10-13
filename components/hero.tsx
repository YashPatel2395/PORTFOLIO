"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowDown, Download, Mail, Phone, Github, Linkedin } from "lucide-react"
import Image from "next/image"

export function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
  }

  const downloadResume = () => {
    const link = document.createElement("a")
    link.href = "/resume.pdf"
    link.download = "Yashkumar_Patel_Resume.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const contactLinks = [
    {
      icon: Mail,
      href: "mailto:yashpatel77667@gmail.com",
      label: "Email",
    },
    {
      icon: Phone,
      href: "tel:+13604699829",
      label: "Phone",
    },
    {
      icon: Github,
      href: "https://github.com/YashPatel2395",
      label: "GitHub",
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/yashkumarkpatel/",
      label: "LinkedIn",
    },
  ]

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:80px_80px]" />
        <div
          className="absolute inset-0 opacity-30 transition-opacity duration-500"
          style={{
            background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,0.04), transparent 40%)`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />
      </div>

      <div className="section-container relative z-10 py-20 pt-28 sm:pt-32 md:pt-36">
        <div className="mx-auto w-full max-w-4xl">
          <div className="flex flex-col items-center text-center space-y-12 sm:space-y-16">
            {/* Profile Image - Centered and prominent */}
            <div
              className={`transition-all duration-1000 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
            >
              <div className="relative group">
                {/* Rotating border effect */}
                <div className="absolute -inset-8 bg-gradient-to-r from-foreground/20 via-foreground/5 to-foreground/20 rounded-full blur-2xl group-hover:blur-3xl transition-all duration-700 animate-pulse" />

                {/* Image container with circular frame */}
                <div className="relative">
                  <div className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-foreground/20 group-hover:border-foreground/40 transition-all duration-500 shadow-2xl">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/0015B863-0DE9-4086-A0E8-43DF8504B8A7_1_201_a-DCTjOWp57Xz9h4regkobFF8TJyybB4.jpeg"
                      alt="Yashkumar Patel"
                      width={256}
                      height={256}
                      className="object-cover object-[center_30%] w-full h-full grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                      priority
                    />
                  </div>

                  {/* Decorative rings */}
                  <div className="absolute inset-0 rounded-full border-2 border-foreground/10 scale-110 group-hover:scale-125 transition-transform duration-700" />
                  <div className="absolute inset-0 rounded-full border border-foreground/5 scale-125 group-hover:scale-150 transition-transform duration-700" />
                </div>
              </div>
            </div>

            {/* Name and Title */}
            <div
              className={`space-y-6 transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            >
              <div className="space-y-3">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter">
                  <span className="block bg-clip-text text-transparent bg-gradient-to-b from-foreground via-foreground to-foreground/60">
                    Yashkumar Patel
                  </span>
                </h1>

                {/* Role badges - inline */}
                <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
                  {["ML Engineer", "Software Engineer"].map((role, index) => (
                    <div key={index} className="relative group/badge" style={{ animationDelay: `${index * 100}ms` }}>
                      <div className="absolute -inset-1 bg-foreground/10 blur-md group-hover/badge:bg-foreground/20 transition-all duration-300" />
                      <div className="relative border border-foreground/40 bg-background px-4 py-2 sm:px-5 sm:py-2.5 hover:border-foreground hover:bg-foreground hover:text-background transition-all duration-300 hover:scale-105">
                        <p className="text-xs sm:text-sm font-bold tracking-wide">{role}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Description */}
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto text-balance">
                Graduate student specializing in{" "}
                <span className="font-semibold text-foreground">Machine Learning & AI</span> with expertise in building{" "}
                <span className="font-semibold text-foreground">scalable software solutions</span>. Proficient in
                Python, TensorFlow, PyTorch, and modern web technologies.
              </p>
            </div>

            {/* Contact Links */}
            <div
              className={`transition-all duration-1000 delay-400 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            >
              <div className="flex items-center justify-center gap-3 sm:gap-4">
                {contactLinks.map((link, index) => {
                  const Icon = link.icon
                  return (
                    <a
                      key={index}
                      href={link.href}
                      target={link.href.startsWith("http") ? "_blank" : undefined}
                      rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="group/link relative"
                      aria-label={link.label}
                    >
                      <div className="absolute -inset-1 bg-foreground/5 blur-md group-hover/link:bg-foreground/20 transition-all duration-300" />
                      <div className="relative border-2 border-foreground/30 bg-background p-3 sm:p-3.5 hover:border-foreground hover:bg-foreground hover:text-background transition-all duration-300 hover:scale-110 hover:shadow-xl">
                        <Icon className="w-5 h-5 sm:w-5 sm:h-5" />
                      </div>
                    </a>
                  )
                })}
              </div>
            </div>

            {/* CTA Buttons */}
            <div
              className={`flex flex-col sm:flex-row items-center gap-4 sm:gap-5 transition-all duration-1000 delay-600 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            >
              <Button
                onClick={scrollToAbout}
                size="lg"
                className="group relative bg-foreground text-background hover:bg-foreground/90 px-8 py-6 text-base font-bold tracking-wide hover:scale-105 transition-all duration-300 shadow-2xl"
              >
                <span className="flex items-center gap-2">
                  Explore My Work
                  <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform duration-300" />
                </span>
              </Button>

              <Button
                onClick={downloadResume}
                size="lg"
                variant="outline"
                className="group relative border-2 border-foreground bg-background text-foreground hover:bg-foreground hover:text-background px-8 py-6 text-base font-bold tracking-wide hover:scale-105 transition-all duration-300 shadow-xl"
              >
                <span className="flex items-center gap-2">
                  <Download className="w-5 h-5 group-hover:translate-y-1 transition-transform duration-300" />
                  Download Resume
                </span>
              </Button>
            </div>

            {/* Scroll Indicator */}
            <div
              className={`pt-8 transition-all duration-1000 delay-800 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            >
              <button
                onClick={scrollToAbout}
                className="group/scroll flex flex-col items-center gap-3 text-muted-foreground hover:text-foreground transition-colors duration-300"
              >
                <span className="text-xs font-bold tracking-[0.3em] uppercase">Scroll</span>
                <div className="relative w-7 h-12 border-2 border-foreground/40 rounded-full flex items-start justify-center p-2 group-hover/scroll:border-foreground transition-all duration-300">
                  <div className="w-1.5 h-3 bg-foreground/60 rounded-full animate-bounce" />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-foreground/10 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>
    </section>
  )
}
