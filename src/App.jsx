
import './App.css'
import Dog from './components/dog'
import { Canvas } from '@react-three/fiber'

function App() {
  return (
    <Canvas
      camera={{
        position: [0, 0, 4.2],
        fov: 45,
        near: 0.1,
        far: 1000
      }}
    >
      <Dog />
    </Canvas>
  )
}

export default App
