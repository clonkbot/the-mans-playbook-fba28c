import { useState } from 'react';

const lessons = [
  {
    chapter: 'I',
    title: 'The Simp Mentality',
    description: 'Understanding why excessive validation-seeking behavior destroys attraction and self-worth.',
    points: [
      'Putting others on a pedestal devalues yourself',
      'Constant availability signals low value',
      'Seeking validation is a sign of internal emptiness',
      'Real respect is earned through self-respect'
    ]
  },
  {
    chapter: 'II',
    title: 'The Economics of Attraction',
    description: 'How hypergamy works in the modern dating market and why understanding it empowers you.',
    points: [
      'Value is perceived, not objective',
      'Scarcity creates desire',
      'Investment follows interest',
      'Options create abundance mindset'
    ]
  },
  {
    chapter: 'III',
    title: 'Building Your Empire',
    description: 'Focusing on personal growth, career, fitness, and purpose before relationships.',
    points: [
      'Physical health is non-negotiable',
      'Financial independence equals freedom',
      'Purpose transcends relationships',
      'Continuous improvement is the goal'
    ]
  },
  {
    chapter: 'IV',
    title: 'The Balanced Man',
    description: 'Finding the middle ground between coldness and over-investment.',
    points: [
      'Emotion is strength when controlled',
      'Vulnerability requires trust',
      'Love from abundance, not scarcity',
      'Walk away when necessary'
    ]
  }
];

export function Lessons() {
  const [activeLesson, setActiveLesson] = useState<number | null>(null);

  return (
    <section className="relative py-16 md:py-32 bg-[#0D0D0D]">
      {/* Section header */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 mb-12 md:mb-24">
        <div className="flex flex-col md:flex-row md:items-end gap-4 md:gap-8">
          <p className="text-[#6B6560] text-xs md:text-sm tracking-[0.2em] uppercase md:order-2 md:mb-3">
            Your Education Begins
          </p>
          <div className="hidden md:block h-px flex-1 bg-gradient-to-l from-[#6B6560] to-transparent mb-4 order-3" />
          <h2 className="font-display text-4xl sm:text-5xl md:text-7xl font-black tracking-tight md:order-1">
            The <span className="text-[#8B2635] italic">Chapters</span>
          </h2>
        </div>
      </div>

      {/* Lessons accordion */}
      <div className="max-w-5xl mx-auto px-4 md:px-8">
        {lessons.map((lesson, index) => (
          <div
            key={index}
            className="border-b border-[#2A2520] last:border-b-0"
          >
            <button
              onClick={() => setActiveLesson(activeLesson === index ? null : index)}
              className="w-full py-6 md:py-8 flex items-center gap-4 md:gap-8 text-left group"
            >
              {/* Chapter number */}
              <span className="text-3xl md:text-5xl font-display font-black text-[#8B2635]/50 group-hover:text-[#8B2635] transition-colors duration-300 min-w-[60px] md:min-w-[80px]">
                {lesson.chapter}
              </span>

              {/* Title and description */}
              <div className="flex-1 min-w-0">
                <h3 className="font-display text-xl md:text-3xl font-bold mb-1 md:mb-2 group-hover:text-[#8B2635] transition-colors duration-300 truncate">
                  {lesson.title}
                </h3>
                <p className="text-[#6B6560] text-sm md:text-base line-clamp-2 md:line-clamp-1">
                  {lesson.description}
                </p>
              </div>

              {/* Expand icon */}
              <div className={`w-10 h-10 md:w-12 md:h-12 border border-[#6B6560] flex items-center justify-center transition-all duration-300 flex-shrink-0
                ${activeLesson === index ? 'bg-[#8B2635] border-[#8B2635] rotate-180' : 'group-hover:border-[#8B2635]'}`}>
                <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </button>

            {/* Expanded content */}
            <div className={`overflow-hidden transition-all duration-500 ${activeLesson === index ? 'max-h-[400px] pb-8' : 'max-h-0'}`}>
              <div className="pl-[76px] md:pl-[112px] pr-4 md:pr-[72px]">
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                  {lesson.points.map((point, pointIndex) => (
                    <li
                      key={pointIndex}
                      className="flex items-start gap-3 md:gap-4"
                    >
                      <span className="w-1.5 h-1.5 md:w-2 md:h-2 bg-[#8B2635] mt-2 flex-shrink-0" />
                      <span className="text-[#F5F0E8]/80 text-sm md:text-base">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="max-w-5xl mx-auto px-4 md:px-8 mt-12 md:mt-20 text-center">
        <p className="text-[#6B6560] text-base md:text-lg mb-6 md:mb-8 max-w-2xl mx-auto">
          The journey to self-improvement is not about becoming heartless.
          It's about becoming <span className="text-[#8B2635]">whole</span>.
        </p>
        <div className="inline-flex items-center gap-2 text-xs md:text-sm text-[#6B6560] tracking-[0.1em] uppercase">
          <span className="w-8 h-px bg-[#6B6560]" />
          <span>Stay Focused. Stay Strong.</span>
          <span className="w-8 h-px bg-[#6B6560]" />
        </div>
      </div>
    </section>
  );
}
