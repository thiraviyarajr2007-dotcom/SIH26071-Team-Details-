import React from 'react';
import {
  TrendingUp,
  Award,
  Globe2,
  ShieldCheck,
  Zap,
  Target,
  Users2,
  Layers,
  Sparkles,
} from 'lucide-react';
import { ProjectImpactCard } from '../types';

interface ProjectImpactSectionProps {
  impactCards: ProjectImpactCard[];
}

const impactIconMap: Record<string, React.ReactNode> = {
  Efficiency: <Zap className="w-5 h-5 text-[#FF9933]" />,
  Optimization: <TrendingUp className="w-5 h-5 text-[#138808]" />,
  'Public Governance': <Globe2 className="w-5 h-5 text-[#000080]" />,
  Resilience: <ShieldCheck className="w-5 h-5 text-[#138808]" />,
};

export const ProjectImpactSection: React.FC<ProjectImpactSectionProps> = ({ impactCards }) => {
  return (
    <section id="impact" className="py-20 bg-[#FFFFFF] relative border-t-2 border-[#000080]/15">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-[#FF9933]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#138808]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2 font-mono text-[#FF9933] text-sm tracking-wider font-extrabold">
              <span className="w-6 h-px bg-[#FF9933]" />
              <span>SECTION 03</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#000080] tracking-tight flex items-center gap-3">
              <span>Project Impact</span>
              <span className="text-xs font-mono px-3 py-1 rounded-full bg-[#138808] text-[#FFFFFF] font-extrabold uppercase tracking-wider">
                National Reach
              </span>
            </h2>
          </div>
          <p className="text-sm font-mono font-medium text-[#000080] max-w-sm opacity-85">
            Measurable socio-economic value, operational transformation, and nationwide public governance reach.
          </p>
        </div>

        {/* Editorial Highlight Banner */}
        <div
          id="impact-overview-banner"
          className="mb-10 p-5 rounded-2xl bg-[#FFFFFF] border-2 border-[#000080] flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-md shadow-[#000080]/10 relative overflow-hidden"
        >
          {/* Subtle tricolor top border */}
          <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-[#FF9933] via-[#FFFFFF] to-[#138808] border-b border-[#000080]" />

          <div className="flex items-center gap-3.5">
            <div className="p-2.5 rounded-xl bg-[#FF9933] border border-[#000080] text-[#FFFFFF] shrink-0">
              <Target className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-extrabold uppercase tracking-wider text-[#FF9933]">
                  NATIONAL EVALUATION CRITERION
                </span>
                <span className="w-2 h-2 rounded-full bg-[#138808] animate-pulse" />
              </div>
              <h3 className="text-base sm:text-lg font-extrabold text-[#000080] tracking-wide mt-0.5">
                Strategic Alignment with Ministry &amp; Societal Goals
              </h3>
            </div>
          </div>

          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#FFFFFF] border-2 border-[#000080] text-xs font-mono font-bold text-[#000080] self-start sm:self-auto">
            <Award className="w-3.5 h-3.5 text-[#FF9933]" />
            <span>SIH 2026 IMPACT SCOPE</span>
          </div>
        </div>

        {/* Impact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {impactCards.map((card, idx) => (
            <div
              key={card.id || idx}
              id={`impact-card-${card.id}`}
              className="p-6 sm:p-7 rounded-2xl bg-[#FFFFFF] border-2 border-[#000080] hover:border-[#FF9933] shadow-md shadow-[#000080]/10 transition-all duration-300 hover:-translate-y-1 group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 rounded-xl bg-[#FFFFFF] border-2 border-[#000080] group-hover:border-[#FF9933] transition-colors">
                    {impactIconMap[card.tag] || <Sparkles className="w-5 h-5 text-[#FF9933]" />}
                  </div>
                  <span className="px-3 py-1 rounded-full text-[11px] font-mono font-bold tracking-wider text-[#000080] bg-[#FF9933]/20 border border-[#FF9933]">
                    {card.tag}
                  </span>
                </div>

                <div className="font-mono text-2xl sm:text-3xl font-extrabold text-[#FF9933] tracking-tight mb-2">
                  {card.metric}
                </div>

                <h4 className="text-lg font-extrabold text-[#000080] tracking-wide mb-2 group-hover:text-[#FF9933] transition-colors">
                  {card.title}
                </h4>

                <p className="text-sm font-medium text-[#000080] leading-relaxed opacity-85">
                  {card.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t-2 border-[#000080]/15 flex items-center justify-between text-xs font-mono text-[#000080] font-bold">
                <span className="flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5 text-[#000080]" />
                  <span>Scope:</span>
                </span>
                <span className="text-[#138808] font-extrabold">{card.scope}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
