import React from 'react';

export default function Filosofia() {
  return (
    <div className="animate-fade-in space-y-12">
      <div className="bg-[#1e293b] p-8 md:p-16 rounded-[3rem] border border-[#d4a017]/10 shadow-2xl">
        <h2 className="text-3xl md:text-5xl font-serif font-bold text-center mb-12" style={{ color: '#d4a017' }}>Mi Filosofía</h2>
        <div className="flex flex-col md:flex-row gap-10 items-center mb-16 pb-12 border-b border-white/5">
          <div className="w-40 md:w-56 flex-shrink-0">
            <div className="relative aspect-[9/16] rounded-2xl overflow-hidden border-2 border-[#d4a017]">
              <iframe className="absolute inset-0 w-full h-full" src="https://www.youtube.com/embed/8vK125i-ctk" allowFullScreen></iframe>
            </div>
          </div>
          <div className="flex-1">
            <p className="text-lg md:text-2xl font-serif italic font-light leading-tight text-center md:text-left" style={{ color: '#d4a017' }}>
              “La enseñanza y la tecnología deben ir de la mano, complementándose; mas nunca, evitarse.”
            </p>
          </div>
        </div>
        <div className="space-y-8 text-gray-100 text-base md:text-lg font-light leading-relaxed text-justify">
          <p>Soy Licenciado en Derecho por la UNAM y maestrante en Derecho Laboral, ejerciendo activamente como abogado litigante independiente. Esta dualidad me permite trasladar la realidad de los juzgados y la praxis jurídica directamente al aula, fomentando en los estudiantes un pensamiento crítico, ético y, sobre todo, práctico.</p>
          <p>A lo largo de mi trayectoria, me he especializado en el diseño de planes de estudio personalizados mediante herramientas de mi autoría: los "Guiones de Cátedra" y "Temarios Temáticos". Estos instrumentos garantizan un control riguroso de los contenidos, una administración del tiempo optimizada y una dinámica grupal de excelencia. Asimismo, soy un convencido de que la Inteligencia Artificial debe integrarse a la educación como un auxiliar estratégico bajo principios de ética profesional.</p>
          <p>Mi objetivo es aportar la "nueva inercia" que la docencia exige: rigor técnico-teórico con un enfoque humano. Mi metodología es pragmática; implemento proyectos de unidad donde el alumno someta la teoría a la prueba de la realidad, culminando en un Proyecto Integrador Final que asegura la comprensión total del programa aplicado al entorno diario.</p>
          <div className="py-8 my-10 border-y border-[#d4a017]/20">
            <p className="font-serif italic text-lg md:text-xl font-light text-gray-200 text-justify">
              "No concibo la docencia como un acto de mera transmisión de datos, sino como un ejercicio de responsabilidad humana y jurídica. Mi compromiso nace en las planeaciones academicas buscando la perfección y se materialización en el aula, donde busco romper el esquema de la educación fría para mostrar la realidad tal cual es: cruel y compleja, pero transformable. Mi metodología es el pragmatismo absoluto; diseño estructuras que obligan al alumno a enfrentarse a la práctica real, porque el error en el aula es una lección, pero el error en la vida tiene un peso que marca. Enseño desde mis aciertos y desde las cicatrices de mis errores, con la esperanza de que mis estudiantes no carguen con mis mismos pesos. Decido darlo todo por ellos, porque la bondad y la exigencia técnica son la única vía para formar expertos en la ley, pero sobre todo, íntegros en su humanidad."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}