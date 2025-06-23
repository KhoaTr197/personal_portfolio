export interface CornerInfoContent {
  left: string[],
  right: string[],
  className?: string;
}

export interface Project {
  name: string;
  image?: string;
  url: string;
  description?: string;
  isOther?: boolean;
}

export interface Skill {
  name: string;
  url: string;
  group?: string;
  description: string;
}

export interface ContactInfo {
  telphone: string;
  email: string;
  copyright: string;
}

export interface SocialLink {
  key: string;
  icon: string;
  url: string;
}

export interface AboutContent {
  summary: string;
  totalProjects: number;
  yearsExperience: number;
}