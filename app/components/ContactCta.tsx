"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function ContactCta() {
  return (
    <section
      className="py-20"
      style={{
        backgroundColor: "#f2f6fa",
        backgroundImage:
          "radial-gradient(circle, rgba(148,163,184,0.2) 1px, transparent 1px)",
        backgroundSize: "24px 24px",
      }}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-4xl border border-slate-200/80 bg-white px-6 py-10 shadow-[0_18px_50px_rgba(148,163,184,0.14)] sm:px-10 sm:py-12">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <motion.div
              initial={{ opacity: 0, x: -48, scale: 0.98 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.65, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.35 }}
              className="max-w-3xl"
            >
              <h2 className="text-3xl font-extrabold tracking-tight text-[#002D62] sm:text-4xl">
                Ready to Architect Your ERP Roadmap?
              </h2>
              <p className="mt-4 text-base leading-8 text-slate-600 sm:text-lg">
                Whether you&rsquo;re looking to optimize Business Central or
                planning a cross-platform transition to SAP or Oracle,
                let&rsquo;s discuss a strategy that fits your scale.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 48, scale: 0.96 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.65, ease: "easeOut", delay: 0.08 }}
              viewport={{ once: true, amount: 0.35 }}
              className="shrink-0"
            >
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-[#0b2a5d] px-8 py-4 text-sm font-semibold text-white shadow-[0_14px_36px_rgba(11,42,93,0.22)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#0f3a7d]"
              >
                Book a Diagnostic Call -&gt;
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
