"use client";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import Link from "next/link";

export default function Navbar() {
  useGSAP(() => {
    gsap.from(".nav-link", {
      opacity: 0,
      y: -20,
      duration: 1.5,
      stagger: 0.3,
      ease: "power3.out",
      force3D: true,
    });
  });

  return (
    <header className="fixed top-0 left-0 z-50 w-full">
      <div className="flex h-24 items-center justify-center">
        <nav className="flex items-center gap-2 rounded-full border border-white/10 bg-black/50 px-3 py-2 backdrop-blur-xl">
          <Link
            href="/projects"
            className="nav-link rounded-full px-5 py-2.5 text-sm text-white/70"
          >
            Projects
          </Link>

          <Link
            href="/about"
            className="nav-link rounded-full px-5 py-2.5 text-sm text-white/70"
          >
            About
          </Link>

          <Link
            href="/contact"
            className="nav-link rounded-full px-5 py-2.5 text-sm text-white/70"
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}