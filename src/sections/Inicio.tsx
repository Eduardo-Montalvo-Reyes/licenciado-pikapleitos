import React from 'react';
import { ChevronLeft } from 'lucide-react'; // si no lo usas quítalo

export default function Inicio({ setActiveTab }) {
  return (
    <div className="flex flex-col lg:flex-row gap-16 items-center animate-fade-in">
      <div className="w-full lg:w-1/2 flex justify-center">
        <div className="relative aspect-[9/16] w-full max-w-[300px] rounded-[2rem] overflow-hidden shadow-2xl border-2 border-[#d4a017]/40">
          <iframe className="absolute inset-0 w-full h-full" src="https://www.youtube.com/embed/MH13zjcQKC4" allowFullScreen></iframe>
        </div>
      </div>
      <div className="w-full lg:w-1/2 text-center lg:text-left space-y-8">
        <h2 className="text-4xl md:text-7xl font-serif font-bold leading-none" style={{ color: '#d4a017' }}>EDUARDO <br/>MONTALVO REYES</h2>
        <p className="text-lg md:text-xl font-serif italic text-gray-200 leading-relaxed text-justify font-light">
          "Convencido de usar la tecnología y la Inteligencia Artificial de manera consciente y ética, enseño su uso como un apoyo extra para perfeccionar el trabajo humano, jamás como un reemplazo de nuestra esencia y sensibilidad."
        </p>
        <button onClick={() => setActiveTab('filosofia')} className="px-12 py-5 bg-[#d4a017] text-black font-black uppercase tracking-[0.2em] rounded-xl text-sm hover:scale-105 transition-all shadow-lg">
          Mi Filosofía
        </button>
      </div>
    </div>
  );
}