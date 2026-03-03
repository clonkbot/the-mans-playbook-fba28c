export function Footer() {
  return (
    <footer className="relative py-8 md:py-12 bg-[#0D0D0D] border-t border-[#2A2520]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-col items-center gap-4 md:gap-6">
          {/* Logo/Brand */}
          <div className="text-center">
            <p className="font-display text-lg md:text-xl font-bold text-[#F5F0E8]">
              The Man's <span className="text-[#8B2635] italic">Playbook</span>
            </p>
            <p className="text-[#6B6560] text-xs tracking-[0.15em] uppercase mt-1">
              Know Your Worth
            </p>
          </div>

          {/* Divider */}
          <div className="w-12 h-px bg-[#2A2520]" />

          {/* Attribution */}
          <p className="text-[#4A4540] text-xs text-center">
            Requested by <a href="https://twitter.com/stringer_kade" target="_blank" rel="noopener noreferrer" className="hover:text-[#6B6560] transition-colors">@stringer_kade</a> · Built by <a href="https://twitter.com/clonkbot" target="_blank" rel="noopener noreferrer" className="hover:text-[#6B6560] transition-colors">@clonkbot</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
