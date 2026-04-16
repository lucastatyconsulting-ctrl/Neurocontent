import { motion } from 'motion/react';
import { AlertCircle } from 'lucide-react';

const losses = [
  "Des prospects qualifiés qui visitent… puis disparaissent",
  "Des clients qui négocient vos prix",
  "Des concurrents moins compétents qui gagnent",
  "Une perte silencieuse de crédibilité",
  "Une croissance freinée malgré vos efforts"
];

export function LossSection() {
  return (
    <section className="py-24 px-6 lg:px-12 max-w-5xl mx-auto relative z-10">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-8 leading-tight text-center md:text-left">
            Ce que cette incohérence <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/50">vous coûte déjà.</span>
          </h2>
          
          <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.05] backdrop-blur-md relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/5 blur-[60px] rounded-full pointer-events-none" />
            <p className="text-lg text-white/80 font-medium italic relative z-10">
              "Ce n’est pas visible dans vos chiffres.<br/>
              Mais c’est présent dans chaque opportunité perdue."
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-4"
        >
          {losses.map((loss, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + index * 0.1 }}
              className="flex items-start gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.04] transition-colors"
            >
              <AlertCircle className="w-5 h-5 text-[#ff6b6b]/80 shrink-0 mt-0.5" />
              <span className="text-white/70">{loss}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
