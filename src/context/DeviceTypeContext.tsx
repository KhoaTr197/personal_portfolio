import { createContext, useContext } from 'react';
import useDeviceType from '../hook/useDeviceType';
import { DeviceContextType } from '../@types/context';


export const DeviceTypeContext = createContext<DeviceContextType | undefined>(undefined);

export const DeviceTypeProvider = ({ children }: { children: React.ReactNode }) => {
  const deviceType = useDeviceType();

  return (
    <DeviceTypeContext.Provider value={deviceType}>
      {children}
    </DeviceTypeContext.Provider>
  )
}

export const useDeviceTypeContext = () => {
  const context = useContext(DeviceTypeContext);
  if (!context) {
    throw new Error('useDeviceTypeContext must be used within a DeviceTypeProvider');
  }
  return context;
};