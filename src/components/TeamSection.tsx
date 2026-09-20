import React from 'react';
import {
  Github,
  Linkedin,
  Mail,
  Users,
  ShieldCheck,
} from 'lucide-react';
import { TeamMember } from '../types';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface TeamSectionProps {
  members: TeamMember[];
}

export const TeamSection: React.FC<TeamSectionProps> = ({ members }) => {
  const [sectionRef, isSectionVisible] = useScrollAnimation({ threshold: 0.1 });

  return (
    <section
      id="team"
      ref={sectionRef}
      className={`py-24 bg-[#FFFFFF] relative border-t-2 border-[#000080]/15 overflow-hidden transition-all duration-700 ${
        isSectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
    >
      {/* Ambient background glow - Tricolor saffron & emerald */}
      <div className="absolute top-1/3 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#FF9933]/15 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 translate-x-1/2 translate-y-1/2 w-[700px] h-[400px] bg-[#138808]/15 rounded-full blur-[150px] pointer-events-none" />

      {/* Subtle Ashoka Chakra-inspired background pattern */}
      <div className="absolute inset-0 ashoka-chakra-pattern-lg pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2 font-mono text-[#FF9933] text-sm tracking-wider font-extrabold">
              <span className="w-6 h-px bg-[#FF9933]" />
              <span>SECTION 01</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#000080] tracking-tight flex items-center gap-3">
              <span>Team Members</span>
              <span className="text-xs font-mono px-3 py-1 rounded-full bg-[#138808] text-[#FFFFFF] font-extrabold uppercase tracking-wider">
                SIH Innovators
              </span>
            </h2>
          </div>

          <div className="flex items-center gap-3 text-xs font-mono">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#FFFFFF] border-2 border-[#000080] text-[#000080] font-bold">
              <Users className="w-3.5 h-3.5 text-[#FF9933]" />
              <span>{members.length} Core Innovators</span>
            </span>
            <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#FFFFFF] border-2 border-[#138808] text-[#138808] font-bold">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Verified Profiles</span>
            </span>
          </div>
        </div>

        {/* Editorial Composition - Featured Member + Grid */}
        <div className="space-y-8">
          {/* Featured Member - First team member highlighted */}
          {members.length > 0 && (
            <div
              id={`team-member-card-${members[0].id}`}
              className="group relative rounded-3xl bg-[#FFFFFF] border-2 border-[#FF9933] p-8 sm:p-10 shadow-xl shadow-[#000080]/15 hover:shadow-2xl premium-card-hover overflow-hidden"
            >
              {/* Top tricolor indicator stripe */}
              <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-[#FF9933] via-[#FFFFFF] to-[#138808] border-b border-[#000080]" />
              
              {/* Ashoka Chakra-inspired subtle background */}
              <div className="absolute top-4 right-4 w-32 h-32 opacity-5 ashoka-chakra-pattern-lg" />

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                {/* Large Profile Image */}
                <div className="lg:col-span-1 flex justify-center">
                  <div className="relative group-hover:scale-105 transition-transform duration-500">
                    <img
                      src={members[0].image}
                      alt={members[0].name}
                      className="w-40 h-40 sm:w-48 sm:h-48 rounded-2xl shadow-lg border-2 border-[#000080] object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        const fallback = target.nextElementSibling as HTMLElement;
                        if (fallback) fallback.style.display = 'flex';
                      }}
                    />
                    {/* Fallback for image error */}
                    <div className="w-40 h-40 sm:w-48 sm:h-48 rounded-2xl bg-[#000080] border-2 border-[#FF9933] flex items-center justify-center shadow-lg hidden">
                      <span className="text-3xl sm:text-4xl font-extrabold tracking-wider text-[#FFFFFF]">
                        {members[0].initials}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Member Details */}
                <div className="lg:col-span-2">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-xs font-mono font-extrabold px-3 py-1 rounded-full bg-[#FF9933] text-[#000080] border border-[#000080]">
                      TEAM LEAD
                    </span>
                    <span className="text-xs font-mono font-bold text-[#138808]">
                      SIH 2026
                    </span>
                  </div>

                  <h3 className="text-3xl sm:text-4xl font-extrabold text-[#000080] tracking-tight mb-3 group-hover:text-[#FF9933] transition-colors">
                    {members[0].name}
                  </h3>

                  <div className="mb-6">
                    <span className="text-sm font-mono font-bold px-4 py-2 rounded-lg bg-[#138808]/15 border-2 border-[#138808] text-[#138808]">
                      {members[0].role || '[ROLE]'}
                    </span>
                  </div>

                  <div className="flex items-center gap-4">
                    {members[0].github && (
                      <a
                        href={members[0].github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-xl bg-[#FFFFFF] hover:bg-[#FF9933] border-2 border-[#000080] hover:border-[#FF9933] premium-icon-hover focus-ring"
                        title={`${members[0].name} GitHub`}
                        aria-label={`${members[0].name} GitHub`}
                      >
                        <Github className="w-5 h-5 text-[#181717] group-hover:text-[#FFFFFF]" />
                      </a>
                    )}

                    {members[0].linkedin && (
                      <a
                        href={members[0].linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-xl bg-[#FFFFFF] hover:bg-[#FF9933] border-2 border-[#000080] hover:border-[#FF9933] premium-icon-hover focus-ring"
                        title={`${members[0].name} LinkedIn`}
                        aria-label={`${members[0].name} LinkedIn`}
                      >
                        <Linkedin className="w-5 h-5 text-[#0A66C2] group-hover:text-[#FFFFFF]" />
                      </a>
                    )}

                    {members[0].email && !members[0].email.startsWith('[') && (
                      <a
                        href={`mailto:${members[0].email}`}
                        className="p-3 rounded-xl bg-[#FFFFFF] hover:bg-[#138808] border-2 border-[#000080] hover:border-[#138808] text-[#000080] hover:text-[#FFFFFF] premium-icon-hover focus-ring"
                        title={`Email ${members[0].name}`}
                        aria-label={`Email ${members[0].name}`}
                      >
                        <Mail className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Remaining Team Members Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {members.slice(1).map((member, index) => {
              const isPlaceholderRole = !member.role || member.role.startsWith('[');
              const isPlaceholderEmail = !member.email || member.email.startsWith('[');

              return (
                <div
                  key={member.id}
                  id={`team-member-card-${member.id}`}
                  className="group relative rounded-3xl bg-[#FFFFFF] border-2 border-[#000080] hover:border-[#FF9933] p-6 sm:p-7 shadow-md shadow-[#000080]/10 hover:shadow-xl premium-card-hover flex flex-col justify-between overflow-hidden"
                >
                  {/* Top tricolor indicator stripe on hover */}
                  <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-[#FF9933] via-[#FFFFFF] to-[#138808] border-b border-[#000080]" />

                  <div>
                    {/* Card Header: Member Number & Department Badge */}
                    <div className="flex items-center justify-between mb-5">
                      <span className="text-[11px] font-mono font-extrabold px-2.5 py-0.5 rounded-full bg-[#000080] text-[#FFFFFF]">
                        MEMBER 0{index + 2}
                      </span>
                      <span className="text-[11px] font-mono font-bold text-[#000080]">
                        SIH 2026
                      </span>
                    </div>

                    {/* Profile Image / Initials Fallback */}
                    <div className="w-full flex justify-center mb-5">
                      <div className="relative group-hover:scale-105 transition-transform duration-300">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-28 h-28 sm:w-32 sm:h-32 rounded-2xl shadow-md border-2 border-[#000080] object-cover"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.style.display = 'none';
                            const fallback = target.nextElementSibling as HTMLElement;
                            if (fallback) fallback.style.display = 'flex';
                          }}
                        />
                        {/* Fallback for image error */}
                        <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-2xl bg-[#000080] border-2 border-[#FF9933] flex items-center justify-center shadow-md hidden">
                          <span className="text-2xl sm:text-3xl font-extrabold tracking-wider text-[#FFFFFF]">
                            {member.initials}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Name */}
                    <div className="text-center mb-3">
                      <h3 className="text-xl sm:text-2xl font-extrabold text-[#000080] tracking-tight group-hover:text-[#FF9933] transition-colors">
                        {member.name}
                      </h3>
                      <div className="mt-1.5 flex justify-center">
                        <span
                          className={`text-xs font-mono font-bold px-3 py-1 rounded-lg border-2 ${
                            isPlaceholderRole
                              ? 'bg-[#FF9933]/15 border-[#FF9933] text-[#000080]'
                              : 'bg-[#138808]/15 border-[#138808] text-[#138808]'
                          }`}
                        >
                          {member.role || '[ROLE]'}
                        </span>
                      </div>
                    </div>

                    {/* Email */}
                    <div className="text-center mb-5">
                      <a
                        href={!isPlaceholderEmail && member.email ? `mailto:${member.email}` : undefined}
                        className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[#FFFFFF] border-2 border-[#000080]/30 text-xs font-mono font-bold transition-colors ${
                          isPlaceholderEmail
                            ? 'text-[#000080]/60 cursor-default'
                            : 'text-[#000080] hover:text-[#FF9933] hover:border-[#FF9933] cursor-pointer'
                        }`}
                      >
                        <Mail className="w-3.5 h-3.5 text-[#FF9933]" />
                        <span className="truncate max-w-[200px]">
                          {member.email || '[EMAIL]'}
                        </span>
                      </a>
                    </div>
                  </div>

                  {/* Social / Professional Links Footer */}
                  <div className="pt-4 border-t-2 border-[#000080]/15 flex items-center justify-center gap-3">
                    {member.github && (
                      <a
                        href={member.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2.5 rounded-xl bg-[#FFFFFF] hover:bg-[#FFFFFF] border-2 border-[#000080] hover:border-[#FF9933] premium-icon-hover focus-ring"
                        title={`${member.name} GitHub`}
                        aria-label={`${member.name} GitHub`}
                      >
                        {/* GitHub Official Logo Appearance Preserved */}
                        <Github className="w-4 h-4 text-[#181717]" />
                      </a>
                    )}

                    {member.linkedin && (
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2.5 rounded-xl bg-[#FFFFFF] hover:bg-[#FFFFFF] border-2 border-[#000080] hover:border-[#000080] premium-icon-hover focus-ring"
                        title={`${member.name} LinkedIn`}
                        aria-label={`${member.name} LinkedIn`}
                      >
                        {/* LinkedIn Official Brand Logo Color Preserved */}
                        <Linkedin className="w-4 h-4 text-[#0A66C2]" />
                      </a>
                    )}

                    {!isPlaceholderEmail && member.email && (
                      <a
                        href={`mailto:${member.email}`}
                        className="p-2.5 rounded-xl bg-[#FFFFFF] hover:bg-[#138808] border-2 border-[#000080] hover:border-[#138808] text-[#000080] hover:text-[#FFFFFF] premium-icon-hover focus-ring"
                        title={`Email ${member.name}`}
                        aria-label={`Email ${member.name}`}
                      >
                        <Mail className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
