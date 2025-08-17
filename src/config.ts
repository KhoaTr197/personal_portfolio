import { DeviceAgentType } from "./types/deviceType";

export type ResponsiveAppConfig = {
  [key in DeviceAgentType]: {
    marquee: MarqueeConfig;
  };
};

export interface MarqueeConfig {
  duration: number;
}

const appConfig: ResponsiveAppConfig = {
  "mobile": {
    marquee: { duration: 15 },
  },
  "tablet": {
    marquee: { duration: 30 },
  },
  "desktop": {
    marquee: { duration: 30 },
  },
};

export default appConfig;