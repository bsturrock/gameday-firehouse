import { motion } from "framer-motion"
import { Calendar, MapPin, Clock, ArrowRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export function Events() {
  const upcomingEvents = [
    {
      id: 1,
      title: "Ravens Tailgate vs. Chiefs",
      date: "Sunday, Sept 17",
      time: "9:00 AM - 1:00 PM",
      location: "Gameday Firehouse Lot",
      type: "ravens",
      description: "Join 98Rock and WBAL for the ultimate pre-game party. Live broadcast, drink specials, and full firehouse menu.",
      featured: true
    },
    {
      id: 2,
      title: "Orioles Pre-Game vs. Yankees",
      date: "Friday, Sept 22",
      time: "4:00 PM - 7:00 PM",
      location: "Gameday Firehouse Main Bar",
      type: "orioles",
      description: "$3 Natty Boh drafts, half-price wings, and a short walk to Camden Yards.",
      featured: false
    },
    {
      id: 3,
      title: "Ravens Tailgate vs. Steelers",
      date: "Sunday, Oct 1",
      time: "10:00 AM - 1:00 PM",
      location: "Gameday Firehouse Lot",
      type: "ravens",
      description: "Division rivalry tailgate. Special guest appearances, live DJ, and the best pit beef in Baltimore.",
      featured: false
    }
  ]

  return (
    <section id="events" className="py-24 relative bg-background">
      {/* Decorative gradient */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <h2 className="text-sm font-display tracking-[0.2em] text-primary mb-2 flex items-center gap-2">
              <span className="w-8 h-[2px] bg-primary"></span>
              THE LINEUP
            </h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold uppercase tracking-wide text-white">
              Official Tailgate <span className="text-primary">Events</span>
            </h3>
            <p className="mt-4 text-muted-foreground text-lg">
              We are the official tailgate headquarters for Baltimore sports. 
              Join us before, during, and after the game.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Button variant="outline" className="border-border hover:bg-primary hover:text-white hover:border-primary transition-all">
              View Full Calendar <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {upcomingEvents.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="h-full"
            >
              <Card className={`h-full group hover:border-primary/50 transition-colors duration-300 ${event.featured ? 'border-primary/30 bg-card shadow-[0_0_30px_rgba(255,85,0,0.05)]' : ''}`}>
                <CardContent className="p-0 h-full flex flex-col">
                  {/* Event Header Banner */}
                  <div className={`p-4 ${
                    event.type === 'ravens' ? 'bg-gradient-to-r from-[#241773] to-[#241773]/80' : 
                    event.type === 'orioles' ? 'bg-gradient-to-r from-[#DF4601] to-[#DF4601]/80' : 
                    'bg-primary'
                  }`}>
                    <div className="flex justify-between items-start mb-2">
                      <Badge variant={event.type as any} className="bg-black/30 border border-white/20 text-white hover:bg-black/40">
                        {event.type.toUpperCase()}
                      </Badge>
                      {event.featured && (
                        <Badge variant="outline" className="bg-white text-black border-none animate-pulse">
                          FEATURED
                        </Badge>
                      )}
                    </div>
                    <h4 className="text-2xl font-display font-bold text-white leading-tight mt-2">
                      {event.title}
                    </h4>
                  </div>
                  
                  {/* Event Details */}
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="space-y-3 mb-6 text-foreground/80 font-medium">
                      <div className="flex items-center gap-3">
                        <Calendar className="w-5 h-5 text-primary shrink-0" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Clock className="w-5 h-5 text-primary shrink-0" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <MapPin className="w-5 h-5 text-primary shrink-0" />
                        <span>{event.location}</span>
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground text-sm mb-6 mt-auto">
                      {event.description}
                    </p>
                    
                    <Button variant="secondary" className="w-full mt-auto font-display text-lg tracking-wider">
                      Event Details
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
