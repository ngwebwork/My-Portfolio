import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="w-full py-24 bg-[#05060f] text-white">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Left Text */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            About <span className="text-cyan-400">Me</span>
          </h2>

          <p className="text-gray-400 leading-relaxed mb-6">
            I am a fullstack developer passionate about building scalable
            applications, graphic design, and modern digital experiences. I
            focus on performance, clean architecture, and real world impact.
          </p>

          <p className="text-gray-400 leading-relaxed">
            My Techstacks includes React, Node.js, Tailwind CSS, MongoDB, and
            Express. I enjoy turning complex problems into simple, usable
            solutions.
          </p>

          {/* Skills tags */}
          <div className="flex flex-wrap gap-3 mt-6">
            {[
              "React",
              "Tailwind css",
              "Node.js",
              "Express JS",
              "MongoDB",
              "Next.js",
            ].map((skill, i) => (
              <span
                key={i}
                className="px-3 py-1 text-sm rounded-full border border-white/10 bg-white/5"
              >
                {skill}
              </span>
            ))}
          </div>
         
        </motion.div>

        {/* Right Card */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-xl">
            <h3 className="text-xl font-semibold mb-4">Technical Profile</h3>

            <ul className="space-y-3 text-gray-300">
              <li>⚡ 3+ years coding experience</li>
              <li>🚀 Frontend & Backend Developer</li>
              <li>💻 Full Stack Web Applications</li>
              <li>🌍 Focus on scalable architecture</li>
              <li>🎨 Responsive & Modern UI/UX Design</li>
              <li>🔧 REST APIs & Database Integration</li>
              <li>☁️ Cloud Deployment & Performance Optimization</li>
              <li>📚 Continuous Learning & Emerging Technologies</li>
            </ul>
          </div>

          {/* glow */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-violet-600/30 blur-3xl rounded-full"></div>
        </motion.div>
      </div>
    </section>
  );
}
