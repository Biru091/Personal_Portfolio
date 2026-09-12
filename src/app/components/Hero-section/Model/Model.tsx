"use client";

import { useEffect, useRef } from "react";

import { Canvas } from "@react-three/fiber";

import {
  OrbitControls,
  useAnimations,
  useGLTF,
} from "@react-three/drei";

import { Group } from "three";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

function Model() {
  const group = useRef<Group>(null);

  const { scene, animations } = useGLTF("/3d/bird.glb");

  const { actions } = useAnimations(animations, group);

  // ==========================================
  // GLB ANIMATION
  // ==========================================

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

 
  useGSAP(() => {
    if (!group.current) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".hero-animation",
        start: "top top",
        end: "+=1800",
        scrub: 1,
        pin: true,
        pinSpacing: true,
        anticipatePin: 1,
      },
    });

    tl.to(group.current.position, {
      x: -8,
      y: 2,
      z: 2,
      duration: 5,
      ease: "power2.inOut",
    })

      .to(
        group.current.rotation,
        {
          x: 0,
          y: Math.PI * 0.35,
          z: -Math.PI * 0.08,
          duration: 8,
          ease: "power2.inOut",
        },
        "<"
      )

      .to(
        group.current.scale,
        {
          x: 0.0035,
          y: 0.0035,
          z: 0.0035,
          duration: 8,
          ease: "power2.inOut",
        },
        "<"
      )

      .to(group.current.position, {
        x: 1,
        y: -0.8,
        z: 0.5,
        duration: 8,
        ease: "power2.inOut",
      })

      .to(
        group.current.rotation,
        {
          x: Math.PI * 0.08,
          y: Math.PI * 0.7,
          z: 0,
          duration: 8,
          ease: "power2.inOut",
        },
        "<"
      )

      .to(
        group.current.scale,
        {
          x: 0.003,
          y: 0.003,
          z: 0.003,
          duration: 8,
          ease: "power2.inOut",
        },
        "<"
      )

      .to(group.current.position, {
        x: 3,
        y: -0.3,
        z: 0,
        duration: 1,
        ease: "power2.inOut",
      })

      .to(
        group.current.rotation,
        {
          x: 0,
          y: Math.PI,
          z: Math.PI * 0.08,
          duration: 1,
          ease: "power2.inOut",
        },
        "<"
      )

      .to(
        group.current.scale,
        {
          x: 0.0025,
          y: 0.0025,
          z: 0.0025,
          duration: 1,
          ease: "power2.inOut",
        },
        "<"
      )

      .to(group.current.position, {
        x: 4,
        y: -0.8,
        z: -0.5,
        duration: 0.8,
        ease: "power2.inOut",
      })

      .to(
        group.current.rotation,
        {
          x: 0,
          y: Math.PI * 1.2,
          z: 0,
          duration: 0.8,
          ease: "power2.inOut",
        },
        "<"
      );
  });


 

  return (
    <group
      ref={group}
      scale={0.003}
      position={[5, 0, 0]}
      rotation={[0, 2, 0]}
    >
      <primitive
        object={scene}
        position={[0, 0, 0]}
        rotation={[0, 0, 0]}
      />
    </group>
  );
}


export default function Hero3D() {
  return (
    <section className="hero-animation relative h-[100svh] w-full overflow-hidden">
      <Canvas
        className="!absolute inset-0 h-full w-full"
        camera={{
          position: [0, 0, 8],
          fov: 45,
          near: 0.1,
          far: 1000,
        }}
        gl={{
          antialias: true,
          alpha: true,
        }}
        dpr={[1, 2]}
      >
        {/* LIGHTING */}

        <ambientLight intensity={0.5} />

        <directionalLight
          position={[5, 5, 5]}
          intensity={1}
        />

        {/* MODEL */}

        <Model />

        {/* CONTROLS */}

        <OrbitControls
          enableZoom={false}
          enablePan={false}
        />
      </Canvas>
    </section>
  );
}

// ==============================================
// PRELOAD MODEL
// ==============================================

useGLTF.preload("/3d/bird.glb");