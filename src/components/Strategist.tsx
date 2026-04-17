import { motion } from 'motion/react';

export function Strategist() {
  return (
    <section className="py-8 md:py-12 px-6 lg:px-12 max-w-5xl mx-auto relative z-10">
      <div className="grid md:grid-cols-12 gap-12 items-center">
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="md:col-span-5 relative"
        >
          <div className="aspect-[3/4] rounded-3xl overflow-hidden relative border border-white/10">
            <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent z-10" />
            <img 
              src="/lucas-taty.jpg" 
              alt="Lucas Taty" 
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#6c63ff]/20 blur-[40px] rounded-full pointer-events-none" />
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="md:col-span-7 space-y-6"
        >
          <div className="inline-block px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-white/60 mb-2">
            Le Stratège
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
            Lucas Taty — <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-[#6c63ff]">L’Architecte derrière la stratégie</span>
          </h2>

          <div className="text-base text-white/60 font-light leading-relaxed space-y-4">
            <p>
              J’ai créé NeuroContent™ après un constat brutal : <strong className="text-white/90 font-medium">des experts brillants et des entreprises solides perdaient des clients face à des concurrents moins compétents… mais visuellement plus convaincants.</strong>
            </p>
            <p>
              La réalité est simple : le marché ne récompense pas la compétence réelle. Il récompense la compétence perçue. Aujourd’hui, nous vivons dans un monde où l’attention est limitée et les décisions sont instantanées.
            </p>
            <p className="border-l-2 border-[#ff6b6b] pl-4 py-1 text-white/80">
              Si votre image ne traduit pas immédiatement votre valeur, vous perdez… même en étant meilleur.
            </p>
            <p>
              Mon rôle est de corriger cet écart. Je ne crée pas simplement du contenu. Je conçois des systèmes qui alignent votre image avec votre niveau réel et qui déclenchent une perception d’autorité immédiate.
            </p>
            <p className="text-lg font-medium text-white pt-2">
              L’IA est un levier. La stratégie fait la différence.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
