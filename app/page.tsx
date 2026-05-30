"use client";

import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-black text-white flex flex-col justify-center items-center text-center px-6 pt-20 overflow-hidden">
      
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-purple-500 rounded-full blur-3xl opacity-20"></div>
      </div>

      <motion.h1
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent"
      >
        Dibyasankar Das
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="text-2xl mt-4 text-cyan-400 font-medium"
      >
        Computer Science Student
      </motion.p>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="mt-6 max-w-2xl text-gray-500 text-lg"
      >
        Passionate about Web Development, Software Engineering, and Building
        Modern Applications.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="flex gap-4 mt-8"
      >
        <motion.button
          onClick={() => (window.location.href = "/projects")}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="px-6 py-3 bg-white text-black rounded-lg font-semibold"
        >
          View Projects
        </motion.button>

        <motion.button
          onClick={() => (window.location.href = "/contact")}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="px-6 py-3 border border-white rounded-lg"
        >
          Contact Me
        </motion.button>
      </motion.div>

      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
        className="mt-20 text-cyan-400 text-lg font-semibold"
      >
        ↓ Scroll Down
      </motion.div>

    </main>
  );
}