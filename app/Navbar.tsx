"use client";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-black/80 backdrop-blur-md text-white p-4 flex justify-center gap-8 border-b border-gray-800">
      <a href="/" className="hover:text-gray-400">
        Home
      </a>

      <a href="/about" className="hover:text-gray-400">
        About
      </a>

      <a href="/projects" className="hover:text-gray-400">
        Projects
      </a>

      <a href="/contact" className="hover:text-gray-400">
        Contact
      </a>
    </nav>
  );
}