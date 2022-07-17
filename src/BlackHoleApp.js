import React from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

import BlackHole from './BlackHole';
import Stars from './Stars';

import config from './blackHoleConfig.json'

function BlackHoleApp() {
  return (
    <>
      <Canvas style={{ background: "black" }} linear camera={{ fov: 40 }}>
            <ambientLight intensity={1} />
            <OrbitControls
                makeDefault
                minAzimuthAngle={-0.6}
                maxAzimuthAngle={0.4}
                minPolarAngle={1.468}
                maxPolarAngle={1.550}
                maxDistance={6}
                minDistance={4}
                enableZoom={true}
                enablePan={true}
                zoomSpeed={0.2}
                target={config.background ? [0, 100, -1] : [0, 0 ,0]}
            />
            <Stars />
            <BlackHole />
        </Canvas>
    </>
  );
}

export default BlackHoleApp;
