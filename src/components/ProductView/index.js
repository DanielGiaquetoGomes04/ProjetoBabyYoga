import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stars, useGLTF } from '@react-three/drei'

function Shoe() {
  const { scene } = useGLTF("./buda.gltf")

  return <primitive object={scene} scale={1} />
}


function ProductView() {
  return <Canvas style={{height: window.innerHeight - 90}}>
    <OrbitControls />
      <Stars/>
      <ambientLight intensity={1} />
      <spotLight position={[10, 15, 10]} angle={0.3} />
      <Shoe/>
    </Canvas>;
  
}



export default ProductView;
