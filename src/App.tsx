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
  const [metadata] = useState<ProjectMetadata>(initialProjectMetadata);
  const [problemData] = useState<ProblemStatementData>(initialProblemStatement);
  const [teamMembers] = useState<TeamMember[]>(initialTeamMembers);
  const [activeSection, setActiveSection] = useState('home');

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
    </div>
  );
}
