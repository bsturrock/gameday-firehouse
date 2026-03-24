import { useState } from "react"
import { motion } from "framer-motion"
import { Flame } from "lucide-react"

type MenuCategory = 'tailgate' | 'halftime'

const categories: { id: MenuCategory; label: string; note: string }[] = [
  { id: 'tailgate', label: 'Tailgate Menu', note: 'Available outside before the game' },
  { id: 'halftime', label: 'Halftime Menu', note: 'Served inside at the bar from halftime on' },
]

type MenuItem = { name: string; desc: string; price: string }

const menuData: Record<MenuCategory, MenuItem[]> = {
  tailgate: [
    { name: "Pit Beef", desc: "Hot off the pit, tender beef.", price: "$7" },
    { name: "Pit Turkey", desc: "Hot off the pit, fresh turkey with seasoning.", price: "$7" },
    { name: "Hot Dogs", desc: "1/4 lb. jumbo hot dog, served with optional kraut.", price: "$4" },
    { name: "Maryland Crab Soup", desc: "Homemade crab soup loaded with crab meat, no you can't have the recipe!", price: "$5" },
    { name: "Firehouse Chili", desc: "Spicy homemade firehouse chili. This will keep you warm.", price: "$4" },
  ],
  halftime: [
    { name: "Firehouse Wings", desc: "BBQ, nude, old bay, honey mustard, tangy carolina, buffalo, inferno. Served with ranch or blue cheese.", price: "$8" },
    { name: "Chicken Tenders", desc: "BBQ, honey mustard, inferno, buffalo, tangy carolina.", price: "$7" },
    { name: "Loaded Nachos", desc: "Loaded with cheese, sour cream and jalapeños.", price: "$6" },
    { name: "Mozzarella Sticks", desc: "Served with marinara sauce.", price: "$6" },
    { name: "Firehouse Fries", desc: "Loaded with cheese, bacon and sour cream.", price: "$5" },
  ],
}

export function Menu() {
  const [activeCategory, setActiveCategory] = useState<MenuCategory>('tailgate')

  const safeCategory: MenuCategory = activeCategory in menuData ? activeCategory : 'tailgate'
  const active = categories.find(c => c.id === safeCategory) ?? categories[0]

  return (
    <section id="menu" className="py-24 relative bg-background border-y border-border">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-sm font-display tracking-[0.2em] text-primary flex items-center justify-center gap-2 mb-4">
            <span className="w-8 h-[2px] bg-primary"></span>
            GAME DAY FUEL
            <span className="w-8 h-[2px] bg-primary"></span>
          </h2>
          <h3 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold uppercase tracking-wide text-white">
            The <span className="text-primary">Firehouse Menu</span>
          </h3>
          <p className="mt-4 text-muted-foreground text-lg max-w-2xl mx-auto">
            Real food at real prices. No tickets required.
          </p>
        </div>

        {/* Category Toggles */}
        <div className="flex flex-wrap justify-center gap-4 mb-4">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-8 py-3 rounded-full font-display text-xl tracking-wider transition-all duration-300 ${
                activeCategory === cat.id
                  ? 'bg-primary text-white shadow-[0_0_15px_rgba(255,85,0,0.4)]'
                  : 'bg-card text-foreground/70 hover:bg-card/80 hover:text-white border border-border'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Active tab note */}
        <p className="text-center text-muted-foreground text-sm mb-10 italic">{active.note}</p>

        {/* Menu Items */}
        <div className="max-w-3xl mx-auto space-y-0">
          {menuData[safeCategory].map((item, index) => (
            <motion.div
              key={`${safeCategory}-${index}`}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.25, delay: index * 0.05 }}
              className="group border-b border-border/60 py-6 last:border-0"
            >
              <div className="flex justify-between items-baseline gap-4 mb-1.5">
                <h4 className="text-2xl font-display font-bold text-white group-hover:text-primary transition-colors flex items-center gap-2">
                  {item.name}
                  {index === 0 && <Flame className="w-5 h-5 text-primary" />}
                </h4>
                <span className="text-xl font-bold shrink-0 text-primary">
                  {item.price}
                </span>
              </div>
              <p className="text-muted-foreground font-medium leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Value callout */}
        <div className="mt-16 text-center p-6 rounded-2xl bg-primary/10 border border-primary/20">
          <p className="text-primary font-display text-2xl font-bold">No Admission Charge — Ever</p>
          <p className="text-muted-foreground mt-2 font-medium">
            Come for the game, stay for the food. Prices roughly half of what you'd pay inside the stadium.
          </p>
        </div>
      </div>
    </section>
  )
}
