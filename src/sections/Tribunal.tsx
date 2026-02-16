import React from 'react';
import { ChevronLeft, RefreshCw, Book, ClipboardList, Brain, FileText, Target } from 'lucide-react';

// Imports de TODAS las subpestañas (ya creadas)
import ActualizacionTemario from './Innovacion/ActualizacionTemario';
import TemarioTematico from './Innovacion/TemarioTematico';
import GuionCatedra from './Innovacion/GuionCatedra';
import ImplementacionEpistemologica from './Innovacion/ImplementacionEpistemologica';
import GuiaPractica from './Innovacion/GuiaPractica';
import ProyectoFinal from './Innovacion/ProyectoFinal';

export default function Innovacion({ subTab, setSubTab }) {
  return (
    <div className="animate-fade-in space-y-10">
      {!subTab ? (
        <>
          {/* Vista principal */}
          <div className="text-center space-y-6">
            <h2 className="text-4xl md:text-5xl font-serif font-bold" style={{ color: '#d4a017' }}>
              INNOVANDO LA ENSEÑANZA (Material pedagógico)
            </h2>
            <div className="flex justify-center py-6">
              <div className="w-full max-w-[320px] aspect-[9/16] rounded-3xl overflow-hidden border-4 border-[#d4a017]/30 shadow-2xl">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/IAq_sFBFboY"
                  title="Innovando la Enseñanza"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
            <p className="max-w-4xl mx-auto font-light text-justify text-lg leading-relaxed">
              Experto en el diseño e implementación de metodologías pedagógicas de alto impacto que vinculan la praxis jurídica real con la formación académica. Me he vuelto especialista en la formación técnica de profesionales del Derecho y nivel Bachillerato gracias al dominio de la Epistemología y la Ética como materias base de formación en la gestión de contenidos humanísticos y sociales con un enfoque crítico y pragmático. Superación de los planes oficiales mediante la redacción y elaboración de actividades reales que se viven en el día a día en el aula, profundización y explicación de temas que común mente se omiten. <i>Entiendo la docencia como una extensión de la justicia: formar ciudadanos que no solo posean el saber técnico, sino el criterio para aplicarlo con ética. Mi compromiso es con la excelencia académica y la formación integral, utilizando la tecnología como un puente y nunca como un reemplazo del juicio humano.</i>
            </p>
          </div>

          {/* Grid de las 6 cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-10">
            {[
              {
                id: 'actualizacion-temario',
                label: 'Actualización de Temario',
                icon: <RefreshCw />,
                desc: 'Actualización y robustecimiento de programas oficiales mediante la integración de doctrina contemporánea y casos de vanguardia.'
              },
              {
                id: 'temario-tematico',
                label: 'Temario Temático',
                icon: <Book />,
                desc: 'Estructura conceptual detallada por sesión: definición de conceptos clave, objetivos de aprendizaje, lecturas obligatorias y actividades específicas.'
              },
              {
                id: 'guion-catedra',
                label: 'Guión de Cátedra',
                icon: <ClipboardList />,
                desc: 'Diseño de ejecución pedagógica: crono-grama minuto a minuto de la clase, técnica de abordaje de conceptos y momentos de transición práctica.'
              },
              {
                id: 'implementacion-epistemologica',
                label: 'Implementacion Epistemologíca',
                icon: <Brain />,
                desc: 'Diseño de un plan de trabajo intensivo que garantiza el dominio de los 4 Pilares Epistemológicos (Naturaleza, Origen, Validez y Límites).'
              },
              {
                id: 'guia-practica',
                label: 'Guía de Practica (ejemplo)',
                icon: <FileText />,
                desc: 'Instrumento de autoría propia que utiliza la experiencia profesional y casuística real como método de enseñanza.'
              },
              {
                id: 'proyecto-final',
                label: 'Proyecto Final del Curso (ejemplo)',
                icon: <Target />,
                desc: 'Este proyecto representa la culminación del proceso de maduración intelectual del estudiante.'
              },
            ].map((item) => (
              <div
                key={item.id}
                className="bg-[#1e293b] p-6 rounded-2xl border border-white/5 flex flex-col h-full hover:border-[#d4a017]/50 transition-all"
              >
                <div className="text-[#d4a017] mb-4">{item.icon}</div>
                <h3 className="font-serif font-bold text-xl mb-3">{item.label}</h3>
                <p className="text-xs font-light text-justify text-gray-400 mb-6">{item.desc}</p>
                <button
                  onClick={() => setSubTab(item.id)}
                  className="w-full py-3 mt-auto bg-[#d4a017] text-black font-bold text-xs uppercase tracking-widest rounded-lg hover:bg-white transition-colors"
                >
                  CONOCER MÁS
                </button>
              </div>
            ))}
          </div>
        </>
      ) : (
        {/* Vista de subpestañas */}
        <div className="animate-fade-in">
          <button
            onClick={() => setSubTab(null)}
            className="flex items-center gap-2 text-[#d4a017] uppercase text-xs font-bold mb-8 hover:text-white"
          >
            <ChevronLeft size={16} /> Volver a Innovación
          </button>

          {subTab === 'actualizacion-temario' && <ActualizacionTemario />}
          {subTab === 'temario-tematico' && <TemarioTematico />}
          {subTab === 'guion-catedra' && <GuionCatedra />}
          {subTab === 'implementacion-epistemologica' && <ImplementacionEpistemologica />}
          {subTab === 'guia-practica' && <GuiaPractica />}
          {subTab === 'proyecto-final' && <ProyectoFinal />}
        </div>
      )}
    </div>
  );
}