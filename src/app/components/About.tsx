"use client";

import { useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(".about-title", {
        x: "-125%",
        ease: "none",

        scrollTrigger: {
          trigger: ".about-page",
          scroller: "body",
          scrub: 2,
          pin: true,
          start: "top top",
          end: "top -120%",
        },
      });
    });

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section className="about-page relative h-screen overflow-hidden bg-transparent">
      
      {/* Background scrolling text */}
    <h1 className="about-title absolute left-0 top-1/2 -translate-y-1/2 whitespace-nowrap text-[20vw] font-black leading-none text-black/10">
  ABOUT ABOUT ABOUT ABOUT ABOUT
</h1>

      {/* Content */}
      <div className="relative z-10 flex h-full items-center px-8 md:px-20">
        <div className="grid w-full grid-cols-1 gap-12 md:grid-cols-2">

          <div>
            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-black/50">
              Who I Am
            </p>

            <h2 className="text-5xl font-bold leading-tight text-black md:text-7xl">
              I build digital
              <br />
              experiences.
            </h2>
          </div>

          <div className="flex items-center">
            <div className="max-w-xl">
              <p className="text-lg leading-8 text-black/70 md:text-xl">
                I am Biru, a developer passionate about creating modern,
                interactive and visually engaging websites.
              </p>

              <p className="mt-6 text-lg leading-8 text-black/70 md:text-xl">
                I work with React, Next.js, TypeScript, Tailwind CSS,
                GSAP and Three.js to create responsive interfaces,
                animations and 3D experiences.
              </p>

              <button className="mt-8 rounded-full bg-black px-7 py-3 text-sm font-medium text-white transition hover:scale-105">
               Learning
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}