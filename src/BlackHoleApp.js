import React from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stars } from '@react-three/drei'

import BlackHole from './BlackHole';

function BlackHoleApp() {
  return (
    <>
      <Canvas style={{ background: "black" }} camera={{ position: [0, 0, 100] }}>
            <ambientLight intensity={1} />
            <OrbitControls
                makeDefault
                minAzimuthAngle={-0.8}
                maxAzimuthAngle={0.4}
                minPolarAngle={1.468}
                maxPolarAngle={1.550}
                maxDistance={8}
                minDistance={4}
                enableZoom={true}
                enablePan={true}
                zoomSpeed={0.2}
            />
            <Stars 
              radius={10} 
              depth={130} 
              count={2500} 
              factor={6} 
              saturation={0} 
              fade 
              speed={1} 
            />
            <BlackHole />
        </Canvas>
    </>
  );
}

export default BlackHoleApp;
