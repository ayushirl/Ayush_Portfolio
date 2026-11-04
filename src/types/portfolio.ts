export type SkillLevel = 'Expert' | 'Advanced' | 'Proficient' | 'Intermediate';

export interface SkillItem {
  name: string;
  level: SkillLevel;
  icon?: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  skills: SkillItem[];
}

export type ProjectCategory = 'all' | 'fullstack' | 'frontend' | 'opensource' | 'systems';

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  category: ProjectCategory;
  tags: string[];
  githubUrl: string;
  demoUrl?: string;
  featured: boolean;
  architectureNotes?: string[];
  keyFeatures?: string[];
}

export interface ExperienceItem {
  id: string;
  period: string;
  role: string;
  organization: string;
  type: string;
  points: string[];
  techStack: string[];
}

export interface EducationItem {
  degree: string;
  field: string;
  institution: string;
  period: string;
  details?: string;
}

export interface ContactFormValues {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface ContactFormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}
