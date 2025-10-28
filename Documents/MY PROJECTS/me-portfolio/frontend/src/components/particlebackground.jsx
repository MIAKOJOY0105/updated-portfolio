import React from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

export default function ParticleBackground(){
  const init = async (engine) => { await loadFull(engine); };
  return (
    <Particles
      id="tsparticles"
      init={init}
      options={{
        fullScreen: { enable: true, zIndex: 0 },
        background: { color: 'transparent' },
        particles: {
          number: { value: 60 },
          color: { value: ['#a855f7','#ec4899','#3b82f6'] },
          links: { enable: true, opacity: 0.12, distance: 140 },
          move: { enable: true, speed: 1.2 }
        }
      }}
    />
  );
}
