import React from 'react';
import './App.css';
import Nave from './components/Nave';
import Skill from './components/Skill';
import Proyects from './components/Proyects';
import Contact from './components/Contact';
import Foter from './components/Foter';
import Navbar from './components/Nabar';
import Player from './components/Player';

function App() {
  return (
   <div>
   <Navbar />
   <main>
    <div id='Nave'>
      <Nave />
    </div>
    <div id='Skill'>
      <Skill />
    </div>
    <div id='Proyects'>
      <Proyects />
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
   </main>
  </div>
  )
}

export default App;

