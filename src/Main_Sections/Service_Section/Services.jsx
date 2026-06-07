import { motion } from "framer-motion";

export default function Services() {
  const services = [
    {
      title: "Full Stack Web Development",
      desc: "Building complete web applications using modern frontend and backend technologies with responsive, scalable, and high-performance solutions.",
      icon: "💻",
    },
    {
      title: "Frontend Development",
      desc: "Creating fast, responsive, and interactive user interfaces using React, Next.js, Tailwind CSS, and modern web technologies.",
      icon: "⚛️",
    },
    {
      title: "Backend Development",
      desc: "Developing secure APIs, databases, authentication systems, and server-side applications using Node.js, Express, and MongoDB.",
      icon: "⚙️",
    },
    {
      title: "Graphic Design",
      desc: "Designing visually appealing graphics, social media creatives, flyers, banners, and branding materials that capture attention.",
      icon: "🎨",
    },
    {
      title: "Brand Identity Design",
      desc: "Creating professional logos, brand assets, color systems, and visual identities that help businesses stand out.",
      icon: "✨",
    },
    {
      title: "UI Design",
      desc: "Designing modern website and application interfaces with a strong focus on usability, aesthetics, and user experience.",
      icon: "📱",
    },
  ];
  return (
    <section id="services" className="w-full py-24 bg-[#05060f] text-white">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold">
          My <span className="text-cyan-400">Services</span>
        </h2>
        <p className="text-gray-400 mt-3">What I can build for you</p>
      </div>

      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8">
        {services.map((service, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05, y: -6 }}
            className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl relative overflow-hidden"
          >
            {/* glow */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-violet-500/20 blur-3xl rounded-full"></div>

            <div className="text-3xl mb-3">{service.icon}</div>

            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>

            <p className="text-gray-400 text-sm">{service.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
