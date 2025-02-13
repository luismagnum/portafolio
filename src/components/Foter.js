import React from 'react';
import reactfoter from '../assets/images/reactfoter.svg';
import tailwfo from '../assets/images/tailwfo.svg';
import { Link } from 'react-scroll';

export default function Foter() {
  return (
    <footer className="bg-[#0C0C0C] text-gray-300 py-10 shadow-lg mt-8 text-center">
      <p className="text-lg md:text-xl font-semibold text-teal-500">
        Dev. Luis E. Diaz
      </p>

      <div className="flex justify-center items-center gap-6 mt-4">
        <img className="w-12 h-12 transition-transform transform hover:scale-110" src={reactfoter} alt="React" />
        <img className="w-12 h-12 transition-transform transform hover:scale-110" src={tailwfo} alt="TailwindCSS" />
      </div>

      <div className="mt-6">
        <Link
          to="Nave"
          spy={true}
          smooth={true}
          duration={500}
          className="text-teal-400 text-lg md:text-xl cursor-pointer hover:text-teal-300 transition-colors duration-300"
        >
          Home
        </Link>
      </div>

      <div className="mt-8 border-t border-gray-700 pt-4">
        <p className="text-sm text-gray-500">&copy; 2024 Luis E. Diaz. All rights reserved.</p>
      </div>
    </footer>
  );
}
