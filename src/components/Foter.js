import React from 'react'
import reactfoter from '../assets/images/reactfoter.svg';
import tailwfo from '../assets/images/tailwfo.svg';

export default function Foter() {
  return (
      <div className='grid place-items-center justify-center w-screen bg-gray-800 mt-4'>
         <p className='text-center text-white font-bold pt-20'>Web developer Luis E. Diaz</p>
         <div className='grid grid-cols-2 gap-6 mt-2'>
         <img className='w-12 h-8' src={reactfoter} alt=''/>
         <img className='w-12 h-8' src={tailwfo} alt=''/>
         <br/><br/><br/> 
         </div>
        </div>
  )
}