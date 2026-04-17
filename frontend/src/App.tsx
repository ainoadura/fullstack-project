import { Routes, Route } from 'react-router-dom'
import { MainLayout } from './components/MainLayout';
import { Home } from './pages/Home'
import { Library } from './pages/Library'     
import { AddContent } from './pages/AddContent' 

function App() {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/library" element={<Library />} />
        <Route path="/add" element={<AddContent />} />
      </Routes>
    </MainLayout>
  );
}

export default App
