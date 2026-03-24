import { useState } from "react"
import { motion } from "framer-motion"
import { Flame } from "lucide-react"

type MenuCategory = 'tailgate' | 'wings' | 'drinks'

export function Menu() {
  const [activeCategory, setActiveCategory] = useState<MenuCategory>('tailgate')

  const menuData = {
    tailgate: [
      { name: "Pit Beef Sandwich", desc: "Thinly sliced, slow-roasted pit beef cooked over an open pit. Served on a kaiser roll with raw onion and tiger sauce.", price: "$7" },
      { name: "Pit Ham Sandwich", desc: "Hot off the pit, tender sliced pit ham piled high on a kaiser roll.", price: "Market" },
      { name: "Pit Turkey Sandwich", desc: "Fresh pit-roasted turkey, carved fresh and served on a kaiser roll.", price: "Market" },
      { name: "1/4 lb Jumbo Hot Dog", desc: "Thick, juicy jumbo hot dog — add kraut for the same price.", price: "$4" },
      { name: "Firehouse Chili", desc: "Spicy homemade chili perfect for cold game days. A firehouse staple.", price: "$4" },
      { name: "Maryland Crab Soup", desc: "Homemade crab soup packed with real crab meat. A secret recipe that keeps fans coming back.", price: "$5" },
      { name: "Loaded Potato", desc: "A hearty baked potato loaded with cheese, bacon, and sour cream.", price: "$5" },
      { name: "Mozzarella Sticks", desc: "Golden, crispy fried mozzarella served with marinara dipping sauce.", price: "Market" },
    ],
    wings: [
      { name: "Wings", desc: "Jumbo wings available in 8 sauces: BBQ, Nude, Old Bay, Honey Mustard, Tangy Carolina, Buffalo, Inferno. Served with ranch or blue cheese.", price: "$8" },
      { name: "Inferno Wings", desc: "Our hottest wing — for serious heat seekers only. All the same jumbo goodness with maximum fire.", price: "$8" },
      { name: "Old Bay Wings", desc: "A Maryland classic. Jumbo wings dusted in the iconic Old Bay seasoning. Pure Baltimore.", price: "$8" },
      { name: "Honey Mustard Wings", desc: "Sweet and tangy honey mustard glaze over our jumbo wings. Served with ranch or blue cheese.", price: "$8" },
    ],
    drinks: [
      { name: "Cold Beer", desc: "Domestic and imported beers on tap and in cans. Cold, refreshing, and priced right — roughly half of stadium prices.", price: "$3" },
      { name: "Shots", desc: "A wide selection of spirits for your pre-game shot. Full-service bar available inside the Firefighters Union Hall.", price: "$5" },
      { name: "Orange Crush", desc: "The Baltimore classic! Fresh-squeezed orange juice, vodka, triple sec, and lemon-lime soda. Served ice cold.", price: "$7" },
      { name: "Full Bar", desc: "Full-service bar inside the Firefighters Union Hall — open to the public on game days. A proper bar experience at tailgate prices.", price: "Varies" },
    ]
  }

  const categories = [
    { id: 'tailgate' as MenuCategory, label: 'Tailgate Menu' },
    { id: 'wings' as MenuCategory, label: 'Wings' },
    { id: 'drinks' as MenuCategory, label: 'Drinks' },
  ]

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
            Real food, real prices — roughly half of what you'd pay inside the stadium.
            Run by Baltimore Firefighters who know how to feed a crowd.
          </p>
        </div>

        {/* Category Toggles */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
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

        {/* Menu Items */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Text Menu */}
          <div className="space-y-8">
            {menuData[activeCategory].map((item, index) => (
              <motion.div
                key={`${activeCategory}-${index}`}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.07 }}
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
              key={activeCategory}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="relative w-full max-w-md aspect-square rounded-full overflow-hidden border-8 border-card shadow-[0_0_40px_rgba(255,85,0,0.1)]"
            >
              <img
                src={`${import.meta.env.BASE_URL}images/${
                  activeCategory === 'wings' ? 'wings-platter.png' :
                  activeCategory === 'drinks' ? 'draft-beer.png' : 'burger.png'
                }`}
                onError={(e) => {
                  const target = e.currentTarget;
                  if (activeCategory === 'wings') target.src = "https://images.unsplash.com/photo-1524114664604-cd8133cd67ad?w=800&q=80";
                  if (activeCategory === 'drinks') target.src = "https://images.unsplash.com/photo-1575037614876-c38eb2c129e9?w=800&q=80";
                  else target.src = "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&q=80";
                }}
                alt={`Featured ${activeCategory}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-8 left-0 right-0 text-center">
                <p className="text-white font-display text-xl font-bold tracking-wider drop-shadow-lg">Half Stadium Prices</p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Value callout */}
        <div className="mt-16 text-center p-6 rounded-2xl bg-primary/10 border border-primary/20">
          <p className="text-primary font-display text-2xl font-bold">No Admission Charge — Ever</p>
          <p className="text-muted-foreground mt-2 font-medium">
            All tips and proceeds benefit the <span className="text-white font-semibold">Baltimore Firefighters Widows & Orphans Fund</span>.
            Come for the game, stay for the cause.
          </p>
        </div>
      </div>
    </section>
  )
}
