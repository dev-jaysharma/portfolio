"use client";
import { motion } from "motion/react"; // Fixed import
import React, { useState } from "react";
import Image from "next/image";

const iconDet = [
  {
    src: "/svgs/hono.svg",
    name: "Hono",
  },
  {
    src: "/svgs/motion.svg",
    name: "Motion",
  },
  {
    src: "/svgs/neon.svg",
    name: "Neon",
  },
  {
    src: "/svgs/nextJS.svg",
    name: "NextJS",
  },
  {
    src: "/svgs/payload.svg",
    name: "Payload",
  },
  {
    src: "/svgs/tailwind.svg",
    name: "Tailwind",
  },
];

function HeroIcons() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="fixed bottom-0 left-0 right-0 flex flex-row justify-center bg-background/80 backdrop-blur-sm p-4 z-50 xl:relative xl:flex-col xl:bg-transparent xl:backdrop-blur-0 xl:p-0">
      {iconDet.map((icon, idx) => (
        <div key={idx} className="relative">
          <div
            className="relative inline-block cursor-pointer rounded-lg p-2"
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {hoveredIndex === idx && (
              <motion.span
                layoutId={`hovered-icon`}
                transition={{
                  duration: 0.2,
                  ease: "easeInOut",
                  type: "spring",
                  stiffness: 200,
                  damping: 20,
                }}
                className="absolute inset-0 rounded-lg bg-orange-300/90 backdrop-blur-sm dark:bg-orange-800/90"
              />
            )}
            <div className="relative z-10 flex flex-col items-center">
              <Image src={icon.src} alt={icon.name} width={40} height={40} />
              <span
                className={`relative mt-2 text-sm font-medium text-orange-950 dark:text-orange-50`}
              >
                {icon.name}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default HeroIcons;
