import React from 'react'
import speed from '../assets/images/speed.svg'
import queseria from '../assets/images/queseria.svg';
import teque from '../assets/images/teque.svg';
import speedga from '../assets/images/speedga.svg';

export default function Proyects() {
  return (
      <div>
      <section className='grid place-items-center justify-center gap-1 pt-1' id='Seccion2'>
        <h2 className='text-white text-3xl font-bold py-2'>PROYECTS</h2>
        </section>
        <div className='grid grid-cols-1 ml-2 odd:md:grid-cols-2 lg:grid-cols-3'>
       <section className='bg-#011d41 h-screen flex justify-center items-center gap-x-16 text-white'>
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
               <button className='bg-teal-500 px-6 py-2 font-semibold text-white rounded-full absolute -bottom-20 delay-500 duration-1000 group-hover:bottom-20 scale-0 group-hover:scale-125'>
                <a href='https://www.speedweb.store/'>
                WEB
                </a>
               </button>
            </div>
           </div>
         </div>
        </div>
      </section>
      <section className='bg-#011d41 h-screen flex justify-center items-center gap-x-16 text-white'>
       <div className='w-[300px] h-[420px] bg-transparent cursor-pointer group perspective'>
        <div className='relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000'>
         <div className='absolute backface-hidden border-2 w-full'>
          <img src={queseria} alt='' className='w-full h-full'/>
          </div>
           <div className='absolute my-rotate-y-180 backface-hidden w-full h-full bg-gray-100 overflow-hidden'>
            <div className='text-center flex flex-col items-center justify-center h-full text-gray-800 px-2 pb-24'>
             <h1 className='text-3xl font-semibold'>Queseria de mi sin ti</h1>
              <p className='my-2'>Fiambres y Quesos</p>
              <p>HTML-CSS</p>
               <button className='bg-teal-500 px-6 py-2 font-semibold text-white rounded-full absolute -bottom-20 delay-500 duration-1000 group-hover:bottom-20 scale-0 group-hover:scale-125'>
               <a href='https://www.queseriademisinti.online/'>
                WEB
                </a>
               </button>
            </div>
           </div>
         </div>
        </div>
      </section>
      <section className='bg-#011d41 h-screen flex justify-center items-center gap-x-16 text-white'>
       <div className='w-[300px] h-[420px] bg-transparent cursor-pointer group perspective'>
        <div className='relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000'>
         <div className='absolute backface-hidden border-2 w-full'>
          <img src={teque} alt='' className='w-full h-full'/>
          </div>
           <div className='absolute my-rotate-y-180 backface-hidden w-full h-full bg-gray-100 overflow-hidden'>
            <div className='text-center flex flex-col items-center justify-center h-full text-gray-800 px-2 pb-24'>
             <h1 className='text-3xl font-semibold'>ECOMMERCE</h1>
              <p className='my-2'>Sabores de Venezuela</p>
              <p>HTML y CSS</p>
               <button className='bg-teal-500 px-6 py-2 font-semibold text-white rounded-full absolute -bottom-20 delay-500 duration-1000 group-hover:bottom-20 scale-0 group-hover:scale-125'>
               <a href='https://www.saboresdevenezuela.online'>
                WEB
               </a>
               </button>
            </div>
           </div>
         </div>
        </div>
      </section>

      <section className='bg-#011d41 h-screen flex justify-center items-center gap-x-16 text-white'>
       <div className='w-[300px] h-[420px] bg-transparent cursor-pointer group perspective'>
        <div className='relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000'>
         <div className='absolute backface-hidden border-2 w-full'>
          <img src={speedga} alt='' className='w-full h-full'/>
          </div>
           <div className='absolute my-rotate-y-180 backface-hidden w-full h-full bg-gray-100 overflow-hidden'>
            <div className='text-center flex flex-col items-center justify-center h-full text-gray-800 px-2 pb-24'>
             <h1 className='text-3xl font-semibold'>ECOMMERCE</h1>
              <p className='my-2'>SpeedGamers</p>
              <p>HTML y CSS</p>
               <button className='bg-teal-500 px-6 py-2 font-semibold text-white rounded-full absolute -bottom-20 delay-500 duration-1000 group-hover:bottom-20 scale-0 group-hover:scale-125'>
               <a href='https://www.speedgamers.online'>
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