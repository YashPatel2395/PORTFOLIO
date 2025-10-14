"use client"

import { Button } from "@/components/ui/button"
import { Mail, Phone, Github, Linkedin, ChevronDown, Sparkles, ArrowRight, Download } from "lucide-react"

const generateResumePDF = () => {
  // Create a simple downloadable text version
  const resumeContent = `YASHKUMAR KAMLESHKUMAR PATEL
Email: yashpatel77667@gmail.com | Phone: +1 (360) 469-9829
Website: yashkumar.dev | LinkedIn: linkedin.com/in/yashkumarkpatel | GitHub: github.com/YashPatel2395

SUMMARY
Results-driven Software Engineer with a strong foundation in Python, JavaScript, and full-stack web development. Experienced in designing scalable systems using React.js, Node.js, and Django, integrating REST APIs, and managing relational and NoSQL databases. Proficient in cloud deployment on AWS/Vercel, software design principles, and Agile collaboration. Skilled in applying data structures, algorithms, and machine learning concepts to build efficient, maintainable, and high-performing applications.

EXPERIENCE

SUNY Polytechnic Institute — College of Engineering
Graduate Assistant | Utica, New York | Aug 2025 – Present
• Developed and optimized modules for the Freedom Dashboard, a web-based platform emphasizing privacy and decentralization.
• Refactored backend components to improve scalability, performance, and maintainability.
• Collaborated with teams on architecture design, feature planning, and testing to enhance platform stability.

Variance InfoTech Pvt. Ltd.
Software Engineer | Ahmedabad, India | Jun 2024 – Dec 2024
• Built modular, production-ready web applications using Node.js, React.js, and Express.js.
• Integrated RESTful APIs, optimized database operations, and enhanced user experience through performance tuning.
• Contributed to Agile sprints, participated in code reviews, and maintained coding best practices.

Arihant Satiate
Full-Stack Intern | Ahmedabad, India | Jan 2023 – Nov 2023
• Designed responsive UI components and layouts for improved functionality and accessibility.
• Enhanced cross-platform performance and modularized front-end components.
• Strengthened technical proficiency in React, Tailwind CSS, TypeScript, Node.js, MySQL, and TypeORM.

PROJECTS

AIVEST — AI-driven Stock Trading Assistant | Mar 2025 – Apr 2025
Tech: React.js, Node.js, ChatGPT API, Finage API, TensorFlow, RSI, MACD, Bollinger Bands
• Built an AI-powered stock trading platform integrating technical indicators with ChatGPT-based sentiment analysis.
• Implemented real-time data visualization, backtesting, and predictive analytics for strategy evaluation.

BlockCerti — Digital Credential Issuer & Verifier | Jan 2023 – Nov 2023
Tech: Blockchain, React.js, Node.js, Web3, Express.js, Tailwind CSS, ORMs, Modular API Design, MySQL
• Engineered a decentralized credential verification system using blockchain for secure certificate management.
• Designed privacy-preserving architecture storing only hashed data on-chain with off-chain metadata.

ConnectAssist — Community Assistance Platform | Oct 2023
Tech: React.js, Node.js, Express, MySQL
• Developed a task-based platform connecting local users with verified service providers.
• Built secure backend APIs, profile management, and real-time messaging for seamless communication.

SKILLS
Languages: Python, JavaScript, Java, C++, C, HTML, CSS, TypeScript
Frameworks: React.js, Node.js, Express.js, Django, Flask, Tailwind CSS
Databases: MySQL, PostgreSQL, MongoDB, SQLite
Tools: Git, Docker, Postman, Vercel, Jupyter, Google Colab
Data/ML: NumPy, Pandas, scikit-learn, TensorFlow, PyTorch, Matplotlib, Feature Engineering, Model Evaluation
Concepts: REST APIs, WebSockets, CI/CD, Cloud Deployment, Agile, OOP, ORM, Modular API Design

EDUCATION

State University of New York Polytechnic Institute | Jan 2025 – Present
Master of Science in Computer Science

GLS University | Apr 2021 – May 2024
Bachelor of Computer Applications

CERTIFICATES

Machine Learning Specialization — Stanford Online / Coursera (2025)
Gained hands-on experience in linear/logistic regression, decision trees, and neural networks using Python and TensorFlow.

Mathematics for Machine Learning and Data Science — DeepLearning.AI (2025)
Applied concepts of linear algebra, calculus, and probability to strengthen foundations in ML model development.`

  // Create blob and download
  const blob = new Blob([resumeContent], { type: "text/plain" })
  const url = window.URL.createObjectURL(blob)
  const link = document.createElement("a")
  link.href = url
  link.download = "Yashkumar_Patel_Resume.pdf"
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
  window.URL.revokeObjectURL(url)
}

