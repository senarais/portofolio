"use client";
import { useState, useEffect } from "react";

function Text() {
  const words = [
    "a fullstack developer",
    "a front-end developer",
    "a back-end developer",
    "a software engineer",
    "world's best samurai",
  ];

  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % words.length);
        setFade(true);
      }, 500);
    }, 5000);
    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <div className="w-full h-fit flex flex-col gap-4 justify-center items-center text-center">
      <h1 className="text-black-primary text-[clamp(45px,6vw,80px)]">
        hola! - <span className="text-blue-tertiary font-medium">it's sena</span>
      </h1>

      <p className="text-black-primary font-extralight flex justify-center items-center gap-1 text-[clamp(18px,2.3vw,36px)]">
        <span>trust me, i'm</span>

        <span
          className={`
            relative inline-flex justify-start items-center text-left
            w-fit min-w-[16ch] whitespace-nowrap
          `}
        >
          <span
            className={`absolute transition-opacity duration-500 ${
              fade ? "opacity-100" : "opacity-0"
            }`}
          >
            {words[index]}
          </span>
        </span>
      </p>
    </div>
  );
}

export default Text;
