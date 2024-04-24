import React from 'react'
import gem from '../assets/images/images/gemini.png';
import dulc from '../assets/images/images/dulces.png';
import sab from '../assets/images/images/sabor.png';
import speed from '../assets/images/images/speed.png';
import game from '../assets/images/images/gamer.png';
import movi from '../assets/images/images/movie.png';

export default function ProyectCards() {
  return (
    <div>
      <section className='flex items-center justify-center'>
      <h2 className=' text-white text-3xl font-bold mt-24'>PROYECTS</h2>
      </section>
    <div className='md:grid grid-cols-3 gap-4 p-2 mt-24'>
      <div class="text-center justify-center mx-auto card w-80 border-none">
        <figure><img src={gem} alt="Shoes" className='rounded-md '/></figure>
        <div class="card-body bg-[#0c090d]">
        <h2 class="card-title font-bold text-white">React Api</h2>
        <p className='text-white'> La aplicación simula algunas de las funcionalidades del chatbot original de Gemini,
          permitiendo a los usuarios interactuar con un modelo de inteligencia artificial conversacional.</p>
        <div class="flex flex-row mx-auto card-actions justify-between gap-2">
        <button class="text-sm bg-teal-500 px-3 py-1 rounded-lg mx-auto mt-4">
          <a href='https://github.com/luismagnum/gemini'target='_blank'rel='norreferrer'className='flex gap-1'>git hub <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
          </svg>
          </a>
        </button>
        <button class="text-sm  bg-teal-500 px-3 py-1 rounded-lg mx-auto mt-4">
          <a href='https://luismagnum.github.io/gemini/'target='_blank' rel='norreferrer' className='flex gap-1'>deploy<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
          </svg>
          </a>
        </button>
        </div>
      </div>
    </div>
      <div class="text-center justify-center mx-auto card w-80 border-none">
        <figure><img src={dulc} alt="Shoes" className='rounded-md'/></figure>
        <div class="card-body bg-[#0c090d]">
        <h2 class="text-white card-title font-bold mt-2">React Nextjs</h2>
        <p className='text-white'>
        Nuestro sitio web está construido utilizando React, una biblioteca JavaScript de código abierto,
        y aprovechando las características potentes de Nextjs 14.
        </p>
        <div class="flex flex-row mx-auto card-actions justify-between gap-2">
        <button class="text-sm bg-teal-500 px-3 py-1 rounded-lg mx-auto mt-4">
          <a href='https://github.com/luismagnum/dulces'target='_blank'rel='norreferrer'className='flex gap-1'>git hub <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
          </svg>
          </a>
        </button>
        <button class="text-sm bg-teal-500 px-3 py-1 rounded-lg mx-auto mt-4">
          <a href='https://dulces-wnyp.vercel.app'target='_blank' rel='norreferrer' className='flex gap-1'>deploy<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
          </svg>
          </a>
        </button>
        </div>
      </div>
    </div>
    <div class="text-center justify-center mx-auto card w-80 border-none">
        <figure><img src={sab} alt="Shoes" className='rounded-md'/></figure>
        <div class="card-body bg-[#0c090d]">
        <h2 class="text-white card-title font-bold mt-3">React tailwindcss</h2>
        <p className='text-white'> La aplicación es un ecommerce para la venta de comida rapida, en donde el 
          usuario de una manera comoda y de agradable visualizacion escoje comprar de una manera rapida y facil.</p>
        <div class="flex flex-row mx-auto card-actions justify-between gap-2">
        <button class="text-sm  bg-teal-500 px-3 py-1 rounded-lg mx-auto mt-4">
          <a href='https://github.com/luismagnum/sabores'target='_blank'rel='norreferrer'className='flex gap-1'>git hub <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
          </svg>
          </a>
        </button>
        <button class="text-sm bg-teal-500 px-3 py-1 rounded-lg mx-auto mt-4">
          <a href='https://luismagnum.github.io/sabores/'target='_blank' rel='norreferrer' className='flex gap-1'>deploy<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
          </svg>
          </a>
        </button>
        </div>
      </div>
    </div>
    <div class="text-center justify-center mx-auto card w-80 border-none">
        <figure><img src={speed} alt="Shoes" className='rounded-md'/></figure>
        <div class="card-body bg-[#0c090d]">
        <h2 class="text-white card-title font-bold mt-2">React styled</h2>
        <p className='text-white'> La aplicación es una landing page diseñada para ofrecer a nuestros clientes, una 
          solucion para lograr captar mas clientes y asi aumentar las ventas de su negocio.</p>
        <div class="flex flex-row mx-auto card-actions justify-between gap-2">
        <button class="text-sm bg-teal-500 px-3 py-1 rounded-lg mx-auto mt-4">
          <a href='https://github.com/luismagnum/speedweb'target='_blank'rel='norreferrer'className='flex gap-1'>git hub <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
          </svg>
          </a>
        </button>
        <button class="text-sm  bg-teal-500 px-3 py-1 rounded-lg mx-auto mt-4">
          <a href='https://luismagnum.github.io/speedweb/'target='_blank' rel='norreferrer' className='flex gap-1'>deploy<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
          </svg>
          </a>
        </button>
        </div>
      </div>
    </div>
    <div class="text-center justify-center mx-auto card w-80 border-none">
        <figure><img src={game} alt="Shoes" className='rounded-md'/></figure>
        <div class="card-body bg-[#0c090d]">
        <h2 class="text-white card-title font-bold">Html Css js</h2>
        <p className='text-white'> La aplicación es un ecommerce dirijido a un publico joven el cual le permite comprar,
          en una pagina muy intuitiva de una manera facil, los ultimos titulos en videojuegos para su disfrute.</p>
        <div class="flex flex-row mx-auto card-actions justify-between gap-2">
        <button class="text-sm bg-teal-500 px-3 py-1 rounded-lg mx-auto mt-4">
          <a href='https://github.com/luismagnum/speedgamers'target='_blank'rel='norreferrer'className='flex gap-1'>git hub <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
          </svg>
          </a>
        </button>
        <button class="text-sm bg-teal-500 px-3 py-1 rounded-lg mx-auto mt-4">
          <a href='https://luismagnum.github.io/speedgamers/'target='_blank' rel='norreferrer' className='flex gap-1'>deploy<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
          </svg>
          </a>
        </button>
        </div>
      </div>
    </div>
    <div class="text-center justify-center mx-auto card w-80 border-none">
        <figure><img src={movi} alt="Shoes" className='rounded-md'/></figure>
        <div class="card-body bg-[#0c090d]">
        <h2 class="text-white card-title font-bold">React Api</h2>
        <p className='text-white'>Esta aplicacion te permite de una forma rapida estar al dia con los ultimos estrenos
         cinematograficos a nivel mundial. Para luego elegir confortablemente que pelicula ver.</p>
        <div class="flex flex-row mx-auto card-actions justify-between gap-2">
        <button class="text-sm  bg-teal-500 px-3 py-1 rounded-lg mx-auto mt-4">
          <a href='https://github.com/luismagnum/movies'target='_blank'rel='norreferrer'className='flex gap-1'>git hub <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
          </svg>
          </a>
        </button>
        <button class="text-sm  bg-teal-500 px-3 py-1 rounded-lg mx-auto mt-4">
          <a href='https://luismagnum.github.io/movies/'target='_blank' rel='norreferrer' className='flex gap-1'>deploy<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
          </svg>
          </a>
        </button>
        </div>
      </div>
    </div>
  </div>
  </div>
  )
}

