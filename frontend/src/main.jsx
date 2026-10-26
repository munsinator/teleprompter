import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router'
import './index.css'
import App from './App.jsx'
import Repertoire from './pages/Repertoire.jsx'
import Setlist from './pages/Setlist.jsx'
import Settings from './pages/Settings.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Repertoire />} />
          <Route path="setlist" element={<Setlist />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
