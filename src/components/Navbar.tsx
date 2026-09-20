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
        <div className="flex items-center gap-1.5 sm:gap-2">
          <img 
            src="/images/logos/government-logo.png" 
            alt="Ministry of Education Government of India" 
            className="h-5 sm:h-6 object-contain"
          />
          <a
            href="#home"
            onClick={(e) => handleScrollTo(e, '#home')}
            className="flex items-center gap-1 sm:gap-1.5 group focus:outline-none"
            id="nav-brand"
          >
            <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-xl bg-gradient-to-tr from-[#FF9933] via-[#FFFFFF] to-[#138808] flex items-center justify-center p-0.5 border border-[#000080] shadow-sm group-hover:scale-105 transition-transform duration-200 flex-shrink-0">
              <div className="w-full h-full bg-[#000080] rounded-[5px] sm:rounded-[6px] flex items-center justify-center">
                <Award className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-[#FF9933]" />
              </div>
            </div>
            <div className="flex flex-col min-w-0">
              <span className="font-extrabold text-[9px] sm:text-[10px] tracking-tight text-[#000080] group-hover:text-[#FF9933] transition-colors leading-tight truncate">
                {projectMetadata.projectName}
              </span>
              <span className="text-[8px] font-mono text-[#138808] tracking-wider uppercase font-bold leading-none truncate">
                {projectMetadata.teamName}
              </span>
            </div>
          </a>
        </div>

        {/* CENTER: Navigation Links (Desktop) */}
        <nav className="hidden lg:flex items-center gap-0" aria-label="Main Navigation">
          {navLinks.map((item, index) => {
            const isActive = activeSection === item.href.replace('#', '');
            const activeColor = index % 3 === 0 ? '#FF9933' : index % 3 === 1 ? '#000080' : '#138808';
            
            return (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleScrollTo(e, item.href)}
                id={`nav-link-${item.label.toLowerCase()}`}
                className={`relative px-1 py-0.5 rounded text-[9px] xl:text-[10px] font-bold transition-all duration-200 ${
                  isActive
                    ? 'text-[#FFFFFF] border-2 shadow-sm scale-105'
                    : 'text-[#000080] hover:text-[#FF9933] hover:bg-[#FF9933]/10 border-2 border-transparent'
                }`}
                style={{
                  backgroundColor: isActive ? activeColor : 'transparent',
                  borderColor: isActive ? activeColor : 'transparent'
                }}
              >
                {item.label}
                {/* Active indicator dot */}
                {isActive && (
                  <span 
                    className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full"
                    style={{ backgroundColor: activeColor }}
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* RIGHT: Team Logo + SIH Official Badge / Logo with Tiranga */}
        <div className="hidden sm:flex items-center gap-1 sm:gap-1.5" id="nav-sih-badge">
          <img 
            src="/images/logos/team-logo.png" 
            alt="ENDEAVOURS07" 
            className="h-5 sm:h-6 object-contain"
          />
          <div className="flex items-center gap-1 sm:gap-1.5 px-1 sm:px-1.5 py-0.5 rounded-xl bg-[#FFFFFF] border-2 border-[#000080] shadow-sm">
            {/* Tricolor Indicator */}
            <div className="flex flex-col gap-0.5">
              <span className="w-2.5 h-0.5 rounded-sm bg-[#FF9933]" />
              <span className="w-2.5 h-0.5 rounded-sm bg-[#FFFFFF] border border-[#000080]" />
              <span className="w-2.5 h-0.5 rounded-sm bg-[#138808]" />
            </div>
            <div className="flex flex-col text-left">
              <span className="text-[7px] sm:text-[8px] font-extrabold tracking-widest text-[#000080] uppercase leading-none">
                SMART INDIA
              </span>
              <span className="text-[8px] sm:text-[9px] font-extrabold text-[#FF9933] leading-tight">
                HACKATHON 2026
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
            className="p-1.5 rounded-xl bg-[#FFFFFF] border-2 border-[#000080] text-[#000080] hover:bg-[#FF9933] hover:text-[#FFFFFF] focus:outline-none"
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
          <div className="flex items-center justify-between pb-2 mb-2 border-b border-[#000080]/20">
            <div className="flex items-center gap-1.5">
              <div className="flex flex-col gap-0.5">
                <span className="w-3 h-0.5 rounded-sm bg-[#FF9933]" />
                <span className="w-3 h-0.5 rounded-sm bg-[#FFFFFF] border border-[#000080]" />
                <span className="w-3 h-0.5 rounded-sm bg-[#138808]" />
              </div>
              <span className="text-[10px] font-mono font-bold text-[#000080]">
                SMART INDIA HACKATHON 2026
              </span>
            </div>
            <span className="text-[9px] font-mono font-bold text-[#FF9933]">JUDGE PORTAL</span>
          </div>

          <div className="grid grid-cols-2 gap-1.5">
            {navLinks.map((item, index) => {
              const isActive = activeSection === item.href.replace('#', '');
              const activeColor = index % 3 === 0 ? '#FF9933' : index % 3 === 1 ? '#000080' : '#138808';
              
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleScrollTo(e, item.href)}
                  className={`flex items-center justify-between px-2 py-1.5 rounded text-[10px] font-bold transition-colors border-2 ${
                    isActive
                      ? 'text-[#FFFFFF]'
                      : 'text-[#000080] hover:text-[#FF9933] bg-[#FFFFFF]'
                  }`}
                  style={{
                    backgroundColor: isActive ? activeColor : '#FFFFFF',
                    borderColor: isActive ? activeColor : 'rgba(0, 0, 128, 0.2)'
                  }}
                >
                  <span>{item.label}</span>
                  <ChevronRight className="w-3 h-3 text-[#FF9933]" />
                </a>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
};
