import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Features } from "@/components/features"
import { Testimonials } from "@/components/testimonials"
import { Projects } from "@/components/projects"
import { InteractiveModel } from "@/components/interactive-model"
import { SystemDesign } from "@/components/system-design"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { ThemeToggle } from "@/components/theme-toggle"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <Projects />
      <SystemDesign />
      {/* <InteractiveModel /> */}
      <Testimonials />
      <Contact />
      <Footer />
      <div className="fixed bottom-5 right-5 z-50">
        <ThemeToggle />
      </div>
    </main>
  )
}