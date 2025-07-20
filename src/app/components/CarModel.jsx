"use client"
import { useRef } from 'react'

const CarModel = () => {
    const carRef = useRef()

    return (
        <group ref={carRef} position={[0, 0, 0]}>
            {/* Car body */}
            <mesh position={[0, 0.5, 0]}>
                <boxGeometry args={[2, 0.5, 4]} />
                <meshLambertMaterial color="red" />
            </mesh>

            {/* Car roof */}
            <mesh position={[0, 1.25, -0.5]}>
                <boxGeometry args={[1.5, 0.5, 2]} />
                <meshLambertMaterial color="red" />
            </mesh>

            {/* Wheels */}
            <mesh position={[-0.8, 0.3, -1.2]}>
                <cylinderGeometry args={[0.3, 0.3, 0.2, 16]} rotation={[Math.PI / 2, 0, 0]} />
                <meshLambertMaterial color="black" />
            </mesh>

            <mesh position={[0.8, 0.3, -1.2]}>
                <cylinderGeometry args={[0.3, 0.3, 0.2, 16]} rotation={[Math.PI / 2, 0, 0]} />
                <meshLambertMaterial color="black" />
            </mesh>

            <mesh position={[-0.8, 0.3, 1.2]}>
                <cylinderGeometry args={[0.3, 0.3, 0.2, 16]} rotation={[Math.PI / 2, 0, 0]} />
                <meshLambertMaterial color="black" />
            </mesh>

            <mesh position={[0.8, 0.3, 1.2]}>
                <cylinderGeometry args={[0.3, 0.3, 0.2, 16]} rotation={[Math.PI / 2, 0, 0]} />
                <meshLambertMaterial color="black" />
            </mesh>

            {/* Headlights */}
            <mesh position={[0.4, 0.6, 2]}>
                <sphereGeometry args={[0.1, 16, 16]} />
                <meshLambertMaterial color="yellow" />
            </mesh>

            <mesh position={[-0.4, 0.6, 2]}>
                <sphereGeometry args={[0.1, 16, 16]} />
                <meshLambertMaterial color="yellow" />
            </mesh>

            {/* Windows */}
            <mesh position={[0, 1.25, -0.5]}>
                <boxGeometry args={[1.4, 0.4, 1.8]} />
                <meshLambertMaterial color="lightblue" transparent={true} opacity={0.7} />
            </mesh>
        </group>
    )
}

export default CarModel