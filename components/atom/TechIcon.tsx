"use client";

import { motion } from "framer-motion";
import { useState } from "react";

interface TechIconProps {
  src: string;
  alt: string;
  label: string;
}

export default function TechIcon({ src, alt, label }: TechIconProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative flex flex-col items-center"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Icon */}
      <img
        className="w-15 h-15 p-2 border border-black bg-white rounded-full transition-transform duration-300 ease-in-out hover:scale-[1.03]"
        src={src}
        alt={alt}
      />

      {/* Label (fade in/out) */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: hovered ? 1 : 0, y: hovered ? 0 : 10 }}
        transition={{ duration: 0.25, ease: "easeInOut" }}
        className="absolute z-30 bottom-[-35px] text-black-primary text-sm px-3 py-1 rounded-md bg-white/70 backdrop-blur-sm shadow-sm"
      >
        {label}
      </motion.p>
    </div>
  );
}
