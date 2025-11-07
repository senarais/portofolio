import { motion } from "framer-motion";
import { Howl } from "howler";
import SocialLink from "./atom/SocialLinks";
import { XCircleIcon } from "@heroicons/react/24/outline";

interface Props {
  onClose: () => void;
  theme: "light" | "dark";
}

export default function Links({ onClose, theme }: Props) {
  const handleClose = () => {
    // 🔊 Play close sound
    const sound = new Howl({
      src: ["/audio/click2.mp3"],
      volume: 0.8,
    });
    sound.play();

    onClose();
  };

  // 🧩 helper buat ambil icon sesuai theme
  const themedIcon = (base: string) => {
    if (theme === "dark") {
      const [name, ext] = base.split(".");
      return `/links/${name}-dark.${ext}`;
    }
    return `/links/${base}`;
  };

  return (
    <div className="relative w-[650px] h-[430px] p-4 pb-0 bg-white-primary rounded-xl border border-gray-400 shadow-xl overflow-hidden">
      {/* header */}
      <div className="absolute text-white-primary top-0 left-0 rounded-t-xl w-full h-[60px] bg-blue-primary flex items-center justify-between px-6 text-xl z-10">
        <p>links</p>

        {/* tombol close di header */}
        <motion.button
          onClick={handleClose}
          whileTap={{ scale: 0.9 }}
          aria-label="Close about section"
        >
          <XCircleIcon className="w-10 h-10 cursor-pointer text-white-primary" />
        </motion.button>
      </div>

      <div className="relative w-full h-full pb-5 flex justify-center items-center">
        <div className="grid grid-cols-3 gap-6 gap-x-12">
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
            href="https://drive.google.com/file/d/1VFyD22Sbi4N1C4NigQjp9FRBpCTVL_vB/view?usp=sharing"
          />
        </div>

        <p className="absolute text-blue-primary bottom-4">
          Want to stalk me (in a good way)? Check these out!
        </p>
      </div>
    </div>
  );
}
