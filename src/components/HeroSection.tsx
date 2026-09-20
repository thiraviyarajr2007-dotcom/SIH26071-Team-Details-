import React, { useEffect, useState } from 'react';
import { ArrowDown, ExternalLink, Shield, Cpu, Zap, Activity } from 'lucide-react';
import { ProjectMetadata } from '../types';

interface HeroSectionProps {
  projectMetadata: ProjectMetadata;
  onExploreSolution: () => void;
  onViewProject: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  projectMetadata,
  onExploreSolution,
  onViewProject,
}) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Trigger entrance animations after component mount
    const timer = setTimeout(() => setIsLoaded(true), 100);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-[92vh] sm:min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-[#FFFFFF]"
    >
      {/* Subtle Animated Background Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#000080_1px,transparent_1px)] [background-size:32px_32px] opacity-10" />
      
      {/* Simple Ashoka Chakra-inspired Background */}
      <div className="absolute inset-0 ashoka-chakra-gradient pointer-events-none" />

      {/* Tricolor Ambient Aura: Saffron Top-Left, Ashoka Navy Center, India Green Bottom-Right */}
      <div 
        className={`absolute top-12 left-1/4 w-[450px] sm:w-[600px] h-[350px] bg-[#FF9933]/15 rounded-full blur-[140px] pointer-events-none transition-all duration-1000 ${
          isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
        }`}
      />
      <div 
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[#000080]/10 rounded-full blur-[160px] pointer-events-none transition-all duration-1000 delay-200 ${
          isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
        }`}
      />
      <div 
        className={`absolute bottom-10 right-1/4 w-[450px] sm:w-[600px] h-[350px] bg-[#138808]/15 rounded-full blur-[140px] pointer-events-none transition-all duration-1000 delay-300 ${
          isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'
        }`}
      />

      {/* Decorative Subtle Tiranga Gradient Border Lines */}
      <div className="absolute top-0 inset-x-0 h-[3px] bg-gradient-to-r from-[#FF9933] via-[#FFFFFF] to-[#138808]" />
      <div className="absolute bottom-0 inset-x-0 h-px bg-[#000080]/15" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* National Flag Accent Pill */}
        <div 
          className={`inline-flex items-center gap-3 px-4 py-2 rounded-full bg-[#FFFFFF] border-2 border-[#000080] shadow-sm mb-7 transition-all duration-700 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
          }`}
        >
          <div className="flex gap-1 items-center">
            <span className="w-2.5 h-2.5 rounded-full bg-[#FF9933]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#FFFFFF] border border-[#000080]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#138808]" />
          </div>
          <span className="font-mono text-xs uppercase tracking-widest text-[#000080] font-extrabold">
            SMART INDIA HACKATHON 2026
          </span>
          <span className="text-[#000080]">|</span>
          <span className="font-mono text-xs text-[#138808] font-extrabold">TIRANGA EDITION</span>
        </div>

        {/* Project Name Heading */}
        <h1
          id="hero-project-title"
          className={`text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-[#000080] mb-6 leading-[1.1] transition-all duration-700 delay-100 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="block">{projectMetadata.projectName}</span>
        </h1>

        {/* One-Line Project Description */}
        <p
          id="hero-project-tagline"
          className={`text-lg sm:text-xl md:text-2xl text-[#000080] max-w-3xl mx-auto font-medium leading-relaxed mb-10 text-balance opacity-90 transition-all duration-700 delay-200 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {projectMetadata.tagline}
        </p>

        {/* CTAs: Explore Solution & View Project */}
        <div 
          className={`flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mb-14 transition-all duration-700 delay-300 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <button
            id="hero-btn-explore"
            onClick={onExploreSolution}
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-[#FF9933] hover:bg-[#FF9933]/90 text-[#FFFFFF] font-extrabold text-base tracking-wide flex items-center justify-center gap-2 border-2 border-[#000080] shadow-md shadow-[#000080]/15 premium-button-hover cursor-pointer focus-ring"
          >
            <span>Explore Team &amp; Solution</span>
            <ArrowDown className="w-4 h-4 text-[#FFFFFF] stroke-[2.5]" />
          </button>

          <button
            id="hero-btn-view-project"
            onClick={onViewProject}
            className="group w-full sm:w-auto px-8 py-3.5 rounded-xl bg-[#FFFFFF] hover:bg-[#138808] text-[#000080] hover:text-[#FFFFFF] font-extrabold text-base tracking-wide flex items-center justify-center gap-2 border-2 border-[#000080] shadow-sm premium-button-hover cursor-pointer focus-ring"
          >
            <span>View Project Dossier</span>
            <ExternalLink className="w-4 h-4 text-[#000080] group-hover:text-[#FFFFFF]" />
          </button>
        </div>

        {/* SIH Pillars: Saffron, Navy Blue, White, Green */}
        <div
          id="hero-pillars"
          className={`w-full max-w-4xl pt-8 border-t-2 border-[#000080]/15 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 text-left transition-all duration-700 delay-400 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Pillar 1: Saffron */}
          <div className="p-3.5 rounded-xl bg-[#FFFFFF] border-2 border-[#FF9933] shadow-sm flex items-center gap-3 hover:shadow-md transition-shadow group">
            <div className="w-9 h-9 rounded-lg bg-[#FF9933] border border-[#000080] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
              <Shield className="w-4 h-4 text-[#FFFFFF]" />
            </div>
            <div>
              <div className="text-[11px] font-mono text-[#FF9933] uppercase tracking-wider font-extrabold">National Pride</div>
              <div className="text-sm font-extrabold text-[#000080] tracking-wide">SIH 2026</div>
            </div>
          </div>

          {/* Pillar 2: Navy */}
          <div className="p-3.5 rounded-xl bg-[#FFFFFF] border-2 border-[#000080] shadow-sm flex items-center gap-3 hover:shadow-md transition-shadow group">
            <div className="w-9 h-9 rounded-lg bg-[#000080] border border-[#000080] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
              <Cpu className="w-4 h-4 text-[#FFFFFF]" />
            </div>
            <div>
              <div className="text-[11px] font-mono text-[#000080] uppercase tracking-wider font-extrabold">Technology</div>
              <div className="text-sm font-extrabold text-[#000080] tracking-wide">Architecture</div>
            </div>
          </div>

          {/* Pillar 3: White / Chakra */}
          <div className="p-3.5 rounded-xl bg-[#FFFFFF] border-2 border-[#000080] shadow-sm flex items-center gap-3 hover:shadow-md transition-shadow group">
            <div className="w-9 h-9 rounded-lg bg-[#FFFFFF] border-2 border-[#000080] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
              <Activity className="w-4 h-4 text-[#000080]" />
            </div>
            <div>
              <div className="text-[11px] font-mono text-[#000080] uppercase tracking-wider font-extrabold">Validation</div>
              <div className="text-sm font-extrabold text-[#000080] tracking-wide">Integrity</div>
            </div>
          </div>

          {/* Pillar 4: India Green */}
          <div className="p-3.5 rounded-xl bg-[#FFFFFF] border-2 border-[#138808] shadow-sm flex items-center gap-3 hover:shadow-md transition-shadow group">
            <div className="w-9 h-9 rounded-lg bg-[#138808] border border-[#000080] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
              <Zap className="w-4 h-4 text-[#FFFFFF]" />
            </div>
            <div>
              <div className="text-[11px] font-mono text-[#138808] uppercase tracking-wider font-extrabold">Growth &amp; Scale</div>
              <div className="text-sm font-extrabold text-[#000080] tracking-wide">National Impact</div>
            </div>
          </div>
        </div>

        {/* Subtitle Scroll Hint with India Flag Accent */}
        <div 
          className={`mt-12 flex items-center gap-2.5 text-xs font-mono font-bold text-[#000080] transition-all duration-700 delay-500 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="flex gap-1 items-center">
            <span className="w-2 h-2 rounded-full bg-[#FF9933]" />
            <span className="w-2 h-2 rounded-full bg-[#FFFFFF] border border-[#000080]" />
            <span className="w-2 h-2 rounded-full bg-[#138808]" />
          </span>
          <span className="tracking-wide">INNOVATION FOR ATMANIRBHAR BHARAT // SIH JURY DOSSIER</span>
        </div>
      </div>
    </section>
  );
};

