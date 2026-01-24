"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

const navLinks = [
  { name: "ShowCase", href: "/" },
  { name: "Docs", href: "/about" },
  { name: "Blog", href: "/blog" },
  { name: "Comunity", href: "/dashboard" },
];

const Navbar = () => {
  const container = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<(HTMLAnchorElement | null)[]>([]);

  useGSAP(() => {
    // Animasi masuk saat user kembali ke halaman/mount
    gsap.from(itemsRef.current, {
      y: -50,
      opacity: 0,
      duration: 0.8,
      stagger: 0.1,
      ease: "elastic.out(1, 0.5)",
    });

    // Hover effect magnetik sederhana
    itemsRef.current.forEach((el) => {
      if (!el) return;
      
      const onMouseMove = (e: MouseEvent) => {
        const { clientX, clientY } = e;
        const { left, top, width, height } = el.getBoundingClientRect();
        const x = clientX - (left + width / 2);
        const y = clientY - (top + height / 2);

        gsap.to(el, {
          x: x * 0.4,
          y: y * 0.4,
          duration: 0.3,
          ease: "power2.out",
        });
      };

      const onMouseLeave = () => {
        gsap.to(el, {
          x: 0,
          y: 0,
          duration: 0.5,
          ease: "elastic.out(1, 0.3)",
        });
      };

      el.addEventListener("mousemove", onMouseMove);
      el.addEventListener("mouseleave", onMouseLeave);
    });
  }, { scope: container });

  return (
    <nav 
      ref={container}
      className="fixed top-0 left-0 w-full z-[999] p-8 flex justify-between items-center pointer-events-none"
    >
      {/* Brand Logo - High End Style */}
      <Link 
        href="/" 
        ref={(el) => { itemsRef.current[navLinks.length] = el; }}
        className="pointer-events-auto group relative"
      >
        <span className="text-2xl font-black tracking-tighter text-white mix-blend-difference">
          NLFT<span className="text-blue-500">s</span>
        </span>
        <div className="absolute -bottom-1 left-0 w-0 h-[2px] bg-blue-500 transition-all group-hover:w-full" />
      </Link>

      {/* Floating Menu Items */}
      <div className="flex gap-10 items-center">
        {navLinks.map((link, idx) => (
          <Link
            key={link.name}
            href={link.href}
            ref={(el) => { itemsRef.current[idx] = el; }}
            className="pointer-events-auto relative px-4 py-2 text-sm font-medium uppercase tracking-[0.2em] text-white/70 hover:text-white transition-colors mix-blend-difference"
          >
            {link.name}
            {/* Minimalist Dot Indicator */}
            <span className="absolute -top-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
          </Link>
        ))}

        {/* .FTS Special Tech Badge */}
        <div 
          ref={(el) => { itemsRef.current[navLinks.length + 1] = (el as any); }}
          className="pointer-events-auto ml-4 px-4 py-1 border border-white/20 rounded-full backdrop-blur-sm bg-white/5"
        >
          <span className="text-[10px] font-bold text-blue-400 leading-none">
            FTS FORMATTING ACTIVE
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;