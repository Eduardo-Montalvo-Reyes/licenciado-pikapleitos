import React from 'react';
import { FileSignature } from 'lucide-react';

export default function PraxisSecretarial() {
  return (
    <div className="animate-fade-in min-h-screen p-8 md:p-24 bg-[#374151] text-[#f9fafb]">
      <div className="max-w-4xl mx-auto border-b-4 border-[#d4a017] pb-16">
        <FileSignature className="text-[#d4a017] mb-8" size={50} />
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-[#d4a017] mb-12 uppercase">
          Declaración de Propósito: La Guía en el Laberinto Jurídico
        </h1>
        <div className="space-y-8 text-lg md:text-xl leading-relaxed text-justify font-light italic">
          <p>Este sistema es la respuesta directa a un entorno educativo que se ha conformado con lo mínimo; es una apuesta por el profesionalismo y formalidad en un mundo que prefiere la comodidad. Mi objetivo es claro: transformar la formación de licenciados en una preparación real de abogados, enfrentando la dificultad de un sistema que fomenta la pasividad con un método que exige responsabilidad absoluta. Entiendo que nadar contra la corriente genera un desgaste natural, pero mi resolución es inamovible: utilizo cada obstáculo y cada crítica como un filtro para identificar a quienes realmente tienen la madera para ejercer esta profesión con dignidad.</p>
          <p>Más que un catedrático o un formador, me asumo como un guía que ha transitado el camino del litigio y conoce sus asperezas. Mi intención es evitar que quienes están bajo mi cargo enfrenten la incertidumbre y el rechazo que provoca la falta de técnica, entregándoles en su lugar las herramientas para que su voz tenga peso ante cualquier autoridad. Resuelvo la brecha entre la teoría y la realidad mediante este Tribunal, donde mi papel es orientar el talento hacia la estrategia, asegurando que mis alumnos no salgan a ver qué les depara el sistema, sino a imponer el derecho con la seguridad de quien ya lo ha dominado en la práctica.</p>
        </div>
      </div>
    </div>
  );
}