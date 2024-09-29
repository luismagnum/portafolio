import React from 'react'
import reactfoter from '../assets/images/reactfoter.svg';
import tailwfo from '../assets/images/tailwfo.svg';
import { Link } from 'react-scroll';

export default function Foter() {
  return (
      <div className='grid place-items-center justify-center w-screen bg-[#0c090d] shadow-[0_3px_10px_rgba(0,0,0,0.2)] mt-4'>
         <p className='text-xl text-center text-teal-500 pt-20'>Software developer Luis E. Diaz</p>
         <div className='grid grid-cols-2 gap-6 mt-2'>
         <img className='w-12 h-8' src={reactfoter} alt=''/>
         <img className='w-12 h-8' src={tailwfo} alt=''/>
         </div>
         <div>
         <Link
                 to='Nave'
                 spy={true} 
                 smooth={true} 
                 duration={500} 
                 className='text-teal-500 text-base cursor-pointer'>
                 Home
                 </Link>
         </div>
         <br/><br/><br/> 
         </div>
  )
}