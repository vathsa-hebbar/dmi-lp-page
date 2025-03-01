"use client"

import { Suspense } from "react"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, Environment, useGLTF } from "@react-three/drei"

function Model() {
  const { scene } = useGLTF("/assets/3d/duck.glb")
  return <primitive object={scene} scale={2} />
}

export function InteractiveModel() {
  return (
    <section id="interactive-model" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience Our Technology</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Interact with our 3D model to explore the possibilities of home automation.
          </p>
        </div>
        <div className="w-full h-[400px] md:h-[600px] bg-background rounded-xl overflow-hidden shadow-lg">
          <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
            <ambientLight intensity={0.5} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
            <pointLight position={[-10, -10, -10]} />
            <Suspense fallback={null}>
              <Model />
              <Environment preset="studio" />
            </Suspense>
            <OrbitControls />
          </Canvas>
        </div>
      </div>
    </section>
  )
}

