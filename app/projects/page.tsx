"use client";

import { motion } from "framer-motion";

export default function Projects() {
  return (
    <main className="min-h-screen bg-black text-white p-10 pt-32">
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-5xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent"
      >
        My Projects
      </motion.h1>

      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover={{
            scale: 1.05,
            boxShadow: "0px 0px 25px rgba(34,211,238,0.3)",
          }}
          className="border border-gray-700 p-6 rounded-2xl bg-zinc-900"
        >
          <h2 className="text-2xl font-semibold">
            Portfolio Website
          </h2>

          <p className="text-gray-400 mt-3">
            Personal portfolio built using Next.js, Tailwind CSS and Framer Motion.
          </p>

          <p className="text-sm text-gray-500 mt-3">
            Status: In Development
          </p>

          <div className="flex gap-2 mt-4 flex-wrap">
            <span className="px-3 py-1 bg-cyan-500/20 rounded-full text-sm">
              Next.js
            </span>

            <span className="px-3 py-1 bg-cyan-500/20 rounded-full text-sm">
              Tailwind
            </span>

            <span className="px-3 py-1 bg-cyan-500/20 rounded-full text-sm">
              Framer Motion
            </span>
          </div>

          <div className="flex gap-3 mt-6">
            <button className="px-4 py-2 bg-cyan-500 text-black rounded-lg font-semibold hover:scale-105 transition">
              Live Demo
            </button>

            <button className="px-4 py-2 border border-cyan-500 rounded-lg hover:scale-105 transition">
              GitHub
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover={{
            scale: 1.05,
            boxShadow: "0px 0px 25px rgba(168,85,247,0.3)",
          }}
          className="border border-gray-700 p-6 rounded-2xl bg-zinc-900"
        >
          <h2 className="text-2xl font-semibold">
            Custom T-Shirt Design Platform
          </h2>

          <p className="text-gray-400 mt-3">
            Online platform where users can upload custom designs and order personalized T-shirts.
          </p>

          <p className="text-sm text-gray-500 mt-3">
            Status: In Development
          </p>

          <div className="flex gap-2 mt-4 flex-wrap">
            <span className="px-3 py-1 bg-purple-500/20 rounded-full text-sm">
              Python
            </span>

            <span className="px-3 py-1 bg-purple-500/20 rounded-full text-sm">
              Flask
            </span>

            <span className="px-3 py-1 bg-purple-500/20 rounded-full text-sm">
              MySQL
            </span>
          </div>

          <div className="flex gap-3 mt-6">
            <button className="px-4 py-2 bg-purple-500 text-white rounded-lg font-semibold hover:scale-105 transition">
              Live Demo
            </button>

            <button className="px-4 py-2 border border-purple-500 rounded-lg hover:scale-105 transition">
              GitHub
            </button>
          </div>
        </motion.div>

      </div>
    </main>
  );
}