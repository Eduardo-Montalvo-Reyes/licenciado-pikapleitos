import React from 'react';

export default function Actividades() {
  return (
    <div className="space-y-10">
      <h2 className="text-4xl font-serif font-bold text-[#d4a017] text-center uppercase tracking-wide">
        ACTIVIDADES DE REFUERZO
      </h2>
      <div className="bg-[#1e293b] p-8 md:p-12 rounded-3xl border border-[#d4a017]/10 shadow-2xl mx-auto max-w-5xl">
        <p className="text-xl md:text-2xl font-serif italic font-light leading-relaxed text-center text-[#d4a017] mb-10">
          La Formación del Criterio y la Responsabilidad Intelectual
        </p>
        <div className="space-y-8 text-gray-100 text-base md:text-lg font-light leading-relaxed text-justify">
          <p>
            Como docente, parto de la convicción de que la teoría sin ejecución es letra muerta; por ello, mis proyectos no son cargas administrativas, sino filtros diseñados para transformar el "yo creo" en una responsabilidad fundamentada que otorgue peso a la palabra y honor a la firma del estudiante. En un entorno saturado de información sin filtros, me niego a ser un instructor que solo transmite datos o solicita resúmenes que terminan en copias vacías; elijo ser un guía exigente que utiliza dilemas y casos prácticos como "simuladores de vuelo" para la realidad profesional. Al incomodar la zona de confort del alumno, sustituyo el entrenamiento para la obediencia por un entrenamiento para la soberanía intelectual, asegurando que cada joven descubra una voz propia y valiosa que lo inmunice contra la mediocridad y la automatización de tareas.
          </p>
          <p>
            Mi meta fundamental es que el alumno no solo "pase" una asignatura, sino que despierte intelectualmente y construya una columna vertebral ética y mental sólida que le permita actuar con integridad ante los desafíos del futuro. Al exigir justificaciones profundas y resoluciones personales, devuelvo al estudiante la propiedad de su pensamiento y garantizo la honestidad académica, pues es imposible plagiar una reflexión que nace del contraste entre el criterio propio y la realidad externa. Asumo el desgaste de este método porque creo en la nobleza del potencial humano y me niego a tratar a mis alumnos como recipientes vacíos; busco formar ciudadanos críticos, no manipulables, que sientan el orgullo de decir "esto lo construí yo", integrando la prudencia y la sabiduría práctica como brújulas definitivas para su vida adulta.
          </p>
        </div>
        <div className="text-center mt-12">
          <a
            href="https://drive.google.com/file/d/1g-hOJNUSJBIxP_ieqh0cL3ex_EpzmpDu/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-12 py-5 bg-[#d4a017] text-black font-black uppercase tracking-[0.2em] rounded-xl text-sm hover:scale-105 transition-all shadow-lg"
          >
            MUESTRA
          </a>
        </div>
      </div>
    </div>
  );
}
