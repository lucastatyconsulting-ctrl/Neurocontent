import { motion } from 'motion/react';
import { Target, PenTool, Rocket } from 'lucide-react';

const steps = [
  {
    icon: <Target className="w-5 h-5 text-white" />,
    title: "Analyse des failles invisibles",
    description: "Identifier les points où votre image casse la confiance."
  },
  {
    icon: <PenTool className="w-5 h-5 text-white" />,
    title: "Construction de votre perception",
    description: "Création de votre image avec IA, design et neurosciences."
  },
  {
    icon: <Rocket className="w-5 h-5 text-white" />,
    title: "Déploiement stratégique",
    description: "Vous devenez omniprésent et crédible sur tous vos canaux."
  }
];

export function Process() {
  return (
    <section id="method" className="py-8 md:py-12 px-6 lg:px-12 max-w-7xl mx-auto relative z-10">
      <div className="text-center mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-block px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-white/60 mb-6"
        >
          Méthode
        </motion.div>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-5xl font-bold tracking-tight mb-6"
        >
          Un système. Pas du hasard.
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-white/60 max-w-2xl mx-auto text-lg"
        >
          "Vous ne publiez plus. Vous imposez."
        </motion.p>
      </div>

      <div className="grid md:grid-cols-3 gap-12 relative">
        {/* Connecting Line */}
        <div className="hidden md:block absolute top-8 left-[15%] right-[15%] h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="relative flex flex-col items-center text-center"
          >
            <div className="w-16 h-16 rounded-2xl bg-[#020617] border border-white/10 flex items-center justify-center mb-6 relative z-10 shadow-[0_0_20px_rgba(108,99,255,0.1)]">
              <div className="absolute inset-0 bg-[#6c63ff]/10 rounded-2xl blur-md" />
              {step.icon}
            </div>
            <h3 className="text-lg font-semibold mb-3 text-white/90">{step.title}</h3>
            <p className="text-white/50 text-sm leading-relaxed max-w-xs">
              {step.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
