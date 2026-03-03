export function Quote() {
  return (
    <section className="relative py-16 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#1A1715]" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#8B2635]/10 via-transparent to-[#8B2635]/10" />

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#8B2635]/50 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#8B2635]/50 to-transparent" />

      {/* Large quotation mark */}
      <div className="absolute top-4 md:top-8 left-4 md:left-16 text-[120px] md:text-[200px] font-display text-[#8B2635]/10 leading-none select-none">
        "
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 md:px-8 text-center">
        <blockquote className="font-display text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold leading-tight md:leading-snug mb-6 md:mb-8">
          A simp is not a man who loves deeply—it is a man who
          <span className="text-[#8B2635] italic"> loves without self-respect.</span>
        </blockquote>

        <div className="w-12 md:w-16 h-0.5 bg-[#8B2635] mx-auto mb-4 md:mb-6" />

        <p className="text-[#6B6560] text-xs md:text-sm tracking-[0.2em] uppercase">
          The Man's Playbook
        </p>
      </div>
    </section>
  );
}
