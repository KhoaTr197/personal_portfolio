import { ReactNode } from "react";

export interface CornerInfoContent {
  left: string[],
  right: string[],
  className?: string;
}

export interface CornerInfo {
  [key: string]: CornerInfoContent;
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
  proficiency: number;
  description: string;
  icon: {
    component: ReactNode;
    forceFill?: string;
  };
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