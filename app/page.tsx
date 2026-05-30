"use client";

import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-black text-white flex flex-col justify-center items-center text-center px-6 pt-20 overflow-hidden">

      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-purple-500 rounded-full blur-3xl opacity-20"></div>
      </div>

      {/* Welcome Text */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="uppercase tracking-[0.3em] text-sm text-cyan-400 mb-4"
      >
        Welcome To My Portfolio
      </motion.p>

      {/* Name */}
      <motion.h1
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent"
      >
        Dibyasankar Das
      </motion.h1>

      {/* Role */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="text-2xl md:text-3xl mt-4 text-cyan-400 font-medium"
      >
        Full Stack Developer | Python | Next.js
      </motion.p>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="mt-6 max-w-3xl text-gray-400 text-lg leading-relaxed"
      >
        Passionate about building modern web applications, solving real-world
        problems, and creating beautiful digital experiences using Python,
        React, Next.js, Flask, and modern web technologies.
      </motion.p>

      {/* Buttons */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="flex gap-4 mt-8 flex-wrap justify-center"
      >
        <motion.button
          onClick={() => (window.location.href = "/projects")}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="px-6 py-3 bg-cyan-400 text-black rounded-lg font-semibold"
        >
          View Projects
        </motion.button>

        <motion.button
          onClick={() => (window.location.href = "/contact")}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="px-6 py-3 border border-cyan-400 rounded-lg"
        >
          Contact Me
        </motion.button>
      </motion.div>

      {/* Skills */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="flex gap-4 mt-8 flex-wrap justify-center text-gray-300"
      >
        <span className="px-4 py-2 bg-cyan-500/20 rounded-full">
          ⚛ React
        </span>

        <span className="px-4 py-2 bg-cyan-500/20 rounded-full">
          ▲ Next.js
        </span>

        <span className="px-4 py-2 bg-cyan-500/20 rounded-full">
          🐍 Python
        </span>

        <span className="px-4 py-2 bg-cyan-500/20 rounded-full">
          🗄 SQL
        </span>

        <span className="px-4 py-2 bg-cyan-500/20 rounded-full">
          Flask
        </span>
      </motion.div>

      {/* Stats */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="flex gap-10 mt-10 text-center"
      >
        <div>
          <h2 className="text-3xl font-bold text-cyan-400">5+</h2>
          <p className="text-gray-500">Technologies</p>
        </div>

        <div>
          <h2 className="text-3xl font-bold text-cyan-400">2+</h2>
          <p className="text-gray-500">Projects</p>
        </div>

        <div>
          <h2 className="text-3xl font-bold text-cyan-400">100%</h2>
          <p className="text-gray-500">Learning</p>
        </div>
      </motion.div>
      <motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 2 }}
  className="mt-12 flex gap-4 flex-wrap justify-center"
>
  <a
    href="https://github.com/dibyasankar503"
    target="_blank"
    className="px-5 py-2 border border-gray-600 rounded-lg hover:border-cyan-400 transition"
  >
    GitHub
  </a>

  <a
    href="https://linkedin.com/in/dibyasankar503"
    target="_blank"
    className="px-5 py-2 border border-gray-600 rounded-lg hover:border-cyan-400 transition"
  >
    LinkedIn
  </a>

  <a
    href="mailto:dibyasankar503@gmail.com"
    className="px-5 py-2 border border-gray-600 rounded-lg hover:border-cyan-400 transition"
  >
    Email
  </a>
</motion.div>

      {/* Scroll */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
        className="mt-16 text-cyan-400 text-lg font-semibold"
      >
        ↓ Scroll Down
      </motion.div>

    </main>
  );
}