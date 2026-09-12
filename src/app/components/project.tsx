"use client";

import {
  ArrowUpRight,
  Code2,
  ShoppingBag,
  Newspaper,
  Shirt,
} from "lucide-react";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    number: "01",
    title: "3D Web",
    category: "Creative Development",
    description:
      "An interactive web experience combining modern frontend development with immersive 3D elements.",
    icon: Code2,
    link:"https://3-d-website-gray.vercel.app/"
    
  },
  {
    number: "02",
    title: "Hukut",
    category: "E-Commerce",
    description:
      "A modern product experience built with Next.js, interactive 3D models and a clean shopping interface.",
    icon: ShoppingBag,
    link:"https://hukut-clone-next-js.vercel.app/"
  },
  {
    number: "03",
    title: "Mheecha",
    category: "Web Application",
    description:
      "A responsive digital platform focused on simplicity, usability and a smooth modern interface.",
    icon: Newspaper,
    link:"https://e-commerce-next-js-jdks.vercel.app/"
  },
  {
    number: "04",
    title: "NEPCLOTH",
    category: "E-Commerce",
    description:
      "A fashion store concept with product discovery, cart management and a distinctive visual identity.",
    icon: Shirt,
    link:"https://nepcloth.vercel.app/"
  },
];

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLElement>(".project-item");

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 90%",
          end:"bottom 70%",
          scrub:2,
         
          toggleActions: "play none none reverse",
        },
      });

     

      timeline
        .fromTo(
          ".project-small-title",
          {
            y: 30,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.5,
            ease: "power4.out",
          }
        )

        .fromTo(
          ".project-main-title",
          {
            y: 20,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            ease: "power4.out",
          },
          "-=0.5"
        )

        .fromTo(
          ".project-intro",
          {
            y: 50,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.4,
            ease: "power3.out",
          },
          "-=0.4"
        );

     

      cards.forEach((card, index) => {
        const line = card.querySelector(".project-line");
        const number = card.querySelector(".project-number");
        const title = card.querySelector(".project-title");
        const description = card.querySelector(".project-description");
        const category = card.querySelector(".project-category");
        const icon = card.querySelector(".project-icon");
        const arrow = card.querySelector(".project-arrow");

        timeline
          .fromTo(
            line,
            {
              scaleX: 0,
              transformOrigin: "left",
            },
            {
              scaleX: 1,
              duration: 0.7,
              ease: "power4.out",
            },
            index === 0 ? "+=0.1" : "-=0.25"
          )

          .fromTo(
            number,
            {
              x: -50,
              opacity: 0,
            },
            {
              x: 0,
              opacity: 1,
              duration: 0.6,
              ease: "power4.out",
            },
            "-=0.45"
          )

          .fromTo(
            title,
            {
              y: 70,
              opacity: 0,
              skewY: 5,
            },
            {
              y: 0,
              opacity: 1,
              skewY: 0,
              duration: 0.8,
              ease: "power4.out",
            },
            "-=0.5"
          )

          .fromTo(
            description,
            {
              y: 25,
              opacity: 0,
            },
            {
              y: 0,
              opacity: 1,
              duration: 0.6,
              ease: "power3.out",
            },
            "-=0.5"
          )

          .fromTo(
            category,
            {
              x: 30,
              opacity: 0,
            },
            {
              x: 0,
              opacity: 1,
              duration: 0.6,
              ease: "power3.out",
            },
            "-=0.5"
          )

          .fromTo(
            icon,
            {
              scale: 0,
              rotate: -45,
              opacity: 0,
            },
            {
              scale: 1,
              rotate: 0,
              opacity: 1,
              duration: 0.7,
              ease: "back.out(1.7)",
            },
            "-=0.5"
          )

          .fromTo(
            arrow,
            {
              x: -20,
              opacity: 0,
            },
            {
              x: 0,
              opacity: 1,
              duration: 0.5,
              ease: "power3.out",
            },
            "-=0.5"
          );
      });

      

      timeline.fromTo(
        ".background-number",
        {
          opacity: 0,
          scale: 0.8,
          x: 100,
        },
        {
          opacity: 1,
          scale: 1,
          x: 0,
          duration: 1.2,
          ease: "power3.out",
        },
        "-=2"
      );

     
      cards.forEach((card) => {
        const number = card.querySelector(".project-number");
        const title = card.querySelector(".project-title");
        const icon = card.querySelector(".project-icon");
        const arrow = card.querySelector(".project-arrow");

        const enter = () => {
          gsap.to(card, {
            x: 12,
            duration: 0.5,
            ease: "power3.out",
          });

          gsap.to(title, {
            x: 20,
            duration: 0.5,
            ease: "power3.out",
          });

          gsap.to(number, {
            x: 10,
            opacity: 0.3,
            duration: 0.5,
            ease: "power3.out",
          });

          gsap.to(icon, {
            scale: 1.15,
            rotate: 12,
            duration: 0.5,
            ease: "power3.out",
          });

          gsap.to(arrow, {
            x: 8,
            y: -8,
            rotate: 5,
            duration: 0.5,
            ease: "power3.out",
          });
        };

        const leave = () => {
          gsap.to(card, {
            x: 0,
            duration: 0.5,
            ease: "power3.out",
          });

          gsap.to(title, {
            x: 0,
            duration: 0.5,
            ease: "power3.out",
          });

          gsap.to(number, {
            x: 0,
            opacity: 1,
            duration: 0.5,
            ease: "power3.out",
          });

          gsap.to(icon, {
            scale: 1,
            rotate: 0,
            duration: 0.5,
            ease: "power3.out",
          });

          gsap.to(arrow, {
            x: 0,
            y: 0,
            rotate: 0,
            duration: 0.5,
            ease: "power3.out",
          });
        };

        card.addEventListener("mouseenter", enter);
        card.addEventListener("mouseleave", leave);
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="relative z-10 min-h-screen overflow-hidden bg-white px-6 py-32 text-black md:px-12 lg:px-20"
    >
    

      <div className="relative mx-auto max-w-7xl">
       
        <div className="mb-28">
          <div className="project-small-title mb-6 flex items-center gap-4">
            <span className="h-px w-12 bg-black" />

            <span className="text-[11px] uppercase tracking-[0.35em] text-black/50">
              Selected Work
            </span>
          </div>

          <div className="flex flex-col justify-between gap-10 lg:flex-row lg:items-end">
            <div className="overflow-hidden">
              <h2 className="project-main-title text-[18vw] font-medium leading-[0.75] tracking-[-0.08em] md:text-[12vw] lg:text-[10rem]">
                Projects
              </h2>
            </div>

            <p className="project-intro max-w-sm text-sm leading-7 text-black/50">
              A selection of things I&apos;ve designed, developed and brought
              to life through code.
            </p>
          </div>
        </div>

       

        <div className="project-list">
          {projects.map((project) => {
            const Icon = project.icon;

            return (
              <div
                key={project.number}
                className="project-item group relative cursor-pointer py-10 md:py-14"
              >
               <Link href={project.link}>
                <div className="project-line absolute left-0 top-0 h-px w-full bg-black/15" />

                <div className="grid grid-cols-[60px_1fr_auto] items-center gap-5 md:grid-cols-[100px_1fr_280px_auto] md:gap-10">
                  <span className="project-number text-xs tracking-[0.2em] text-black/35">
                    {project.number}
                  </span>

                  <div className="overflow-hidden">
                    <h3 className="project-title text-4xl font-medium tracking-[-0.04em] md:text-6xl lg:text-7xl">
                      {project.title}
                    </h3>

                    <p className="project-description mt-3 max-w-xl text-xs leading-6 text-black/45 md:text-sm">
                      {project.description}
                    </p>
                  </div>

                  <div className="project-category hidden md:block">
                    <span className="text-[10px] uppercase tracking-[0.25em] text-black/35">
                      {project.category}
                    </span>
                  </div>

                  <div className="flex items-center gap-5">
                    <div className="project-icon flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-black/15">
                      <Icon
                        size={21}
                        strokeWidth={1.2}
                      />
                    </div>

                    <ArrowUpRight
                      className="project-arrow hidden md:block"
                      size={27}
                      strokeWidth={1.2}
                    />
                  </div>
                </div>
                </Link> 

                <div className="absolute bottom-0 left-0 h-[2px] w-full origin-left scale-x-0 bg-black transition-transform duration-700 group-hover:scale-x-100" />
              </div>
            );
          })}
        </div>

       

        <div className="mt-16 flex items-center justify-between border-t border-black/10 pt-6">
          <span className="text-[10px] uppercase tracking-[0.3em] text-black/35">
             Projects
          </span>

          <span className="text-[10px] uppercase tracking-[0.3em] text-black/35">
            2026
          </span>
        </div>
      </div>
    </section>
  );
}
