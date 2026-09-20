import React from 'react';
import { Lightbulb, Cpu, Cog, Sparkles, TrendingUp, HeartHandshake, CheckCircle2 } from 'lucide-react';
import { SolutionCard } from '../types';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface SolutionSectionProps {
  cards: SolutionCard[];
}

const iconsMap: Record<string, React.ReactNode> = {
  "01": <Lightbulb className="w-5 h-5 text-[#FF9933]" />,
  "02": <Cpu className="w-5 h-5 text-[#000080]" />,
  "03": <Cog className="w-5 h-5 text-[#138808]" />,
  "04": <Sparkles className="w-5 h-5 text-[#FF9933]" />,
  "05": <TrendingUp className="w-5 h-5 text-[#138808]" />,
  "06": <HeartHandshake className="w-5 h-5 text-[#000080]" />,
};

export const SolutionSection: React.FC<SolutionSectionProps> = ({ cards }) => {
  const [sectionRef, isSectionVisible] = useScrollAnimation({ threshold: 0.1 });

  return (
    <section 
      id="solution" 
      ref={sectionRef}
      className={`py-20 bg-[#FFFFFF] relative border-t-2 border-[#000080]/15 transition-all duration-700 ${
        isSectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
    >
      {/* Ambient background glow - saffron and emerald */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-[#FF9933]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-0 w-72 h-72 bg-[#138808]/15 rounded-full blur-3xl pointer-events-none" />

      {/* Subtle Ashoka Chakra-inspired background pattern */}
      <div className="absolute inset-0 ashoka-chakra-pattern pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2 font-mono text-[#FF9933] text-sm tracking-wider font-extrabold">
              <span className="w-6 h-px bg-[#FF9933]" />
              <span>SECTION 06</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#000080] tracking-tight flex items-center gap-3">
              <span>Our Solution</span>
              <span className="text-xs font-mono px-3 py-1 rounded-full bg-[#138808] text-[#FFFFFF] font-extrabold uppercase tracking-wider">
                Innovation Pillars
              </span>
            </h2>
          </div>
          <p className="text-sm font-mono font-medium text-[#000080] max-w-sm opacity-85">
            A comprehensive architectural paradigm engineered to solve the core bottlenecks with efficiency and scale.
          </p>
        </div>

        {/* 6 Core Visual Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card) => (
            <div
              key={card.step}
              id={`solution-card-${card.step}`}
              className="group relative rounded-2xl bg-[#FFFFFF] border-2 border-[#000080] hover:border-[#FF9933] p-6 sm:p-7 premium-card-hover shadow-md shadow-[#000080]/10 flex flex-col justify-between overflow-hidden"
            >
              {/* Subtle top indicator hover line */}
              <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-[#FF9933] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Top Row: Number & Icon */}
              <div>
                <div className="flex items-center justify-between mb-5">
                  <span className="font-mono text-xs font-extrabold px-2.5 py-1 rounded bg-[#FF9933]/20 border border-[#FF9933] text-[#000080]">
                    STEP {card.step}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-[#FFFFFF] border-2 border-[#000080] flex items-center justify-center group-hover:scale-110 group-hover:border-[#FF9933] transition-all">
                    {iconsMap[card.step] || <CheckCircle2 className="w-5 h-5 text-[#FF9933]" />}
                  </div>
                </div>

                <h3 className="text-xl font-extrabold text-[#000080] mb-3 tracking-tight group-hover:text-[#FF9933] transition-colors">
                  {card.title}
                </h3>

                <p className="text-sm font-medium text-[#000080] opacity-85 leading-relaxed">
                  {card.description}
                </p>
              </div>

              {/* Bottom Subtle Indicator */}
              <div className="pt-4 mt-6 border-t-2 border-[#000080]/15 flex items-center justify-between text-[11px] font-mono text-[#000080] font-bold">
                <span>PILLAR {card.step}</span>
                <span className="text-[#138808] opacity-0 group-hover:opacity-100 transition-opacity font-extrabold">
                  ACTIVE SPEC →
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
