import '@fontsource-variable/inter/wght.css'
import '@fontsource-variable/sora/wght.css'
import './styles/global.scss'

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'

const root = document.getElementById('root')
if (!root) throw new Error('Elemento #root não encontrado em index.html')

createRoot(root).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
