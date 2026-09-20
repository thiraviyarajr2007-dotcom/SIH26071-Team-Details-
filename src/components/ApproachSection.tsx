import React, { useState } from 'react';
import {
  Search,
  FileText,
  Database,
  Filter,
  Cpu,
  Server,
  Layout,
  Layers,
  ShieldCheck,
  CloudLightning,
  ChevronRight,
  Zap,
  AlertTriangle,
  Activity,
} from 'lucide-react';
import { WorkflowStep } from '../types';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface ApproachSectionProps {
  workflow: WorkflowStep[];
}

const iconComponentMap: Record<string, React.ElementType> = {
  Search,
  FileText,
  Database,
  Filter,
  Cpu,
  Server,
  Layout,
  Layers,
  ShieldCheck,
  CloudLightning,
  Activity,
  AlertTriangle,
  Zap,
};

export const ApproachSection: React.FC<ApproachSectionProps> = ({ workflow }) => {
  const [selectedStepIndex, setSelectedStepIndex] = useState<number>(0);
  const [sectionRef, isSectionVisible] = useScrollAnimation({ threshold: 0.1 });

  const activeStep = workflow[selectedStepIndex] || workflow[0];
  const IconComponent = iconComponentMap[activeStep.iconName] || Zap;

  return (
    <section 
      id="approach" 
      ref={sectionRef}
      className={`py-20 bg-[#FFFFFF] relative border-t-2 border-[#000080]/15 transition-all duration-700 ${
        isSectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
    >
      {/* Ambient background glows */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-[#FF9933]/15 rounded-full blur-3xl pointer-events-none" />

      {/* Subtle Ashoka Chakra-inspired background pattern */}
      <div className="absolute inset-0 ashoka-chakra-pattern pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2 font-mono text-[#FF9933] text-sm tracking-wider font-extrabold">
              <span className="w-6 h-px bg-[#FF9933]" />
              <span>SECTION 07</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#000080] tracking-tight flex items-center gap-3">
              <span>Our Approach &amp; Workflow</span>
              <span className="text-xs font-mono px-3 py-1 rounded-full bg-[#138808] text-[#FFFFFF] font-extrabold uppercase tracking-wider">
                10-Stage Pipeline
              </span>
            </h2>
          </div>
          <p className="text-sm font-mono font-medium text-[#000080] max-w-sm opacity-85">
            End-to-end engineering methodology from initial problem ingestion to national-scale deployment.
          </p>
        </div>

        {/* Highlight Focus Inspection Box for Selected Step */}
        <div
          id="approach-active-inspector"
          className="mb-12 p-6 sm:p-8 rounded-2xl bg-[#FFFFFF] border-2 border-[#000080] shadow-xl shadow-[#000080]/10 relative overflow-hidden"
        >
          {/* Subtle top tricolor bar */}
          <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-[#FF9933] via-[#FFFFFF] to-[#138808] border-b border-[#000080]" />

          <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
            <IconComponent className="w-48 h-48 text-[#000080]" />
          </div>

          <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-2xl bg-[#000080] border-2 border-[#FF9933] flex items-center justify-center shrink-0 shadow-md">
                <IconComponent className="w-7 h-7 text-[#FF9933]" />
              </div>
              <div>
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs font-extrabold text-[#000080] px-2.5 py-0.5 rounded bg-[#FF9933]/20 border border-[#FF9933]">
                    STAGE {activeStep.number} / {workflow.length}
                  </span>
                  <span className="text-xs font-mono text-[#138808] font-extrabold">ENGINEERING PIPELINE</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#000080] tracking-tight mt-1.5">
                  {activeStep.title}
                </h3>
                <p className="text-sm sm:text-base font-medium text-[#000080] opacity-85 mt-2 max-w-2xl leading-relaxed">
                  {activeStep.description}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 font-mono text-xs text-[#000080] font-bold shrink-0 bg-[#FFFFFF] px-3.5 py-2 rounded-xl border-2 border-[#000080]">
              <span className="w-2 h-2 rounded-full bg-[#138808] animate-pulse" />
              <span>ACTIVE STAGE INSPECTION</span>
            </div>
          </div>
        </div>

        {/* Workflow Progression Stepper with Animated Connecting Lines */}
        <div className="relative">
          {/* Connecting glowing line on desktop */}
          <div className="hidden lg:block absolute top-7 left-8 right-8 h-1 bg-gradient-to-r from-[#FF9933] via-[#000080] to-[#138808] opacity-30 -z-0" />

          {/* Stepper Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-5 lg:grid-cols-10 gap-3 relative z-10">
            {workflow.map((step, idx) => {
              const StepIcon = iconComponentMap[step.iconName] || Zap;
              const isSelected = selectedStepIndex === idx;

              return (
                <button
                  key={step.number}
                  id={`workflow-step-${step.number}`}
                  onClick={() => setSelectedStepIndex(idx)}
                  className={`flex flex-col items-center text-center p-3 rounded-xl transition-all duration-200 cursor-pointer group focus:outline-none ${
                    isSelected
                      ? 'bg-[#FFFFFF] border-2 border-[#FF9933] shadow-md scale-105'
                      : 'bg-[#FFFFFF] border-2 border-[#000080]/20 hover:border-[#000080] hover:bg-[#FFFFFF]'
                  }`}
                >
                  {/* Step Circle */}
                  <div
                    className={`w-11 h-11 rounded-xl flex items-center justify-center mb-2.5 transition-all ${
                      isSelected
                        ? 'bg-[#FF9933] border border-[#000080] text-[#FFFFFF] shadow-sm font-bold'
                        : 'bg-[#FFFFFF] border border-[#000080] text-[#000080] group-hover:text-[#FF9933] group-hover:border-[#FF9933]'
                    }`}
                  >
                    <StepIcon className="w-5 h-5" />
                  </div>

                  <span className="font-mono text-[10px] text-[#FF9933] font-extrabold block">
                    {step.number}
                  </span>
                  <span className="text-xs font-extrabold text-[#000080] line-clamp-2 mt-0.5 leading-snug">
                    {step.title}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Mobile / Tablet Flow Guide */}
        <div className="mt-8 flex items-center justify-center gap-2 text-xs font-mono font-bold text-[#000080] opacity-80">
          <span>Click any phase above to inspect technical requirements &amp; execution</span>
          <ChevronRight className="w-3.5 h-3.5 text-[#FF9933]" />
        </div>
      </div>
    </section>
  );
};
