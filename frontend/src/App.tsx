import { Routes, Route } from 'react-router-dom'
import { MainLayout } from './components/MainLayout';
import { MediaProvider } from './context/MediaContext';
import { lazy, Suspense } from 'react';

const Home = lazy(() => import('./pages/Home').then(module => ({ default: module.Home })));
const Library = lazy(() => import('./pages/Library').then(module => ({ default: module.Library })));
const AddContent = lazy(() => import('./pages/AddContent').then(module => ({ default: module.AddContent })));
const NotFound = lazy(() => import('./pages/NotFound').then(module => ({ default: module.NotFound })));

function App() {
  return (
    <MediaProvider>
      <MainLayout>
        <Suspense fallback={
          <div className="flex items-center justify-center min-h-[60vh] animate-pulse">
            <div className="text-primary dark:text-gold font-bold tracking-widest uppercase">
              Loading...
            </div>
          </div>
        }>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/library" element={<Library />} />
            <Route path="/add" element={<AddContent />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </MainLayout>
    </MediaProvider>
  );
}

export default App;
