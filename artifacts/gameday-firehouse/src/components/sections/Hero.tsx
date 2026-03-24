import { motion } from "framer-motion"
import { MapPin, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  const scrollToEvents = () => {
    document.querySelector('#events')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="relative min-h-[90vh] flex items-center justify-center pt-20 overflow-hidden bg-background">
      {/* Background layers */}
      <div className="absolute inset-0 z-0">
        {/* Static photo — always shown, acts as base and mobile background */}
        <img
          src={`${import.meta.env.BASE_URL}images/bar-atmosphere.png`}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover object-center opacity-60"
        />

        {/* YouTube iframe — desktop only, plays over the photo when available */}
        <div className="hidden md:block absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
          <iframe
            src="https://www.youtube.com/embed/qiI-da7aR3A?autoplay=1&mute=1&loop=1&playlist=qiI-da7aR3A&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1&enablejsapi=1"
            allow="autoplay; encrypted-media"
            allowFullScreen
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            style={{
              width: 'calc(100vw + 200px)',
              height: 'calc(56.25vw + 120px)',
              minWidth: '100%',
              minHeight: '100%',
              border: 'none',
              opacity: 0.55,
            }}
            title="Gameday Firehouse background"
          />
        </div>

        {/* Overlays to darken and add brand feel */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-background/80"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,85,0,0.08),transparent_60%)] animate-pulse" style={{ animationDuration: '4s' }}></div>
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-6 flex flex-col items-center text-center mt-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl flex flex-col items-center"
        >
          {/* Logo */}
          <div className="w-48 md:w-64 lg:w-72 mb-8 relative">
            <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full"></div>
            <img
              src={`${import.meta.env.BASE_URL}gd_logo.png`}
              alt="Gameday Firehouse"
              className="w-full h-auto relative z-10 drop-shadow-2xl"
            />
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/40 border border-primary/30 backdrop-blur-sm mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse shrink-0"></span>
            <span className="text-xs sm:text-sm font-medium tracking-widest uppercase text-primary-foreground/90 whitespace-nowrap">
              Baltimore's Official Tailgate HQ
            </span>
          </motion.div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-white mb-6 leading-[0.9] text-glow tracking-wide">
            WHERE EVERY DAY IS <span className="text-primary">GAMEDAY</span>
          </h1>

          <p className="text-lg md:text-xl text-foreground/80 max-w-2xl mb-10 font-medium">
            Proud tailgate partners of the <span className="text-[#9B7FD4] font-bold">Baltimore Ravens</span> & <span className="text-[#DF4601] font-bold">Orioles</span>.
            Cold drinks, hot food, and the best sports atmosphere in the city.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
            <Button size="lg" onClick={scrollToEvents} className="w-full sm:w-auto text-lg shadow-[0_0_20px_rgba(255,85,0,0.4)]">
              <Calendar className="mr-2 w-5 h-5" />
              View Tailgate Events
            </Button>
            <Button variant="outline" size="lg" className="w-full sm:w-auto text-lg bg-black/20 backdrop-blur-sm border-foreground/20 text-foreground hover:bg-white/10 hover:text-white" onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}>
              <MapPin className="mr-2 w-5 h-5" />
              Find The Firehouse
            </Button>
          </div>
        </motion.div>
      </div>

    </section>
  )
}
