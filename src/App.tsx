import { useState } from 'react';
import { Hero } from './components/Hero';
import { Principles } from './components/Principles';
import { Lessons } from './components/Lessons';
import { Quote } from './components/Quote';
import { Footer } from './components/Footer';
import './styles.css';

function App() {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-[#0D0D0D] text-[#F5F0E8] overflow-x-hidden">
      {/* Grain overlay */}
      <div className="fixed inset-0 pointer-events-none z-50 opacity-[0.03]"
           style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\'/%3E%3C/svg%3E")' }}
      />

      <Hero />
      <Principles activeSection={activeSection} setActiveSection={setActiveSection} />
      <Quote />
      <Lessons />
      <Footer />
    </div>
  );
}

export default App;
