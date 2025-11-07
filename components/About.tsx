"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Howl } from "howler";
import { XCircleIcon } from "@heroicons/react/24/outline"; // 🟢 Heroicon Close Button

interface Props {
  onClose: () => void;
}

export default function About({ onClose }: Props) {
  const handleClose = () => {
    const sound = new Howl({
      src: ["/audio/click2.mp3"],
      volume: 0.8,
    });
    sound.play();
    onClose();
  };

  return (
    <div className="relative w-[850px] h-[500px] p-4 pb-0 bg-white-primary rounded-xl border border-gray-400 shadow-xl overflow-hidden">
      {/* header */}
      <div className="absolute text-white-primary top-0 left-0 rounded-t-xl w-full h-[60px] bg-blue-primary flex items-center justify-between px-6 text-xl z-10">
        <p>about</p>

        {/* 🟢 Close button pakai Heroicon */}
        <motion.button
          onClick={handleClose}
          whileTap={{ scale: 0.9 }}
          aria-label="Close about section"
        >
          <XCircleIcon className="w-10 h-10 cursor-pointer text-white-primary" />
        </motion.button>
      </div>

      {/* content wrapper */}
      <div className="mt-[45px] flex flex-col h-full -mx-4">
        {/* top (profile) */}
        <div className="h-[200px] bg-white-secondary flex gap-10 items-center border-b border-gray-400 pl-15 pr-4">
          <Image
            width={170}
            height={170}
            src="/sena.png"
            alt="profile"
            className="rounded-full"
          />
          <div className="text-black-primary text-lg font-light">
            <h1 className="text-5xl text-blue-tertiary mb-2 font-medium">
              abisena rais
            </h1>
            <p>
              world's best samurai. shifting into a software <br />
              engineer and a web developer.
            </p>
          </div>
        </div>

        {/* scrollable content */}
        <div className="flex-1 flex flex-col gap-10 overflow-y-auto pb-20 pl-15 pr-25 py-8">
          {/* introduction */}
          <div className="flex flex-col gap-4">
            <p className="text-blue-primary text-xl leading-relaxed">
              hi! i'm sena, world's greatest samurai! but right now i'm shifting
              to software engineering. so... about what i do,
            </p>
            <ul className="list-disc list-inside flex flex-col gap-1">
              <li className="text-blue-primary text-xl leading-relaxed">
                i develop{" "}
                <span className="text-blue-tertiary">
                  modern web applications.
                </span>
              </li>
              <li className="text-blue-primary text-xl leading-relaxed">
                work across{" "}
                <span className="text-blue-tertiary">
                  front-end and back-end stacks.
                </span>
              </li>
              <li className="text-blue-primary text-xl leading-relaxed">
                develop brilliant project ideas that solve{" "}
                <span className="text-blue-tertiary">real-world problems.</span>
              </li>
              <li className="text-blue-primary text-xl leading-relaxed">
                keep learning, because even samurais need training.
              </li>
            </ul>
            <p className="text-blue-primary text-xl leading-relaxed">
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
          <div className="flex flex-col gap-4">
            <h2 className="text-blue-primary font-semibold text-3xl">
              short life story
            </h2>
            <p className="text-blue-primary text-xl leading-relaxed">
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
            <p className="text-blue-primary text-xl leading-relaxed">
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
          <div className="flex flex-col gap-2">
            <h2 className="text-blue-primary font-semibold text-3xl">
              education
            </h2>
            <p className="text-blue-primary text-xl leading-relaxed">
              undergraduate in information systems
            </p>
            <p className="text-blue-primary font-extralight text-md leading-relaxed">
              (universitas islam negeri syarif hidayatullah jakarta)
            </p>
          </div>

          {/* certificate */}
          <div className="flex flex-col gap-2">
            <h2 className="text-blue-primary font-semibold text-3xl">
              certificate
            </h2>
            <div>
              <p className="text-blue-primary text-xl leading-relaxed">
                the complete full-stack web development bootcamp
              </p>
              <p className="text-blue-primary font-extralight text-md leading-relaxed">
                (dr. angela yu)
              </p>
              <a
                href="https://www.udemy.com/certificate/UC-d3d7a52d-c1c5-4582-b719-e372cd92cc98/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-tertiary underline font-extralight text-md leading-relaxed"
              >
                see more
              </a>
            </div>
          </div>

          {/* interests */}
          <div className="flex flex-col gap-4">
            <h2 className="text-blue-primary font-semibold text-3xl">
              other interests
            </h2>
            <ul className="list-disc list-inside flex flex-col gap-1">
              <li className="text-blue-primary text-xl leading-relaxed">
                glory glory man unitedd!!
              </li>
              <li className="text-blue-primary text-xl leading-relaxed">
                developing cool apps, like for real, i enjoy it.
              </li>
              <li className="text-blue-primary text-xl leading-relaxed">
                fast typinggg, currently 109 WPM!
              </li>
              <li className="text-blue-primary text-xl leading-relaxed">
                love indomie, i do think it's the best ever food.
              </li>
              <li className="text-blue-primary text-xl leading-relaxed">
                lately i've been studying history, it's actually pretty
                interesting.
              </li>
              <li className="text-blue-primary text-xl leading-relaxed">
                i like to see different perspectives of people.
              </li>
              <li className="text-blue-primary text-xl leading-relaxed">
                enjoy reading fiction and high fantasy creative things.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
