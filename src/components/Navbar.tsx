import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Award, ChevronRight } from 'lucide-react';
import { ProjectMetadata } from '../types';

interface NavbarProps {
  projectMetadata: ProjectMetadata;
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ projectMetadata, activeSection }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Team', href: '#team' },
    { label: 'Mentors', href: '#mentors' },
    { label: 'Impact', href: '#impact' },
    { label: 'Spotlight', href: '#spotlight' },
    { label: 'Problem', href: '#problem' },
    { label: 'Solution', href: '#solution' },
    { label: 'Approach', href: '#approach' },
    { label: 'Technology', href: '#technology' },
    { label: 'Links', href: '#links' },
    { label: 'Benchmarks', href: '#benchmarks' },
  ];

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#FFFFFF]/95 backdrop-blur-md border-b-2 border-[#FF9933] shadow-md shadow-[#000080]/10 py-2'
          : 'bg-[#FFFFFF] border-b border-[#000080]/20 py-2.5'
      }`}
    >
      {/* Top Tiranga Indicator Line */}
      <div className="absolute top-0 inset-x-0 h-[3px] bg-gradient-to-r from-[#FF9933] via-[#FFFFFF] to-[#138808]" />

      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 flex items-center justify-between">
        {/* LEFT: Government Logo + Project / Team Name */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <img 
            src="/images/logos/government-logo.png" 
            alt="Ministry of Education Government of India" 
            className="h-6 sm:h-7 xl:h-8 object-contain max-w-[130px] sm:max-w-[155px] xl:max-w-none shrink-0"
          />
          <a
            href="#home"
            onClick={(e) => handleScrollTo(e, '#home')}
            className="flex items-center gap-1.5 sm:gap-2 group focus:outline-none shrink-0"
            id="nav-brand"
          >
            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-xl bg-gradient-to-tr from-[#FF9933] via-[#000080]/20 to-[#138808] flex items-center justify-center p-0.5 border border-[#000080]/30 shadow-sm group-hover:scale-105 transition-transform duration-200 shrink-0 bg-[#FFFFFF]">
              <div className="w-full h-full bg-[#FFFFFF] rounded-[6px] sm:rounded-[7px] flex items-center justify-center overflow-hidden">
                <img 
                  src="/images/logos/team-logo.png" 
                  alt="Endovers07 Logo" 
                  className="w-full h-full object-contain p-0.5" 
                />
              </div>
            </div>
            <div className="flex flex-col min-w-0">
              <span className="font-extrabold text-xs sm:text-sm tracking-tight text-[#000080] group-hover:text-[#FF9933] transition-colors leading-tight truncate">
                {projectMetadata.projectName}
              </span>
              <span className="text-[10px] sm:text-[11px] font-mono text-[#138808] tracking-wider uppercase font-bold leading-none truncate">
                {projectMetadata.teamName}
              </span>
            </div>
          </a>
        </div>

        {/* CENTER: Navigation Links (Desktop) */}
        <nav className="hidden lg:flex items-center gap-0.5 xl:gap-1 2xl:gap-1.5 shrink min-w-0" aria-label="Main Navigation">
          {navLinks.map((item) => {
            const isActive = activeSection === item.href.replace('#', '');
            
            return (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleScrollTo(e, item.href)}
                id={`nav-link-${item.label.toLowerCase()}`}
                className={`relative px-1.5 xl:px-2 2xl:px-2.5 py-1 xl:py-1.5 rounded-lg text-[10.5px] xl:text-xs font-bold transition-all duration-200 whitespace-nowrap shrink-0 ${
                  isActive
                    ? 'bg-[#000080] text-[#FFFFFF] shadow-sm'
                    : 'text-[#000080] hover:text-[#FF9933] hover:bg-[#FF9933]/10'
                }`}
              >
                {item.label}
                {/* Active indicator dot */}
                {isActive && (
                  <span 
                    className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#FF9933]"
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* RIGHT: Team Logo + SIH Official Badge / Logo with Tiranga */}
        <div className="hidden sm:flex items-center gap-2 shrink-0" id="nav-sih-badge">
          <div className="flex items-center gap-1.5 sm:gap-2 px-2 sm:px-2.5 py-1 rounded-xl bg-[#FFFFFF] border border-[#000080]/30 shadow-sm hover:border-[#FF9933] transition-colors">
            {/* Endovers07 Logo inside styled container */}
            <div className="w-6 h-6 rounded-md bg-[#FFFFFF] border border-[#000080]/20 flex items-center justify-center p-0.5 overflow-hidden shrink-0 shadow-xs">
              <img 
                src="/images/logos/team-logo.png" 
                alt="Endovers07 Logo" 
                className="w-full h-full object-contain"
              />
            </div>
            {/* Tricolor Indicator */}
            <div className="flex flex-col gap-0.5">
              <span className="w-2.5 h-0.5 rounded-sm bg-[#FF9933]" />
              <span className="w-2.5 h-0.5 rounded-sm bg-[#FFFFFF] border border-[#000080]" />
              <span className="w-2.5 h-0.5 rounded-sm bg-[#138808]" />
            </div>
            <div className="flex flex-col text-left">
              <span className="text-[8px] sm:text-[9px] font-extrabold tracking-widest text-[#000080] uppercase leading-none font-mono">
                {projectMetadata.teamName}
              </span>
              <span className="text-[9px] sm:text-[10px] font-extrabold text-[#FF9933] leading-tight">
                SIH 2026
              </span>
            </div>
          </div>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex items-center gap-1 lg:hidden">
          <button
            id="mobile-menu-toggle"
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl bg-[#FFFFFF] border border-[#000080]/30 text-[#000080] hover:bg-[#FF9933] hover:text-[#FFFFFF] focus:outline-none cursor-pointer"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-drawer"
          className="lg:hidden border-b-2 border-[#FF9933] bg-[#FFFFFF] px-4 pt-3 pb-6 shadow-xl animate-in slide-in-from-top duration-200"
        >
          {/* SIH Mobile Header */}
          <div className="flex items-center justify-between pb-2 mb-3 border-b border-[#000080]/20">
            <div className="flex items-center gap-2">
              <img 
                src="/images/logos/team-logo.png" 
                alt="Endovers07" 
                className="w-5 h-5 object-contain" 
              />
              <div className="flex flex-col gap-0.5">
                <span className="w-2.5 h-0.5 rounded-sm bg-[#FF9933]" />
                <span className="w-2.5 h-0.5 rounded-sm bg-[#FFFFFF] border border-[#000080]" />
                <span className="w-2.5 h-0.5 rounded-sm bg-[#138808]" />
              </div>
              <span className="text-xs font-mono font-bold text-[#000080]">
                ENDOVERS07 // SIH 2026
              </span>
            </div>
            <span className="text-xs font-mono font-bold text-[#FF9933]">PORTAL</span>
          </div>

          <div className="grid grid-cols-2 gap-2">
            {navLinks.map((item) => {
              const isActive = activeSection === item.href.replace('#', '');
              
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleScrollTo(e, item.href)}
                  className={`flex items-center justify-between px-3 py-2 rounded-lg text-xs font-bold transition-colors ${
                    isActive
                      ? 'bg-[#000080] text-[#FFFFFF]'
                      : 'text-[#000080] hover:text-[#FF9933] bg-[#000080]/5'
                  }`}
                >
                  <span>{item.label}</span>
                  <ChevronRight className={`w-3.5 h-3.5 ${isActive ? 'text-[#FF9933]' : 'text-[#000080]/60'}`} />
                </a>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
};
