import { Navbar } from "@/components/layout/Navbar"
import { Hero } from "@/components/sections/Hero"
import { Partnerships } from "@/components/sections/Partnerships"
import { About } from "@/components/sections/About"
import { Events } from "@/components/sections/Events"
import { Menu } from "@/components/sections/Menu"
import { Footer } from "@/components/sections/Footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-background w-full overflow-x-hidden selection:bg-primary selection:text-white">
      <Navbar />
      
      <main>
        <Hero />
        <Partnerships />
        <About />
        <Events />
        <Menu />
      </main>

      <Footer />
    </div>
  )
}
