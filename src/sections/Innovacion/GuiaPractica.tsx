import React from 'react';

export default function GuiaPractica() {
  return (
    <div className="animate-fade-in min-h-screen p-8 md:p-16 bg-[#374151] text-[#f9fafb]">
      <div className="max-w-5xl mx-auto">
        {/* Título grande con margen completo */}
        <h1 className="text-4xl md:text-6xl font-serif font-bold text-[#d4a017] mb-16 uppercase tracking-widest text-center">
          GUÍA DE PRÁCTICA (EJEMPLO)
        </h1>

        {/* Texto debajo del título */}
        <div className="space-y-10 text-lg md:text-xl font-light leading-relaxed text-justify max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#d4a017] mb-8">
            Apoyo para la perfección de Temas
          </h2>

          <p>
            Esta Guía de Estudio nació en el aula, observando la necesidad de mis alumnos de conectar la teoría con la realidad. Las materias suelen presentarse como un laberinto de conceptos abstractos y lejanos, pero en mi práctica profesional he aprendido que es, en realidad, el activo más valioso de un experto: es su capacidad de validar la verdad y defender su criterio.
          </p>

          <p>
            Diseñé este material pensando exclusivamente en el estudiante de Psicología y Pedagogía. Mi objetivo fue derribar la barrera de la terminología árida para entregarles herramientas tácticas. Por ello, esta guía no les pide memorizar fechas o nombres, sino que los invita a convertirse en 'detectives del conocimiento' a través de casos reales, cuestionando lo que otros dan por hecho.
          </p>

          <p>
            He estructurado este documento con un ejemplo personal y real y sobre todo, bajo el rigor de los 4 Pilares Epistemológicos (Naturaleza, Origen, Validez y Límites) con un solo propósito: que el alumno deje de ser un espectador de la ciencia y se convierta en su protagonista. Porque un profesional que no sabe cuestionar cómo aprendió lo que sabe, está condenado a repetir errores ajenos. Esta guía es, ante todo, un compromiso con la formación de mentes críticas, capaces de enfrentar con seguridad los desafíos del campo laboral.
          </p>
        </div>

        {/* Link al final */}
        <div className="text-center mt-20">
          <a
            href="https://drive.google.com/file/d/1_DK-o6WDRdsw30R_QfmJXHKJu28CRrhZ/view?usp=sharing"
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