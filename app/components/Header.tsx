"use client";
import { motion } from "framer-motion";

export default function Header() {
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-md z-50 border-b border-gray-200 dark:border-gray-700"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="text-2xl font-bold text-gray-900 dark:text-white">
            Ravindu Nimesh
          </div>
          <nav className="hidden md:flex space-x-8">
            <a
              href="#experience"
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600"
            >
              Experience
            </a>
            <a
              href="#projects"
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600"
            >
              Projects
            </a>
            <a
              href="#tech-stack"
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600"
            >
              Tech Stack
            </a>
          </nav>
          <div className="flex items-center space-x-4">
            <button className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700">
              Let&apos;s Talk
            </button>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
