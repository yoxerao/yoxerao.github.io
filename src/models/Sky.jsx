import React from 'react'
import { useGLTF } from '@react-three/drei'

import skyScene from '../assets/3d/sky.glb'

const Sky = () => {
  const Sky = useGLTF(skyScene);
  return (
    <mesh>
      <primitive object={Sky.scene} />
    </mesh>
  )
}

export default Sky