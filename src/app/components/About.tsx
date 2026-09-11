"use client";

import { useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".about-page",
          start: "top top",
          end: "+=150%",
          scrub: 1.5,
          pin: true,
          anticipatePin: 1,
        },
      });

      tl.fromTo(
        ".about-left",
        {
          x: -120,
          opacity: 0,
          filter: "blur(12px)",
        },
        {
          x: 0,
          opacity: 1,
          filter: "blur(0px)",
          ease: "power3.out",
          duration: 1,
        }
      )

        .fromTo(
          ".about-right",
          {
            x: 120,
            opacity: 0,
            filter: "blur(12px)",
          },
          {
            x: 0,
            opacity: 1,
            filter: "blur(0px)",
            ease: "power3.out",
            duration: 1,
          },
          "<0.2"
        )

        
        .fromTo(
          ".about-label",
          {
            y: 30,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
          },
          "<0.1"
        )

        .fromTo(
          ".about-heading",
          {
            scale: 0.75,
            opacity: 0,
            y: 50,
          },
          {
            scale: 1,
            opacity: 1,
            y: 0,
            ease: "power3.out",
            duration: 1,
          },
          "<"
        )

        .fromTo(
          ".about-description",
          {
            y: 60,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            ease: "power3.out",
            duration: 1,
          },
          "<0.2"
        )

        
        .fromTo(
          ".about-stack",
          {
            y: 40,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            ease: "power3.out",
            duration: 0.8,
          },
          "<0.15"
        )

        .to(
          ".about-left",
          {
            x: -80,
            opacity: 0,
            filter: "blur(8px)",
            ease: "power2.in",
            duration: 1,
          },
          "+=0.4"
        )

        .to(
          ".about-right",
          {
            x: 80,
            opacity: 0,
            filter: "blur(8px)",
            ease: "power2.in",
            duration: 1,
          },
          "<"
        );

      gsap.to(".about-circle", {
        rotate: 180,
        scale: 1.2,
        x:-200,
        ease: "none",
        scrollTrigger: {
          trigger: ".about-page",
          start: "top top",
          end: "+=150%",
          scrub: 2,
        },
      });

      // Section number
      gsap.to(".about-number", {
        y: -40,
        opacity: 0.2,
        ease: "none",
        scrollTrigger: {
          trigger: ".about-page",
          start: "top top",
          end: "+=100%",
          scrub: 1,
        },
      });
    });

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section className="about-page relative h-screen w-full overflow-hidden bg-transparent">


      <div className="about-circle  pointer-events-none absolute right-[15vw] top-1/2 h-[45vw] w-[45vw] -translate-y-1/2 rounded-full border border-black/20" />

      <div className="pointer-events-none absolute  right-[8vw] top-1/2 h-[30vw] w-[30vw] -translate-y-1/2 rounded-full border border-black/20" />

     

      <div className="about-number absolute left-8 top-8 font-syne text-xs uppercase tracking-[0.3em] text-black/40 md:left-20 md:top-12">
         About
      </div>

      

      <div className="relative z-10 flex h-full items-center px-6 md:px-20">

        <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-8 md:grid-cols-2 md:gap-12">

         

          <div className="about-left flex flex-col justify-center rounded-[2rem] bg-black p-8 md:p-12">

            <p className="about-label mb-6 font-syne text-xs uppercase tracking-[0.35em] text-white/50">
              Who I Am
            </p>

            <h2 className="about-heading font-syne text-5xl font-medium leading-[0.95] tracking-[-0.04em] text-white md:text-7xl">
              I build
              <br />
              digital
              <br />
              <span className="text-white/40">
                Power.
              </span>
            </h2>

            <div className="mt-10 flex items-center gap-4">
              <div className="h-px w-16 bg-white/30" />

              <span className="font-syne text-[10px] uppercase tracking-[0.25em] text-white/40">
                Creative Developer
              </span>
            </div>

          </div>

          

          <div className="about-right flex items-center rounded-[2rem] border border-black/10 bg-white/60 p-8 backdrop-blur-xl md:p-12">

            <div className="max-w-xl">

              <p className="about-description font-syne text-lg leading-8 text-black/80 md:text-xl md:leading-9">
                I am Biru, a developer passionate about creating modern,
                interactive and visually engaging websites.
              </p>

              <p className="about-stack mt-8 font-syne text-base leading-8 text-black/50 md:text-lg">
                I work with{" "}
                <span className="text-black">
                  React, Next.js, TypeScript,
                </span>{" "}
                Tailwind CSS, GSAP and Three.js to create responsive
                interfaces, animations and 3D experiences.
              </p>

              <div className="mt-10 flex flex-wrap gap-2">
                {[
                  "React",
                  "Next.js",
                  "TypeScript",
                  "GSAP",
                  "Three.js",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-black/10 px-4 py-2 font-syne text-[10px] uppercase tracking-[0.15em] text-black/50"
                  >
                    {tech}
                  </span>
                ))}
              </div>

            </div>

          </div>

        </div>

      </div>

     
      <div className="absolute bottom-8 left-8 right-8 flex items-center justify-between md:left-20 md:right-20">
        <span className="font-syne text-[10px] uppercase tracking-[0.25em] text-black/30">
          Digital experiences
        </span>

        <span className="font-syne text-[10px] uppercase tracking-[0.25em] text-black/30">
          Scroll to explore
        </span>
      </div>

    </section>
  );
}
