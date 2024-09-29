import React from 'react';
import './App.css';
import Nave from './components/Nave';
import Skill from './components/Skill';
import ProyectCards from './components/ProyectCards';
import Contact from './components/Contact';
import Foter from './components/Foter';
import Navbar from './components/Nabar';
import Player from './components/Player';


function App() {
  return (
  <main className='overflow-x-hidden'>
   <div>
   <Navbar />
    <div id='Nave'>
      <Nave />
    </div>
    <div id='Skill'>
      <Skill />
    </div>
    <div id='ProyectCards'>
      <ProyectCards />
    </div>
    <div id='Player'>
      <Player /> 
    </div>
    <div id='Contact'>
      <Contact />
    </div>
    <div>
      <Foter/>
    </div>
    </div>
   </main>
  )
}

export default App;

