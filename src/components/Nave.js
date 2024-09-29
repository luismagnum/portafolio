import React from 'react'
import fotosin from '../assets/images/images/fotosin.png'
export default function Nave() {
  return (
    <div className='h-screen-500 md:grid grid-cols-2 place-items-center justify-center mt-10 '>
    <div className='flex align-items-center justify-around h-96  md:ml-14'>
      <img
        src={fotosin}
        alt='foto'
        className='flex items-center justify-center w-48 h-48 mt-20 border-4 border-teal-500 rounded-lg shadow-lg'
      />
    </div>
    <div className='md:mr-10'>
      <span className='flex flex-col items-center justify-center text-4xl text-teal-500 mt-28 tracking-[.1em]'>
        Hey, I'm
      </span>,
      <span className='flex items-center justify-center md:text-3xl text-2xl text-teal-500 tracking-[.1em]'>
        Luis Enrique Diaz
      </span>
      <span className='flex items-center justify-center sm:text-xl md:text-2xl text-teal-500 tracking-[.1em] mt-2'>
        Front-End developer
      </span>
      <span className='flex items-center justify-center sm:text-xl md:text-2xl text-teal-500 tracking-[.1em]'>
        Passionate about web design
      </span>
      <span className='flex items-center justify-center sm:text-xl md:text-2xl text-teal-500 tracking-[.1em]'>
        and programming
      </span>
      <br />
    </div>
  </div>
);
}