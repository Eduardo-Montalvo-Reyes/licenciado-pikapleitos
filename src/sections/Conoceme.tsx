import React from 'react';
import { FileText, ExternalLink } from 'lucide-react';

const cvLink = "https://drive.google.com/file/d/1rSL8lA0cLCl-4kSgOnBS4zGMoVAJwtyS/view?usp=sharing";
const fotoUrl = "https://drive.google.com/uc?export=view&id=1JGAhxqVSK5YmaVsyaQAXS6Y1E8RTldsG";

export default function Conoceme() {
  return (
    <div className="animate-fade-in space-y-12">
      <div className="bg-[#1e293b] p-8 md:p-16 rounded-[3rem] border border-[#d4a017]/10 shadow-2xl">
        <h2 className="text-3xl md:text-5xl font-serif font-bold text-center mb-12" style={{ color: '#d4a017' }}>Conóceme</h2>
        <div className="flex flex-col md:flex-row gap-12 items-start mb-16">
          <div className="w-full md:w-1/3 flex justify-center">
            <div className="relative w-64 h-80 rounded-2xl overflow-hidden border-2 border-[#d4a017] shadow-xl">
              <img src={fotoUrl} alt="Lic. Eduardo Montalvo" className="object-cover w-full h-full" />
            </div>
          </div>
          <div className="w-full md:w-2/3 space-y-6 font-light text-justify text-lg leading-relaxed">
            <p>Soy Abogado Litigante especializado en Derecho Laboral y Consultor Educativo. Mi trayectoria se fundamenta en la capacidad de análisis estratégico y la resolución de conflictos mediante una sólida base jurídica, aplicada tanto en el tribunal como en el aula.</p>
            <p>Como catedrático, ejerzo en nivel Licenciatura y Bachillerato, impartiendo materias sociales clave como Ética, Historia y Taller de Lectura y Redacción. He desarrollado herramientas como el "Tribunal Escolar" y el "Código Estudiantil", diseñadas para enfrentar al alumno a la responsabilidad legal y ética de sus actos.</p>
            <p>Mi labor actual se centra en la "nueva inercia" docente: un equilibrio entre rigor técnico y sentido humano, donde la tecnología sirve como un puente para perfeccionar la praxis jurídica bajo principios éticos irrenunciables.</p>
          </div>
        </div>
        <div className="bg-black/20 p-8 rounded-2xl border border-white/5 text-center">
          <h3 className="text-xl font-serif font-bold mb-6" style={{ color: '#d4a017' }}>SABER MÁS DE MI FORMACIÓN</h3>
          <a href={cvLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 px-10 py-4 bg-[#d4a017] text-black font-black uppercase tracking-widest rounded-xl text-sm hover:scale-105 transition-all">
            <FileText size={18} /> ABRIR CV <ExternalLink size={14} />
          </a>
        </div>
      </div>
    </div>
  );
}