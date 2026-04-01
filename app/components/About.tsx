"use client";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="experience"
      className="py-20 bg-gradient-to-br from-white to-blue-50 dark:from-gray-900 dark:to-blue-900/20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <h2 className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-blue-900 dark:from-white dark:to-blue-100 bg-clip-text text-transparent mb-6">
              Intersecting Business Strategy with Enterprise Technology
            </h2>
            <div className="space-y-6">
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                I am a Functional Consultant specializing in the architecture
                and deployment of{" "}
                <span className="font-semibold text-blue-600 dark:text-blue-400">
                  Microsoft Dynamics 365 Business Central
                </span>{" "}
                ecosystems. My approach goes beyond software implementation; I
                focus on{" "}
                <span className="font-semibold text-indigo-600 dark:text-indigo-400">
                  Business Process Re-engineering (BPR)
                </span>{" "}
                to ensure technology serves the bottom line.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                With a deep-rooted expertise in the Microsoft stack—including{" "}
                <span className="font-semibold text-blue-600 dark:text-blue-400">
                  Power BI, Power Apps, and Microsoft Fabric
                </span>
                —I transform fragmented data into actionable corporate
                intelligence. As the enterprise landscape evolves, I am
                currently expanding my architectural footprint into{" "}
                <span className="font-semibold text-green-600 dark:text-green-400">
                  SAP S/4HANA, Oracle Cloud, and IFS
                </span>
                , providing clients with platform-agnostic insights that drive
                global scalability and operational excellence.
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-8 rounded-3xl shadow-xl border border-white/20 dark:border-gray-700/20"
          >
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center mr-3">
                <span className="text-white font-bold text-sm">✓</span>
              </div>
              Skills & Expertise
            </h3>
            <ul className="space-y-4 text-gray-600 dark:text-gray-300">
              <li className="flex items-start">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <div>
                  <strong className="text-gray-900 dark:text-white">
                    Primary ERP:
                  </strong>{" "}
                  <span className="text-blue-600 dark:text-blue-400">
                    Dynamics 365 Business Central (Certified)
                  </span>
                </div>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <div>
                  <strong className="text-gray-900 dark:text-white">
                    Data Stack:
                  </strong>{" "}
                  <span className="text-green-600 dark:text-green-400">
                    Power BI, Power Automate, Microsoft Fabric, Azure SQL
                  </span>
                </div>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <div>
                  <strong className="text-gray-900 dark:text-white">
                    Expansion Areas:
                  </strong>{" "}
                  <span className="text-purple-600 dark:text-purple-400">
                    SAP (FICO/MM), Oracle NetSuite, IFS Cloud
                  </span>
                </div>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <div>
                  <strong className="text-gray-900 dark:text-white">
                    Methodologies:
                  </strong>{" "}
                  <span className="text-orange-600 dark:text-orange-400">
                    Agile, Waterfall, Sure Step
                  </span>
                </div>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <div>
                  <strong className="text-gray-900 dark:text-white">
                    Languages:
                  </strong>{" "}
                  <span className="text-red-600 dark:text-red-400">
                    English, Sinhala
                  </span>
                </div>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
