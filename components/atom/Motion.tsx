import { motion, AnimatePresence } from "framer-motion";
import { ReactNode } from "react";

interface MotionProps {
  children: ReactNode;      // komponen apa pun yang mau dianimasikan (misal <About />)
  isVisible: boolean;       // state untuk show/hide komponen
  onClose?: () => void;     // optional, kalau kamu mau trigger close dari luar
  className?: string;       // 🔥 tambahan baru buat custom class
}

export default function Motion({ children, isVisible, onClose, className = "" }: MotionProps) {
  return (
    <AnimatePresence initial={false}>
      {isVisible && (
        <motion.div
          key="animated-content"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className={`absolute inset-0 items-center rounded-xl shadow-lg z-20 ${className}`}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
