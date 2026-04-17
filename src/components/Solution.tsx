import { motion } from 'motion/react';

export function Solution() {
  return (
    <section className="py-8 md:py-12 px-6 lg:px-12 max-w-4xl mx-auto relative z-10 text-center">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative"
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg h-64 bg-[#6c63ff]/15 blur-[100px] rounded-full pointer-events-none" />
        
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-8 text-white relative z-10 leading-tight">
          Vous n’avez pas un problème de marketing.<br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6c63ff] to-indigo-400">Vous avez un problème de perception.</span>
        </h2>
        
        <div className="text-base md:text-lg text-white/60 leading-relaxed font-light relative z-10 space-y-6">
          <p>
            Plus de contenu ne corrigera pas ça. Ce qu’il faut, c’est un système capable de capter l’attention immédiatement, d'inspirer confiance sans explication, et de positionner votre image au niveau de votre valeur.
          </p>

          <p className="text-xl md:text-2xl font-semibold text-white">
            NeuroContent™ transforme votre présence en levier d’autorité.
          </p>
          
          <div className="pt-6 border-t border-white/10 inline-block">
            <p className="text-white/50 text-xs uppercase tracking-widest mb-2">Résultat</p>
            <p className="text-lg md:text-xl text-white/90 font-medium">
              Vous ne cherchez plus à convaincre.<br/>
              <span className="text-[#6c63ff]">Vous êtes déjà validé.</span>
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
