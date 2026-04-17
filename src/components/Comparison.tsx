import { motion } from 'motion/react';
import { X, Check } from 'lucide-react';

const others = [
  "Être visible",
  "Produire du contenu",
  "Poster régulièrement",
  "Convaincre"
];

const us = [
  "Être dominant",
  "Construire une autorité",
  "Système scalable",
  "Être évident"
];

export function Comparison() {
  return (
    <section className="py-8 md:py-12 px-6 lg:px-12 max-w-7xl mx-auto relative z-10">
      <div className="text-center mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-block px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-white/60 mb-6"
        >
          Comparaison
        </motion.div>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-5xl font-bold tracking-tight mb-6"
        >
          Deux manières d’exister <br className="hidden sm:block"/> sur votre marché.
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-white/60 max-w-2xl mx-auto text-lg italic"
        >
          "Certains cherchent à exister. D’autres deviennent incontournables."
        </motion.p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">
        {/* Other Agencies */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-white/[0.02] border border-white/[0.05] rounded-[2rem] p-8 lg:p-10"
        >
          <div className="text-xs font-medium text-white/40 uppercase tracking-wider mb-2">Approche Classique</div>
          <h3 className="text-2xl font-bold text-white/80 mb-8">Marketing Traditionnel</h3>
          
          <ul className="space-y-6">
            {others.map((item, i) => (
              <li key={i} className="flex items-center gap-4 text-white/60 text-lg">
                <X className="w-5 h-5 text-white/30 shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Us */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative bg-gradient-to-b from-[#6c63ff]/10 to-white/[0.02] border border-[#6c63ff]/20 rounded-[2rem] p-8 lg:p-10 overflow-hidden"
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-32 bg-[#6c63ff]/10 blur-[50px] pointer-events-none" />
          
          <div className="relative z-10">
            <div className="text-xs font-medium text-[#6c63ff] uppercase tracking-wider mb-2">Neuro-Optimisé</div>
            <h3 className="text-2xl font-bold text-white mb-8">NeuroContent™</h3>
            
            <ul className="space-y-6">
              {us.map((item, i) => (
                <li key={i} className="flex items-center gap-4 text-white/90 text-lg font-medium">
                  <Check className="w-5 h-5 text-[#6c63ff] shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
