import React from 'react'
import html from '../assets/images/images/html.svg'
import css from '../assets/images/images/css.svg'
import js from '../assets/images/images/javasc.svg'
import react from '../assets/images/images/react.svg'
import tailw from '../assets/images/images/tailwindcss.svg'
import git from '../assets/images/git.png'
import figm from '../assets/images/images/figma.svg'
import ang from '../assets/images/images/angular.svg'
import ts from '../assets/images/images/typescript.svg'
import sas from '../assets/images/images/sass.svg'
import bost from '../assets/images/images/bootstrap.svg'


export default function Skill() {
  return (
    <>
    <h2 className='text-center text-white text-3xl font-bold py-2 mt-4'>TECHNOLOGY</h2>
    <div className='mt-10 mb-10 ml-6 mx-8 gap-6 h-100 flex items-center justify-between' id='Seccion1'>
        <div className='grid grid-cols-2 gap-6 mt-2 m-auto md:grid-cols-4 lg:grid-cols-6'>
        <img src={html} alt='logo' className='w-28'/>
        <img src={css} alt='logo'className='w-28'/>
        <img src={js} alt='logo'className='w-28'/>
        <img src={react} alt='logo'className='w-28'/>
        <img src={tailw} alt='logo' className='w-28'/>
        <img src={git} alt='logo'className='w-28'/>
        <img src={figm} alt='logo' className='w-32 mt-4'/>
        <img src={ang} alt='logo'className='w-28'/>
        <img src={ts} alt='logo'className='w-28'/>
        <img src={sas} alt='logo'className='w-28'/>
        <img src={bost} alt='logo'className='w-28'/>
        </div>
    </div>
    </>
  )
}