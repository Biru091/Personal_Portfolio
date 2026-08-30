
"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const projects = [
  {
    number: "01",
    title: "NEPCLOTH",
    description:
      "A modern clothing e-commerce platform with product management, cart, authentication and order functionality.",
    tech: ["Next.js", "TypeScript", "Tailwind", "MongoDB"],
    image: "/projects/nepcloth.png",
    live: "#",
    github: "#",
  },
  {
    number: "02",
    title: "3D PORTFOLIO",
    description:
      "An interactive developer portfolio combining 3D objects, smooth animations and modern web technologies.",
    tech: ["Next.js", "Three.js", "GSAP", "React"],
    image: "/projects/portfolio.png",
    live: "#",
    github: "#",
  },
  {
    number: "03",
    title: "ADMIN DASHBOARD",
    description:
      "A responsive dashboard for managing products, orders and e-commerce data through APIs.",
    tech: ["React", "TypeScript", "API", "MongoDB"],
    image: "/projects/admin.png",
    live: "#",
    github: "#",
  },
];

export default function Projects() {
  const pageRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".project-header", {
        y: 100,
        opacity: 0,
        duration: 1,
        ease: "power4.out",
      });

      gsap.utils.toArray<HTMLElement>(".project").forEach((project) => {
        const image = project.querySelector(".project-image");
        const content = project.querySelector(".project-content");

        gsap.from(project, {
          opacity: 0,
          y: 100,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: project,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        });

        gsap.from(image, {
          scale: 1.15,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: project,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        });

        gsap.from(content, {
          x: 60,
          opacity: 0,
          duration: 1,
          delay: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: project,
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
        });
      });
    }, pageRef);

    return () => ctx.revert();
  }, []);

  return (
    <main
      ref={pageRef}
      className="min-h-screen overflow-hidden bg-black px-6 py-28 text-white md:px-12 lg:px-20"
    >
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <header className="project-header mb-32">
          <p className="mb-5 text-xs uppercase tracking-[0.4em] text-white/40">
            Selected work
          </p>

          <h1 className="text-[16vw] font-bold leading-[0.75] tracking-[-0.08em] md:text-[10vw]">
            Projects<span className="text-white/20">.</span>
          </h1>

          <p className="mt-10 max-w-xl text-lg leading-relaxed text-white/40">
            A collection of things I have built while exploring web
            development, e-commerce, animation and 3D experiences.
          </p>
        </header>

        {/* Projects */}
        <section className="space-y-32">
          {projects.map((project) => (
            <article
              key={project.number}
              className="project group"
            >
              {/* Top line */}
              <div className="mb-6 flex items-center justify-between border-t border-white/10 pt-5">
                <span className="text-sm text-white/30">
                  {project.number}
                </span>

                <span className="text-xs uppercase tracking-[0.3em] text-white/30">
                  Featured project
                </span>
              </div>

              <div className="grid items-center gap-10 lg:grid-cols-[1.5fr_1fr]">

                {/* Image */}
                <div className="relative aspect-[16/10] overflow-hidden bg-white/[0.04]">
                  <div className="project-image absolute inset-0">

                    {project.image ? (
                      <img
                        src={project.image}
                        alt={project.title}
                        className="h-full w-full object-cover grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
                      />
                    ) : (
                      <div className="flex h-full items-center justify-center">
                        <span className="text-6xl font-bold text-white/10">
                          {project.number}
                        </span>
                      </div>
                    )}

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/20 transition-colors duration-500 group-hover:bg-black/0" />
                  </div>
                </div>

                {/* Content */}
                <div className="project-content">

                  <h2 className="text-4xl font-bold tracking-tight md:text-6xl">
                    {project.title}
                  </h2>

                  <p className="mt-6 max-w-md text-base leading-relaxed text-white/40">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="mt-8 flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="border border-white/10 px-3 py-2 text-xs uppercase tracking-wider text-white/50"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="mt-10 flex items-center gap-8">

                    <Link
                      href={project.live}
                      className="group/link flex items-center gap-2 text-sm uppercase tracking-[0.2em]"
                    >
                      Live site

                      <ArrowUpRight
                        size={17}
                        className="transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1"
                      />
                    </Link>

                    <Link
                      href={project.github}
                      className="group/link flex items-center gap-2 text-sm uppercase tracking-[0.2em] text-white/40 transition-colors hover:text-white"
                    >
                      

                      GitHub
                    </Link>

                  </div>
                </div>
              </div>
            </article>
          ))}
        </section>

        {/* Bottom */}
        <section className="mt-40 border-t border-white/10 pt-10">
          <p className="max-w-4xl text-3xl font-medium leading-tight md:text-6xl">
            More projects are
            <span className="text-white/30"> coming soon.</span>
          </p>
        </section>

      </div>
    </main>
  );
}

