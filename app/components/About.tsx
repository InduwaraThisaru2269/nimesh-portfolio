"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <section
      id="about"
      className="py-24"
      style={{
        backgroundColor: "#f8fafc",
        backgroundImage:
          "radial-gradient(circle, rgba(148,163,184,0.2) 1px, transparent 1px)",
        backgroundSize: "24px 24px",
      }}
    >
      <div id="experience" className="relative -top-24" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(20rem,0.85fr)] lg:items-start">
          <motion.div
            initial={{ opacity: 0, x: -36 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <p className="text-[0.72rem] font-bold uppercase tracking-[0.32em] text-cyan-600">
              About Me
            </p>
            <h2 className="mt-4 text-4xl font-extrabold tracking-tight text-[#002D62] md:text-6xl">
              Part Strategist, Part Data Architect, Full-Time Problem Solver.
            </h2>

            <div className="mt-8 space-y-7">
              <p className="text-lg leading-8 text-slate-600">
                I live at the intersection of business logic and clean code.
                While some people see a messy spreadsheet and see a headache, I
                see the blueprint for a high-performing enterprise.
              </p>

              <p className="text-lg leading-8 text-slate-600">
                My mission is simple: To make ERP systems feel less like
                &ldquo;software&rdquo; and more like a competitive advantage.
                With a deep-rooted obsession for Microsoft Dynamics 365 Business
                Central, I&apos;ve spent years helping companies stop fighting
                their data and start using it. Whether it&apos;s building
                automated workflows in Power Automate or designing
                &ldquo;CFO-friendly&rdquo; dashboards in Power BI, I&apos;m all
                about eliminating the manual so you can focus on the meaningful.
              </p>

              <div className="rounded-[30px] border border-slate-200 bg-white/90 p-6 shadow-[0_18px_40px_rgba(148,163,184,0.14)]">
                <p className="text-[0.68rem] font-bold uppercase tracking-[0.28em] text-slate-500">
                  The Evolution
                </p>
                <p className="mt-4 text-lg leading-8 text-slate-600">
                  I&apos;m a big believer that a great consultant never stops
                  being a student. That&apos;s why, when I&apos;m not deep in
                  the Microsoft stack, you&apos;ll find me architecting my way
                  into the worlds of SAP, Oracle, and IFS. The best solutions
                  aren&apos;t found in a single box, they&apos;re found in the
                  right strategy.
                </p>
              </div>

              <div className="rounded-[30px] border border-[#d7e5fb] bg-[#f5f9ff] p-6 shadow-[0_18px_40px_rgba(11,42,93,0.08)]">
                <p className="text-[0.68rem] font-bold uppercase tracking-[0.28em] text-[#3a6fba]">
                  Outside the Sandbox
                </p>
                <p className="mt-4 text-lg leading-8 text-slate-600">
                  When the laptop closes, I&apos;m usually chasing the perfect
                  espresso shot or trying to explain to my family what an ERP
                  actually is. If you&apos;re looking for a partner who takes
                  your business seriously, but doesn&apos;t mind a well-timed
                  joke during a migration meeting, let&apos;s talk.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 36 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.12 }}
            viewport={{ once: true, amount: 0.2 }}
            className="space-y-6"
          >
            <div className="overflow-hidden rounded-[34px] border border-slate-200 bg-white p-4 shadow-[0_20px_50px_rgba(148,163,184,0.16)]">
              <div className="relative aspect-4/5 overflow-hidden rounded-[28px] bg-slate-100">
                <Image
                  src="/Me.jpeg"
                  alt="Ravindu Nimesh portrait"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 30rem, 100vw"
                />
              </div>
            </div>

            <div className="rounded-[30px] border border-slate-200 bg-white/95 p-6 shadow-[0_18px_40px_rgba(148,163,184,0.12)]">
              <p className="text-[0.68rem] font-bold uppercase tracking-[0.28em] text-cyan-600">
                Core Focus
              </p>
              <ul className="mt-5 space-y-4 text-slate-600">
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-cyan-500" />
                  <span>
                    Microsoft Dynamics 365 Business Central architecture and
                    transformation delivery.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-blue-500" />
                  <span>
                    Power BI and Power Automate systems that reduce manual work
                    and sharpen decision-making.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-indigo-500" />
                  <span>
                    Platform-aware strategic thinking across Microsoft, SAP,
                    Oracle, and IFS ecosystems.
                  </span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
