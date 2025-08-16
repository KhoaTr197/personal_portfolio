import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@/font.css'
import '@/index.css'
import App from '@/App.tsx'
import { Analytics } from "@vercel/analytics/next"
import { DeviceTypeProvider } from '@/context/DeviceTypeContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <DeviceTypeProvider>
      <App />
      <Analytics />
    </DeviceTypeProvider>
  </StrictMode>,
)
