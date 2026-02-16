import React from 'react';

export default function GuionCatedra() {
  return (
    <div className="animate-fade-in min-h-screen p-8 md:p-16 bg-[#374151] text-[#f9fafb]">
      <div className="max-w-5xl mx-auto">
        {/* Título grande con margen completo */}
        <h1 className="text-4xl md:text-6xl font-serif font-bold text-[#d4a017] mb-16 uppercase tracking-widest text-center">
          GUIÓN DE CÁTEDRA
        </h1>

        {/* Texto debajo del título */}
        <div className="space-y-10 text-lg md:text-xl font-light leading-relaxed text-justify max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#d4a017] mb-8">
            La Practica de la Garantia
          </h2>

          <p>
            He decidido estructurar mi planeación académica bajo el formato de un Guion de Estudios, utilizando una narrativa propia del arte, porque estoy convencido de que la inteligencia jurídica es estéril si carece de inteligencia artística. El Derecho no es un conjunto estático de sumas y restas normativas; es una disciplina viva que se interpreta, se actúa y se proyecta.
          </p>

          <p>
            Concibo cada sesión de clase no como un monólogo informativo, sino como una obra escénica donde el aula es el escenario y el conocimiento es el guion que cobra vida a través de la interacción. Un jurista que no domina su lenguaje corporal, que no entiende el ritmo de la argumentación o que carece de la sensibilidad para "leer" a su audiencia (ya sea un jurado, un cliente o un alumno), es un profesional incompleto. La inteligencia artística nos permite dotar a la jurisprudencia de humanidad, estética y convicción.
          </p>

          <p>
            Este formato de "Guion" permite que la enseñanza tenga un ritmo narrativo:
          </p>

          <p>
            El Inicio (Prólogo): Donde se plantea el conflicto y se captura la atención del espectador-alumno.
          </p>

          <p>
            El Desarrollo (Acto Central): Donde se desenvuelve la técnica, se confrontan las tesis y se llega al clímax del aprendizaje crítico.
          </p>

          <p>
            La Actividad de Aprendizaje (Resolución): Donde el alumno abandona su papel de espectador y se convierte en protagonista de su propia formación profesional.
          </p>

          <p>
            Al integrar temas de vanguardia bajo esta estructura, garantizo que el aprendizaje no sea solo una acumulación de datos, sino una experiencia estética y técnica. Elegir el estilo de guion es un homenaje a la pasión por el detalle, a la improvisación controlada y a la convicción de que un abogado debe ser, ante todo, un intérprete maestro de la realidad social. Porque la justicia, al igual que el arte, requiere de ingenio, creatividad y una ejecución impecable.
          </p>
        </div>

        {/* Link al final */}
        <div className="text-center mt-20">
          <a
            href="https://drive.google.com/file/d/1yxFtyz5fQuNST_ZacoBeRbEyUgDYL9so/view?usp=sharing"
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