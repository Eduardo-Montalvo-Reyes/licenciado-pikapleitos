import React from 'react';
// Importa íconos si los usas (opcional, quítalo si no lo necesitas)
import { ChevronLeft } from 'lucide-react';

// Imports CORRECTOS: sin repetir la carpeta "Bachillerato/" porque ya estás dentro de ella
import Historia from './Historia';
import Etica from './Etica';
import Taller from './Taller';
import Actividades from './Actividades';
import Proyectos from './Proyectos';  // nota: plural "Proyectos" como en tu carpeta

// Si tienes más componentes en la carpeta Bachillerato/, agrégalos aquí de la misma forma

interface BachilleratoProps {
  subTab: string | null;
  setSubTab: (tab: string | null) => void;
}

export default function Bachillerato({ subTab, setSubTab }: BachilleratoProps) {
  return (
    <div className="animate-fade-in space-y-10">
      {/* Botón para volver o menú de sub-tabs - ajústalo a tu diseño */}
      <button
        onClick={() => setSubTab(null)}
        className="flex items-center text-blue-600 hover:text-blue-800"
      >
        <ChevronLeft className="w-5 h-5 mr-1" />
        Volver a secciones principales
      </button>

      {subTab ? (
        <div className="animate-fade-in space-y-10">
          {subTab === 'historia' && <Historia />}
          {subTab === 'etica' && <Etica />}
          {subTab === 'taller' && <Taller />}
          {subTab === 'actividades' && <Actividades />}
          {subTab === 'proyectos' && <Proyectos />}
          {/* Agrega más condicionales si tienes otros sub-tabs */}
        </div>
      ) : (
        // Vista por defecto: lista de opciones (ajusta estilos y textos)
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <button
            onClick={() => setSubTab('historia')}
            className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition"
          >
            <h3 className="text-xl font-bold">Historia</h3>
            <p>Descripción breve...</p>
          </button>
          <button
            onClick={() => setSubTab('etica')}
            className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition"
          >
            <h3 className="text-xl font-bold">Ética</h3>
            <p>Descripción breve...</p>
          </button>
          <button
            onClick={() => setSubTab('taller')}
            className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition"
          >
            <h3 className="text-xl font-bold">Taller</h3>
            <p>Descripción breve...</p>
          </button>
          <button
            onClick={() => setSubTab('actividades')}
            className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition"
          >
            <h3 className="text-xl font-bold">Actividades</h3>
            <p>Descripción breve...</p>
          </button>
          <button
            onClick={() => setSubTab('proyectos')}
            className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition"
          >
            <h3 className="text-xl font-bold">Proyectos</h3>
            <p>Descripción breve...</p>
          </button>
        </div>
      )}
    </div>
  );
}
