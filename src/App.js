import React from 'react';
import './App.css';
import skillss from './assets/images/skillss.svg';
import image1 from './assets/images/image1.svg';
import clima1 from './assets/images/clima1.svg'
import linke from './assets/images/linke.svg';
import email from './assets/images/email.svg';
import form2 from './assets/images/form2.svg';
import movi from './assets/images/movi.svg';
import git from './assets/images/git.png';
import reactlog from './assets/images/reactlog.png';
import tailwfo from './assets/images/tailwfo.svg';


function App() {
  return (
  <div className=' h-screen-500 grid place-items-center justify-center'>
      <div className=' grid grid-cols-3 gap-8 mt-10'>
        <button type='button' className='active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition- 
         all px-4 py-3 rounded-xl  bg-blue-700 text-white text-lg font-bold'> 
          <a href='#Seccion1'>Skills</a>
          </button>
         <button type='button' className='active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition- 
          all py-3 rounded-xl  bg-blue-700 text-white text-lg font-bold'> 
          <a href='#Seccion2'>Proyects</a> 
         </button>
         <button type='button' className='active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition- 
          all py-3 rounded-xl  bg-blue-700 text-white text-lg font-bold'>  
          <a href='#Seccion3'>Contact </a> 
         </button>
      </div>
      <div className='flex align-items-center justify-center h-64 '>
      <img src={image1} alt='foto' className='flex items-center justify-center w-64 h-64 mt-20'/>
      </div>
      <div>
        <span className='flex flex-col items-center justify-center text-2xl font-semibold text-white mt-16' >Hey, I'm 
        </span>,
        <span className='flex items-center justify-center text-4xl font-semibold text-white'>Luis Enrique Diaz</span>
        <span className='flex items-center justify-center text-4xl font-semibold text-white'>Web Programmer</span>
      </div>
      <div className='py-16 mt-20'>
        <section id='Seccion1'>
        <img src={skillss} alt='logo'/>
        </section>
      </div>
      <div>
        <div>
        <section className='grid place-items-center justify-center pt-12' id='Seccion2'>
        <h2 className='text-white text-3xl font-bold py-2'>PROYECTS</h2>
        </section>
         <div className='grid grid-cols-1 ml-2 odd:md:grid-cols-2 lg:grid-cols-3 gap-8'>
       <section className='bg-#011d41 h-screen flex justify-center items-center gap-x-16 text-white'>
       <div className='w-[300px] h-[420px] bg-transparent cursor-pointer group perspective'>
        <div className='relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000'>
         <div className='absolute backface-hidden border-2 w-full '>
          <img src={movi} alt='' className='w-full h-full'/>
          </div>
           <div className='absolute my-rotate-y-180 backface-hidden w-full h-full bg-gray-100 overflow-hidden'>
            <div className='text-center flex flex-col items-center justify-center h-full text-gray-800 px-2 pb-24'>
             <h1 className='text-3xl font-semibold'>MOVIES</h1>
              <p className='my-2'>See current movie releases</p>
              <p>React-tailwindcss</p>
               <button className='bg-teal-500 px-6 py-2 font-semibold text-white rounded-full absolute -bottom-20 delay-500 duration-1000 group-hover:bottom-20 scale-0 group-hover:scale-125'>
                <a href='https://luismagnum.github.io/movies/'>
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
          <img src={clima1} alt='' className='w-full h-full'/>
          </div>
           <div className='absolute my-rotate-y-180 backface-hidden w-full h-full bg-gray-100 overflow-hidden'>
            <div className='text-center flex flex-col items-center justify-center h-full text-gray-800 px-2 pb-24'>
             <h1 className='text-3xl font-semibold'>WEATHER</h1>
              <p className='my-2'>Weather today</p>
              <p>React-Tailwindcss</p>
               <button className='bg-teal-500 px-6 py-2 font-semibold text-white rounded-full absolute -bottom-20 delay-500 duration-1000 group-hover:bottom-20 scale-0 group-hover:scale-125'>
               <a href='https://luismagnum.github.io/weather/'>
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
          <img src={form2} alt='' className='w-full h-full'/>
          </div>
           <div className='absolute my-rotate-y-180 backface-hidden w-full h-full bg-gray-100 overflow-hidden'>
            <div className='text-center flex flex-col items-center justify-center h-full text-gray-800 px-2 pb-24'>
             <h1 className='text-3xl font-semibold'>FORM</h1>
              <p className='my-2'>Fill a form</p>
              <p>React-ReactHook form-EmailJS</p>
               <button className='bg-teal-500 px-6 py-2 font-semibold text-white rounded-full absolute -bottom-20 delay-500 duration-1000 group-hover:bottom-20 scale-0 group-hover:scale-125'>
               <a href='https://luismagnum.github.io/forms/'>
                WEB
               </a>
               </button>
            </div>
           </div>
         </div>
        </div>
      </section>
      <div className='grid place-items-center justify-center w-screen '>
      <section className='flex items-center justify-center' id='Seccion3'>
      <h2 className=' text-white text-3xl font-bold mt-8'>CONTACT</h2>
      </section>
        <div className='grid grid-cols-3 gap-16 mt-10'>
          <button className='hover:bg-blue-700 active:bg-blue-900 rounded-xl focus:outline-none focus:ring'type='button'>
          <a href="mailto:luismagnum1@gmail.com">
          <img src={email} alt='mail'/> 
          </a>
          </button>
          <button className='hover:bg-blue-700 active:bg-blue-900 rounded-xl focus:outline-none focus:ring'type='button'>
          <a href='https://www.linkedin.com/in/luis-enrique-diaz-brice%C3%B1o-b4662124b/ target=_blank'>
          <img src={linke} alt='linkedin'/>
          </a>
          </button>
          <button className='hover:bg-blue-700 active:bg-blue-900 rounded-xl focus:outline-none focus:ring'type='button'>
          <a href='https://github.com/luismagnum'>
          <img src={git} alt='git'/>
          </a>
          </button>
        </div>
        <div className='grid place-items-center justify-center w-screen'>
         <p className='text-center text-white font-bold pt-20'>MADE BY LUIS DIAZ</p>
         <div className='grid grid-cols-2 gap-6 mt-2'>
         <img className='w-12 h-8' src={reactlog} alt=''/>
         <img className='w-12 h-8' src={tailwfo} alt=''/>
         </div>
        </div>
        </div>
    </div>
  </div>
  </div>
  </div>
  )
}

export default App;
