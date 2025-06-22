import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@/index.css'
import App from '@/App.tsx'
import { DeviceTypeProvider } from '@/context/DeviceTypeContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <DeviceTypeProvider>
      <App />
    </DeviceTypeProvider>
  </StrictMode>,
)
