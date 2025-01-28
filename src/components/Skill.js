import React from 'react'
import cypres from '../assets/images/images/cypres.png'
import git from '../assets/images/git.png'
import bost from '../assets/images/images/bootstrap.svg'
import css from '../assets/images/images/css.svg'
import figm from '../assets/images/images/figma.svg'
import html from '../assets/images/images/html.svg'
import js from '../assets/images/images/javasc.svg'
import next from '../assets/images/images/next.png'
import react from '../assets/images/images/react.svg'
import tailw from '../assets/images/images/tailwindcss.svg'
import ts from '../assets/images/images/typescript.svg'
import jira from '../assets/images/jira.svg'
import post from '../assets/images/postman.svg'
import xray from '../assets/images/xray.png'
import astr from '../assets/images/images/astr.png'


export default function Skill() {
  return (
    <div>
    <section className='grid place-items-center justify-center gap-1 pt-1'></section>
    <h2 className='h-screen-500 text-center justify-items-center text-teal-500 text-3xl font-bold py-2 mt-16'>TECHNOLOGY</h2>
    <div className='mt-10 mb-10 ml-16 mx-10 gap-8 h-100 flex items-center justify-center'>
        <div className='grid grid-cols-4 gap-8 mt-2 mx-auto md:grid-cols-3 lg:grid-cols-6'>
        <img src={html} alt='logo' className='w-10 md:w-28'/>
        <img src={css} alt='logo'className='w-10 md:w-28'/>
        <img src={js} alt='logo'className='w-10 md:w-28'/>
        <img src={react} alt='logo'className='w-10 md:w-28'/>
        <img src={tailw} alt='logo' className='w-10 md:w-28'/>
        <img src={git} alt='logo'className='w-10 md:w-28'/>
        <img src={figm} alt='logo' className='mt-2 w-10 md:w-28'/>
        <img src={next} alt='logo'className='w-10 md:w-28'/>
        <img src={ts} alt='logo'className='w-10 md:w-28'/>
        <img src={astr} alt='logo'className='w-10 md:w-28'/>
        <img src={bost} alt='logo'className='w-10 md:w-28'/>
        <img src={cypres} alt='logo'className='w-10 md:w-28'/>
        <img src={post} alt='logo'className='w-10 md:w-28'/>
        <img src={jira} alt='logo'className='w-10 md:w-28'/>
        <img src={xray} alt='logo'className='w-10 md:w-28'/>
        </div>
    </div>
    </div>
  )
}