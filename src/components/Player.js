import React from 'react';
import YouTubePlayer from 'react-player/youtube';

function Player() {
  return (
    <div>
    <section className='grid place-items-center justify-center gap-1 pt-1'></section>
     <h2 className='h-screen-500 text-center text-teal-500 text-3xl font-bold py-2 mt-24'>JOB SIMULATION</h2>
    <div className='flex text-center justify-center mx-auto p-16 mt-1'>
      <YouTubePlayer url='https://youtu.be/9sCCaaf3dqs?si=yBulvQNTWUFcFujH'
      controls
      loop
      />
    </div>
    </div>
  )
}

export default Player