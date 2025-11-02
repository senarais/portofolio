"use client";

import { useState, useEffect } from "react";
import { Howl } from "howler";
import Card from "@/components/atom/Card";
import Text from "@/components/atom/Text";
import About from "@/components/About";
import Motion from "@/components/atom/Motion";
import Project from "@/components/Project";
import Wave from "react-wavify";
import Links from "@/components/Links";
import Contact from "@/components/Contact";

export default function Home() {
  const [showAbout, setShowAbout] = useState(false);
  const [showProject, setShowProject] = useState(false);
  const [showLinks, setShowLinks] = useState(false);
  const [showContact, setShowContact] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [whistle, setWhistle] = useState<Howl | null>(null);

  // 🌗 Theme state
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [isScaling, setIsScaling] = useState(false);

  // 🐧 setup whistle
  useEffect(() => {
    const sound = new Howl({
      src: ["/audio/whistle.mp3"],
      loop: true,
    });

    setWhistle(sound);

    // cleanup
    return () => {
      sound.unload();
    };
  }, []);

  // 🐧 klik penguin (musik)
  const handlePenguinClick = () => {
    if (!whistle) return;
    if (isPlaying) whistle.stop();
    else whistle.play();
    setIsPlaying(!isPlaying);
  };

  // 🌙 setup theme awal
  useEffect(() => {
    const saved = localStorage.getItem("theme") as "light" | "dark" | null;
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initial = saved || (prefersDark ? "dark" : "light");
    setTheme(initial);
    document.documentElement.setAttribute("data-theme", initial);
  }, []);

  // ☀️ toggle theme (mainkan sfx 1x)
  const handleToggleTheme = () => {
    setIsScaling(true);

    // pilih sound effect sesuai next theme
    const nextTheme = theme === "light" ? "dark" : "light";
    const sfx = new Howl({
      src: [nextTheme === "light" ? "/audio/theme1.mp3" : "/audio/theme2.mp3"],
      loop: false,
      volume: 1,
    });
    sfx.play();

    setTimeout(() => {
      setTheme(nextTheme);
      document.documentElement.setAttribute("data-theme", nextTheme);
      localStorage.setItem("theme", nextTheme);
    }, 100);

    setTimeout(() => setIsScaling(false), 250);
  };

  // 🧩 helper buat ambil icon sesuai theme
  const themedIcon = (base: string) => {
    if (theme === "dark") {
      const [name, ext] = base.split(".");
      return `/${name}-dark.${ext}`;
    }
    return `/${base}`;
  };

  return (
    <div className="w-full h-screen bg-white-primary flex justify-center items-center select-none overflow-hidden relative transition-colors duration-300">
      {/* 🐧 Penguin tetap di pojok bawah kanan */}
      <img
        src={isPlaying ? "/penguin.gif" : "/penguin.png"}
        alt="penguin"
        onClick={handlePenguinClick}
        className="
          absolute 
          w-[clamp(100px,15vw,180px)] 
          bottom-2 right-2 
          z-5 
          cursor-pointer 
          floaty 
          transition-all duration-500 ease-in-out 
          pointer-events-auto select-none
        "
      />

      {/* 🌊 Wave Background */}
      <Wave
        fill="var(--color-blue-secondary)"
        paused={false}
        options={{
          height: 30,
          amplitude: 15,
          speed: 0.4,
          points: 3,
        }}
        className="absolute bottom-0 left-0 w-full h-[34vh] z-0"
      />

      {/* 💼 Card utama */}
      <div className="relative w-[750px] h-[500px] top-10 p-4 bg-white-primary rounded-xl border border-gray-400 shadow-xl z-10 transition-colors duration-300">
        {/* Header */}
        <div className="absolute text-white-secondary top-0 left-0 rounded-t-xl w-full h-[60px] bg-blue-primary flex items-center pl-6 text-xl z-10 transition-colors duration-300">
          <p>home</p>
        </div>

        {/* 🌞/🌙 Theme Toggle — posisi tetap */}
        <img
          src={theme === "light" ? "/sun.png" : "/moon.png"}
          alt="toggle theme"
          onClick={handleToggleTheme}
          className={`absolute w-[50px] -top-17 z-20 cursor-pointer transition-transform duration-300 ${
            isScaling ? "scale-75" : "scale-100"
          }`}
        />

        {/* Isi konten */}
        <div className="flex flex-col items-center gap-5 relative z-10">
          <Text />
          <div className="mt-5 flex justify-center gap-5 w-full h-fit p-5">
            <Card src={themedIcon("info.png")} label="about" onClick={() => setShowAbout(true)} />
            <Card src={themedIcon("link.png")} label="links" onClick={() => setShowLinks(true)} />
            <Card src={themedIcon("folder.png")} label="projects" onClick={() => setShowProject(true)} />
            <Card src={themedIcon("mail.png")} label="contact" onClick={() => setShowContact(true)} />
          </div>
        </div>

        {/* Komponen yang muncul animasi */}
        <Motion className="left-[30px] top-5" isVisible={showAbout}>
          <About onClose={() => setShowAbout(false)} />
        </Motion>
        <Motion className="left-[-70px] top-[30px]" isVisible={showProject}>
          <Project onClose={() => setShowProject(false)} />
        </Motion>
        <Motion className="left-[30px] top-5" isVisible={showLinks}>
          <Links onClose={() => setShowLinks(false)} theme={theme} /> {/* 🟢 theme dikirim ke Links */}
        </Motion>
        <Motion className="left-[30px] top-5" isVisible={showContact}>
          <Contact onClose={() => setShowContact(false)} />
        </Motion>
      </div>
    </div>
  );
}
