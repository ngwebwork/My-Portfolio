import { motion } from "framer-motion";

export default function Button() {
  return (
    <motion.a
      href="https://wa.link/8al51o"
      whileHover={{
        scale: 1.01,
        rotateX: -10,
        rotateY: 10,
        boxShadow:
          "0px 20px 40px rgba(0, 102, 255, 0.5), 0px 0px 30px rgba(0, 102, 255, 0.8)",
      }}
      whileTap={{
        scale: 0.95,
      }}
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 15,
      }}
      style={{
        padding: "15px 20px",
        border: "none",
        borderRadius: "10px",
        background: "linear-gradient(135deg, #0066ff, #00c3ff)",
        color: "#fff",
        fontSize: "10px",
        fontWeight: "700",
        cursor: "pointer",
        transformStyle: "preserve-3d",
        perspective: "1000px",
        letterSpacing: "1px",
      }}
    >
      Hire Me
    </motion.a>
  );
}
