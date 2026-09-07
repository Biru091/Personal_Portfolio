"use client";

import { useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".about-title", {
     
       opacity: 0,
       scale:0.2,
        ease: "none",

        scrollTrigger: {
          trigger: ".about-page",
          scroller: "body",
          scrub: 2,
          pin: true,
          start: "top top",
          end: "top -130%",
        },
      });
    });

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section className="about-page relative h-screen overflow-hidden bg-transparent">
      
     
    {/* <h1 className="about-title absolute left-0 top-1/2 -translate-y-1/2 whitespace-nowrap text-[20vw] font-black leading-none text-black/10">
  ABOUT ABOUT ABOUT ABOUT ABOUT
</h1> */}

      
      <div className=" about-title relative z-10 flex h-full items-center px-8 md:px-20">
        <div className="grid w-full grid-cols-1 gap-12 md:grid-cols-2">

          <div>
            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-black/50 font-syne">
              Who I Am
            </p>

            <h2 className="text-5xl font-bold leading-tight text-white md:text-7xl bg-black rounded-2xl p-11 font-syne">
              I build digital
              <br />
              Power.
            </h2>
          </div>

          <div className="flex items-center bg-black rounded-2xl">
            <div className="max-w-xl p-10">
              <p className="text-lg leading-8 text-white md:text-xl font-syne">
                I am Biru, a developer passionate about creating modern,
                interactive and visually engaging websites.
              </p>

              <p className="mt-6 text-lg leading-8 text-white md:text-xl font-syne">
                I work with React, Next.js, TypeScript, Tailwind CSS,
                GSAP and Three.js to create responsive interfaces,
                animations and 3D experiences.
              </p>

              
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}