import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";
import image1 from "../../assets/Images/Project_images/Chop_deck.png";
import image2 from "../../assets/Images/Project_images/Analytics_Dashboard.png";
import image3 from "../../assets/Images/Project_images/Horlard_construction_limited.png";
import image4 from "../../assets/Images/Project_images/Portfolio.png";
import image5 from "../../assets/Images/Project_images/QuickBite.NG.png";

export default function Projects() {
  const projects = [
    {
      image: image5,
      title: "QuickBite NG",
      desc: "QuickBite NG is Nigeria's modern food ordering platform, offering quick access to delicious meals, easy online ordering, secure checkout, and a smooth user experience across desktop and mobile devices.",
      tech: ["Next.js", "TypeScript", "Tailwind CSS"],
      view: "https://analytics-dashboard-two-sepia.vercel.app/",
      github: "https://github.com/ngwebwork/Analytics-Dashboard",
    },
    {
      image: image2,
      title: "Analytics Dashboard",
      desc: "Interactive analytics dashboard displaying key business metrics and insights in real time.",
      tech: ["Next.js", "TypeScript", "Tailwind CSS"],
      view: "https://analytics-dashboard-two-sepia.vercel.app/",
      github: "https://github.com/ngwebwork/Analytics-Dashboard",
    },
    {
      image: image1,
      title: "ChopDeck",
      desc: "Modern food ordering platform built with a responsive user interface and smooth user experience.",
      tech: ["React", "JavaScript", "Tailwind CSS"],
      view: "https://chop-deck.vercel.app",
      github: "https://github.com/ngwebwork/ChopDeck",
    },
    {
      image: image4,
      title: "Portfolio Website",
      desc: "Personal developer portfolio showcasing projects, skills, experience and contact information.",
      tech: ["React", "Tailwind CSS"],
    },
    {
      image: image3,
      title: "Horlard Construction",
      desc: "Professional construction company website showcasing services, projects and company information.",
      tech: ["React", "JavaScript", "Tailwind CSS"],
      view: "https://horlard-construction-limited.vercel.app/",
      github: "https://github.com/ngwebwork/Horlard-Construction-Limited",
    },
  ];

  return (
    <section
      id="projects"
      className="relative py-24 bg-[#070816] overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 blur-3xl rounded-full"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-violet-500/10 blur-3xl rounded-full"></div>

      <div className="relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            My <span className="text-violet-400">Projects</span>
          </h2>

          <p className="text-gray-400 mt-4 max-w-xl mx-auto">
            A collection of real-world applications I've designed, developed and
            deployed using modern web technologies.
          </p>
        </div>

        <div className="max-w-7xl mx-auto px-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.4 }}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-xl"
            >
              {/* Image Section */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-56 object-cover transition-transform duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#070816] via-transparent to-transparent"></div>

                {/* Floating Action Buttons */}
                <div className="absolute top-4 right-4 flex gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-black/50 backdrop-blur-md border border-white/10 flex items-center justify-center text-white hover:text-violet-400 hover:border-violet-400 transition-all"
                  >
                    <FaGithub />
                  </a>

                  <a
                    href={project.view}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full cursor-pointer bg-black/50 backdrop-blur-md border border-white/10 flex items-center z-1 justify-center text-white hover:text-cyan-400 hover:border-cyan-400 transition-all"
                  >
                    <FiArrowUpRight />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-3">
                  {project.title}
                </h3>

                <p className="text-gray-400 text-sm leading-relaxed mb-5">
                  {project.desc}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((item, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 text-xs rounded-full border border-violet-500/20 bg-violet-500/10 text-violet-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Hover Glow */}
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-cyan-500/20 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition duration-500"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
