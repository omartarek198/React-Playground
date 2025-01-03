import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import H1 from './Header.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <H1 />
  </StrictMode>,
)
