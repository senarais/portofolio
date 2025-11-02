"use client";

import { motion } from "framer-motion";
import { Howl } from "howler";
import SocialLink from "./atom/SocialLinkMobile";
import { XCircleIcon } from "@heroicons/react/24/outline";

interface Props {
  onClose: () => void;
  theme: "light" | "dark";
}

export default function LinksMobile({ onClose, theme }: Props) {
  const handleClose = () => {
    const sound = new Howl({
      src: ["/audio/click2.mp3"],
      volume: 0.8,
    });
    sound.play();
    onClose();
  };

  const themedIcon = (base: string) => {
    if (theme === "dark") {
      const [name, ext] = base.split(".");
      return `/links/${name}-dark.${ext}`;
    }
    return `/links/${base}`;
  };

  return (
    <div className="relative w-full h-[80vh] bottom-0 pb-0 bg-white-primary rounded-xl border border-gray-400 shadow-xl overflow-hidden flex flex-col">
      {/* header */}
      <div className="text-white-primary rounded-t-xl w-full h-[60px] bg-blue-primary flex items-center justify-between px-6 text-xl flex-shrink-0">
        <p>links</p>
        <motion.button
          onClick={handleClose}
          whileTap={{ scale: 0.9 }}
          aria-label="Close links section"
        >
          <XCircleIcon className="w-10 h-10 cursor-pointer text-white-primary" />
        </motion.button>
      </div>

      {/* scrollable content */}
      <div className="flex-1 overflow-y-auto flex flex-col items-center justify-between py-6">
        <div className="flex flex-col gap-4 items-center w-full">
          <SocialLink
            src={themedIcon("youtube.png")}
            label="youtube"
            href="https://www.youtube.com/abisena27"
          />
          <SocialLink
            src={themedIcon("instagram.png")}
            label="instagram"
            href="https://www.instagram.com/senarais"
          />
          <SocialLink
            src={themedIcon("linkedin.png")}
            label="linkedin"
            href="https://www.linkedin.com/in/abisena-rais-50b047275/"
          />
          <SocialLink
            src={themedIcon("github.png")}
            label="github"
            href="https://www.github.com/senarais"
          />
          <SocialLink
            src={themedIcon("twitter.png")}
            label="twitter"
            href="https://x.com/flyingmbappe777"
          />
          <SocialLink
            src={themedIcon("cv.png")}
            label="cv"
            href="https://www.youtube.com/abisena27"
          />
        </div>

        <p className="text-blue-primary text-center mt-6 mb-4 px-4">
          Want to stalk me (in a good way)? Check these out!
        </p>
      </div>
    </div>
  );
}
