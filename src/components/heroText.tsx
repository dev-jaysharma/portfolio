"use client";
import { motion } from "motion/react";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.035,
      delayChildren: 0.2,
    },
  },
};

const child = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

function HeroText() {
  const text = "Hello!, I'm Jay";
  const words = [
    "I am a Full Stack Developer",
    "Creating beautiful yet functional web experiences",
  ];

  return (
    <div className="absolute inset-0 z-10 mx-auto flex h-screen w-full flex-col justify-center bg-transparent px-6 md:items-center md:text-center dark:text-orange-50">
      <motion.div
        className="space-y-2 md:space-y-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {words.map((sentence, index) => (
          <motion.p
            key={index}
            className={`${index === 0 ? "text-2xl" : "text-xl"} text-orange-950 dark:text-orange-50`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + index * 0.1 }}
          >
            {sentence}
          </motion.p>
        ))}
      </motion.div>

      <motion.h1
        className="mt-6 text-8xl leading-none font-bold text-orange-950 sm:text-8xl md:text-8xl md:leading-tight lg:text-9xl xl:text-[10rem] 2xl:text-[13rem] dark:text-orange-50"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {text.split("").map((char, idx) => (
          <motion.span
            key={idx}
            variants={child}
            whileHover={{
              scale: 1.2,
              color: "#fb923c",
              transition: { duration: 0.2 },
            }}
            className="inline-block"
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </motion.h1>
    </div>
  );
}

export default HeroText;
