import React from 'react';

export default function ImplementacionEpistemologica() {
  return (
    <div className="animate-fade-in min-h-screen p-8 md:p-16 bg-[#374151] text-[#f9fafb]">
      <div className="max-w-5xl mx-auto">
        {/* Título grande con margen completo */}
        <h1 className="text-4xl md:text-6xl font-serif font-bold text-[#d4a017] mb-16 uppercase tracking-widest text-center">
          IMPLEMENTACION EPISTEMOLÓGICA
        </h1>

        {/* Texto debajo del título */}
        <div className="space-y-10 text-lg md:text-xl font-light leading-relaxed text-justify max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#d4a017] mb-8">
            La importancia de la planificación
          </h2>

          <p>
            El diseño de un modelo de intervención con la finalidad de rescatar la formación de un grupo de estudiantes que se encontraba desorientado ante la abstracción teórica de la Epistemología. Implica sintetizar un programa extenso en un tiempo récord, sin sacrificar en ningún momento el rigor académico.
          </p>

          <p>
            Mi enfoque no fue enseñar conceptos para ser memorizados, sino herramientas para ser utilizadas. Partiendo de mi experiencia en la praxis jurídica donde la validez de la verdad y la detección de falacias son cuestiones de vida o muerte profesional, desarrollé un plan de trabajo intensivo de seis sesiones. Logré transmutar la incertidumbre en un sistema sólido de pensamiento, basado en lo que denominé los '4 Pilares Epistemológicos'.
          </p>

          <p>
            El resultado no fue solo un grupo que aprobó una materia, sino una comunidad de futuros profesionistas que aprendieron a cuestionar el origen, la naturaleza y los límites de su propio saber. Este dossier es el testimonio de que, con la metodología adecuada y una visión orientada a la realidad, es posible convertir la filosofía en una ventaja competitiva para cualquier profesionista.
          </p>
        </div>

        {/* Link al final */}
        <div className="text-center mt-20">
          <a
            href="https://drive.google.com/file/d/16n39rBGGcYogA-Bi0wT-Ko18RUrXJHRN/view?usp=sharing"
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