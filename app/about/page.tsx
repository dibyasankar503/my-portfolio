"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col justify-center items-center px-6 pt-20">
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-5xl font-bold mb-6"
      >
        About Me
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="max-w-3xl text-center text-gray-400 text-lg"
      >
        I am Dibyasankar Das, a Computer Science Student passionate about
        software development, web technologies, problem solving, and building
        modern web applications using React, Next.js, and Python.
      </motion.p>
    </main>
  );
}