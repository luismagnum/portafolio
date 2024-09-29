import React from 'react'
import gem from '../assets/images/images/gemini.png';
import dulc from '../assets/images/images/dulces.png';
import sab from '../assets/images/images/sabor.png';
import speed from '../assets/images/images/speed.png';
import deliver from '../assets/images/images/deliver.png';
import movi from '../assets/images/images/movie.png';

export default function ProyectCards() {
  return (
    <div>
      <section className='flex items-center justify-center'>
        <h2 className='text-teal-500 text-4xl font-bold mt-24'>PROYECTOS</h2>
      </section>
      <div className='md:grid grid-cols-3 gap-8 p-4 mt-24'>
        {[{
          img: gem, title: "React Api", desc: "La aplicación simula funciones de Gemini...",
          git: "https://github.com/luismagnum/gemini", deploy: "https://luismagnum.github.io/gemini/"
        },
        {
          img: dulc, title: "React Nextjs", desc: "Sitio web construido con React y Nextjs...",
          git: "https://github.com/luismagnum/dulces", deploy: "https://dulces-wnyp.vercel.app"
        },
        {
          img: sab, title: "React Tailwindcss", desc: "Un ecommerce para venta de comida rápida...",
          git: "https://github.com/luismagnum/reactnav", deploy: "https://luismagnum.github.io/reactnav/"
        },
        {
          img: speed, title: "Landing Page", desc: "Landing page para atraer más clientes...",
          git: "https://github.com/luismagnum/website", deploy: "https://luismagnum.github.io/website/"
        },
        {
          img: deliver, title: "Astro Tailwindcss", desc: "Landing page para delivery de comida...",
          git: "https://github.com/luismagnum/delivery", deploy: "https://spontaneous-sunshine-99ff47.netlify.app/"
        },
        {
          img: movi, title: "React Api", desc: "Aplicación para ver los últimos estrenos...",
          git: "https://github.com/luismagnum/movies", deploy: "https://luismagnum.github.io/movies/"
        }].map((project, i) => (
          <div key={i} className="text-center justify-center mx-auto card w-80 border-none hover:scale-105 transition-all duration-300 ease-in-out mb-2">
            <figure><img src={project.img} alt={project.title} className='rounded-md object-cover'/></figure>
            <div className="card-body bg-[#0c090d] rounded-b-lg">
              <h2 className="card-title font-bold text-teal-500 text-xl">{project.title}</h2>
              <p className='text-teal-500 text-sm mt-2'>{project.desc}</p>
              <div className="flex flex-row mx-auto card-actions justify-between gap-2">
                <button className="text-sm bg-teal-500 px-4 py-2 rounded-lg mx-auto mt-4 hover:bg-teal-600 transition-colors">
                  <a href={project.git} target='_blank' rel='norreferrer' className='text-gray-950 flex gap-1 font-semibold'>GitHub</a>
                </button>
                <button className="text-sm bg-teal-500 px-4 py-2 rounded-lg mx-auto mt-4 hover:bg-teal-600 transition-colors">
                  <a href={project.deploy} target='_blank' rel='norreferrer' className='text-gray-950 flex gap-1 font-semibold'>Deploy</a>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

