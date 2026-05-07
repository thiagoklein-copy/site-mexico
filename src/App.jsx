import { Navigate, Route, Routes } from 'react-router-dom'
import { BasicPage } from './pages/BasicPage'
import { HomePage } from './pages/HomePage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/inicio" replace />} />
      <Route path="/inicio" element={<HomePage />} />
      <Route path="/oficina-privada" element={<BasicPage page="oficina-privada" />} />
      <Route path="/oficina-virtual" element={<BasicPage page="oficina-virtual" />} />
      <Route path="/coworking" element={<BasicPage page="coworking" />} />
      <Route path="/salas-de-juntas" element={<BasicPage page="salas-de-juntas" />} />
      <Route path="/contacto" element={<BasicPage page="contacto" />} />
    </Routes>
  )
}

export default App
