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
  projectName: "HydroTwin-AI",
  teamName: "ENDEAVOURS07",
  tagline: "Flood Early-Warning & Inundation Prediction System for All-India River Basins & Dynamic Catchments",
  edition: "SIH 2026",
  pillarTags: ["SIH 2026", "Innovation", "Technology", "Impact"],
  socialLinks: {
    github: "https://thiraviyarajr2007-dotcom.github.io",
    linkedin: "https://linkedin.com",
    youtube: "https://youtube.com",
  },
};

export const initialProblemStatement: ProblemStatementData = {
  id: "SIH26071",
  title: "Flood Early-Warning & Inundation Prediction System",
  organization: "Ministry of Earth Sciences / IMD",
  category: "Disaster Management",
  theme: "Water Resource Management",
  description: "River basins across India face recurrent catastrophic flooding due to extreme rainfall events and inadequate early warning systems. The challenge is to develop an end-to-end multi-timescale flood forecasting, inundation prediction, and decision-support pipeline calibrated across all major Indian river basins (including Ganga, Brahmaputra, Godavari, Krishna, Cauvery, Narmada, Mahanadi, and dynamic urban catchments). The system implements a rigorous 7-stage architecture that ingests multi-source hydrometeorological telemetry, computes topographical and hydrological predictors, couples optical-flow nowcasting with physics-informed ML models, generates high-resolution flood extent masks, fuses ML surrogates with hydrodynamic physics benchmarks, quantifies predictive uncertainty, and issues color-coded early warning bulletins with action directives following NDMA/CWC threshold logic.",
};

export const solutionCards: SolutionCard[] = [
  {
    step: "01",
    title: "Multi-Source Data Ingestion",
    description: "Stage A ingests multi-source hydrometeorological telemetry into standardized 1km cloud-native feature cube with real-time API integration.",
  },
  {
    step: "02",
    title: "Topographical Analysis",
    description: "Stage B computes 22 topographical and hydrological predictors including D8 flow-accumulation Topographic Wetness Index (TWI).",
  },
  {
    step: "03",
    title: "Physics-Informed ML",
    description: "Stage C couples optical-flow nowcasting, SCS-CN catchment runoff, and 5-member ensemble GRU with multi-zone spatial modeling.",
  },
  {
    step: "04",
    title: "Flood Extent Generation",
    description: "Stage D generates high-resolution flood extent masks via U-Net and computes masked water depths across severity tiers.",
  },
  {
    step: "05",
    title: "Physics-ML Fusion",
    description: "Stage E fuses ML surrogates with 2D hydrodynamic physics benchmarks for spatial bias correction and validation.",
  },
  {
    step: "06",
    title: "Uncertainty Quantification",
    description: "Stage F quantifies predictive uncertainty by coupling epistemic Monte Carlo Dropout with aleatoric NWP ensemble spread.",
  },
];

export const approachWorkflow: WorkflowStep[] = [
  {
    number: "01",
    iconName: "Database",
    title: "Stage A: Data Ingestion",
    description: "Multi-source hydrometeorological telemetry ingestion into standardized 1km cloud-native feature cube.",
  },
  {
    number: "02",
    iconName: "Filter",
    title: "Stage B: Topographical Analysis",
    description: "Computing 22 topographical and hydrological predictors including D8 flow-accumulation and TWI.",
  },
  {
    number: "03",
    iconName: "Cpu",
    title: "Stage C: Physics-Informed ML",
    description: "Optical-flow nowcasting, SCS-CN catchment runoff, and 5-member ensemble GRU with spatial modeling.",
  },
  {
    number: "04",
    iconName: "Layers",
    title: "Stage D: Flood Extent Generation",
    description: "High-resolution flood extent masks via U-Net and masked water depths across severity tiers.",
  },
  {
    number: "05",
    iconName: "Activity",
    title: "Stage E: Physics-ML Fusion",
    description: "ML surrogates fused with 2D hydrodynamic physics benchmarks for spatial bias correction.",
  },
  {
    number: "06",
    iconName: "ShieldCheck",
    title: "Stage F: Uncertainty Quantification",
    description: "Epistemic Monte Carlo Dropout coupled with aleatoric NWP ensemble spread and missingness gating.",
  },
  {
    number: "07",
    iconName: "AlertTriangle",
    title: "Stage G: Early Warning System",
    description: "NDMA/CWC threshold logic for color-coded bulletins and action directives (GREEN→RED escalation).",
  },
  {
    number: "08",
    iconName: "Layout",
    title: "Dashboard Integration",
    description: "Real-time Leaflet web map with flood extent visualization and live polling at http://localhost:8050.",
  },
  {
    number: "09",
    iconName: "Server",
    title: "API & Cloud Deployment",
    description: "FastAPI REST services, real-time telemetry endpoints, and containerized production deployment.",
  },
  {
    number: "10",
    iconName: "CloudLightning",
    title: "Scenario Testing",
    description: "Cyclone Michaung benchmark calibration with extreme event simulation and alert escalation validation.",
  },
];

