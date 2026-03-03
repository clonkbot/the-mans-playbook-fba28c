export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1A1715] via-[#0D0D0D] to-[#0D0D0D]" />

      {/* Decorative lines */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#8B2635] to-transparent opacity-50" />
      <div className="absolute top-1/4 left-0 w-32 md:w-64 h-px bg-[#8B2635] animate-line-expand opacity-30" />
      <div className="absolute top-1/3 right-0 w-24 md:w-48 h-px bg-[#8B2635] animate-line-expand animation-delay-300 opacity-30" />

      {/* Large decorative text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15vw] md:text-[20vw] font-display font-black text-[#1A1715] select-none pointer-events-none whitespace-nowrap">
        PLAYBOOK
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-8 text-center">
        {/* Small intro text */}
        <p className="text-[#6B6560] text-xs md:text-sm tracking-[0.3em] uppercase mb-4 md:mb-8 opacity-0 animate-fade-in animation-delay-100">
          A Guide For The Modern Man
        </p>

        {/* Main title */}
        <h1 className="font-display text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-black tracking-tight mb-4 md:mb-6 opacity-0 animate-fade-in-up animation-delay-200">
          <span className="block">THE MAN'S</span>
          <span className="block text-[#8B2635] italic">Playbook</span>
        </h1>

        {/* Decorative line */}
        <div className="w-16 md:w-24 h-0.5 bg-[#8B2635] mx-auto mb-6 md:mb-8 opacity-0 animate-line-expand animation-delay-400" />

        {/* Subtitle */}
        <p className="text-lg sm:text-xl md:text-2xl text-[#F5F0E8]/80 max-w-2xl mx-auto leading-relaxed opacity-0 animate-fade-in animation-delay-500 px-4">
          Understand the game. Respect yourself.
          <span className="text-[#8B2635]"> Never compromise your worth.</span>
        </p>

        {/* CTA */}
        <div className="mt-8 md:mt-12 opacity-0 animate-fade-in-up animation-delay-600">
          <a
            href="#principles"
            className="inline-flex items-center gap-3 border-2 border-[#8B2635] px-6 md:px-10 py-3 md:py-4 text-sm md:text-base tracking-widest uppercase hover:bg-[#8B2635] transition-all duration-500 group"
          >
            <span>Begin Your Education</span>
            <svg
              className="w-4 h-4 md:w-5 md:h-5 transform group-hover:translate-y-1 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 md:bottom-12 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in animation-delay-700">
        <div className="w-6 h-10 border-2 border-[#6B6560] rounded-full flex justify-center">
          <div className="w-1 h-2 bg-[#8B2635] rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  );
}
