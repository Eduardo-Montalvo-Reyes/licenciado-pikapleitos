import React, { useState } from 'react';
import { Mail, Phone, MessageSquare, ChevronRight, User, BookOpen, Scale, Award, Globe, PenTool, Layout, Menu, X, Youtube, FileText, ShieldCheck } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);

  // Paleta de colores institucional
  const colors = {
    bg: '#000000',
    primary: '#270605', // Guinda institucional
    accent: '#7f6000',  // Dorado
    text: '#ffffff',
    card: '#0a0a0a'
  };

  const NavItem = ({ id, label }) => (
    <button
      onClick={() => { setActiveTab(id); setMenuOpen(false); }}
      className={`px-4 py-2 transition-all duration-300 text-sm font-bold tracking-widest uppercase ${
        activeTab === id ? 'text-[#7f6000] border-b-2 border-[#7f6000]' : 'text-gray-400 hover:text-white'
      }`}
    >
      {label}
    </button>
  );

  return (
    <div className="min-h-screen bg-black text-white font-serif selection:bg-[#7f6000] selection:text-black">
      {/* Estilos para el justificado y tipografía */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400..700;1,400..700&family=Merriweather:ital,wght@0,300;0,400;0,700;1,300;1,400&display=swap');
        
        .font-lora { font-family: 'Lora', serif; }
        .font-merri { font-family: 'Merriweather', serif; }
        
        .text-justify-custom {
          text-align: justify;
          text-justify: inter-word;
        }

        /* Ajuste para móviles: evitar que el texto se rompa feo */
        @media (max-width: 640px) {
          .text-justify-custom {
            text-align: left;
          }
        }
      `}</style>

      {/* Navegación Superior */}
      <nav className="sticky top-0 z-50 bg-black/95 border-b border-[#270605] backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
          <div className="flex flex-col">
            <span className="text-xl font-bold tracking-[0.2em] font-lora">EDUARDO MONTALVO REYES</span>
            <span className="text-[10px] tracking-[0.4em] text-[#7f6000] uppercase">Abogado & Catedrático</span>
          </div>

          {/* Menú Escritorio */}
          <div className="hidden lg:flex items-center space-x-2">
            <NavItem id="home" label="Inicio" />
            <NavItem id="filosofia" label="Filosofía" />
            <NavItem id="academico" label="Invasión Académica" />
            <NavItem id="tribunal" label="Tribunal" />
            <NavItem id="contacto" label="Contacto" />
          </div>

          {/* Botón Móvil */}
          <button className="lg:hidden" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Menú Lateral Móvil */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-black flex flex-col items-center justify-center space-y-8 animate-in fade-in zoom-in duration-300">
          <NavItem id="home" label="Inicio" />
          <NavItem id="filosofia" label="Filosofía" />
          <NavItem id="academico" label="Academia" />
          <NavItem id="tribunal" label="Tribunal" />
          <NavItem id="contacto" label="Contacto" />
          <button onClick={() => setMenuOpen(false)} className="absolute top-6 right-6 text-gray-500">
            <X size={32} />
          </button>
        </div>
      )}

      {/* Contenido Principal */}
      <main className="max-w-5xl mx-auto px-6 py-12 md:py-20 font-merri">
        
        {/* SECCIÓN INICIO */}
        {activeTab === 'home' && (
          <div className="space-y-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="relative group overflow-hidden rounded-xl border border-[#270605] shadow-2xl">
              <div className="aspect-video w-full bg-neutral-900 flex items-center justify-center">
                {/* Fallback si el iframe es bloqueado o no carga */}
                <iframe 
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/Gw0FgPUnEDQ" 
                  title="Video Eduardo Montalvo"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                ></iframe>
              </div>
            </div>

            <div className="max-w-3xl mx-auto text-center space-y-8">
              <h1 className="text-4xl md:text-6xl font-lora italic font-medium leading-tight">
                "Forjando hoy el <span className="text-[#7f6000]">futuro</span> del mañana"
              </h1>
              <p className="text-lg md:text-xl text-justify-custom text-gray-300 leading-relaxed italic">
                Convencido de usar la tecnología y la Inteligencia Artificial de manera consciente. Por ello, me baso en enseñar su uso de una manera que se entienda que debe emplearse éticamente, siempre como un apoyo extra de perfección y jamás como un reemplazo de la esencia humana.
              </p>
              <div className="flex justify-center gap-4 pt-4">
                <button onClick={() => setActiveTab('academico')} className="px-8 py-3 bg-[#7f6000] text-black font-bold uppercase text-xs tracking-widest rounded-sm hover:bg-white transition-all">
                  Ver Proyectos
                </button>
                <button onClick={() => setActiveTab('contacto')} className="px-8 py-3 border border-white text-white font-bold uppercase text-xs tracking-widest rounded-sm hover:bg-white hover:text-black transition-all">
                  Contacto
                </button>
              </div>
            </div>
          </div>
        )}

        {/* SECCIÓN FILOSOFÍA */}
        {activeTab === 'filosofia' && (
          <div className="max-w-3xl mx-auto space-y-12 animate-in fade-in duration-500">
            <div className="text-center">
              <h2 className="text-3xl font-lora font-bold uppercase tracking-[0.3em] text-[#7f6000]">Manifiesto</h2>
              <div className="h-1 w-20 bg-[#270605] mx-auto mt-4"></div>
            </div>
            
            <div className="space-y-8 text-justify-custom text-gray-200 text-lg leading-loose">
              <p>
                No concibo la docencia como un acto de mera transmisión de datos, sino como un ejercicio de responsabilidad humana y jurídica. Mi compromiso nace en las planeaciones académicas buscando la perfección y se materializa en el aula, donde busco romper el esquema de la educación fría para mostrar la realidad tal cual es: compleja, pero transformable.
              </p>
              <blockquote className="border-l-4 border-[#7f6000] pl-8 py-4 my-10 bg-[#270605]/10 font-lora italic text-xl text-white">
                "Diseño estructuras que obligan al alumno a enfrentarse a la práctica real, porque el error en el aula es una lección, pero el error en la vida tiene un peso que marca."
              </blockquote>
              <p>
                Enseño desde mis aciertos y desde las cicatrices de mis errores, con la esperanza de que mis estudiantes no carguen con mis mismos pesos. Decido darlo todo por ellos, porque la bondad y la exigencia técnica son la única vía para formar expertos en la ley, pero sobre todo, íntegros en su humanidad.
              </p>
            </div>
          </div>
        )}

        {/* SECCIÓN INVASIÓN ACADÉMICA */}
        {activeTab === 'academico' && (
          <div className="space-y-16 animate-in fade-in duration-500">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-lora font-bold uppercase tracking-widest text-[#7f6000]">Invasión de Clases</h2>
              <p className="max-w-2xl mx-auto text-gray-400 italic">Optimizando los programas oficiales mediante la perfección técnica y la praxis jurídica.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-8 bg-[#0a0a0a] border border-[#270605] space-y-4 hover:border-[#7f6000] transition-colors group">
                <FileText className="text-[#7f6000] group-hover:scale-110 transition-transform" size={40} />
                <h3 className="text-xl font-bold font-lora uppercase tracking-tight">Temarios Temáticos</h3>
                <p className="text-sm text-justify-custom text-gray-400">
                  Garantía de enseñanza mediante un desglose semanal que vincula la praxis jurídica real con la teoría académica, integrando temas de vanguardia y control de calidad.
                </p>
                <div className="pt-4 border-t border-white/5">
                  <a href="https://drive.google.com/file/d/1ArOiedBdJgJ7VPc_tCDGVY9SfLJg669e/view" target="_blank" className="text-xs font-bold uppercase text-[#7f6000] hover:text-white flex items-center gap-2">
                    Explorar Documento <ChevronRight size={14} />
                  </a>
                </div>
              </div>

              <div className="p-8 bg-[#0a0a0a] border border-[#270605] space-y-4 hover:border-[#7f6000] transition-colors group">
                <Youtube className="text-[#7f6000] group-hover:scale-110 transition-transform" size={40} />
                <h3 className="text-xl font-bold font-lora uppercase tracking-tight">Guiones de Cátedra</h3>
                <p className="text-sm text-justify-custom text-gray-400">
                  El Derecho concebido como una obra escénica. Planeaciones con ritmo narrativo, clímax de aprendizaje y enfoque en la inteligencia artística del jurista.
                </p>
                <div className="pt-4 border-t border-white/5">
                  <a href="https://drive.google.com/file/d/17NkMEV-fXOulCliPIxA2hnIn9YvdGw5b/view" target="_blank" className="text-xs font-bold uppercase text-[#7f6000] hover:text-white flex items-center gap-2">
                    Ver Guiones <ChevronRight size={14} />
                  </a>
                </div>
              </div>

              <div className="p-8 bg-[#0a0a0a] border border-[#270605] space-y-4 hover:border-[#7f6000] transition-colors group md:col-span-2">
                <ShieldCheck className="text-[#7f6000] group-hover:scale-110 transition-transform" size={40} />
                <h3 className="text-xl font-bold font-lora uppercase tracking-tight">Actualización de Contenidos</h3>
                <p className="text-sm text-justify-custom text-gray-400">
                  Reestructuración de programas de bachillerato y licenciatura (Ética, Historia, Derecho) para incluir temas omitidos por el estándar tradicional, como el procedimiento agrario o la seguridad social.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* SECCIÓN TRIBUNAL */}
        {activeTab === 'tribunal' && (
          <div className="space-y-12 animate-in fade-in duration-500">
            <div className="bg-[#270605]/10 border border-[#270605] p-12 text-center rounded-sm">
              <Scale size={64} className="mx-auto text-[#7f6000] mb-6" />
              <h2 className="text-3xl font-lora font-bold uppercase mb-6">Clínica Procesal: El Tribunal Escolar</h2>
              <p className="max-w-3xl mx-auto text-justify-custom text-gray-300 leading-relaxed mb-8">
                Un ecosistema pedagógico diseñado para que el alumno de Licenciatura en Derecho no solo estudie el proceso, sino que lo viva. Mediante expedientes reales, simulaciones de audiencias y la creación de un Código Normativo propio, transformamos el aula en un despacho jurídico de alto nivel.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-bold tracking-widest uppercase">
                <div className="p-4 border border-[#7f6000]/30">Juicios Orales</div>
                <div className="p-4 border border-[#7f6000]/30">Derecho de Amparo</div>
                <div className="p-4 border border-[#7f6000]/30">Práctica Forense</div>
              </div>
            </div>
          </div>
        )}

        {/* SECCIÓN CONTACTO */}
        {activeTab === 'contacto' && (
          <div className="max-w-2xl mx-auto space-y-12 animate-in zoom-in duration-300">
            <div className="text-center">
              <h2 className="text-3xl font-lora font-bold uppercase tracking-widest">Contacto Directo</h2>
              <p className="text-gray-500 mt-2 italic">Atención profesional y académica.</p>
            </div>

            <div className="space-y-4">
              <div className="group p-6 bg-[#0a0a0a] border border-[#270605] flex items-center justify-between hover:border-[#7f6000] transition-all">
                <div className="flex items-center gap-6">
                  <div className="p-3 bg-[#270605]/50 text-[#7f6000]">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase text-gray-500 font-bold tracking-tighter">Correo Electrónico</p>
                    <p className="text-lg">lic.montalvo.legal@gmail.com</p>
                  </div>
                </div>
              </div>

              <div className="group p-6 bg-[#0a0a0a] border border-[#270605] flex items-center justify-between hover:border-[#7f6000] transition-all">
                <div className="flex items-center gap-6">
                  <div className="p-3 bg-[#270605]/50 text-[#7f6000]">
                    <MessageSquare size={24} />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase text-gray-500 font-bold tracking-tighter">WhatsApp / Móvil</p>
                    <p className="text-lg">55 3467 6149</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center text-sm text-gray-600 italic">
              "Mi más grande carta de recomendación son las cartas de agradecimiento de mis alumnos o clientes."
            </div>
          </div>
        )}
      </main>

      {/* Footer Final */}
      <footer className="mt-20 border-t border-[#270605] py-12 bg-black">
        <div className="max-w-5xl mx-auto px-6 text-center space-y-6">
          <div className="flex justify-center space-x-6">
            <span className="h-px w-12 bg-[#7f6000] self-center"></span>
            <span className="text-xs uppercase tracking-[0.5em] text-gray-500">Iustitia et Educatio</span>
            <span className="h-px w-12 bg-[#7f6000] self-center"></span>
          </div>
          <p className="text-[11px] text-gray-700 uppercase tracking-widest">
            © {new Date().getFullYear()} Lic. Eduardo Montalvo Reyes. Prohibida la reproducción total o parcial sin autorización.
          </p>
        </div>
      </footer>
    </div>
  );
}