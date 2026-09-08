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

gsap.registerPlugin(ScrollTrigger);

function Model() {
  const group = useRef<Group>(null);

  const { scene, animations } = useGLTF("/3d/loop.glb");

  const { actions } = useAnimations(animations, group);

  // ==========================================
  // GLB ANIMATION
  // ==========================================

  useEffect(() => {
    const animation = Object.values(actions)[0];

    if (!animation) return;

    animation.reset().fadeIn(0.5).play();

    // Slow down the GLB's built-in animation
    animation.timeScale = 0.5;

    return () => {
      animation.fadeOut(0.5);
      animation.stop();
    };
  }, [actions]);

  // ==========================================
  // GSAP SCROLL ANIMATION
  // ==========================================

  useEffect(() => {
    if (!group.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: "#skill",

          // Start when Skills section reaches top
          start: "top top",

          // Much longer scroll distance
          end: "+=500%",

          // Smooth scroll-controlled animation
          scrub: 2,
        },
      });

      // ======================================
      // 1. SLOW ROTATION
      // ======================================

      tl.to(group.current!.rotation, {
        y: Math.PI * 2,
        duration: 3,
        ease: "none",
      })

        // ======================================
        // 2. MOVE UP + RIGHT
        // Runs together with rotation
        // ======================================

        .to(
          group.current!.position,
          {
            x: 2,
            y: 1,
            duration: 3,
            ease: "none",
          },
          "<"
        )

        // ======================================
        // 3. MORE ROTATION
        // ======================================

        .to(group.current!.rotation, {
          x: Math.PI * 2,
          duration: 3,
          ease: "none",
        })

        // ======================================
        // 4. MOVE LEFT + UP
        // ======================================

        .to(group.current!.position, {
          x: -2,
          y: 2,
          duration: 3,
          ease: "none",
        })

        // ======================================
        // 5. ROTATE AGAIN
        // ======================================

        .to(group.current!.rotation, {
          z: Math.PI * 2,
          duration: 3,
          ease: "none",
        })

        // ======================================
        // 6. FINAL MOVEMENT
        // ======================================

        .to(group.current!.position, {
          x: 0,
          y: 0,
          duration: 3,
          ease: "none",
        })

        // ======================================
        // 7. SHRINK AT THE VERY END
        // ======================================

        .to(group.current!.scale, {
          x: 0.05,
          y: 0.05,
          z: 0.05,
          duration: 2,
          ease: "none",
        });
    });

    return () => ctx.revert();
  }, []);

  // ==========================================
  // MODEL
  // ==========================================

  return (
    <group
      ref={group}
      scale={0.2}
      position={[0, -3, 0]}
      rotation={[0, -2, 0]}
    >
      <primitive
        object={scene}
        position={[-15, -2, 0]}
        rotation={[7, 0, 8]}
      />
    </group>
  );
}

// ==============================================
// HERO 3D
// ==============================================

export default function Hero3D() {
  return (
    <div className="h-full w-full">
      <Canvas
        camera={{
          position: [0, 0, 5],
          fov: 45,
        }}
        gl={{
          antialias: true,
          alpha: true,
        }}
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
    </div>
  );
}

// Preload model
useGLTF.preload("/3d/loop.glb");