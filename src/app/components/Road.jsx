"use client"
import { useRef } from 'react'
import * as THREE from 'three'

const Road = () => {
    const roadRef = useRef()

    // Create dashed center line segments
    const createDashedCenterLine = () => {
        const segments = []
        for (let i = 0; i < 50; i++) {
            segments.push(
                <mesh
                    key={`center-dash-${i}`}
                    position={[0, -0.49, -i * 20 - 10]}
                    rotation={[-Math.PI / 2, 0, 0]}
                >
                    <planeGeometry args={[0.3, 8]} />
                    <meshStandardMaterial color="#ffffff" />
                </mesh>
            )
        }
        return segments
    }

    // Create side line segments
    const createSideLines = () => {
        const segments = []
        for (let i = 0; i < 50; i++) {
            // Left side line
            segments.push(
                <mesh
                    key={`left-line-${i}`}
                    position={[-25, -0.49, -i * 20 - 10]}
                    rotation={[-Math.PI / 2, 0, 0]}
                >
                    <planeGeometry args={[0.2, 20]} />
                    <meshStandardMaterial color="#ffffff" />
                </mesh>
            )
            // Right side line
            segments.push(
                <mesh
                    key={`right-line-${i}`}
                    position={[25, -0.49, -i * 20 - 10]}
                    rotation={[-Math.PI / 2, 0, 0]}
                >
                    <planeGeometry args={[0.2, 20]} />
                    <meshStandardMaterial color="#ffffff" />
                </mesh>
            )
        }
        return segments
    }

    return (
        <group ref={roadRef}>
            {/* Main road surface - much longer for endless road */}
            <mesh
                position={[0, -0.5, -500]}
                rotation={[-Math.PI / 2, 0, 0]}
                receiveShadow
            >
                <planeGeometry args={[100, 1000]} />
                <meshStandardMaterial
                    color="#2c2c2c"
                    roughness={0.8}
                    metalness={0.1}
                />
            </mesh>

            {/* Road markings - dashed center line */}
            {createDashedCenterLine()}

            {/* Road markings - continuous side lines */}
            {createSideLines()}

            {/* Road shoulders - much longer */}
            <mesh
                position={[-30, -0.48, -500]}
                rotation={[-Math.PI / 2, 0, 0]}
            >
                <planeGeometry args={[10, 1000]} />
                <meshStandardMaterial color="#4a4a4a" />
            </mesh>

            <mesh
                position={[30, -0.48, -500]}
                rotation={[-Math.PI / 2, 0, 0]}
            >
                <planeGeometry args={[10, 1000]} />
                <meshStandardMaterial color="#4a4a4a" />
            </mesh>

            {/* Grass/terrain on sides - much longer */}
            <mesh
                position={[-50, -0.47, -500]}
                rotation={[-Math.PI / 2, 0, 0]}
            >
                <planeGeometry args={[40, 1000]} />
                <meshStandardMaterial color="#2d5a27" />
            </mesh>

            <mesh
                position={[50, -0.47, -500]}
                rotation={[-Math.PI / 2, 0, 0]}
            >
                <planeGeometry args={[40, 1000]} />
                <meshStandardMaterial color="#2d5a27" />
            </mesh>

            {/* Horizon line for depth perception */}
            <mesh
                position={[0, 0, -1000]}
                rotation={[0, 0, 0]}
            >
                <planeGeometry args={[200, 100]} />
                <meshStandardMaterial color="#87CEEB" opacity={0.8} transparent />
            </mesh>
        </group>
    )
}

export default Road 