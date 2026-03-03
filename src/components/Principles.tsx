interface PrinciplesProps {
  activeSection: string | null;
  setActiveSection: (section: string | null) => void;
}

const principles = [
  {
    id: 'self-worth',
    number: '01',
    title: 'Know Your Worth',
    subtitle: 'The Foundation',
    content: 'Your value is not determined by how much you sacrifice for others. A man who gives everything away has nothing left to offer. Self-respect is the bedrock upon which all healthy relationships are built.',
    insight: 'A man who knows his worth walks away from tables where he is not served.'
  },
  {
    id: 'hypergamy',
    number: '02',
    title: 'Understand Hypergamy',
    subtitle: 'The Natural Order',
    content: 'Hypergamy is the biological drive to seek the best possible partner. This is not about blame or resentment—it is about understanding dynamics that have existed throughout human history. Knowledge is power.',
    insight: 'Understanding the game does not make you a player. It makes you wise.'
  },
  {
    id: 'investment',
    number: '03',
    title: 'Invest In Yourself',
    subtitle: 'The Priority',
    content: 'Your career, physique, mental health, and purpose should never take a backseat. The most attractive quality a man can possess is a life he is building for himself, with or without a partner.',
    insight: 'Build a life so good that anyone would be lucky to join it.'
  },
  {
    id: 'boundaries',
    number: '04',
    title: 'Set Boundaries',
    subtitle: 'The Shield',
    content: 'Boundaries are not walls—they are the definition of where you end and others begin. A man without boundaries is a man who will be walked over, disrespected, and ultimately alone.',
    insight: 'No is a complete sentence. Explaining yourself is optional.'
  }
];

export function Principles({ activeSection, setActiveSection }: PrinciplesProps) {
  return (
    <section id="principles" className="relative py-16 md:py-32 bg-[#0D0D0D]">
      {/* Section header */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 mb-12 md:mb-24">
        <div className="flex flex-col md:flex-row md:items-end gap-4 md:gap-8">
          <h2 className="font-display text-4xl sm:text-5xl md:text-7xl font-black tracking-tight">
            Core <span className="text-[#8B2635] italic">Principles</span>
          </h2>
          <div className="hidden md:block h-px flex-1 bg-gradient-to-r from-[#6B6560] to-transparent mb-4" />
          <p className="text-[#6B6560] text-xs md:text-sm tracking-[0.2em] uppercase md:mb-3">
            The Foundation of Self-Respect
          </p>
        </div>
      </div>

      {/* Principles grid */}
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8">
          {principles.map((principle, index) => (
            <div
              key={principle.id}
              className={`group relative border border-[#2A2520] p-6 md:p-10 transition-all duration-500 cursor-pointer
                ${activeSection === principle.id ? 'bg-[#1A1715] border-[#8B2635]' : 'hover:bg-[#1A1715]/50 hover:border-[#6B6560]'}`}
              onClick={() => setActiveSection(activeSection === principle.id ? null : principle.id)}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Number */}
              <span className="absolute top-4 md:top-6 right-4 md:right-6 text-4xl md:text-6xl font-display font-black text-[#1A1715] group-hover:text-[#8B2635]/20 transition-colors duration-500">
                {principle.number}
              </span>

              {/* Content */}
              <div className="relative z-10">
                <p className="text-[#8B2635] text-xs tracking-[0.2em] uppercase mb-2 md:mb-3">
                  {principle.subtitle}
                </p>
                <h3 className="font-display text-2xl md:text-3xl font-bold mb-4 md:mb-6 group-hover:text-[#F5F0E8] transition-colors">
                  {principle.title}
                </h3>
                <p className="text-[#F5F0E8]/70 leading-relaxed text-sm md:text-base">
                  {principle.content}
                </p>

                {/* Expanded insight */}
                <div className={`overflow-hidden transition-all duration-500 ${activeSection === principle.id ? 'max-h-40 mt-6 md:mt-8' : 'max-h-0'}`}>
                  <div className="border-l-2 border-[#8B2635] pl-4 md:pl-6">
                    <p className="text-[#8B2635] italic text-base md:text-lg font-display">
                      "{principle.insight}"
                    </p>
                  </div>
                </div>
              </div>

              {/* Expand indicator */}
              <div className="absolute bottom-4 md:bottom-6 right-4 md:right-6">
                <div className={`w-6 h-6 md:w-8 md:h-8 border border-[#6B6560] flex items-center justify-center transition-all duration-300
                  ${activeSection === principle.id ? 'bg-[#8B2635] border-[#8B2635] rotate-45' : 'group-hover:border-[#8B2635]'}`}>
                  <span className={`text-sm md:text-lg transition-transform duration-300 ${activeSection === principle.id ? '-rotate-45' : ''}`}>
                    {activeSection === principle.id ? '−' : '+'}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
