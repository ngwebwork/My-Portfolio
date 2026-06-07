import { motion } from "framer-motion";

// React Icons (official logos)
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaPython,
  FaGitAlt,
} from "react-icons/fa";

import {
  SiTypescript,
  SiRedux,
  SiExpress,
  SiMongodb,
  SiMongoose,
  // SiVisualstudiocode,
} from "react-icons/si";

// DATA ONLY (no JSX here)
const techStacks = [
  {
    category: "Frontend",
    techs: [
      { name: "HTML", icon: FaHtml5 },
      { name: "CSS", icon: FaCss3Alt },
      { name: "JavaScript", icon: FaJs },
      { name: "TypeScript", icon: SiTypescript },
      { name: "React", icon: FaReact },
      { name: "Redux", icon: SiRedux },
    ],
  },
  {
    category: "Backend",
    techs: [
      { name: "Node.js", icon: FaNodeJs },
      { name: "Express.js", icon: SiExpress },
      { name: "Python", icon: FaPython },
    ],
  },
  {
    category: "Database",
    techs: [
      { name: "MongoDB", icon: SiMongodb },
      { name: "Mongoose", icon: SiMongoose },
    ],
  },
  {
    category: "Tools",
    techs: [
      { name: "Git", icon: FaGitAlt },
      // { name: "VS Code", icon: SiVisualstudiocode },
    ],
  },
];

export default function TechStack() {
  return (
    <section
      id="techstacks"
      className="w-full py-24 bg-[#05060f] text-white relative overflow-hidden"
    >
      {/* HEADER */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold">
          My <span className="text-cyan-400">Tech Stack</span>
        </h2>
        <p className="text-gray-400 mt-3">
          Tools, frameworks & technologies I use to build systems
        </p>
      </div>

      {/* CONTENT */}
      <div className="max-w-6xl mx-auto px-6 space-y-16">
        {techStacks.map((section, index) => (
          <div key={index}>
            {/* CATEGORY TITLE */}
            <h3 className="text-2xl font-bold mb-8 text-cyan-400">
              {section.category}
            </h3>

            {/* GRID */}
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {section.techs.map((tech, i) => {
                const Icon = tech.icon;

                return (
                  <motion.div
                    key={i}
                    whileHover={{
                      scale: 1.08,
                      y: -8,
                    }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="group relative p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl overflow-hidden"
                  >
                    {/* Glow background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition duration-500" />

                    {/* ICON + TEXT */}
                    <div className="relative flex flex-col items-center text-center">
                      <div className="mb-4 p-4 rounded-2xl bg-white/10 border border-white/10">
                        <Icon
                          size={42}
                          className="text-cyan-400 group-hover:scale-125 transition-transform duration-300"
                        />
                      </div>

                      <h4 className="font-semibold">{tech.name}</h4>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
