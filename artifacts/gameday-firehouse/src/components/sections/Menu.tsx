import { useState } from "react"
import { motion } from "framer-motion"
import { Flame } from "lucide-react"

type MenuCategory = 'tailgate' | 'halftime'

const categories: { id: MenuCategory; label: string; note: string }[] = [
  { id: 'tailgate', label: 'Tailgate Menu', note: 'Available before the game' },
  { id: 'halftime', label: 'Halftime Menu', note: 'Served from halftime on, inside at the bar' },
]

type MenuItem = { name: string; desc: string; price: string }

const menuData: Record<MenuCategory, MenuItem[]> = {
  tailgate: [
    { name: "Pit Beef Sandwich", desc: "Tender, juicy pit beef hot off the pit.", price: "$7" },
    { name: "Pit Ham Sandwich", desc: "Hot off the pit.", price: "Ask" },
    { name: "Pit Turkey Sandwich", desc: "Fresh turkey with seasoning, straight from the pit.", price: "Ask" },
    { name: "Jumbo Hot Dog", desc: "1/4 lb jumbo hot dog. Add kraut — same price.", price: "$4" },
    { name: "Sausage", desc: "Fresh sausage, game day staple.", price: "Ask" },
    { name: "Wings", desc: "Choice of sauce: BBQ, Nude, Old Bay, Honey Mustard, Tangy Carolina, Buffalo, or Inferno. Served with ranch or blue cheese.", price: "$8" },
    { name: "Mozzarella Sticks", desc: "Served with marinara sauce.", price: "$6" },
    { name: "Loaded Potato", desc: "Topped with cheese, bacon, and sour cream.", price: "$5" },
    { name: "Loaded Nachos", desc: "Cheese, sour cream, and jalapeños.", price: "$6" },
    { name: "Firehouse Fries", desc: "Topped with cheese, bacon, and sour cream.", price: "$5" },
    { name: "Maryland Crab Soup", desc: "Homemade with crab meat — a secret recipe that keeps fans coming back.", price: "$5" },
    { name: "Firehouse Chili", desc: "Spicy homemade chili, perfect for cold game days.", price: "$4" },
  ],
  halftime: [
    { name: "Wings", desc: "Choice of sauce: BBQ, Nude, Old Bay, Honey Mustard, Tangy Carolina, Buffalo, or Inferno. Served with ranch or blue cheese.", price: "$8" },
    { name: "Mozzarella Sticks", desc: "Served with marinara sauce.", price: "$6" },
    { name: "Loaded Potato", desc: "Topped with cheese, bacon, and sour cream.", price: "$5" },
    { name: "Loaded Nachos", desc: "Cheese, sour cream, and jalapeños.", price: "$6" },
    { name: "Firehouse Fries", desc: "Topped with cheese, bacon, and sour cream.", price: "$5" },
    { name: "Maryland Crab Soup", desc: "Homemade with crab meat — a secret recipe that keeps fans coming back.", price: "$5" },
    { name: "Firehouse Chili", desc: "Spicy homemade chili, perfect for cold game days.", price: "$4" },
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
            Real food at prices you won't find inside the stadium.
            Run by Baltimore Firefighters who know how to feed a crowd.
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
                <span className={`text-xl font-bold shrink-0 ${item.price === 'Ask' ? 'text-muted-foreground' : 'text-primary'}`}>
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
            All tips and proceeds benefit the{" "}
            <span className="text-white font-semibold">Baltimore Firefighters Widows & Orphans Fund</span>.
          </p>
        </div>
      </div>
    </section>
  )
}
