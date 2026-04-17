import { motion } from 'motion/react';

export function CTA() {
  return (
    <section className="py-8 md:py-12 px-6 lg:px-12 max-w-7xl mx-auto relative z-10 text-center">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative max-w-4xl mx-auto"
      >
        {/* Background Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-lg bg-[#6c63ff]/20 blur-[100px] rounded-full pointer-events-none" />
        
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-8 relative z-10 leading-tight">
          Chaque jour où votre image ne reflète pas votre niveau <br className="hidden lg:block"/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6c63ff] to-indigo-400">est un avantage pour vos concurrents.</span>
        </h2>
        
        <p className="text-xl text-white/60 max-w-2xl mx-auto mb-12 relative z-10 font-light">
          Vous pouvez continuer comme avant…<br/>
          ou corriger ce qui bloque réellement votre croissance.
        </p>
        
        <button className="relative z-10 px-8 py-4 rounded-full bg-[#ff6b6b] text-white font-medium text-lg hover:bg-[#ff5252] transition-all hover:scale-105 hover:shadow-[0_0_20px_rgba(255,107,107,0.4)] active:scale-95">
          Auditer mon image maintenant
        </button>
      </motion.div>
    </section>
  );
}
