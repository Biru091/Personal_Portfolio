"use client";

import { useEffect, useRef } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import {
  OrbitControls,
  useAnimations,
  useGLTF,
  useTexture,
} from "@react-three/drei";

import {
  Group,
  Mesh,
  MeshStandardMaterial,
  SRGBColorSpace,
} from "three";

gsap.registerPlugin(ScrollTrigger);

function Model() {
  const group = useRef<Group>(null);

  const { scene, animations } = useGLTF("/3d/loop.glb");
  const texture = useTexture("/3d/texture.jpg");

  
  const { size } = useThree();

 
  const modelScale = size.width < 768 ? 0.15 : 0.6;

 
  useGSAP(() => {
    if (!group.current) return;

    
    gsap.from(group.current.position, {
      opacity: 0,
      z: -7,
      duration: 1,
      scrub: 1,
      ease: "power3.out",
    });

   
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".page",
        start: "top top",
        end: "bottom bottom",
        scrub: 1,
      },
    });

    tl.to(group.current.rotation, {
      y: Math.PI / 0.8,
      duration: 0.6,
    })
      .to(
        group.current.position,
        {
          x: 9,
          y: 9,
          duration: 0.4,
        },
        "<"
      )
      .to(
        group.current.scale,
        {
          x: 0.1,
          y: 0.1,
          z: 0.1,
          duration: 0.3,
          ease: "none",
        },
        "<"
      );
  });

 
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    const animation = Object.values(actions)[0];

    if (!animation) return;

    animation.reset().fadeIn(0.5).play();
    animation.timeScale = 0.5;

    return () => {
      animation.fadeOut(0.5);
      animation.stop();
    };
  }, [actions]);

 
  useEffect(() => {
    scene.traverse((child) => {
      if (!(child instanceof Mesh)) return;

      const material = new MeshStandardMaterial({
        map: texture,
        emissive: "#2563FF",
        emissiveMap: texture,
        emissiveIntensity: 2,
      });

      if (material.map) {
        material.map.colorSpace = SRGBColorSpace;
      }

      child.material = material;
    });
  }, [scene, texture]);

  return (
    <group
      ref={group}
      scale={modelScale}
    >
      <primitive
        object={scene}
        position={[0, -4, 0]}
        rotation={[3, Math.PI / 2, Math.PI / 2]}
      />
    </group>
  );
}

export default function Hero3D() {
  return (
    <Canvas
      camera={{
        position: [0, 0, 5],
        fov: 45,
      }}
    >
      <ambientLight intensity={0.2} />

      <directionalLight
        position={[5, 5, 5]}
        intensity={0.5}
      />

      <Model />

      <OrbitControls
        enableZoom={false}
        enablePan={false}
      />
    </Canvas>
  );
}

useGLTF.preload("/3d/loop.glb");