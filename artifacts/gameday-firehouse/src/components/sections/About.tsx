import { motion } from "framer-motion"

const highlights = [
  { label: "Opens 4 Hours Before Kickoff", sub: "Every Ravens & Orioles home game" },
  { label: "Official Team Partner", sub: "Baltimore Ravens & Orioles" },
  { label: "No Cover Charge", sub: "Ever" },
  { label: "1202 Ridgely St", sub: "Steps from both stadiums" },
]

export function About() {
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

            </div>
          </motion.div>

        </div>

        {/* Highlights strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px mt-20 rounded-2xl overflow-hidden border border-border bg-border">
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 + index * 0.08 }}
              className="bg-card px-6 py-8 flex flex-col items-center text-center hover:bg-card/80 transition-colors"
            >
              <p className="text-white font-display font-bold text-xl leading-tight mb-1">{item.label}</p>
              <p className="text-muted-foreground text-base font-medium">{item.sub}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
