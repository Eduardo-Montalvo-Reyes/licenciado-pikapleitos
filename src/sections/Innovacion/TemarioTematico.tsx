import React from 'react';

export default function TemarioTematico() {
  return (
    <div className="animate-fade-in min-h-screen p-8 md:p-16 bg-[#374151] text-[#f9fafb]">
      <div className="max-w-5xl mx-auto">
        {/* Título grande con margen completo */}
        <h1 className="text-4xl md:text-6xl font-serif font-bold text-[#d4a017] mb-16 uppercase tracking-widest text-center">
          TEMARIO TEMÁTICO
        </h1>

        {/* Texto debajo del título */}
        <div className="space-y-10 text-lg md:text-xl font-light leading-relaxed text-justify max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#d4a017] mb-8">
            La Garantia de la Enseñanza
          </h2>

          <p>
            Como titular de cualquier asignatura, comprendo la importancia de um desglose semanal no solo como una estructura cronológica, sino como la garantía técnica de mi ejercicio docente. La relevancia de gestionar la materia bajo este esquema temático responde a una visión personal sobre cómo debe formarse un profesionista hoy en día, basándome en los siguientes puntos:
          </p>

          <p>
            Control de Calidad en la Formación del Alumno: Adoptando la visión institucional y calendario vigente del mismo, suelo estructurar (como en este ejemplo de 20 sesiones) el temario para asegurar que el aprendizaje no sea azaroso. Al definir semana a semana los puntos clave que deben desarrollarse, garantizo que el contenido se cubra con la profundidad que la materia exige. Este desglose me permite supervisar que cada concepto esencial sea abordado, preguntado y ejercitado, evitando que queden lagunas que afecten el desempeño futuro del estudiante en la licenciatura.
          </p>

          <p>
            La Practicidad como Eje de la Clase: Mi criterio para integrar temas de vanguardia nace de la necesidad de conectar la teoría con la realidad que vivo como litigante. No enseño la materia como un concepto estático; la presento como una herramienta viva. Por ello, he incluido deliberadamente temas actualizados y de uso diaro, pues son los pilares que garantizan que el alumno aprenda el Derecho que se aplica actualmente en los tribunales y no solo el que dictan los libros de texto antiguos.
          </p>

          <p>
            Estrategia Pedagógica de Alto Rendimiento: El desglose de actividades y lecturas específicas por sesión es mi método para fomentar la disciplina técnica. Al tener claro qué se debe ver y qué se debe preguntar en cada clase, puedo dirigir la cátedra con firmeza, asegurando que el alumno pase de la simple lectura a la sustanciación de casos. Este orden me permite ser estricto en la evaluación, pues cada examen y cada ejercicio tiene una razón de ser dentro de esta planificación semanal.
          </p>

          <p>
            Responsabilidad Profesional y Ética Docente: Finalmente, este temario temático es el compromiso que asumo con la formación de mis alumnos. Lo he diseñado así porque estoy convencido de que solo mediante una planeación meticulosa se puede formar a los "arquitectos del orden social" que nuestro sistema requiere. Es mi guía personal para asegurar que cada minuto frente al grupo se traduzca en una ventaja competitiva para los estudiantes, dándoles la seguridad y el rigor que la profesión demanda desde el primer semestre.
          </p>
        </div>

        {/* Link al final */}
        <div className="text-center mt-20">
          <a
            href="https://drive.google.com/file/d/1UOK-4JUSffSn8iMfIhvHKTHcIEymb3Ne/view?usp=sharing"
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