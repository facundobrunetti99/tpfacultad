import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ConteinterTask from './models/ConteinerTask/ConteinerTask'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ConteinterTask />
  </StrictMode>,
)
