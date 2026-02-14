{/* Inicio - reorganizado según sus instrucciones exactas */}
{activeTab === 'inicio' && (
  <div className="space-y-12 md:space-y-16 text-center">
    {/* Nombre en el centro exacto, grande */}
    <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-wider mx-auto" style={{ color: colors.accent, fontFamily: "'Lora', serif" }}>
      EDUARDO MONTALVO REYES
    </h1>

    <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-16">
      {/* Espacio para video parado (vertical/portrait) a un lado del nombre */}
      <div className="w-full md:w-1/2 lg:w-2/5 max-w-md">
        <div className="relative w-full pb-[177.78%]" style={{ paddingBottom: '177.78%' }}> {/* Ratio 9:16 para video vertical */}
          <iframe
            className="absolute inset-0 w-full h-full rounded-2xl shadow-2xl border-2 border-[#d4a017]/30"
            src="https://www.youtube.com/embed/Gw0FgPUnEDQ"  // ← Placeholder. Cambie el ID cuando me dé el nuevo link
            title="Presentación Eduardo Montalvo Reyes"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      {/* Contenido de texto a la derecha o debajo en móvil */}
      <div className="w-full md:w-1/2 lg:w-3/5 space-y-8 text-left md:text-center">
        {/* Frase debajo del nombre */}
        <h2 className="text-4xl md:text-6xl font-bold tracking-tight" style={{ fontFamily: "'Lora', serif", color: '#ffffff' }}>
          FORJANDO HOY EL FUTURO DEL MAÑANA
        </h2>

        {/* Párrafo tal cual, justificado */}
        <p className="text-xl md:text-2xl italic leading-relaxed text-justify" style={{ color: colors.textDark }}>
          Convencido de usar la tecnología y la Inteligencia Artificial de manera consciente y ética, enseño su uso como un apoyo extra para perfeccionar el trabajo humano, jamás como un reemplazo de nuestra esencia y sensibilidad.
        </p>

        {/* Botones originales, sin tocar */}
        <div className="flex justify-center gap-6 mt-8">
          <button onClick={() => setActiveTab('conoceme')} className="px-8 py-4 bg-[#d4a017] text-black font-bold uppercase tracking-widest rounded-lg hover:bg-[#e5b923] transition-all shadow-lg">
            Conóceme
          </button>
          <button onClick={() => setActiveTab('contacto')} className="px-8 py-4 border-2 border-[#d4a017] text-[#d4a017] font-bold uppercase tracking-widest rounded-lg hover:bg-[#d4a017] hover:text-black transition-all">
            Contacto
          </button>
        </div>
      </div>
    </div>

    {/* Pie final con títulos profesionales */}
    <div className="text-center text-lg md:text-xl mt-12" style={{ color: colors.textDark }}>
      Licenciado en Derecho, Maestrante en Derecho y Profesor Universitario
    </div>
  </div>
)}
