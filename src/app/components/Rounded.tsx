"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Rounded() {
  const circleRef = useRef<SVGGElement | null>(null);

  useEffect(() => {
    const circle = circleRef.current;

    if (!circle) return;

    const animation = gsap.to(circle, {
      rotation: 360,
      duration: 20,
      repeat: -1,
      ease: "none",
      svgOrigin: "250 250",
    });

    return () => {
      animation.kill();
    };
  }, []);

  return (
    <div className="fixed bottom-1 right-0 z-50 pointer-events-none">
      <svg
        width="200"
        height="200"
        viewBox="0 0 400 400"
        className="overflow-visible"
      >
        <defs>
          <path
            id="textCircle"
            d="M250,250 m-70,0 a70,70 0 1,1 140,0 a70,70 0 1,1 -140,0"
          />
        </defs>

        <g ref={circleRef}>
          <text
            fill="currentColor"
            fontSize="22"
            fontFamily="monospace"
            letterSpacing="2"
          >
            <textPath href="#textCircle">
              CREATIVE DEVELOPER ✦ 3D DESIGNER ✦ CREATIVE DEVELOPER ✦
            </textPath>
          </text>
        </g>
      </svg>
    </div>
  );
}