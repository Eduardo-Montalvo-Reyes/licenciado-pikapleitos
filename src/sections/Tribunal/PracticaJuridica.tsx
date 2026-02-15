import React from 'react';
import { Gavel, ExternalLink } from 'lucide-react';

export default function PracticaJuridica() {
  return (
    <div className="animate-fade-in min-h-screen p-8 md:p-24 bg-[#374151] text-[#f9fafb]">
      <div className="max-w-4xl mx-auto border-l-4 border-[#d4a017] pl-12">
        <Gavel className="text-[#d4a017] mb-8" size={50} />
        <h1 className="text-4xl md:text-6xl font-serif font-bold text-[#d4a017] mb-12 uppercase tracking-tight">
          La Insurgencia Académica: Ontología del Hacer para Ser
        </h1>
        <div className="space-y-8 text-lg md:text-xl leading-relaxed text-justify font-light">
          <p>Este método no es una simple tarea, es una insurgencia académica diseñada para romper la pasividad de un sistema que fabrica empleados; es una simulación de alto riesgo controlado donde el alumno deja de leer la ley para convertirse en su operador. Aquí, el aprendizaje no es teoría literaria, sino la ontología del hacer para ser, donde el peso de un folio y la responsabilidad de un acuerdo otorgan esas horas de vuelo que protegen al futuro abogado contra la negligencia, vacunándolo con formación antes de que el error tenga un costo humano real.</p>
          <p>Mantengo este esfuerzo, aun frente a la incomprensión de quienes enseñan para el viernes, porque mi compromiso es formar soberanos y no llenar vacantes en un mercado que ya está saturado de obediencia. Cada expediente y cada folio personalizado es un acto de dignidad profesional que busca rescatar a ese pequeño grupo que decide creer; por ellos vale la pena no bajar esta bandera, pues mi labor es ser un arquitecto de realidades que enseña que la firma de un abogado tiene peso, honor y la fuerza necesaria para sostener el Estado de Derecho.</p>
        </div>
        <button 
          onClick={() => window.open('https://drive.google.com/drive/folders/1Q8yO5anTtLpOnVL4JDhsyUDo4I7VSz4E?usp=sharing', '_blank')} 
          className="mt-16 py-4 px-10 border border-[#d4a017] text-[#d4a017] font-bold uppercase tracking-widest hover:bg-[#d4a017] hover:text-[#374151] transition-all flex items-center gap-3"
        >
          CONSULTAR REPOSITORIO <ExternalLink size={18}/>
        </button>
      </div>
    </div>
  );
}