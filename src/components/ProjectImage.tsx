import React, { useState } from 'react';
import { LayoutDashboard, Network, Terminal, Users, Sparkles } from 'lucide-react';

interface ProjectImageProps {
  src: string;
  alt: string;
  className?: string;
  fallbackType?: 'project' | 'team' | 'mentor' | 'sih';
  fallbackInitials?: string;
  title?: string;
  badge?: string;
}

export const ProjectImage: React.FC<ProjectImageProps> = ({
  src,
  alt,
  className = '',
  fallbackType = 'project',
  fallbackInitials = 'SIH',
  title = 'System Architecture',
  badge = 'Interactive Preview',
}) => {
  const [hasError, setHasError] = useState(false);

  if (hasError || !src) {
    if (fallbackType === 'team' || fallbackType === 'mentor') {
      return (
        <div
          className={`flex flex-col items-center justify-center bg-[#FFFFFF] border-2 border-[#000080] rounded-2xl relative overflow-hidden group select-none ${className}`}
        >
          {/* Subtle grid pattern background */}
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#000080_1px,transparent_1px)] [background-size:16px_16px]" />
          
          {/* Ambient Glow */}
          <div className="absolute -top-12 -right-12 w-32 h-32 bg-[#FF9933]/15 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute -bottom-12 -left-12 w-32 h-32 bg-[#138808]/15 rounded-full blur-2xl pointer-events-none" />

          {/* Initials Box */}
          <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl bg-[#000080] border-2 border-[#FF9933] flex items-center justify-center shadow-md transform transition-transform duration-300 group-hover:scale-105">
            <span className="text-2xl sm:text-3xl font-extrabold tracking-wider text-[#FFFFFF]">
              {fallbackInitials}
            </span>
          </div>

          <div className="mt-3 text-center px-4 relative z-10">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-mono font-bold tracking-wide text-[#000080] bg-[#FF9933]/20 border border-[#FF9933]">
              <Sparkles className="w-3 h-3 text-[#FF9933]" />
              {badge}
            </span>
          </div>
        </div>
      );
    }

    // Default 'project' spotlight fallback
    return (
      <div
        className={`relative w-full h-full min-h-[300px] flex flex-col justify-between p-6 sm:p-8 bg-[#FFFFFF] border-2 border-[#000080] rounded-2xl overflow-hidden select-none ${className}`}
      >
        {/* Background Grid */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#000080_1px,transparent_1px)] [background-size:24px_24px]" />
        
        {/* Glowing Orbs */}
        <div className="absolute top-0 right-1/4 w-72 h-72 bg-[#FF9933]/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-[#138808]/15 rounded-full blur-3xl pointer-events-none" />

        {/* Top Bar simulating a futuristic UI console */}
        <div className="relative z-10 flex items-center justify-between border-b-2 border-[#000080]/15 pb-4">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-[#FF9933]" />
            <div className="w-3 h-3 rounded-full bg-[#FFFFFF] border border-[#000080]" />
            <div className="w-3 h-3 rounded-full bg-[#138808]" />
            <span className="ml-2 font-mono text-xs font-bold text-[#000080]">SIH 2026 // SYSTEM CONSOLE</span>
          </div>
          <span className="text-xs font-mono font-bold text-[#000080] bg-[#FF9933]/20 border border-[#FF9933] px-2.5 py-1 rounded">
            {badge}
          </span>
        </div>

        {/* Center Graphic */}
        <div className="relative z-10 my-auto py-8 flex flex-col items-center justify-center text-center">
          <div className="relative mb-4">
            <div className="w-20 h-20 rounded-2xl bg-[#000080] border-2 border-[#FF9933] flex items-center justify-center shadow-md">
              {title.toLowerCase().includes('architecture') ? (
                <Network className="w-10 h-10 text-[#FF9933]" />
              ) : title.toLowerCase().includes('prototype') ? (
                <Terminal className="w-10 h-10 text-[#138808]" />
              ) : title.toLowerCase().includes('team') ? (
                <Users className="w-10 h-10 text-[#FF9933]" />
              ) : (
                <LayoutDashboard className="w-10 h-10 text-[#FFFFFF]" />
              )}
            </div>
            {/* Ping effect */}
            <div className="absolute inset-0 rounded-2xl border border-[#FF9933] animate-ping opacity-25" />
          </div>

          <h4 className="text-lg sm:text-xl font-extrabold text-[#000080] tracking-wide max-w-md">
            {title}
          </h4>
          <p className="text-xs sm:text-sm font-medium text-[#000080] max-w-sm mt-1 opacity-80">
            Production visualization ready for Smart India Hackathon judge evaluation
          </p>
        </div>

        {/* Bottom Metadata */}
        <div className="relative z-10 flex items-center justify-between text-[11px] font-mono text-[#000080] border-t-2 border-[#000080]/15 pt-3 font-bold">
          <span>SOURCE: /public/images/project/</span>
          <span className="text-[#138808]">LATENCY: REAL-TIME</span>
        </div>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      onError={() => setHasError(true)}
      className={`${className} object-cover`}
      loading="lazy"
    />
  );
};
