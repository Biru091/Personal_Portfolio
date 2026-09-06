"use client";

import { useEffect } from "react";
import gsap from "gsap";

export default function MovingText() {
  useEffect(() => {
    const track = document.querySelector(".moving-track");

    if (!track) return;

    const animation = gsap.to(track, {
      xPercent: -50,
      duration: 10,
      ease: "none",
      repeat: -1,
    });

    let lastScrollY = window.scrollY;
    let timeoutId;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const velocity = Math.abs(currentScrollY - lastScrollY);

      lastScrollY = currentScrollY;

      // Faster while scrolling
      const speed = Math.min(5, 1 + velocity * 0.4);

      gsap.to(animation, {
        timeScale: speed,
        duration: 0.2,
        ease: "power2.out",
      });

      clearTimeout(timeoutId);

      timeoutId = setTimeout(() => {
        gsap.to(animation, {
          timeScale: 1,
          duration: 0.8,
          ease: "power2.out",
        });
      }, 150);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      animation.kill();
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <div className="fixed top-1/2 left-0 z-50 w-full -translate-y-1/2 overflow-hidden pointer-events- text-7xl">
      <div className="moving-track flex w-max">
        <span>
          CREATIVE DEVELOPER ✦ 3D DESIGNER ✦
        </span>

        <span>
          CREATIVE DEVELOPER ✦ 3D DESIGNER ✦
        </span>
      </div>
    </div>
  );
}