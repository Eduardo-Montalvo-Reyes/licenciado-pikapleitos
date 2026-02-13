import React, { useState } from 'react';
import { FileText, Youtube, Scale, BookOpen, Mail, Phone, Linkedin, ChevronRight } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState('inicio');

  const colors = {
    bg: '#0f172a',          // Azul-gris oscuro jovial y moderno
    primary: '#1e293b',     // Paneles
    accent: '#d4a017',      // Dorado cálido
    neon: '#a5b4fc',        // Neón sutil para hover
    text: '#e2e8f0',        // Gris claro legible
    textDark: '#94a3b8',
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: colors.bg, color: colors.text }}>
      {/* Navegación */}
      <nav className="sticky top-0 z-50 backdrop-blur-lg border-b border-[#334155]" style={{ backgroundColor: 'rgba(15, 23, 42, 0.85)' }}>
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold tracking-wider" style={{ color: colors.accent, fontFamily: "'Lora', serif" }}>
              EDUARDO MONTALVO REYES
            </h1>
            <p className="text-sm uppercase tracking-widest opacity-80">Abogado & Catedrático</p>
          </div>

          <div className="hidden md:flex space-x-8">
            {['inicio', 'filosofia', 'invasion', 'tribunal', 'bachillerato', 'conoceme', 'contacto'].map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`uppercase text-sm tracking-widest font-medium transition-all ${
                  activeTab === tab ? 'text-[#d4a017] border-b-2 border-[#d4a017]' : 'text-gray-400 hover:text-white'
                }`}
              >
                {tab === 'inicio' ? 'Inicio' : tab === 'filosofia' ? 'Filosofía' : tab === 'invasion' ? 'Invasión Académica' : tab === 'tribunal' ? 'Tribunal' : tab === 'bachillerato' ? 'Bachillerato' : tab === 'conoceme' ? 'Conóceme' : 'Contacto'}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Contenido principal */}
      <main className="max-w-7xl mx-auto px-6 py-12 md:py-20">
        {/* Inicio */}
        {activeTab === 'inicio' && (
          <div className="space-y-16 text-center">
            <h2 className="text-5xl md:text-7xl font-bold tracking-tight" style={{ fontFamily: "'Lora', serif", color: '#ffffff' }}>
              FORJANDO HOY EL FUTURO DEL MAÑANA
            </h2>
            <p className="text-xl md:text-2xl italic max-w-4xl mx-auto leading-relaxed" style={{ color: colors.textDark }}>
              Convencido de que la tecnología y la inteligencia artificial son herramientas poderosas, enseño su uso ético y responsable: siempre como apoyo para perfeccionar el trabajo humano, nunca como reemplazo de nuestra esencia.
            </p>

            {/* Video principal */}
            <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl border-2 border-[#d4a017]/30 max-w-5xl mx-auto">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/Gw0FgPUnEDQ"
                title="Presentación Eduardo Montalvo Reyes"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        )}

        {/* Filosofía */}
        {activeTab === 'filosofia' && (
          <div className="max-w-4xl mx-auto space-y-12">
            <h2 className="text-4xl font-bold text-center tracking-widest" style={{ fontFamily: "'Lora', serif", color: colors.accent }}>
              MANIFIESTO
            </h2>
            <div className="prose prose-lg max-w-none text-gray-300 leading-relaxed space-y-6">
              <p className="italic">
                No concibo la docencia como un acto de mera transmisión de datos, sino como un ejercicio de responsabilidad humana y jurídica. Mi compromiso nace en las planeaciones académicas buscando la perfección y se materializa en el aula, donde busco romper el esquema de la educación fría para mostrar la realidad tal cual es: compleja, pero transformable.
              </p>
              <blockquote className="border-l-4 border-[#d4a017] pl-6 py-4 my-8 bg-[#1e293b]/50 italic text-xl">
                "Diseño estructuras que obligan al alumno a enfrentarse a la práctica real, porque el error en el aula es una lección, pero el error en la vida tiene un peso que marca."
              </blockquote>
              <p>
                Enseño desde mis aciertos y desde las cicatrices de mis errores, con la esperanza de que mis estudiantes no carguen con mis mismos pesos. Decido darlo todo por ellos, porque la bondad y la exigencia técnica son la única vía para formar expertos en la ley, pero sobre todo, íntegros en su humanidad.
              </p>
            </div>
          </div>
        )}

        {/* Invasión Académica */}
        {activeTab === 'invasion' && (
          <div className="space-y-16">
            <div className="text-center">
              <h2 className="text-4xl font-bold tracking-widest" style={{ fontFamily: "'Lora', serif", color: colors.accent }}>
                INVASIÓN ACADÉMICA
              </h2>
              <p className="text-xl italic text-gray-400 mt-4">
                Mis innovaciones nunca van contra el sistema, sino que lo perfeccionan. No soy rebelde; soy perfeccionista que cubre los huecos que la educación tradicional deja abiertos.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Tarjeta 1 */}
              <div className="bg-[#1e293b] p-8 rounded-xl border border-[#334155] hover:border-[#d4a017] transition-all group">
                <div className="flex items-center gap-4 mb-6">
                  <FileText className="text-[#d4a017] group-hover:scale-110 transition-transform" size={48} />
                  <h3 className="text-2xl font-bold">Actualización de Temario</h3>
                </div>
                <iframe src="https://drive.google.com/file/d/1Em4Qvq6wvDRyTTaEGrLLxKyCpN0iVav0/preview" className="w-full h-64 rounded-lg" allow="autoplay"></iframe>
                <a href="https://drive.google.com/file/d/1Em4Qvq6wvDRyTTaEGrLLxKyCpN0iVav0/view" target="_blank" className="mt-4 inline-block text-[#d4a017] hover:text-white font-bold">
                  Ver documento completo →
                </a>
              </div>

              {/* Tarjeta 2 */}
              <div className="bg-[#1e293b] p-8 rounded-xl border border-[#334155] hover:border-[#d4a017] transition-all group">
                <div className="flex items-center gap-4 mb-6">
                  <FileText className="text-[#d4a017] group-hover:scale-110 transition-transform" size={48} />
                  <h3 className="text-2xl font-bold">Temarios Temáticos</h3>
                </div>
                <iframe src="https://drive.google.com/file/d/1ArOiedBdJgJ7VPc_tCDGVY9SfLJg669e/preview" className="w-full h-64 rounded-lg" allow="autoplay"></iframe>
                <a href="https://drive.google.com/file/d/1ArOiedBdJgJ7VPc_tCDGVY9SfLJg669e/view" target="_blank" className="mt-4 inline-block text-[#d4a017] hover:text-white font-bold">
                  Ver documento completo →
                </a>
              </div>

              {/* Tarjeta 3 */}
              <div className="bg-[#1e293b] p-8 rounded-xl border border-[#334155] hover:border-[#d4a017] transition-all group">
                <div className="flex items-center gap-4 mb-6">
                  <Youtube className="text-[#d4a017] group-hover:scale-110 transition-transform" size={48} />
                  <h3 className="text-2xl font-bold">Guiones de Cátedra</h3>
                </div>
                <iframe src="https://drive.google.com/file/d/17NkMEV-fXOulCliPIxA2hnIn9YvdGw5b/preview" className="w-full h-64 rounded-lg" allow="autoplay"></iframe>
                <a href="https://drive.google.com/file/d/17NkMEV-fXOulCliPIxA2hnIn9YvdGw5b/view" target="_blank" className="mt-4 inline-block text-[#d4a017] hover:text-white font-bold">
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
              <h2 className="text-4xl font-bold tracking-widest" style={{ fontFamily: "'Lora', serif", color: colors.accent }}>
                TRIBUNAL ESCOLAR
              </h2>
              <p className="text-xl italic text-gray-400 mt-4 max-w-3xl mx-auto">
                Transformo el aula en un despacho jurídico real para que mis alumnos no solo estudien el proceso, sino que lo vivan.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Juicio Práctico */}
              <div className="bg-[#1e293b] p-8 rounded-xl border border-[#334155] hover:border-[#d4a017] transition-all">
                <h3 className="text-2xl font-bold mb-4">Juicio Práctico</h3>
                <p className="text-gray-300 mb-4">
                  Mi intención es que practiques el procedimiento completo de un juicio: desde el escrito inicial hasta la sentencia, pasando por todos los trámites. Con mi guía resolverás dudas reales de litigantes.
                </p>
                {/* Aquí embed video */}
              </div>

              {/* Juicio de Amparo */}
              <div className="bg-[#1e293b] p-8 rounded-xl border border-[#334155] hover:border-[#d4a017] transition-all">
                <h3 className="text-2xl font-bold mb-4">Juicio de Amparo</h3>
                <p className="text-gray-300 mb-4">
                  En México y el mundo los derechos humanos son la rienda actual. Enseñar a agotar el principio de definitividad en el aula asegura que mis alumnos dominen este procedimiento constitucional clave.
                </p>
                {/* Video */}
              </div>

              {/* Secretariado */}
              <div className="bg-[#1e293b] p-8 rounded-xl border border-[#334155] hover:border-[#d4a017] transition-all">
                <h3 className="text-2xl font-bold mb-4">Secretariado</h3>
                <p className="text-gray-300 mb-4">
                  Estos procedimientos son de mi autoría y están diseñados exclusivamente para el Tribunal Escolar. No violentan derechos de terceros, pero se acercan lo más posible a la realidad procesal.
                </p>
                {/* Video */}
              </div>

              {/* Creación de herramienta pedagógica */}
              <div className="bg-[#1e293b] p-8 rounded-xl border border-[#334155] hover:border-[#d4a017] transition-all">
                <h3 className="text-2xl font-bold mb-4">Creación de Herramienta Pedagógica</h3>
                <p className="text-gray-300 mb-4">
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
              <h2 className="text-4xl font-bold tracking-widest" style={{ fontFamily: "'Lora', serif", color: colors.accent }}>
                BACHILLERATO
              </h2>
              <p className="text-xl italic text-gray-400 mt-4 max-w-3xl mx-auto">
                Mi pasión por este nivel me ha permitido acompañar a los alumnos en su formación integral, adaptándome a cada materia con el mismo compromiso.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-[#1e293b] p-8 rounded-xl border border-[#334155] hover:border-[#d4a017] transition-all">
                <h3 className="text-2xl font-bold mb-4">Ética y Valores</h3>
                <p className="text-gray-300">
                  Aquí forjo ética y buena fe práctica. Ayudo a los alumnos a tomar decisiones correctas en el momento justo, redescubriendo su propia realidad moral.
                </p>
                {/* Video */}
              </div>

              <div className="bg-[#1e293b] p-8 rounded-xl border border-[#334155] hover:border-[#d4a017] transition-all">
                <h3 className="text-2xl font-bold mb-4">Historia de México y el Mundo</h3>
                <p className="text-gray-300">
                  Enseño a ver la historia como algo conectado: México en el mundo y el mundo en México. Genero identidad y comprensión global en cada alumno.
                </p>
                {/* Video */}
              </div>

              <div className="bg-[#1e293b] p-8 rounded-xl border border-[#334155] hover:border-[#d4a017] transition-all">
                <h3 className="text-2xl font-bold mb-4">Taller de Lectura y Redacción</h3>
                <p className="text-gray-300">
                  Despierto la importancia de la buena ortografía y comunicación efectiva. Capacito para generar escritos profesionales que servirán toda la vida.
                </p>
                {/* Video */}
              </div>
            </div>
          </div>
        )}

        {/* Conóceme */}
        {activeTab === 'conoceme' && (
          <div className="max-w-4xl mx-auto space-y-12">
            <h2 className="text-4xl font-bold text-center tracking-widest" style={{ fontFamily: "'Lora', serif", color: colors.accent }}>
              CONÓCEME
            </h2>

            <div className="prose prose-lg max-w-none text-gray-300 leading-relaxed space-y-8">
              <h3 className="text-2xl font-bold">Visión y Misión</h3>
              <p className="italic">
                Creo en una educación que no solo transmite conocimiento, sino que forma personas íntegras y competentes. Mi visión es que cada alumno descubra su potencial y lo ponga al servicio de la justicia y la sociedad.
              </p>

              <h3 className="text-2xl font-bold">Formación Académica</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Licenciado en Derecho por la UNAM</li>
                <li>Maestrante en Derecho por la UNAM</li>
                <li>Diplomado en Derecho Procesal Laboral por la UNAM</li>
                <li>Experiencia docente de más de un año en nivel Licenciatura y Bachillerato</li>
              </ul>

              <h3 className="text-2xl font-bold">Filosofía docente</h3>
              <p className="italic">
                Mi más grande carta de recomendación son las cartas de agradecimiento de mis alumnos o clientes. Me hacen ver que el trabajo realizado fue satisfactorio y humano. Soy consciente de los errores del sistema educativo actual y busco corregirlos con tecnología bien usada: ética, responsable y siempre como apoyo, nunca como reemplazo del contacto humano.
              </p>
              <p>
                Tengo la capacidad de adaptarme a cualquier materia que se me asigne. No soy un todólogo; soy un profesional preparado para apoyar donde se me necesite, porque puedo hacerlo con seriedad y pasión.
              </p>

              {/* Video */}
              <div className="aspect-video rounded-xl overflow-hidden shadow-2xl">
                <iframe src="URL-DEL-VIDEO-CONOCEME" width="100%" height="100%" allowFullScreen></iframe>
              </div>
            </div>
          </div>
        )}

        {/* Contacto */}
        {activeTab === 'contacto' && (
          <div className="max-w-3xl mx-auto space-y-12 text-center">
            <h2 className="text-4xl font-bold tracking-widest" style={{ fontFamily: "'Lora', serif", color: colors.accent }}>
              CONTACTO DIRECTO
            </h2>
            <p className="text-xl italic text-gray-400">
              Atención profesional y académica. Estoy a su disposición.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-[#1e293b] p-8 rounded-xl border border-[#334155]">
                <Mail className="mx-auto text-[#d4a017] mb-4" size={48} />
                <p className="text-lg font-bold">Correo electrónico</p>
                <a href="mailto:lic.montalvo.legal@gmail.com" className="text-[#d4a017] hover:text-white">
                  lic.montalvo.legal@gmail.com
                </a>
              </div>

              <div className="bg-[#1e293b] p-8 rounded-xl border border-[#334155]">
                <Phone className="mx-auto text-[#d4a017] mb-4" size={48} />
                <p className="text-lg font-bold">WhatsApp / Móvil</p>
                <a href="https://wa.me/525534676149" target="_blank" className="text-[#d4a017] hover:text-white">
                  55 3467 6149
                </a>
              </div>
            </div>

            <p className="italic text-gray-400 text-lg">
              "Mi más grande carta de recomendación son las cartas de agradecimiento de mis alumnos o clientes."
            </p>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-[#334155] py-12 bg-[#0f172a] text-center text-gray-400">
        <p>Lic. Eduardo Montalvo Reyes • Abogado • Catedrático</p>
        <p className="text-sm mt-2">Todos los derechos reservados © 2026</p>
      </footer>
    </div>
  );
}
