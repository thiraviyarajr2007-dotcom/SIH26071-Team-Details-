import React, { useState, useEffect, useCallback } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  Linkedin,
  Award,
  Building2,
  ExternalLink,
  GraduationCap,
} from 'lucide-react';
import { Mentor } from '../types';
import { ProjectImage } from './ProjectImage';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface MentorSectionProps {
  mentors: Mentor[];
}

export const MentorSection: React.FC<MentorSectionProps> = ({ mentors }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [slideDirection, setSlideDirection] = useState<'right' | 'left'>('right');
  const total = mentors.length;
  const [sectionRef, isSectionVisible] = useScrollAnimation({ threshold: 0.1 });

  const handleNext = useCallback(() => {
    setSlideDirection('right');
    setCurrentIndex((prev) => (prev + 1) % total);
  }, [total]);

  const handlePrev = useCallback(() => {
    setSlideDirection('left');
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  const handleSelectMentor = (idx: number) => {
    setSlideDirection(idx > currentIndex ? 'right' : 'left');
    setCurrentIndex(idx);
  };

  // Automatic mentor rotation transition every 3 seconds
  useEffect(() => {
    if (isPaused || total <= 1) return;
    const interval = setInterval(() => {
      setSlideDirection('right');
      setCurrentIndex((prev) => (prev + 1) % total);
    }, 3000);

    return () => clearInterval(interval);
  }, [isPaused, currentIndex, total]);

  // Touch swipe support
  const [touchStart, setTouchStart] = useState<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStart === null) return;
    const touchEnd = e.changedTouches[0].clientX;
    const diff = touchStart - touchEnd;

    if (diff > 50) {
      handleNext();
    } else if (diff < -50) {
      handlePrev();
    }
    setTouchStart(null);
  };

  const activeMentor = mentors[currentIndex];

  return (
    <section
      id="mentors"
      ref={sectionRef}
      className={`py-24 bg-[#FFFFFF] relative border-t-2 border-[#000080]/15 overflow-hidden transition-all duration-700 ${
        isSectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
    >
      {/* Background ambient lighting - Indian Flag glow */}
      <div className="absolute top-1/2 right-1/4 w-[750px] h-[400px] bg-[#FF9933]/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-1/4 w-[600px] h-[350px] bg-[#138808]/15 rounded-full blur-[140px] pointer-events-none" />

      {/* Subtle Ashoka Chakra-inspired background pattern */}
      <div className="absolute inset-0 ashoka-chakra-pattern pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2 font-mono text-[#FF9933] text-sm tracking-wider font-extrabold">
              <span className="w-6 h-px bg-[#FF9933]" />
              <span>SECTION 02</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#000080] tracking-tight flex items-center gap-3">
              <span>Guided by Experience</span>
              <span className="text-xs font-mono px-3 py-1 rounded-full bg-[#FF9933] text-[#000080] font-extrabold uppercase tracking-wider border border-[#000080]">
                Mentorship
              </span>
            </h2>
          </div>
          <p className="text-sm font-mono font-medium text-[#000080] max-w-sm opacity-85">
            Distinguished academic and industrial leadership guiding technical feasibility and real-world deployment.
          </p>
        </div>

        {/* Visual Hierarchy Banner: TEAM → GUIDANCE → INNOVATION */}
        <div className="mb-10 p-5 rounded-2xl bg-[#FFFFFF] border-2 border-[#000080] relative overflow-hidden">
          {/* Top tricolor accent */}
          <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-[#FF9933] via-[#FFFFFF] to-[#138808] border-b border-[#000080]" />
          
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="text-center">
                <div className="w-12 h-12 rounded-xl bg-[#FF9933] border-2 border-[#000080] flex items-center justify-center mb-1">
                  <span className="text-xl font-extrabold text-[#FFFFFF]">T</span>
                </div>
                <span className="text-[10px] font-mono font-bold text-[#000080]">TEAM</span>
              </div>
              
              <div className="flex-1 h-px bg-gradient-to-r from-[#FF9933] to-[#000080] hidden sm:block" />
              
              <div className="text-center">
                <div className="w-12 h-12 rounded-xl bg-[#000080] border-2 border-[#FF9933] flex items-center justify-center mb-1">
                  <span className="text-xl font-extrabold text-[#FF9933]">G</span>
                </div>
                <span className="text-[10px] font-mono font-bold text-[#000080]">GUIDANCE</span>
              </div>
              
              <div className="flex-1 h-px bg-gradient-to-r from-[#000080] to-[#138808] hidden sm:block" />
              
              <div className="text-center">
                <div className="w-12 h-12 rounded-xl bg-[#138808] border-2 border-[#000080] flex items-center justify-center mb-1">
                  <span className="text-xl font-extrabold text-[#FFFFFF]">I</span>
                </div>
                <span className="text-[10px] font-mono font-bold text-[#000080]">INNOVATION</span>
              </div>
            </div>
            
            <div className="text-xs font-mono font-bold text-[#138808]">
              HIERARCHY OF EXPERTISE
            </div>
          </div>
        </div>

        {/* Large Visual Mentor Carousel Card */}
        <div
          className="relative"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* Main Card */}
          <div
            id="mentor-spotlight-card"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            className="rounded-3xl bg-[#FFFFFF] border-2 border-[#000080] p-6 sm:p-10 lg:p-12 shadow-xl shadow-[#000080]/10 relative overflow-hidden"
          >

            <div
              key={`mentor-card-content-${currentIndex}`}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center ${
                slideDirection === 'right' ? 'animate-slide-right' : 'animate-slide-left'
              }`}
            >
              {/* LEFT: Large Mentor Image (lg: 5 cols) */}
              <div className="lg:col-span-5 flex justify-center">
                <div className="relative w-full max-w-[280px] sm:max-w-[340px] aspect-square rounded-2xl overflow-hidden border-2 border-[#000080] shadow-md group">
                  <ProjectImage
                    src={activeMentor.image}
                    alt={activeMentor.name}
                    fallbackType="mentor"
                    fallbackInitials={activeMentor.initials}
                    title={activeMentor.name}
                    badge={activeMentor.roleType}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </div>

              {/* RIGHT: Mentor Details (lg: 7 cols) */}
              <div className="lg:col-span-7 flex flex-col justify-between">
                <div>
                  {/* Badge Row */}
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-extrabold uppercase tracking-wider bg-[#FF9933] text-[#000080] border border-[#000080] shadow-sm">
                      <Award className="w-3.5 h-3.5 text-[#000080]" />
                      {activeMentor.roleType}
                    </span>

                    <span className="text-xs font-mono text-[#138808] font-extrabold">
                      HONORARY ADVISOR // SIH
                    </span>
                  </div>

                  {/* Name */}
                  <h3 className="text-2xl sm:text-4xl font-extrabold text-[#000080] tracking-tight mb-3">
                    {activeMentor.name}
                  </h3>

                  {/* Designation & Institution */}
                  <div className="space-y-1.5 mb-6">
                    <div className="flex items-center gap-2 text-sm sm:text-base font-extrabold text-[#000080] font-mono">
                      <GraduationCap className="w-4 h-4 text-[#FF9933] shrink-0" />
                      <span>{activeMentor.designation}</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs sm:text-sm font-medium text-[#000080] opacity-80">
                      <Building2 className="w-4 h-4 text-[#000080] shrink-0" />
                      <span>{activeMentor.institution}</span>
                    </div>
                  </div>

                  {/* Short Description */}
                  <div className="p-4 sm:p-5 rounded-2xl bg-[#FFFFFF] border-2 border-[#000080]/20 text-[#000080] text-sm sm:text-base leading-relaxed mb-8">
                    {activeMentor.description}
                  </div>
                </div>

                {/* Bottom Row: LinkedIn Button & Carousel Controls */}
                <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t-2 border-[#000080]/15">
                  {/* LinkedIn Action */}
                  <a
                    href={activeMentor.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 rounded-xl bg-[#000080] hover:bg-[#FF9933] text-[#FFFFFF] font-extrabold text-sm tracking-wide flex items-center gap-2 shadow-md transition-all border-2 border-[#000080]"
                  >
                    {/* LinkedIn Official Brand Logo Color Preserved */}
                    <Linkedin className="w-4 h-4 text-[#0A66C2]" />
                    <span>Connect on LinkedIn</span>
                    <ExternalLink className="w-3.5 h-3.5 text-[#FFFFFF]" />
                  </a>

                  {/* Navigation Arrows */}
                  <div className="flex items-center gap-3">
                    <button
                      onClick={handlePrev}
                      id="mentor-prev-btn"
                      className="w-11 h-11 rounded-xl bg-[#FFFFFF] hover:bg-[#FF9933] hover:text-[#FFFFFF] border-2 border-[#000080] text-[#000080] flex items-center justify-center transition-all cursor-pointer focus:outline-none"
                      aria-label="Previous Mentor"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <span className="text-xs font-mono font-extrabold text-[#000080] px-2">
                      0{currentIndex + 1} / 0{total}
                    </span>
                    <button
                      onClick={handleNext}
                      id="mentor-next-btn"
                      className="w-11 h-11 rounded-xl bg-[#FFFFFF] hover:bg-[#FF9933] hover:text-[#FFFFFF] border-2 border-[#000080] text-[#000080] flex items-center justify-center transition-all cursor-pointer focus:outline-none"
                      aria-label="Next Mentor"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Indicator Dots */}
          <div className="flex items-center justify-center gap-2 mt-8">
            {mentors.map((m, idx) => (
              <button
                key={m.id}
                onClick={() => handleSelectMentor(idx)}
                className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                  currentIndex === idx
                    ? 'w-10 bg-[#FF9933] border border-[#000080]'
                    : 'w-2.5 bg-[#FFFFFF] border-2 border-[#000080]'
                }`}
                aria-label={`View mentor ${m.name}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

