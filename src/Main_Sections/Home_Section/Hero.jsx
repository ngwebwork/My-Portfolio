import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative w-full max-sm:h-screen min-h-screen flex items-center justify-center text-white overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 bg-linear-to-br from-[#05060f] via-[#0b0f2f] to-[#070816]"></div>

      {/* Animated glow orbs */}
      <div className="absolute w-[500px] h-[500px] bg-violet-600/20 rounded-full blur-3xl top-10 left-10 animate-pulse"></div>
      <div className="absolute w-[400px] h-[400px] bg-cyan-500/20 rounded-full blur-3xl bottom-10 right-10 animate-pulse"></div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl text-center px-6">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-block px-4 py-2 rounded-full border max-sm:mt-10 border-white/10 bg-white/5 backdrop-blur-md text-sm text-gray-300 mb-6"
        >
          ⚡ Full Stack Developer • Graphic Designer • Problem Solver
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold leading-tight"
        >
          Build the Future with{" "}
          <span className="bg-linear-to-r from-violet-400 to-cyan-400 text-transparent bg-clip-text">
            Code & Intelligence
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-gray-400 mt-6 text-lg md:text-xl"
        >
          I design and build high performance web apps, graphic designs, and
          scalable systems that turn ideas into reality.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="flex flex-col md:flex-row items-center justify-center gap-4 mt-10"
        >
          <a
            href="https://amoo-abdulmueez-cv.tiiny.site"
            target="_blank"
            rel="noopener noreferrer"
            className="z-1 px-6 py-3 rounded-xl bg-linear-to-r from-violet-600 to-cyan-500 shadow-lg hover:scale-105 transition"
          >
            Resume
          </a>

          <a
            href="#contact"
            className="px-6 py-3 rounded-xl border border-white/20 backdrop-blur-md hover:bg-white/10 transition"
          >
            Contact Me
          </a>
        </motion.div>
      </div>
    </section>
  );
}
