import React from 'react';
import gem from '../assets/images/images/gemini.png';
import dulc from '../assets/images/images/dulces.png';
import sab from '../assets/images/images/sabor.png';
import speed from '../assets/images/images/speed.png';
import deliver from '../assets/images/images/deliver.png';
import movi from '../assets/images/images/movie.png';

export default function ProyectCards() {
  const projects = [
    { img: gem, title: "React Api", desc: "La aplicación simula funciones de Gemini...", git: "https://github.com/luismagnum/gemini", deploy: "https://luismagnum.github.io/gemini/" },
    { img: dulc, title: "React Nextjs", desc: "Sitio web construido con React y Nextjs...", git: "https://github.com/luismagnum/dulces", deploy: "https://dulces-wnyp.vercel.app" },
    { img: sab, title: "React Tailwindcss", desc: "Un ecommerce para venta de comida rápida...", git: "https://github.com/luismagnum/reactnav", deploy: "https://luismagnum.github.io/reactnav/" },
    { img: speed, title: "Landing Page", desc: "Landing page para atraer más clientes...", git: "https://github.com/luismagnum/website", deploy: "https://luismagnum.github.io/website/" },
    { img: deliver, title: "Astro Tailwindcss", desc: "Landing page para delivery de comida...", git: "https://github.com/luismagnum/delivery", deploy: "https://spontaneous-sunshine-99ff47.netlify.app/" },
    { img: movi, title: "React Api", desc: "Aplicación para ver los últimos estrenos...", git: "https://github.com/luismagnum/movies", deploy: "https://luismagnum.github.io/movies/" },
  ];

  return (
    <div className="px-4 py-12">
      <section className="flex items-center justify-center">
        <h2 className="text-teal-500 text-4xl font-bold">PROYECTOS</h2>
      </section>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        {projects.map((project, i) => (
          <div key={i} className="bg-[#0c090d] rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300 ease-in-out">
            <figure className="w-full h-48 flex justify-center items-center bg-gray-800">
              <img src={project.img} alt={project.title} className="h-full object-contain mx-auto" />
            </figure>
            <div className="p-4 text-center">
              <h2 className="text-xl font-bold text-teal-500">{project.title}</h2>
              <p className="text-teal-400 text-sm mt-2">{project.desc}</p>
              <div className="flex justify-center gap-4 mt-4">
                <a href={project.git} target="_blank" rel="noopener noreferrer" className="bg-teal-500 text-gray-950 font-semibold px-4 py-2 rounded-lg hover:bg-teal-600 transition-colors">
                  GitHub
                </a>
                <a href={project.deploy} target="_blank" rel="noopener noreferrer" className="bg-teal-500 text-gray-950 font-semibold px-4 py-2 rounded-lg hover:bg-teal-600 transition-colors">
                  Deploy
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
