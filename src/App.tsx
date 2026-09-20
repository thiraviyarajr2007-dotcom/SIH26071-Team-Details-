import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { TeamSection } from './components/TeamSection';
import { MentorSection } from './components/MentorSection';
import { ProjectImpactSection } from './components/ProjectImpactSection';
import { MediaSpotlightSection } from './components/MediaSpotlightSection';
import { ProblemSection } from './components/ProblemSection';
import { SolutionSection } from './components/SolutionSection';
import { ApproachSection } from './components/ApproachSection';
import { TechnologySection } from './components/TechnologySection';
import { ProjectLinksSection } from './components/ProjectLinksSection';
import { BenchmarkSection } from './components/BenchmarkSection';
import { Footer } from './components/Footer';
import { CustomizeModal } from './components/CustomizeModal';
import { Settings2 } from 'lucide-react';

import {
  initialProjectMetadata,
  initialProblemStatement,
  solutionCards,
  approachWorkflow,
  initialTechnologies,
  initialProjectResources,
  initialBenchmarks,
  projectImpactCards,
  mediaSpotlightItems,
  teamMembers as initialTeamMembers,
  mentorsList,
} from './data/projectData';
import { ProjectMetadata, ProblemStatementData, TeamMember } from './types';

export default function App() {
  // Local state with localStorage persistence for easy hackathon customization
  const [metadata, setMetadata] = useState<ProjectMetadata>(() => {
    const saved = localStorage.getItem('sih_project_metadata');
    return saved ? JSON.parse(saved) : initialProjectMetadata;
  });

  const [problemData, setProblemData] = useState<ProblemStatementData>(() => {
    const saved = localStorage.getItem('sih_problem_data');
    return saved ? JSON.parse(saved) : initialProblemStatement;
  });

  const [teamMembers, setTeamMembers] = useState<TeamMember[]>(() => {
    const saved = localStorage.getItem('sih_team_members');
    return saved ? JSON.parse(saved) : initialTeamMembers;
  });

  const [isCustomizeOpen, setIsCustomizeOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Save changes to localStorage
  useEffect(() => {
    localStorage.setItem('sih_project_metadata', JSON.stringify(metadata));
  }, [metadata]);

  useEffect(() => {
    localStorage.setItem('sih_problem_data', JSON.stringify(problemData));
  }, [problemData]);

  useEffect(() => {
    localStorage.setItem('sih_team_members', JSON.stringify(teamMembers));
  }, [teamMembers]);

  // Active section observer for smooth navbar highlighting
  useEffect(() => {
    const sectionIds = [
      'home',
      'team',
      'mentors',
      'impact',
      'spotlight',
      'problem',
      'solution',
      'approach',
      'technology',
      'links',
      'benchmarks',
    ];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-20% 0px -70% 0px' }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleResetToDefaults = () => {
    localStorage.removeItem('sih_project_metadata');
    localStorage.removeItem('sih_problem_data');
    localStorage.removeItem('sih_team_members');
    setMetadata(initialProjectMetadata);
    setProblemData(initialProblemStatement);
    setTeamMembers(initialTeamMembers);
    setIsCustomizeOpen(false);
  };

  const scrollToSection = (id: string) => {
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FFFFFF] text-[#000080] selection:bg-[#FF9933] selection:text-[#FFFFFF]">
      {/* Sticky Top Navbar */}
      <Navbar projectMetadata={metadata} activeSection={activeSection} />

      {/* Main Flow: Exact requested order */}
      <main>
        {/* HERO SECTION */}
        <HeroSection
          projectMetadata={metadata}
          onExploreSolution={() => scrollToSection('team')}
          onViewProject={() => scrollToSection('links')}
        />

        {/* 01 — TEAM MEMBERS */}
        <TeamSection members={teamMembers} />

        {/* 02 — MENTORS & INDUSTRIAL MENTORS */}
        <MentorSection mentors={mentorsList} />

        {/* 03 — PROJECT IMPACT */}
        <ProjectImpactSection impactCards={projectImpactCards} />

        {/* 04 — CLIPS & PHOTOS SPOTLIGHT */}
        <MediaSpotlightSection items={mediaSpotlightItems} />

        {/* 05 — PROBLEM STATEMENT */}
        <ProblemSection problemData={problemData} />

        {/* 06 — OUR SOLUTION */}
        <SolutionSection cards={solutionCards} />

        {/* 07 — OUR APPROACH */}
        <ApproachSection workflow={approachWorkflow} />

        {/* 08 — TECHNOLOGY USED */}
        <TechnologySection technologies={initialTechnologies} />

        {/* 09 — PROJECT RESOURCES / LINKS */}
        <ProjectLinksSection resources={initialProjectResources} />

        {/* 10 — BENCHMARKS & RESULTS */}
        <BenchmarkSection benchmarks={initialBenchmarks} />
      </main>

      {/* FOOTER */}
      <Footer projectMetadata={metadata} />

      {/* Floating Customize / Edit Placeholders Button for Judges/Team */}
      <aside aria-label="Project customization settings" className="fixed bottom-6 right-6 z-40">
        <button
          onClick={() => setIsCustomizeOpen(true)}
          className="group flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#FFFFFF] hover:bg-[#FF9933] border-2 border-[#000080] text-[#000080] hover:text-[#FFFFFF] shadow-lg shadow-[#000080]/15 transition-all duration-200 transform hover:scale-105 cursor-pointer"
          title="Customize Project Details & Placeholders"
          aria-label="Customize Project Details & Placeholders"
        >
          <Settings2 className="w-4 h-4 text-[#FF9933] group-hover:text-[#FFFFFF] group-hover:rotate-45 transition-transform" />
          <span className="text-xs font-mono font-bold hidden sm:inline">
            Edit Placeholders
          </span>
        </button>
      </aside>

      {/* In-app Customize Modal */}
      <CustomizeModal
        isOpen={isCustomizeOpen}
        onClose={() => setIsCustomizeOpen(false)}
        metadata={metadata}
        setMetadata={setMetadata}
        problemData={problemData}
        setProblemData={setProblemData}
        teamMembers={teamMembers}
        setTeamMembers={setTeamMembers}
        onResetToDefaults={handleResetToDefaults}
      />
    </div>
  );
}
