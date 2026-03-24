import { useState } from "react"
import { motion } from "framer-motion"
import { Flame } from "lucide-react"

type MenuCategory = 'apps' | 'mains' | 'drinks'

export function Menu() {
  const [activeCategory, setActiveCategory] = useState<MenuCategory>('apps')

  const menuData = {
    apps: [
      { name: "5-Alarm Buffalo Wings", desc: "Award-winning jumbo wings tossed in our signature house-made spicy buffalo sauce. Served with celery and blue cheese.", price: "$15" },
      { name: "First Responder Nachos", desc: "Tortilla chips piled high with melted queso, jalapeños, pico de gallo, black beans, and sour cream. Add chicken or chili +$4.", price: "$13" },
      { name: "Siren Pretzel", desc: "Giant Bavarian soft pretzel served warm with spicy brown mustard and our house beer cheese dip.", price: "$11" },
      { name: "Engine 4 Crab Dip", desc: "Classic Maryland-style creamy crab dip topped with melted cheddar, served with toasted baguette slices.", price: "$18" },
    ],
    mains: [
      { name: "The Chief Burger", desc: "Half-pound Angus beef patty, thick-cut bacon, sharp cheddar, crispy onion ring, and BBQ sauce on a brioche bun.", price: "$17" },
      { name: "Ladder 15 Chicken Sandwich", desc: "Crispy fried chicken breast dipped in hot honey, house pickles, and slaw.", price: "$16" },
      { name: "Camden Pit Beef", desc: "Thinly sliced, slow-roasted pit beef served medium-rare with raw onion and tiger sauce on a kaiser roll.", price: "$18" },
      { name: "Firehouse Chili", desc: "Hearty, spicy ground beef and bean chili topped with shredded cheese and green onions.", price: "$12" },
    ],
    drinks: [
      { name: "Draft Beers", desc: "Over 24 rotating taps featuring local Baltimore favorites like Heavy Seas, Union Craft, and classic domestics.", price: "Varies" },
      { name: "The Backdraft", desc: "Our signature spicy margarita with jalapeño-infused tequila, fresh lime, agave, and a Tajin rim.", price: "$12" },
      { name: "Orange Crush", desc: "The Baltimore classic: Orange vodka, triple sec, fresh squeezed OJ, and a splash of lemon-lime soda.", price: "$10" },
      { name: "Natty Boh Tall Boy", desc: "The official beer of Baltimore baseball. 16oz can.", price: "$5" },
    ]
  }

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
            The <span className="text-primary">Starting Lineup</span>
          </h3>
        </div>

        {/* Category Toggles */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {[
            { id: 'apps', label: 'Appetizers' },
            { id: 'mains', label: 'Main Events' },
            { id: 'drinks', label: 'Liquid Roster' }
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id as MenuCategory)}
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

        {/* Menu Items */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Text Menu */}
          <div className="space-y-8">
            {menuData[activeCategory].map((item, index) => (
              <motion.div 
                key={`${activeCategory}-${index}`}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="group"
              >
                <div className="flex justify-between items-baseline mb-2">
                  <h4 className="text-2xl font-display font-bold text-white group-hover:text-primary transition-colors flex items-center gap-2">
                    {item.name}
                    {index === 0 && <Flame className="w-5 h-5 text-primary" />}
                  </h4>
                  <div className="flex-1 border-b border-dashed border-border mx-4 relative top-[-6px]"></div>
                  <span className="text-xl font-bold text-primary">{item.price}</span>
                </div>
                <p className="text-muted-foreground font-medium pr-12 leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Featured Image */}
          <div className="hidden lg:flex items-center justify-center">
            <motion.div 
              key={activeCategory} // Force re-render/animation on category change
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="relative w-full max-w-md aspect-square rounded-full overflow-hidden border-8 border-card shadow-[0_0_40px_rgba(255,85,0,0.1)]"
            >
              {/* Fallbacks provided via Unsplash if generated images fail */}
              <img 
                src={`${import.meta.env.BASE_URL}images/${
                  activeCategory === 'apps' ? 'wings-platter.png' :
                  activeCategory === 'mains' ? 'burger.png' : 'draft-beer.png'
                }`}
                onError={(e) => {
                  const target = e.currentTarget;
                  if (activeCategory === 'apps') target.src = "https://images.unsplash.com/photo-1524114664604-cd8133cd67ad?w=800&q=80";
                  if (activeCategory === 'mains') target.src = "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&q=80";
                  if (activeCategory === 'drinks') target.src = "https://images.unsplash.com/photo-1575037614876-c38eb2c129e9?w=800&q=80";
                }}
                alt={`Featured ${activeCategory}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
