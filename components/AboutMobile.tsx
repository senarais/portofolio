"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Howl } from "howler";
import { ChevronDoubleDownIcon } from "@heroicons/react/24/outline";

interface Props {
  onClose: () => void;
}

export default function AboutMobile({ onClose }: Props) {
  const handleClose = () => {
    const sound = new Howl({
      src: ["/audio/click2.mp3"],
      volume: 0.8,
    });
    sound.play();
    onClose();
  };

  return (
    <div className="relative w-full h-[80vh] bottom-0 bg-white-primary rounded-t-xl border border-gray-400 shadow-xl overflow-hidden flex flex-col">
      {/* header (tetap di atas, non-scrollable) */}
      <div className="text-white-primary rounded-t-xl w-full h-[60px] bg-blue-primary flex items-center justify-between px-6 text-lg shrink-0">
        <p>about</p>
        <motion.button
          onClick={handleClose}
          whileTap={{ scale: 0.9 }}
          aria-label="Close about section"
        >
          <ChevronDoubleDownIcon className="w-9 h-9 p-2 rounded-full hover:bg-white-secondary/20 cursor-pointer transition-colors duration-300" />
        </motion.button>
      </div>

      {/* scrollable content */}
      <div className="flex-1 overflow-y-auto">
        {/* top (profile) */}
        <div className="bg-white-secondary flex flex-col items-center gap-4 border-b border-gray-400 p-4">
          <Image
            width={120}
            height={120}
            src="/sena.png"
            alt="profile"
            className="rounded-full"
          />
          <div className="text-black-primary text-center">
            <h1 className="text-3xl text-blue-tertiary mb-1 font-medium">
              abisena rais
            </h1>
            <p className="text-base font-light">
              world's best samurai. shifting into a software <br />
              engineer and a web developer.
            </p>
          </div>
        </div>

        {/* main content */}
        <div className="flex flex-col gap-8 px-4 py-6">
          {/* introduction */}
          <div className="flex flex-col gap-3">
            <p className="text-blue-primary text-base leading-relaxed">
              hi! i'm sena, world's greatest samurai! but right now i'm shifting
              to software engineering. so... about what i do,
            </p>
            <ul className="list-disc list-inside flex flex-col gap-1">
              <li className="text-blue-primary text-base leading-relaxed">
                i develop{" "}
                <span className="text-blue-tertiary">
                  modern web applications.
                </span>
              </li>
              <li className="text-blue-primary text-base leading-relaxed">
                work across{" "}
                <span className="text-blue-tertiary">
                  front-end and back-end stacks.
                </span>
              </li>
              <li className="text-blue-primary text-base leading-relaxed">
                develop brilliant project ideas that solve{" "}
                <span className="text-blue-tertiary">real-world problems.</span>
              </li>
              <li className="text-blue-primary text-base leading-relaxed">
                keep learning, because even samurais need training.
              </li>
            </ul>
            <p className="text-blue-primary text-base leading-relaxed">
              need me to develop your app?{" "}
              <a
                className="text-blue-secondary underline"
                target="_blank"
                href="mailto:abisena27@gmail.com"
              >
                email me anytime!
              </a>
            </p>
          </div>

          {/* story */}
          <div className="flex flex-col gap-3">
            <h2 className="text-blue-primary font-semibold text-2xl">
              short life story
            </h2>
            <p className="text-blue-primary text-base leading-relaxed">
              so... i have some interesting stories about my life. i used to
              live in a dorm during high school — why? that’s the interesting
              part. my goal was actually to{" "}
              <span className="text-blue-tertiary">seek discomfort</span>. i
              truly believe that to grow in life, you need to step out of your
              comfort zone.{" "}
              <span className="text-blue-tertiary">the things you don’t like</span>{" "}
              are often what shape you into a{" "}
              <span className="text-blue-tertiary">better individual.</span>
            </p>
            <p className="text-blue-primary text-base leading-relaxed">
              and that mindset has become a strong foundation for pursuing my
              dreams. my career path is to become a software engineer, but my
              ultimate dream is to{" "}
              <span className="text-blue-tertiary">
                contribute to the educational growth of our nation — ensuring
                that everyone has equal access to quality education.
              </span>{" "}
              right now, i’m still figuring out the path to make that dream come
              true, hehe.
            </p>
          </div>

          {/* education */}
          <div className="flex flex-col gap-1">
            <h2 className="text-blue-primary font-semibold text-2xl">
              education
            </h2>
            <p className="text-blue-primary text-base leading-relaxed">
              undergraduate in information systems
            </p>
            <p className="text-blue-primary font-extralight text-sm leading-relaxed">
              (universitas islam negeri syarif hidayatullah jakarta)
            </p>
          </div>

          {/* certificate */}
          <div className="flex flex-col gap-1">
            <h2 className="text-blue-primary font-semibold text-2xl">
              certificate
            </h2>
            <div>
              <p className="text-blue-primary text-base leading-relaxed">
                the complete full-stack web development bootcamp
              </p>
              <p className="text-blue-primary font-extralight text-sm leading-relaxed">
                (dr. angela yu)
              </p>
              <a
                href="https://www.udemy.com/certificate/UC-d3d7a52d-c1c5-4582-b719-e372cd92cc98/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-tertiary underline font-extralight text-sm leading-relaxed"
              >
                see more
              </a>
            </div>
          </div>

          {/* interests */}
          <div className="flex flex-col gap-3">
            <h2 className="text-blue-primary font-semibold text-2xl">
              other interests
            </h2>
            <ul className="list-disc list-inside flex flex-col gap-1">
              <li className="text-blue-primary text-base leading-relaxed">
                glory glory man unitedd!!
              </li>
              <li className="text-blue-primary text-base leading-relaxed">
                developing cool apps, like for real, i enjoy it.
              </li>
              <li className="text-blue-primary text-base leading-relaxed">
                love indomie, i do think it's the best ever food.
              </li>
              <li className="text-blue-primary text-base leading-relaxed">
                lately i've been studying history, it's actually pretty
                interesting.
              </li>
              <li className="text-blue-primary text-base leading-relaxed">
                i like to see different perspectives of people.
              </li>
              <li className="text-blue-primary text-base leading-relaxed">
                enjoy reading fiction and high fantasy creative things.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
