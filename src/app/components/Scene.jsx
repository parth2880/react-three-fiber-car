"use client"
import { OrbitControls, Sky } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { useState, useRef } from 'react'
import SketchfabCar from './SketchfabCar'
import Road from './Road'


const Scene = () => {
    const [boxArg, setBoxArg] = useState([2, 2, 2])
    const carRef = useRef()

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
            <Canvas camera={{ position: [0, 3, -180], fov: 20, far: 2000 }}  >
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

                {/* Road - fixed in place */}
                <Road />

                <SketchfabCar ref={carRef} />
                <OrbitControls
                    enablePan={true}
                    enableZoom={true}
                    enableRotate={true}
                    maxPolarAngle={Math.PI / 2}
                    minDistance={5}
                    maxDistance={50}
                />
            </Canvas>
        </div>
    )
}

export default Scene