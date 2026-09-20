import React from 'react';
import { BarChart3, AlertCircle, CheckCircle, Gauge, ArrowUpRight, ShieldCheck } from 'lucide-react';
import { BenchmarkItem } from '../types';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface BenchmarkSectionProps {
  benchmarks: BenchmarkItem[];
}

export const BenchmarkSection: React.FC<BenchmarkSectionProps> = ({ benchmarks }) => {
  const [sectionRef, isSectionVisible] = useScrollAnimation({ threshold: 0.1 });

  return (
    <section 
      id="benchmarks" 
      ref={sectionRef}
      className={`py-20 bg-[#FFFFFF] relative border-t-2 border-[#000080]/15 transition-all duration-700 ${
        isSectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
    >
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/3 w-80 h-80 bg-[#138808]/15 rounded-full blur-3xl pointer-events-none" />

      {/* Subtle Ashoka Chakra-inspired background pattern */}
      <div className="absolute inset-0 ashoka-chakra-pattern pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2 font-mono text-[#FF9933] text-sm tracking-wider font-extrabold">
              <span className="w-6 h-px bg-[#FF9933]" />
              <span>SECTION 10</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#000080] tracking-tight flex items-center gap-3">
              <span>Benchmarks &amp; Results</span>
              <span className="text-xs font-mono px-3 py-1 rounded-full bg-[#138808] text-[#FFFFFF] font-extrabold uppercase tracking-wider">
                Audited Metrics
              </span>
            </h2>
          </div>
          <p className="text-sm font-mono font-medium text-[#000080] max-w-sm opacity-85">
            Quantitative evaluation criteria comparing performance metrics against standard benchmarks.
          </p>
        </div>

        {/* Primary Benchmark Validation Notice as requested */}
        <div
          id="benchmark-validation-banner"
          className="mb-10 p-4 sm:p-5 rounded-2xl bg-[#FFFFFF] border-2 border-[#000080] shadow-md flex items-start sm:items-center justify-between gap-4 relative overflow-hidden"
        >
          <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-[#FF9933] via-[#FFFFFF] to-[#138808] border-b border-[#000080]" />

          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-[#FF9933]/20 border border-[#FF9933] text-[#000080] shrink-0">
              <ShieldCheck className="w-5 h-5 text-[#000080]" />
            </div>
            <div>
              <h4 className="text-sm font-extrabold text-[#000080] tracking-wide">
                Evaluation Protocol &amp; Verification
              </h4>
              <p className="text-xs font-mono font-medium text-[#000080] opacity-85 mt-0.5">
                Validated benchmark results will be added here upon final judge test harness execution.
              </p>
            </div>
          </div>

          <span className="hidden sm:inline-block px-3 py-1 rounded-full text-[11px] font-mono bg-[#138808] text-[#FFFFFF] font-extrabold">
            AUDIT ACTIVE
          </span>
        </div>

        {/* Metric Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {benchmarks.map((item, idx) => (
            <div
              key={idx}
              id={`benchmark-card-${idx}`}
              className="p-6 rounded-2xl bg-[#FFFFFF] border-2 border-[#000080] hover:border-[#FF9933] premium-card-hover shadow-md shadow-[#000080]/10 flex flex-col justify-between"
            >
              {/* Metric Title & Icon */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono text-[#000080] font-extrabold px-2.5 py-0.5 rounded bg-[#FF9933]/20 border border-[#FF9933]">
                    METRIC 0{idx + 1}
                  </span>
                  <div className="w-8 h-8 rounded-lg bg-[#FFFFFF] border-2 border-[#000080] flex items-center justify-center text-[#000080]">
                    <Gauge className="w-4 h-4 text-[#FF9933]" />
                  </div>
                </div>

                <h3 className="text-lg font-extrabold text-[#000080] mb-4 tracking-tight">
                  {item.metric}
                </h3>

                {/* Metric Value & Comparison */}
                <div className="space-y-3 p-3.5 rounded-xl bg-[#FFFFFF] border-2 border-[#000080]/20 font-mono text-xs">
                  <div className="flex items-center justify-between">
                    <span className="text-[#000080] opacity-75 font-bold">Baseline:</span>
                    <span className="text-[#000080] font-extrabold">{item.baseline}</span>
                  </div>
                  <div className="flex items-center justify-between border-t-2 border-[#000080]/15 pt-2">
                    <span className="text-[#138808] font-extrabold">Our Result:</span>
                    <span className="text-[#138808] font-extrabold">{item.ourResult}</span>
                  </div>
                </div>
              </div>

              {/* Target / Status note */}
              <div className="mt-5 pt-3 border-t-2 border-[#000080]/15 flex items-center justify-between text-[11px] font-mono text-[#000080] font-bold">
                <span>{item.target || 'Target Standard'}</span>
                <span className="text-[#FF9933] font-extrabold">Pending Live Run</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
