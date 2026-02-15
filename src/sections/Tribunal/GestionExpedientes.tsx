import React from 'react';
import { FolderKanban, ExternalLink } from 'lucide-react';

export default function GestionExpedientes() {
  return (
    <div className="animate-fade-in min-h-screen p-8 md:p-24 bg-[#374151] text-[#f9fafb]">
      <div className="max-w-4xl mx-auto border-r-4 border-[#d4a017] pr-12">
        <FolderKanban className="text-[#d4a017] mb-8" size={50} />
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-[#d4a017] mb-12 uppercase text-right">
          La Gestión de Expedientes: El Formalismo que Sostiene la Justicia
        </h1>
        <div className="space-y-8 text-lg md:text-xl leading-relaxed text-justify font-light">
          <p>La figura del Secretario en este Tribunal no es un simple cargo administrativo, sino el sistema de venas y arterias que otorga orden jurídico a la simulación; es el guardián que enseña al alumno que, en el Derecho, la forma es fondo. Mientras el sistema tradicional se limita a calificar con una cifra fría en una lista, mi metodología utiliza instrumentos jurídicos reales —como Acuerdos de Admisión y Resoluciones de Apelación— para que el estudiante comprenda que no basta con "ganar el debate", sino que debe saber gestionar el proceso. Esta actividad es vital porque personaliza el éxito y el error, obligando al alumno a reconocer que una falta de personalidad jurídica puede ser la diferencia entre la victoria procesal o una derrota técnica que ninguna retórica puede salvar.</p>
          <p>Asumo el desgaste de esta maestría en la personalización porque me niego a ser un "maestro de gis" que entrega resultados sin fundamento; prefiero convertir una evaluación en una tragedia o victoria procesal que el alumno jamás olvidará. Al integrar la gestión de la personalidad y el uso de recursos de impugnación, estoy creando un ecosistema donde no hay espacio para el "vil empleado", pues el sistema mismo los obliga a ser profesionales desde el primer acuerdo. Cada sentencia que redacto es un acto de resistencia para que mis alumnos, al salir al mundo real, no sean simples gestores, sino formadores de derecho que comprendan que la disciplina documental es la columna vertebral de cualquier defensa legítima.</p>
        </div>
        <button 
          onClick={() => window.open('https://drive.google.com/drive/folders/19zugOindVccwY2B8-OVvZrxPWF0Du-OT?usp=sharing', '_blank')} 
          className="mt-16 py-4 px-10 border border-[#d4a017] text-[#d4a017] font-bold uppercase tracking-widest hover:bg-[#d4a017] hover:text-[#374151] transition-all flex items-center gap-3"
        >
          CONSULTAR EXPEDIENTES <ExternalLink size={18}/>
        </button>
      </div>
    </div>
  );
}