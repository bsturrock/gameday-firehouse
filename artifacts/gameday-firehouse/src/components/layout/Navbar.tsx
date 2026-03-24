import { useState, useEffect } from "react"
import { Link } from "wouter"
import { Menu, X, Flame } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Events", href: "#events" },
    { name: "Menu", href: "#menu" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ]

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false)
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent",
        isScrolled
          ? "bg-background/95 backdrop-blur-md border-border/50 shadow-md py-3"
          : "bg-gradient-to-b from-black/80 to-transparent py-5"
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <a 
            href="#home" 
            onClick={(e) => { e.preventDefault(); handleNavClick('#home') }}
            className="flex items-center gap-3 group"
          >
            <div className="relative w-10 h-12 overflow-hidden flex-shrink-0">
              <img 
                src={`${import.meta.env.BASE_URL}gd_logo.png`} 
                alt="Gameday Firehouse Logo" 
                className="object-contain w-full h-full drop-shadow-[0_0_8px_rgba(255,85,0,0.5)] transition-transform group-hover:scale-105 duration-300"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.nextElementSibling?.classList.remove('hidden');
                }}
              />
              <Flame className="w-10 h-10 text-primary hidden animate-pulse" />
            </div>
            <div className="flex flex-col">
              <span className="font-display text-2xl leading-none text-white tracking-wider group-hover:text-primary transition-colors">
                GAMEDAY
              </span>
              <span className="font-display text-xl leading-none text-primary/90 tracking-widest">
                FIREHOUSE
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href) }}
                className="font-display text-lg tracking-wide text-foreground/80 hover:text-primary transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-primary after:transition-all hover:after:w-full"
              >
                {link.name}
              </a>
            ))}
            <Button 
              variant="default" 
              className="ml-4 bg-primary hover:bg-primary/90 text-white shadow-[0_0_15px_rgba(255,85,0,0.3)]"
              onClick={() => handleNavClick('#contact')}
            >
              Get Directions
            </Button>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <div
        className={cn(
          "md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-xl border-b border-border shadow-xl transition-all duration-300 overflow-hidden flex flex-col",
          mobileMenuOpen ? "max-h-[400px] py-4" : "max-h-0"
        )}
      >
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            onClick={(e) => { e.preventDefault(); handleNavClick(link.href) }}
            className="px-6 py-3 font-display text-xl tracking-wide text-foreground hover:text-primary hover:bg-muted/50 transition-colors border-b border-border/50 last:border-0"
          >
            {link.name}
          </a>
        ))}
      </div>
    </header>
  )
}
