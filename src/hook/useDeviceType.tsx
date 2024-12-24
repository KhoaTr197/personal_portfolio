import { useEffect, useState } from 'react';

const useDeviceType = () => {
  const [deviceType, setDeviceType] = useState('');

  useEffect(() => {
    const updateDeviceType = () => {
      const userAgent = navigator.userAgent;
    
      if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(userAgent)) {
        setDeviceType('tablet');
      } else if (/mobile/i.test(userAgent)) {
        setDeviceType('phone');
      } else {
        setDeviceType('desktop');
      }
    };

    updateDeviceType();

    window.addEventListener('resize', updateDeviceType);

    return () => {
      window.removeEventListener('resize', updateDeviceType);
    };
  }, []);

  return deviceType;
};

export default useDeviceType;