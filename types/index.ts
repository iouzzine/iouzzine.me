export interface TechBadge {
  name: string;
  color: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: TechBadge[];
  githubUrl?: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  duration: string;
  description: string[];
  skills: string[];
}

export interface SkillGroup {
  name: string;
  skills: string[];
}

export interface PersonalInfo {
  name: string;
  handle: string;
  title: string;
  email: string;
  location: string;
  github: string;
  linkedin: string;
  profileImage: string;
  resume: string;
  calendly?: string;
}

export interface Stat {
  number: string;
  label: string;
}

export interface AboutInfo {
  summary: string;
  featuredSkills: string[];
  whatIBuild: string[];
}

export interface PortfolioData {
  personal: PersonalInfo;
  stats: Stat[];
  about: AboutInfo;
  skills: SkillGroup[];
  projects: Project[];
  experience: ExperienceItem[];
}
