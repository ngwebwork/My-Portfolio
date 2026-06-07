import { motion } from "framer-motion";
import { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData(e.target);

    try {
      const response = await fetch(
        "https://formspree.io/f/xzdqdeal",
        {
          method: "POST",
          body: formData,
          headers: {
            Accept: "application/json",
          },
        }
      );

      if (response.ok) {
        setStatus("success");
        e.target.reset();
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus(err, "error");
    }
  }

  return (
    <section
      id="contact"
      className="w-full py-24 bg-[#070816] text-white relative overflow-hidden"
    >
      {/* background glow */}
      <div className="absolute w-[100] h-[100] bg-cyan-500/20 blur-3xl rounded-full top-10 left-10"></div>
      <div className="absolute w-[100] h-[100] bg-violet-600/20 blur-3xl rounded-full bottom-10 right-10"></div>

      <div className="text-center mb-16 relative z-10">
        <h2 className="text-4xl font-bold">
          Contact <span className="text-violet-400">Me</span>
        </h2>
        <p className="text-gray-400 mt-3">
          Let’s build something amazing together
        </p>
      </div>

      <div className="max-w-3xl mx-auto px-6 relative z-10">
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-6 bg-white/5 border border-white/10 backdrop-blur-xl p-8 rounded-2xl shadow-xl"
        >
          <input
            type="text"
            name="name"
            required
            placeholder="Your Name"
            className="w-full p-3 rounded-xl bg-black/30 border border-white/10 outline-none focus:border-cyan-400"
          />

          <input
            type="email"
            name="email"
            required
            placeholder="Your Email"
            className="w-full p-3 rounded-xl bg-black/30 border border-white/10 outline-none focus:border-cyan-400"
          />

          <textarea
            rows="5"
            name="message"
            required
            placeholder="Your Message..."
            className="w-full p-3 rounded-xl bg-black/30 border border-white/10 outline-none focus:border-cyan-400"
          />

          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-gradient-to-r from-violet-600 to-cyan-500 font-semibold hover:scale-[1.02] transition"
          >
            Send Message
          </button>

          {status === "success" && (
            <p className="text-green-400 text-center">
              ✅ Message sent successfully!
            </p>
          )}

          {status === "error" && (
            <p className="text-red-400 text-center">
              ❌ Something went wrong. Please try again.
            </p>
          )}
        </motion.form>

        <div className="text-center mt-10 text-gray-400 text-sm">
          Or reach me directly: <br />
          📧 websitedeveloperng1@gmail.com
        </div>
      </div>
    </section>
  );
}