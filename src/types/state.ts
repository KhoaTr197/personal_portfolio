import { ReactNode } from "react";
import { Skill } from "./data";

// 3DSkillsetPage.tsx
export interface SelectedSkill {
  name: string;
  description: string;
}

export interface SkillState extends Skill {
  icon: {
    component: ReactNode;
    forceFill?: string;
  };
}