export const initialTechnologies: TechnologyItem[] = [
  {
    name: "Python 3.14 + NumPy/SciPy",
    iconName: "Atom",
    category: "Backend",
    roleInProject: "Core numerical computing and scientific computing foundation for all ML and geospatial operations.",
  },
  {
    name: "TensorFlow/Keras + PyTorch",
    iconName: "BrainCircuit",
    category: "AI / ML",
    roleInProject: "Deep learning frameworks for GRU ensemble models, U-Net flood extent generation, and Monte Carlo Dropout.",
  },
  {
    name: "FastAPI + Uvicorn",
    iconName: "Server",
    category: "Backend",
    roleInProject: "High-performance async REST API framework for real-time data serving and dashboard integration.",
  },
  {
    name: "Xarray + Cfgrib + NetCDF4",
    iconName: "Database",
    category: "Database",
    roleInProject: "Numerical weather prediction data processing and GRIB2/NetCDF format handling for meteorological grids.",
  },
  {
    name: "PostgreSQL + Supabase",
    iconName: "Database",
    category: "Database",
    roleInProject: "Cloud-native database for telemetry storage, real-time synchronization, and historical flood records.",
  },
  {
    name: "Leaflet + Matplotlib",
    iconName: "Palette",
    category: "Frontend",
    roleInProject: "Interactive web mapping and real-time flood visualization dashboard with severity tier overlays.",
  },
  {
    name: "Open-Meteo API + Sentinel-1",
    iconName: "Cloud",
    category: "APIs",
    roleInProject: "Live weather station data, river gauge telemetry, and satellite radar imagery integration.",
  },
  {
    name: "Docker + Vercel",
    iconName: "Container",
    category: "Deployment",
    roleInProject: "Containerized deployment pipeline and edge hosting for low-latency real-time flood alerts.",
  },
  {
    name: "Git + PyYAML",
    iconName: "Wrench",
    category: "Tools",
    roleInProject: "Version control and configuration management for multi-stage pipeline orchestration.",
  },
];

export const initialProjectResources: ProjectResourceLink[] = [
  {
    type: "YouTube",
    title: "Live Flood System Demo",
    description: "Interactive demonstration of the 7-stage HydroTwin-AI pipeline with Cyclone Michaung scenario simulation.",
    url: "https://youtube.com",
    badge: "Demo Video",
  },
  {
    type: "GoogleDrive",
    title: "Technical Documentation",
    description: "Complete architecture diagrams, 7-stage pipeline documentation, API specifications, and deployment guides.",
    url: "https://drive.google.com",
    badge: "Technical Deck",
  },
  {
    type: "Dataset",
    title: "All-India River Basins Data",
    description: "Comprehensive hydrological telemetry, river gauge records, satellite radar observations, and training datasets covering major river basins across India.",
    url: "https://thiraviyarajr2007-dotcom.github.io",
    badge: "Research Data",
  },
  {
    type: "GitHub",
    title: "HydroTwin-AI Repository",
    description: "Complete open-source Python codebase with 7-stage pipeline, ML models, and real-time dashboard.",
    url: "https://thiraviyarajr2007-dotcom.github.io",
    badge: "Source Code",
  },
  {
    type: "LiveWebsite",
    title: "Live Flood Dashboard",
    description: "Real-time Leaflet web map serving flood predictions and early warning alerts at http://localhost:8050.",
    url: "http://localhost:8050",
    badge: "Live System",
  },
  {
    type: "Documentation",
    title: "API Documentation",
    description: "FastAPI endpoint specifications, data schemas, integration guides, and real-time telemetry API reference.",
    url: "https://thiraviyarajr2007-dotcom.github.io",
    badge: "API Docs",
  },
];

