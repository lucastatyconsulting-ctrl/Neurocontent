import { motion } from 'motion/react';

export function Diagnostic() {
  return (
    <section className="py-24 px-6 lg:px-12 max-w-4xl mx-auto relative z-10 text-center">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative"
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#6c63ff]/10 blur-[80px] rounded-full pointer-events-none" />
        
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-8 text-white relative z-10">
          Le problème n’est pas votre niveau.
        </h2>
        
        <div className="text-base md:text-lg text-white/60 leading-relaxed font-light relative z-10 space-y-4">
          <p>
            <strong className="text-white/90 font-medium">Le problème, c’est l’écart entre ce que vous êtes… et ce que votre image laisse percevoir.</strong><br/><br/>
            Vous pouvez être excellent. Avoir des résultats. Une vraie valeur. Mais si votre présence visuelle ne le prouve pas immédiatement, le cerveau crée un doute.<br/><br/>
            <strong className="text-white/80 font-medium">Et dans un marché saturé : <span className="text-[#ff6b6b]">le doute élimine.</span></strong>
          </p>
        </div>
      </motion.div>
    </section>
  );
}
