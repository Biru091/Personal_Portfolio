"use client";

import Link from "next/link";
import { ArrowDown, ArrowRight } from "lucide-react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

export default function HeroContent() {
  useGSAP(() => {
    const tl = gsap.timeline();

    tl.from(".name", {
      opacity: 0,
      y: -20,
      duration: 0.5,
      ease: "power3.out",
    })
      .from(".text1", {
        opacity: 0,
        y: -20,
        duration: 0.8,
        ease: "power3.out",
      })
      .from(".buttons", {
        opacity: 0,
        y: -20,
        duration: 0.8,
        ease: "power3.out",
      })
      .from(".text2", {
        opacity: 0,
        y: -20,
        duration: 0.8,
        ease: "power3.out",
      });
  });

  return (
    <div className="relative min-h-screen w-full">

      <div className="mx-auto flex min-h-screen w-full max-w-7xl flex-col items-center px-6">

        <div className="flex w-full flex-col items-center">

          <p className="name mt-10 py-14 text-sm font-medium uppercase tracking-[0.3em] text-black">
            Hello, I am Birendra
          </p>

          <p className="text1 py-3 text-center text-3xl uppercase tracking-tight text-black/80 font-black">
            From concept to creation.
          </p>

          <div className="buttons flex w-full flex-wrap items-center justify-center gap-4 py-4">

            <Link
              href="#projects"
              className="group flex gap-3 rounded-full bg-black px-3 py-2 text-sm font-medium text-white transition-all duration-300 hover:px-9"
            >
              View My Work

              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>

            <Link
              href="#contact"
              className="rounded-xl px-3 py-2 text-sm font-medium text-black transition-all duration-300 hover:bg-gray-200 hover:text-black"
            >
              Contact Me
            </Link>

          </div>

        </div>

       
        <div className="absolute bottom-20 md:bottom-8 right-8 flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-blue-700 animate-pulse">
          Scroll
          <ArrowDown size={16} />
        </div>

        
        <div className="text2 absolute bottom-20 left-7  w-2/7 items-center gap-3 text-wrap uppercase tracking-[0.2em] text-black md:flex md:text-2xl">
          Turning concepts into experiences.
        </div>

      </div>

    </div>
  );
}