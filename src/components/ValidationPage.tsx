import { motion } from 'motion/react';
import { Background } from './Background';
import { Footer } from './Footer';

export function ValidationPage() {
  return (
    <main className="relative min-h-screen selection:bg-[#6c63ff]/30 selection:text-white flex flex-col">
      <Background />
      
      <div className="flex-grow flex items-center justify-center pt-32 pb-20 px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl w-full mx-auto relative relative z-10 text-center"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#ff6b6b]/10 border border-[#ff6b6b]/20 text-[#ff6b6b] text-sm font-medium mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-[#ff6b6b] animate-pulse"></span>
            Action requise
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
            Étape finale : <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-[#ff6b6b]">Validez votre dossier.</span>
          </h1>

          <div className="space-y-6 text-lg sm:text-xl text-white/70 mb-12 leading-relaxed">
            <p className="font-medium text-white/90">
              Votre candidature pour l'Audit Stratégique a bien été enregistrée.
            </p>
            <p>
              Pour garantir la sécurité de nos échanges et prioriser votre dossier, veuillez cliquer sur le bouton ci-dessous. Cela confirmera votre identité et ouvrira votre canal de discussion privé avec notre consultant.
            </p>
            <p className="text-[#ff6b6b]/90 font-medium">
              Sans cette validation, nous ne pourrons pas traiter votre demande.
            </p>
          </div>

          <motion.a 
            href="https://wa.me/242064603138?text=Bonjour,%20je%20viens%20de%20soumettre%20ma%20candidature%20pour%20l'Audit%20Stratégique.%20Le%20nom%20de%20mon%20entreprise%20est%20:"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative inline-flex items-center justify-center px-8 py-5 font-bold text-white transition-all duration-500 ease-out w-full sm:w-auto rounded-full bg-[#ff6b6b] border border-[#ff6b6b]/40 shadow-[0_0_30px_rgba(255,107,107,0.4)] hover:shadow-[0_0_50px_rgba(255,107,107,0.7)] hover:bg-[#ff5252] overflow-hidden"
          >
            <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-black/40 via-transparent to-black/30 opacity-100"></span>
            <span className="absolute -bottom-8 -left-8 w-32 h-32 bg-white blur-[30px] opacity-20 group-hover:opacity-40 transition-all duration-700 group-hover:-translate-y-4 group-hover:translate-x-4"></span>
            <span className="relative z-10 flex items-center gap-3 tracking-wide sm:text-lg drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
              FINALISER MA VALIDATION SUR WHATSAPP
            </span>
          </motion.a>
        </motion.div>
      </div>

      <Footer />
    </main>
  );
}
