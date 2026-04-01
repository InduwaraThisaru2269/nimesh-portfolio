"use client";
import { motion } from "framer-motion";
import { BarChart3, Smartphone, Cloud } from "lucide-react";

const tools = [
  {
    icon: BarChart3,
    name: "Power BI",
    description: "Interactive financial dashboards for real-time insights",
    example: "Reduced reporting time by 60% for a $50M manufacturing firm",
  },
  {
    icon: Smartphone,
    name: "Power Apps & Fabric",
    description: "Custom applications for process automation",
    example: "Procurement app reduced manual entry by 40%",
  },
  {
    icon: Cloud,
    name: "Azure Integration",
    description: "Cloud data warehousing and seamless connectivity",
    example: "Unified data lakes for multi-entity consolidation",
  },
];

export default function DataIntelligence() {
  return (
    <section
      id="tech-stack"
      className="py-20 bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-center bg-gradient-to-r from-gray-900 to-blue-900 dark:from-white dark:to-blue-100 bg-clip-text text-transparent mb-12"
        >
          Data Intelligence Suite
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tools.map((tool, index) => (
            <motion.div
              key={tool.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -10, scale: 1.05 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center p-8 rounded-3xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-xl border border-white/20 dark:border-gray-700/20 hover:shadow-2xl transition-all duration-300"
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg"
              >
                <tool.icon className="w-8 h-8 text-white" />
              </motion.div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                {tool.name}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                {tool.description}
              </p>
              <p className="text-sm text-blue-600 dark:text-blue-400 italic font-medium">
                {tool.example}
              </p>
            </motion.div>
          ))}
        </div>
        {/* Modern Power BI embed placeholder */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-16 p-8 bg-gradient-to-br from-gray-100 to-blue-50 dark:from-gray-800 dark:to-blue-900/20 rounded-3xl shadow-2xl border border-white/20 dark:border-gray-700/20 backdrop-blur-sm text-center"
        >
          <div className="flex items-center justify-center mb-4">
            <BarChart3 className="w-8 h-8 text-blue-600 mr-3" />
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
              Interactive Dashboard Preview
            </h3>
          </div>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Experience real-time ERP analytics and business intelligence
          </p>
          <div className="relative h-80 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-700 dark:to-gray-600 rounded-2xl flex items-center justify-center border border-gray-200 dark:border-gray-600">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjZjNmNGY2Ii8+CjxwYXRoIGQ9Ik0xMDAgMTAwTDE1MCAxNTBNMTAwIDEwMEw1MCAxNTBNMTAwIDEwMEwxNTAgNTBNMTAwIDEwMEw1MCA1ME0xMDAgMTAwTDEwMCAxNTBNMTAwIDEwMEwxMDAgNTBNMTAwIDEwMEwxNTAgMTAwTTEwMCAxMDBMNTAgMTAwIiBzdHJva2U9IiM2MzY2ZjEiIHN0cm9rZS13aWR0aD0iMiIvPgo8L3N2Zz4K')] opacity-20"></div>
            <div className="relative z-10 text-center">
              <BarChart3 className="w-16 h-16 text-blue-600 mx-auto mb-4" />
              <span className="text-gray-500 dark:text-gray-400 font-medium">
                Power BI Dashboard Integration
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
