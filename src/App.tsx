import React, { useState } from 'react';
import { FileText, Youtube, Scale, BookOpen, Mail, Phone, Menu, X, ChevronRight } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState('inicio');
  const [menuOpen, setMenuOpen] = useState(false);

  const colors = {
    bg: '#0f172a',          // Azul-gris oscuro jovial
    primary: '#1e293b',     // Paneles
    accent: '#d4a017',      // Dorado cálido
    neon: '#a5b4fc',        // Neón sutil hover
    text: '#e2e8f0',
    textDark: '#94a3b8',
  };

  const menuItems = [
    { id: 'inicio', label: 'Inicio' },
    { id: 'conoceme', label: 'Conóceme' },
    { id: 'filosofia', label: 'Filosofía' },
    { id: 'invasion', label: 'Invasión Académica' },
    { id: 'tribunal', label: 'Tribunal Escolar' },
    { id: 'bachillerato', label: 'Bachillerato' },
    { id: 'contacto', label: 'Contacto' },
  ];

  return (
    <div className="min-h-screen" style={{ backgroundColor: colors.bg, color: colors.text }}>
      {/* Navegación */}
      <nav className="sticky top-0 z-50 backdrop-blur-lg border-b border-[#334155]" style={{ backgroundColor: 'rgba(15, 23, 42, 0.9)' }}>
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-wider" style={{ color: colors.accent, fontFamily: "'Lora', serif" }}>
              EDUARDO MONTALVO REYES
            </h1>
            <p className="text-sm md:text-base uppercase tracking-widest opacity-80">Abogado & Catedrático</p>
          </div>

          {/* Menú desktop */}
          <div className="hidden lg:flex space-x-8">
            {menuItems.map(item => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`uppercase text-sm tracking-widest font-medium transition-all ${
                  activeTab === item.id ? 'text-[#d4a017] border-b-2 border-[#d4a017]' : 'text-gray-400 hover:text-white'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Botón menú móvil */}
          <button className="lg:hidden text-3xl" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Menú móvil desplegable */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-black/95 flex flex-col items-center justify-center space-y-8 lg:hidden animate-fade-in">
          {menuItems.map(item => (
            <button
              key={item.id}
              onClick={() => { setActiveTab(item.id); setMenuOpen(false); }}
              className="text-2xl uppercase tracking-widest text-white hover:text-[#d4a017] transition-colors"
            >
              {item.label}
            </button>
          ))}
        </div>
      )}

      {/* Contenido principal */}
      <main className="max-w-7xl mx-auto px-6 py-12 md:py-20">
        {/* Inicio */}
        {activeTab === 'inicio' && (
          <div className="space-y-16 text-center">
            <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl border-2 border-[#d4a017]/30 max-w-5xl mx-auto">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/Gw0FgPUnEDQ"
                title="Presentación Eduardo Montalvo Reyes"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>

            <h2 className="text-5xl md:text-7xl font-bold tracking-tight" style={{ fontFamily: "'Lora', serif", color: '#ffffff' }}>
              FORJANDO HOY EL FUTURO DEL MAÑANA
            </h2>

            <p className="text-xl md:text-2xl italic max-w-4xl mx-auto leading-relaxed" style={{ color: colors.textDark }}>
              Convencido de usar la tecnología y la Inteligencia Artificial de manera consciente y ética, enseño su uso como un apoyo extra para perfeccionar el trabajo humano, jamás como un reemplazo de nuestra esencia y sensibilidad.
            </p>

            <div className="flex justify-center gap-6">
              <button onClick={() => setActiveTab('conoceme')} className="px-8 py-4 bg-[#d4a017] text-black font-bold uppercase tracking-widest rounded-lg hover:bg-[#e5b923] transition-all shadow-lg">
                Conóceme
              </button>
              <button onClick={() => setActiveTab('contacto')} className="px-8 py-4 border-2 border-[#d4a017] text-[#d4a017] font-bold uppercase tracking-widest rounded-lg hover:bg-[#d4a017] hover:text-black transition-all">
                Contacto
              </button>
            </div>
          </div>
        )}

        {/* Conóceme (CV integrado) */}
        {activeTab === 'conoceme' && (
          <div className="max-w-5xl mx-auto space-y-12">
            <h2 className="text-5xl font-bold text-center tracking-widest" style={{ fontFamily: "'Lora', serif", color: colors.accent }}>
              CONÓCEME
            </h2>

            {/* Foto y datos básicos */}
            <div className="flex flex-col md:flex-row items-center gap-12 bg-[#1e293b] p-10 rounded-2xl border border-[#334155]">
              <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-[#d4a017]/50 flex-shrink-0">
                {/* Reemplace con su foto real */}
                <img src="URL-DE-SU-FOTO" alt="Eduardo Montalvo Reyes" className="w-full h-full object-cover" />
              </div>
              <div className="text-center md:text-left">
                <h3 className="text-4xl font-bold" style={{ color: '#ffffff' }}>EDUARDO MONTALVO REYES</h3>
                <p className="text-xl mt-2" style={{ color: colors.textDark }}>Licenciado en Derecho – Maestrante en Derecho – Profesor Universitario</p>
                <div className="mt-6 space-y-3 text-lg">
                  <p><strong>Correo:</strong> lic.montalvo.legal@gmail.com</p>
                  <p><strong>WhatsApp:</strong> 55 3467 6149</p>
                  <a href="URL-LINKEDIN" target="_blank" className="inline-flex items-center text-[#d4a017] hover:text-white">
                    <Linkedin className="mr-2" /> LinkedIn
                  </a>
                </div>
              </div>
            </div>

            {/* Visión y misión */}
            <div className="prose prose-lg max-w-none text-gray-300 leading-relaxed">
              <h3 className="text-3xl font-bold mb-6" style={{ color: colors.accent }}>Visión y Misión</h3>
              <p className="italic">
                Creo en una educación que forme personas íntegras, críticas y competentes. Mi misión es que cada alumno descubra su potencial y lo ponga al servicio de la justicia y la sociedad, usando la tecnología con ética y responsabilidad.
              </p>

              <h3 className="text-3xl font-bold mt-12 mb-6" style={{ color: colors.accent }}>Formación y Experiencia</h3>
              <ul className="list-disc pl-6 space-y-4 text-lg">
                <li>Licenciado en Derecho por la UNAM</li>
                <li>Maestrante en Derecho por la UNAM</li>
                <li>Diplomado en Derecho Procesal Laboral por la UNAM</li>
                <li>Experiencia docente en Licenciatura y Bachillerato</li>
              </ul>

              <p className="italic mt-8 text-xl">
                "Mi más grande carta de recomendación son las cartas de agradecimiento de mis alumnos o clientes. Me hacen ver que el trabajo realizado fue satisfactorio y humano."
              </p>

              {/* Enlace completo CV */}
              <div className="mt-10 text-center">
                <a href="https://drive.google.com/file/d/ID-DE-SU-CV/view" target="_blank" className="inline-flex items-center px-8 py-4 bg-[#d4a017] text-black font-bold uppercase tracking-widest rounded-lg hover:bg-[#e5b923] transition-all shadow-lg">
                  <FileText className="mr-3" /> Descargar CV completo (PDF)
                </a>
              </div>
            </div>
          </div>
        )}

        {/* Filosofía (Carta integrada) */}
        {activeTab === 'filosofia' && (
          <div className="max-w-5xl mx-auto space-y-12">
            <h2 className="text-5xl font-bold text-center tracking-widest" style={{ fontFamily: "'Lora', serif", color: colors.accent }}>
              FILOSOFÍA DOCENTE
            </h2>

            <div className="prose prose-xl max-w-none text-gray-300 leading-relaxed space-y-8 bg-[#1e293b] p-10 rounded-2xl border border-[#334155]">
              <p className="italic text-2xl">
                No concibo la docencia como un acto de mera transmisión de datos, sino como un ejercicio de responsabilidad humana y jurídica. Mi compromiso nace en las planeaciones académicas buscando la perfección y se materializa en el aula, donde busco romper el esquema de la educación fría para mostrar la realidad tal cual es: compleja, pero transformable.
              </p>

              <blockquote className="border-l-4 border-[#d4a017] pl-8 py-6 my-10 bg-[#0f172a]/50 italic text-2xl">
                "Diseño estructuras que obligan al alumno a enfrentarse a la práctica real, porque el error en el aula es una lección, pero el error en la vida tiene un peso que marca."
              </blockquote>

              <p>
                Enseño desde mis aciertos y desde las cicatrices de mis errores, con la esperanza de que mis estudiantes no carguen con mis mismos pesos. Decido darlo todo por ellos, porque la bondad y la exigencia técnica son la única vía para formar expertos en la ley, pero sobre todo, íntegros en su humanidad.
              </p>
            </div>
          </div>
        )}

        {/* Innovación Académica */}
        {activeTab === 'innovacion' && (
          <div className="space-y-16">
            <div className="text-center">
              <h2 className="text-5xl font-bold tracking-widest" style={{ fontFamily: "'Lora', serif", color: colors.accent }}>
                INVASIÓN ACADÉMICA
              </h2>
              <p className="text-2xl italic text-gray-400 mt-6 max-w-4xl mx-auto">
                Mis innovaciones nunca van contra el sistema educativo; van a favor de perfeccionarlo. Cubro los huecos que la educación tradicional deja abiertos, siempre con respeto y actualización constante.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Actualización de Temario */}
              <div className="bg-[#1e293b] p-8 rounded-2xl border border-[#334155] hover:border-[#d4a017] transition-all group shadow-xl">
                <div className="flex items-center gap-4 mb-6">
                  <FileText className="text-[#d4a017] group-hover:scale-110 transition-transform" size={56} />
                  <h3 className="text-3xl font-bold">Actualización de Temario</h3>
                </div>
                <iframe src="https://drive.google.com/file/d/1Em4Qvq6wvDRyTTaEGrLLxKyCpN0iVav0/preview" className="w-full h-80 rounded-xl" allow="autoplay"></iframe>
                <a href="https://drive.google.com/file/d/1Em4Qvq6wvDRyTTaEGrLLxKyCpN0iVav0/view" target="_blank" className="mt-6 inline-block text-[#d4a017] hover:text-white font-bold text-lg">
                  Ver documento completo →
                </a>
              </div>

              {/* Temarios Temáticos */}
              <div className="bg-[#1e293b] p-8 rounded-2xl border border-[#334155] hover:border-[#d4a017] transition-all group shadow-xl">
                <div className="flex items-center gap-4 mb-6">
                  <FileText className="text-[#d4a017] group-hover:scale-110 transition-transform" size={56} />
                  <h3 className="text-3xl font-bold">Temarios Temáticos</h3>
                </div>
                <iframe src="https://drive.google.com/file/d/1ArOiedBdJgJ7VPc_tCDGVY9SfLJg669e/preview" className="w-full h-80 rounded-xl" allow="autoplay"></iframe>
                <a href="https://drive.google.com/file/d/1ArOiedBdJgJ7VPc_tCDGVY9SfLJg669e/view" target="_blank" className="mt-6 inline-block text-[#d4a017] hover:text-white font-bold text-lg">
                  Ver documento completo →
                </a>
              </div>

              {/* Guiones de Cátedra */}
              <div className="bg-[#1e293b] p-8 rounded-2xl border border-[#334155] hover:border-[#d4a017] transition-all group shadow-xl">
                <div className="flex items-center gap-4 mb-6">
                  <Youtube className="text-[#d4a017] group-hover:scale-110 transition-transform" size={56} />
                  <h3 className="text-3xl font-bold">Guiones de Cátedra</h3>
                </div>
                <iframe src="https://drive.google.com/file/d/17NkMEV-fXOulCliPIxA2hnIn9YvdGw5b/preview" className="w-full h-80 rounded-xl" allow="autoplay"></iframe>
                <a href="https://drive.google.com/file/d/17NkMEV-fXOulCliPIxA2hnIn9YvdGw5b/view" target="_blank" className="mt-6 inline-block text-[#d4a017] hover:text-white font-bold text-lg">
                  Ver documento completo →
                </a>
              </div>
            </div>
          </div>
        )}

        {/* Tribunal Escolar */}
        {activeTab === 'tribunal' && (
          <div className="space-y-16">
            <div className="text-center">
              <h2 className="text-5xl font-bold tracking-widest" style={{ fontFamily: "'Lora', serif", color: colors.accent }}>
                TRIBUNAL ESCOLAR
              </h2>
              <p className="text-2xl italic text-gray-400 mt-6 max-w-4xl mx-auto">
                Transformo el aula en un despacho jurídico real para que mis alumnos no solo estudien el proceso, sino que lo vivan con responsabilidad y pasión.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Juicio Práctico */}
              <div className="bg-[#1e293b] p-8 rounded-2xl border border-[#334155] hover:border-[#d4a017] transition-all shadow-xl">
                <h3 className="text-3xl font-bold mb-6" style={{ color: '#ffffff' }}>Juicio Práctico</h3>
                <p className="text-gray-300 leading-relaxed text-lg">
                  Mi intención es que practiques el procedimiento completo de un juicio: desde el escrito inicial hasta la sentencia, pasando por todos los trámites. Con mi guía resolverás dudas reales de litigantes.
                </p>
                {/* Embed video */}
              </div>

              {/* Juicio de Amparo */}
              <div className="bg-[#1e293b] p-8 rounded-2xl border border-[#334155] hover:border-[#d4a017] transition-all shadow-xl">
                <h3 className="text-3xl font-bold mb-6" style={{ color: '#ffffff' }}>Juicio de Amparo</h3>
                <p className="text-gray-300 leading-relaxed text-lg">
                  En México y el mundo los derechos humanos son la rienda actual. Enseñar a agotar el principio de definitividad en el aula asegura que mis alumnos dominen este procedimiento constitucional clave.
                </p>
                {/* Video */}
              </div>

              {/* Secretariado */}
              <div className="bg-[#1e293b] p-8 rounded-2xl border border-[#334155] hover:border-[#d4a017] transition-all shadow-xl">
                <h3 className="text-3xl font-bold mb-6" style={{ color: '#ffffff' }}>Secretariado</h3>
                <p className="text-gray-300 leading-relaxed text-lg">
                  Estos procedimientos son de mi autoría y están diseñados exclusivamente para el Tribunal Escolar. No violentan derechos de terceros, pero se acercan lo más posible a la realidad procesal.
                </p>
                {/* Video */}
              </div>

              {/* Creación de herramienta pedagógica */}
              <div className="bg-[#1e293b] p-8 rounded-2xl border border-[#334155] hover:border-[#d4a017] transition-all shadow-xl">
                <h3 className="text-3xl font-bold mb-6" style={{ color: '#ffffff' }}>Creación de Herramienta Pedagógica</h3>
                <p className="text-gray-300 leading-relaxed text-lg">
                  El alumno crea su propio Código Normativo estudiantil, que funciona como reglamento de clase y le enseña a fundamentar procesalmente cada promoción, tarea o examen como si fuera un juzgado real.
                </p>
                {/* Video */}
              </div>
            </div>
          </div>
        )}

        {/* Bachillerato */}
        {activeTab === 'bachillerato' && (
          <div className="space-y-16">
            <div className="text-center">
              <h2 className="text-5xl font-bold tracking-widest" style={{ fontFamily: "'Lora', serif", color: colors.accent }}>
                BACHILLERATO
              </h2>
              <p className="text-2xl italic text-gray-400 mt-6 max-w-4xl mx-auto">
                Mi pasión por este nivel me ha permitido acompañar a los alumnos en su formación integral, adaptándome a cada materia con el mismo compromiso y humanidad.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-[#1e293b] p-8 rounded-2xl border border-[#334155] hover:border-[#d4a017] transition-all shadow-xl">
                <h3 className="text-3xl font-bold mb-6" style={{ color: '#ffffff' }}>Ética y Valores</h3>
                <p className="text-gray-300 leading-relaxed text-lg">
                  Aquí forjo ética y buena fe práctica. Ayudo a los alumnos a tomar decisiones correctas en el momento justo, redescubriendo su propia realidad moral.
                </p>
                {/* Video */}
              </div>

              <div className="bg-[#1e293b] p-8 rounded-2xl border border-[#334155] hover:border-[#d4a017] transition-all shadow-xl">
                <h3 className="text-3xl font-bold mb-6" style={{ color: '#ffffff' }}>Historia de México y el Mundo</h3>
                <p className="text-gray-300 leading-relaxed text-lg">
                  Enseño a ver la historia como algo conectado: México en el mundo y el mundo en México. Genero identidad y comprensión global en cada alumno.
                </p>
                {/* Video */}
              </div>

              <div className="bg-[#1e293b] p-8 rounded-2xl border border-[#334155] hover:border-[#d4a017] transition-all shadow-xl">
                <h3 className="text-3xl font-bold mb-6" style={{ color: '#ffffff' }}>Taller de Lectura y Redacción</h3>
                <p className="text-gray-300 leading-relaxed text-lg">
                  Despierto la importancia de la buena ortografía y comunicación efectiva. Capacito para generar escritos profesionales que servirán toda la vida.
                </p>
                {/* Video */}
              </div>
            </div>
          </div>
        )}

        {/* Contacto */}
        {activeTab === 'contacto' && (
          <div className="max-w-4xl mx-auto space-y-12 text-center">
            <h2 className="text-5xl font-bold tracking-widest" style={{ fontFamily: "'Lora', serif", color: colors.accent }}>
              CONTACTO DIRECTO
            </h2>
            <p className="text-2xl italic text-gray-400">
              Estoy a su disposición para cualquier consulta profesional o académica.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <a href="mailto:lic.montalvo.legal@gmail.com" className="bg-[#1e293b] p-10 rounded-2xl border border-[#334155] hover:border-[#d4a017] transition-all shadow-xl flex flex-col items-center gap-4">
                <Mail className="text-[#d4a017]" size={64} />
                <div>
                  <p className="text-xl font-bold">Correo Electrónico</p>
                  <p className="text-lg text-[#d4a017]">lic.montalvo.legal@gmail.com</p>
                </div>
              </a>

              <a href="https://wa.me/525534676149" target="_blank" className="bg-[#1e293b] p-10 rounded-2xl border border-[#334155] hover:border-[#d4a017] transition-all shadow-xl flex flex-col items-center gap-4">
                <Phone className="text-[#d4a017]" size={64} />
                <div>
                  <p className="text-xl font-bold">WhatsApp / Móvil</p>
                  <p className="text-lg text-[#d4a017]">55 3467 6149</p>
                </div>
              </a>
            </div>

            <p className="italic text-2xl text-gray-400 mt-12">
              "Mi más grande carta de recomendación son las cartas de agradecimiento de mis alumnos o clientes."
            </p>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-[#334155] py-12 text-center text-gray-400 bg-[#0f172a]">
        <p>Lic. Eduardo Montalvo Reyes • Abogado • Catedrático</p>
        <p className="text-sm mt-2">Todos los derechos reservados © 2026</p>
      </footer>
    </div>
  );
}
