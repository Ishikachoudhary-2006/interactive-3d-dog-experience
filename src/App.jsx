
import './App.css'
import Dog from './components/dog'
import { Canvas } from '@react-three/fiber'

function App() {
  return (
    <Canvas
      camera={{
        position: [0, 0.25, 2.8],
        fov: 40,
        near: 0.1,
        far: 1000
      }}
      gl={{ antialias: true }}
      dpr={[1, 2]}
    >
      <color attach="background" args={['#000000']} />
      <Dog />
    </Canvas>
  )
}

export default App
