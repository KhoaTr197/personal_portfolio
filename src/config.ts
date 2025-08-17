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
}

const appConfig: ResponsiveAppConfig = {
  "mobile": {
    marquee: { duration: 15 },
    skillset: {
      fov: 80,
    }
  },
  "tablet": {
    marquee: { duration: 30 },
    skillset: {
      fov: 80,
    }
  },
  "desktop": {
    marquee: { duration: 30 },
    skillset: {
      fov: 70,
    }
  },
};

export default appConfig;