import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

// Importación de Secciones
import Inicio from './sections/Inicio';
import Filosofia from './sections/Filosofia';
import Conoceme from './sections/Conoceme';
import Innovacion from './sections/Innovacion';
import Tribunal from './sections/Tribunal';
import Bachillerato from './sections/Bachillerato';
import ApoyoJuridico from './sections/ApoyoJuridico';
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

  // Orden exacto solicitado. "Filosofía" no existe aquí para no aparecer en el menú.
  const menuItems = [
    { id: 'inicio', label: 'INICIO' },
    { id: 'conoceme', label: 'CONÓCEME' },
    { id: 'innovacion', label: 'INNOVACIÓN' },
    { id: 'tribunal', label: 'VISIÓN PRÁCTICA' },
    { id: 'bachillerato', label: 'BACHILLERATO' },
    { id: 'apoyo-juridico', label: 'APOYO JURÍDICO' },
    { id: 'contacto', label: 'CONTACTO' },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'inicio': return <Inicio setActiveTab={setActiveTab} />;
      case 'filosofia': return <Filosofia />; // La sección se carga sola, limpiando el inicio
      case 'conoceme': return <Conoceme />;
      case 'innovacion': return <Innovacion subTab={subTab} setSubTab={setSubTab} />;
      case 'tribunal': return <Tribunal subTab={subTab} setSubTab={setSubTab} />;
      case 'bachillerato': return <Bachillerato subTab={subTab} setSubTab={setSubTab} />;
      case 'apoyo-juridico': return <ApoyoJuridico />;
      case 'contacto': return <Contacto />;
      default: return <Inicio setActiveTab={setActiveTab} />;
    }
  };

  return (
    <div className="min-h-screen font-sans" style={{ backgroundColor: colors.bg, color: colors.text }}>
      <nav className="sticky top-0 z-50 backdrop-blur-md border-b border-gray-600" style={{ backgroundColor: 'rgba(55, 65, 81, 0.9)' }}>
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex flex-col">
            <h1 className="text-xl md:text-3xl font-serif font-bold tracking-tight uppercase leading-none" style={{ color: colors.accent }}>
              LIC. MONTALVO REYES
            </h1>
            <span className="text-[10px] md:text-xs uppercase tracking-[0.4em] text-white opacity-90 mt-1">
              Abogado & Catedrático
            </span>
          </div>

          <div className="hidden lg:flex space-x-1">
            {menuItems.map(item => (
              <button
                key={item.id}
                onClick={() => { setActiveTab(item.id); setSubTab(null); setMenuOpen(false); }}
                className={`uppercase text-[11px] tracking-widest font-bold px-4 py-2 rounded-lg transition-all duration-300 ${activeTab === item.id ? 'bg-[#d4a017] text-black shadow-lg' : 'text-gray-300 hover:text-[#d4a017]'}`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <button className="lg:hidden text-[#d4a017]" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Menú Móvil (Hamburguesa) */}
        {menuOpen && (
          <div className="lg:hidden bg-[#374151] border-b border-gray-600 p-6 flex flex-col space-y-4 shadow-2xl">
            {menuItems.map(item => (
              <button
                key={item.id}
                onClick={() => { setActiveTab(item.id); setSubTab(null); setMenuOpen(false); }}
                className={`text-left text-sm font-bold tracking-widest uppercase ${activeTab === item.id ? 'text-[#d4a017]' : 'text-white'}`}
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </nav>

      <main className="max-w-7xl mx-auto px-6 py-10 md:py-16">
        <div className="animate-fade-in">
          {renderContent()}
        </div>
      </main>

      <footer className="mt-20 border-t border-gray-600 py-12 px-6 text-center">
        <p className="text-[10px] tracking-[0.3em] uppercase opacity-60">
          Lic. en Derecho, Maestrante en Derecho y Profesor | Todos los derechos reservados ©2026
        </p>
      </footer>
    </div>
  );
}
