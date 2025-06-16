export interface DeviceType {
  type: 'tablet' | 'mobile' | 'desktop';
  platform: 'ios' | 'android' | 'windows' | 'macos' | 'linux' | 'browser';
  screenSize: {
    width: number;
    height: number;
    isRetina: boolean;
  };
}