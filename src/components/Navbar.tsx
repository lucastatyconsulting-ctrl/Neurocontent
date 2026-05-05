import { motion } from 'motion/react';

export function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-6 px-6 pointer-events-none"
    >
      <div className="flex items-center justify-between w-full max-w-5xl bg-white/[0.03] backdrop-blur-xl border border-white/[0.08] rounded-full px-6 py-3 pointer-events-auto shadow-[0_8px_32px_0_rgba(0,0,0,0.2)]">
        
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#6c63ff] to-indigo-900 flex items-center justify-center">
            <div className="w-2 h-2 bg-white rounded-full" />
          </div>
          <span className="font-heading font-bold text-white tracking-wide">NeuroContent</span>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-white/60">
          <a href="#services" className="hover:text-white transition-colors">Services</a>
          <a href="#method" className="hover:text-white transition-colors">Method</a>
          <a href="#portfolio" className="hover:text-white transition-colors">Projects</a>
        </div>

        <div>
          <a 
            href="https://wa.me/242064603138?text=Bonjour%20Lucas%2C%20j'aimerais%20%C3%A9changer%20et%20comprendre%20comment%20vous%20pouvez%20m'aider."
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 rounded-full bg-white/10 text-white text-sm font-medium hover:bg-white/20 transition-colors border border-white/5 inline-block"
          >
            Contact
          </a>
        </div>

      </div>
    </motion.nav>
  );
}
