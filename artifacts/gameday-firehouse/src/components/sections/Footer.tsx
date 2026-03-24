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
              <a href="#" className="w-10 h-10 rounded-full bg-card flex items-center justify-center text-foreground hover:bg-primary hover:text-white transition-colors">
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
                <span>1015 Washington Blvd<br/>Baltimore, MD 21230</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <span>(410) 244-8900</span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-display text-2xl text-white tracking-widest mb-6 relative inline-block after:absolute after:-bottom-2 after:left-0 after:w-1/2 after:h-1 after:bg-primary">Hours</h4>
            <ul className="space-y-3 text-muted-foreground font-medium">
              <li className="flex justify-between border-b border-border/50 pb-2">
                <span>Mon - Thu</span>
                <span className="text-white">11:00 AM - 2:00 AM</span>
              </li>
              <li className="flex justify-between border-b border-border/50 pb-2">
                <span>Fri - Sat</span>
                <span className="text-primary font-bold">11:00 AM - 3:00 AM</span>
              </li>
              <li className="flex justify-between border-b border-border/50 pb-2">
                <span>Sunday</span>
                <span className="text-white">11:00 AM - 2:00 AM</span>
              </li>
              <li className="mt-4 text-xs text-primary/80 italic">
                * Hours may vary on Ravens & Orioles home game days.
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-2xl text-white tracking-widest mb-6 relative inline-block after:absolute after:-bottom-2 after:left-0 after:w-1/2 after:h-1 after:bg-primary">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'Events Calendar', 'Food Menu', 'Drink Menu', 'Private Parties', 'Careers'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-muted-foreground font-medium hover:text-primary transition-colors flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/50"></span>
                    {link}
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
