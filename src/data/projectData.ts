import {
  ProblemStatementData,
  SolutionCard,
  WorkflowStep,
  TechnologyItem,
  ProjectResourceLink,
  BenchmarkItem,
  SpotlightImageItem,
  ProjectImpactCard,
  MediaSpotlightItem,
  TeamMember,
  Mentor,
  ProjectMetadata,
} from '../types';

export const initialProjectMetadata: ProjectMetadata = {
  projectName: "[PROJECT NAME]",
  teamName: "[TEAM NAME]",
  tagline: "[ONE-LINE PROJECT DESCRIPTION]",
  edition: "SIH 2026",
  pillarTags: ["SIH 2026", "Innovation", "Technology", "Impact"],
  socialLinks: {
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    youtube: "https://youtube.com",
  },
};

export const initialProblemStatement: ProblemStatementData = {
  id: "[PROBLEM STATEMENT ID]",
  title: "[PROBLEM TITLE]",
  organization: "[ORGANIZATION]",
  category: "[CATEGORY]",
  theme: "[THEME]",
  description: "[COMPLETE PROBLEM DESCRIPTION: Detailed statement explaining the challenge proposed by the ministry/organization for Smart India Hackathon.]",
};

export const solutionCards: SolutionCard[] = [
  {
    step: "01",
    title: "Problem Understanding",
    description: "Deep domain breakdown addressing the core bottlenecks, edge constraints, and operational context defined by the ministry.",
  },
  {
    step: "02",
    title: "Core Solution",
    description: "The primary architectural engine designed to provide end-to-end resolution with fault-tolerant operations and intuitive delivery.",
  },
  {
    step: "03",
    title: "Automation",
    description: "Streamlined automated pipelines removing manual friction, reducing latency, and ensuring continuous data integrity.",
  },
  {
    step: "04",
    title: "Intelligence",
    description: "Advanced algorithmic/AI-driven models synthesizing raw signals into actionable, high-confidence real-time decisions.",
  },
  {
    step: "05",
    title: "Scalability",
    description: "Cloud-ready modular micro-architecture capable of horizontally scaling across regional and national workloads.",
  },
  {
    step: "06",
    title: "Impact",
    description: "Measurable socio-economic value, operational cost reduction, and nationwide governance improvements.",
  },
];

export const approachWorkflow: WorkflowStep[] = [
  {
    number: "01",
    iconName: "Search",
    title: "Problem Scoping",
    description: "Analysis of ministry pain points, stakeholders, and operational boundaries.",
  },
  {
    number: "02",
    iconName: "FileText",
    title: "Requirement Analysis",
    description: "Defining technical specs, regulatory constraints, and measurable success criteria.",
  },
  {
    number: "03",
    iconName: "Database",
    title: "Data Collection",
    description: "Aggregating domain datasets, mock streams, and multi-source inputs.",
  },
  {
    number: "04",
    iconName: "Filter",
    title: "Data Processing",
    description: "Sanitization, feature engineering, normalization, and validation pipelines.",
  },
  {
    number: "05",
    iconName: "Cpu",
    title: "AI / Core Logic",
    description: "Developing intelligent algorithms, model architectures, and inference rules.",
  },
  {
    number: "06",
    iconName: "Server",
    title: "Backend Engine",
    description: "High-performance API endpoints, distributed services, and auth management.",
  },
  {
    number: "07",
    iconName: "Layout",
    title: "Frontend UI",
    description: "Responsive, accessible, role-based web and mobile interfaces for stakeholders.",
  },
  {
    number: "08",
    iconName: "Layers",
    title: "System Integration",
    description: "Binding telemetry, APIs, model inference, and persistence layers seamlessly.",
  },
  {
    number: "09",
    iconName: "ShieldCheck",
    title: "Testing & Validation",
    description: "Rigorous benchmark testing, stress testing, edge case checks, and judge QA.",
  },
  {
    number: "10",
    iconName: "CloudLightning",
    title: "Deployment",
    description: "Containerized deployment with CI/CD pipeline, monitoring, and live sandbox access.",
  },
];

