import { ReactNode } from "react";

interface MotionProps {
  children: ReactNode;
  isVisible: boolean;
  className?: string;
}

export default function MotionMobile({
  children,
  isVisible,
  className = "",
}: MotionProps) {
  return (
    <div
      className={`
        absolute w-full items-center rounded-xl shadow-lg transition-all duration-500 ease-in-out
        ${isVisible ? "opacity-100 translate-y-0 z-20 pointer-events-auto" : "opacity-0 translate-y-full z-4 pointer-events-none"}
        ${className}
      `}
    >
      {children}
    </div>
  );
}
