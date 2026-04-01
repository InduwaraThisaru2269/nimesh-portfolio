"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const CARD_BASE =
  "rounded-[28px] border border-slate-200/80 bg-white shadow-[0_14px_40px_rgba(148,163,184,0.16)] transition-all duration-300";

function Badge({
  label,
  color,
}: {
  readonly label: string;
  readonly color: "cyan" | "blue" | "indigo";
}) {
  const styles = {
    cyan: "border-cyan-200 bg-cyan-50 text-cyan-700",
    blue: "border-blue-200 bg-blue-50 text-blue-700",
    indigo: "border-indigo-200 bg-indigo-50 text-indigo-700",
  };
  return (
    <span
      className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold ${styles[color]}`}
    >
      {label}
    </span>
  );
}

export default function BentoGrid() {
  return (
    <section
      id="tech-stack"
      className="pt-10 pb-20"
      style={{
        backgroundColor: "#ffffff",
        backgroundImage:
          "radial-gradient(circle, #d1d5db 1px, transparent 1px)",
        backgroundSize: "24px 24px",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 max-w-3xl"
        >
          <p className="text-[0.72rem] font-bold uppercase tracking-[0.32em] text-cyan-600">
            Tech Expertise
          </p>
          <h2 className="text-4xl md:text-6xl font-extrabold text-[#002D62]">
            Core Competencies & Technical Ecosystem
          </h2>
          <p className="mt-4 text-base md:text-lg text-slate-600">
            ridging operational workflows with advanced data architecture across
            the Microsoft Stack and Global ERP platforms.
          </p>
        </motion.div>

        {/* Bento grid */}
        <div className="flex flex-col gap-5">
          {/* Top row: Primary ERP (tall left) + right column stack */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
            {/* ── Card 1: Primary ERP ── */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.6 }}
              className={`${CARD_BASE} lg:col-span-5 p-8 flex flex-col min-h-136`}
            >
              {/* Logo area */}
              <div className="flex-1 flex items-center justify-center py-6">
                <Image
                  src="/BCLogo.png"
                  alt="Dynamics 365 Business Central"
                  width={180}
                  height={180}
                  className="object-contain"
                />
              </div>
              {/* Content */}
              <div>
                <p className="text-[0.68rem] font-bold uppercase tracking-[0.26em] text-cyan-500">
                  Primary ERP Platform
                </p>
                <h3 className="mt-3 text-2xl md:text-[1.65rem] font-semibold tracking-tight text-slate-900 leading-snug">
                  Microsoft Dynamics 365&nbsp;Business Central
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  End-to-end implementation, functional auditing, and process
                  optimization for mid-market and enterprise.
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {["AppSource", "AL Development"].map((b) => (
                    <Badge key={b} label={b} color="cyan" />
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right column: Data Intelligence + Automation stacked */}
            <div className="lg:col-span-7 flex flex-col gap-5">
              {/* ── Card 2: Data Intelligence ── */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className={`${CARD_BASE} p-8 flex-1`}
              >
                <div className="flex items-center gap-3">
                  <Image
                    src="/PwerBILogo.png"
                    alt="Power BI"
                    width={36}
                    height={36}
                    className="object-contain"
                  />
                  <Image
                    src="/FabricLogo.png"
                    alt="Microsoft Fabric"
                    width={36}
                    height={36}
                    className="object-contain"
                  />
                </div>
                <p className="mt-5 text-[0.68rem] font-bold uppercase tracking-[0.26em] text-blue-500">
                  Data Intelligence
                </p>
                <h3 className="mt-2 text-xl font-semibold tracking-tight text-slate-900">
                  Power BI &amp; Microsoft Fabric
                </h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">
                  Engineering &ldquo;Single Source of Truth&rdquo; dashboards
                  and unified data lakes for real-time executive visibility.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {["DAX", "SQL"].map((b) => (
                    <Badge key={b} label={b} color="blue" />
                  ))}
                </div>
              </motion.div>

              {/* ── Card 3: Automation ── */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className={`${CARD_BASE} p-8 flex-1`}
              >
                <div className="flex items-center gap-3">
                  <Image
                    src="/PowerAppsLogo.png"
                    alt="Power Apps"
                    width={36}
                    height={36}
                    className="object-contain"
                  />
                  <Image
                    src="/AzureLogo.png"
                    alt="Azure"
                    width={36}
                    height={36}
                    className="object-contain"
                  />
                </div>
                <p className="mt-5 text-[0.68rem] font-bold uppercase tracking-[0.26em] text-indigo-500">
                  Automation
                </p>
                <h3 className="mt-2 text-xl font-semibold tracking-tight text-slate-900">
                  Power Platform &amp; Azure
                </h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">
                  Custom Power Apps for warehouse/field logic and Power Automate
                  for cross-departmental workflow efficiency.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {["Power Automate", "Azure Logic Apps"].map((b) => (
                    <Badge key={b} label={b} color="indigo" />
                  ))}
                </div>
              </motion.div>
            </div>
          </div>

          {/* ── Card 4: Strategic Expansion (full width, dark) ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -4 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="rounded-[28px] bg-[#0d1f3c] p-8 md:p-10 shadow-[0_14px_40px_rgba(13,31,60,0.3)] transition-all duration-300"
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
              <div className="max-w-xl">
                <span className="inline-block rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-[0.62rem] font-bold uppercase tracking-[0.24em] text-slate-300">
                  Strategic Expansion
                </span>
                <h3 className="mt-4 text-2xl md:text-3xl font-semibold tracking-tight text-white">
                  Enterprise Tier Advisory
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">
                  Architecting transition roadmaps and functional gap analysis
                  for SAP S/4HANA, Oracle Cloud, and IFS.
                </p>
              </div>

              {/* Platform pills */}
              <div className="flex flex-wrap gap-3">
                {["SAP S/4HANA", "Oracle Cloud ERP", "IFS Cloud"].map((p) => (
                  <span
                    key={p}
                    className="rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-slate-400 hover:border-white/20 hover:text-slate-300 transition-colors duration-200"
                  >
                    {p}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
