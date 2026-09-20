import React, { useState, useEffect, useRef, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Pause, Play, Sparkles, Layers } from 'lucide-react';
import { SpotlightImageItem } from '../types';
import { ProjectImage } from './ProjectImage';

interface SpotlightSectionProps {
  images: SpotlightImageItem[];
}

export const SpotlightSection: React.FC<SpotlightSectionProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const total = images.length;
  const sectionRef = useRef<HTMLElement>(null);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % total);
  }, [total]);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  // Autoplay 4.5 seconds
  useEffect(() => {
    if (isPaused || total <= 1) return;
    const interval = setInterval(() => {
      handleNext();
    }, 4500);

    return () => clearInterval(interval);
  }, [isPaused, handleNext, total]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
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
  }, [handleNext, handlePrev]);

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

  // Safe cyclic index helper
  const getIndex = (offset: number) => {
    return (currentIndex + offset + total) % total;
  };

  const activeImage = images[currentIndex];
  const prevImage = images[getIndex(-1)];
  const nextImage = images[getIndex(1)];

  return (
    <section
      id="spotlight"
      ref={sectionRef}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      className="py-24 bg-[#FFFFFF] relative border-t-2 border-[#000080]/15 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2 font-mono text-[#FF9933] text-sm tracking-wider font-extrabold">
              <span className="w-6 h-0.5 bg-[#FF9933]" />
              <span>SECTION 07</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#000080] tracking-tight">
              Project Spotlight
            </h2>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono font-bold text-[#000080]">
              {currentIndex + 1} / {total}
            </span>
            <button
              onClick={() => setIsPaused(!isPaused)}
              className="p-1.5 rounded-lg bg-[#FFFFFF] border-2 border-[#000080] text-[#000080] hover:bg-[#FF9933] text-xs flex items-center gap-1 font-mono font-bold transition-colors cursor-pointer"
              title={isPaused ? 'Resume auto-play' : 'Pause auto-play'}
              aria-label={isPaused ? 'Resume auto-play' : 'Pause auto-play'}
            >
              {isPaused ? <Play className="w-3.5 h-3.5" /> : <Pause className="w-3.5 h-3.5" />}
              <span className="hidden sm:inline">{isPaused ? 'Paused' : 'Auto 4.5s'}</span>
            </button>
          </div>
        </div>

        {/* 3D Spotlight Carousel Stage */}
        <div
          className="relative w-full flex items-center justify-center py-6"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* Navigation Arrow - Left */}
          <button
            onClick={handlePrev}
            id="spotlight-prev-btn"
            className="absolute left-2 sm:left-4 z-30 w-11 h-11 sm:w-14 sm:h-14 rounded-2xl bg-[#FFFFFF] hover:bg-[#FF9933] border-2 border-[#000080] text-[#000080] flex items-center justify-center shadow-lg transition-all duration-200 cursor-pointer focus:outline-none"
            aria-label="Previous Spotlight Image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Carousel Viewport Container */}
          <div className="w-full flex items-center justify-center gap-4 sm:gap-6 min-h-[360px] sm:min-h-[480px]">
            {/* Desktop Left Preview Image (Partially visible) */}
            <div
              onClick={handlePrev}
              className="hidden lg:block w-1/4 h-[380px] rounded-2xl overflow-hidden opacity-35 hover:opacity-60 transition-all duration-500 transform scale-90 -rotate-1 cursor-pointer border-2 border-[#000080]/30 shadow-md select-none"
            >
              <ProjectImage
                src={prevImage.image}
                alt={prevImage.title}
                title={prevImage.title}
                badge={prevImage.tag || 'Preview'}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Central Main Active Spotlight Card */}
            <div
              id="spotlight-active-card"
              className="w-full lg:w-3/5 max-w-3xl rounded-3xl overflow-hidden border-2 border-[#000080] shadow-xl bg-[#FFFFFF] transform transition-all duration-500 group relative"
            >
              {/* Image Container with Zoom on Hover */}
              <div className="relative w-full h-[320px] sm:h-[430px] overflow-hidden bg-[#FFFFFF]">
                <div className="w-full h-full transition-transform duration-700 group-hover:scale-105">
                  <ProjectImage
                    src={activeImage.image}
                    alt={activeImage.title}
                    title={activeImage.title}
                    badge={activeImage.tag || 'Spotlight'}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Floating Tag */}
                {activeImage.tag && (
                  <div className="absolute top-4 left-4 z-10">
                    <span className="px-3 py-1 rounded-full text-xs font-mono font-extrabold uppercase tracking-wider bg-[#FFFFFF] text-[#000080] border-2 border-[#000080] shadow-sm">
                      {activeImage.tag}
                    </span>
                  </div>
                )}
              </div>

              {/* Caption Below Image */}
              <div className="p-5 sm:p-7 bg-[#FFFFFF] border-t-2 border-[#000080]/20 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-[#000080] tracking-tight mb-2">
                    {activeImage.title}
                  </h3>
                  <p className="text-xs sm:text-sm font-medium text-[#000080] opacity-85 leading-relaxed">
                    {activeImage.description}
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

            {/* Desktop Right Preview Image (Partially visible) */}
            <div
              onClick={handleNext}
              className="hidden lg:block w-1/4 h-[380px] rounded-2xl overflow-hidden opacity-35 hover:opacity-60 transition-all duration-500 transform scale-90 rotate-1 cursor-pointer border-2 border-[#000080]/30 shadow-md select-none"
            >
              <ProjectImage
                src={nextImage.image}
                alt={nextImage.title}
                title={nextImage.title}
                badge={nextImage.tag || 'Preview'}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Navigation Arrow - Right */}
          <button
            onClick={handleNext}
            id="spotlight-next-btn"
            className="absolute right-2 sm:right-4 z-30 w-11 h-11 sm:w-14 sm:h-14 rounded-2xl bg-[#FFFFFF] hover:bg-[#FF9933] border-2 border-[#000080] text-[#000080] flex items-center justify-center shadow-lg transition-all duration-200 cursor-pointer focus:outline-none"
            aria-label="Next Spotlight Image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Dot Indicators */}
        <div className="flex items-center justify-center gap-2 mt-6" aria-label="Carousel pagination">
          {images.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-2 rounded-full transition-all duration-300 cursor-pointer border border-[#000080] ${
                currentIndex === idx
                  ? 'w-8 bg-[#FF9933]'
                  : 'w-2 bg-[#FFFFFF] hover:bg-[#138808]'
              }`}
              aria-label={`Go to image slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
