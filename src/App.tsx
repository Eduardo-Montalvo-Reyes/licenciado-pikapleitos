import React, { useState } from 'react';
import { Youtube, Menu, X } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState('inicio');
  const [menuOpen, setMenuOpen] = useState(false);

  // Paleta: Gris profundo (base), Azul marino (secciones), Dorado (acentos con brillo)
  const colors = {
    bg: '#1a1c1e', 
    secondaryBg: '#0f172a', 
    accent: '#d4a017', 
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

  const glowButtonStyle = "transition-all duration-300 hover:shadow-[0_0_20px_rgba(212,160,23,0.6)] hover:scale-105 active:scale-95";

  return (
    <div className="min-h-screen" style={{ backgroundColor: colors.bg, color: colors.text, fontFamily: "'Inter', sans-serif" }}>
      
      {/* Navegación con Nombre en Mayúsculas */}
      <nav className="sticky top-0 z-50 backdrop-blur-md border-b border-gray-700" style={{ backgroundColor: 'rgba(26, 28, 30, 0.9)' }}>
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex flex-col">
            <h1 className="text-xl md:text-3xl font-serif font-bold tracking-tight" style={{ color: colors.accent, textShadow: '0 0 10px rgba(212, 160, 23, 0.3)' }}>
              LIC. MONTALVO REYES
            </h1>
            <span className="text-[10px] md:text-xs uppercase tracking-[0.4em] opacity-70">Abogado & Catedrático</span>
          </div>

          <div className="hidden lg:flex space-x-4">
            {menuItems.map(item => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`uppercase text-[11px] tracking-widest font-bold px-3 py-2 transition-all duration-300 rounded ${
                  activeTab === item.id 
                  ? 'text-white shadow-[0_0_15px_rgba(212,160,23,0.4)] border-b-2 border-[#d4a017]' 
                  : 'text-gray-400 hover:text-[#d4a017]'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <button className="lg:hidden p-2 text-[#d4a017]" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Menú Móvil */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-black/95 flex flex-col items-center justify-center space-y-8 lg:hidden animate-fade-in">
          {menuItems.map(item => (
            <button
              key={item.id}
              onClick={() => { setActiveTab(item.id); setMenuOpen(false); }}
              className="text-2xl uppercase tracking-[0.2em] text-white hover:text-[#d4a017] transition-colors"
            >
              {item.label}
            </button>
          ))}
        </div>
      )}

      <main className="max-w-5xl mx-auto px-6 py-10 md:py-20">
        
        {/* SECCIÓN: INICIO */}
        {activeTab === 'inicio' && (
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="w-full lg:w-1/2 flex justify-center">
              <div className="relative aspect-[9/16] w-full max-w-[280px] md:max-w-[320px] rounded-[2rem] overflow-hidden shadow-[0_0_30px_rgba(0,0,0,0.5)] border-2 border-[#d4a017]/40">
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src="https://www.youtube.com/embed/MH13zjcQKC4"
                  title="Presentación Eduardo Montalvo Reyes"
                  allowFullScreen
                ></iframe>
              </div>
            </div>

            <div className="w-full lg:w-1/2 text-center lg:text-left space-y-8">
              <h2 className="text-4xl md:text-7xl font-serif font-bold leading-none tracking-tight" style={{ color: colors.accent }}>
                EDUARDO <br/>MONTALVO REYES
              </h2>
              <p className="text-lg md:text-2xl font-serif italic text-gray-300 leading-relaxed max-w-xl mx-auto lg:mx-0">
                "Convencido de usar la tecnología y la Inteligencia Artificial de manera consciente y ética, enseño su uso como un apoyo extra para perfeccionar el trabajo humano..."
              </p>
              <div className="pt-6">
                <button 
                  onClick={() => setActiveTab('filosofia')}
                  className={`px-12 py-5 bg-[#d4a017] text-black font-black uppercase tracking-[0.2em] rounded-xl text-sm shadow-xl ${glowButtonStyle}`}
                >
                  Mi Filosofía
                </button>
              </div>
            </div>
          </div>
        )}

        {/* SECCIÓN: FILOSOFÍA (Contenido integrado de la Carta de Presentación) */}
        {activeTab === 'filosofia' && (
          <div className="animate-fade-in space-y-12">
            <div className="bg-[#0f172a] p-8 md:p-16 rounded-[3rem] border border-[#d4a017]/10 shadow-2xl relative overflow-hidden">
              
              {/* Video y Frase Destacada */}
              <div className="flex flex-col md:flex-row gap-12 items-center mb-16 pb-12 border-b border-white/5">
                <div className="w-44 md:w-60 flex-shrink-0">
                  <div className="relative aspect-[9/16] rounded-2xl overflow-hidden border-2 border-[#d4a017] shadow-[0_0_25px_rgba(212,160,23,0.2)]">
                    <iframe
                      className="absolute inset-0 w-full h-full"
                      src="https://www.youtube.com/embed/8vK125i-ctk"
                      title="Filosofía Educativa"
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl md:text-4xl font-serif italic font-medium leading-tight text-center md:text-left" style={{ color: colors.accent }}>
                    “La enseñanza y la tecnología deben ir de la mano, complementándose; mas nunca, evitarse.”
                  </h3>
                </div>
              </div>

              {/* Cuerpo del Texto Profesional */}
              <div className="space-y-8 text-gray-200 text-base md:text-xl leading-relaxed text-justify font-light">
                <p>
                  Soy Licenciado en Derecho por la UNAM y maestrante en Derecho Laboral, ejerciendo activamente como abogado litigante independiente[cite: 10]. Esta dualidad me permite trasladar la realidad de los juzgados y la praxis jurídica directamente al aula, fomentando en los estudiantes un pensamiento crítico, ético y, sobre todo, práctico[cite: 11].
                </p>
                <p>
                  A lo largo de mi trayectoria, me he especializado en el diseño de planes de estudio personalizados mediante herramientas de mi autoría: los <strong>"Guiones de Cátedra"</strong> y <strong>"Temarios Temáticos"</strong>[cite: 12]. Estos instrumentos garantizan un control riguroso de los contenidos, una administración del tiempo optimizada y una dinámica grupal de excelencia[cite: 13]. Asimismo, soy un convencido de que la Inteligencia Artificial debe integrarse a la educación como un auxiliar estratégico bajo principios de ética profesional[cite: 14].
                </p>
                <p>
                  Mi objetivo es aportar la "nueva inercia" que la docencia exige: rigor técnico-teórico con un enfoque humano[cite: 15]. Mi metodología es pragmática; implemento proyectos de unidad donde el alumno someta la teoría a la prueba de la realidad, culminando en un Proyecto Integrador Final que asegura la comprensión total del programa aplicado al entorno diario[cite: 16].
                </p>

                <div className="py-8 my-10 border-y border-[#d4a017]/20 relative">
                  <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#0f172a] px-4 text-[#d4a017] font-serif italic text-3xl">“</span>
                  <p className="font-serif italic text-xl md:text-2xl text-gray-300 text-center leading-relaxed px-4">
                    "No concibo la docencia como un acto de mera transmisión de datos, sino como un ejercicio de responsabilidad humana y jurídica[cite: 17]. Mi metodología es el pragmatismo absoluto; diseño estructuras que obligan al alumno a enfrentarse a la práctica real, porque el error en el aula es una lección, pero el error en la vida tiene un peso que marca[cite: 17]. Enseño desde mis aciertos y desde las cicatrices de mis errores... la bondad y la exigencia técnica son la única vía para formar expertos en la ley, pero sobre todo, íntegros en su humanidad[cite: 18, 19]."
                  </p>
                </div>

                <p className="italic">
                  Agradezco de antemano el tiempo dedicado a mi propuesta y quedo a su disposición para una entrevista[cite: 20].
                </p>

                {/* Firma y Especialidades */}
                <div className="mt-16 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-start gap-8">
                  <div className="space-y-1">
                    <p className="font-bold uppercase tracking-widest text-xs" style={{ color: colors.accent }}>Atentamente,</p>
                    <p className="text-2xl font-serif font-bold">Lic. Eduardo Montalvo Reyes</p>
                    <p className="text-sm text-gray-400">Abogado Litigante y Catedrático [cite: 22, 23]</p>
                  </div>
                  
                  <div className="max-w-xs space-y-3">
                    <p className="font-bold uppercase tracking-widest text-xs text-right md:text-left" style={{ color: colors.accent }}>Especialización de Cátedra:</p>
                    <p className="text-xs md:text-sm text-gray-400 leading-relaxed uppercase tracking-tighter">
                      Derecho Constitucional y Amparo • Laboral y Seguridad Social • Mercantil • Civil • Epistemología • Ética[cite: 24].
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Pie de Página */}
      <footer className="mt-20 border-t border-gray-800 py-12 px-6 text-center">
        <p className="text-[10px] md:text-xs tracking-[0.3em] uppercase" style={{ color: colors.textMuted }}>
          Lic. en Derecho, Maestrante en Derecho y Profesor | Todos los derechos reservados 2026.
        </p>
      </footer>

      {/* Estilos Globales */}
      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;700;900&family=Playfair+Display:ital,wght@0,700;0,900;1,400&display=swap');
        .font-serif { font-family: 'Playfair Display', serif; }
        .animate-fade-in { animation: fadeIn 1s ease-out forwards; }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
      `}} />
    </div>
  );
}
