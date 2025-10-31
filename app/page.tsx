"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion"; // ⚠️ pastikan pakai "framer-motion"
import Card from "@/components/atom/card";
import Text from "@/components/atom/text";
import About from "@/components/About";

export default function Home() {
  const [showAbout, setShowAbout] = useState(false);

  return (
    <div className="w-full h-screen bg-white-secondary flex justify-center items-center select-none overflow-hidden">
      <div className="relative w-[800px] h-[500px] p-4 bg-white-primary rounded-xl border border-gray-400 shadow-xl">
        {/* Header */}
        <div className="absolute top-0 left-0 rounded-t-xl w-full h-[60px] bg-blue-primary flex items-center pl-6 text-xl z-10">
          <p>home</p>
        </div>

        {/* Content */}
        <div className="flex flex-col items-center gap-5 relative z-10">
          <Text />
          <div className="mt-5 flex justify-center gap-12 w-full h-fit p-5">
            <Card src="/info.png" label="about" onClick={() => setShowAbout(true)} />
            <Card src="/link.png" label="links" />
            <Card src="/folder.png" label="projects" />
            <Card src="/mail.png" label="contact" />
          </div>
        </div>

        {/* Animated About Section (ngikutin ExitAnimation) */}
        <AnimatePresence initial={false}>
          {showAbout && (
            <motion.div
              key="about"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="absolute left-[30px] top-[60px] inset-0 items-center rounded-xl shadow-lg z-20"
            >
              <About />

              {/* Tombol close */}
              <motion.button
                onClick={() => setShowAbout(false)}
                whileTap={{ y: 1 }}
                className="absolute top-4 z-20 -right-10 bg-blue-primary text-white px-3 py-1 rounded-md"
              >
                Close
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
