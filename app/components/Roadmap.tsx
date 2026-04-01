"use client";
import { motion } from "framer-motion";

export default function Roadmap() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-purple-50 dark:from-gray-800 dark:to-purple-900/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-purple-900 dark:from-white dark:to-purple-100 bg-clip-text text-transparent mb-6"
        >
          Continuous Evolution
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-8 rounded-3xl shadow-xl border border-white/20 dark:border-gray-700/20 mb-12 max-w-4xl mx-auto"
        >
          <blockquote className="text-xl text-gray-600 dark:text-gray-300 italic leading-relaxed">
            &ldquo;The best ERP consultants don&apos;t just know one system;
            they understand the universal logic of business. I am currently
            deep-diving into SAP and Oracle ecosystems to provide truly holistic
            digital transformation strategies.&rdquo;
          </blockquote>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -5, scale: 1.02 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="p-8 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-3xl shadow-xl border border-white/20 dark:border-gray-700/20 hover:shadow-2xl transition-all duration-300"
          >
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-4 mx-auto">
              <span className="text-white font-bold text-xl">1</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
              Current Focus
            </h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Mastering SAP S/4HANA implementations with deep expertise in FICO
              and MM modules
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -5, scale: 1.02 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="p-8 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-3xl shadow-xl border border-white/20 dark:border-gray-700/20 hover:shadow-2xl transition-all duration-300"
          >
            <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-4 mx-auto">
              <span className="text-white font-bold text-xl">2</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
              Next Milestone
            </h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Oracle Cloud ERP certification and hands-on implementation
              experience
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -5, scale: 1.02 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="p-8 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-3xl shadow-xl border border-white/20 dark:border-gray-700/20 hover:shadow-2xl transition-all duration-300"
          >
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-4 mx-auto">
              <span className="text-white font-bold text-xl">3</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
              Future Vision
            </h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Platform-agnostic transformation expert bridging all major ERP
              ecosystems
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
