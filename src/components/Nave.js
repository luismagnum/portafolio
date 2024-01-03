import React from 'react'
import image1 from '../assets/images/image1.svg';
export default function Nave() {
  return (
  <div className='h-screen-500 grid grid-col place-items-center justify-center'>
     
      <div className='flex align-items-center justify-center h-96'>
      <img src={image1} alt='foto' className='flex items-center justify-center w-54 h-54 mt-20'/>
      </div>
      <div>
        <span className='flex flex-col items-center justify-center text-2xl text-white mt-8 tracking-[.1em]'>Hey, I'm 
        </span>,
        <span className='flex items-center justify-center text-2xl text-white tracking-[.1em]'>Luis Enrique Diaz</span>
        <span className='flex items-center justify-center text-2xl text-white tracking-[.1em]'>Web Developer</span>
        <span className='flex items-center justify-center text-2xl text-white tracking-[.1em]'>Testing QA</span>
      <br></br>
      </div>
    </div>
  )
}
