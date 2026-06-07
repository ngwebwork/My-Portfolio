import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="w-full bg-[#05060f] text-white border-t border-white/10 relative overflow-hidden">
      {/* Glow background */}
      <div className="absolute w-[300px] h-[300px] bg-violet-600/20 blur-3xl rounded-full -top-10 left-10"></div>
      <div className="absolute w-[300px] h-[300px] bg-cyan-500/20 blur-3xl rounded-full bottom-0 right-10"></div>

      <div className="max-w-6xl mx-auto px-6 py-16 relative z-10 grid md:grid-cols-3 gap-10">
        {/* Brand */}
        <div>
          <h1 className="text-2xl font-bold bg-gradient-to-r from-violet-400 to-cyan-400 text-transparent bg-clip-text">
            devAlpha
          </h1>

          <p className="text-gray-400 mt-4 text-sm leading-relaxed">
            Building modern web apps, blockchain systems, and digital
            experiences with clean architecture and high performance.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>

          <ul className="space-y-3 text-gray-400 text-sm">
            {["Home", "About", "Projects", "Services", "Contact"].map(
              (item, i) => (
                <li key={i}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="hover:text-cyan-400 transition"
                  >
                    {item}
                  </a>
                </li>
              ),
            )}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Get in Touch</h3>

          <p className="text-gray-400 text-sm">
            📧 websitedeveloperng1@gmail.com
          </p>

          <p className="text-gray-400 text-sm mt-2">📍 Lagos, Nigeria</p>

          <div className="flex gap-4 mt-6">
            <a
              href="https://github.com/ngwebwork"
              className="px-3 py-2 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 transition"
            >
              GitHub
            </a>

            <a
              href="https://x.com/ngwebwork"
              className="px-3 py-2 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 transition"
            >
              X
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10 py-6 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} devAlpha. All rights reserved.
      </div>
    </footer>
  );
}
