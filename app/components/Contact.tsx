"use client";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-20 bg-linear-to-br from-white to-indigo-50 dark:from-gray-900 dark:to-indigo-900/20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold bg-linear-to-r from-gray-900 to-indigo-900 dark:from-white dark:to-indigo-100 bg-clip-text text-transparent mb-4">
            Let&apos;s Architect Your Digital Roadmap
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Ready to transform your ERP landscape? Schedule a discovery call to
            discuss your business challenges and explore platform-agnostic
            solutions.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-8 rounded-3xl shadow-xl border border-white/20 dark:border-gray-700/20"
          >
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center">
              <div className="w-10 h-10 bg-linear-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mr-3">
                <span className="text-white font-bold">✓</span>
              </div>
              Why Partner With Me?
            </h3>
            <ul className="space-y-4 text-gray-600 dark:text-gray-300 mb-8">
              <li className="flex items-start">
                <div className="w-6 h-6 bg-blue-100 dark:bg-blue-900/50 rounded-full flex items-center justify-center mr-3 mt-0.5 shrink-0">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                </div>
                <span>
                  Platform-agnostic expertise across Microsoft, SAP, and Oracle
                  ecosystems
                </span>
              </li>
              <li className="flex items-start">
                <div className="w-6 h-6 bg-green-100 dark:bg-green-900/50 rounded-full flex items-center justify-center mr-3 mt-0.5 shrink-0">
                  <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                </div>
                <span>
                  Proven ROI through business process re-engineering and
                  optimization
                </span>
              </li>
              <li className="flex items-start">
                <div className="w-6 h-6 bg-purple-100 dark:bg-purple-900/50 rounded-full flex items-center justify-center mr-3 mt-0.5 shrink-0">
                  <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                </div>
                <span>
                  End-to-end implementation from gap analysis to go-live support
                </span>
              </li>
              <li className="flex items-start">
                <div className="w-6 h-6 bg-orange-100 dark:bg-orange-900/50 rounded-full flex items-center justify-center mr-3 mt-0.5 shrink-0">
                  <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
                </div>
                <span>
                  Data-driven insights with Power BI and Azure cloud integration
                </span>
              </li>
            </ul>
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex w-full items-center justify-center bg-linear-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Open Dedicated Contact Page
            </motion.a>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-8 rounded-3xl shadow-xl border border-white/20 dark:border-gray-700/20"
          >
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center">
              <div className="w-10 h-10 bg-linear-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mr-3">
                <span className="text-white font-bold">📅</span>
              </div>
              Schedule Consultation
            </h3>
            <div className="mb-6">
              <div className="rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-600 shadow-lg">
                <iframe
                  title="Calendly Scheduling"
                  src="https://calendly.com/induwarathisaru2002/30min?embed_domain=localhost&embed_type=Inline"
                  width="100%"
                  height="500"
                  style={{ border: 0 }}
                  className="w-full"
                ></iframe>
              </div>
            </div>
            <p className="text-gray-600 dark:text-gray-300 text-center">
              If you prefer, use the button below to open the booking page in a
              new tab.
            </p>
            <div className="text-center mt-4">
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-linear-to-r from-blue-600 to-indigo-600 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Open Full Contact Experience
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
