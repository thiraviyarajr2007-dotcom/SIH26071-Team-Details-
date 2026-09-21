import React from 'react';
import { Award, Github, Linkedin, Youtube, ArrowUp, Heart } from 'lucide-react';
import { ProjectMetadata } from '../types';

interface FooterProps {
  projectMetadata: ProjectMetadata;
}

export const Footer: React.FC<FooterProps> = ({ projectMetadata }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

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

  return (
    <footer id="footer" className="bg-[#FFFFFF] border-t-2 border-[#000080]/15 pt-16 pb-12 relative overflow-hidden">
      {/* Indian Tricolor Top Bar Accent */}
      <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-[#FF9933] via-[#FFFFFF] to-[#138808] border-b border-[#000080]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b-2 border-[#000080]/15">
          {/* Brand & Mission (md: 5 cols) */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#FFFFFF] border-2 border-[#000080] flex items-center justify-center p-1 shadow-sm overflow-hidden shrink-0">
                <img 
                  src="/images/logos/team-logo.png" 
                  alt="Endovers07 Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <span className="font-extrabold text-lg text-[#000080] tracking-tight block">
                  {projectMetadata.projectName}
                </span>
                <span className="text-xs font-mono text-[#FF9933] font-extrabold tracking-wider">
                  SMART INDIA HACKATHON 2026
                </span>
              </div>
            </div>

            <p className="text-sm font-medium text-[#000080] opacity-85 max-w-sm leading-relaxed">
              Official national-level hackathon dossier developed for grand finale evaluation by the jury panel.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={projectMetadata.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-[#FFFFFF] border-2 border-[#000080] hover:bg-[#FF9933]/15 text-[#000080] flex items-center justify-center transition-all cursor-pointer shadow-sm"
                title="GitHub"
                aria-label="GitHub"
              >
                {/* GitHub Official Logo Appearance Preserved */}
                <Github className="w-4 h-4 text-[#181717]" />
              </a>
              <a
                href={projectMetadata.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-[#FFFFFF] border-2 border-[#000080] hover:bg-[#FF9933]/15 flex items-center justify-center transition-all cursor-pointer shadow-sm"
                title="LinkedIn"
                aria-label="LinkedIn"
              >
                {/* LinkedIn Official Brand Logo Color Preserved */}
                <Linkedin className="w-4 h-4 text-[#0A66C2]" />
              </a>
              <a
                href={projectMetadata.socialLinks.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-[#FFFFFF] border-2 border-[#000080] hover:bg-[#FF9933]/15 text-[#000080] flex items-center justify-center transition-all cursor-pointer shadow-sm"
                title="YouTube"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Navigation (md: 4 cols) */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-mono uppercase text-[#FF9933] tracking-wider font-extrabold">
              Quick Navigation
            </h4>
            <div className="grid grid-cols-2 gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm font-bold text-[#000080] hover:text-[#FF9933] transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Hackathon Credentials & Back to Top (md: 3 cols) */}
          <div className="md:col-span-3 flex flex-col justify-between">
            <div>
              <h4 className="text-xs font-mono uppercase text-[#138808] tracking-wider font-extrabold mb-3">
                Evaluation Dossier
              </h4>
              <div className="p-3.5 rounded-xl bg-[#FFFFFF] border-2 border-[#000080] font-mono text-xs space-y-1 shadow-sm">
                <div className="text-[#FF9933] font-extrabold">{projectMetadata.teamName}</div>
                <div className="text-[11px] text-[#138808] font-extrabold">Ministry Technical Jury</div>
              </div>
            </div>

            <button
              onClick={scrollToTop}
              className="mt-6 inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#FFFFFF] hover:bg-[#FF9933] border-2 border-[#000080] text-xs font-mono font-extrabold text-[#000080] hover:text-[#000080] transition-all cursor-pointer self-start shadow-sm"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#000080] font-bold">
          <div className="flex items-center gap-2">
            <span>Built for Smart India Hackathon</span>
            <span>•</span>
            <span className="opacity-80">© 2026 {projectMetadata.teamName}</span>
          </div>

          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#138808] animate-pulse" />
            <span className="font-extrabold text-[#000080]">PRODUCTION SYSTEM READY FOR JURY EVALUATION</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
