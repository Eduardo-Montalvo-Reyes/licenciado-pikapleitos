import React from 'react';

export default function MaterialVisual() {
  return (
    <div className="animate-fade-in min-h-screen p-8 md:p-24 bg-[#374151] text-[#f9fafb]">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-[#d4a017] mb-12 uppercase text-center">
          Estructura Universal de la Demanda: El Mapa del Litigio Estratégico
        </h1>
        <div className="relative w-full aspect-video rounded-2xl overflow-hidden border-2 border-[#d4a017]/30 shadow-2xl mb-16">
          <iframe 
            className="absolute inset-0 w-full h-full" 
            src="https://www.youtube.com/embed/urVwHm8WZuc" 
            title="Estructura de la Demanda" 
            allowFullScreen
          ></iframe>
        </div>
        <div className="space-y-8 text-lg md:text-xl leading-relaxed text-justify font-light">
          <p>La demanda no es un escrito de pretensiones, es un instrumento técnico de precisión donde la forma garantiza el fondo; por ello, mi método integra una Guía Procesal Interactiva que enseña al alumno a construir la arquitectura de un juicio desde su cimiento. Desde la correcta fijación del Rubro para otorgar identidad al expediente, hasta el del Proemio y la fundamentación del Derecho, el estudiante aprende que el litigio es una narración lógica donde cada hecho debe ser una pieza de convicción. No se trata de llenar un formato, sino de entender la anatomía de la acción: saber qué se pide en las Prestaciones, cómo se demuestra en el Capítulo de Pruebas y cómo se amarra la voluntad del juzgador en los Puntos Petitorios.</p>
          <p>Esta guía detallada es el antídoto contra la improvisación que impera en los tribunales reales. Al desglosar cada apartado —incluyendo la responsabilidad ética del Protesto lo Necesario y la formalidad de los anexos—, el alumno adquiere la capacidad de presentar promociones inatacables que cierran el paso a la prevención o al desechamiento. Es aquí donde la teoría se convierte en defensa técnica, transformando un simple papel en una herramienta de poder jurídico que obliga a la autoridad a abrir la puerta del proceso, asegurando que el futuro abogado sepa que su firma es el sello de una estrategia diseñada para vencer.</p>
        </div>
      </div>
    </div>
  );
}