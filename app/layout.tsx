import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "Portfolio - AI/ML Engineer & Data Scientist",
  description:
    "AI/ML Engineer & Data Scientist specializing in wireless communications, machine learning, and advanced analytics. Expert in TensorFlow, PyTorch, and Beyond 5G technologies.",
  generator: "v0.app",
  keywords: ["AI", "Machine Learning", "Data Science", "Wireless Communications", "TensorFlow", "PyTorch"],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
