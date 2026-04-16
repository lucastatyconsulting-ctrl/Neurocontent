import { motion } from 'motion/react';
import { Layout, Film, Sparkles, Zap } from 'lucide-react';

const services = [
  {
    icon: <Layout className="w-7 h-7 text-[#6c63ff]" />,
    title: "Architecture Visuelle",
    deliverable: "La création ou la refonte totale de votre écosystème digital (Site web premium, Landing page optimisée pour la conversion, charte graphique).",
    impact: "Nous construisons des fondations qui respirent l'excellence. Votre \"maison digitale\" justifie vos tarifs et impose un respect immédiat à vos visiteurs."
  },
  {
    icon: <Film className="w-7 h-7 text-[#6c63ff]" />,
    title: "Production Cinématique IA",
    deliverable: "Des spots publicitaires ultra-premium générés par les intelligences artificielles les plus avancées, sans aucune caméra ni équipe de tournage.",
    impact: "Des vidéos conçues avec les codes du cinéma pour stopper le scroll, écraser la concurrence visuelle et ancrer votre statut de leader dans l'inconscient de vos prospects."
  },
  {
    icon: <Sparkles className="w-7 h-7 text-[#6c63ff]" />,
    title: "Clones IA & Égéries Digitales",
    deliverable: "La modélisation de votre double virtuel hyper-réaliste (ou la création d'une égérie sur-mesure pour représenter votre établissement).",
    impact: "L'omniprésence absolue. Démultipliez vos prises de parole sur tous les réseaux sans jamais vous épuiser. Votre image travaille, captive et vend pour vous, 24h/24."
  }
];

export function Services() {
  return (
    <section id="services" className="py-32 px-6 lg:px-12 max-w-7xl mx-auto relative z-10">
      <div className="text-center mb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-white/60 mb-6 uppercase tracking-widest"
        >
          Services
        </motion.div>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6"
        >
          Votre Infrastructure <br className="hidden sm:block"/> d'Autorité.
        </motion.h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            className="group relative bg-white/[0.03] backdrop-blur-xl border border-white/[0.05] hover:border-[#6c63ff]/50 rounded-[2.5rem] p-10 lg:p-12 transition-all duration-500 overflow-hidden hover:shadow-[0_0_40px_rgba(108,99,255,0.15)]"
          >
            {/* Hover Glow Background */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120%] h-1/2 bg-[#6c63ff]/0 group-hover:bg-[#6c63ff]/10 blur-[60px] rounded-full transition-all duration-700 pointer-events-none" />
            
            <div className="relative z-10">
              <div className="mb-10 p-4 bg-white/[0.04] rounded-2xl w-fit border border-white/10 group-hover:border-[#6c63ff]/30 transition-colors duration-500">
                {service.icon}
              </div>
              
              <h3 className="text-2xl font-bold mb-10 text-white">{service.title}</h3>
              
              <div className="space-y-8">
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-white/40 mb-3">
                    Ce que nous livrons :
                  </h4>
                  <p className="text-[#a0aec0] leading-relaxed">
                    {service.deliverable}
                  </p>
                </div>
                
                <div className="pt-8 border-t border-white/[0.05]">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-[#6c63ff] mb-3 flex items-center gap-2">
                    <Zap className="w-3.5 h-3.5" /> L'Impact :
                  </h4>
                  <p className="text-[#a0aec0] leading-relaxed">
                    {service.impact}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
