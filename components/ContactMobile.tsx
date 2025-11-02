"use client";

import { ChevronDoubleDownIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
import { Howl } from "howler";

interface ContactProps {
  onClose: () => void;
}

export default function Contact({ onClose }: ContactProps) {
  const handleClose = () => {
    const sound = new Howl({
      src: ["/audio/click2.mp3"],
      volume: 0.8,
    });
    sound.play();
    onClose();
  };

  return (
    <div className="relative w-full h-[80vh] bottom-0 pb-0 bg-white-primary rounded-xl border border-gray-400 shadow-xl overflow-hidden flex flex-col">
      
      {/* Header */}
      <div className="absolute top-0 left-0 rounded-t-xl w-full h-[60px] bg-blue-primary flex items-center justify-between px-6 text-lg z-10 text-white-primary">
        <p>contact</p>

        {/* Tombol close */}
        <motion.button
          onClick={handleClose}
          whileTap={{ scale: 0.9 }}
          aria-label="Close contact section"
        >
          <ChevronDoubleDownIcon className="w-9 h-9 p-2 rounded-full hover:bg-white-secondary/20 cursor-pointer transition-colors duration-300" />
        </motion.button>
      </div>

      {/* Konten scrollable */}
      <div className="flex-1 overflow-y-auto flex flex-col md:flex-row items-center md:items-start gap-6 p-6 mt-[60px]">
        {/* Gambar */}
        <div className="flex justify-center w-full md:w-[250px]">
          <img
            className="w-[250px] md:w-[250px] transition-transform duration-300 ease-in-out hover:scale-105"
            src="/penguincontact.png"
            alt="penguin"
          />
        </div>

        {/* Text content */}
        <div className="flex-1 flex flex-col justify-start gap-4 text-left">
          <h2 className="text-2xl md:text-3xl text-blue-primary font-medium">
            yuuhuuu! let's work together.
          </h2>
          <p className="text-black-primary text-sm md:text-md">
            if you need me to develop your app or any other jobs that you think i am capable of, i'm open to discuss it!
          </p>
          <p className="text-black-primary text-sm md:text-md">
            you can contact my email at{" "}
            <a href="mailto:abisena27@gmail.com" className="text-blue-secondary underline">
              abisena27@gmail.com
            </a>{" "}
            <br /> or click this button below
          </p>
          <a
            className="text-sm md:text-xl text-black-primary bg-blue-secondary p-2 w-fit rounded-sm mt-2"
            target="_blank"
            href="mailto:abisena27@gmail.com"
          >
            contact me!
          </a>
        </div>
      </div>
    </div>
  );
}
