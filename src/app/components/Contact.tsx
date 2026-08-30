
"use client";

import { useLayoutEffect, useRef } from "react";
import { ArrowUpRight, Mail, MapPin, Send } from "lucide-react";
import Link from "next/link";

export default function Contact() {
  

  return (
    <main
     
      className="min-h-screen overflow-hidden bg-black px-6 py-28 text-white md:px-12 lg:px-20"
    >
      <div className="mx-auto max-w-7xl">

        {/* Top */}
        <div className="contact-small mb-8 flex items-center gap-3">
          <span className="h-2 w-2 rounded-full bg-white" />

          <p className="text-xs uppercase tracking-[0.35em] text-white/40">
            Get in touch
          </p>
        </div>

        {/* Heading */}
        <div className="overflow-hidden">
          <h1 className="contact-title max-w-5xl text-[15vw] font-bold leading-[0.8] tracking-[-0.07em] md:text-[10vw]">
            Lets
            <br />
            <span className="text-white/30">talk.</span>
          </h1>
        </div>

        {/* Content */}
        <div className="contact-content mt-24 grid gap-16 border-t border-white/10 pt-12 md:grid-cols-2">

          {/* Left */}
          <div>
            <p className="max-w-lg text-xl leading-relaxed text-white/50 md:text-2xl">
              Have a project in mind, an idea you want to build, or simply want
              to say hello?
            </p>

            {/* Email */}
            <a
              href="mailto:hello@example.com"
              className="group mt-10 inline-flex items-center gap-4 border-b border-white/20 pb-3 text-lg transition-colors hover:border-white"
            >
              <Mail
                size={20}
                className="text-white/50 transition-colors group-hover:text-white"
              />

              <span>hello@example.com</span>

              <ArrowUpRight
                size={18}
                className="text-white/40 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </a>

            {/* Location */}
            <div className="mt-8 flex items-center gap-4 text-white/50">
              <MapPin size={20} />

              <span>Kathmandu, Nepal</span>
            </div>

            {/* Social */}
            <div className="mt-12 flex gap-8">
              <Link
                href="https://github.com"
                target="_blank"
                className="group flex items-center gap-2 text-sm text-white/50 transition-colors hover:text-white"
              >
                GitHub
                <ArrowUpRight
                  size={15}
                  className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
                />
              </Link>

              <Link
                href="https://linkedin.com"
                target="_blank"
                className="group flex items-center gap-2 text-sm text-white/50 transition-colors hover:text-white"
              >
                LinkedIn
                <ArrowUpRight
                  size={15}
                  className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
                />
              </Link>

              <Link
                href="https://instagram.com"
                target="_blank"
                className="group flex items-center gap-2 text-sm text-white/50 transition-colors hover:text-white"
              >
                Instagram
                <ArrowUpRight
                  size={15}
                  className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
                />
              </Link>
            </div>
          </div>

          {/* Right - Form */}
          <form className="space-y-8">

            {/* Name */}
            <div className="group border-b border-white/20 pb-3">
              <label className="mb-3 block text-xs uppercase tracking-[0.25em] text-white/30">
                Your name
              </label>

              <input
                type="text"
                placeholder="John Doe"
                className="w-full bg-transparent text-lg text-white outline-none placeholder:text-white/20"
              />
            </div>

            {/* Email */}
            <div className="group border-b border-white/20 pb-3">
              <label className="mb-3 block text-xs uppercase tracking-[0.25em] text-white/30">
                Your email
              </label>

              <input
                type="email"
                placeholder="john@example.com"
                className="w-full bg-transparent text-lg text-white outline-none placeholder:text-white/20"
              />
            </div>

            {/* Message */}
            <div className="group border-b border-white/20 pb-3">
              <label className="mb-3 block text-xs uppercase tracking-[0.25em] text-white/30">
                Your message
              </label>

              <textarea
                rows={4}
                placeholder="Tell me about your project..."
                className="w-full resize-none bg-transparent text-lg text-white outline-none placeholder:text-white/20"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="group flex w-full items-center justify-between border border-white/20 px-6 py-5 transition-all duration-300 hover:bg-white hover:text-black"
            >
              <span className="text-sm uppercase tracking-[0.25em]">
                Send message
              </span>

              <Send
                size={20}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </button>
          </form>
        </div>

        {/* Footer */}
        <div className="contact-content mt-24 flex flex-col justify-between gap-5 border-t border-white/10 pt-6 text-xs uppercase tracking-[0.2em] text-white/30 md:flex-row">
          <p>© 2026 Portfolio</p>

          <p>Designed & built with Next.js</p>
        </div>
      </div>
    </main>
  );
}

