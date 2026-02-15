import React from 'react';
import { Scale, ExternalLink } from 'lucide-react';

export default function ControlConvencionalidad() {
  return (
    <div className="animate-fade-in min-h-screen p-8 md:p-24 bg-[#374151] text-[#f9fafb]">
      <div className="max-w-4xl mx-auto border-t-4 border-[#d4a017] pt-12">
        <Scale className="text-[#d4a017] mb-8" size={50} />
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-[#d4a017] mb-12 uppercase">
          El Amparo como Defensa de la Libertad: Una Escalera de Resistencia Judicial
        </h1>
        <div className="space-y-8 text-lg md:text-xl leading-relaxed text-justify font-light">
          <p>El Juicio de Amparo en este espacio no se limita a la memorización de preceptos constitucionales, sino que se vive como una auténtica lección de supervivencia profesional. Mientras el sistema tradicional forma sujetos reactivos que llenan formatos, mi método lanza al alumno al océano del control de convencionalidad, obligándolo a entender que el Derecho no es una línea recta, sino una escalera de resistencia. Al transformar el aula en un ecosistema que recorre desde el Juzgado de Primera Instancia hasta los Tribunales Colegiados, el estudiante aprende a sufrir el del principio de definitividad, comprendiendo que la justicia federal no es un botón de pánico, sino un recurso extraordinario que exige perfección técnica y el agotamiento previo de cada trinchera legal.</p>
          <p>Mi labor como Juez de Formación es entregar armas jurídicas en lugar de simples títulos, sustituyendo la nota numérica por una sentencia que se gana o se pierde con argumentos. En este tribunal, el error procesal se traduce en una sentencia interlocutoria que refleja la realidad del juzgado, enseñando al alumno que un descuido técnico en el aula es una lección, pero en la vida real es el costo de la libertad o el patrimonio de un cliente. Sigo adelante con este nivel de exigencia porque no busco formar empleados del sistema, sino estrategas de la Constitución que sepan exactamente cuándo la autoridad vulnera un derecho y tengan el callo profesional para obligarla a retroceder, convirtiendo cada expediente en un mapa de libertad.</p>
        </div>
        <button 
          onClick={() => window.open('https://drive.google.com/drive/folders/1twihlQCNkitTvsT22E1112yHrnw_lccR?usp=sharing', '_blank')} 
          className="mt-16 py-4 px-10 border border-[#d4a017] text-[#d4a017] font-bold uppercase tracking-widest hover:bg-[#d4a017] hover:text-[#374151] transition-all flex items-center gap-3"
        >
          CONSULTAR AMPARO <ExternalLink size={18}/>
        </button>
      </div>
    </div>
  );
}