import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "DMI - Luxury Home Automation for Custom Builders",
  description:
    "Premium home automation solutions for custom home builders in Colorado. Expertise in system design, AutoCAD & Revit, and dedicated project management.",
  openGraph: {
    title: "DMI - Luxury Home Automation for Custom Builders",
    description:
      "Premium home automation solutions for custom home builders in Colorado. Expertise in system design, AutoCAD & Revit, and dedicated project management.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "DMI Luxury Home Automation",
      },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

