export interface PersonalInfo {
  fullName: string;
  title: string;
  email: string;
  location: string;
  website: string;
  github: string;
  linkedin: string;
  summary: string;
}

export interface EducationItem {
  id: string;
  degree: string;
  school: string;
  location: string;
  date: string;
  gpa?: string;
  dissertation?: string;
  advisor?: string;
}

export interface WorkExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string[];
}

export interface TeachingExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string[];
}

export interface SkillCategory {
  id: string;
  categoryName: string;
  skills: string[];
}

export interface ProjectItem {
  id: string;
  name: string;
  description: string;
  technologies: string[];
  url?: string;
}

export interface LanguageItem {
  id: string;
  name: string;
  proficiency: string;
}

export interface PublicationItem {
  id: string;
  authorsAndTitle: string;
  venueAndDetails: string;
  url?: string;
}

export interface CertificationItem {
  id: string;
  name: string;
  issuer: string;
  year: string;
}

export interface CVData {
  personal: PersonalInfo;
  education: EducationItem[];
  workExperience: WorkExperienceItem[];
  teachingExperience: TeachingExperienceItem[];
  skills: SkillCategory[];
  projects: ProjectItem[];
  languages: LanguageItem[];
  publications: PublicationItem[];
  scholarUrl: string;
  certifications: CertificationItem[];
}