export function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20 sm:pt-24 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-background to-primary/5 pointer-events-none" />
      <div className="absolute top-20 left-10 w-[500px] h-[500px] bg-gradient-to-br from-accent/20 to-primary/20 rounded-full blur-3xl animate-pulse opacity-30" />
      <div
        className="absolute bottom-20 right-10 w-[600px] h-[600px] bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-3xl animate-pulse opacity-30"
        style={{ animationDelay: "1s" }}
      />

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-center">
          <div className="flex justify-center lg:justify-start order-2 lg:order-1">
            <div className="relative w-full max-w-xs sm:max-w-sm">
              {/* Clean profile image with modern frame */}
              <div className="relative group">
                {/* Subtle glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent/30 via-primary/30 to-accent/30 rounded-3xl blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                {/* Main image container */}
                <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-accent/20 to-primary/20 p-1">
                  <div className="relative w-full aspect-[4/5] rounded-[22px] overflow-hidden bg-background">
                    <img
                      src="/Self.jpeg"
                      alt="Yashkumar Patel"
                      className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                </div>

                {/* Decorative corner accents */}
                <div className="absolute -top-3 -left-3 w-20 h-20 border-t-4 border-l-4 border-accent rounded-tl-3xl opacity-60" />
                <div className="absolute -bottom-3 -right-3 w-20 h-20 border-b-4 border-r-4 border-primary rounded-br-3xl opacity-60" />
              </div>

              {/* Simple badge below image */}
              <div className="mt-6 flex items-center justify-center gap-3">
                <div className="px-4 py-2 bg-gradient-to-r from-accent/10 to-accent/5 border border-accent/30 rounded-full">
                  <span className="text-sm font-semibold text-accent">AI & ML Specialist</span>
                </div>
                <div className="px-4 py-2 bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/30 rounded-full">
                  <span className="text-sm font-semibold text-primary">Full-Stack Dev</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Content */}
          <div className="order-1 lg:order-2 text-center lg:text-left">
            {/* Status badge */}
            <div className="mb-6 sm:mb-8 inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-gradient-to-r from-accent/10 to-primary/10 border border-accent/30 text-accent shadow-lg shadow-accent/10 hover:shadow-xl hover:shadow-accent/20 transition-all duration-300 animate-fade-in">
              <Sparkles className="h-3 w-3 sm:h-4 sm:w-4 animate-pulse" />
              <span className="text-xs sm:text-sm font-semibold">Available for opportunities</span>
            </div>

            {/* Name with gradient */}
            <h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 text-balance leading-tight animate-fade-in"
              style={{ animationDelay: "0.1s" }}
            >
              <span className="bg-gradient-to-r from-foreground via-foreground to-foreground/70 bg-clip-text text-transparent">
                Yashkumar
              </span>
              <br />
              <span className="bg-gradient-to-r from-accent via-primary to-accent bg-clip-text text-transparent">
                Patel
              </span>
            </h1>

            {/* Role badges */}
            <div
              className="flex items-center justify-center lg:justify-start gap-2 sm:gap-3 mb-6 sm:mb-8 flex-wrap animate-fade-in"
              style={{ animationDelay: "0.2s" }}
            >
              <span className="px-4 sm:px-6 py-2 sm:py-2.5 bg-gradient-to-r from-primary to-primary/90 text-primary-foreground rounded-full text-xs sm:text-sm font-bold shadow-xl shadow-primary/40 hover:shadow-2xl hover:shadow-primary/50 hover:scale-105 transition-all duration-300">
                ML Engineer
              </span>
              <span className="px-4 sm:px-6 py-2 sm:py-2.5 bg-gradient-to-r from-accent to-accent/90 text-accent-foreground rounded-full text-xs sm:text-sm font-bold shadow-xl shadow-accent/40 hover:shadow-2xl hover:shadow-accent/50 hover:scale-105 transition-all duration-300">
                Software Engineer
              </span>
            </div>

            {/* Description */}
            <p
              className="text-base sm:text-lg md:text-xl text-muted-foreground mb-8 sm:mb-10 max-w-xl mx-auto lg:mx-0 text-balance leading-relaxed animate-fade-in"
              style={{ animationDelay: "0.3s" }}
            >
              Graduate student specializing in{" "}
              <span className="font-bold text-transparent bg-gradient-to-r from-accent to-primary bg-clip-text">
                Machine Learning & AI
              </span>
              , building{" "}
              <span className="font-bold text-transparent bg-gradient-to-r from-primary to-accent bg-clip-text">
                scalable software solutions
              </span>{" "}
              that make an impact.
            </p>

            {/* Social links */}
            <div
              className="flex items-center justify-center lg:justify-start gap-2 sm:gap-3 mb-8 sm:mb-10 animate-fade-in"
              style={{ animationDelay: "0.4s" }}
            >
              <Button
                variant="outline"
                size="icon"
                asChild
                className="h-10 w-10 sm:h-12 sm:w-12 rounded-full hover:bg-primary hover:text-primary-foreground hover:border-primary hover:scale-110 transition-all duration-300 bg-card/50 backdrop-blur-sm border-2 shadow-lg hover:shadow-xl"
              >
                <a href="mailto:yashpatel77667@gmail.com" aria-label="Email">
                  <Mail className="h-4 w-4 sm:h-5 sm:w-5" />
                </a>
              </Button>
              <Button
                variant="outline"
                size="icon"
                asChild
                className="h-10 w-10 sm:h-12 sm:w-12 rounded-full hover:bg-primary hover:text-primary-foreground hover:border-primary hover:scale-110 transition-all duration-300 bg-card/50 backdrop-blur-sm border-2 shadow-lg hover:shadow-xl"
              >
                <a href="tel:+13604699829" aria-label="Phone">
                  <Phone className="h-4 w-4 sm:h-5 sm:w-5" />
                </a>
              </Button>
              <Button
                variant="outline"
                size="icon"
                asChild
                className="h-10 w-10 sm:h-12 sm:w-12 rounded-full hover:bg-primary hover:text-primary-foreground hover:border-primary hover:scale-110 transition-all duration-300 bg-card/50 backdrop-blur-sm border-2 shadow-lg hover:shadow-xl"
              >
                <a
                  href="https://github.com/YashPatel2395/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <Github className="h-4 w-4 sm:h-5 sm:w-5" />
                </a>
              </Button>
              <Button
                variant="outline"
                size="icon"
                asChild
                className="h-10 w-10 sm:h-12 sm:w-12 rounded-full hover:bg-primary hover:text-primary-foreground hover:border-primary hover:scale-110 transition-all duration-300 bg-card/50 backdrop-blur-sm border-2 shadow-lg hover:shadow-xl"
              >
                <a
                  href="https://www.linkedin.com/in/yashkumarkpatel/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-4 w-4 sm:h-5 sm:w-5" />
                </a>
              </Button>
            </div>

            {/* CTA buttons */}
            <div
              className="flex items-center justify-center lg:justify-start gap-3 sm:gap-4 flex-wrap animate-fade-in"
              style={{ animationDelay: "0.5s" }}
            >
              <Button
                size="lg"
                asChild
                className="font-bold text-sm sm:text-base px-6 sm:px-8 py-5 sm:py-6 rounded-full shadow-xl shadow-primary/40 hover:shadow-2xl hover:shadow-primary/50 transition-all duration-300 hover:scale-105 group"
              >
                <a href="#projects" className="flex items-center gap-2">
                  Explore My Work
                  <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={generateResumePDF}
                className="font-bold text-sm sm:text-base px-6 sm:px-8 py-5 sm:py-6 rounded-full hover:bg-accent hover:text-accent-foreground hover:border-accent transition-all duration-300 bg-card/50 backdrop-blur-sm border-2 shadow-lg hover:shadow-xl hover:scale-105 group"
              >
                <Download className="h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-y-0.5 transition-transform duration-300" />
                Download Resume
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="mt-12 sm:mt-20 flex justify-center animate-fade-in" style={{ animationDelay: "0.6s" }}>
          <a href="#about" className="text-muted-foreground hover:text-accent transition-colors duration-300 group">
            <div className="flex flex-col items-center gap-2 sm:gap-3">
              <span className="text-xs uppercase tracking-widest font-semibold">Scroll to explore</span>
              <div className="w-6 h-10 rounded-full border-2 border-current flex items-start justify-center p-2">
                <ChevronDown className="h-4 w-4 animate-bounce" />
              </div>
            </div>
          </a>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }
      `}</style>
    </section>
  )
}
