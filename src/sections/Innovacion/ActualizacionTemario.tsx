import React from 'react';

export default function ActualizacionTemario() {
  return (
    <div className="animate-fade-in min-h-screen p-8 md:p-16 bg-[#374151] text-[#f9fafb]">
      <div className="max-w-5xl mx-auto">
        {/* Título grande con margen completo */}
        <h1 className="text-4xl md:text-6xl font-serif font-bold text-[#d4a017] mb-16 uppercase tracking-widest text-center">
          ACTUALIZACIÓN DE TEMARIO
        </h1>

        {/* Texto debajo del título */}
        <div className="space-y-10 text-lg md:text-xl font-light leading-relaxed text-justify max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#d4a017] mb-8">
            Porque la Innovación y la actualización siempre van de la mano
          </h2>

          <p>
            La enseñanza del nivel licenciatura en el siglo XXI no puede limitarse a la simple exégesis o memorización de conceptos que cambian con la misma rapidez con la que se imprimen. El presente temario de Introducción al Estudio del Derecho como ejemplo, ha sido diseñado bajo una premisa fundamental: la formación de juristas críticos, capaces de operar en un entorno globalizado y bajo el paradigma de los Derechos Humanos.
          </p>

          <p>
            La estructura de este programa busca romper con el tradicionalismo estático para ofrecer al alumno una visión dinámica de la justicia. Mientras que la doctrina clásica nos hereda la base conceptual indispensable —como la clasificación de las normas y la teoría del Estado—, la realidad judicial contemporánea nos exige integrar herramientas de vanguardia desde el primer día de clases. Por ello, este contenido programático trasciende el aula para conectarse con la trinchera del litigio y la administración pública.
          </p>
        </div>

        {/* Link al final */}
        <div className="text-center mt-20">
          <a
            href="https://drive.google.com/file/d/1d-XhmVynucr2qjXkn0i0EM1Ifm0tzbLH/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-12 py-5 bg-[#d4a017] text-black font-black uppercase tracking-[0.2em] rounded-xl text-sm hover:scale-105 transition-all shadow-lg"
          >
            CONOCER MÁS
          </a>
        </div>
      </div>
    </div>
  );
}