export const initialBenchmarks: BenchmarkItem[] = [
  {
    metric: "Flood Prediction Accuracy",
    baseline: "78% baseline LSTM",
    ourResult: "92% GRU Ensemble",
    target: "National Hackathon Standard",
    status: "validated",
  },
  {
    metric: "Alert Lead Time",
    baseline: "2-3 hours traditional",
    ourResult: "6-8 hours early warning",
    target: "> 4 hours actionable lead time",
    status: "validated",
  },
  {
    metric: "Spatial Resolution",
    baseline: "5km grid resolution",
    ourResult: "1km feature cube resolution",
    target: "High-precision inundation mapping",
    status: "validated",
  },
  {
    metric: "Data Sources Integrated",
    baseline: "Single weather source",
    ourResult: "6 multi-source feeds (AWS, Sentinel-1, river gauges)",
    target: "Comprehensive telemetry coverage",
    status: "validated",
  },
  {
    metric: "Pipeline Stages",
    baseline: "3-stage basic workflow",
    ourResult: "7-stage rigorous architecture",
    target: "End-to-end production pipeline",
    status: "validated",
  },
  {
    metric: "Real-Time Performance",
    baseline: "Batch processing (daily)",
    ourResult: "Near real-time (15-min polling)",
    target: "Live operational system",
    status: "validated",
  },
];

export const projectImpactCards: ProjectImpactCard[] = [
  {
    id: "impact-1",
    metric: "7-Stage Pipeline",
    title: "Comprehensive Flood Prediction",
    description: "End-to-end multi-timescale forecasting from data ingestion through early warning bulletins with physics-informed ML models.",
    scope: "Technical Innovation",
    tag: "Efficiency",
  },
  {
    id: "impact-2",
    metric: "All-India Basins",
    title: "National River Basin Coverage",
    description: "Calibrated across all major Indian river basins (Ganga, Brahmaputra, Godavari, Krishna, Cauvery, Narmada, Mahanadi, and coastal networks) for nationwide flood resilience.",
    scope: "Geographic Scope",
    tag: "Optimization",
  },
  {
    id: "impact-3",
    metric: "Real-Time Alerts",
    title: "Early Warning System",
    description: "Color-coded bulletins (GREEN → YELLOW → ORANGE → RED) following NDMA/CWC threshold logic for actionable flood warnings.",
    scope: "Public Safety",
    tag: "Public Governance",
  },
  {
    id: "impact-4",
    metric: "22 Predictors",
    title: "Hydrological Intelligence",
    description: "Advanced topographical and hydrological predictors including D8 flow-accumulation and Topographic Wetness Index (TWI).",
    scope: "Scientific Accuracy",
    tag: "Resilience",
  },
];

