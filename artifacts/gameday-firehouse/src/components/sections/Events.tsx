import { motion } from "framer-motion"
import { MapPin, Clock, Tv } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export function Events() {
  const tailgateInfo = [
    {
      icon: <Clock className="w-7 h-7" />,
      title: "Opens 4 Hours Early",
      desc: "We open the gates before every Ravens and Orioles home game so you can settle in, grab a cold one, and get fired up.",
      color: "ravens"
    },
    {
      icon: <Tv className="w-7 h-7" />,
      title: "Watch Inside If You Don't Have Tickets",
      desc: "No ticket? No problem. Come inside and catch every play on our TVs. Full-service bar, full menu, full game day atmosphere.",
      color: "orioles"
    },
  ]

  const partnerBadges = [
    {
      type: "ravens",
      team: "Baltimore Ravens",
      role: "Official Tailgate Partner",
      stadium: "M&T Bank Stadium",
      color: "from-[#241773] to-[#241773]/80",
    },
    {
      type: "orioles",
      team: "Baltimore Orioles",
      role: "Official Tailgate Partner",
      stadium: "Oriole Park at Camden Yards",
      color: "from-[#DF4601] to-[#DF4601]/80",
    },
  ]

  return (
    <section id="events" className="py-24 relative bg-background">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>

      <div className="container mx-auto px-4 md:px-6">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-sm font-display tracking-[0.2em] text-primary mb-4 flex items-center justify-center gap-2">
            <span className="w-8 h-[2px] bg-primary"></span>
            EVERY HOME GAME
            <span className="w-8 h-[2px] bg-primary"></span>
          </h2>
          <h3 className="text-4xl md:text-5xl font-display font-bold uppercase tracking-wide text-white">
            Official Tailgate <span className="text-primary">HQ</span>
          </h3>
          <p className="mt-4 text-muted-foreground text-lg max-w-2xl mx-auto">
            Baltimore's only official tailgate partner for <strong className="text-white">both</strong> the Ravens and the Orioles.
            Steps from both stadiums. Open before and during every home game.
          </p>
        </motion.div>

        {/* Official Partner Badges */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16 max-w-3xl mx-auto">
          {partnerBadges.map((badge, i) => (
            <motion.div
              key={badge.team}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
            >
              <div className={`rounded-2xl overflow-hidden border-2 ${badge.type === 'ravens' ? 'border-[#241773]' : 'border-[#DF4601]'} shadow-lg`}>
                <div className={`bg-gradient-to-br ${badge.color} p-6 text-center`}>
                  <p className="text-white/80 text-sm font-display tracking-[0.2em] uppercase mb-1">{badge.role}</p>
                  <h4 className="text-3xl font-display font-bold text-white">{badge.team}</h4>
                  <div className="flex items-center justify-center gap-2 mt-3 text-white/70 text-sm">
                    <MapPin className="w-4 h-4" />
                    <span>{badge.stadium}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tailgate Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {tailgateInfo.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="h-full"
            >
              <Card className="h-full hover:border-primary/50 transition-colors duration-300">
                <CardContent className="p-6 flex gap-5 h-full">
                  <div className={`shrink-0 w-14 h-14 rounded-xl flex items-center justify-center ${
                    item.color === 'ravens'
                      ? 'bg-[#241773]/20 text-[#D2AA4A]'
                      : 'bg-[#DF4601]/20 text-[#DF4601]'
                  }`}>
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-display font-bold text-white mb-2">{item.title}</h4>
                    <p className="text-muted-foreground font-medium leading-relaxed text-sm">{item.desc}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Radio Partners */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-6 p-8 rounded-2xl bg-card border border-border"
        >
          <p className="text-muted-foreground font-display text-lg tracking-wider uppercase">Radio Partners</p>
          <div className="flex items-center gap-8 flex-wrap justify-center">
            <div className="text-center">
              <p className="text-2xl font-display font-bold text-white">98Rock</p>
              <p className="text-sm text-muted-foreground">97.9 Baltimore</p>
            </div>
            <div className="w-px h-10 bg-border hidden sm:block"></div>
            <div className="text-center">
              <p className="text-2xl font-display font-bold text-white">WBAL</p>
              <p className="text-sm text-muted-foreground">1090 AM / 101.5 FM News Radio</p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
