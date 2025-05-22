"use client";
import React, { useState } from "react";
import Container from "./container";
import Link from "next/link";
import { motion } from "motion/react";
import Image from "next/image";
function Navbar() {
  const navItems = [
    { name: "Projects", href: "/projects" },
    { name: "Blogs", href: "/blogs" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  const [hoveredLink, setHoveredLink] = useState<number | null>(null);
  const MotionImage = motion.create(Image);
  return (
    <Container className="fixed top-3 right-0 left-0 w-fit rounded-full border border-neutral-500 bg-neutral-50/50 shadow-[0_8px_30px_rgb(0,0,0,0.12)] backdrop-blur-xl md:absolute dark:bg-neutral-900/50 z-[99999]">
      <nav className="flex items-center justify-between gap-4 p-2">
        <Link href="/">
          <MotionImage
            whileHover={{ scale: 1.3, rotate: 10 }}
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 20,
            }}
            src="/avatar.jpeg"
            alt="logo"
            width={30}
            height={30}
            className="rounded-full border border-neutral-500"
          />
        </Link>
        <div className="flex items-center">
          {navItems.map((item, idx) => {
            return (
              <Link
                href={item.href}
                key={idx}
                className="relative inline-block rounded-md px-2 py-1"
                onMouseEnter={() => setHoveredLink(idx)}
                onMouseLeave={() => setHoveredLink(null)}
                // onClick={() => setHoveredLink(null)}
              >
                {hoveredLink === idx && (
                  <motion.span
                    layoutId="hovered-link"
                    transition={{
                      duration: 0.2,
                      ease: "easeInOut",
                      type: "spring",
                      stiffness: 200,
                      damping: 20,
                    }}
                    className="absolute inset-0 rounded-xl bg-neutral-800 dark:bg-orange-100"
                  />
                )}
                <span className="relative z-10 text-white mix-blend-exclusion dark:text-orange-50">
                  {item.name}
                </span>
              </Link>
            );
          })}
        </div>
      </nav>
    </Container>
  );
}

export default Navbar;
