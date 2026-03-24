import { MapPin, Phone, Clock, Facebook, Twitter, Instagram } from "lucide-react"

export function Footer() {
  return (
    <footer id="contact" className="bg-black pt-20 pb-10 border-t-4 border-primary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

          {/* Brand Col */}
          <div className="space-y-6">
            <div className="w-32">
              <img
                src={`${import.meta.env.BASE_URL}gd_logo.png`}
                alt="Gameday Firehouse Logo"
                className="w-full h-auto drop-shadow-lg grayscale contrast-125 brightness-150"
              />
            </div>
            <p className="text-muted-foreground font-medium pr-4">
              Baltimore's home for sports, cold beer, and the best tailgate parties in the city.
            </p>
            <div className="flex gap-4">
              <a href="https://www.facebook.com/GamedayFirehouse/" target="_blank" rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-card flex items-center justify-center text-foreground hover:bg-primary hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-card flex items-center justify-center text-foreground hover:bg-primary hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-card flex items-center justify-center text-foreground hover:bg-primary hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display text-2xl text-white tracking-widest mb-6 relative inline-block after:absolute after:-bottom-2 after:left-0 after:w-1/2 after:h-1 after:bg-primary">Contact Us</h4>
            <ul className="space-y-4 text-muted-foreground font-medium">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span>1202 Ridgely St<br/>Baltimore, MD 21230</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <span>(410) 234-0734</span>
              </li>
              <li className="mt-2 text-sm text-muted-foreground/70 italic">
                Steps from M&T Bank Stadium &amp; Oriole Park at Camden Yards
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-display text-2xl text-white tracking-widest mb-6 relative inline-block after:absolute after:-bottom-2 after:left-0 after:w-1/2 after:h-1 after:bg-primary">Game Day Hours</h4>
            <ul className="space-y-3 text-muted-foreground font-medium">
              <li className="flex items-start gap-3 pb-2 border-b border-border/50">
                <Clock className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <p className="text-white font-semibold">Ravens Home Games</p>
                  <p className="text-sm">Opens 4 hours before kickoff</p>
                </div>
              </li>
              <li className="flex items-start gap-3 pb-2 border-b border-border/50">
                <Clock className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <p className="text-white font-semibold">Orioles Home Games</p>
                  <p className="text-sm">Opens hours before first pitch</p>
                </div>
              </li>
              <li className="mt-4 text-xs text-primary/80 italic">
                * Follow us on Facebook for exact event times & announcements.
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-2xl text-white tracking-widest mb-6 relative inline-block after:absolute after:-bottom-2 after:left-0 after:w-1/2 after:h-1 after:bg-primary">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { label: 'Home', href: '#' },
                { label: 'Events & Tailgates', href: '#events' },
                { label: 'Menu', href: '#menu' },
                { label: 'About Us', href: '#about' },
                { label: 'Contact', href: '#contact' },
              ].map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-muted-foreground font-medium hover:text-primary transition-colors flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/50"></span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        <div className="border-t border-border/50 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground/60 font-medium">
          <p>&copy; {new Date().getFullYear()} Gameday Firehouse. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