export const initialTechnologies: TechnologyItem[] = [
  {
    name: "React 19 & TypeScript",
    iconName: "Atom",
    category: "Frontend",
    roleInProject: "Type-safe interactive interface with high-performance responsive state management.",
  },
  {
    name: "Tailwind CSS",
    iconName: "Palette",
    category: "Frontend",
    roleInProject: "Utility-first design system with futuristic dark theme and responsive glassmorphism.",
  },
  {
    name: "[BACKEND FRAMEWORK]",
    iconName: "Server",
    category: "Backend",
    roleInProject: "High-throughput asynchronous API services and business logic execution.",
  },
  {
    name: "[DATABASE ENGINE]",
    iconName: "Database",
    category: "Database",
    roleInProject: "ACID-compliant storage for real-time transactions and audit-trail logging.",
  },
  {
    name: "[AI / ML ENGINE]",
    iconName: "BrainCircuit",
    category: "AI / ML",
    roleInProject: "Specialized model pipeline optimized for domain inference and classification.",
  },
  {
    name: "[REST / GRAPHQL APIS]",
    iconName: "Workflow",
    category: "APIs",
    roleInProject: "Secure contract-based communication between services and client nodes.",
  },
  {
    name: "[CLOUD PLATFORM]",
    iconName: "Cloud",
    category: "Cloud",
    roleInProject: "Elastic infrastructure hosting containerized services with auto-scaling.",
  },
  {
    name: "[CONTAINER / CI-CD]",
    iconName: "Container",
    category: "Deployment",
    roleInProject: "Automated container builds, health-checks, and production orchestration.",
  },
  {
    name: "[DEV / MONITORING TOOLS]",
    iconName: "Wrench",
    category: "Tools",
    roleInProject: "Developer tooling, static analysis, log aggregation, and real-time telemetry.",
  },
];

export const initialProjectResources: ProjectResourceLink[] = [
  {
    type: "YouTube",
    title: "YouTube Video Demo",
    description: "Comprehensive 3-minute video walkthrough showcasing prototype features, live user flow, and judge presentation.",
    url: "[YOUTUBE URL]",
    badge: "Judge Video",
  },
  {
    type: "GoogleDrive",
    title: "Google Drive Assets",
    description: "Presentation deck (PPTX), architecture diagrams, submission PDFs, and supplementary proof of work.",
    url: "[GOOGLE DRIVE URL]",
    badge: "Official Deck",
  },
  {
    type: "Dataset",
    title: "Dataset & Schemas",
    description: "Sample datasets, ground truth benchmarks, preprocessing scripts, and schema references.",
    url: "[DATASET URL]",
    badge: "Data Repo",
  },
  {
    type: "GitHub",
    title: "GitHub Repository",
    description: "Complete open-source codebase, setup guides, modular source code, and commit history.",
    url: "[GITHUB URL]",
    badge: "Source Code",
  },
  {
    type: "LiveWebsite",
    title: "Live Deployed System",
    description: "Interactive production sandbox where evaluators can test live features and workflows directly.",
    url: "[WEBSITE URL]",
    badge: "Live Prototype",
  },
  {
    type: "Documentation",
    title: "Technical Documentation",
    description: "API specifications, deployment instructions, architecture design document (ADD), and user guide.",
    url: "[DOCUMENTATION URL]",
    badge: "Docs & ADD",
  },
];

