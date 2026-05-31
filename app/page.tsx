"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-black text-white flex flex-col justify-center items-center text-center px-6 pt-24 overflow-hidden">

      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-purple-500 rounded-full blur-3xl opacity-20"></div>
      </div>

      {/* Profile Photo */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="mb-8"
      >
        <Image
          src="/profile.jpg"
          alt="Dibyasankar Das"
          width={180}
          height={180}
          className="rounded-full border-4 border-cyan-400 shadow-[0_0_40px_rgba(34,211,238,0.6)]"
        />
      </motion.div>

      {/* Welcome */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="uppercase tracking-[0.3em] text-sm text-cyan-400 mb-4"
      >
        Welcome To My Portfolio
      </motion.p>

      {/* Name */}
      <motion.h1
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent"
      >
        Dibyasankar Das
      </motion.h1>

      {/* Location */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-gray-500 mt-3"
      >
        Odisha, India
      </motion.p>

      {/* Highlights */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="flex gap-3 mt-4 flex-wrap justify-center"
      >
        <span className="px-3 py-1 bg-zinc-800 rounded-full text-sm">
          🚀 Fast Learner
        </span>

        <span className="px-3 py-1 bg-zinc-800 rounded-full text-sm">
          💡 Problem Solver
        </span>

        <span className="px-3 py-1 bg-zinc-800 rounded-full text-sm">
          🔥 Open Source
        </span>
      </motion.div>

      {/* Role */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="text-2xl md:text-3xl mt-6 text-cyan-400 font-medium"
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
        React, Next.js, Flask and modern technologies.
      </motion.p>

      {/* Buttons */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="flex gap-4 mt-8 flex-wrap justify-center"
      >
        <button
          onClick={() => (window.location.href = "/projects")}
          className="px-6 py-3 bg-cyan-400 text-black rounded-lg font-semibold hover:scale-105 transition"
        >
          View Projects
        </button>

        <button
          onClick={() => (window.location.href = "/contact")}
          className="px-6 py-3 border border-cyan-400 rounded-lg hover:scale-105 transition"
        >
          Contact Me
        </button>
      </motion.div>

      {/* Skills */}
      <div className="flex gap-4 mt-10 flex-wrap justify-center">
        <span className="px-4 py-2 bg-cyan-500/20 rounded-full">⚛ React</span>
        <span className="px-4 py-2 bg-cyan-500/20 rounded-full">▲ Next.js</span>
        <span className="px-4 py-2 bg-cyan-500/20 rounded-full">🐍 Python</span>
        <span className="px-4 py-2 bg-cyan-500/20 rounded-full">🗄 SQL</span>
        <span className="px-4 py-2 bg-cyan-500/20 rounded-full">Flask</span>
      </div>

      {/* Stats */}
      <div className="mt-12 flex gap-10 text-center flex-wrap justify-center">
        <div>
          <h3 className="text-2xl font-bold text-cyan-400">2026</h3>
          <p className="text-gray-500">Started Journey</p>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-cyan-400">5+</h3>
          <p className="text-gray-500">Technologies</p>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-cyan-400">2+</h3>
          <p className="text-gray-500">Projects</p>
        </div>
      </div>

      {/* Social Links */}
      <div className="mt-10 flex gap-4 flex-wrap justify-center">
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
      </div>

      {/* Scroll */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="mt-16 text-cyan-400 text-lg font-semibold"
      >
        ↓ Scroll Down
      </motion.div>
    </main>
  );
}