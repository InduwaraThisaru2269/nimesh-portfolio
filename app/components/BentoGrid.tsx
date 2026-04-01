"use client";

import { motion } from "framer-motion";

const erpSystems = [
  {
    name: "Microsoft Dynamics 365 Business Central",
    description: "Core strength in end-to-end implementations",
    highlighted: true,
  },
  {
    name: "SAP S/4HANA",
    description: "Strategic implementation focus",
    highlighted: false,
  },
  {
    name: "Oracle Cloud ERP",
    description: "Enterprise scalability solutions",
    highlighted: false,
  },
  {
    name: "IFS",
    description: "Industry-specific optimizations",
    highlighted: false,
  },
];

export default function BentoGrid() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-800 dark:to-blue-900/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-center bg-gradient-to-r from-gray-900 to-blue-900 dark:from-white dark:to-blue-100 bg-clip-text text-transparent mb-12"
        >
          ERP Ecosystem Expertise
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {erpSystems.map((system, index) => (
            <motion.div
              key={system.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`p-6 rounded-3xl shadow-xl backdrop-blur-sm border border-white/20 dark:border-gray-700/20 ${
                system.highlighted
                  ? "bg-gradient-to-br from-blue-600 to-indigo-600 text-white shadow-blue-500/25"
                  : "bg-white/80 dark:bg-gray-800/80 text-gray-900 dark:text-white hover:bg-white/90 dark:hover:bg-gray-800/90"
              } transition-all duration-300 cursor-pointer`}
            >
              <h3 className="text-xl font-semibold mb-2">{system.name}</h3>
              <p
                className={
                  system.highlighted
                    ? "text-blue-100"
                    : "text-gray-600 dark:text-gray-300"
                }
              >
                {system.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