export const initialBenchmarks: BenchmarkItem[] = [
  {
    metric: "Model Accuracy",
    baseline: "[BASELINE ACCURACY]",
    ourResult: "[RESULT ACCURACY]",
    target: "National Hackathon Standard",
    status: "placeholder",
  },
  {
    metric: "Inference Latency",
    baseline: "[BASELINE LATENCY]",
    ourResult: "[RESULT LATENCY]",
    target: "< 200ms real-time SLA",
    status: "placeholder",
  },
  {
    metric: "Precision / Recall",
    baseline: "[BASELINE P/R]",
    ourResult: "[RESULT P/R]",
    target: "High confidence score",
    status: "placeholder",
  },
  {
    metric: "Processing Throughput",
    baseline: "[BASELINE THROUGHPUT]",
    ourResult: "[RESULT THROUGHPUT]",
    target: "10,000+ records / min",
    status: "placeholder",
  },
  {
    metric: "Dataset Size",
    baseline: "[BASELINE SIZE]",
    ourResult: "[RESULT SIZE]",
    target: "Multi-class validation set",
    status: "placeholder",
  },
  {
    metric: "System Availability",
    baseline: "[BASELINE UPTIME]",
    ourResult: "[RESULT UPTIME]",
    target: "99.9% uptime architecture",
    status: "placeholder",
  },
];

export const projectImpactCards: ProjectImpactCard[] = [
  {
    id: "impact-1",
    metric: "[QUANTITATIVE METRIC / %]",
    title: "Operational Efficiency Gain",
    description: "Drastic acceleration in workflow throughput by eliminating manual latency and automating decision pathways.",
    scope: "Administrative & Operational Flow",
    tag: "Efficiency",
  },
  {
    id: "impact-2",
    metric: "[COST REDUCTION %]",
    title: "Resource & Expenditure Optimization",
    description: "Targeted reduction in deployment, infrastructure, and manual auditing costs across participating regional clusters.",
    scope: "Fiscal & Resource Allocation",
    tag: "Optimization",
  },
  {
    id: "impact-3",
    metric: "[POPULATION / BENEFICIARY REACH]",
    title: "Socio-Economic & Governance Reach",
    description: "Empowering citizens, field operators, and administrative stakeholders with equitable access to real-time verified intelligence.",
    scope: "Nationwide Community Impact",
    tag: "Public Governance",
  },
  {
    id: "impact-4",
    metric: "99.9% / [RELIABILITY SLA]",
    title: "System Integrity & Fault Tolerance",
    description: "Robust automated failover, audit-trail transparency, and high data confidence designed for mission-critical ministry adoption.",
    scope: "National Infrastructure Standard",
    tag: "Resilience",
  },
];

export const mediaSpotlightItems: MediaSpotlightItem[] = [
  {
    id: "media-1",
    type: "image",
    mediaUrl: "/images/project/project-1.png",
    title: "System Dashboard & Control Console",
    description: "Centralized command console displaying real-time telemetry, operational alerts, and dynamic analytics for stakeholders.",
    tag: "UI Screenshot",
  },
  {
    id: "media-2",
    type: "image",
    mediaUrl: "/images/project/project-2.png",
    title: "Architecture & Workflow Blueprint",
    description: "End-to-end architectural schematic depicting microservices communication, data pipelines, and validation boundaries.",
    tag: "Architecture Visual",
  },
  {
    id: "media-3",
    type: "clip",
    mediaUrl: "/images/project/project-3.png",
    title: "Interactive Prototype Walkthrough",
    description: "Live functional prototype demonstration highlighting real-time inputs, processing execution, and instantaneous response outputs.",
    tag: "Demo Clip",
    videoDuration: "03:15",
  },
  {
    id: "media-4",
    type: "image",
    mediaUrl: "/images/project/project-4.png",
    title: "System Stress Testing & Validation",
    description: "Automated test harness demonstrating multi-concurrency throughput, API response latency, and failover resilience under high workload.",
    tag: "Stress Testing",
  },
  {
    id: "media-5",
    type: "image",
    mediaUrl: "/images/project/project-5.png",
    title: "Jury Presentation & Model Validation",
    description: "Demonstration of live inference benchmarks, stress test harnesses, and ministry compliance criteria before evaluators.",
    tag: "Presentation",
  },
];

