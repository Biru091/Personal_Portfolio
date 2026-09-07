"use client";
import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import Link from "next/link";
import Image from "next/image";
export default function Navbar() {
  const logo = useRef(null);
  useGSAP(() => {
    gsap.from(".nav-link", {
      opacity: 0,
      y: -20,
      duration: 1.5,
      stagger: 0.3,
      ease: "power3.in",
      force3D: true,
    });
     gsap.from(logo.current, {
      opacity: 0,
     scale: 0.9,
      repeat: -1,
      yoyo: true,
      duration: 3,
     
      ease: "power3.out",
      force3D: true,
    });
  });

  return (
    <header className=" top-0 left-0 z-50 w-full">
      <div className="flex h-24 items-center justify-between px-6">
        <div className="flex flex-1 items-center gap-2">
          <Image
            src="/menu/logo1.jpg"
            alt="Logo"
            height={45}
            width={45}
            ref={logo}
            
            />

           <span className="text-lg font-black font-syne-mono  text-black">Biru <br></br> Dev</span>

        </div>
       
        <nav className="hidden md:flex  flex-1 items-center justify-center gap-2 rounded-full border border-white/10 bg-gray-400 px-1 py-1 backdrop-blur-xl">
         <Link
            href="/"
            className="nav-link rounded-full px-2 py-1 lg:px-5 lg:py-2.5 text-sm text-white font-syne"
          >
            Home
          </Link>
          <Link
            href="#skill"
            className="nav-link rounded-full px-2 py-1 lg:px-5 lg:py-2.5 text-sm text-white font-syne"
          >
            Skills
          </Link>

          <Link
            href="#about"
            className="nav-link rounded-full px-2 py-1 lg:px-5 lg:py-2.5 text-sm text-white font-syne"
          >
            About
          </Link>

          <Link
            href="#contact"
            className="nav-link rounded-full px-2 py-1 lg:px-5 lg:py-2.5 text-sm text-white font-syne"
          >
            Contact
          </Link>
        </nav>
        <div className="flex flex-1 items-center justify-end gap-2">
          
           <span className="text-sm">Cv</span>
        </div>
       
      </div>
    </header>
  );
}