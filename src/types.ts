export interface ProblemStatementData {
  id: string; // e.g., "[PROBLEM STATEMENT ID]"
  title: string; // e.g., "[PROBLEM TITLE]"
  organization: string; // e.g., "[ORGANIZATION]"
  category: string; // e.g., "[CATEGORY]" (e.g. Software / Hardware)
  theme: string; // e.g., "[THEME]"
  description: string; // e.g., "[PROBLEM DESCRIPTION]"
}

export interface SolutionCard {
  step: string;
  title: string;
  description: string;
}

export interface WorkflowStep {
  number: string;
  iconName: string;
  title: string;
  description: string;
}

export interface TechnologyItem {
  name: string;
  iconName: string;
  category: 'Frontend' | 'Backend' | 'Database' | 'AI / ML' | 'APIs' | 'Cloud' | 'Deployment' | 'DevOps' | 'Tools';
  roleInProject: string;
}

export interface ProjectResourceLink {
  type: 'YouTube' | 'GoogleDrive' | 'Dataset' | 'GitHub' | 'LiveWebsite' | 'Documentation';
  title: string;
  description: string;
  url: string; // If "[URL]" or empty => "Coming Soon"
  badge?: string;
}

export interface BenchmarkItem {
  metric: string;
  baseline: string;
  ourResult: string;
  target?: string;
  status: 'validated' | 'pending' | 'placeholder';
}

export interface ProjectImpactCard {
  id: string;
  metric: string;
  title: string;
  description: string;
  scope: string;
  tag: string;
}

export interface MediaSpotlightItem {
  id: string;
  type: 'image' | 'clip';
  mediaUrl: string;
  title: string;
  description: string;
  tag: string;
  videoDuration?: string;
}

export interface SpotlightImageItem {
  id: string;
  image: string;
  title: string;
  description: string;
  tag?: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  email: string;
  github: string;
  linkedin: string;
  image: string;
  initials: string;
}

export interface Mentor {
  id: string;
  name: string;
  roleType: 'Institution Mentor' | 'Industrial Mentor' | 'Mentor';
  designation: string;
  institution: string;
  description: string;
  linkedin: string;
  image: string;
  initials: string;
}

export interface ProjectMetadata {
  projectName: string;
  teamName: string;
  tagline: string;
  edition: string;
  pillarTags: string[];
  socialLinks: {
    github: string;
    linkedin: string;
    youtube: string;
  };
}
