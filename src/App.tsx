import React, { useState } from 'react';
import { Menu, X, FileText, ExternalLink } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState('inicio');
  const [menuOpen, setMenuOpen] = useState(false);

  const colors = {
    bg: '#374151', 
    secondaryBg: '#1e293b', 
    accent: '#d4a017', 
    text: '#f9fafb',
    textMuted: '#d1d5db',
  };

  const menuItems = [
    { id: 'inicio', label: 'Inicio' },
    { id: 'conoceme', label: 'Conóceme' },
    { id: 'filosofia', label: 'Mi Filosofía' },
    { id: 'innovacion', label: 'Innovación Académica' },
    { id: 'tribunal', label: 'Tribunal Escolar' },
    { id: 'bachillerato', label: 'Bachillerato' },
    { id: 'contacto', label: 'Contacto' },
  ];

  const cvLink = "https://drive.google.com/file/d/1rSL8lA0cLCl-4kSgOnBS4zGMoVAJwtyS/view?usp=sharing";

  return (
    <div className="min-h-screen" style={{ backgroundColor: colors.bg, color: colors.text, fontFamily: "'Inter', sans-serif" }}>
      
      {/* Navegación */}
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
                onClick={() => setActiveTab(item.id)}
                className={`uppercase text-[11px] tracking-widest font-bold px-3 py-2 transition-all duration-300 ${
                  activeTab === item.id 
                  ? 'text-white border-b-2 border-[#d4a017] shadow-[0_4px_10px_-2px_rgba(212,160,23,0.5)]' 
                  : 'text-gray-300 hover:text-[#d4a017]'
                }`}
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

      {/* Menú Móvil */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-black/95 flex flex-col items-center justify-center space-y-8 lg:hidden">
          {menuItems.map(item => (
            <button
              key={item.id}
              onClick={() => { setActiveTab(item.id); setMenuOpen(false); }}
              className="text-2xl uppercase tracking-[0.2em] text-white hover:text-[#d4a017]"
            >
              {item.label}
            </button>
          ))}
        </div>
      )}

      <main className="max-w-5xl mx-auto px-6 py-10 md:py-16">
        
        {/* SECCIÓN: INICIO */}
        {activeTab === 'inicio' && (
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="w-full lg:w-1/2 flex justify-center">
              <div className="relative aspect-[9/16] w-full max-w-[280px] md:max-w-[320px] rounded-[2rem] overflow-hidden shadow-2xl border-2 border-[#d4a017]/40">
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src="https://www.youtube.com/embed/MH13zjcQKC4"
                  title="Presentación Eduardo Montalvo Reyes"
                  allowFullScreen
                ></iframe>
              </div>
            </div>

            <div className="w-full lg:w-1/2 text-center lg:text-left space-y-8">
              <h2 className="text-4xl md:text-7xl font-serif font-bold leading-none" style={{ color: colors.accent }}>
                EDUARDO <br/>MONTALVO REYES
              </h2>
              <p className="text-lg md:text-2xl font-serif italic text-gray-200 leading-relaxed max-w-xl mx-auto lg:mx-0">
                "Convencido de usar la tecnología y la Inteligencia Artificial de manera consciente y ética, enseño su uso como un apoyo extra para perfeccionar el trabajo humano, jamás como un reemplazo de nuestra esencia y sensibilidad."
              </p>
              <div className="pt-6">
                <button 
                  onClick={() => setActiveTab('filosofia')}
                  className="px-12 py-5 bg-[#d4a017] text-black font-black uppercase tracking-[0.2em] rounded-xl text-sm transition-all duration-300 hover:shadow-[0_0_20px_rgba(212,160,23,0.6)] hover:scale-105"
                >
                  Mi Filosofía
                </button>
              </div>
            </div>
          </div>
        )}

        {/* SECCIÓN: FILOSOFÍA (Texto Original Corregido) */}
        {activeTab === 'filosofia' && (
          <div className="animate-fade-in space-y-12">
            <div className="bg-[#1e293b] p-8 md:p-16 rounded-[3rem] border border-[#d4a017]/10 shadow-2xl relative">
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-center mb-12" style={{ color: colors.accent }}>
                Mi Filosofía
              </h2>
              <div className="flex flex-col md:flex-row gap-10 items-center mb-16 pb-12 border-b border-white/5">
                <div className="w-40 md:w-56 flex-shrink-0">
                  <div className="relative aspect-[9/16] rounded-2xl overflow-hidden border-2 border-[#d4a017]">
                    <iframe className="absolute inset-0 w-full h-full" src="https://www.youtube.com/embed/8vK125i-ctk" allowFullScreen></iframe>
                  </div>
                </div>
                <div className="flex-1">
                  <p className="text-xl md:text-3xl font-serif italic font-medium leading-tight text-center md:text-left" style={{ color: colors.accent }}>
                    “La enseñanza y la tecnología deben ir de la mano, complementándose; mas nunca, evitarse.”
                  </p>
                </div>
              </div>
              <div className="space-y-8 text-gray-100 text-base md:text-xl leading-relaxed text-justify">
                <p>
                  Soy Licenciado en Derecho por la UNAM y maestrante en Derecho Laboral, ejerciendo activamente
                  como abogado litigante independiente. Esta dualidad me permite trasladar la realidad de los juzgados
                  y la praxis jurídica directamente al aula, fomentando en los estudiantes un pensamiento crítico, ético y,
                  sobre todo, práctico.
                </p>
                <p>
                  A lo largo de mi trayectoria, me he especializado en el diseño de planes de estudio personalizados
                  mediante herramientas de mi autoría: los "Guiones de Cátedra" y "Temarios Temáticos". Estos
                  instrumentos garantizan un control riguroso de los contenidos, una administración del tiempo
                  optimizada y una dinámica grupal de excelencia. Asimismo, soy un convencido de que la Inteligencia
                  Artificial debe integrarse a la educación como un auxiliar estratégico bajo principios de ética
                  profesional.
                </p>
                <p>
                  Mi objetivo es aportar la "nueva inercia" que la docencia exige: rigor técnico-teórico con un enfoque
                  humano. Mi metodología es pragmática; implemento proyectos de unidad donde el alumno someta la
                  teoría a la prueba de la realidad, culminando en un Proyecto Integrador Final que asegura la
                  comprensión total del programa aplicado al entorno diario.
                </p>
                <div className="py-8 my-10 border-y border-[#d4a017]/20 text-center">
                  <p className="font-serif italic text-xl md:text-2xl text-gray-200">
                    "No concibo la docencia como un acto de mera transmisión de datos, sino
                    como un ejercicio de responsabilidad humana y jurídica. Mi compromiso nace en las planeaciones
                    academicas buscando la perfección y se materialización en el aula, donde busco romper el esquema
                    de la educación fría para mostrar la realidad tal cual es: cruel y compleja, pero transformable. Mi
                    metodología es el pragmatismo absoluto; diseño estructuras que obligan al alumno a enfrentarse a la
                    práctica real, porque el error en el aula es una lección, pero el error en la vida tiene un peso que
                    marca. Enseño desde mis aciertos y desde las cicatrices de mis errores, con la esperanza de que mis
                    estudiantes no carguen con mis mismos pesos. Decido darlo todo por ellos, porque la bondad y la
                    exigencia técnica son la única vía para formar expertos en la ley, pero sobre todo, íntegros en su
                    humanidad."
                  </p>
                </div>
                <div className="mt-16 text-center space-y-6">
                  <div className="space-y-1">
                    <p className="font-bold uppercase tracking-widest text-xs text-[#d4a017]">Atentamente,</p>
                    <p className="text-3xl font-serif font-bold">Lic. Eduardo Montalvo Reyes</p>
                    <p className="text-md text-gray-400">Abogado Litigante y Catedrático</p>
                  </div>
                  <div className="w-24 h-px bg-[#d4a017]/40 mx-auto"></div>
                  <div className="max-w-2xl mx-auto">
                    <p className="font-bold uppercase tracking-widest text-[10px] text-[#d4a017] mb-3">Especialización de Cátedra:</p>
                    <p className="text-xs md:text-sm text-gray-400 leading-relaxed uppercase tracking-wider">
                      Derecho Constitucional y Amparo • Laboral y Seguridad Social • Mercantil • Civil • Epistemología • Ética.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* SECCIÓN: CONÓCEME (Con Bachillerato y sin fotos genéricas) */}
        {activeTab === 'conoceme' && (
          <div className="animate-fade-in space-y-12">
            <div className="bg-[#1e293b] p-8 md:p-16 rounded-[3rem] border border-[#d4a017]/10 shadow-2xl">
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-center mb-12" style={{ color: colors.accent }}>
                Conóceme
              </h2>
              
              <div className="flex flex-col md:flex-row gap-12 items-start mb-16">
                <div className="w-full md:w-1/3 flex justify-center">
                  <div className="relative w-64 h-64 md:w-full aspect-square rounded-2xl overflow-hidden border-2 border-[#d4a017] shadow-lg bg-gray-900 flex items-center justify-center">
                    <div className="text-[#d4a017] text-center p-4">
                       <FileText size={48} className="mx-auto mb-2 opacity-30" />
                       <p className="text-[10px] uppercase tracking-widest">Espacio para su fotografía</p>
                    </div>
                  </div>
                </div>
                
                <div className="w-full md:w-2/3 space-y-6 text-gray-100 text-base md:text-lg text-justify leading-relaxed">
                  <p>
                    Soy Abogado Litigante especializado en Derecho Laboral y Consultor Educativo con experiencia en la formación académica. Mi labor se distingue por un análisis estratégico y la resolución de conflictos fundamentada en el rigor jurídico.
                  </p>
                  <p>
                    Como catedrático, me desempeño en niveles de Licenciatura y <strong>Bachillerato</strong>, impartiendo materias del área social como Ética, Historia y Taller de Lectura y Redacción. He diseñado proyectos como el <strong>"Tribunal Escolar"</strong> y el <strong>"Código Estudiantil"</strong>, que permiten a los estudiantes enfrentar la realidad normativa desde la práctica.
                  </p>
                  <p>
                    Mi visión integra la excelencia técnica con la innovación pedagógica, utilizando la Inteligencia Artificial como una herramienta ética para potenciar el juicio humano y la formación de ciudadanos íntegros.
                  </p>
                </div>
              </div>

              <div className="bg-black/20 p-8 rounded-2xl border border-white/5 text-center space-y-6">
                <h3 className="text-xl md:text-2xl font-serif font-bold" style={{ color: colors.accent }}>
                  SABER MÁS DE MI FORMACIÓN
                </h3>
                <div className="pt-4">
                  <a 
                    href={cvLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 px-10 py-4 bg-[#d4a017] text-black font-black uppercase tracking-widest rounded-xl text-sm transition-all duration-300 hover:shadow-[0_0_25px_rgba(212,160,23,0.5)] hover:-translate-y-1"
                  >
                    <FileText size={18} />
                    Abrir CV
                    <ExternalLink size={14} className="opacity-50" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>

      <footer className="mt-20 border-t border-gray-600 py-12 px-6 text-center">
        <p className="text-[10px] md:text-xs tracking-[0.3em] uppercase" style={{ color: colors.textMuted }}>
          Lic. en Derecho, Maestrante en Derecho y Profesor | Todos los derechos reservados 2026.
        </p>
      </footer>

      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;700;900&family=Playfair+Display:ital,wght@0,700;1,400&display=swap');
        .font-serif { font-family: 'Playfair Display', serif; }
        .animate-fade-in { animation: fadeIn 0.8s ease-out forwards; }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
      `}} />
    </div>
  );
}
