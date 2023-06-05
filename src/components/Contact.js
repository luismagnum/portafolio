import React from 'react'
import email from '../assets/images/email.svg';
import linke from '../assets/images/linke.svg';
import git from '../assets/images/git.png';

export default function Contact() {
  return (
    <div>
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
    </div>
    </div>
        
  )
}