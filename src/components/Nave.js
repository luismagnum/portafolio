import React from 'react'
import image1 from '../assets/images/image1.svg';
export default function Nave() {
  return (
  <div className='h-screen-500 grid place-items-center justify-center'>
      <div className=' grid grid-cols-3 gap-8 mt-10'>
        <button type='button' className='active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition- 
         all px-4 py-3 rounded-xl  text-white text-2xl font-bold'> 
          <a href='#Seccion1'>Skills</a>
          </button>
         <button type='button' className='active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition- 
          all py-3 rounded-xl text-white text-2xl font-bold'> 
          <a href='#Seccion2'>Proyects</a> 
         </button>
         <button type='button' className='active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition- 
          all py-3 rounded-xl text-white text-2xl font-bold'>  
          <a href='#Seccion3'>Contact </a> 
         </button>
      </div>
      <div className='flex align-items-center justify-center h-64'>
      <img src={image1} alt='foto' className='flex items-center justify-center w-54 h-54 mt-20'/>
      </div>
      <div>
        <span className='flex flex-col items-center justify-center text-2xl font-semibold text-white mt-16' >Hey, I'm 
        </span>,
        <span className='flex items-center justify-center text-3xl font-semibold text-white'>Luis Enrique Diaz</span>
        <span className='flex items-center justify-center text-3xl font-semibold text-white'>Web Developer</span>
        <span className='flex items-center justify-center text-3xl font-semibold text-white'>Testing QA</span>
      <br></br>
      </div>
    </div>
  )
}
