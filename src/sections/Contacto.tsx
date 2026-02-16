import React, { useState } from 'react';
import { Mail, Phone, MessageSquare, Send } from 'lucide-react';

export default function Contacto() {
  const [formData, setFormData] = useState({
    nombre: '',
    correo: '',
    mensaje: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí se integraría la lógica para que el mensaje llegue a lic.montalvo.legal@gmail.com
    console.log("Datos enviados:", formData);
    alert("Mensaje enviado con éxito, Licenciado.");
  };

  return (
    <div className="animate-fade-in min-h-screen p-8 md:p-16 bg-[#374151] text-[#f9fafb]">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-serif font-bold text-[#d4a017] mb-16 uppercase tracking-widest text-center">
          Contacto
        </h1>

        <div className="flex flex-col lg:flex-row gap-16 items-start">
          {/* Lado Izquierdo: Video Shorts (Parado) */}
          <div className="w-full lg:w-1/3 flex justify-center">
            <div className="relative aspect-[9/16] w-full max-w-[300px] rounded-[2rem] overflow-hidden border-4 border-[#d4a017]/30 shadow-2xl">
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/yrJO5XAs3T4"
                title="Presentación"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          {/* Lado Derecho: Información y Formulario */}
          <div className="w-full lg:w-2/3 space-y-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Información de Contacto */}
              <div className="space-y-6 bg-[#1e293b] p-8 rounded-3xl border border-white/5">
                <div className="flex items-center gap-4">
                  <Mail className="text-[#d4a017]" size={28} />
                  <div>
                    <p className="text-[10px] uppercase tracking-widest opacity-60 text-[#d4a017]">Correo Electrónico</p>
                    <p className="text-lg font-light">lic.montalvo.legal@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="flex gap-2 text-[#d4a017]">
                    <Phone size={24} />
                    <MessageSquare size={24} />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest opacity-60 text-[#d4a017]">Teléfono / WhatsApp</p>
                    <p className="text-lg font-light">5534676149</p>
                  </div>
                </div>

                <button 
                  onClick={() => window.open('https://wa.me/525534676149', '_blank')}
                  className="w-full py-4 bg-[#25d366] text-white font-bold rounded-xl hover:bg-[#128c7e] transition-colors flex items-center justify-center gap-3"
                >
                  <MessageSquare size={20} /> CONTACTAME POR WHATSAPP
                </button>
              </div>

              {/* Frase Inspiracional */}
              <div className="flex items-center justify-center p-8 border-l border-[#d4a017]/20 italic">
                <p className="text-2xl font-serif text-[#d4a017] text-center leading-relaxed">
                  "Juntos generemos el cambio del mañana"
                </p>
              </div>
            </div>

            {/* Formulario Integrado */}
            <div className="bg-[#1e293b] p-10 rounded-3xl border border-[#d4a017]/10">
              <h3 className="text-xl font-serif font-bold text-[#d4a017] mb-8 uppercase tracking-widest">
                Enviame un mensaje directo
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input
                    type="text"
                    placeholder="NOMBRE"
                    required
                    className="bg-[#374151] border border-white/10 p-4 rounded-xl focus:border-[#d4a017] outline-none transition-colors"
                    onChange={(e) => setFormData({...formData, nombre: e.target.value})}
                  />
                  <input
                    type="email"
                    placeholder="CORREO"
                    required
                    className="bg-[#374151] border border-white/10 p-4 rounded-xl focus:border-[#d4a017] outline-none transition-colors"
                    onChange={(e) => setFormData({...formData, correo: e.target.value})}
                  />
                </div>
                <textarea
                  placeholder="MENSAJE"
                  rows={4}
                  required
                  className="w-full bg-[#374151] border border-white/10 p-4 rounded-xl focus:border-[#d4a017] outline-none transition-colors resize-none"
                  onChange={(e) => setFormData({...formData, mensaje: e.target.value})}
                ></textarea>
                <button
                  type="submit"
                  className="flex items-center gap-3 px-12 py-4 bg-[#d4a017] text-[#1e293b] font-bold uppercase tracking-widest rounded-xl hover:bg-white transition-all shadow-lg"
                >
                  ACEPTAR <Send size={18} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}