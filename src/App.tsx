import React, { useState } from 'react';
import { Youtube, Menu, X, ChevronRight } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState('inicio');
  const [menuOpen, setMenuOpen] = useState(false);

  // Paleta de colores renovada: Gris principal, Azul para secciones, Dorado brillante
  const colors = {
    bg: '#1a1c1e', // Gris profundo
    secondaryBg: '#0f172a', // Azul marino para secciones
    accent: '#d4a017', // Dorado
    glow: 'rgba(212, 160, 23, 0.4)', // Brillo dorado
    text: '#f1f5f9',
    textMuted: '#94a3b8',
  };

  const menuItems = [
    { id: 'inicio', label: 'Inicio' },
    { id: 'conoceme', label: 'Conóceme' },
    { id: 'innovacion', label: 'Innovación Académica' },
    { id: 'tribunal', label: 'Tribunal Escolar' },
    { id: 'bachillerato', label: 'Bachillerato' },
    { id: 'contacto', label: 'Contacto' },
  ];

  // Estilos comunes para botones y efectos de brillo
  const glowStyle = "transition-all duration-300 hover:shadow-[0_0_15px_rgba(212,160,23,0.6)] hover:scale-105 active:scale-95";

  return (
    <div className="min-h-screen" style={{ backgroundColor: colors.bg, color: colors.text, fontFamily: "'Inter', sans-serif" }}>
      
      {/* Navegación */}
      <nav className="sticky top-0 z-50 backdrop-blur-md border-b border-gray-700" style={{ backgroundColor: 'rgba(26, 28, 30, 0.9)' }}>
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 flex justify-between items-center">
          <div className="flex flex-col">
            <h1 className="text-2xl md:text-3xl font-serif font-bold tracking-tighter" style={{ color: colors.accent }}>
              LIC. MONTALVO REYES
            </h1>
            <span className="text-xs uppercase tracking-[0.3em] opacity-70">Abogado & Catedrático</span>
          </div>

          <div className="hidden lg:flex space-x-6">
            {menuItems.map(item => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`uppercase text-xs tracking-widest font-bold px-3 py-2 rounded transition-all ${
                  activeTab === item.id 
                  ? 'text-white border-b-2 border-[#d4a017] shadow-[0_4px_10px_-2px_rgba(212,160,23,0.5)]' 
                  : 'text-gray-400 hover:text-[#d4a017]'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <button className="lg:hidden p-2 rounded-full border border-gray-600" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Menú Móvil */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-black/95 flex flex-col items-center justify-center space-y-6 lg:hidden">
          {menuItems.map(item => (
            <button
              key={item.id}
              onClick={() => { setActiveTab(item.id); setMenuOpen(false); }}
              className="text-xl uppercase tracking-widest text-white hover:text-[#d4a017]"
            >
              {item.label}
            </button>
          ))}
        </div>
      )}

      <main className="max-w-6xl mx-auto px-4 py-10 md:py-16">
        
        {/* SECCIÓN: INICIO */}
        {activeTab === 'inicio' && (
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="w-full lg:w-1/2">
              <div className="relative aspect-[9/16] max-w-[320px] mx-auto rounded-3xl overflow-hidden shadow-2xl border-2 border-[#d4a017]/30">
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src="https://www.youtube.com/embed/MH13zjcQKC4"
                  title="Presentación"
                  allowFullScreen
                ></iframe>
              </div>
            </div>

            <div className="w-full lg:w-1/2 text-center lg:text-left space-y-6">
              <h2 className="text-4xl md:text-6xl font-serif font-bold leading-tight" style={{ color: colors.accent }}>
                EDUARDO MONTALVO REYES
              </h2>
              <p className="text-lg md:text-xl font-serif italic text-gray-300 leading-relaxed border-l-4 border-[#d4a017] pl-6 py-2">
                "Convencido de usar la tecnología y la Inteligencia Artificial de manera consciente y ética, enseño su uso como un apoyo extra para perfeccionar el trabajo humano, jamás como un reemplazo de nuestra esencia y sensibilidad."
              </p>
              <div className="pt-4">
                <button 
                  onClick={() => setActiveTab('filosofia')}
                  className={`px-10 py-4 bg-[#d4a017] text-black font-black uppercase tracking-widest rounded-full text-sm shadow-lg ${glowStyle}`}
                >
                  Mi Filosofía
                </button>
              </div>
            </div>
          </div>
        )}

        {/* SECCIÓN: FILOSOFÍA (Independiente y Especial) */}
        {activeTab === 'filosofia' && (
          <div className="max-w-4xl mx-auto animate-fade-in">
            <div className="bg-[#0f172a] p-8 md:p-12 rounded-[2rem] border border-[#d4a017]/20 shadow-2xl">
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-center mb-12" style={{ color: colors.accent }}>
                Mi Filosofía
              </h2>
              
              <div className="flex flex-col md:flex-row gap-10 items-center mb-10">
                <div className="w-40 md:w-56 flex-shrink-0">
                  <div className="relative aspect-[9/16] rounded-2xl overflow-hidden border-2 border-[#d4a017] shadow-[0_0_20px_rgba(212,160,23,0.3)]">
                    <iframe
                      className="absolute inset-0 w-full h-full"
                      src="https://www.youtube.com/embed/8vK125i-ctk"
                      title="Short Filosofía"
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
                <div className="flex-1">
                  <p className="text-xl md:text-3xl font-serif italic font-medium leading-snug text-center md:text-left" style={{ color: colors.accent }}>
                    “La enseñanza y la tecnología deben ir de la mano, complementándose; mas nunca, evitarse.”
                  </p>
                </div>
              </div>

              <div className="space-y-6 text-gray-200 text-base md:text-lg leading-relaxed text-justify">
                <p>
                  Soy Licenciado en Derecho por la UNAM y maestrante en Derecho Laboral. Ejerzo activamente como abogado litigante independiente, una dualidad que me permite trasladar la realidad de los juzgados directamente al aula.
                </p>
                <p className="italic font-serif text-gray-400 bg-white/5 p-6 rounded-xl border-l-2 border-[#d4a017]">
                  "No concibo la docencia como un acto de mera transmisión de datos, sino como un ejercicio de responsabilidad humana y jurídica. Mi metodología es el pragmatismo absoluto: diseño estructuras que obligan al alumno a enfrentarse a la práctica real, porque el error en el aula es una lección, pero en la vida tiene un peso que marca."
                </p>
                <div className="text-center pt-8">
                  <p className="font-bold text-[#d4a017]">Atentamente,</p>
                  <p className="text-xl font-serif">Lic. Eduardo Montalvo Reyes</p>
                  <p className="text-sm opacity-60">Abogado Litigante y Catedrático</p>
                </div>
              </div>
            </div>
          </div>
        )}

      </main>

      {/* Pie de Página */}
      <footer className="mt-20 border-t border-gray-800 py-12 px-6 text-center">
        <p className="text-sm md:text-base tracking-wide" style={{ color: colors.textMuted }}>
          Lic. en Derecho, Maestrante en Derecho y Profesor | Todos los derechos reservados 2026.
        </p>
      </footer>

      {/* Estilos Globales Extra */}
      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700;900&family=Playfair+Display:ital,wght@0,700;1,400&display=swap');
        .font-serif { font-family: 'Playfair Display', serif; }
        .animate-fade-in { animation: fadeIn 0.8s ease-out; }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
      `}} />
    </div>
  );
}
