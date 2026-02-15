import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

// Importación de Secciones (Arquitectura Final)
import Inicio from './sections/Inicio';
import Filosofia from './sections/Filosofia';
import Conoceme from './sections/Conoceme';
import Bachillerato from './sections/Bachillerato';
import Tribunal from './sections/Tribunal';
import Abogacia from './sections/Abogacia';
import Contacto from './sections/Contacto';

export default function App() {
  const [activeTab, setActiveTab] = useState('inicio');
  const [subTab, setSubTab] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const colors = {
    bg: '#374151',
    accent: '#d4a017',
    text: '#f9fafb',
  };

  const menuItems = [
    { id: 'inicio', label: 'INICIO' },
    { id: 'conoceme', label: 'CONÓCEME' },
    { id: 'innovacion', label: 'INNOVACIÓN ACADÉMICA' },
    { id: 'tribunal', label: 'VISIÓN PRÁCTICA' },
    { id: 'bachillerato', label: 'BACHILLERATO' },
    { id: 'abogacia', label: 'ABOGACÍA' },
    { id: 'contacto', label: 'CONTACTO' },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'inicio': return <Inicio setActiveTab={setActiveTab} />;
      case 'filosofia': return <Filosofia />;
      case 'conoceme': return <Conoceme />;
      case 'bachillerato': return <Bachillerato subTab={subTab} setSubTab={setSubTab} />;
      case 'innovacion': return <Innovacion />;
      case 'tribunal': return <Tribunal />;
      case 'abogacia': return <Abogacia />;
      case 'contacto': return <Contacto />;
      default: return <Inicio setActiveTab={setActiveTab} />;
    }
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: colors.bg, color: colors.text, fontFamily: "'Inter', sans-serif" }}>
      <nav className="sticky top-0 z-50 backdrop-blur-md border-b border-gray-600" style={{ backgroundColor: 'rgba(55, 65, 81, 0.9)' }}>
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex flex-col">
            <h1 className="text-xl md:text-3xl font-serif font-bold tracking-tight uppercase" style={{ color: colors.accent }}>
              LIC. MONTALVO REYES
            </h1>
            <span className="text-[10px] md:text-xs uppercase tracking-[0.4em] opacity-80">Abogado & Catedrático</span>
          </div>
          <div className="hidden lg:flex space-x-4">
            {menuItems.map(item => (
              <button 
                key={item.id} 
                onClick={() => { setActiveTab(item.id); setSubTab(null); setMenuOpen(false); }}
                className={`uppercase text-[11px] tracking-widest font-bold px-3 py-2 transition-all duration-300 ${activeTab === item.id ? 'text-white border-b-2 border-[#d4a017]' : 'text-gray-300 hover:text-[#d4a017]'}`}
              >
                {item.label}
              </button>
            ))}
          </div>
          <button className="lg:hidden text-[#d4a017]" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      <main className="max-w-5xl mx-auto px-6 py-10 md:py-16">
        <div className="animate-fade-in">
          {renderContent()}
        </div>
      </main>

      <footer className="mt-20 border-t border-gray-600 py-12 px-6 text-center">
        <p className="text-[10px] tracking-[0.3em] uppercase opacity-60">Lic. en Derecho, Maestrante en Derecho y Profesor | 2026</p>
      </footer>

      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;700&family=Playfair+Display:ital,wght@0,700;1,400&display=swap');
        .font-serif { font-family: 'Playfair Display', serif; }
        .animate-fade-in { animation: fadeIn 0.6s ease-out forwards; }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
      `}} />
    </div>
  );
}

