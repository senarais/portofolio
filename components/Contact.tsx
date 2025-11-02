"use client";

import { XCircleIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
import { Howl } from "howler";

interface ContactProps {
  onClose: () => void;
}

export default function Contact({ onClose }: ContactProps) {
  // fungsi untuk handle close + mainkan sound
  const handleClose = () => {
    const sound = new Howl({
      src: ["/audio/click2.mp3"],
      volume: 0.8,
    });
    sound.play();

    onClose();
  };

  return (
    <div className="relative w-[770px] h-[430px] p-4 pb-0 bg-white-primary rounded-xl border border-gray-400 shadow-xl overflow-hidden">
      
      {/* Header */}
      <div className="absolute top-0 left-0 rounded-t-xl w-full h-[60px] bg-blue-primary flex items-center justify-between px-6 text-xl z-10 text-white-primary">
        <p>contact</p>

        {/* Tombol close */}
        <motion.button
          onClick={handleClose}
          whileTap={{ scale: 0.9 }}
          aria-label="Close about section"
        >
          <XCircleIcon className="w-10 h-10 cursor-pointer text-white-primary" />
        </motion.button>
      </div>

      {/* Konten */}
      <div className="relative w-full h-full flex gap-20 items-center">
        <img
            className="w-[250px] transition-transform duration-300 ease-in-out hover:scale-110"
            src="/penguincontact.png"
            alt="penguin"
        />
        <div className="flex flex-col justify-between gap-5">
            <h2 className="text-3xl text-blue-primary font-medium">yuuhuuu! let's work together.</h2>
            <p className="text-black-primary text-md">if you need me to develop your app or any other jobs that you think i am capable of, i'm open to discuss it!</p>
            <p className="text-black-primary text-md">you can contact my email at <a href="mailto:abisena27@gmail.com" className="text-blue-secondary underline">abisena27@gmail.com</a> <br /> or click this button below</p>
            <a className="text-xl text-black-primary bg-blue-secondary p-2 w-fit rounded-sm" target="_blank" href="mailto:abisena27@gmail.com">
            contact me!
            </a>
        </div>
      </div>
    </div>
  );
}