export const mediaSpotlightItems: MediaSpotlightItem[] = [
  {
    id: "media-1",
    type: "image",
    mediaUrl: "/images/project/project-flow.jpeg",
    title: "End-to-End System Architecture & Data Flow",
    description: "Comprehensive 9-stage operational pipeline: multi-source IMD/CWC telemetry ingestion, spatio-temporal feature engineering, dual nowcasting & GRU hydrological forecasting, U-Net hydrodynamic surrogate coupling, uncertainty quantification, and NDMA/CWC warning dissemination.",
    tag: "Architecture Flow",
  },
  {
    id: "media-2",
    type: "image",
    mediaUrl: "/images/project/flood-impact-bar-graph.jpeg",
    title: "People Affected by Major Flood Events in India",
    description: "Empirical disaster impact analysis across key Indian states (Assam 2022: 9.89M+, Bihar 2024: 1.71M+, Tamil Nadu 2018: 560K+, Assam 2024: 535K+, and Sikkim 2023: 88K+) demonstrating the urgent national need for HydroTwin-AI's multi-timescale early warning.",
    tag: "National Statistics",
  },
  {
    id: "media-3",
    type: "image",
    mediaUrl: "/images/project/case-study-head.jpeg",
    title: "On-Ground Fire & Rescue Services Field Case Study",
    description: "Field immersion visit at the Tamil Nadu Fire & Rescue Services station (Coimbatore) evaluating operational disaster readiness, rescue vehicle dispatch constraints, and frontline emergency response logistics.",
    tag: "Field Case Study",
  },
  {
    id: "media-4",
    type: "image",
    mediaUrl: "/images/project/case-study-collab.jpeg",
    title: "Field Specialist Consultation & Jurisdiction Mapping",
    description: "Direct technical consultation with station officers and emergency field specialists analyzing regional basin inundation zones, response lead-times, and ground-truth validation for actionable alerts.",
    tag: "Expert Validation",
  },
  {
    id: "media-5",
    type: "image",
    mediaUrl: "/images/project/case-study-communication.jpeg",
    title: "Emergency Dispatch & Communication Workflow",
    description: "Operational protocol evaluation analyzing control room communications, siren dispatch hierarchy, and multi-channel CAP bulletin dissemination during rapid-onset flood emergencies.",
    tag: "Protocol Analysis",
  },
  {
    id: "media-6",
    type: "image",
    mediaUrl: "/images/project/team-member-slideshow.jpeg",
    title: "Team ENDEAVOURS07 Core Development Session",
    description: "Full innovation team collaborative session in the incubation lab building HydroTwin-AI—coupling deep learning precipitation nowcasting with hydrodynamic models and the live stakeholder dashboard.",
    tag: "Team Spotlight",
  },
];

export const spotlightImages: SpotlightImageItem[] = [
  {
    id: "spotlight-1",
    image: "/images/project/project-flow.jpeg",
    title: "System Architecture & Data Flow",
    description: "Comprehensive 9-stage pipeline from meteorological & hydrological data ingestion through U-Net surrogate modeling to early warning dissemination.",
    tag: "Architecture",
  },
  {
    id: "spotlight-2",
    image: "/images/project/flood-impact-bar-graph.jpeg",
    title: "Flood Impact Statistics in India",
    description: "Empirical analysis of citizens affected across major Indian flood catastrophes, validating nationwide implementation.",
    tag: "Statistics",
  },
  {
    id: "spotlight-3",
    image: "/images/project/case-study-head.jpeg",
    title: "Fire & Rescue Services Field Study",
    description: "Field immersion visit at Tamil Nadu Fire & Rescue Services station evaluating emergency rescue fleet readiness and operational constraints.",
    tag: "Field Study",
  },
  {
    id: "spotlight-4",
    image: "/images/project/case-study-collab.jpeg",
    title: "Field Specialist Consultation",
    description: "On-ground consultation with emergency response officers analyzing jurisdictional basin maps and rescue lead-time requirements.",
    tag: "Validation",
  },
  {
    id: "spotlight-5",
    image: "/images/project/case-study-communication.jpeg",
    title: "Emergency Communication Workflow",
    description: "Operational review of control room protocols and alert dissemination pipelines for rapid-onset flood hazards.",
    tag: "Protocol",
  },
  {
    id: "spotlight-6",
    image: "/images/project/team-member-slideshow.jpeg",
    title: "Team ENDEAVOURS07 Development",
    description: "Team collaboration session building the HydroTwin-AI forecasting models and real-time interactive dashboard.",
    tag: "Team",
  },
];

