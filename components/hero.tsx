"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowDown, Sparkles, Download } from "lucide-react"

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

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      <div className="absolute inset-0">
        {/* Animated grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_110%)]" />

        {/* Radial gradient overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.3)_100%)]" />

        {/* Mouse tracking spotlight */}
        <div
          className="absolute inset-0 opacity-40 transition-opacity duration-500"
          style={{
            background: `radial-gradient(800px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,0.06), transparent 50%)`,
          }}
        />

        {/* Animated corner accents */}
        <div
          className="absolute top-0 left-0 w-64 h-64 border-t-4 border-l-4 border-foreground/20 animate-pulse"
          style={{ animationDuration: "3s" }}
        />
        <div
          className="absolute top-0 right-0 w-64 h-64 border-t-4 border-r-4 border-foreground/20 animate-pulse"
          style={{ animationDuration: "3s", animationDelay: "0.5s" }}
        />
        <div
          className="absolute bottom-0 left-0 w-64 h-64 border-b-4 border-l-4 border-foreground/20 animate-pulse"
          style={{ animationDuration: "3s", animationDelay: "1s" }}
        />
        <div
          className="absolute bottom-0 right-0 w-64 h-64 border-b-4 border-r-4 border-foreground/20 animate-pulse"
          style={{ animationDuration: "3s", animationDelay: "1.5s" }}
        />
      </div>

      <div className="container relative z-10 px-4 sm:px-6 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="space-y-8 sm:space-y-12 md:space-y-16">
            <div
              className={`flex items-center justify-center gap-3 sm:gap-4 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-8"}`}
            >
              <div className="h-px w-12 sm:w-16 md:w-32 bg-gradient-to-r from-transparent via-foreground/40 to-foreground" />
              <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-foreground/60" />
              <div className="h-px w-12 sm:w-16 md:w-32 bg-gradient-to-l from-transparent via-foreground/40 to-foreground" />
            </div>

            <div
              className={`text-center space-y-4 sm:space-y-6 transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            >
              <div className="relative inline-block">
                <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black tracking-tighter leading-none text-balance px-4">
                  <span className="block mb-1 sm:mb-2 md:mb-4 bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/60">
                    Yashkumar
                  </span>
                  <span className="block relative">
                    <span className="relative z-10">Patel</span>
                    <div className="absolute inset-0 blur-2xl bg-foreground/10 scale-110" />
                  </span>
                </h1>
                <div className="absolute -top-4 sm:-top-8 -left-4 sm:-left-8 w-8 h-8 sm:w-16 sm:h-16 border-t-2 border-l-2 border-foreground/30" />
                <div className="absolute -bottom-4 sm:-bottom-8 -right-4 sm:-right-8 w-8 h-8 sm:w-16 sm:h-16 border-b-2 border-r-2 border-foreground/30" />
              </div>
            </div>

            <div
              className={`flex flex-wrap items-center justify-center gap-3 sm:gap-4 md:gap-6 px-4 transition-all duration-1000 delay-400 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            >
              {[
                { title: "ML Engineer", delay: "0ms" },
                { title: "Software Engineer", delay: "100ms" },
              ].map((role, index) => (
                <div key={index} className="group relative" style={{ animationDelay: role.delay }}>
                  <div className="absolute -inset-1 bg-foreground/5 blur-lg group-hover:bg-foreground/20 transition-all duration-500" />
                  <div
                    className="relative border-2 border-foreground bg-background px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 
                                  hover:bg-foreground hover:text-background transition-all duration-300 
                                  hover:scale-110 hover:shadow-2xl cursor-default
                                  before:absolute before:inset-0 before:border-2 before:border-foreground/20 before:-translate-x-1 before:-translate-y-1
                                  after:absolute after:inset-0 after:border-2 after:border-foreground/20 after:translate-x-1 after:translate-y-1"
                  >
                    <p className="text-sm sm:text-base md:text-xl lg:text-2xl font-bold tracking-tight relative z-10">
                      {role.title}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div
              className={`max-w-3xl mx-auto text-center space-y-6 sm:space-y-8 px-4 transition-all duration-1000 delay-600 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            >
              <div className="relative">
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground leading-relaxed text-pretty">
                  Graduate student specializing in{" "}
                  <span className="relative inline-block group cursor-default">
                    <span className="relative z-10 font-bold text-foreground">Machine Learning & AI</span>
                    <span className="absolute inset-x-0 bottom-0 h-3 bg-foreground/10 -skew-x-12 group-hover:h-full group-hover:skew-x-0 transition-all duration-300" />
                  </span>{" "}
                  with expertise in building{" "}
                  <span className="relative inline-block group cursor-default">
                    <span className="relative z-10 font-bold text-foreground">scalable software solutions</span>
                    <span className="absolute inset-x-0 bottom-0 h-3 bg-foreground/10 -skew-x-12 group-hover:h-full group-hover:skew-x-0 transition-all duration-300" />
                  </span>
                  . Proficient in Python, TensorFlow, PyTorch, and modern web technologies including React.js, Node.js,
                  and Django.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
                <Button
                  onClick={scrollToAbout}
                  size="lg"
                  className="group relative bg-foreground text-background hover:bg-foreground/90 
                           px-6 py-5 sm:px-10 sm:py-7 text-base sm:text-lg font-bold tracking-wide
                           hover:scale-105 transition-all duration-300 shadow-2xl
                           before:absolute before:inset-0 before:bg-foreground/20 before:blur-xl before:-z-10
                           after:absolute after:inset-0 after:border-2 after:border-foreground after:translate-x-2 after:translate-y-2 after:-z-10"
                >
                  <span className="flex items-center gap-2 sm:gap-3">
                    Explore My Work
                    <ArrowDown className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-y-1 transition-transform duration-300" />
                  </span>
                </Button>

                <Button
                  onClick={downloadResume}
                  size="lg"
                  variant="outline"
                  className="group relative border-2 border-foreground bg-background text-foreground hover:bg-foreground hover:text-background
                           px-6 py-5 sm:px-10 sm:py-7 text-base sm:text-lg font-bold tracking-wide
                           hover:scale-105 transition-all duration-300 shadow-xl"
                >
                  <span className="flex items-center gap-2 sm:gap-3">
                    <Download className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-y-1 transition-transform duration-300" />
                    Download Resume
                  </span>
                </Button>
              </div>
            </div>

            {/* Scroll indicator with enhanced animation */}
            <div
              className={`flex justify-center pt-8 transition-all duration-1000 delay-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            >
              <button
                onClick={scrollToAbout}
                className="group flex flex-col items-center gap-4 text-muted-foreground hover:text-foreground transition-colors duration-300"
              >
                <span className="text-xs font-bold tracking-[0.3em] uppercase">Scroll</span>
                <div
                  className="relative w-8 h-14 border-2 border-foreground/40 rounded-full flex items-start justify-center p-2 
                              group-hover:border-foreground transition-all duration-300 group-hover:shadow-lg"
                >
                  <div className="w-2 h-4 bg-foreground/60 rounded-full animate-bounce" />
                  {/* Pulse rings */}
                  <div
                    className="absolute inset-0 border-2 border-foreground/20 rounded-full animate-ping"
                    style={{ animationDuration: "2s" }}
                  />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-foreground/20 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div>
    </section>
  )
}
