import { motion } from 'motion/react';
import { Background } from './Background';

export function PreValidationSitePage() {
  return (
    <main className="relative min-h-screen selection:bg-[#6c63ff]/30 selection:text-white flex flex-col">
      <Background />
      
      <div className="flex-grow flex items-center justify-center pt-16 sm:pt-32 pb-20 px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl w-full mx-auto relative z-10 text-center"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#ff6b6b]/10 border border-[#ff6b6b]/20 text-[#ff6b6b] text-sm font-medium mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-[#ff6b6b] animate-pulse"></span>
            Action requise : Étape 1/2
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
            Profil de l'entreprise <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-[#25D366]">pré-validé.</span>
          </h1>

          <div className="space-y-6 text-lg sm:text-xl text-white/70 mb-12 leading-relaxed">
            <p>
              Il reste une dernière étape technique obligatoire avant le lancement de la production. Nous devons vérifier immédiatement que le nom de domaine officiel de votre entreprise n'a pas encore été réservé par un tiers.
            </p>
            <p className="text-white/90 font-medium">
              Cliquez ci-dessous pour confirmer la disponibilité de votre adresse en direct sur WhatsApp.
            </p>
          </div>

          <motion.a 
            href="https://api.whatsapp.com/send?phone=242064603138&text=Bonjour,%20je%20viens%20de%20finaliser%20ma%20pr%C3%A9-validation%20pour%20le%20site%20offert.%20Je%20souhaite%20v%C3%A9rifier%20la%20disponibilit%C3%A9%20de%20mon%20nom%20de%20domaine.%20Le%20nom%20de%20mon%20entreprise%20est%20%3A%20"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative inline-flex items-center justify-center px-8 py-5 font-bold text-white transition-all duration-500 ease-out w-full sm:w-auto rounded-full bg-[#25D366] border border-[#25D366]/40 shadow-[0_0_30px_rgba(37,211,102,0.4)] hover:shadow-[0_0_50px_rgba(37,211,102,0.7)] hover:bg-[#20b858] overflow-hidden"
          >
            <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-black/20 via-transparent to-black/20 opacity-100"></span>
            <span className="absolute -bottom-8 -left-8 w-32 h-32 bg-white blur-[30px] opacity-20 group-hover:opacity-40 transition-all duration-700 group-hover:-translate-y-4 group-hover:translate-x-4"></span>
            <span className="relative z-10 flex items-center gap-3 tracking-wide sm:text-lg drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]">
              VÉRIFIER MON NOM DE DOMAINE
            </span>
          </motion.a>
        </motion.div>
      </div>
    </main>
  );
}
