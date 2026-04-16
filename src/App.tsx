import { Background } from './components/Background';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Diagnostic } from './components/Diagnostic';
import { LossSection } from './components/LossSection';
import { Solution } from './components/Solution';
import { Services } from './components/Services';
import { Process } from './components/Process';
import { Comparison } from './components/Comparison';
import { Strategist } from './components/Strategist';
import { Portfolio } from './components/Portfolio';
import { FAQ } from './components/FAQ';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <main className="relative min-h-screen selection:bg-[#6c63ff]/30 selection:text-white">
      <Background />
      <Navbar />
      
      <Hero />
      
      <div className="space-y-12 md:space-y-24 pb-12">
        <Diagnostic />
        <LossSection />
        <Solution />
        <Services />
        <Process />
        <Comparison />
        <Strategist />
        <Portfolio />
        <FAQ />
        <CTA />
      </div>

      <Footer />
    </main>
  );
}
