import { Button } from "@/components/ui/button"
import { Mail, Phone, Github, Linkedin, Send, Sparkles } from "lucide-react"

export function Contact() {
  return (
    <section id="contact" className="py-20 sm:py-24 md:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute top-20 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />

      <div className="container mx-auto max-w-4xl relative z-10">
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent mb-4 sm:mb-6">
            <Sparkles className="h-4 w-4" />
            <span className="text-sm font-semibold">Let's connect</span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6 text-balance">Get In Touch</h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-accent via-primary to-accent mx-auto rounded-full mb-6 sm:mb-8" />
          <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Feel
            free to reach out!
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-12 sm:mb-16">
          <a
            href="mailto:yashpatel77667@gmail.com"
            className="flex items-center gap-4 sm:gap-5 p-6 sm:p-8 rounded-2xl border-2 border-border hover:border-accent hover:shadow-2xl hover:shadow-accent/20 transition-all duration-300 group bg-card/50 backdrop-blur-sm hover:-translate-y-1 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10 w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Mail className="h-6 w-6 sm:h-8 sm:w-8 text-accent" />
            </div>
            <div className="relative z-10">
              <p className="font-bold text-base sm:text-lg mb-1">Email</p>
              <p className="text-sm sm:text-base text-muted-foreground break-all">yashpatel77667@gmail.com</p>
            </div>
          </a>

          <a
            href="tel:+13604699829"
            className="flex items-center gap-4 sm:gap-5 p-6 sm:p-8 rounded-2xl border-2 border-border hover:border-accent hover:shadow-2xl hover:shadow-accent/20 transition-all duration-300 group bg-card/50 backdrop-blur-sm hover:-translate-y-1 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10 w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Phone className="h-6 w-6 sm:h-8 sm:w-8 text-accent" />
            </div>
            <div className="relative z-10">
              <p className="font-bold text-base sm:text-lg mb-1">Phone</p>
              <p className="text-sm sm:text-base text-muted-foreground">+1 (360) 469-9829</p>
            </div>
          </a>

          <a
            href="https://github.com/yashkumar"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 sm:gap-5 p-6 sm:p-8 rounded-2xl border-2 border-border hover:border-accent hover:shadow-2xl hover:shadow-accent/20 transition-all duration-300 group bg-card/50 backdrop-blur-sm hover:-translate-y-1 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10 w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Github className="h-6 w-6 sm:h-8 sm:w-8 text-accent" />
            </div>
            <div className="relative z-10">
              <p className="font-bold text-base sm:text-lg mb-1">GitHub</p>
              <p className="text-sm sm:text-base text-muted-foreground">github.com/yashkumar</p>
            </div>
          </a>

          <a
            href="https://linkedin.com/in/yashkumar"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 sm:gap-5 p-6 sm:p-8 rounded-2xl border-2 border-border hover:border-accent hover:shadow-2xl hover:shadow-accent/20 transition-all duration-300 group bg-card/50 backdrop-blur-sm hover:-translate-y-1 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10 w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Linkedin className="h-6 w-6 sm:h-8 sm:w-8 text-accent" />
            </div>
            <div className="relative z-10">
              <p className="font-bold text-base sm:text-lg mb-1">LinkedIn</p>
              <p className="text-sm sm:text-base text-muted-foreground">linkedin.com/in/yashkumar</p>
            </div>
          </a>
        </div>

        <div className="text-center">
          <Button
            size="lg"
            asChild
            className="font-bold text-sm sm:text-base px-8 sm:px-12 py-6 sm:py-8 rounded-full shadow-2xl shadow-primary/40 hover:shadow-3xl hover:shadow-primary/50 transition-all duration-300 hover:scale-105 group"
          >
            <a href="mailto:yashpatel77667@gmail.com" className="flex items-center gap-2 sm:gap-3">
              <Send className="h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform duration-300" />
              Send Me an Email
            </a>
          </Button>
        </div>
      </div>

      <footer className="mt-20 sm:mt-24 md:mt-32 pt-8 sm:pt-12 border-t-2 border-border/50">
        <div className="container mx-auto max-w-6xl text-center">
          <p className="text-sm sm:text-base text-muted-foreground">
            © {new Date().getFullYear()} Yashkumar Patel. All rights reserved.
          </p>
        </div>
      </footer>
    </section>
  )
}
