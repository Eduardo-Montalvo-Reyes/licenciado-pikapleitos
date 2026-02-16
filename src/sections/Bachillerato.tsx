import React from 'react';
import { ChevronLeft } from 'lucide-react';

// Imports CORRECTOS: con la subcarpeta Bachillerato/ porque los archivos están ahí dentro
import Historia from './Bachillerato/Historia';
import Etica from './Bachillerato/Etica';
import Taller from './Bachillerato/Taller';
import Actividades from './Bachillerato/Actividades';
import Proyectos from './Bachillerato/Proyectos';  // plural "Proyectos" (tu archivo se llama Proyectos.tsx)

export default function Bachillerato({ subTab, setSubTab }) {
  return (
    <div className="animate-fade-in space-y-10">
      {!subTab ? (
        <>
          <div className="text-center space-y-6">
            <h2 className="text-4xl md:text-5xl font-serif font-bold" style={{ color: '#d4a017' }}>
              DOCENCIA BACHILLERATO
            </h2>
            <div className="flex justify-center py-6">
              <div className="w-full max-w-[320px] aspect-[9/16] rounded-3xl overflow-hidden border-4 border-[#d4a017]/30">
                <iframe className="w-full h-full" src="https://www.youtube.com/embed/_3VZPyppNW8" allowFullScreen></iframe>
              </div>
            </div>
            <p className="max-w-4xl mx-auto font-light text-justify text-lg leading-relaxed">
              Mi labor como docente en el nivel medio superior trasciende la simple instrucción académica; se enfoca en la formación integral de ciudadanos con criterio y estructura. A lo largo de mi trayectoria, he rediseñado los programas de Ética, Historia y Taller de Lectura para dotarlos de un rigor profesional que prepare al alumno para los desafíos de la vida universitaria.
              <br/><br/>
              Sin embargo, considero que mi mayor logro y mi más alta carta de recomendación no reside en los documentos, sino en el testimonio de mis estudiantes. El reconocimiento de los alumnos, quienes al término del curso han manifestado haber descubierto un genuino amor por materias que antes consideraban áridas, es la prueba definitiva de que la pasión y el método que imprimo en el aula logran transformar el conocimiento en una herramienta de vida.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-10">
            {[
              { id: 'historia', label: 'HISTORIA', icon: <Map />, desc: 'Diseño técnico-pedagógico de autoría propia. Corte comparativo que sitúa el devenir nacional dentro de la narrativa universal.' },
              { id: 'etica', label: 'ÉTICA', icon: <Smile />, desc: 'Diseño técnico-pedagógico de autoría propia. Centrado en la Teoría de la Calificación del Acto y la Phronesis aristotélica.' },
              { id: 'taller', label: 'TALLER DE REDACCIÓN', icon: <BookOpen />, desc: 'Diseño técnico-pedagógico de autoría propia. Basado en la Ingeniería del Pensamiento y gradación de objetividad.' },
              { id: 'actividades', label: 'ACTIVIDADES DE REFUERZO', icon: <Activity />, desc: 'Actividades diseñadas para que el alumno aplique el conocimiento del día a día en dilemas reales.' },
              { id: 'proyectos', label: 'PROYECTO FINAL', icon: <Target />, desc: 'Documento que certifica la culminación del proceso de aprendizaje. Exige coherencia y linealidad absoluta.' },
            ].map((item) => (
              <div key={item.id} className="bg-[#1e293b] p-6 rounded-2xl border border-white/5 flex flex-col h-full hover:border-[#d4a017]/50 transition-all">
                <div className="text-[#d4a017] mb-4">{item.icon}</div>
                <h3 className="font-serif font-bold text-xl mb-3">{item.label}</h3>
                <p className="text-xs font-light text-justify text-gray-400 mb-6">{item.desc}</p>
                <button onClick={() => setSubTab(item.id)} className="w-full py-3 mt-auto bg-[#d4a017] text-black font-bold text-xs uppercase tracking-widest rounded-lg hover:bg-white transition-colors">
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
          {subTab === 'historia' && <Historia />}
          {subTab === 'etica' && <Etica />}
          {subTab === 'taller' && <Taller />}
          {subTab === 'actividades' && <Actividades />}
          {subTab === 'proyectos' && <Proyectos />}
        </div>
      )}
    </div>
  );
}