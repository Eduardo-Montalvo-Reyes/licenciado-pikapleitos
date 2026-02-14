import React, { useState } from 'react';
import { FileText, Youtube, Scale, BookOpen, Mail, Phone, Menu, X, ChevronRight } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState('inicio');
  const [menuOpen, setMenuOpen] = useState(false);

  const colors = {
    bg: '#0f172a',
    primary: '#1e293b',
    accent: '#d4a017',
    neon: '#a5b4fc',
    text: '#e2e8f0',
    textDark: '#94a3b8',
  };

  const menuItems = [
    { id: 'inicio', label: 'Inicio' },
    { id: 'conoceme', label: 'Conóceme' },
    { id: 'innovacion', label: 'Innovación Académica' },
    { id: 'tribunal', label: 'Tribunal Escolar' },
    { id: 'bachillerato', label: 'Bachillerato' },
    { id: 'contacto', label: 'Contacto' },
  ];

  return (
    <div className="min-h-screen" style={{ backgroundColor: colors.bg, color: colors.text }}>
      {/* Navegación */}
      <nav className="sticky top-0 z-50 backdrop-blur-lg border-b border-[#334155]" style={{ backgroundColor: 'rgba(15, 23, 42, 0.9)' }}>
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-wider" style={{ color: colors.accent, fontFamily: "'Lora', serif" }}>
              LIC. MONTALVO REYES
            </h1>
            <p className="text-sm md:text-base uppercase tracking-widest opacity-80">Abogado & Catedrático</p>
          </div>

          <div className="hidden lg:flex space-x-8">
            {menuItems.map(item => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`uppercase text-sm tracking-widest font-medium transition-all ${
                  activeTab === item.id ? 'text-[#d4a017] border-b-2 border-[#d4a017]' : 'text-gray-400 hover:text-white'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <button className="lg:hidden text-3xl" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-black/95 flex flex-col items-center justify-center space-y-8 lg:hidden animate-fade-in">
          {menuItems.map(item => (
            <button
              key={item.id}
              onClick={() => { setActiveTab(item.id); setMenuOpen(false); }}
              className="text-2xl uppercase tracking-widest text-white hover:text-[#d4a017] transition-colors"
            >
              {item.label}
            </button>
          ))}
        </div>
      )}

      <main className="max-w-7xl mx-auto px-6 py-12 md:py-20">
        {/* Inicio */}
        {activeTab === 'inicio' && (
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Izquierda: Video grande (sin cambios) */}
            <div>
              <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl border-2 border-[#d4a017]/50">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/MH13zjcQKC4?rel=0"
                  title="Presentación Eduardo Montalvo Reyes"
                  allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-center mt-6" style={{ fontFamily: "'Lora', serif", color: '#ffffff' }}>
                FORJANDO HOY EL FUTURO DEL MAÑANA
              </h2>
            </div>

            {/* Derecha: Nombre + texto */}
            <div className="space-y-8 text-center md:text-left">
              <h1 
                className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-wider leading-tight"
                style={{ color: colors.accent, fontFamily: "'Lora', serif" }}
              >
                EDUARDO MONTALVO REYES
              </h1>

              <p className="text-xl md:text-2xl lg:text-3xl italic font-semibold leading-relaxed text-justify" style={{ color: '#ffffff' }}>
                Convencido de usar la tecnología y la Inteligencia Artificial de manera consciente y ética, enseño su uso como un apoyo extra para perfeccionar el trabajo humano, jamás como un reemplazo de nuestra esencia y sensibilidad.
              </p>

              <div className="mt-12 flex justify-center md:justify-start">
                <button 
                  onClick={() => setActiveTab('filosofia')}
                  className="px-12 py-5 bg-[#d4a017] text-black font-bold uppercase tracking-widest rounded-lg hover:bg-[#e5b923] transition-all shadow-xl text-xl"
                >
                  Mi Filosofía
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Filosofía – video más pequeño */}
        {activeTab === 'filosofia' && (
          <div className="max-w-5xl mx-auto space-y-12">
            <h2 className="text-5xl font-bold text-center tracking-widest" style={{ fontFamily: "'Lora', serif", color: colors.accent }}>
              Mi Filosofía
            </h2>

            {/* Video pequeño – ajustado a más compacto */}
            <div className="mx-auto max-w-xs md:max-w-sm lg:max-w-md">
              <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl border-4 border-[#d4a017]/50">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/8vK125i-ctk?rel=0"
                  title="Filosofía Eduardo Montalvo Reyes"
                  allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              </div>
            </div>

            {/* Texto (sin cambios) */}
            <div className="prose prose-xl max-w-none text-gray-300 leading-relaxed space-y-6 bg-[#1e293b] p-10 rounded-2xl border border-[#334155]">
              <p>
                Soy Licenciado en Derecho por la UNAM y maestrante en Derecho Laboral, ejerciendo activamente como abogado litigante independiente. Esta dualidad me permite trasladar la realidad de los juzgados y la praxis jurídica directamente al aula, fomentando en los estudiantes un pensamiento crítico, ético y, sobre todo, práctico.
              </p>

              <p>
                A lo largo de mi trayectoria, me he especializado en el diseño de planes de estudio personalizados mediante herramientas de mi autoría: los "Guiones de Cátedra" y "Temarios Temáticos". Estos instrumentos garantizan un control riguroso de los contenidos, una administración del tiempo optimizada y una dinámica grupal de excelencia. Asimismo, soy un convencido de que la Inteligencia Artificial debe integrarse a la educación como un auxiliar estratégico bajo principios de ética profesional.
              </p>

              <p className="italic">
                Mi objetivo es aportar la "nueva inercia" que la docencia exige: rigor técnico-teórico con un enfoque humano. Mi metodología es pragmática; implemento proyectos de unidad donde el alumno someta la teoría a la prueba de la realidad, culminando en un Proyecto Integrador Final que asegura la comprensión total del programa aplicado al entorno diario.
              </p>

              <blockquote className="border-l-4 border-[#d4a017] pl-8 py-6 my-10 bg-[#0f172a]/50 italic text-2xl">
                "No concibo la docencia como un acto de mera transmisión de datos, sino como un ejercicio de responsabilidad humana y jurídica. Mi compromiso nace en las planeaciones académicas buscando la perfección y se materializa en el aula, donde busco romper el esquema de la educación fría para mostrar la realidad tal cual es: cruel y compleja, pero transformable. Mi metodología es el pragmatismo absoluto; diseño estructuras que obligan al alumno a enfrentarse a la práctica real, porque el error en el aula es una lección, pero el error en la vida tiene un peso que marca. Enseño desde mis aciertos y desde las cicatrices de mis errores, con la esperanza de que mis estudiantes no carguen con mis mismos pesos. Decido darlo todo por ellos, porque la bondad y la exigencia técnica son la única vía para formar expertos en la ley, pero sobre todo, íntegros en su humanidad."
              </blockquote>

              <p className="italic">
                Agradezco de antemano el tiempo dedicado a mi propuesta y quedo a su disposición para una entrevista.
              </p>

              <p className="text-center font-bold mt-10">
                Atentamente,<br />
                Lic. Eduardo Montalvo Reyes<br />
                Abogado Litigante y Catedrático
              </p>

              <p className="text-center mt-6">
                Especialización de Cátedra: Derecho Constitucional y Amparo • Laboral y Seguridad Social • Mercantil • Civil • Epistemología • Ética.
              </p>
            </div>
          </div>
        )}

        {/* Otras secciones pendientes */}
      </main>

      <footer className="text-center py-6 text-sm border-t border-[#334155]" style={{ color: colors.textDark }}>
        Licenciado en Derecho, Maestrante en Derecho y Profesor | Todos los derechos reservados ©2026
      </footer>
    </div>
  );
}
