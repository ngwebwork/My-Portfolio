import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import Button from "../Components/Button";

export default function Navbar() {
  const navItems = [
    "Home",
    "About",
    "Projects",
    "TechStacks",
    "Services",
    "Contact",
  ];

  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);

  // smooth transforms
  const navPadding = useTransform(scrollY, [0, 100], ["20px", "10px"]);
  const logoScale = useTransform(scrollY, [0, 100], [1, 0.85]);

  useEffect(() => {
    const update = (latest) => {
      setScrolled(latest > 50);
    };

    const unsubscribe = scrollY.on("change", update);
    return () => unsubscribe();
  }, [scrollY]);

  return (
    <motion.nav
      style={{
        paddingTop: navPadding,
        paddingBottom: navPadding,
      }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-2xl bg-black/40 shadow-xl border-b border-white/10"
          : "backdrop-blur-xl bg-white/5 border-b border-white/10"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <div style={{ perspective: "1000px" }}>
          <motion.div
            style={{
              scale: logoScale,
              transformStyle: "preserve-3d",
            }}
            whileHover={{ rotateY: 25, rotateX: 10, scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="text-2xl font-bold cursor-pointer"
          >
            <span className="bg-gradient-to-r from-violet-400 to-cyan-400 text-transparent bg-clip-text">
              DevAlpha
            </span>
          </motion.div>
        </div>

        {/* Nav Links */}
        <div className="hidden md:flex space-x-10">
          {navItems.map((item, index) => (
            <motion.a
              key={index}
              href={`#${item.toLowerCase()}`}
              whileHover={{ scale: 1.15, y: -2 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="relative text-gray-200 hover:text-white transition group"
            >
              {item}

              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-gradient-to-r from-violet-400 to-cyan-400 transition-all duration-300 group-hover:w-full"></span>
            </motion.a>
          ))}
        </div>

        {/* CTA Button */}
        <Button />
      </div>
    </motion.nav>
  );
}
