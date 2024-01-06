import React from 'react'
import speed from '../assets/images/speed.svg'
import sabores from '../assets/images/images/sabores.png';
import teque from '../assets/images/teque.svg';
import speedga from '../assets/images/speedga.svg';
import movi from '../assets/images/movi.svg';
import tequenos from '../assets/images/images/tequenos.svg';

export default function Proyects() {
  return (
      <div>
      <section className='grid place-items-center justify-center gap-1 pt-1'>
        <h2 className='h-screen-500 text-white text-3xl font-bold py-2 mt-16 overflow-y-auto'>PROYECTS</h2>
        </section>
        <div className='grid grid-cols-1 odd:md:grid-cols-2 lg:grid-cols-3'>
       <section className='bg-#011d41 h-auto flex justify-center items-center mt-5 gap-x-16 text-white'>
       <div className='w-[300px] h-[420px] bg-transparent cursor-pointer group perspective'>
        <div className='relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000'>
         <div className='absolute backface-hidden border-2 w-full '>
          <img src={speed} alt='' className='w-full h-full'/>
          </div>
           <div className='absolute my-rotate-y-180 backface-hidden w-full h-full bg-gray-100 overflow-hidden'>
            <div className='text-center flex flex-col items-center justify-center h-full text-gray-800 px-2 pb-24'>
             <h1 className='text-3xl font-semibold'>SpeedWeb</h1>
              <p className='my-2'>Diseño de paginas Web</p>
              <p>REACT-TAILWINDCSS</p>
               <button className='bg-[#011d41] px-6 py-2 font-semibold text-white rounded-full absolute -bottom-20 delay-500 duration-1000 group-hover:bottom-20 scale-0 group-hover:scale-125'>
                <a href='https://www.speedweb.store/'target='_blank' rel="noreferrer">
                WEB
                </a>
               </button>
            </div>
           </div>
         </div>
        </div>
      </section>
      <section className='bg-#011d41 h-auto flex justify-center items-center mt-5 gap-x-16 text-white'>
       <div className='w-[300px] h-[420px] bg-transparent cursor-pointer group perspective'>
        <div className='relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000'>
         <div className='absolute backface-hidden border-2 w-full'>
          <img src={sabores} alt='' className='w-full h-full'/>
          </div>
           <div className='absolute my-rotate-y-180 backface-hidden w-full h-full bg-gray-100 overflow-hidden'>
            <div className='text-center flex flex-col items-center justify-center h-full text-gray-800 px-2 pb-24'>
             <h1 className='text-3xl font-semibold'>Comida Rapida</h1>
              <p className='my-2'>ECOMMERCE</p>
              <p>REACT-TAILWINDCSS</p>
               <button className='bg-[#011d41] px-6 py-2 font-semibold text-white rounded-full absolute -bottom-20 delay-500 duration-1000 group-hover:bottom-20 scale-0 group-hover:scale-125'>
               <a href='https://luismagnum.github.io/sabores/'target='_blank rel="noreferrer"'>
                WEB
                </a>
               </button>
            </div>
           </div>
         </div>
        </div>
      </section>
      <section className='bg-#011d41 h-auto flex justify-center items-center mt-5 gap-x-16 text-white'>
       <div className='w-[300px] h-[420px] bg-transparent cursor-pointer group perspective'>
        <div className='relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000'>
         <div className='absolute backface-hidden border-2 w-full'>
          <img src={teque} alt='' className='w-full h-full'/>
          </div>
           <div className='absolute my-rotate-y-180 backface-hidden w-full h-full bg-gray-100 overflow-hidden'>
            <div className='text-center flex flex-col items-center justify-center h-full text-gray-800 px-2 pb-24'>
             <h1 className='text-3xl font-semibold'>Sabores de Vzla</h1>
              <p className='my-2'>ECOMMERCE</p>
              <p>HTML y CSS</p>
               <button className='bg-[#011d41] px-6 py-2 font-semibold text-white rounded-full absolute -bottom-20 delay-500 duration-1000 group-hover:bottom-20 scale-0 group-hover:scale-125'>
               <a href='https://www.saboresdevenezuela.online'target='_blank' rel="noreferrer">
                WEB
               </a>
               </button>
            </div>
           </div>
         </div>
        </div>
      </section>

      <section className='bg-#011d41 h-auto flex justify-center items-center mt-5 gap-x-16 text-white'>
       <div className='w-[300px] h-[420px] bg-transparent cursor-pointer group perspective'>
        <div className='relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000'>
         <div className='absolute backface-hidden border-2 w-full'>
          <img src={speedga} alt='' className='w-full h-full'/>
          </div>
           <div className='absolute my-rotate-y-180 backface-hidden w-full h-full bg-gray-100 overflow-hidden'>
            <div className='text-center flex flex-col items-center justify-center h-full text-gray-800 px-2 pb-24'>
             <h1 className='text-3xl font-semibold'>SpeedGamers</h1>
              <p className='my-2'>ECOMMERCE</p>
              <p>HTML y CSS</p>
               <button className='bg-[#011d41] px-6 py-2 font-semibold text-white rounded-full absolute -bottom-20 delay-500 duration-1000 group-hover:bottom-20 scale-0 group-hover:scale-125'>
               <a href='https://www.speedgamers.online'target='_blank' rel="noreferrer">
                WEB
               </a>
               </button>
            </div>
           </div>
         </div>
        </div>
      </section>
      <section className='bg-#011d41 h-auto flex justify-center items-center mt-5 gap-x-16 text-white'>
       <div className='w-[300px] h-[420px] bg-transparent cursor-pointer group perspective'>
        <div className='relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000'>
         <div className='absolute backface-hidden border-2 w-full'>
          <img src={movi} alt='' className='w-full h-full'/>
          </div>
           <div className='absolute my-rotate-y-180 backface-hidden w-full h-full bg-gray-100 overflow-hidden'>
            <div className='text-center flex flex-col items-center justify-center h-full text-gray-800 px-2 pb-24'>
             <h1 className='text-3xl font-semibold'>Movies</h1>
              <p className='my-2'>React Api</p>
              <p> React </p>
               <button className='bg-[#011d41] px-6 py-2 font-semibold text-white rounded-full absolute -bottom-20 delay-500 duration-1000 group-hover:bottom-20 scale-0 group-hover:scale-125'>
               <a href='https://luismagnum.github.io/movies/'target='_blank' rel="noreferrer">
                WEB
               </a>
               </button>
            </div>
           </div>
         </div>
        </div>
      </section>
      <section className='bg-#011d41 h-auto flex justify-center items-center mt-5 gap-x-16 text-white'>
       <div className='w-[300px] h-[420px] bg-transparent cursor-pointer group perspective'>
        <div className='relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000'>
         <div className='absolute backface-hidden border-2 w-full'>
          <img src={tequenos} alt='' className='w-full h-full'/>
          </div>
           <div className='absolute my-rotate-y-180 backface-hidden w-full h-full bg-gray-100 overflow-hidden'>
            <div className='text-center flex flex-col items-center justify-center h-full text-gray-800 px-2 pb-24'>
             <h1 className='text-3xl font-semibold'>Tequeños Vzlanos</h1>
              <p className='my-2'>ECOMMERCE</p>
              <p>HTML y CSS</p>
               <button className='bg-[#011d41] px-6 py-2 font-semibold text-white rounded-full absolute -bottom-20 delay-500 duration-1000 group-hover:bottom-20 scale-0 group-hover:scale-125'>
               <a href='https://www.tequevzla.online'target='_blank' rel="noreferrer">
                WEB
               </a>
               </button>
            </div>
           </div>
         </div>
        </div>
      </section>
    </div>
    </div>
  )
}