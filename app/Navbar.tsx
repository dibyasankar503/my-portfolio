"use client";

import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 w-full z-50 bg-black/70 backdrop-blur-md border-b border-gray-800"
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
          Dibyasankar Das
        </h1>

        <div className="flex gap-6">
          <a href="/" className="hover:text-cyan-400 transition">
            Home
          </a>

          <a href="/about" className="hover:text-cyan-400 transition">
            About
          </a>

          <a href="/projects" className="hover:text-cyan-400 transition">
            Projects
          </a>

          <a href="/contact" className="hover:text-cyan-400 transition">
            Contact
          </a>
        </div>
      </div>
    </motion.nav>
  );
}