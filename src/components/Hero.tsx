import { motion } from 'motion/react';
import { Brain, Activity, Eye, Zap } from 'lucide-react';

const StarsBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* Subtle nebula glow */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#6c63ff]/10 blur-[120px] rounded-full mix-blend-screen" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-500/10 blur-[120px] rounded-full mix-blend-screen" />
      
      {/* Stars */}
      {[...Array(50)].map((_, i) => {
        const size = Math.random() * 2 + 1;
        return (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: size,
              height: size,
            }}
            animate={{
              opacity: [0.1, 0.8, 0.1],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: Math.random() * 4 + 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 5,
            }}
          />
        );
      })}
    </div>
  );
};

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-12 px-6 lg:px-12 max-w-7xl mx-auto overflow-hidden">
      <StarsBackground />
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center w-full relative z-10">
        
        {/* Left Content */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center text-center lg:items-start lg:text-left gap-6 z-10 mt-16 md:mt-24"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 w-fit backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-[#6c63ff] animate-pulse" />
            <span className="text-xs font-medium tracking-wide text-white/80 uppercase">By Lucas Taty</span>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1]">
            Votre image ne reflète pas <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-[#6c63ff]">
              votre niveau.
            </span>
          </h1>

          <div className="text-base sm:text-lg text-white/70 leading-relaxed max-w-2xl font-light space-y-4">
            <p>
              Le marché récompense les mieux perçus. En 0,05 seconde, le cerveau décide si vous êtes une évidence... ou un risque. Que vous vendiez votre expertise ou dirigiez une structure premium, une image faible fait fuir vos opportunités à forte valeur.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-4 items-center lg:items-start justify-center lg:justify-start w-full">
            <button className="group relative inline-flex items-center justify-center px-8 py-4 font-semibold text-white transition-all duration-500 ease-out w-fit rounded-full bg-[#ff6b6b] border border-[#ff6b6b]/40 shadow-[0_0_30px_rgba(255,107,107,0.4)] hover:shadow-[0_0_50px_rgba(255,107,107,0.7)] hover:bg-[#ff5252] hover:scale-105 overflow-hidden">
              <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-black/40 via-transparent to-black/30 opacity-100"></span>
              <span className="absolute -bottom-8 -left-8 w-32 h-32 bg-white blur-[30px] opacity-20 group-hover:opacity-40 transition-all duration-700 group-hover:-translate-y-4 group-hover:translate-x-4"></span>
              <span className="relative z-10 flex items-center gap-2 tracking-wide text-lg drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
                Auditer mon image
              </span>
            </button>
          </div>
        </motion.div>

        {/* Right Visual */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full aspect-square max-w-md mx-auto lg:max-w-none lg:ml-auto z-10"
        >
          {/* Main Floating Card */}
          <motion.div 
            className="absolute inset-0 bg-white/[0.03] backdrop-blur-2xl border border-white/[0.08] rounded-[2rem] shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] overflow-hidden flex flex-col p-8"
            animate={{ y: [-10, 10, -10] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
            {/* Inner Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-[#6c63ff]/20 blur-[60px] rounded-full pointer-events-none" />
            
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-[#6c63ff]/20 text-[#6c63ff]">
                  <Brain size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-white">Perception Score</h3>
                  <p className="text-xs text-white/50">Real-time analysis</p>
                </div>
              </div>
              <div className="text-2xl font-bold text-white">98.4<span className="text-sm text-white/50">%</span></div>
            </div>

            <div className="space-y-6 flex-1">
              {/* Stat Bar 1 */}
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-white/70 flex items-center gap-2"><Eye size={14}/> Visual Trust</span>
                  <span className="text-[#6c63ff]">High</span>
                </div>
                <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: "92%" }}
                    transition={{ duration: 1.5, delay: 0.5 }}
                    className="h-full bg-gradient-to-r from-[#6c63ff]/50 to-[#6c63ff] rounded-full"
                  />
                </div>
              </div>

              {/* Stat Bar 2 */}
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-white/70 flex items-center gap-2"><Activity size={14}/> Cognitive Load</span>
                  <span className="text-emerald-400">Optimal</span>
                </div>
                <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: "24%" }}
                    transition={{ duration: 1.5, delay: 0.7 }}
                    className="h-full bg-gradient-to-r from-emerald-500/50 to-emerald-400 rounded-full"
                  />
                </div>
              </div>

              {/* Stat Bar 3 */}
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-white/70 flex items-center gap-2"><Zap size={14}/> Conversion Probability</span>
                  <span className="text-white">94%</span>
                </div>
                <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: "94%" }}
                    transition={{ duration: 1.5, delay: 0.9 }}
                    className="h-full bg-white rounded-full shadow-[0_0_10px_rgba(255,255,255,0.5)]"
                  />
                </div>
              </div>
            </div>

            {/* Bottom decorative element */}
            <div className="mt-auto pt-6 border-t border-white/10 flex items-center justify-between">
              <div className="flex -space-x-2">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="w-8 h-8 rounded-full border-2 border-[#020617] bg-white/10 backdrop-blur-md" />
                ))}
              </div>
              <span className="text-xs text-white/40">Calibrating...</span>
            </div>
          </motion.div>

          {/* Floating decorative elements */}
          <motion.div 
            className="absolute -right-8 top-1/4 p-4 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl shadow-xl"
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          >
            <div className="text-xs text-white/50 mb-1">Attention Span</div>
            <div className="text-lg font-bold text-white">+42%</div>
          </motion.div>

          <motion.div 
            className="absolute -left-8 bottom-1/4 p-4 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl shadow-xl"
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-sm font-medium text-white">Optimized</span>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
