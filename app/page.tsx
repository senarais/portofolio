"use client";

import { useState, useEffect } from "react";
import Home from "@/components/Home"; // atau path kamu ke Home.tsx
import HomeMobile from "@/components/HomeMobile"; // versi mobile

export default function Page() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // 🖥️ Deteksi awal
    const checkWidth = () => {
      setIsMobile(window.innerWidth < 768); // <1024px = mobile/tablet
    };

    checkWidth(); // jalankan pertama kali
    window.addEventListener("resize", checkWidth);

    return () => window.removeEventListener("resize", checkWidth);
  }, []);

  return (
    <>
      {isMobile ? <HomeMobile /> : <Home />}
    </>
  );
}
