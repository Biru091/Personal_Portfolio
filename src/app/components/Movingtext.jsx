"use client";

import { useEffect } from "react";
import gsap from "gsap";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import { min } from "three/src/nodes/TSL.js";
import { useRef } from "react";
export default function MovingText() {
  const middleLogoRef = useRef(null);
  useGSAP(() => {
  gsap.to(middleLogoRef.current, {
    y:20,
    duration: 1.3,
    repeat: -1,
    yoyo: true,
    ease: "power1.inOut",
    
  });
});

  useEffect(() => {
    const track = document.querySelector(".moving-track");

    if (!track) return;

    const animation = gsap.to(track, {
      xPercent: -50,
      duration: 10,
      ease: "none",
      repeat: -1,
    });

    

  }, []);

  return (
    <div className="absolute top-1/2 left-0 z-50 w-full -translate-y-1/2  pointer-events-none text-3xl md:text-7xl font-syne">
      <div className="moving-track flex w-max overflow-hidden">
        <span>
          CREATIVE DEVELOPER ✦ 3D DESIGNER ✦
        </span>

        <span>
          CREATIVE DEVELOPER ✦ 3D DESIGNER ✦
        </span>
        
       
      </div>
       <Image
          src="/menu/img.webp"
          alt="Arrow"
          width={300}
          height={300}
          className="middle-logo absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none h-40 w-40 md:h-60 md:w-60 "
          ref={middleLogoRef}
        />
    </div>
  );
}