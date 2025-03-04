import React, { useState } from 'react';
import {Link} from "react-scroll";
import { IoClose } from "react-icons/io5";
import { TiThMenu } from "react-icons/ti";

const Nabar = () => {
  const [menu, setMenu] = useState(false);

  const handleChange = () =>{
    setMenu(!menu);
  }

  const closeMenu = () =>{
    setMenu(false);
  }
  return (
    <div className='fixed w-full top-0 z-10'>
      <div>
        <div className='flex flex-row justify-between p-4 md:px-32 px-5 text-teal-500 hover:text-teal-300 bg-gray-900 shadow-[0_3px_10px_rgba(0,0,0,0.2)]'>
            <div className='flex flex-row items-center cursor-pointer'>
                <span>
                </span>
                <h1 className='text-teal-500 text-xl hover:text-teal-300'>Luis Enrique Diaz</h1>
            </div>
            <nav className='hidden md:flex flex-row items-center text-lg font-medium gap-8'>
                <Link
                 to='Nave'
                 spy={true} 
                 smooth={true} 
                 duration={500} 
                 className='hover:text-teal-500 transition-all cursor-pointer'>
                 Home
                 </Link>
                <Link 
                 to='Skill' 
                 spy={true} 
                 smooth={true} 
                 duration={500} 
                 className='hover:text-teal-500 transition-all cursor-pointer'>
                 Skills
                 </Link>
                <Link 
                 to='ProyectCards'
                 spy={true} 
                 smooth={true} 
                 duration={500} 
                 className='hover:text-teal-500 transition-all cursor-pointer'>
                 Proyects
                </Link>
                <Link 
                 to='Player'
                 spy={true} 
                 smooth={true} 
                 duration={500} 
                 className='hover:text-teal-500 transition-all cursor-pointer'>
                 NoCountry
                </Link>
                <Link 
                 to='Contact' 
                 spy={true} 
                 smooth={true} 
                 duration={500} 
                 className='hover:text-teal-500 transition-all cursor-pointer'>
                 Contact
                </Link>
            </nav>
            <div className='md:hidden flex items-center'>
                {menu ? (
                    <IoClose size={25} onClick={handleChange} className='cursor-pointer'/>
                ):(
                    <TiThMenu size={25} onClick={handleChange} className='cursor-pointer'/>
                )}
            </div>
        </div>
        <div className={`${menu ? "translate-x-0" : "-translate-x-full"} lg:hidden flex flex-col absolute bg-gray-900 text-teal-500 left-0 top-18 font-semibold text-2xl text-center pt-6 pb-4 gap-8 w-full h-fit transition-transform duration-300`}>
        <Link
                 to='Nave'
                 spy={true} 
                 smooth={true} 
                 duration={500} 
                 className='hover:text-teal-500 transition-all cursor-pointer'
                 onClick={closeMenu}>
                 Home
                 </Link>
                 <Link 
                 to='Skill' 
                 spy={true} 
                 smooth={true} 
                 duration={500} 
                 className='hover:text-teal-500 transition-all cursor-pointer'
                 onClick={closeMenu}>
                 Skills
                 </Link>
                <Link 
                 to='ProyectCards'
                 spy={true} 
                 smooth={true} 
                 duration={500} 
                 className='hover:text-teal-500 transition-all cursor-pointer'
                 onClick={closeMenu}>
                 Proyects
                </Link>
                <Link 
                 to='Player'
                 spy={true} 
                 smooth={true} 
                 duration={500} 
                 className='hover:text-teal-500 transition-all cursor-pointer'
                 onClick={closeMenu}>
                 NoCountry
                </Link>
                <Link 
                 to='Contact' 
                 spy={true} 
                 smooth={true} 
                 duration={500} 
                 className='hover:text-teal-500 transition-all cursor-pointer'
                 onClick={closeMenu}>
                 Contact
                </Link>
        </div>
      </div>
    </div>
  )
}

export default Nabar
