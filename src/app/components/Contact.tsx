"use client";

import { ArrowUpRight, Mail, MapPin, Send } from "lucide-react";
import Link from "next/link";
import { useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      

     
      gsap.to(".contact-title", {
        x: "-15%",
        ease: "none",
        scrollTrigger: {
          trigger: ".contact-page",
          scroller: "body",
          start: "top top",
          end: "bottom top",
          scrub: 2,
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <main className="contact-page min-h-screen overflow-hidden bg-white px-6 py-28 text-black md:px-12 lg:px-20">
      <div className="mx-auto max-w-7xl">

        {/* Top */}
        <div className="contact-small mb-8 flex items-center gap-3">
          <span className="h-2 w-2 rounded-full bg-black" />

          <p className="text-xs uppercase tracking-[0.35em] text-black/40">
            Get in touch
          </p>
        </div>

        {/* Heading */}
        <div className="overflow-hidden">
          <h1 className="contact-title max-w-5xl text-[15vw] font-bold leading-[0.8] tracking-[-0.07em] md:text-[10vw]">
            Lets
            <br />
            <span className="text-black/25">talk.</span>
          </h1>
        </div>

        {/* Content */}
        <div className="contact-content mt-24 grid gap-16 border-t border-black/10 pt-12 md:grid-cols-2">

          {/* Left */}
          <div>
            <p className="max-w-lg text-xl leading-relaxed text-black/50 md:text-2xl">
              Have a project in mind, an idea you want to build, or simply
              want to say hello?
            </p>

            {/* Email */}
            <a
              href="mailto:hello@example.com"
              className="group mt-10 inline-flex items-center gap-4 border-b border-black/20 pb-3 text-lg transition-colors hover:border-black"
            >
              <Mail
                size={20}
                className="text-black/40 transition-colors group-hover:text-black"
              />

              <span>birendrabohara091@gmail.com</span>

              <ArrowUpRight
                size={18}
                className="text-black/40 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </a>

            {/* Location */}
            <div className="mt-8 flex items-center gap-4 text-black/50">
              <MapPin size={20} />
              <span>Kathmandu, Nepal</span>
            </div>

            {/* Social */}
            <div className="mt-12 flex gap-8">
              <Link
                href="https://github.com/biru091"
                target="_blank"
                className="group flex items-center gap-2 text-sm text-black/50 transition-colors hover:text-black"
              >
                GitHub

                <ArrowUpRight
                  size={15}
                  className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
                />
              </Link>

              <Link
                href="https://www.linkedin.com/in/birendra-singh-bohara-583136431"
                target="_blank"
                className="group flex items-center gap-2 text-sm text-black/50 transition-colors hover:text-black"
              >
                LinkedIn

                <ArrowUpRight
                  size={15}
                  className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
                />
              </Link>

              <Link
                href="https://instagram.com/biru_091"
                target="_blank"
                className="group flex items-center gap-2 text-sm text-black/50 transition-colors hover:text-black"
              >
                Instagram

                <ArrowUpRight
                  size={15}
                  className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
                />
              </Link>
            </div>
          </div>

        
        </div>

      

      </div>
    </main>
  );
}