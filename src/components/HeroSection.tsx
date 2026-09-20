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
          className={`inline-flex items-center gap-3 px-5 py-2.5 rounded-full glass-card-navy mb-8 transition-all duration-700 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
          }`}
        >
          <div className="flex gap-1.5 items-center">
            <span className="w-3 h-3 rounded-full bg-[#FF9933] shadow-sm" />
            <span className="w-3 h-3 rounded-full bg-[#FFFFFF] border-2 border-[#000080]" />
            <span className="w-3 h-3 rounded-full bg-[#138808] shadow-sm" />
          </div>
          <span className="font-mono text-xs uppercase tracking-widest text-[#000080] font-extrabold">
            SMART INDIA HACKATHON 2026
          </span>
          <span className="text-[#000080] opacity-50">|</span>
          <span className="font-mono text-xs text-[#138808] font-extrabold">TIRANGA EDITION</span>
        </div>

        {/* Project Name Heading */}
        <h1
          id="hero-project-title"
          className={`text-5xl sm:text-7xl md:text-8xl font-extrabold tracking-tight text-[#000080] mb-8 leading-[1.05] transition-all duration-700 delay-100 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="block gradient-text-navy">{projectMetadata.projectName}</span>
        </h1>

        {/* One-Line Project Description */}
        <p
          id="hero-project-tagline"
          className={`text-xl sm:text-2xl md:text-3xl text-[#000080] max-w-4xl mx-auto font-medium leading-relaxed mb-12 text-balance opacity-85 transition-all duration-700 delay-200 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {projectMetadata.tagline}
        </p>

        {/* CTAs: Explore Solution & View Project */}
        <div 
          className={`flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mb-16 transition-all duration-700 delay-300 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <button
            id="hero-btn-explore"
            onClick={onExploreSolution}
            className="w-full sm:w-auto px-10 py-4 rounded-xl premium-button-saffron font-extrabold text-lg tracking-wide flex items-center justify-center gap-3 cursor-pointer focus-ring"
          >
            <span>Explore Team &amp; Solution</span>
            <ArrowDown className="w-5 h-5 stroke-[2.5]" />
          </button>

          <button
            id="hero-btn-view-project"
            onClick={onViewProject}
            className="group w-full sm:w-auto px-10 py-4 rounded-xl glass-card-navy hover:glass-card-saffron text-[#000080] font-extrabold text-lg tracking-wide flex items-center justify-center gap-3 cursor-pointer focus-ring transition-all duration-300"
          >
            <span>View Project Dossier</span>
            <ExternalLink className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        {/* SIH Pillars: Saffron, Navy Blue, White, Green */}
        <div
          id="hero-pillars"
          className={`w-full max-w-5xl pt-10 border-t-2 border-[#000080]/10 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-5 text-left transition-all duration-700 delay-400 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Pillar 1: Saffron */}
          <div className="p-4 rounded-xl glass-card-saffron flex items-center gap-4 hover:scale-105 transition-all duration-300 cursor-pointer group">
            <div className="w-10 h-10 rounded-xl bg-[#FF9933] border-2 border-[#000080] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform shadow-lg">
              <Shield className="w-5 h-5 text-[#FFFFFF]" />
            </div>
            <div>
              <div className="text-[11px] font-mono text-[#FF9933] uppercase tracking-wider font-extrabold">National Pride</div>
              <div className="text-sm font-extrabold text-[#000080] tracking-wide">SIH 2026</div>
            </div>
          </div>

          {/* Pillar 2: Navy */}
          <div className="p-4 rounded-xl glass-card-navy flex items-center gap-4 hover:scale-105 transition-all duration-300 cursor-pointer group">
            <div className="w-10 h-10 rounded-xl bg-[#000080] border-2 border-[#000080] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform shadow-lg">
              <Cpu className="w-5 h-5 text-[#FFFFFF]" />
            </div>
            <div>
              <div className="text-[11px] font-mono text-[#000080] uppercase tracking-wider font-extrabold">Technology</div>
              <div className="text-sm font-extrabold text-[#000080] tracking-wide">Architecture</div>
            </div>
          </div>

          {/* Pillar 3: White / Chakra */}
          <div className="p-4 rounded-xl glass-card flex items-center gap-4 hover:scale-105 transition-all duration-300 cursor-pointer group">
            <div className="w-10 h-10 rounded-xl bg-[#FFFFFF] border-2 border-[#000080] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform shadow-lg">
              <Activity className="w-5 h-5 text-[#000080]" />
            </div>
            <div>
              <div className="text-[11px] font-mono text-[#000080] uppercase tracking-wider font-extrabold">Validation</div>
              <div className="text-sm font-extrabold text-[#000080] tracking-wide">Integrity</div>
            </div>
          </div>

          {/* Pillar 4: India Green */}
          <div className="p-4 rounded-xl glass-card-green flex items-center gap-4 hover:scale-105 transition-all duration-300 cursor-pointer group">
            <div className="w-10 h-10 rounded-xl bg-[#138808] border-2 border-[#000080] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform shadow-lg">
              <Zap className="w-5 h-5 text-[#FFFFFF]" />
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

