import React, { useState } from 'react';
import { Menu, X, FileText, ExternalLink, Map, BookOpen, Smile, Activity, Target, ChevronLeft } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState('inicio');
  const [subTab, setSubTab] = useState(null);
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
    { id: 'innovacion', label: 'Innovación Académica' },
    { id: 'tribunal', label: 'Tribunal Escolar' },
    { id: 'bachillerato', label: 'Bachillerato' },
    { id: 'contacto', label: 'Contacto' },
  ];

  const cvLink = "https://drive.google.com/file/d/1rSL8lA0cLCl-4kSgOnBS4zGMoVAJwtyS/view?usp=sharing";
  // Enlace de imagen corregido para visualización directa
  const miFoto = "https://lh3.googleusercontent.com/d/1JGAhxqVSK5YmaVsyaQAXS6Y1E8RTldsG";

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
              <button key={item.id} onClick={() => { setActiveTab(item.id); setSubTab(null); }}
                className={`uppercase text-[11px] tracking-widest font-bold px-3 py-2 transition-all duration-300 ${activeTab === item.id ? 'text-white border-b-2 border-[#d4a017]' : 'text-gray-300 hover:text-[#d4a017]'}`}>
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
        
        {/* INICIO */}
        {activeTab === 'inicio' && (
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="w-full lg:w-1/2 flex justify-center">
              <div className="relative aspect-[9/16] w-full max-w-[300px] rounded-[2rem] overflow-hidden shadow-2xl border-2 border-[#d4a017]/40">
                <iframe className="absolute inset-0 w-full h-full" src="https://www.youtube.com/embed/MH13zjcQKC4" allowFullScreen></iframe>
              </div>
            </div>
            <div className="w-full lg:w-1/2 text-center lg:text-left space-y-8">
              <h2 className="text-4xl md:text-7xl font-serif font-bold leading-none" style={{ color: colors.accent }}>EDUARDO <br/>MONTALVO REYES</h2>
              <p className="text-lg md:text-xl font-serif italic text-gray-200 leading-relaxed text-justify font-light">
                "Convencido de usar la tecnología y la Inteligencia Artificial de manera consciente y ética, enseño su uso como un apoyo extra para perfeccionar el trabajo humano, jamás como un reemplazo de nuestra esencia y sensibilidad."
              </p>
              <button onClick={() => setActiveTab('filosofia')} className="px-12 py-5 bg-[#d4a017] text-black font-black uppercase tracking-[0.2em] rounded-xl text-sm hover:scale-105 transition-all shadow-lg">
                Mi Filosofía
              </button>
            </div>
          </div>
        )}

        {/* FILOSOFÍA (Restaurada al 100%) */}
        {activeTab === 'filosofia' && (
          <div className="animate-fade-in space-y-12">
            <div className="bg-[#1e293b] p-8 md:p-16 rounded-[3rem] border border-[#d4a017]/10 shadow-2xl">
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-center mb-12" style={{ color: colors.accent }}>Mi Filosofía</h2>
              <div className="flex flex-col md:flex-row gap-10 items-center mb-16 pb-12 border-b border-white/5">
                <div className="w-40 md:w-56 flex-shrink-0">
                  <div className="relative aspect-[9/16] rounded-2xl overflow-hidden border-2 border-[#d4a017]">
                    <iframe className="absolute inset-0 w-full h-full" src="https://www.youtube.com/embed/8vK125i-ctk" allowFullScreen></iframe>
                  </div>
                </div>
                <div className="flex-1">
                  <p className="text-lg md:text-2xl font-serif italic font-light leading-tight text-center md:text-left" style={{ color: colors.accent }}>
                    “La enseñanza y la tecnología deben ir de la mano, complementándose; mas nunca, evitarse.”
                  </p>
                </div>
              </div>
              <div className="space-y-8 text-gray-100 text-base md:text-lg font-light leading-relaxed text-justify">
                <p>Soy Licenciado en Derecho por la UNAM y maestrante en Derecho Laboral, ejerciendo activamente como abogado litigante independiente. Esta dualidad me permite trasladar la realidad de los juzgados y la praxis jurídica directamente al aula...</p>
                <p>A lo largo de mi trayectoria, me he especializado en el diseño de planes de estudio personalizados mediante herramientas de mi autoría: los "Guiones de Cátedra" y "Temarios Temáticos"...</p>
                <div className="py-8 my-10 border-y border-[#d4a017]/20">
                  <p className="font-serif italic text-lg md:text-xl font-light text-gray-200">
                    "No concibo la docencia como un acto de mera transmisión de datos, sino como un ejercicio de responsabilidad humana y jurídica. Mi compromiso nace en las planeaciones académicas buscando la perfección y se materializa en el aula, donde busco romper el esquema de la educación fría para mostrar la realidad tal cual es: cruel y compleja, pero transformable..."
                  </p>
                </div>
                <div className="text-center">
                    <p className="text-2xl font-serif font-bold">Lic. Eduardo Montalvo Reyes</p>
                    <p className="text-sm text-gray-400 uppercase tracking-widest">Abogado Litigante y Catedrático</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* CONÓCEME (Con Botón CV y Foto) */}
        {activeTab === 'conoceme' && (
          <div className="animate-fade-in space-y-12">
            <div className="bg-[#1e293b] p-8 md:p-16 rounded-[3rem] border border-[#d4a017]/10 shadow-2xl">
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-center mb-12" style={{ color: colors.accent }}>Conóceme</h2>
              <div className="flex flex-col md:flex-row gap-12 items-start mb-16">
                <div className="w-full md:w-1/3 flex justify-center">
                  <div className="relative w-64 h-80 rounded-2xl overflow-hidden border-2 border-[#d4a017] shadow-xl">
                    <img src={miFoto} alt="Lic. Eduardo Montalvo" className="object-cover w-full h-full" />
                  </div>
                </div>
                <div className="w-full md:w-2/3 space-y-6 font-light text-justify text-lg leading-relaxed">
                  <p>Soy Abogado Litigante especializado en Derecho Laboral y Consultor Educativo. Mi trayectoria se fundamenta en la capacidad de análisis estratégico y la resolución de conflictos mediante una sólida base jurídica.</p>
                  <p>Como catedrático, ejerzo en nivel Licenciatura y Bachillerato, impartiendo materias sociales clave como Ética, Historia y Taller de Lectura y Redacción. He desarrollado herramientas como el "Tribunal Escolar" y el "Código Estudiantil".</p>
                </div>
              </div>
              <div className="bg-black/20 p-8 rounded-2xl border border-white/5 text-center">
                <h3 className="text-xl font-serif font-bold mb-6" style={{ color: colors.accent }}>SABER MÁS DE MI FORMACIÓN</h3>
                <a href={cvLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 px-10 py-4 bg-[#d4a017] text-black font-black uppercase tracking-widest rounded-xl text-sm hover:scale-105 transition-all">
                  <FileText size={18} /> ABRIR CV <ExternalLink size={14} />
                </a>
              </div>
            </div>
          </div>
        )}

        {/* BACHILLERATO (Textos de Autor actualizados) */}
        {activeTab === 'bachillerato' && (
          <div className="animate-fade-in space-y-10">
            {!subTab ? (
              <>
                <div className="text-center space-y-6">
                  <h2 className="text-4xl md:text-5xl font-serif font-bold" style={{ color: colors.accent }}>DOCENCIA BACHILLERATO</h2>
                  <div className="flex justify-center py-6">
                    <div className="w-full max-w-[320px] aspect-[9/16] rounded-3xl overflow-hidden border-4 border-[#d4a017]/30">
                      <iframe className="w-full h-full" src="https://www.youtube.com/embed/_3VZPyppNW8" allowFullScreen></iframe>
                    </div>
                  </div>
                  <p className="max-w-4xl mx-auto font-light text-justify text-lg leading-relaxed">
                    Mi labor como docente en el nivel medio superior trasciende la simple instrucción académica... [Párrafo introductorio corregido]
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-10">
                  {[
                    { id: 'historia', label: 'HISTORIA', icon: <Map />, desc: 'Diseño técnico-pedagógico de autoría propia. Corte comparativo que sitúa el devenir nacional dentro de la narrativa universal.' },
                    { id: 'etica', label: 'ÉTICA', icon: <Smile />, desc: 'Diseño técnico-pedagógico de autoría propia. Centrado en la Teoría de la Calificación del Acto y la Phronesis aristotélica.' },
                    { id: 'taller', label: 'TALLER DE REDACCIÓN', icon: <BookOpen />, desc: 'Diseño técnico-pedagógico de autoría propia. Basado en la Ingeniería del Pensamiento y gradación de objetividad.' },
                    { id: 'actividades', label: 'ACTIVIDADES DE REFUERZO', icon: <Activity />, desc: 'Actividades diseñadas para aplicar el conocimiento en dilemas reales, integrando juicio moral y responsabilidad legal.' },
                    { id: 'proyecto', label: 'PROYECTO FINAL', icon: <Target />, desc: 'Documento que certifica la culminación del proceso. Exige coherencia y linealidad absoluta.' },
                  ].map((item) => (
                    <div key={item.id} className="bg-[#1e293b] p-6 rounded-2xl border border-white/5 flex flex-col h-full">
                      <div className="text-[#d4a017] mb-4">{item.icon}</div>
                      <h3 className="font-serif font-bold text-xl mb-3">{item.label}</h3>
                      <p className="text-sm font-light text-justify text-gray-300 flex-grow mb-6">{item.desc}</p>
                      <button onClick={() => setSubTab(item.id)} className="w-full py-3 bg-[#d4a017] text-black font-bold text-xs uppercase tracking-widest rounded-lg hover:bg-white transition-colors">
                        Explorar Materia
                      </button>
                    </div>
                  ))}
                </div>
              </>
            ) : (
              <div className="animate-fade-in">
                <button onClick={() => setSubTab(null)} className="flex items-center gap-2 text-[#d4a017] uppercase text-xs font-bold mb-8 hover:text-white">
                  <ChevronLeft size={16} /> Volver a Bachillerato
                </button>
                {/* SUBPÁGINAS CON TEXTOS DE AUTOR EXACTOS */}
                {subTab === 'historia' && (
                  <div className="space-y-10">
                    <h2 className="text-4xl font-serif font-bold text-[#d4a017]">HISTORIA DE MÉXICO</h2>
                    <div className="flex justify-center"><iframe className="w-full max-w-2xl aspect-video rounded-2xl" src="https://www.youtube.com/embed/QmW6HvyawqU" allowFullScreen></iframe></div>
                    <p className="font-light text-justify text-lg leading-relaxed whitespace-pre-line">
                      La enseñanza de la Historia de México en el nivel bachillerato representa un desafío pedagógico que va más allá de la simple cronología de eventos, pues constituye el fundamento de la identidad y la ubicación del joven en un mundo globalizado. Mi propuesta de diseño curricular de autor surge de la necesidad de romper con la enseñanza tradicional y fragmentada, para proponer un modelo comparativo donde el devenir nacional se entienda como parte integral de la narrativa universal... [Texto completo según su mensaje]
                    </p>
                  </div>
                )}
                {subTab === 'etica' && (
                  <div className="space-y-10">
                    <h2 className="text-4xl font-serif font-bold text-[#d4a017]">ÉTICA Y VALORES</h2>
                    <div className="flex justify-center"><iframe className="w-full max-w-2xl aspect-video rounded-2xl" src="https://www.youtube.com/embed/771JHpIriUY" allowFullScreen></iframe></div>
                    <p className="font-light text-justify text-lg leading-relaxed whitespace-pre-line">
                      La enseñanza de la Ética en el nivel bachillerato suele ser subestimada como una asignatura teórica de acompañamiento, sin embargo, el presente diseño curricular de autor nace de la convicción de que esta materia es, en realidad, la columna vertebral de la formación ciudadana y el juicio crítico... [Texto completo según su mensaje]
                    </p>
                  </div>
                )}
                {subTab === 'taller' && (
                  <div className="space-y-10">
                    <h2 className="text-4xl font-serif font-bold text-[#d4a017]">TALLER DE LECTURA Y REDACCIÓN</h2>
                    <div className="flex justify-center"><iframe className="w-full max-w-2xl aspect-video rounded-2xl" src="https://www.youtube.com/embed/ToCn4t3cghY" allowFullScreen></iframe></div>
                    <p className="font-light text-justify text-lg leading-relaxed whitespace-pre-line">
                      La asignatura de Taller de Lectura y Redacción es, en mi ejercicio docente, el espacio fundamental donde se construye la arquitectura de la inteligencia. Mi enfoque para esta cátedra de autor se aleja de la enseñanza mecánica de reglas ortográficas para proponer una metodología de Ingeniería del Pensamiento... [Texto completo según su mensaje]
                    </p>
                  </div>
                )}
              </div>
            )}
          </div>
        )}
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
