"use client";

import { motion } from "framer-motion";

export default function Projects() {
  return (
    <main className="min-h-screen bg-black text-white p-10 pt-32">
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-5xl font-bold text-center mb-12"
      >
        My Projects
      </motion.h1>

      <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="border border-gray-700 p-6 rounded-xl bg-zinc-900"
        >
          <h2 className="text-2xl font-semibold">
            Portfolio Website
          </h2>

          <p className="text-gray-400 mt-2">
            Personal portfolio built with Next.js and Tailwind CSS.
          </p>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          className="border border-gray-700 p-6 rounded-xl bg-zinc-900"
        >
          <h2 className="text-2xl font-semibold">
            Future Project
          </h2>

          <p className="text-gray-400 mt-2">
            Add your next project here.
          </p>
        </motion.div>
      </div>
    </main>
  );
}