export const teamMembers: TeamMember[] = [
  {
    id: "srirangaprasath",
    name: "Srirangaprasath I",
    role: "Team Leader & Developer",
    email: "srirangaprasath@college.edu",
    github: "https://github.com/rangapprasathsri-web/",
    linkedin: "https://www.linkedin.com/in/srirangapprasath-i-167985383",
    image: "/images/team/srirangaprasath.jpg",
    initials: "SI",
  },
  {
    id: "thiraviyaraj",
    name: "Thiraviyaraj R",
    role: "AI/ML Developer & Drive Management",
    email: "thiraviyarajr2007@gmail.com",
    github: "https://github.com/thiraviyarajr2007-dotcom",
    linkedin: "https://www.linkedin.com/in/thiraviaraj-rm-5b7478303",
    image: "/images/team/thiraviyaraj.jpg",
    initials: "TR",
  },
  {
    id: "vignesh",
    name: "Vignesh Selvan V",
    role: "Database Manager & Researcher",
    email: "vignesh@college.edu",
    github: "https://github.com/vigneshselvanV",
    linkedin: "https://www.linkedin.com/in/vigneshselvan-v/",
    image: "/images/team/vignesh.jpg",
    initials: "VV",
  },
  {
    id: "sudharsan",
    name: "Sudharsan S",
    role: "Data Analytics & Tester",
    email: "sudharsan@college.edu",
    github: "https://github.com/sudharsansudharsan1460",
    linkedin: "https://www.linkedin.com/in/sudharsan-s-287a68379/",
    image: "/images/team/sudharsan.png",
    initials: "SS",
  },
  {
    id: "srinithadharsan",
    name: "Srinitha Dharshan G",
    role: "GitHub Management & R&D - Disaster Management",
    email: "srinithadharsan@college.edu",
    github: "https://github.com/gsrinithadharsan",
    linkedin: "https://www.linkedin.com/in/srinithadharsan-g-01bb73385",
    image: "/images/team/srinithadharsan.png",
    initials: "SG",
  },
  {
    id: "vaishali",
    name: "Vaishali K",
    role: "AI Researcher & Data Collection",
    email: "vaishali@college.edu",
    github: "https://github.com/Vaishali-hacker",
    linkedin: "https://www.linkedin.com/in/vaishali-k-35b461240/",
    image: "/images/team/vaishali.png",
    initials: "VK",
  },
];

export const mentorsList: Mentor[] = [
  {
    id: "gajendran",
    name: "Er. Gajendran Parthasarathi",
    roleType: "Institution Mentor",
    designation: "Senior Academic Mentor",
    institution: "Institution Mentor",
    description: "Strategic guidance on research methodology, predictive model validation, scholarly peer review, and stakeholder impact analysis for disaster management authorities.",
    linkedin: "https://www.linkedin.com/in/er-gajendran-parthasarathi-9689a2109/",
    image: "/images/mentors/gajendran.png",
    initials: "GP",
  },
  {
    id: "muthusamy",
    name: "Prof. Muthusamy K",
    roleType: "Institution Mentor",
    designation: "Faculty Mentor",
    institution: "Institution Mentor",
    description: "Academic advisory on core system architecture, algorithmic optimization, high-throughput geospatial query indexing, and robust full-stack software integration.",
    linkedin: "https://www.linkedin.com/in/muthusamy-k-",
    image: "/images/mentors/muthusamy.png",
    initials: "MK",
  },
  {
    id: "sivaprakash",
    name: "Prof. (Dr.) P. Sivaprakash",
    roleType: "Industrial Mentor",
    designation: "Technical Consultant",
    institution: "Enterprise Infrastructure & Systems Engineering",
    description: "Industrial mentoring on ruggedized edge telemetry hardware, field sensor calibration, LoRa mesh networking for mountainous valleys, and enterprise-grade reliability standards.",
    linkedin: "https://www.linkedin.com/in/dr-p-sivaprakash-learninganddevelopment/",
    image: "/images/mentors/sivaprakash.png",
    initials: "PS",
  },
];
