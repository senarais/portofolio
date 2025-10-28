"use client";
import { useState, useEffect } from "react";

function Text() {
  const words = [
    "a fullstack developer",
    "a front-end developer",
    "a back-end developer",
    "a crazy data fetcher",
    "the world's best samurai",
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
    <div className="w-full h-fit flex flex-col gap-4 justify-center items-center mt-25 text-center">
      <h1 className="text-black text-6xl">
        hola! - <span className="text-blue-primary font-medium">it's sena</span>
      </h1>

      <p className="text-black text-2xl font-extralight flex justify-center items-center gap-2">
        <span>trust me, i'm</span>
        <span className="relative w-[250px] h-[30px] inline-flex justify-start items-center">
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
