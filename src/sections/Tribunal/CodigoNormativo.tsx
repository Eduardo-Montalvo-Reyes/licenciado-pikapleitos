import React from 'react';
import { ShieldCheck, ExternalLink } from 'lucide-react';

export default function CodigoNormativo() {
  return (
    <div className="animate-fade-in min-h-screen p-8 md:p-24 bg-[#374151] text-[#f9fafb]">
      <div className="max-w-4xl mx-auto">
        <ShieldCheck className="text-[#d4a017] mb-8" size={50} />
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-[#d4a017] mb-12 uppercase">
          El Código Normativo Estudiantil: Cimentando la Soberanía Jurídica
        </h1>
        <div className="space-y-8 text-lg md:text-xl leading-relaxed text-justify font-light">
          <p>Este cuerpo normativo de autoría propia no es un simple reglamento escolar, es la constitución de un Estado de Derecho dentro del aula diseñado para que el alumno deje de hablar "de oídas" y comience a vivir bajo la premisa de que en el Derecho, si no está fundamentado, no existe. Al establecer procesos reales como la caducidad, la prescripción y el uso de un boletín judicial, transformo el salón en un juzgado vivo donde la jerarquía del "porque yo lo digo" se rompe, obligándome a mí, como autoridad, a someterme a la misma norma que el discente. Es una herramienta de soberanía intelectual que exige el uso de tecnicismos y fundamentación bajo la legislación vigente, elevando lo académico a un nivel de ejercicio profesional constante.</p>
          <p>Lo que verdaderamente nos desmarca es la democracia académica plasmada en la facultad de creación, derogación y reforma de la norma; otorgar al estudiante el poder legislativo sobre su propia realidad es plantar la semilla de un pensamiento crítico que nadie podrá arrancarles. A través del sistema de folios únicos e identidad procesal, el alumno deja de ser un número en una lista para convertirse en el titular de su propio destino jurídico, aprendiendo que la regla clara y el respeto mutuo a la ley es lo único que nos salva de ser "viles empleados". Este Código es mi apuesta por una arquitectura social donde formamos ciudadanos capaces de cuestionar y mejorar su entorno, recordándoles que el Derecho es, ante todo, un instrumento de libertad y orden.</p>
        </div>
        <button 
          onClick={() => window.open('https://drive.google.com/file/d/1zi3g0AD_Drhk1E8sOt2ys5tQXveAz8um/view?usp=sharing', '_blank')} 
          className="mt-16 py-4 px-10 border border-[#d4a017] text-[#d4a017] font-bold uppercase tracking-widest hover:bg-[#d4a017] hover:text-[#374151] transition-all flex items-center gap-3"
        >
          CONSULTAR CÓDIGO <ExternalLink size={18}/>
        </button>
      </div>
    </div>
  );
}