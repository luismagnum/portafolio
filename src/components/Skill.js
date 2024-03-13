import React from 'react'
import cypres from '../assets/images/cypres.svg'
import git from '../assets/images/git.png'
import bost from '../assets/images/images/bootstrap.svg'
import css from '../assets/images/images/css.svg'
import figm from '../assets/images/images/figma.svg'
import html from '../assets/images/images/html.svg'
import js from '../assets/images/images/javasc.svg'
import next from '../assets/images/images/nextjs.svg'
import react from '../assets/images/images/react.svg'
import sas from '../assets/images/images/sass.svg'
import tailw from '../assets/images/images/tailwindcss.svg'
import ts from '../assets/images/images/typescript.svg'
import jira from '../assets/images/jira.svg'
import post from '../assets/images/postman.svg'
import sql from '../assets/images/sql.svg'
import xray from '../assets/images/xray.png'
import angu from '../assets/images/images/angular.svg'
import astr from '../assets/images/images/astro.png'


export default function Skill() {
  return (
    <div>
    <section className='grid place-items-center justify-center gap-1 pt-1'></section>
    <h2 className='h-screen-500 text-center text-white text-3xl font-bold py-2 mt-16'>TECHNOLOGY</h2>
    <div className='mt-10 mb-10 ml-16 mx-10 gap-8 h-100 flex items-center justify-center'>
        <div className='grid grid-cols-2 gap-10 mt-2 m-auto md:grid-cols-4 lg:grid-cols-4'>
        <img src={html} alt='logo' className='w-28'/>
        <img src={css} alt='logo'className='w-28'/>
        <img src={js} alt='logo'className='w-24 h-24'/>
        <img src={react} alt='logo'className='w-28'/>
        <img src={tailw} alt='logo' className='w-28'/>
        <img src={git} alt='logo'className='w-28'/>
        <img src={figm} alt='logo' className='w-32 mt-4'/>
        <img src={next} alt='logo'className='w-28'/>
        <img src={ts} alt='logo'className='w-28'/>
        <img src={astr} alt='logo'className='w-28'/>
        <img src={bost} alt='logo'className='w-28'/>
        <img src={cypres} alt='logo'className='w-28'/>
        <img src={post} alt='logo'className='w-28'/>
        <img src={jira} alt='logo'className='mt-1 w-24'/>
        <img src={xray} alt='logo'className='ml-2 w-24 h-24 bg-white'/>
        <img src={angu} alt='logo'className='ml-2 w-24 h-24 bg-white'/>
        </div>
    </div>
    </div>
  )
}