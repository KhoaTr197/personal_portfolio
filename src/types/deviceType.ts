export type DeviceAgentType = 'tablet' | 'mobile' | 'desktop';

export interface DeviceType {
  type: DeviceAgentType;
  platform: 'ios' | 'android' | 'windows' | 'macos' | 'linux' | 'browser';
  screenSize: {
    width: number;
    height: number;
    isRetina: boolean;
  };
}