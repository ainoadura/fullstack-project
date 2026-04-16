import { Routes, Route, Link } from 'react-router-dom'

function App() {
  return (
   <div className="min-h-screen bg-gray-100">
      {/* Navbar sencillo de prueba */}
      <nav className="bg-white p-4 shadow-md flex gap-4 justify-center">
        <Link to="/" className="text-blue-500 hover:underline">Muro</Link>
        <Link to="/biblioteca" className="text-blue-500 hover:underline">Biblioteca</Link>
        <Link to="/add" className="text-blue-500 hover:underline">Añadir</Link>
      </nav>

      {/* Definición de qué se ve en cada ruta */}
      <Routes>
        <Route path="/" element={<div className="p-10 text-center text-2xl">📱 Aquí irá el Muro Social</div>} />
        <Route path="/biblioteca" element={<div className="p-10 text-center text-2xl">📚 Aquí irá tu Biblioteca</div>} />
        <Route path="/add" element={<div className="p-10 text-center text-2xl">➕ Formulario para añadir contenido</div>} />
      </Routes>
    </div>
  )
}

export default App
