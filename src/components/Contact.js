import React from 'react'
import email from '../assets/images/email.svg';
import linke from '../assets/images/linke.svg';
import git from '../assets/images/git.png';
import cv from '../assets/images/cv.png';
import br from '../assets/images/images/brasil.png'

export default function Contact() {
  return (
    <div>
      <div className='grid place-items-center justify-center w-screen '>
      <section className='flex items-center justify-center'>
      <h2 className=' text-white text-3xl font-bold mt-24'>CONTACT</h2>
      </section>
        <div className='grid sm:grid-cols-2 lg:grid-cols-5 gap-4 mt-10 mb-10'>
          <button className='transform transition-transform hover:scale-110 active:bg-blue-900  focus:outline-none focus:ring'type='button'>
          <a href="mailto:luismagnum1@gmail.com" target='_blank' rel="noreferrer">
          <img src={email} alt='mail' className='w-16'/> 
          </a>
          </button>
          <button className='transform transition-transform hover:scale-110 active:bg-blue-900 rounded-xl focus:outline-none focus:ring'type='button'>
          <a href='https://www.linkedin.com/in/luis-enrique-diaz-brice%C3%B1o-b4662124b/ target=_blank'target='_blank' rel="noreferrer">
          <img src={linke} alt='linkedin' className='w-16'/>
          </a>
          </button>
          <button className='transform transition-transform hover:scale-110 active:bg-blue-900 rounded-xl focus:outline-none focus:ring'type='button'>
          <a href='https://github.com/luismagnum'target='_blank' rel="noreferrer">
          <img src={git} alt='git' className='w-16'/>
          </a>
          </button>
          <button className='transform transition-transform hover:scale-110 active:bg-blue-900 rounded-xl focus:outline-none focus:ring'type='button'>
          <a href='https://drive.google.com/file/d/1rhw11kPk1EqFPW79GJNWReNlXk_ju9Nf/view?usp=sharing'target='_blank' rel="noreferrer">
          <img src={cv} alt='git' className='w-14'/>
          </a>
          </button>
          <button className='transform transition-transform hover:scale-110 active:bg-blue-900 rounded-xl focus:outline-none focus:ring'type='button'>
          <a href='https://drive.google.com/file/d/1T0-zZuLvm8BUZdQ22tpTzF02zKRaFfvK/view?usp=sharing'target='_blank' rel="noreferrer">
          <img src={br} alt='git' className='w-14'/>
          </a>
          </button>
        </div>
    </div>
    </div>
        
  )
}