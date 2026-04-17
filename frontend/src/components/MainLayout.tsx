import React from 'react';
import { Navbar } from './Navbar';

interface MainLayoutProps {
  children: React.ReactNode; // Esta es la clave de la composición
}

export const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      {/* El contenido de cada página se "inyecta" aquí */}
      <main className="max-w-6xl mx-auto p-6 animate-in fade-in duration-500">
        {children}
      </main>
      <footer className="py-10 text-center text-gray-400 text-sm">
        © 2024 My Personal Library - Fullstack Project
      </footer>
    </div>
  );
};
