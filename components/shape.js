import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import dynamic from 'next/dynamic'
import { useState } from 'react'

const FluidSimulation = dynamic(() => import('./fluid'), {
  ssr: false
})

export default function Shape() {
  const [pointer, setPointer] = useState([0, 0])

  return (
    <div 
      style={{ width: '100vw', height: '100vh' }}
      onPointerMove={(e) => {
        const x = (e.clientX / window.innerWidth) * 2 - 1
        const y = -(e.clientY / window.innerHeight) * 2 + 1
        setPointer([x, y])
      }}
    >
      <Canvas camera={{ position: [0, 0, 2] }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <FluidSimulation pointer={pointer} />
        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  )
}