import { ReactNode } from "react";

// App.tsx
export interface CornerInfoContent {
  left: string[],
  right: string[],
  className?: string;
}

// AboutPage.tsx
export interface AboutContent {
  summary: string;
  totalProjects: number;
  yearsExperience: number;
}

// 3DSkillsetPage.tsx
export interface SelectedSkill {
  name: string;
  description: string;
}

export interface Skill {
  name: string;
  url: string;
  icon: {
    component: ReactNode;
    forceFill?: string;
  };
  description: string;
}