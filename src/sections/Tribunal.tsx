import React from 'react';
import { ChevronLeft } from 'lucide-react';

// Imports de subcomponentes (ajusta si tus nombres son diferentes)
import CodigoNormativo from './Tribunal/CodigoNormativo';
import ControlConvencionalidad from './Tribunal/ControlConvencionalidad';
import GestionExpedientes from './Tribunal/GestionExpedientes';
import MaterialVisual from './Tribunal/MaterialVisual';
import PracticaJuridica from './Tribunal/PracticaJuridica';
import PraxisSecretarial from './Tribunal/PraxisSecretarial';

interface TribunalProps {
  setActiveTab: (tab: string) => void;
  subTab?: string | null; // opcional
  setSubTab?: (tab: string | null) => void; // opcional
}

export default function Tribunal({ setActiveTab, subTab, setSubTab }: TribunalProps) {
  return (
    <div className="animate-fade-in space-y-12">
      {subTab ? (
        // Vista de subpestañas
        <div className="animate-fade-in">
          <button
            onClick={() => setSubTab?.(null)}
            className="flex items-center gap-2 text-[#d4a017] uppercase text-xs font-bold mb-8 hover:text-white"
          >
            <ChevronLeft size={16} /> Volver a Tribunal Escolar
          </button>

          {subTab === 'codigo-normativo' && <CodigoNormativo />}
          {subTab === 'control-convencionalidad' && <ControlConvencionalidad />}
          {subTab === 'gestion-expedientes' && <GestionExpedientes />}
          {subTab === 'material-visual' && <MaterialVisual />}
          {subTab === 'practica-juridica' && <PracticaJuridica />}
          {subTab === 'praxis-secretarial' && <PraxisSecretarial />}
        </div>
      ) : (
        // Vista principal con encabezado y cards
        <>
          {/* Encabezado con Video */}
          <div className="flex flex-col lg:flex-row gap-12 items-center bg-[#1e293b] p-8 md:p-12 rounded-[3rem] border border-[#d4a017]/20 shadow-2xl">
            <div className="w-full lg:w-1/2 text-center lg:text-left space-y-6">
              <h2 className="text-4xl md:text-6xl font-serif font-bold leading-tight" style={{ color: '#d4a017' }}>
                TRIBUNAL <br/> ESCOLAR
              </h2>
              <div className="space-y-4 text-gray-100 text-sm md:text-base font-light leading-relaxed text-justify">
                <p>
                  La educación no es la simple transmisión de datos, sino la arquitectura del pensamiento crítico. Mi labor docente se ha centrado en transformar el aula en un laboratorio de realidad, donde el alumno de Licenciatura practica como profesional y el alumno de Bachillerato construye su criterio como ciudadano. Este portafolio es la prueba tangible de una metodología basada en el rigor, la actualización constante y la pasión por la excelencia.
                </p>
                <p>
                  En esta sección se evidencia la transformación de la teoría jurídica en praxis real. Para ello, diseñé expedientes de juicios simulados, completos y personalizados. Los formatos fueron elaborados con apego a la realidad, de modo que los alumnos no estudian el proceso; lo viven desde la posición de las partes y del órgano jurisdiccional.
                </p>
                <p>
                  El objetivo es que el estudiante se forme como Licenciado en Derecho enfrentando en clase la misma dinámica que tendría como profesionista, desarrollando competencias de análisis, argumentación y resolución en un entorno académico que reproduce la práctica jurídica.
                </p>
                <p>
                  Creación de un ecosistema jurídico autónomo en el aula: se establece un marco de legalidad propio que obliga al alumno a la profesionalización inmediata mediante el uso de tecnología y técnica legislativa.
                </p>
              </div>
            </div>
            <div className="w-full lg:w-1/2 flex justify-center">
              <div className="relative aspect-[9/16] w-full max-w-[280px] rounded-3xl overflow-hidden border-4 border-[#d4a017]/30 shadow-2xl">
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src="https://www.youtube.com/embed/VleKtRNId0o"
                  title="Tribunal Escolar"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>

          {/* Grid de Apartados */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-8">
            {[
              {
                id: 'practica-juridica',
                title: 'PRÁCTICA JURÍDICA',
                desc: 'Simulación integral desde el escrito inicial de demanda hasta la sentencia definitiva. Incluye la gestión de audiencias y acuerdos.',
                icon: <Gavel />
              },
              {
                id: 'control-convencionalidad',
                title: 'CONTROL DE CONVENCIONALIDAD Y AMPARO',
                desc: 'Ejercicio de impugnación de calificaciones mediante sentencias interlocutorias, obligando al dominio del principio de definitividad.',
                icon: <Scale />
              },
              {
                id: 'praxis-secretarial',
                title: 'PRAXIS SECRETARIAL',
                desc: 'Compendio de promociones, resoluciones y acuerdos personalizados para el alumno en su rol y formación como abogado dentro del aula.',
                icon: <FileSignature />
              },
              {
                id: 'codigo-normativo',
                title: 'CÓDIGO NORMATIVO ESTUDIANTIL',
                desc: 'Cuerpo legal que rige el aula. Establece figuras de derecho real: Oficialía de Partes, Sistema de Folios, términos perentorios y procesos de reforma legislativa.',
                icon: <Book />
              },
              {
                id: 'material-visual',
                title: 'MATERIAL VISUAL',
                desc: 'Instrucción oral estratégica donde se desglosa el escrito inicial de demanda y la fundamentación de pretensiones bajo rigor legislativo.',
                icon: <PlayCircle />
              },
              {
                id: 'gestion-expedientes',
                title: 'SISTEMA DE GESTIÓN DE EXPEDIENTES',
                desc: 'Metodología de control documental: nomenclatura de folios personalizada y protocolos de recepción que simulan la realidad de los juzgados.',
                icon: <FolderKanban />
              }
            ].map((item, index) => (
              <div
                key={index}
                className="bg-[#1e293b] p-8 rounded-2xl border border-white/5 flex flex-col h-full hover:border-[#d4a017]/50 transition-all group"
              >
                <div className="text-[#d4a017] mb-5 transform group-hover:scale-110 transition-transform">
                  {React.cloneElement(item.icon, { size: 32 })}
                </div>
                <h3 className="font-serif font-bold text-lg mb-4 leading-tight text-white uppercase tracking-wider">
                  {item.title}
                </h3>
                <p className="text-xs font-light text-justify text-gray-400 mb-8 leading-relaxed">
                  {item.desc}
                </p>
                <button
                  onClick={() => setSubTab?.(item.id)}
                  className="w-full py-3 mt-auto bg-transparent border border-[#d4a017] text-[#d4a017] font-bold text-[10px] uppercase tracking-[0.2em] rounded-lg hover:bg-[#d4a017] hover:text-black transition-all"
                >
                  Consultar Sección
                </button>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
