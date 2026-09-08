"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";

import {
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiMongodb,
  SiGreensock,
  SiThreedotjs,
} from "react-icons/si";

gsap.registerPlugin(ScrollTrigger);

const skills = [
  { name: "HTML", icon: FaHtml5 },
  { name: "CSS", icon: FaCss3Alt },
  { name: "JavaScript", icon: FaJs },
  { name: "TypeScript", icon: SiTypescript },
  { name: "React", icon: FaReact },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "Tailwind", icon: SiTailwindcss },
  { name: "Node.js", icon: FaNodeJs },
  { name: "MongoDB", icon: SiMongodb },
  { name: "Git", icon: FaGitAlt },
  { name: "GitHub", icon: FaGithub },
  { name: "GSAP", icon: SiGreensock },
  { name: "Three.js", icon: SiThreedotjs },
];

export default function Skills() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray<HTMLElement>(".skill");

      // Initial animation
      gsap.from(items, {
        opacity: 0,
        y: 100,
        rotate: () => gsap.utils.random(-8, 8),
        duration: 1,
        stagger: {
          amount: 1.2,
          from: "random",
        },
        ease: "power3.out",
      });

      // Move whole grid while scrolling
      gsap.to(gridRef.current, {
        y: "-35vh",
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1.5,
        },
      });

      // Individual card movement
      items.forEach((item, index) => {
        const direction = index % 2 === 0 ? 1 : -1;

        gsap.to(item, {
          x: () => gsap.utils.random(20, 40) * direction,
          rotation: () => gsap.utils.random(-12, 12),

          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "bottom top",
            scrub: 2,
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <main
      ref={sectionRef}
      className="relative min-h-[180vh] overflow-hidden bg-transparent text-black"
    >
      {/* TITLE */}
      <div className="pointer-events-none sticky top-0 z-20 flex h-screen items-center justify-center">
        <div className="absolute left-6 top-24 md:left-16">
          <p className="mb-3 text-xs uppercase tracking-[0.4em] text-black">
            Technologies
          </p>

          <h1 className="text-5xl font-bold tracking-tight md:text-7xl">
            My <span>Skills</span>
          </h1>
        </div>
      </div>

      {/* SKILL GRID */}
      <div
        ref={gridRef}
        className="absolute left-0 top-[40vh] z-10 w-full px-5 md:px-12"
      >
        <div className="mx-auto grid max-w-7xl grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {skills.map((skill) => {
            const Icon = skill.icon;

            return (
              <div
                key={skill.name}
                className="skill group flex aspect-square flex-col items-center justify-center border border-black bg-transparent"
              >
                <Icon className="text-5xl text-black transition-transform duration-300 group-hover:scale-125 md:text-6xl" />

                <p className="mt-4 text-xs uppercase tracking-[0.2em] text-black">
                  {skill.name}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}