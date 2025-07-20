"use client"
import { OrbitControls, Sky } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { useState } from 'react'
import SketchfabCar from './SketchfabCar'


const Scene = () => {
    const [boxArg, setBoxArg] = useState([2, 2, 2])

    const handleMeshSize = () => {
        setBoxArg((prevMeshArgs) => {
            return prevMeshArgs[0] === 2 ? [3, 3, 3] : [2, 2, 2]
        })
    }

    return (
        <div id="canvas-container" style={{
            width: '100vw',
            height: '100vh',
            backgroundColor: 'q'
        }}>
            <Canvas camera={{ position: [2, 2, 0] }}  >
                {/* Ambient light for overall illumination */}
                <ambientLight intensity={1} />

                {/* Directional light for shadows and depth */}
                <directionalLight
                    position={[10, 10, 5]}
                    intensity={1.5}
                    castShadow
                    shadow-mapSize-width={2048}
                    shadow-mapSize-height={2048}
                />

                {/* Additional fill light from the opposite side */}
                <directionalLight
                    position={[-10, 5, -5]}
                    intensity={0.8}
                />

                <Sky />

                {/* <mesh onClick={handleMeshSize} >
                    <boxGeometry args={boxArg} />
                    <meshLambertMaterial color="skyblue" />
                </mesh> */}
                <SketchfabCar />
                <OrbitControls />
            </Canvas>
        </div>
    )
}

export default Scene    