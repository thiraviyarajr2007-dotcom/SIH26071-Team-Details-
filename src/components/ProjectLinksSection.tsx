import React from 'react';
import {
  Youtube,
  HardDrive,
  Database,
  Github,
  Globe,
  FileCode2,
  ExternalLink,
  Clock,
  CheckCircle2,
} from 'lucide-react';
import { ProjectResourceLink } from '../types';

interface ProjectLinksSectionProps {
  resources: ProjectResourceLink[];
}

const resourceIconMap: Record<string, React.ElementType> = {
  YouTube: Youtube,
  GoogleDrive: HardDrive,
  Dataset: Database,
  GitHub: Github,
  LiveWebsite: Globe,
  Documentation: FileCode2,
};

export const ProjectLinksSection: React.FC<ProjectLinksSectionProps> = ({ resources }) => {
  return (
    <section id="links" className="py-20 bg-[#FFFFFF] relative border-t-2 border-[#000080]/15">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-[#FF9933]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2 font-mono text-[#FF9933] text-sm tracking-wider font-extrabold">
              <span className="w-6 h-px bg-[#FF9933]" />
              <span>SECTION 09</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#000080] tracking-tight flex items-center gap-3">
              <span>Project Resources &amp; Links</span>
              <span className="text-xs font-mono px-3 py-1 rounded-full bg-[#138808] text-[#FFFFFF] font-extrabold uppercase tracking-wider">
                Verifiable Dossier
              </span>
            </h2>
          </div>
          <p className="text-sm font-mono font-medium text-[#000080] max-w-sm opacity-85">
            Direct access to demonstration videos, live deployed prototypes, open-source repositories, and submission dossiers.
          </p>
        </div>

        {/* Resource Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {resources.map((res) => {
            const Icon = resourceIconMap[res.type] || Globe;
            const isPlaceholderUrl =
              !res.url ||
              res.url.startsWith('[') ||
              res.url.toLowerCase() === 'coming soon';

            return (
              <div
                key={res.type}
                id={`resource-card-${res.type.toLowerCase()}`}
                className="group p-6 rounded-2xl bg-[#FFFFFF] border-2 border-[#000080] hover:border-[#FF9933] transition-all duration-200 shadow-md shadow-[#000080]/10 hover:shadow-xl flex flex-col justify-between"
              >
                <div>
                  {/* Top Bar: Icon + Badge */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-[#FFFFFF] border-2 border-[#000080] flex items-center justify-center text-[#FF9933] group-hover:border-[#FF9933] group-hover:scale-105 transition-all">
                      <Icon
                        className={`w-6 h-6 ${
                          res.type === 'GitHub' ? 'text-[#181717]' : ''
                        }`}
                      />
                    </div>

                    {res.badge && (
                      <span className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-[#FF9933]/20 text-[#000080] border border-[#FF9933] font-bold">
                        {res.badge}
                      </span>
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-extrabold text-[#000080] mb-2 tracking-tight group-hover:text-[#FF9933] transition-colors">
                    {res.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm font-medium text-[#000080] opacity-85 leading-relaxed mb-6">
                    {res.description}
                  </p>
                </div>

                {/* Bottom Action Button */}
                <div className="pt-4 border-t-2 border-[#000080]/15">
                  {isPlaceholderUrl ? (
                    <div className="w-full py-2.5 px-4 rounded-xl bg-[#FFFFFF] border-2 border-[#000080]/30 text-[#000080] text-xs font-mono font-bold flex items-center justify-center gap-2 cursor-not-allowed opacity-75">
                      <Clock className="w-3.5 h-3.5 text-[#FF9933]" />
                      <span>Coming Soon ({res.url || '[URL]'})</span>
                    </div>
                  ) : (
                    <a
                      href={res.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-2.5 px-4 rounded-xl bg-[#FF9933] hover:bg-[#FF9933]/90 text-[#000080] font-extrabold text-xs tracking-wide flex items-center justify-center gap-2 shadow-sm border-2 border-[#000080] transition-all cursor-pointer"
                    >
                      <span>Open Resource</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
