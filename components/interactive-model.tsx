"use client"

import { Suspense, useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls, Environment, useHelper } from "@react-three/drei"
import * as THREE from "three"

function Room() {
  const wallColor = new THREE.Color("#f0f0f0")
  const floorColor = new THREE.Color("#d2b48c")
  const furnitureColor = new THREE.Color("#8b4513")
  const tvColor = new THREE.Color("#000000")
  const lightColor = new THREE.Color("#ffff00")

  const pointLightRef = useRef<THREE.PointLight>(null)
  if (pointLightRef.current) {
    useHelper(pointLightRef as React.MutableRefObject<THREE.Object3D>, THREE.PointLightHelper, 0.5, "yellow")
  }

  useFrame(({ clock }) => {
    if (pointLightRef.current) {
      pointLightRef.current.position.y = Math.sin(clock.getElapsedTime()) * 0.2 + 2.5
    }
  })

  return (
    <group>
      {/* Floor */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]}>
        <planeGeometry args={[10, 10]} />
        <meshStandardMaterial color={floorColor} />
      </mesh>

      {/* Walls */}
      <mesh position={[0, 2.5, -5]}>
        <boxGeometry args={[10, 5, 0.1]} />
        <meshStandardMaterial color={wallColor} />
      </mesh>
      <mesh position={[-5, 2.5, 0]} rotation={[0, Math.PI / 2, 0]}>
        <boxGeometry args={[10, 5, 0.1]} />
        <meshStandardMaterial color={wallColor} />
      </mesh>

      {/* Sofa */}
      <mesh position={[0, 0.6, -3]}>
        <boxGeometry args={[4, 1.2, 1.5]} />
        <meshStandardMaterial color={furnitureColor} />
      </mesh>

      {/* TV Stand */}
      <mesh position={[0, 0.5, -4.5]}>
        <boxGeometry args={[3, 1, 1]} />
        <meshStandardMaterial color={furnitureColor} />
      </mesh>

      {/* TV */}
      <mesh position={[0, 1.5, -4.9]}>
        <boxGeometry args={[2.5, 1.5, 0.1]} />
        <meshStandardMaterial color={tvColor} />
      </mesh>

      {/* Smart Light */}
      <pointLight ref={pointLightRef} position={[0, 2.5, 0]} intensity={0.5} color={lightColor} />
      <mesh position={[0, 2.5, 0]}>
        <sphereGeometry args={[0.1, 16, 16]} />
        <meshStandardMaterial color={lightColor} emissive={lightColor} emissiveIntensity={0.5} />
      </mesh>

      {/* Smart Thermostat */}
      <mesh position={[-4.9, 1.5, 0]}>
        <boxGeometry args={[0.1, 0.2, 0.2]} />
        <meshStandardMaterial color="gray" />
      </mesh>
    </group>
  )
}

export function InteractiveModel() {
  return (
    <section id="interactive-model" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience Our Smart Home Technology</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Interact with our 3D model to explore a smart home environment and the possibilities of home automation.
          </p>
        </div>
        <div className="w-full h-[400px] md:h-[600px] bg-background rounded-xl overflow-hidden shadow-lg">
          <Canvas camera={{ position: [5, 5, 5], fov: 50 }}>
            <ambientLight intensity={0.5} />
            <Suspense fallback={null}>
              <Room />
              <Environment preset="apartment" />
            </Suspense>
            <OrbitControls target={[0, 1, 0]} maxPolarAngle={Math.PI / 2} />
          </Canvas>
        </div>
      </div>
    </section>
  )
}

