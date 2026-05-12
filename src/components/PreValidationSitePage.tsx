import { motion } from 'motion/react';
import { Background } from './Background';

export function PreValidationSitePage() {
  return (
    <main className="relative min-h-screen selection:bg-[#6c63ff]/30 selection:text-white flex flex-col">
      <Background />
      
      <div className="flex-grow flex items-center justify-center pt-20 pb-20 px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl w-full mx-auto relative z-10 text-center"
        >
          <h1 className="text-4xl sm:text-5xl font-bold text-[#FFFFFF] mb-8 leading-tight">
            ✅ ÉTAPE 1/2 : Profil de l'entreprise pré-validé.
          </h1>

          <h2 className="text-xl sm:text-2xl text-[#9CA3AF] mb-10 font-medium leading-relaxed max-w-2xl mx-auto">
            Votre établissement correspond aux critères d'éligibilité pour la conception de site offerte.
          </h2>

          <div className="space-y-6 text-lg sm:text-xl text-[#D1D5DB] mb-12 leading-relaxed max-w-2xl mx-auto">
            <p>
              Il reste une dernière étape technique obligatoire avant le lancement de la production. Nous devons vérifier immédiatement que le nom de domaine officiel de votre entreprise n'a pas encore été réservé par un tiers. Cliquez sur le bouton ci-dessous pour finaliser votre dossier et confirmer la disponibilité de votre adresse en direct avec la direction.
            </p>
          </div>

          <motion.a 
            href="https://api.whatsapp.com/send?phone=242064603138&text=Bonjour,%20je%20viens%20de%20finaliser%20ma%20pr%C3%A9-validation%20pour%20le%20site%20offert.%20Je%20souhaite%20v%C3%A9rifier%20la%20disponibilit%C3%A9%20de%20mon%20nom%20de%20domaine.%20Le%20nom%20de%20mon%20entreprise%20est%20%3A%20"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative inline-flex items-center justify-center px-10 py-5 font-bold text-white transition-all duration-300 ease-out w-full sm:w-auto rounded-full bg-[#25D366] shadow-[0_4px_14px_rgba(37,211,102,0.3)] hover:shadow-[0_0_30px_rgba(37,211,102,0.5)] hover:bg-[#2ee071]"
          >
            <span className="relative z-10 flex items-center gap-3 tracking-wide sm:text-lg">
              VÉRIFIER MON NOM DE DOMAINE
            </span>
          </motion.a>
        </motion.div>
      </div>
    </main>
  );
}
