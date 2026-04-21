import { Routes, Route } from 'react-router-dom'
import { MainLayout } from './components/MainLayout';
import { Home } from './pages/Home'
import { Library } from './pages/Library'     
import { AddContent } from './pages/AddContent' 
import { MediaProvider } from './context/MediaContext';

function App() {
  return (
    <MediaProvider> {/* Envuelve todo con esto */}
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/library" element={<Library />} />
          <Route path="/add" element={<AddContent />} />
        </Routes>
      </MainLayout>
    </MediaProvider>
  );
}
export default App
