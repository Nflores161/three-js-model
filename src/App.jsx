import { useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import './App.css'
import Three from './components/index'

function App() {

  return (
    <Canvas id ='three-canvas-container'>
      <Suspense fallback={null}>
        <Three/>
      </Suspense>
    </Canvas>  
  )
}

export default App
