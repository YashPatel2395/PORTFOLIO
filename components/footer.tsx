"use client"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-background">
      <div className="section-container py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold font-mono mb-3">YP</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Graduate student in Computer Science specializing in Machine Learning, AI, and Full-Stack Web Development.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {["home", "about", "experience", "skills", "certifications", "education"].map((section) => (
                <li key={section}>
                  <button
                    onClick={() => {
                      const element = document.getElementById(section)
                      if (element) {
                        element.scrollIntoView({ behavior: "smooth" })
                      }
                    }}
                    className="text-muted-foreground hover:text-foreground transition-colors capitalize"
                  >
                    {section}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Connect</h4>
            <div className="space-y-2 text-sm">
              <a
                href="mailto:yashpatel77667@gmail.com"
                className="block text-muted-foreground hover:text-foreground transition-colors"
              >
                yashpatel77667@gmail.com
              </a>
              <a
                href="tel:+13604699829"
                className="block text-muted-foreground hover:text-foreground transition-colors"
              >
                +1 (360) 469-9829
              </a>
              <a
                href="https://linkedin.com/in/yashkumar-k-patel"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-muted-foreground hover:text-foreground transition-colors"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/YashPatel2395"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-muted-foreground hover:text-foreground transition-colors"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p>© {currentYear} Yashkumar Patel. All rights reserved.</p>
            <p className="text-xs">Built with Next.js & Tailwind CSS</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
