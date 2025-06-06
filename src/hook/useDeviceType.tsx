import { useCallback, useEffect, useState } from 'react';
export interface DeviceType {
  type: 'tablet' | 'mobile' | 'desktop';
  platform: 'ios' | 'android' | 'windows' | 'macos' | 'linux' | 'browser';
  screenSize: {
    width: number;
    height: number;
    isRetina: boolean;
  };
}

const getDeviceType = (): DeviceType => {
  const userAgent = navigator.userAgent.toLowerCase();
  let type: DeviceType['type'] = 'desktop';
  let platform: DeviceType['platform'] = 'browser';

  if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(userAgent)) {
    type = 'tablet';
  } else if (/mobile|iphone|ipod|android|blackberry|opera mini|windows phone/i.test(userAgent)) {
    type = 'mobile';
  } else {
    type = 'desktop';
  }

  if (/iphone|ipad|ipod/i.test(userAgent)) {
    platform = 'ios';
  } else if (/android/i.test(userAgent)) {
    platform = 'android';
  } else if (/win/i.test(userAgent)) {
    platform = 'windows';
  } else if (/mac/i.test(userAgent)) {
    platform = 'macos';
  } else if (/linux/i.test(userAgent)) {
    platform = 'linux';
  } else {
    platform = 'browser';
  }

  const width = window.innerWidth || document.documentElement.clientWidth;
  const height = window.innerHeight || document.documentElement.clientHeight;
  const isRetina = !!window.devicePixelRatio && window.devicePixelRatio >= 2;

  return {
    type,
    platform,
    screenSize: {
      width,
      height,
      isRetina,
    }
  };
};

const useDeviceType = () => {
  const [deviceType, setDeviceType] = useState<DeviceType | undefined>(getDeviceType());

  const updateDeviceType = useCallback(() => {
    setDeviceType(getDeviceType());
  }, []);

  useEffect(() => {
    window.addEventListener('resize', updateDeviceType);
    return () => {
      window.removeEventListener('resize', updateDeviceType);
    };
  }, [updateDeviceType]);

  return deviceType;
};

export default useDeviceType;