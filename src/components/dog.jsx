
import { useRef, useEffect } from 'react'

import {
  useGLTF,
  useAnimations,
  Center,
  OrbitControls,
  useTexture
} from '@react-three/drei'
import { normalMap } from 'three/tsl'

const Dog = () => {

  const group = useRef()

  const { scene, animations } = useGLTF(
    '/models/dog.drc.glb'
  )

  const { actions } = useAnimations(
    animations,
    group
  )

  useEffect(() => {
    const animation = actions['Take 001']

    if (animation) {
      animation.reset()
      animation.play()
    }
  }, [actions])
   
  const textures = useTexture ({
    normalMap:"/dog_normals.jpg"

  })
  model.scene.traverse(())
  
  return (
    <>
      <group ref={group}>
        <Center>
          <primitive
            object={scene}
            scale={2}
          />
        </Center>
      </group>

      <ambientLight intensity={1.5} />

      <directionalLight
        position={[5, 5, 5]}
        intensity={3}
      />

      <directionalLight
        position={[-5, 3, 5]}
        intensity={2}
      />

      <hemisphereLight
        color="#ffffff"
        groundColor="#555555"
        intensity={1}
      />

      <OrbitControls
        makeDefault
        enablePan={false}
      />
    </>
  )
}

export default Dog
