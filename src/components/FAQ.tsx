import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: "L’intelligence artificielle remplace-t-elle l’authenticité ?",
    answer: "Non. Elle amplifie votre authenticité en supprimant les contraintes techniques. Vous restez au centre. L’IA accélère simplement votre présence."
  },
  {
    question: "Combien de temps faut-il pour créer un clone IA ?",
    answer: "Une seule session d’enregistrement suffit. Ensuite, votre image peut être utilisée à l’infini."
  },
  {
    question: "Est-ce adapté à une entreprise ou seulement aux experts ?",
    answer: "Les deux. Que vous soyez une marque personnelle ou une structure premium, le principe reste le même : perception = décision."
  },
  {
    question: "Pourquoi investir dans l’image plutôt que dans plus de publicité ?",
    answer: "Parce que la publicité attire l’attention, mais l’image décide si vous êtes choisi."
  },
  {
    question: "Quels résultats puis-je attendre ?",
    answer: "Une perception plus forte, moins de friction, et une augmentation naturelle de votre crédibilité et de votre attractivité."
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-16 md:py-20 px-6 lg:px-12 max-w-4xl mx-auto relative z-10">
      <div className="text-center mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-block px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-white/60 mb-6"
        >
          FAQ
        </motion.div>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-5xl font-bold tracking-tight mb-6"
        >
          Clarté absolue.
        </motion.h2>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/[0.02] border border-white/[0.05] rounded-2xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span className="text-base font-medium text-white/90">{faq.question}</span>
                {isOpen ? (
                  <Minus className="w-5 h-5 text-[#6c63ff] shrink-0" />
                ) : (
                  <Plus className="w-5 h-5 text-white/50 shrink-0" />
                )}
              </button>
              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-6 pb-6 text-base text-white/60 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
