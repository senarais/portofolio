"use client";

/**
 * ☁️ PixelClouds
 * Awan pixel-art lucu yang melayang di background.
 * - Desktop: awan bergerak pelan dari kanan ke kiri (loop).
 * - Mobile: kirim prop `paused` biar awan diam (gak gerak).
 */

// 1 = body putih, 3 = shadow bawah (biar ada depth lucunya)
const CLOUD_SHAPE = [
  "00000111000000",
  "00011111110000",
  "00111111111100",
  "01111111111110",
  "11111111111111",
  "33333333333333",
];

const COLS = CLOUD_SHAPE[0].length;
const ROWS = CLOUD_SHAPE.length;

function PixelCloud({ size = 90 }: { size?: number }) {
  return (
    <svg
      viewBox={`0 0 ${COLS} ${ROWS}`}
      width={size}
      height={(size / COLS) * ROWS}
      shapeRendering="crispEdges"
      style={{ display: "block", overflow: "visible" }}
    >
      {CLOUD_SHAPE.flatMap((row, y) =>
        row.split("").map((cell, x) => {
          if (cell === "0") return null;
          const fill = cell === "3" ? "var(--cloud-shadow)" : "var(--cloud-body)";
          return <rect key={`${x}-${y}`} x={x} y={y} width={1.02} height={1.02} fill={fill} />;
        })
      )}
    </svg>
  );
}

type CloudConf = {
  top: string;
  size: number;
  duration: number;
  delay: number;
  opacity: number;
};

// Beberapa awan dengan posisi, ukuran, kecepatan, dan transparansi berbeda
const CLOUDS: CloudConf[] = [
  { top: "12%", size: 110, duration: 55, delay: 0, opacity: 0.95 },
  { top: "22%", size: 70, duration: 75, delay: -20, opacity: 0.75 },
  { top: "8%", size: 60, duration: 90, delay: -45, opacity: 0.6 },
  { top: "32%", size: 130, duration: 48, delay: -12, opacity: 0.9 },
  { top: "18%", size: 85, duration: 65, delay: -35, opacity: 0.8 },
  { top: "5%", size: 95, duration: 80, delay: -60, opacity: 0.7 },
];

export default function PixelClouds({ paused = false }: { paused?: boolean }) {
  return (
    <div
      aria-hidden
      className="pixel-clouds absolute inset-0 z-[1] overflow-hidden pointer-events-none select-none"
    >
      {CLOUDS.map((c, i) => (
        <div
          key={i}
          className="absolute"
          style={{
            top: c.top,
            opacity: c.opacity,
            // mobile (paused): taruh statis tersebar di layar, gak gerak
            left: paused ? `${(i * 17 + 5) % 90}%` : "100%",
            animationName: paused ? "none" : "cloud-drift",
            animationDuration: `${c.duration}s`,
            animationDelay: `${c.delay}s`,
            animationTimingFunction: "linear",
            animationIterationCount: "infinite",
            willChange: "transform",
          }}
        >
          <PixelCloud size={c.size} />
        </div>
      ))}
    </div>
  );
}
