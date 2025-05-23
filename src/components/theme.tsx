"use client";
import { transcode } from "buffer";
import { motion as m, scale } from "motion/react";
import { useTheme } from "next-themes";
function Theme() {
  const { theme, setTheme } = useTheme();

  const moonPath =
    "M48 66.6667C58.3093 66.6667 66.6667 58.3093 66.6667 48C46.8356 57.1232 41.3694 45.9328 48 29.3333C37.6907 29.3333 29.3333 37.6907 29.3333 48C29.3333 58.3093 37.6907 66.6667 48 66.6667Z";
  const sunPath =
      "M48 66.6667C58.3093 66.6667 66.6667 58.3093 66.6667 48C66.6667 37.6907 58.3093 29.3333 48 29.3333C37.6907 29.3333 29.3333 37.6907 29.3333 48C29.3333 58.3093 37.6907 66.6667 48 66.6667Z";
    
  const rayVariants = {
    hidden: {
      strokeOpacity: 0,
      transition: {
        duration: 0.2,
        ease: "easeInOut",
        type: "spring",
        stiffness: 200,
        damping: 20,
        staggerChildren: 0.05,
        staggerDirection: -1,
      }
    },
    visible: {
      strokeOpacity: 1,
      transition: {
        duration: 0.2,
        ease: "easeInOut",
        type: "spring",
        stiffness: 200,
        damping: 20,
        staggerChildren: 0.05,
      }
    }
  }
  
  const rayVariant = {
    hidden: {
      pathLength: 0,
      opacity: 0,
      scale: 0,
    },
    visible: {
      pathLength: 1,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.2,
        ease: "easeInOut",
        type: "spring",
        stiffness: 200,
        damping: 20,
        staggerChildren: 0.05,
      }
    }
  }
    
  return (
    <button className="translate-y-0.5" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
      <div className="z-50 h-8 w-8">
        <m.svg
          width="32"
          height="32"
          viewBox="0 0 96 96"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <m.path
            initial={{ fillOpacity: 0, strokeOpacity: 0 }}
            animate={
              theme === "dark"
                ? {
                    fillOpacity: 0.35,
                    strokeOpacity: 1,
                    fill: "var(--color-orange-500)",
                    stroke: "var(--color-orange-500)",
                    d: sunPath,
                  }
                : {
                    fillOpacity: 0.35,
                    strokeOpacity: 1,
                    fill: "var(--color-blue-500)",
                    stroke: "var(--color-blue-500)",
                    d: moonPath,
                    scale: 2,
                    rotate: 360,
                  }
            }
          />
          <m.g
            className="stroke-orange-950 stroke-6 dark:stroke-orange-400"
            variants={rayVariants}
            initial="hidden"
            animate={theme === "light" ? "hidden" : "visible"}
          >
            <m.path variants={rayVariant} d="M48 1.33333V10.6667" />
            <m.path variants={rayVariant} d="M48 85.3333V94.6667" />
            <m.path variants={rayVariant} d="M15.0067 15.0067L21.5867 21.5867" />
            <m.path variants={rayVariant} d="M74.4133 74.4133L80.9933 80.9933" />
            <m.path variants={rayVariant} d="M1.33333 48H10.6667" />
            <m.path variants={rayVariant} d="M85.3333 48H94.6667" />
            <m.path variants={rayVariant} d="M21.5867 74.4133L15.0067 80.9933" />
            <m.path variants={rayVariant} d="M80.9933 15.0067L74.4133 21.5867" />
          </m.g>
        </m.svg>
      </div>
    </button>
  );
}

export default Theme;
