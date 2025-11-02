import { motion, AnimatePresence } from "framer-motion";
import { ReactNode } from "react";

interface MotionProps {
  children: ReactNode;
  isVisible: boolean;
  onClose?: () => void;
  className?: string;
}

export default function Motion({ children, isVisible, onClose, className = "" }: MotionProps) {
  return (
    <AnimatePresence initial={false}>
      {isVisible && (
        <motion.div
          key="animated-content"
          initial={{ opacity: 0, y: "100%" }}           // mulai dari bawah layar
          animate={{ opacity: 1, y: 0 }}               // geser ke posisi normal
          exit={{ opacity: 0, y: "100%" }}             // slide balik ke bawah pas close
          transition={{ duration: 0.4, ease: "easeInOut" }}  // biar smooth
          className={`absolute w-full items-center rounded-xl shadow-lg z-20 ${className}`}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
