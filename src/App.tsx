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

  // Función para convertir link de Drive en link de imagen directa
  const getImageUrl = (url) => {
    return url.replace('/view?usp=sharing', '').replace('file/d/', 'uc?export=view&id=');
  };

  const miFoto = getImageUrl("https://drive.google.com/file/d/1JGAhxqVSK5YmaVsyaQAXS6Y1E8RTldsG/view?usp=sharing");

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
              <p className="text-lg md:text-xl font-serif italic text-gray-200 leading-relaxed text-justify">
                "Convencido de usar la tecnología y la Inteligencia Artificial de manera consciente y ética, enseño su uso como un apoyo extra para perfeccionar el trabajo humano, jamás como un reemplazo de nuestra esencia y sensibilidad."
              </p>
              <button onClick={() => setActiveTab('filosofia')} className="px-12 py-5 bg-[#d4a017] text-black font-black uppercase tracking-[0.2em] rounded-xl text-sm hover:scale-105 transition-all">
                Mi Filosofía
              </button>
            </div>
          </div>
        )}

        {/* FILOSOFÍA (OCULTA DEL MENÚ) */}
        {activeTab === 'filosofia' && (
          <div className="animate-fade-in bg-[#1e293b] p-8 md:p-16 rounded-[3rem] border border-[#d4a017]/10">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-center mb-12" style={{ color: colors.accent }}>Mi Filosofía</h2>
            <p className="text-lg font-light leading-relaxed text-justify mb-8">
              Soy Licenciado en Derecho por la UNAM y maestrante en Derecho Laboral... [Texto de filosofía completo e igualado en estilo]
            </p>
            <div className="text-center italic font-light text-gray-400 border-y border-[#d4a017]/20 py-8">
               "No concibo la docencia como un acto de mera transmisión de datos, sino como un ejercicio de responsabilidad humana y jurídica..."
            </div>
          </div>
        )}

        {/* CONÓCEME (CON FOTO DEL LINK) */}
        {activeTab === 'conoceme' && (
          <div className="animate-fade-in space-y-12">
            <div className="bg-[#1e293b] p-8 md:p-16 rounded-[3rem] border border-[#d4a017]/10">
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-center mb-12" style={{ color: colors.accent }}>Conóceme</h2>
              <div className="flex flex-col md:flex-row gap-12 items-start">
                <div className="w-full md:w-1/3 flex justify-center">
                  <div className="relative w-64 h-80 rounded-2xl overflow-hidden border-2 border-[#d4a017] shadow-xl">
                    <img src={miFoto} alt="Lic. Eduardo Montalvo" className="object-cover w-full h-full" />
                  </div>
                </div>
                <div className="w-full md:w-2/3 space-y-6 font-light text-justify text-lg leading-relaxed">
                  <p>Soy Abogado Litigante especializado en Derecho Laboral y Consultor Educativo. Mi trayectoria se fundamenta en la capacidad de análisis estratégico y la resolución de conflictos mediante una sólida base jurídica...</p>
                  <p>Como catedrático, ejerzo en nivel Licenciatura y Bachillerato, impartiendo materias sociales clave como Ética, Historia y Taller de Lectura y Redacción.</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* BACHILLERATO (PÁGINA DINÁMICA) */}
        {activeTab === 'bachillerato' && (
          <div className="animate-fade-in space-y-10">
            {!subTab ? (
              <>
                <div className="text-center space-y-6">
                  <h2 className="text-4xl md:text-5xl font-serif font-bold" style={{ color: colors.accent }}>DOCENCIA BACHILLERATO</h2>
                  <div className="flex justify-center py-6">
                    <div className="w-full max-w-[320px] aspect-[9/16] rounded-3xl overflow-hidden border-4 border-[#d4a017]/30 shadow-2xl">
                      <iframe className="w-full h-full" src="https://www.youtube.com/embed/_3VZPyppNW8" allowFullScreen></iframe>
                    </div>
                  </div>
                  <p className="max-w-4xl mx-auto font-light text-justify text-lg leading-relaxed text-gray-200">
                    Mi labor como docente en el nivel medio superior trasciende la simple instrucción académica; se enfoca en la formación integral de ciudadanos con criterio y estructura. A lo largo de mi trayectoria, he rediseñado los programas de Ética, Historia y Taller de Lectura para dotarlos de un rigor profesional que prepare al alumno para los desafíos de la vida universitaria.
                    <br/><br/>
                    Sin embargo, considero que mi mayor logro y mi más alta carta de recomendación no reside en los documentos, sino en el testimonio de mis estudiantes. El reconocimiento de los alumnos, quienes al término del curso han manifestado haber descubierto un genuino amor por materias que antes consideraban áridas, es la prueba definitiva de que la pasión y el método que imprimo en el aula logran transformar el conocimiento en una herramienta de vida.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-10">
                  {[
                    { id: 'historia', label: 'HISTORIA', icon: <Map />, desc: 'Diseño curricular de corte comparativo que sitúa el devenir nacional dentro de la narrativa universal (Ilustración y Modernidad). Establece la materia como un eje constructor de identidad.' },
                    { id: 'etica', label: 'ÉTICA', icon: <Smile />, desc: 'Programa de vanguardia centrado en la Teoría de la Calificación del Acto y la Phronesis aristotélica. Consolida un modelo de juicio crítico y responsabilidad legal.' },
                    { id: 'taller', label: 'TALLER DE REDACCIÓN', icon: <BookOpen />, desc: 'Modelo basado en el rigor de la Ingeniería del Pensamiento. Integra la gradación de objetividad y jerarquización informativa profesional para una comunicación de alto nivel.' },
                    { id: 'actividades', label: 'ACTIVIDADES DE REFUERZO', icon: <Activity />, desc: 'Dilemas reales diseñados para aplicar el conocimiento diario. Integran juicio moral y estructura lógica para garantizar que la teoría sea una herramienta útil.' },
                    { id: 'proyecto', label: 'PROYECTO FINAL', icon: <Target />, desc: 'Documento que certifica la culminación del proceso. Exige coherencia y linealidad absoluta, validando la capacidad de trasladar la teoría a un producto profesional.' },
                  ].map((item) => (
                    <div key={item.id} className="bg-[#1e293b] p-6 rounded-2xl border border-white/5 hover:border-[#d4a017]/40 transition-all flex flex-col h-full">
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
                
                {subTab === 'historia' && (
                  <div className="space-y-10">
                    <h2 className="text-4xl font-serif font-bold text-[#d4a017]">HISTORIA DE MÉXICO</h2>
                    <div className="flex justify-center"><iframe className="w-full max-w-2xl aspect-video rounded-2xl" src="https://www.youtube.com/embed/QmW6HvyawqU" allowFullScreen></iframe></div>
                    <p className="font-light text-justify text-lg leading-relaxed">
                      La enseñanza de la Historia de México en el nivel bachillerato representa un desafío pedagógico que va más allá de la simple cronología de eventos, pues constituye el fundamento de la identidad y la ubicación del joven en un mundo globalizado. Mi propuesta de diseño curricular de autor surge de la necesidad de romper con la enseñanza tradicional y fragmentada.
                    </p>
                  </div>
                )}
                {/* Repetir estructura para etica y taller con sus respectivos videos y textos de los PDFs */}
                {subTab === 'etica' && (
                  <div className="space-y-10">
                    <h2 className="text-4xl font-serif font-bold text-[#d4a017]">ÉTICA Y VALORES</h2>
                    <div className="flex justify-center"><iframe className="w-full max-w-2xl aspect-video rounded-2xl" src="https://www.youtube.com/embed/771JHpIriUY" allowFullScreen></iframe></div>
                    <p className="font-light text-justify text-lg leading-relaxed">
                      Este diseño curricular de autor nace de la convicción de que esta materia es la columna vertebral de la formación ciudadana y el juicio crítico. Mi objetivo primordial fue dotar al estudiante de una estructura lógica y legal que le permita calificar sus propios actos con rigor y responsabilidad.
                    </p>
                  </div>
                )}
                {subTab === 'taller' && (
                  <div className="space-y-10">
                    <h2 className="text-4xl font-serif font-bold text-[#d4a017]">TALLER DE LECTURA Y REDACCIÓN</h2>
                    <div className="flex justify-center"><iframe className="w-full max-w-2xl aspect-video rounded-2xl" src="https://www.youtube.com/embed/ToCn4t3cghY" allowFullScreen></iframe></div>
                    <p className="font-light text-justify text-lg leading-relaxed">
                      Este espacio construye la arquitectura de la inteligencia. Mi enfoque se aleja de la enseñanza mecánica de reglas ortográficas para proponer una metodología de Ingeniería del Pensamiento, donde el alumno comprende que la claridad al escribir es el reflejo directo de la claridad al pensar.
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
