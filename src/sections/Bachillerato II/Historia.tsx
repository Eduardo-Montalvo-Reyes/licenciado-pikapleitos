Historia

import React from 'react';

export default function Historia() {
  return (
    <div className="space-y-10">
      <h2 className="text-4xl font-serif font-bold text-[#d4a017]">HISTORIA DE MÉXICO</h2>
      <div className="flex justify-center"><iframe className="w-full max-w-2xl aspect-video rounded-2xl" src="https://www.youtube.com/embed/QmW6HvyawqU" allowFullScreen></iframe></div>
      <p className="font-light text-justify text-lg leading-relaxed whitespace-pre-line">
        La enseñanza de la Historia de México en el nivel bachillerato representa un desafío pedagógico que va más allá de la simple cronología de eventos, pues constituye el fundamento de la identidad y la ubicación del joven en un mundo globalizado. Mi propuesta de diseño curricular de autor surge de la necesidad de romper con la enseñanza tradicional y fragmentada, para proponer un modelo comparativo donde el devenir nacional se entienda como parte integral de la narrativa universal. Mi objetivo central fue que el estudiante dejara de ver el pasado como una serie de fechas muertas y comenzara a cuestionarse quién es él dentro de la historia de México y del mundo, utilizando la Ilustración y las grandes revoluciones como espejos para entender nuestra propia independencia y modernidad.
        {"\n\n"}
        Este curso significó para mí una revelación académica; como profesional del Derecho, encontré en la historia no solo el origen de nuestras instituciones, sino un pleito de siglos por la justicia y la soberanía que terminé amando profundamente. Al compartir este descubrimiento con mis alumnos, logramos transformar el aula en un espacio de análisis crítico donde los procesos históricos se volvieron herramientas para comprender el presente. La mayor evidencia de éxito de esta cátedra fue ver cómo los estudiantes se apropiaban de su pasado con orgullo y rigor, entregando proyectos finales donde la empatía histórica y la investigación seria sustituyeron al desinterés inicial. Al igual que en mis otras asignaturas, el testimonio de los grupos agradeciendo la forma en que el pasado cobró vida para ellos es mi mayor satisfacción, reafirmando que la historia, cuando se enseña con una visión global y pasión humana, se convierte en el cimiento de una ciudadanía consciente y comprometida.
      </p>
    </div>
  );
}