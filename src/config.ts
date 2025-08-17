import { DeviceAgentType } from "./types/deviceType";

export type ResponsiveAppConfig = {
  [key in DeviceAgentType]: {
    marquee: MarqueeConfig;
    skillset: SkillsetConfig;
  };
};

export interface MarqueeConfig {
  duration: number;
}

export interface SkillsetConfig {
  fov: number;
  near: number;
  far: number;
}

const appConfig: ResponsiveAppConfig = {
  "mobile": {
    marquee: { duration: 15 },
    skillset: {
      fov: 80,
      near: 0.1,
      far: 1000,
    }
  },
  "tablet": {
    marquee: { duration: 30 },
    skillset: {
      fov: 80,
      near: 0.1,
      far: 1000,
    }
  },
  "desktop": {
    marquee: { duration: 30 },
    skillset: {
      fov: 70,
      near: 0.1,
      far: 1000,
    }
  },
};

export default appConfig;