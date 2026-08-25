"use client";
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
export default function Navbar() {
    const[open ,setOpen]=useState<boolean>(false)
    const closeMenu = () => {
    setOpen(false);
  };
    return (
        <header>
            <nav className="flex relative justify-between p-3 items-center ">
                <Link href="/" className="hidden md:block">Biru</Link>

                <Image src="/menu/fast-forward.gif" alt="menu" width={30} height={30} className="md:hidden" onClick={()=>setOpen(!open)}/>

                {open &&(
                    <div className="absolute top-16 left-3 z-50 bg-gray-300 flex flex-col w-48 gap-2 md:hidden">
                    <a href="#about" onClick={closeMenu}>About</a>
                    <a href="#skills" onClick={closeMenu}>Skills</a>
                    <a href="#projects" onClick={closeMenu}>Projects</a>
                    <a href="#experience" onClick={closeMenu}>Experience</a>
                    <a href="#contact" onClick={closeMenu}>Contact</a>
                </div>

                )}
                
                

                <div className="hidden md:block">
                    <a href="#about">About</a>
                    <a href="#skills">Skills</a>
                    <a href="#projects">Projects</a>
                    <a href="#experience">Experience</a>
                    <a href="#contact">Contact</a>
                </div>

                <Link href="/resume.pdf" className="bg-black text-white px-2 py-1 rounded shadow-md transition-all hover:-translate-y-0.5 duration-200">Resume</Link>
            </nav>
        </header>
    )
}