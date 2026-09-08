"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import HeroContent from "../Hero-section/Hero-content/HeroContent";
import SkillsPage from "../Skill";
import About from "../About";
import Contact from "@/app/components/Contact";
import Movingtext from "@/app/components/Movingtext";
import Rounded from "../Rounded";
import Hero3D from "../Hero-section/Model/Model";
gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const movingTextRef = useRef(null);
  const roundedref=useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: "#skill",
        start: "top bottom",

        onEnter: () => {
          gsap.to(movingTextRef.current, {
            opacity: 0,
            duration: 1.3,
            pointerEvents: "none",
          });
        },

        onLeaveBack: () => {
          gsap.to(movingTextRef.current, {
            opacity: 1,
            duration: 0.3,
          });
        },
        
      });
    });
    const ctx1 = gsap.context(() => {
      ScrollTrigger.create({
        trigger: "#skill",
        start: "top bottom",

        onEnter: () => {
          gsap.to(roundedref.current, {
            opacity: 0,
            duration: 1.3,
            pointerEvents: "none",
          });
        },

        onLeaveBack: () => {
          gsap.to(roundedref.current, {
            opacity: 1,
            duration: 0.3,
          });
        },
        
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <main className="page relative">

    
      <div
        ref={movingTextRef}
        className="fixed inset-0 z-10 pointer-events-none"
      >
        <Movingtext />
      </div>

     
      <div className="relative z-20">

       
        <section
          id="home"
          className="relative min-h-screen"
        >
          <HeroContent />
        </section>

        
        <section
          id="about"
          className="relative min-h-screen"
        >
          <About />
        </section>

       
     <section
  id="skill"
  className="relative min-h-screen overflow-hidden"
>
  {/* 3D MODEL */}
  <div className="absolute inset-0 z-0 h-full w-full">
    <Hero3D />
  </div>

  {/* SKILLS */}
  <div className="relative z-10">
    <SkillsPage />
  </div>
</section>
       
        <section
          id="contact"
          className="relative min-h-screen"
        >
          <Contact />
        </section>

      </div>

     
      <div className=" bottom-10 right-2 z-50" ref={roundedref}>
        <Rounded />
      </div>

    </main>
  );
}