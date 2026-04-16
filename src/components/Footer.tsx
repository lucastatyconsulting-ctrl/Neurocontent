export function Footer() {
  return (
    <footer className="border-t border-white/10 pt-12 pb-8 px-6 lg:px-12 max-w-7xl mx-auto relative z-10">
      <div className="flex flex-col items-center justify-center text-center mb-12">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#6c63ff] to-indigo-900 flex items-center justify-center">
            <div className="w-2 h-2 bg-white rounded-full" />
          </div>
          <span className="font-heading font-bold text-white tracking-wide">NeuroContent</span>
        </div>
        <p className="text-white/50 text-sm max-w-md mx-auto">
          Crafting exceptional digital experiences and bold brand identities through neuroscience and design.
        </p>
      </div>

      <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/40">
        <p>Created by : <span className="text-white/60 underline decoration-white/20 underline-offset-4">NeuroContent Team</span></p>
        <p>©2026 NeuroContent. All rights reserved.</p>
      </div>
    </footer>
  );
}
