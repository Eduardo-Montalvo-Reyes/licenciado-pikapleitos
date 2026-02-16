import React from 'react';

export default function ProyectoFinal() {
  return (
    <div className="animate-fade-in min-h-screen p-8 md:p-16 bg-[#374151] text-[#f9fafb]">
      <div className="max-w-5xl mx-auto">
        {/* Título grande con margen completo */}
        <h1 className="text-4xl md:text-6xl font-serif font-bold text-[#d4a017] mb-16 uppercase tracking-widest text-center">
          PROYECTO FINAL DEL CURSO (EJEMPLO)
        </h1>

        {/* Texto debajo del título */}
        <div className="space-y-10 text-lg md:text-xl font-light leading-relaxed text-justify max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#d4a017] mb-8">
            La Proyeccion del Temario a la Practica
          </h2>

          <p>
            La implementación de proyectos finales de alto nivel técnico y analítico responde a una convicción fundamental: la educación no debe ser un proceso de acumulación de datos, sino una capacitación para la vida. Al diseñar estos instrumentos, busco romper con la inercia de la enseñanza tradicional que se limita a la memorización, para transitar hacia una "Soberanía Intelectual" donde el alumno sea capaz de aplicar la teoría en escenarios de realidad compleja. Mi enfoque innova al integrar la normatividad ortográfica y el dominio de prototipos textuales con la resolución de conflictos reales, obligando al estudiante a abandonar el lenguaje coloquial para adoptar un "Modo Formal" que le otorgue autoridad y precisión en su comunicación. Esta metodología es necesaria en cualquier institución que pretenda formar no solo egresados, sino sujetos históricos y ciudadanos críticos capaces de intervenir en su comunidad con responsabilidad ética.
          </p>

          <p>
            Lo que espero conseguir con este nivel de exigencia es que el estudiante reconozca que su palabra tiene consecuencias legales, sociales y morales. Al solicitar proyectos que exigen un maquetado profesional estricto, una integridad académica a prueba de plagio y una argumentación lógica fundamentada, estoy estableciendo un estándar de excelencia que el mundo profesional les demandará fuera del aula. Mi intención es que el alumno experimente el orgullo del esfuerzo con sentido, transformando el aprendizaje en una habilidad de vida que le permita convencer, resolver y decidir con prudencia. Aunque este camino represente un esfuerzo extra para mí como docente en el diseño y evaluación de cada expediente, es un compromiso ineludible con la calidad educativa. En última instancia, busco que cada joven egrese con una columna vertebral ética y mental sólida, demostrando que el saber debe estar siempre respaldado por la experiencia y el profesionalismo.
          </p>
        </div>

        {/* Link al final */}
        <div className="text-center mt-20">
          <a
            href="https://drive.google.com/file/d/1gsMeGRcHXzWjRGahmQu15dWzqDzzRsQs/view?usp=sharing"
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