"use client";

import React, { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

export const MacbookScroll = ({
  src,
  showGradient,
  title,
}: {
  src?: string;
  showGradient?: boolean;
  title?: string | React.ReactNode;
}) => {
  const ref = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window && window.innerWidth < 768) {
      setIsMobile(true);
    }
  }, []);

  const scaleX = useTransform(
    scrollYProgress,
    [0, 0.3],
    [1.2, isMobile ? 1 : 1.5]
  );
  const scaleY = useTransform(
    scrollYProgress,
    [0, 0.3],
    [0.6, isMobile ? 1 : 1.5]
  );
  const translate = useTransform(scrollYProgress, [0, 1], [0, 1500]);
  const rotate = useTransform(scrollYProgress, [0.1, 0.12, 0.3], [-28, -28, 0]);
  const textTransform = useTransform(scrollYProgress, [0, 0.3], [0, 100]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  return (
    <div
      ref={ref}
      className="flex min-h-[200vh] shrink-0 scale-[0.45] transform flex-col items-center justify-start py-0 [perspective:800px] sm:scale-75 md:scale-125 md:py-80"
    >
      <motion.h2
        style={{
          translateY: textTransform,
          opacity: textOpacity,
        }}
        className="mb-20 text-center text-4xl font-bold text-neutral-800 dark:text-white"
      >
        {title}
      </motion.h2>
      {/* Lid */}
      <div className="relative [perspective:800px]">
        <div
          style={{
            transform: "perspective(800px) rotateX(-25deg) translateZ(0px)",
            transformOrigin: "bottom",
            transformStyle: "preserve-3d",
          }}
          className="relative h-[14rem] w-[38rem] rounded-2xl bg-[#010101] p-2"
        >
          <div
            style={{
              boxShadow: "0px 2px 0px 2px #171717 inset",
            }}
            className="absolute inset-0 rounded-lg bg-[#010101]"
          />
        </div>
        <motion.div
          style={{
            scaleX: scaleX,
            scaleY: scaleY,
            rotateX: rotate,
            translateY: translate,
            transformStyle: "preserve-3d",
            transformOrigin: "top",
          }}
          className="absolute inset-0 h-[28rem] w-[38rem] rounded-2xl bg-[#010101] p-2"
        >
          <div className="absolute inset-0 rounded-lg bg-[#272729]" />
          {src && (
            <Image
              src={src}
              alt="GEX Chart"
              fill
              className="absolute inset-0 h-full w-full rounded-lg object-cover object-left-top"
            />
          )}
        </motion.div>
      </div>
      {/* Base */}
      <div className="relative -z-10 h-[24rem] w-[38rem] rounded-2xl bg-[#010101]">
        <div className="absolute inset-x-0 mx-auto h-1 w-20 rounded-b-2xl bg-neutral-900" />
        {showGradient && (
          <div className="absolute inset-x-0 bottom-0 z-50 h-40 w-full bg-gradient-to-t from-white via-white to-transparent dark:from-black dark:via-black"></div>
        )}
      </div>
    </div>
  );
};

const RhinoLogo = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-4 w-4"
    >
      <path
        d="M12 2L2 7L12 12L22 7L12 2Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2 17L12 22L22 17"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2 12L12 17L22 12"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}; 