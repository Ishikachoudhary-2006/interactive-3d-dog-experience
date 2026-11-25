
import {
  OrbitControls,
  useGLTF,
  Bounds,
  Center
} from '@react-three/drei'

const Dog = () => {

  const model = useGLTF("/models/dog.drc.glb")

  return (
    <>
      <Bounds fit clip observe margin={1.2}>
        <Center>
          <primitive object={model.scene} />
        </Center>
      </Bounds>

      <ambientLight intensity={1.5} />

      <directionalLight
        position={[5, 5, 5]}
        intensity={2}
      />

      <OrbitControls makeDefault />
    </>
  )
}

export default Dog
