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
          ? 'bg-[#FFFFFF]/95 backdrop-blur-md border-b-2 border-[#FF9933] shadow-md shadow-[#000080]/10 py-3'
          : 'bg-[#FFFFFF] border-b border-[#000080]/20 py-4'
      }`}
    >
      {/* Top Tiranga Indicator Line */}
      <div className="absolute top-0 inset-x-0 h-[3px] bg-gradient-to-r from-[#FF9933] via-[#FFFFFF] to-[#138808]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* LEFT: Project / Team Name */}
        <a
          href="#home"
          onClick={(e) => handleScrollTo(e, '#home')}
          className="flex items-center gap-3 group focus:outline-none"
          id="nav-brand"
        >
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#FF9933] via-[#FFFFFF] to-[#138808] flex items-center justify-center p-0.5 border border-[#000080] shadow-sm group-hover:scale-105 transition-transform duration-200">
            <div className="w-full h-full bg-[#000080] rounded-[9px] flex items-center justify-center">
              <Award className="w-4 h-4 text-[#FF9933]" />
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-extrabold text-sm sm:text-base tracking-tight text-[#000080] group-hover:text-[#FF9933] transition-colors">
              {projectMetadata.projectName}
            </span>
            <span className="text-[11px] font-mono text-[#138808] tracking-wider uppercase font-bold">
              {projectMetadata.teamName}
            </span>
          </div>
        </a>

        {/* CENTER: Navigation Links (Desktop) */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-1.5" aria-label="Main Navigation">
          {navLinks.map((item) => {
            const isActive = activeSection === item.href.replace('#', '');
            return (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleScrollTo(e, item.href)}
                id={`nav-link-${item.label.toLowerCase()}`}
                className={`px-3 py-1.5 rounded-lg text-xs xl:text-sm font-bold transition-all duration-200 ${
                  isActive
                    ? 'text-[#FFFFFF] bg-[#000080] border border-[#000080] shadow-sm'
                    : 'text-[#000080] hover:text-[#FF9933] hover:bg-[#FF9933]/10'
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* RIGHT: SIH Official Badge / Logo with Tiranga */}
        <div className="hidden sm:flex items-center gap-3" id="nav-sih-badge">
          <div className="flex items-center gap-2.5 px-3 py-1.5 rounded-xl bg-[#FFFFFF] border-2 border-[#000080] shadow-sm">
            {/* Tricolor Indicator */}
            <div className="flex flex-col gap-0.5">
              <span className="w-3.5 h-1 rounded-sm bg-[#FF9933]" />
              <span className="w-3.5 h-1 rounded-sm bg-[#FFFFFF] border border-[#000080]" />
              <span className="w-3.5 h-1 rounded-sm bg-[#138808]" />
            </div>
            <div className="flex flex-col text-left">
              <span className="text-[10px] font-extrabold tracking-widest text-[#000080] uppercase leading-none">
                SMART INDIA
              </span>
              <span className="text-[11px] font-extrabold text-[#FF9933] leading-tight">
                HACKATHON 2026
              </span>
            </div>
          </div>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            id="mobile-menu-toggle"
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl bg-[#FFFFFF] border-2 border-[#000080] text-[#000080] hover:bg-[#FF9933] hover:text-[#FFFFFF] focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
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
          <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#000080]/20">
            <div className="flex items-center gap-2">
              <div className="flex flex-col gap-0.5">
                <span className="w-3.5 h-1 rounded-sm bg-[#FF9933]" />
                <span className="w-3.5 h-1 rounded-sm bg-[#FFFFFF] border border-[#000080]" />
                <span className="w-3.5 h-1 rounded-sm bg-[#138808]" />
              </div>
              <span className="text-xs font-mono font-bold text-[#000080]">
                SMART INDIA HACKATHON 2026
              </span>
            </div>
            <span className="text-[10px] font-mono font-bold text-[#FF9933]">JUDGE PORTAL</span>
          </div>

          <div className="grid grid-cols-2 gap-2">
            {navLinks.map((item) => {
              const isActive = activeSection === item.href.replace('#', '');
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleScrollTo(e, item.href)}
                  className={`flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-bold transition-colors ${
                    isActive
                      ? 'text-[#FFFFFF] bg-[#000080] border border-[#000080]'
                      : 'text-[#000080] hover:text-[#FF9933] bg-[#FFFFFF] border border-[#000080]/20'
                  }`}
                >
                  <span>{item.label}</span>
                  <ChevronRight className="w-3.5 h-3.5 text-[#FF9933]" />
                </a>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
};
