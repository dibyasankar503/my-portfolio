"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col justify-center items-center px-6 pt-20">

      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-5xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent"
      >
        Contact Me
      </motion.h1>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="bg-zinc-900 border border-gray-700 rounded-2xl p-8 w-full max-w-xl"
      >
        <div className="space-y-4">

          <p className="text-lg">
            📧 Email: dibyasankar503@gmail.com
          </p>

          <p className="text-lg">
            💻 GitHub: github.com/dibyasankar503
          </p>

          <p className="text-lg">
            🔗 LinkedIn: linkedin.com/in/dibyasankar503
          </p>

        </div>

        <div className="flex gap-4 mt-8 flex-wrap">

          <button
            onClick={() =>
              window.open(
                "mailto:dibyasankar503@gmail.com?subject=Hiring Inquiry"
              )
            }
            className="px-6 py-3 bg-cyan-500 text-black rounded-lg font-semibold hover:scale-105 transition"
          >
            Hire Me
          </button>

          <button
            onClick={() =>
              window.open("https://github.com/dibyasankar503")
            }
            className="px-6 py-3 border border-cyan-500 rounded-lg hover:scale-105 transition"
          >
            GitHub
          </button>

        </div>
      </motion.div>

    </main>
  );
}