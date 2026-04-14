import { Navigate, Route, Routes } from 'react-router-dom'
import { BasicPage } from './pages/BasicPage'
import { HomePage } from './pages/HomePage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/inicio" replace />} />
      <Route path="/inicio" element={<HomePage />} />
      <Route
        path="/somos"
        element={<BasicPage title="Somos" description="Muy pronto publicaremos esta sección." />}
      />
      <Route
        path="/espacios"
        element={<BasicPage title="Espacios" description="Muy pronto publicaremos esta sección." />}
      />
      <Route
        path="/servicios"
        element={<BasicPage title="Servicios" description="Muy pronto publicaremos esta sección." />}
      />
      <Route
        path="/contacto"
        element={<BasicPage title="Contacto" description="Muy pronto publicaremos esta sección." />}
      />
    </Routes>
  )
}

export default App
