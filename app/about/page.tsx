"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col justify-center items-center px-6 pt-20">
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-5xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent"
      >
        About Me
      </motion.h1>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="max-w-4xl bg-zinc-900 border border-gray-700 rounded-2xl p-8"
      >
        <p className="text-lg text-gray-300 leading-8">
          Hello, I'm Dibyasankar Das, a Full Stack Developer and Computer
          Science student passionate about building modern web applications,
          solving real-world problems, and continuously learning new
          technologies.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <span className="px-4 py-2 bg-cyan-500/20 rounded-full">
            Python
          </span>

          <span className="px-4 py-2 bg-cyan-500/20 rounded-full">
            Flask
          </span>

          <span className="px-4 py-2 bg-cyan-500/20 rounded-full">
            React
          </span>

          <span className="px-4 py-2 bg-cyan-500/20 rounded-full">
            Next.js
          </span>

          <span className="px-4 py-2 bg-cyan-500/20 rounded-full">
            MySQL
          </span>

          <span className="px-4 py-2 bg-cyan-500/20 rounded-full">
            Git
          </span>
        </div>

        <div className="mt-10 grid md:grid-cols-3 gap-4">

          <div className="bg-zinc-800 p-4 rounded-xl">
            <h3 className="text-cyan-400 font-bold">Frontend</h3>
            <p className="text-gray-400 mt-2">
              React, Next.js, Tailwind CSS
            </p>
          </div>

          <div className="bg-zinc-800 p-4 rounded-xl">
            <h3 className="text-cyan-400 font-bold">Backend</h3>
            <p className="text-gray-400 mt-2">
              Python, Flask
            </p>
          </div>

          <div className="bg-zinc-800 p-4 rounded-xl">
            <h3 className="text-cyan-400 font-bold">Database</h3>
            <p className="text-gray-400 mt-2">
              MySQL
            </p>
          </div>

        </div>

      </motion.div>
    </main>
  );
}