export const spotlightImages: SpotlightImageItem[] = [
  {
    id: "spotlight-1",
    image: "/images/project/project-1.png",
    title: "Core System Dashboard",
    description: "Centralized command console displaying real-time telemetry, operational alerts, and dynamic analytics for stakeholders.",
    tag: "Interface",
  },
  {
    id: "spotlight-2",
    image: "/images/project/project-2.png",
    title: "System Architecture & Data Flow",
    description: "End-to-end architectural schematic depicting microservices communication, data pipelines, and validation boundaries.",
    tag: "Architecture",
  },
  {
    id: "spotlight-3",
    image: "/images/project/project-3.png",
    title: "Prototype Demonstration",
    description: "Live functional prototype exhibiting real-time inputs, processing execution, and instantaneous response outputs.",
    tag: "Prototype",
  },
  {
    id: "spotlight-4",
    image: "/images/project/project-4.png",
    title: "System Stress Testing & Validation",
    description: "Automated test harness demonstrating multi-concurrency throughput, API response latency, and failover resilience.",
    tag: "System Testing",
  },
];

export const teamMembers: TeamMember[] = [
  {
    id: "srirangaprasath",
    name: "Srirangaprasath I",
    role: "[ROLE]",
    email: "[EMAIL]",
    github: "https://github.com/rangapprasathsri-web/",
    linkedin: "https://www.linkedin.com/in/srirangapprasath-i-167985383",
    image: "/images/team/srirangaprasath.png",
    initials: "SI",
  },
  {
    id: "thiraviyaraj",
    name: "Thiraviyaraj R",
    role: "[ROLE]",
    email: "[EMAIL]",
    github: "https://github.com/thiraviyarajr2007-dotcom",
    linkedin: "https://www.linkedin.com/in/thiraviaraj-rm-5b7478303",
    image: "/images/team/thiraviyaraj.png",
    initials: "TR",
  },
  {
    id: "vignesh",
    name: "Vignesh Selvan V",
    role: "[ROLE]",
    email: "[EMAIL]",
    github: "https://github.com/vigneshselvanV",
    linkedin: "https://www.linkedin.com/in/vigneshselvan-v/",
    image: "/images/team/vignesh.png",
    initials: "VV",
  },
  {
    id: "sudharsan",
    name: "Sudharsan S",
    role: "[ROLE]",
    email: "[EMAIL]",
    github: "https://github.com/sudharsansudharsan1460",
    linkedin: "https://www.linkedin.com/in/sudharsan-s-287a68379/",
    image: "/images/team/sudharsan.png",
    initials: "SS",
  },
  {
    id: "vaishali",
    name: "Vaishali K",
    role: "[ROLE]",
    email: "[EMAIL]",
    github: "https://github.com/Vaishali-hacker",
    linkedin: "https://www.linkedin.com/in/vaishali-k-35b461240/",
    image: "/images/team/vaishali.png",
    initials: "VK",
  },
  {
    id: "srinithadharsan",
    name: "Srinithadharsan G",
    role: "[ROLE]",
    email: "[EMAIL]",
    github: "https://github.com/gsrinithadharsan",
    linkedin: "https://www.linkedin.com/in/srinithadharsan-g-01bb73385",
    image: "/images/team/srinithadharsan.png",
    initials: "SG",
  },
];

export const mentorsList: Mentor[] = [
  {
    id: "gajendran",
    name: "Er. Gajendran Parthasarathi",
    roleType: "Mentor",
    designation: "[MENTOR DESIGNATION]",
    institution: "[INSTITUTION]",
    description: "[MENTOR DESCRIPTION: Technical mentorship, system guidance, architecture evaluation, and hackathon project strategy.]",
    linkedin: "https://www.linkedin.com/in/er-gajendran-parthasarathi-9689a2109/",
    image: "/images/mentors/gajendran.png",
    initials: "GP",
  },
  {
    id: "sivaprakash",
    name: "Dr. P. Sivaprakash",
    roleType: "Industrial Mentor",
    designation: "[DESIGNATION]",
    institution: "[INSTITUTION]",
    description: "[MENTOR DESCRIPTION: Industrial perspective, product feasibility, scalable enterprise adoption, and executive problem validation.]",
    linkedin: "https://www.linkedin.com/in/dr-p-sivaprakash-learninganddevelopment/",
    image: "/images/mentors/sivaprakash.png",
    initials: "PS",
  },
];
