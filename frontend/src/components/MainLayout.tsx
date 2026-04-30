import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from './Navbar';

interface MainLayoutProps {
  children: React.ReactNode;
}

export const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    /* bg-bg-light y dark:bg-bg-dark usan tus colores Color 2 y Gris claro */
    <div className="min-h-screen bg-bg-light dark:bg-bg-dark text-text-light dark:text-text-dark transition-colors duration-300">
      <Navbar />
      
      <main className="max-w-6xl mx-auto p-6 pt-28 pb-24">
        {children}
      </main>

      {/* 
          FAB Button:
          Light: bg-primary (Color 1 - Vino) 
          Dark: dark:bg-gold (Color 5 - Dorado) 
      */}
      <Link 
        to="/add" 
        className="fixed bottom-6 right-6 w-10 h-10 bg-primary dark:bg-gold text-white dark:text-bg-dark rounded-full flex items-center justify-center shadow-lg transition-all hover:scale-110 active:scale-95 z-50 group"
        title="Add New Content"
      >
        <svg 
          xmlns="http://w3.org" 
          width="20" 
          height="20" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2.5" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        >
          <line x1="12" y1="5" x2="12" y2="19"></line>
          <line x1="5" y1="12" x2="19" y2="12"></line>
        </svg>
      </Link>

      <footer className="py-10 text-center text-gray-400 dark:text-muted text-sm">
        © 2026 Frame & Page - My Media Universe
      </footer>
    </div>
  );
};

