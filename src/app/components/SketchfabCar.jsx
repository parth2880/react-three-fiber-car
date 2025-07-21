"use client"
import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { forwardRef } from 'react'

const SketchfabCar = forwardRef((props, ref) => {
    // Load the model using GLTFLoader
    const gltf = useLoader(GLTFLoader, '/ford_mustang_1965.glb')
    const scene = gltf.scene

    return (
        <group ref={ref} position={[0, 0.2, -200]} scale={[4, 4, 4]}>
            <primitive object={scene} />
        </group>
    )
})

SketchfabCar.displayName = 'SketchfabCar'

export default SketchfabCar


// "use client"
// import { OrbitControls, Sky } from '@react-three/drei'
// import { Canvas } from '@react-three/fiber'
// import { useState, Suspense } from 'react'
// // import SketchfabCar from './SketchfabCar'
// import Mustang from '../../../public/Mustang'


// const Scene = () => {
//     const [boxArg, setBoxArg] = useState([2, 2, 2])

//     const handleMeshSize = () => {
//         setBoxArg((prevMeshArgs) => {
//             return prevMeshArgs[0] === 2 ? [3, 3, 3] : [2, 2, 2]
//         })
//     }

//     return (
//         <div id="canvas-container" style={{
//             width: '100vw',
//             height: '100vh',
//             backgroundColor: 'q'
//         }}>
//             <Canvas>
//                 <ambientLight />
//                 <Suspense fallback={null}>
//                     <Sky />
//                     <Mustang />
//                 </Suspense>
//                 {/* <mesh onClick={handleMeshSize} >
//                     <boxGeometry args={boxArg} />
//                     <meshLambertMaterial color="skyblue" />
//                 </mesh> */}
//                 {/* <SketchfabCar /> */}
//                 <OrbitControls />
//             </Canvas>
//         </div>
//     )
// }

// export default Scene    