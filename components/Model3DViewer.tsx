"use client"

import { Canvas, useThree } from "@react-three/fiber"
import { OrbitControls, useGLTF, Stage, PerspectiveCamera } from "@react-three/drei"
import { Suspense, useEffect, useRef } from "react"
import { Loader2 } from "lucide-react"
import * as THREE from "three"

function Model({ url }: { url: string }) {
  const { scene } = useGLTF(url)
  const { camera } = useThree()
  const modelRef = useRef<THREE.Group>()

  useEffect(() => {
    if (modelRef.current) {
      const box = new THREE.Box3().setFromObject(modelRef.current)
      const center = box.getCenter(new THREE.Vector3())
      const size = box.getSize(new THREE.Vector3())

      const maxDim = Math.max(size.x, size.y, size.z)
      const fov = camera.fov * (Math.PI / 180)
      let cameraZ = Math.abs(maxDim / 2 / Math.tan(fov / 2))

      cameraZ *= 1.5 // Zoom out a little so object fits comfortably

      camera.position.set(center.x, center.y, center.z + cameraZ)
      camera.lookAt(center)
      camera.updateProjectionMatrix()

      // Update OrbitControls
      const controls = modelRef.current.parent?.parent?.parent?.children.find(
        (child) => child.constructor.name === "OrbitControls",
      ) as THREE.Object3D | undefined

      if (controls && "target" in controls) {
        controls.target.copy(center)
        ;(controls as any).update()
      }
    }
  }, [camera])

  return <primitive ref={modelRef} object={scene} />
}

export function Model3DViewer({ modelUrl }: { modelUrl: string }) {
  return (
    <div className="w-full h-[400px] rounded-lg overflow-hidden">
      <Suspense
        fallback={
          <div className="w-full h-full flex items-center justify-center bg-black/50">
            <Loader2 className="w-8 h-8 animate-spin text-white/50" />
          </div>
        }
      >
        <Canvas shadows dpr={[1, 2]} camera={{ fov: 45 }}>
          <PerspectiveCamera makeDefault fov={45} near={0.1} far={1000} position={[0, 0, 5]} />
          <Stage environment="city" intensity={0.6} adjustCamera={false}>
            <Model url={modelUrl} />
          </Stage>
          <OrbitControls enableZoom={true} autoRotate={true} autoRotateSpeed={0.5} />
        </Canvas>
      </Suspense>
    </div>
  )
}

