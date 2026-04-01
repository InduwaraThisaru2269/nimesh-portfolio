"use client";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const caseStudies = [
  {
    title: "Global Supply Chain Optimization",
    client: "Mid-Market Manufacturing",
    challenge:
      "Fragmented supply chain data across three legal entities, with reports taking 10 days to consolidate.",
    solution:
      "End-to-end Business Central implementation with automated intercompany postings and Power BI dashboard via Azure Data Factory.",
    results:
      "60% reduction in month-end closing time, 98% inventory accuracy through WMS integration.",
  },
  {
    title: "Financial Consolidation Platform",
    client: "Wholesale Distribution",
    challenge: "Manual tracking leading to inventory accuracy below 75%.",
    solution:
      "Unified chart of accounts and real-time telemetry on stock movements.",
    results: "15% reduction in inventory carrying costs within 6 months.",
  },
];

export default function CaseStudies() {
  return (
    <section
      id="projects"
      className="py-20 bg-gradient-to-br from-gray-50 to-indigo-50 dark:from-gray-800 dark:to-indigo-900/20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-center bg-gradient-to-r from-gray-900 to-blue-900 dark:from-white dark:to-blue-100 bg-clip-text text-transparent mb-12"
        >
          Success Stories
        </motion.h2>
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          className="pb-12"
        >
          {caseStudies.map((study, index) => (
            <SwiperSlide key={index}>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm p-10 rounded-3xl shadow-2xl border border-white/20 dark:border-gray-700/20"
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold text-lg">
                      {index + 1}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                      {study.title}
                    </h3>
                    <p className="text-blue-600 dark:text-blue-400 font-medium">
                      {study.client}
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-2xl border-l-4 border-red-500">
                    <h4 className="font-semibold text-red-800 dark:text-red-300 mb-2">
                      The Challenge
                    </h4>
                    <p className="text-red-700 dark:text-red-200 text-sm leading-relaxed">
                      {study.challenge}
                    </p>
                  </div>
                  <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-2xl border-l-4 border-blue-500">
                    <h4 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
                      The Solution
                    </h4>
                    <p className="text-blue-700 dark:text-blue-200 text-sm leading-relaxed">
                      {study.solution}
                    </p>
                  </div>
                  <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-2xl border-l-4 border-green-500">
                    <h4 className="font-semibold text-green-800 dark:text-green-300 mb-2">
                      The Results
                    </h4>
                    <p className="text-green-700 dark:text-green-200 text-sm leading-relaxed">
                      {study.results}
                    </p>
                  </div>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
