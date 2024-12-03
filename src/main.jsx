import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import GoulaschRezept from './GoulaschRezept.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GoulaschRezept />
  </StrictMode>,
)
