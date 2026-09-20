import React from 'react';
import { ArrowDown, Users, Sparkles } from 'lucide-react';

interface TransitionBannerProps {
  onExploreSpotlight: () => void;
}

export const TransitionBanner: React.FC<TransitionBannerProps> = ({ onExploreSpotlight }) => {
  return (
    <section
      id="transition-banner"
      className="relative py-20 sm:py-28 bg-[#FFFFFF] border-y-2 border-[#000080]/15 overflow-hidden text-center"
    >
      {/* Visual background dynamics - Indian flag theme */}
      <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-[#FF9933] via-[#FFFFFF] to-[#138808] border-b border-[#000080]" />
      <div className="absolute bottom-0 inset-x-0 h-1.5 bg-gradient-to-r from-[#FF9933] via-[#FFFFFF] to-[#138808] border-t border-[#000080]" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        {/* Phase Indicator */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FFFFFF] border-2 border-[#000080] text-[#000080] font-mono text-xs font-extrabold uppercase tracking-widest mb-6 shadow-sm">
          <Sparkles className="w-3.5 h-3.5 text-[#FF9933]" />
          <span>VISUAL SHOWCASE TRANSITION</span>
        </div>

        {/* Big Editorial Headline */}
        <h2 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-[#000080] tracking-tight leading-[1.08] mb-6">
          <span className="block text-[#FF9933] text-2xl sm:text-3xl font-mono font-extrabold tracking-normal mb-2">
            PART 02
          </span>
          THE PEOPLE<br />
          <span className="text-[#138808]">
            BEHIND THE PROJECT
          </span>
        </h2>

        {/* Subtitle */}
        <p className="text-lg sm:text-2xl text-[#000080] font-bold max-w-2xl mx-auto mb-10 leading-relaxed italic opacity-90">
          &ldquo;Meet the team, mentors and the work behind our solution.&rdquo;
        </p>

        {/* Smooth Scroll Button */}
        <button
          id="btn-explore-spotlight"
          onClick={onExploreSpotlight}
          className="group px-8 py-4 rounded-2xl bg-[#FF9933] hover:bg-[#FF9933]/90 text-[#000080] font-extrabold text-base tracking-wider uppercase flex items-center gap-3 border-2 border-[#000080] shadow-md transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
        >
          <span>EXPLORE THE SPOTLIGHT</span>
          <ArrowDown className="w-5 h-5 text-[#000080] group-hover:translate-y-1 transition-transform" />
        </button>
      </div>
    </section>
  );
};
