import { motion } from "framer-motion"

export function Partnerships() {
  return (
    <section className="py-16 bg-card border-b border-border">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-10">
          <h3 className="text-sm font-display tracking-[0.2em] text-muted-foreground uppercase">
            Official Proud Partners Of
          </h3>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-80 hover:opacity-100 transition-opacity duration-300">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center gap-3"
          >
            <div className="w-24 h-24 rounded-full bg-[#241773] flex items-center justify-center text-white font-display text-4xl shadow-lg border-2 border-[#D2AA4A]/30">
              BAL
            </div>
            <span className="font-display tracking-wider text-xl">RAVENS</span>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex flex-col items-center gap-3"
          >
            <div className="w-24 h-24 rounded-full bg-[#DF4601] flex items-center justify-center text-white font-display text-4xl shadow-lg border-2 border-white/20">
              O'S
            </div>
            <span className="font-display tracking-wider text-xl">ORIOLES</span>
          </motion.div>

          <div className="w-px h-16 bg-border hidden md:block"></div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col items-center gap-2"
          >
            <span className="font-display text-4xl font-bold text-red-600 tracking-wider">98ROCK</span>
            <span className="text-xs text-muted-foreground uppercase font-bold tracking-widest">97.9 Baltimore</span>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-col items-center gap-2"
          >
            <span className="font-display text-4xl font-bold text-blue-500 tracking-wider">WBAL</span>
            <span className="text-xs text-muted-foreground uppercase font-bold tracking-widest">News Radio</span>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
