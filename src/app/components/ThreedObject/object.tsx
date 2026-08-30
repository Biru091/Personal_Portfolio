"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  OrbitControls,
  useGLTF,
  useTexture,
  Environment,
} from "@react-three/drei";
import * as THREE from "three";

function Model() {
  const modelRef = useRef<THREE.Group>(null);

  const { scene } = useGLTF(
    "/3d/phantom_rings/scene.gltf"
  );

  const texture = useTexture("/3d/phantom_rings/textures/texture.png");

  // Apply texture
  scene.traverse((child) => {
    if (child instanceof THREE.Mesh) {
      child.material = new THREE.MeshStandardMaterial({
        map: texture,
        metalness: 0.7,
        roughness: 0.3,
      });
    }
  });

  // Animation
  useFrame((state) => {
    if (!modelRef.current) return;

    const time = state.clock.elapsedTime;

    modelRef.current.rotation.y = time * 0.5;

    modelRef.current.position.y =
      Math.sin(time * 1.5) * 0.3;
  });

  return (
    <group ref={modelRef}>
      <primitive object={scene} scale={2} />
    </group>
  );
}

export default function PhantomRings() {
  return (
    <div className="h-screen w-full">
      <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
        <ambientLight intensity={1.5} />

        <directionalLight
          position={[5, 5, 5]}
          intensity={3}
        />

        <Model />

        <Environment preset="city" />

        
      </Canvas>
    </div>
  );
}

useGLTF.preload("/3d/phantom_rings/scene.gltf");