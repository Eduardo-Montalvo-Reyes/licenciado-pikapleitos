import React, { useState } from 'react';
import { ChevronLeft, Mail, Phone, MessageSquare, Send, X } from 'lucide-react';

export default function ApoyoJuridico() {
  const [showMessage, setShowMessage] = useState(false);

  return (
    <div className="animate-fade-in min-h-screen p-8 md:p-16 bg-[#374151] text-[#f9fafb]">
      <div className="max-w-5xl mx-auto space-y-16">
        {/* Título */}
        <h1 className="text-4xl md:text-6xl font-serif font-bold text-[#d4a017] uppercase tracking-widest text-center mb-20">
          Asesoría y Representación Legal ⚖️
        </h1>

        {/* Video vertical */}
        <div className="flex justify-center">
          <div className="relative w-full max-w-[320px] aspect-[9/16] rounded-[2rem] overflow-hidden border-4 border-[#d4a017]/30 shadow-2xl">
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/F_DhqRJEqqA"
              title="Asesoría y Representación Legal"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        {/* Lista con emojis */}
        <div className="text-lg md:text-xl font-light leading-relaxed text-justify max-w-4xl mx-auto space-y-8">
          <p>
            Abogado litigante independiente con experiencia en áreas como:
          </p>
          <ul className="list-none space-y-4 pl-6">
            <li className="flex items-center gap-3"><span className="text-2xl">⚖️</span> Laboral</li>
            <li className="flex items-center gap-3"><span className="text-2xl">🏛️</span> Civil</li>
            <li className="flex items-center gap-3"><span className="text-2xl">💼</span> Mercantil</li>
            <li className="flex items-center gap-3"><span className="text-2xl">👨‍👩‍👧</span> Familiar</li>
            <li className="flex items-center gap-3"><span className="text-2xl">📜</span> Constitucional / Procedimiento de Amparo</li>
          </ul>
        </div>

        {/* Botón */}
        <div className="text-center mt-20">
          <button
            onClick={() => setShowMessage(true)}
            className="inline-flex items-center gap-3 px-12 py-5 bg-[#d4a017] text-black font-black uppercase tracking-[0.2em] rounded-xl text-sm hover:scale-105 transition-all shadow-lg"
          >
            Redirección para apoyo legal personalizado 📩
          </button>

          {showMessage && (
            <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
              <div className="bg-[#1e293b] p-8 md:p-12 rounded-3xl border border-[#d4a017]/30 shadow-2xl max-w-4xl w-full flex flex-col md:flex-row items-center gap-8 relative">
                <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#d4a017] text-center">
                  MUY PRONTO 🚀
                </h2>

                <img
                  src="https://drive.google.com/uc?export=view&id=1JGAhxqVSK5YmaVsyaQAXS6Y1E8RTldsG"
                  alt="Lic. Montalvo Reyes"
                  className="w-48 md:w-64 h-auto rounded-2xl border-4 border-[#d4a017]/30 shadow-lg object-cover"
                />

                <button
                  onClick={() => setShowMessage(false)}
                  className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
                >
                  <X size={32} />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}