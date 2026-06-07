import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Loader({ setLoading }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Increment progress slowly for 12 seconds (~0.8% per 100ms)
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setLoading(false), 800); // smooth fade-out delay
          return 100;
        }
        return prev + 0.8;
      });
    }, 100); // 100ms interval → ~12.5 seconds total

    return () => clearInterval(interval);
  }, [setLoading]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1.5 }}
        className="fixed inset-0 z-50 flex flex-col items-center justify-center"
      >
        <div className="absolute inset-0 bg-black opacity-90 animate-pulse-slow"></div>

        {/* Loader Content */}
        <div className="relative z-10 flex flex-col items-center">
          {/* Pulsing Text */}
          <motion.h1
            className="text-white text-2xl font-bold mb-4"
            initial={{ scale: 0.95 }}
            animate={{ scale: [0.95, 1.05, 0.95] }}
            transition={{ repeat: Infinity, duration: 3 }}
          >
            Constructing Portfolio
          </motion.h1>

          {/* Progress Bar Container */}
          <div className="w-80 h-3 bg-white/20 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-blue-400 via-cyan-300 to-violet-400 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ ease: "linear" }}
            />
          </div>

          {/* Percentage */}
          <motion.p className="text-white/70 mt-3 font-mono">
            {Math.floor(progress)}%
          </motion.p>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
