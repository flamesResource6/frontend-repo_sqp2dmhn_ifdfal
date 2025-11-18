import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'

// Pages
import Home from './pages/Home'
import Servicos from './pages/Servicos'
import Portfolio from './pages/Portfolio'
import EstudosDeCaso from './pages/EstudosDeCaso'
import Sobre from './pages/Sobre'
import Contacto from './pages/Contacto'
import Test from './Test'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/servicos" element={<Servicos />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/estudos-de-caso" element={<EstudosDeCaso />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/test" element={<Test />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
