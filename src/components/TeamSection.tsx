import React from 'react';
import {
  Github,
  Linkedin,
  Mail,
  Users,
  ShieldCheck,
} from 'lucide-react';
import { TeamMember } from '../types';
import { ProjectImage } from './ProjectImage';

interface TeamSectionProps {
  members: TeamMember[];
}

export const TeamSection: React.FC<TeamSectionProps> = ({ members }) => {
  return (
    <section
      id="team"
      className="py-24 bg-[#FFFFFF] relative border-t-2 border-[#000080]/15 overflow-hidden"
    >
      {/* Ambient background glow - Tricolor saffron & emerald */}
      <div className="absolute top-1/3 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#FF9933]/15 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 translate-x-1/2 translate-y-1/2 w-[700px] h-[400px] bg-[#138808]/15 rounded-full blur-[150px] pointer-events-none" />

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

        {/* Dedicated Team Members Grid - All 6 Members Displayed Separately & Concurrently */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {members.map((member, index) => {
            const isPlaceholderRole = !member.role || member.role.startsWith('[');
            const isPlaceholderEmail = !member.email || member.email.startsWith('[');

            return (
              <div
                key={member.id}
                id={`team-member-card-${member.id}`}
                className="group relative rounded-3xl bg-[#FFFFFF] border-2 border-[#000080] hover:border-[#FF9933] p-6 sm:p-7 shadow-md shadow-[#000080]/10 hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden"
              >
                {/* Top tricolor indicator stripe on hover */}
                <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-[#FF9933] via-[#FFFFFF] to-[#138808] border-b border-[#000080]" />

                <div>
                  {/* Card Header: Member Number & Department Badge */}
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-[11px] font-mono font-extrabold px-2.5 py-0.5 rounded-full bg-[#000080] text-[#FFFFFF]">
                      MEMBER 0{index + 1}
                    </span>
                    <span className="text-[11px] font-mono font-bold text-[#000080]">
                      SIH 2026
                    </span>
                  </div>

                  {/* Profile Image / Initials Fallback */}
                  <div className="w-full flex justify-center mb-5">
                    <div className="relative group-hover:scale-105 transition-transform duration-300">
                      <ProjectImage
                        src={member.image}
                        alt={member.name}
                        fallbackType="team"
                        fallbackInitials={member.initials}
                        title={member.name}
                        badge="Innovator"
                        className="w-28 h-28 sm:w-32 sm:h-32 rounded-2xl shadow-md border-2 border-[#000080]"
                      />
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
                      className="p-2.5 rounded-xl bg-[#FFFFFF] hover:bg-[#FFFFFF] border-2 border-[#000080] hover:border-[#FF9933] transition-all duration-200"
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
                      className="p-2.5 rounded-xl bg-[#FFFFFF] hover:bg-[#FFFFFF] border-2 border-[#000080] hover:border-[#000080] transition-all duration-200"
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
                      className="p-2.5 rounded-xl bg-[#FFFFFF] hover:bg-[#138808] border-2 border-[#000080] hover:border-[#138808] text-[#000080] hover:text-[#FFFFFF] transition-all duration-200"
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
    </section>
  );
};
