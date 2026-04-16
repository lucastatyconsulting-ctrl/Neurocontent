import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Play, X } from 'lucide-react';

type ProjectInfo = {
  title: string;
  category: string;
  media: string;
  type: 'image' | 'video';
};

const projects: ProjectInfo[] = [
  {
    title: "Architecture Visuelle — Clinique d'Élite",
    category: "Design Médical Minimaliste",
    media: "/Image_1.jpg",
    type: "image"
  },
  {
    title: "Architecture Personnelle — Stratège Élite",
    category: "Personal Branding",
    media: "/Image_2.png",
    type: "image"
  },
  {
    title: "Production Cinématique — L’Esthétique Pure",
    category: "Direction Artistique (Dior)",
    media: "/Video_1.mp4",
    type: "video"
  },
  {
    title: "Production Cinématique — L’Autorité Média",
    category: "Format BFM Group",
    media: "/Video_2.mp4",
    type: "video"
  },
  {
    title: "Égérie Digitale — Le Clone IA",
    category: "Innovation & Statut",
    media: "/Video_3.mp4",
    type: "video"
  },
  {
    title: "Performance Content — E-commerce",
    category: "UGC & Conversion",
    media: "/Video_4.mp4",
    type: "video"
  }
];

export function Portfolio() {
  const [selectedProject, setSelectedProject] = useState<ProjectInfo | null>(null);

  return (
    <section id="portfolio" className="py-24 px-6 lg:px-12 max-w-7xl mx-auto relative z-10">
      <div className="text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-block px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-white/60 mb-6"
        >
          Portfolio
        </motion.div>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-5xl font-bold tracking-tight mb-6"
        >
          Quand l’image change, <br className="hidden sm:block"/> tout change.
        </motion.h2>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="group cursor-pointer"
            onClick={() => setSelectedProject(project)}
          >
            <div className="relative overflow-hidden rounded-[2rem] aspect-[4/3] mb-4 bg-white/5 border border-white/10">
              <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-500 z-10" />
              {project.type === 'video' ? (
                 <>
                  <video 
                    src={project.media}
                    autoPlay muted loop playsInline
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 right-4 z-20 bg-black/40 backdrop-blur-sm p-3 rounded-full border border-white/10 group-hover:scale-110 transition-transform">
                    <Play className="w-5 h-5 text-white fill-white" />
                  </div>
                 </>
              ) : (
                <img 
                  src={project.media} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              )}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20 pointer-events-none">
                <div className="px-6 py-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white font-medium">
                  Voir
                </div>
              </div>
            </div>
            <h3 className="text-lg font-semibold text-white/90">{project.title}</h3>
            <p className="text-sm text-white/50">{project.category}</p>
          </motion.div>
        ))}
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-black/95 backdrop-blur-md"
          >
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-6 right-6 z-[60] p-3 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors border border-white/10"
            >
              <X className="w-6 h-6" />
            </button>
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-6xl flex flex-col items-center gap-6"
            >
              <div className="relative w-full bg-black/50 rounded-2xl overflow-hidden border border-white/10 flex items-center justify-center">
                {selectedProject.type === 'video' ? (
                  <video 
                    src={selectedProject.media} 
                    controls
                    autoPlay
                    className="w-full max-h-[75vh] object-contain"
                    playsInline
                  />
                ) : (
                  <img 
                    src={selectedProject.media} 
                    alt={selectedProject.title}
                    className="w-full max-h-[75vh] object-contain"
                  />
                )}
              </div>
              <div className="text-center">
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">{selectedProject.title}</h3>
                <p className="text-white/60">{selectedProject.category}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
