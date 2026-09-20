import React, { useState, useEffect, useRef, useCallback } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  Pause,
  Play,
  PlayCircle,
  Sparkles,
  Camera,
  Film,
  Maximize2,
  X,
} from 'lucide-react';
import { MediaSpotlightItem } from '../types';
import { ProjectImage } from './ProjectImage';

interface MediaSpotlightSectionProps {
  items: MediaSpotlightItem[];
}

export const MediaSpotlightSection: React.FC<MediaSpotlightSectionProps> = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [activeModalItem, setActiveModalItem] = useState<MediaSpotlightItem | null>(null);
  const total = items.length;
  const sectionRef = useRef<HTMLElement>(null);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % total);
  }, [total]);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  // Autoplay 4.5 seconds with pause on hover
  useEffect(() => {
    if (isPaused || total <= 1 || activeModalItem !== null) return;
    const interval = setInterval(() => {
      handleNext();
    }, 4500);

    return () => clearInterval(interval);
  }, [isPaused, handleNext, total, activeModalItem]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activeModalItem) {
        if (e.key === 'Escape') setActiveModalItem(null);
        return;
      }
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const inView = rect.top < window.innerHeight && rect.bottom > 0;
      if (!inView) return;

      if (e.key === 'ArrowLeft') {
        handlePrev();
      } else if (e.key === 'ArrowRight') {
        handleNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleNext, handlePrev, activeModalItem]);

  // Touch swipe support
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

  // Cyclic relative index helper
  const getIndex = (offset: number) => {
    return (currentIndex + offset + total) % total;
  };

  const activeItem = items[currentIndex];
  const prevItem = items[getIndex(-1)];
  const nextItem = items[getIndex(1)];

  return (
    <section
      id="spotlight"
      ref={sectionRef}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      className="py-24 bg-[#FFFFFF] relative border-t-2 border-[#000080]/15 overflow-hidden"
    >
      {/* Background ambient lighting - Indian Flag glow */}
      <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-[#FF9933]/15 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/3 translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-[#138808]/15 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2 font-mono text-[#FF9933] text-sm tracking-wider font-extrabold">
              <span className="w-6 h-px bg-[#FF9933]" />
              <span>SECTION 04</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#000080] tracking-tight flex items-center gap-3">
              <span>Clips &amp; Photos Spotlight</span>
              <span className="text-xs font-mono px-3 py-1 rounded-full bg-[#138808] text-[#FFFFFF] font-extrabold uppercase tracking-wider">
                Visual Showcase
              </span>
            </h2>
            <p className="text-xs sm:text-sm font-mono font-medium text-[#000080] mt-2 max-w-xl opacity-85">
              Project UI Dashboards, System Architecture &amp; Prototype Recordings. (Ready for custom project media).
            </p>
          </div>
          
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono font-extrabold text-[#000080]">
              {currentIndex + 1} / {total}
            </span>
            <button
              onClick={() => setIsPaused(!isPaused)}
              className="p-1.5 px-3 rounded-lg bg-[#FFFFFF] border-2 border-[#000080] text-[#000080] hover:bg-[#FF9933] hover:text-[#FFFFFF] text-xs flex items-center gap-1.5 font-mono cursor-pointer transition-colors font-bold"
              title={isPaused ? 'Resume auto-play' : 'Pause auto-play'}
              aria-label={isPaused ? 'Resume auto-play' : 'Pause auto-play'}
            >
              {isPaused ? <Play className="w-3.5 h-3.5" /> : <Pause className="w-3.5 h-3.5" />}
              <span className="hidden sm:inline">{isPaused ? 'Paused' : 'Auto 4.5s'}</span>
            </button>
          </div>
        </div>

        {/* Carousel Viewport Container */}
        <div
          className="relative w-full flex items-center justify-center py-4"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* Navigation Arrow - Left */}
          <button
            onClick={handlePrev}
            id="spotlight-prev-btn"
            className="absolute left-2 sm:left-4 z-30 w-11 h-11 sm:w-14 sm:h-14 rounded-2xl bg-[#FFFFFF] hover:bg-[#FF9933] hover:text-[#FFFFFF] border-2 border-[#000080] text-[#000080] flex items-center justify-center shadow-md transition-all duration-200 cursor-pointer focus:outline-none"
            aria-label="Previous Spotlight Item"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Sliding Cards */}
          <div className="w-full flex items-center justify-center gap-4 sm:gap-6 min-h-[380px] sm:min-h-[500px]">
            {/* Desktop Left Preview (Partially visible) */}
            <div
              onClick={handlePrev}
              className="hidden lg:block w-1/4 h-[400px] rounded-2xl overflow-hidden opacity-35 hover:opacity-60 transition-all duration-500 transform scale-90 -rotate-1 cursor-pointer border-2 border-[#000080] shadow-md select-none relative"
            >
              <ProjectImage
                src={prevItem.mediaUrl}
                alt={prevItem.title}
                title={prevItem.title}
                badge={prevItem.tag}
                className="w-full h-full object-cover"
              />
              {prevItem.type === 'clip' && (
                <div className="absolute inset-0 flex items-center justify-center bg-[#000080]/30">
                  <PlayCircle className="w-12 h-12 text-[#FFFFFF]" />
                </div>
              )}
            </div>

            {/* Central Main Active Spotlight Card */}
            <div
              id="spotlight-active-card"
              className="w-full lg:w-3/5 max-w-3xl rounded-3xl overflow-hidden border-2 border-[#000080] shadow-xl shadow-[#000080]/10 bg-[#FFFFFF] transform transition-all duration-500 group relative flex flex-col"
            >
              {/* Top subtle tricolor stripe */}
              <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-[#FF9933] via-[#FFFFFF] to-[#138808] border-b border-[#000080] z-20" />

              {/* Media Container with Zoom on Hover */}
              <div className="relative w-full h-[320px] sm:h-[440px] overflow-hidden bg-[#FFFFFF]">
                <div className="w-full h-full transition-transform duration-700 group-hover:scale-105">
                  <ProjectImage
                    src={activeItem.mediaUrl}
                    alt={activeItem.title}
                    title={activeItem.title}
                    badge={activeItem.tag}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Floating Tag and Media Type Indicator */}
                <div className="absolute top-4 left-4 z-10 flex items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-extrabold uppercase tracking-wider bg-[#FFFFFF] text-[#000080] border-2 border-[#000080] shadow-sm">
                    {activeItem.type === 'clip' ? (
                      <Film className="w-3.5 h-3.5 text-[#FF9933]" />
                    ) : (
                      <Camera className="w-3.5 h-3.5 text-[#FF9933]" />
                    )}
                    <span>{activeItem.tag}</span>
                  </span>

                  {activeItem.type === 'clip' && activeItem.videoDuration && (
                    <span className="px-2.5 py-1 rounded-full text-xs font-mono font-bold bg-[#000080] text-[#FFFFFF] border border-[#000080]">
                      {activeItem.videoDuration}
                    </span>
                  )}
                </div>

                {/* Video Play Button Overlay if type is clip */}
                {activeItem.type === 'clip' ? (
                  <div
                    onClick={() => setActiveModalItem(activeItem)}
                    className="absolute inset-0 flex flex-col items-center justify-center bg-[#000080]/30 hover:bg-[#000080]/20 transition-colors cursor-pointer group/btn"
                  >
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#FF9933] border-2 border-[#000080] text-[#FFFFFF] flex items-center justify-center shadow-lg group-hover/btn:scale-110 transition-transform">
                      <Play className="w-8 h-8 fill-[#FFFFFF] text-[#FFFFFF] ml-1" />
                    </div>
                    <span className="mt-3 px-3 py-1 rounded-lg bg-[#000080] text-[#FFFFFF] text-xs font-mono font-bold border-2 border-[#FF9933]">
                      Click to Play Demo Walkthrough
                    </span>
                  </div>
                ) : (
                  <button
                    onClick={() => setActiveModalItem(activeItem)}
                    className="absolute bottom-4 right-4 z-10 p-2 rounded-xl bg-[#FFFFFF] hover:bg-[#FF9933] text-[#000080] hover:text-[#FFFFFF] border-2 border-[#000080] transition-all cursor-pointer opacity-0 group-hover:opacity-100"
                    title="Expand View"
                    aria-label="Expand View"
                  >
                    <Maximize2 className="w-4 h-4" />
                  </button>
                )}
              </div>

              {/* Caption Below Media */}
              <div className="p-5 sm:p-7 bg-[#FFFFFF] border-t-2 border-[#000080]/15 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-[#000080] tracking-tight mb-2">
                    {activeItem.title}
                  </h3>
                  <p className="text-xs sm:text-sm font-medium text-[#000080] opacity-85 leading-relaxed">
                    {activeItem.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t-2 border-[#000080]/15 flex items-center justify-between text-[11px] font-mono text-[#000080] font-bold">
                  <span className="flex items-center gap-1.5 text-[#138808] font-extrabold">
                    <Sparkles className="w-3.5 h-3.5 text-[#FF9933]" />
                    SIH EVALUATION SPOTLIGHT
                  </span>
                  <span>ASSET {currentIndex + 1} OF {total}</span>
                </div>
              </div>
            </div>

            {/* Desktop Right Preview (Partially visible) */}
            <div
              onClick={handleNext}
              className="hidden lg:block w-1/4 h-[400px] rounded-2xl overflow-hidden opacity-35 hover:opacity-60 transition-all duration-500 transform scale-90 rotate-1 cursor-pointer border-2 border-[#000080] shadow-md select-none relative"
            >
              <ProjectImage
                src={nextItem.mediaUrl}
                alt={nextItem.title}
                title={nextItem.title}
                badge={nextItem.tag}
                className="w-full h-full object-cover"
              />
              {nextItem.type === 'clip' && (
                <div className="absolute inset-0 flex items-center justify-center bg-[#000080]/30">
                  <PlayCircle className="w-12 h-12 text-[#FFFFFF]" />
                </div>
              )}
            </div>
          </div>

          {/* Navigation Arrow - Right */}
          <button
            onClick={handleNext}
            id="spotlight-next-btn"
            className="absolute right-2 sm:right-4 z-30 w-11 h-11 sm:w-14 sm:h-14 rounded-2xl bg-[#FFFFFF] hover:bg-[#FF9933] hover:text-[#FFFFFF] border-2 border-[#000080] text-[#000080] flex items-center justify-center shadow-md transition-all duration-200 cursor-pointer focus:outline-none"
            aria-label="Next Spotlight Item"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Dot Indicators */}
        <div className="flex items-center justify-center gap-2 mt-6" aria-label="Carousel pagination">
          {items.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                currentIndex === idx
                  ? 'w-8 bg-[#FF9933] border border-[#000080]'
                  : 'w-2.5 bg-[#FFFFFF] border-2 border-[#000080]'
              }`}
              aria-label={`View slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Expanded Modal / Video Player Overlay */}
      {activeModalItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#000080]/80">
          <div className="relative w-full max-w-4xl rounded-2xl bg-[#FFFFFF] border-2 border-[#000080] overflow-hidden shadow-2xl">
            {/* Top tricolor bar */}
            <div className="h-1.5 bg-gradient-to-r from-[#FF9933] via-[#FFFFFF] to-[#138808] border-b border-[#000080]" />

            <div className="flex items-center justify-between p-4 border-b-2 border-[#000080]/15 bg-[#FFFFFF]">
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded-full text-xs font-mono font-extrabold bg-[#FF9933] text-[#000080] border border-[#000080]">
                  {activeModalItem.tag}
                </span>
                <h3 className="font-extrabold text-[#000080] text-base truncate">
                  {activeModalItem.title}
                </h3>
              </div>
              <button
                onClick={() => setActiveModalItem(null)}
                className="p-1.5 rounded-lg bg-[#FFFFFF] border-2 border-[#000080] text-[#000080] hover:bg-[#FF9933] hover:text-[#FFFFFF] cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="relative w-full aspect-video bg-[#FFFFFF] flex items-center justify-center">
              <ProjectImage
                src={activeModalItem.mediaUrl}
                alt={activeModalItem.title}
                title={activeModalItem.title}
                badge={activeModalItem.tag}
                className="w-full h-full object-contain"
              />
            </div>

            <div className="p-4 bg-[#FFFFFF] border-t-2 border-[#000080]/15 text-sm font-medium text-[#000080]">
              {activeModalItem.description}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
