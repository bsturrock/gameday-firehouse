import { motion } from "framer-motion"
import { Shield, Beer, Flame, MapPin } from "lucide-react"

export function About() {
  const stats = [
    { icon: <Beer className="w-8 h-8" />, value: "$3", label: "Cold Beers" },
    { icon: <Shield className="w-8 h-8" />, value: "2", label: "Official Team Partnerships" },
    { icon: <Flame className="w-8 h-8" />, value: "~½", label: "Stadium Prices" },
    { icon: <MapPin className="w-8 h-8" />, value: "2 Blocks", label: "From the Stadiums" },
  ]

  return (
    <section id="about" className="py-24 relative bg-card/50 overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(ellipse_at_top_right,rgba(255,85,0,0.05),transparent_50%)]"></div>
      <div className="absolute bottom-0 left-0 w-1/2 h-full bg-[radial-gradient(ellipse_at_bottom_left,rgba(36,23,115,0.05),transparent_50%)]"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-sm font-display tracking-[0.2em] text-primary flex items-center gap-2">
              <span className="w-8 h-[2px] bg-primary"></span>
              OUR STORY
            </h2>
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold uppercase tracking-wide text-white leading-none">
              Baltimore's <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-400">
                Official Tailgate HQ
              </span>
            </h3>

            <div className="space-y-4 text-lg text-muted-foreground pt-4 font-medium">
              <p>
                Located just steps from M&T Bank Stadium and Oriole Park at Camden Yards at
                <span className="text-white font-semibold"> 1202 Ridgely St, Baltimore</span>,
                the Gameday Firehouse is Baltimore's most beloved game-day gathering spot.
              </p>
              <p>
                We're the <span className="text-white font-semibold">official tailgate partner of both the Baltimore Ravens and the Baltimore Orioles</span>,
                with events running 4 hours before every home game.
              </p>
              <p>
                Whether you're grabbing a cold one before first pitch or joining hundreds of fans
                for an all-out tailgate with 98Rock and WBAL, the Firehouse is where the game truly begins.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-border relative group shadow-2xl">
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500 z-10"></div>
              <img
                src={`${import.meta.env.BASE_URL}images/bar-atmosphere.png`}
                onError={(e) => {
                  e.currentTarget.src = "https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=800&q=80";
                }}
                alt="Inside the Gameday Firehouse"
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
              />

              {/* Floating Badge */}
              <div className="absolute -bottom-6 -left-6 bg-card border border-border p-6 rounded-xl shadow-xl z-20 hidden md:block">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center text-primary">
                    <MapPin className="w-8 h-8" />
                  </div>
                  <div>
                    <p className="font-display text-2xl font-bold uppercase text-white">Steps From</p>
                    <p className="text-muted-foreground font-medium">Both Stadiums</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + (index * 0.1) }}
              className="flex flex-col items-center text-center p-6 rounded-xl bg-background border border-border hover:border-primary/50 transition-colors"
            >
              <div className="text-primary mb-4 p-3 bg-primary/10 rounded-full">
                {stat.icon}
              </div>
              <h4 className="text-4xl font-display font-bold text-white mb-2">{stat.value}</h4>
              <p className="text-sm text-muted-foreground uppercase font-semibold tracking-wider">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
