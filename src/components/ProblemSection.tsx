import React from 'react';
import { AlertCircle, Building2, Tag, Layers, Hash, BookOpen } from 'lucide-react';
import { ProblemStatementData } from '../types';

interface ProblemSectionProps {
  problemData: ProblemStatementData;
}

export const ProblemSection: React.FC<ProblemSectionProps> = ({ problemData }) => {
  return (
    <section id="problem" className="py-20 bg-[#FFFFFF] relative border-t-2 border-[#000080]/15">
      {/* Background ambient lighting */}
      <div className="absolute top-10 right-10 w-80 h-80 bg-[#FF9933]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2 font-mono text-[#FF9933] text-sm tracking-wider font-extrabold">
              <span className="w-6 h-px bg-[#FF9933]" />
              <span>SECTION 05</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#000080] tracking-tight flex items-center gap-3">
              <span>Problem Statement</span>
              <span className="text-xs font-mono px-3 py-1 rounded-full bg-[#FF9933] text-[#000080] font-extrabold uppercase tracking-wider border border-[#000080]">
                Official Brief
              </span>
            </h2>
          </div>
          <div className="text-sm font-mono font-medium text-[#000080] max-w-sm opacity-85">
            Primary challenge definition sourced directly from the official ministry problem dossier.
          </div>
        </div>

        {/* Large Editorial Card */}
        <div
          id="problem-statement-card"
          className="relative rounded-2xl bg-[#FFFFFF] border-2 border-[#000080] p-6 sm:p-10 shadow-xl shadow-[#000080]/10 overflow-hidden"
        >
          {/* Top subtle tricolor stripe */}
          <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-[#FF9933] via-[#FFFFFF] to-[#138808] border-b border-[#000080]" />

          {/* Top Challenge Indicator */}
          <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b-2 border-[#000080]/15 mb-8">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-[#FF9933]/20 border border-[#FF9933] text-[#000080] text-xs font-mono font-extrabold tracking-wide">
              <AlertCircle className="w-4 h-4 text-[#FF9933] shrink-0" />
              <span>OFFICIAL SIH CHALLENGE BRIEF</span>
            </div>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#FFFFFF] border-2 border-[#000080] font-mono text-xs text-[#000080] font-bold">
              <Hash className="w-3.5 h-3.5 text-[#FF9933]" />
              <span className="text-[#000080] font-extrabold">{problemData.id}</span>
            </div>
          </div>

          {/* Problem Statement Title */}
          <div className="mb-8">
            <span className="text-xs font-mono font-bold uppercase text-[#000080] opacity-75 tracking-wider block mb-2">
              Problem Statement Title
            </span>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#000080] tracking-tight leading-snug">
              {problemData.title}
            </h3>
          </div>

          {/* Meta Grid: Organization | Category | Theme */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
            <div className="p-4 rounded-xl bg-[#FFFFFF] border-2 border-[#000080]/20 flex items-start gap-3">
              <div className="p-2 rounded-lg bg-[#FF9933]/20 text-[#000080] border border-[#FF9933] shrink-0">
                <Building2 className="w-4 h-4" />
              </div>
              <div>
                <div className="text-[11px] font-mono text-[#000080] opacity-75 uppercase tracking-wider font-bold">
                  Organization / Ministry
                </div>
                <div className="text-sm font-extrabold text-[#000080] mt-0.5">
                  {problemData.organization}
                </div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-[#FFFFFF] border-2 border-[#000080]/20 flex items-start gap-3">
              <div className="p-2 rounded-lg bg-[#138808]/20 text-[#138808] border border-[#138808] shrink-0">
                <Tag className="w-4 h-4" />
              </div>
              <div>
                <div className="text-[11px] font-mono text-[#000080] opacity-75 uppercase tracking-wider font-bold">
                  Category
                </div>
                <div className="text-sm font-extrabold text-[#000080] mt-0.5">
                  {problemData.category}
                </div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-[#FFFFFF] border-2 border-[#000080]/20 flex items-start gap-3">
              <div className="p-2 rounded-lg bg-[#000080]/15 text-[#000080] border border-[#000080] shrink-0">
                <Layers className="w-4 h-4" />
              </div>
              <div>
                <div className="text-[11px] font-mono text-[#000080] opacity-75 uppercase tracking-wider font-bold">
                  Theme
                </div>
                <div className="text-sm font-extrabold text-[#000080] mt-0.5">
                  {problemData.theme}
                </div>
              </div>
            </div>
          </div>

          {/* Complete Problem Description */}
          <div className="pt-6 border-t-2 border-[#000080]/15">
            <div className="flex items-center gap-2 mb-3">
              <BookOpen className="w-4 h-4 text-[#FF9933]" />
              <span className="text-xs font-mono font-bold uppercase text-[#000080] opacity-75 tracking-wider">
                Complete Problem Description
              </span>
            </div>
            <div className="p-5 sm:p-6 rounded-xl bg-[#FFFFFF] border-2 border-[#000080]/20 text-[#000080] text-base leading-relaxed whitespace-pre-line font-medium opacity-90">
              {problemData.description}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
