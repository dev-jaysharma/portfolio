"use client";
import { motion, useAnimation } from "motion/react";
import React, { useEffect } from "react";

const container = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      staggerChildren: 0.035,
      delayChildren: 0.5,
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const child = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 260, damping: 18 } },
  hover: { y: -8, scale: 1.08, transition: { type: "spring", stiffness: 300, damping: 18 } },
};

function HeroText() {
  const controls = useAnimation();
  const text = "Hello!, I'm Jay";
  const words = [
    "I am a Full Stack Developer",
    "Creating beautiful yet functional web experiences",
  ];

  useEffect(() => {
    controls.start("visible");
  }, [controls]);

  return (
    <div className="absolute inset-0 z-10 mx-auto flex h-screen w-full flex-col justify-center bg-transparent px-6 md:items-center md:text-center text-orange-950 dark:text-orange-50">
      <motion.div
        className="space-y-2 md:space-y-4"
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
      >
        {words.map((sentence, index) => (
          <motion.p
            key={index}
            className={`${index === 0 ? "text-2xl" : "text-xl"} text-orange-950 dark:text-orange-50`}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 + index * 0.13, duration: 0.6, ease: "easeOut" }}
          >
            {sentence}
          </motion.p>
        ))}
      </motion.div>

      <motion.h1
        className="mt-6 text-8xl leading-none font-bold text-orange-950 sm:text-8xl md:text-8xl md:leading-tight lg:text-9xl xl:text-[10rem] 2xl:text-[13rem] dark:text-orange-50"
        variants={container}
        initial="hidden"
        animate={controls}
      >
        {text.split("").map((char, idx) => (
          <motion.span
            key={idx}
            variants={child}
            whileHover="hover"
            className="inline-block cursor-pointer dark:text-orange-50 text-orange-950"
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </motion.h1>
    </div>
  );
}

export default HeroText;
