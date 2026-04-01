"use client";

import { motion } from "framer-motion";
import { caseStudies, futureTag } from "./caseStudiesData";

export default function CaseStudies() {
  return (
    <section
      id="projects"
      className="py-24"
      style={{
        backgroundColor: "#f8fafc",
        backgroundImage:
          "radial-gradient(circle, rgba(148,163,184,0.22) 1px, transparent 1px)",
        backgroundSize: "24px 24px",
      }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.25 }}
          className="mx-auto mb-14 max-w-3xl text-center"
        >
          <p className="text-[0.72rem] font-bold uppercase tracking-[0.32em] text-cyan-600">
            Case Studies
          </p>
          <h2 className="mt-4 text-4xl font-extrabold tracking-tight text-[#002D62] md:text-6xl">
            Transformation stories with measurable operational impact.
          </h2>
          <p className="mt-5 text-base leading-8 text-slate-600 md:text-lg">
            Structured around the business problem, the system design response,
            and the numbers leadership teams actually care about.
          </p>
        </motion.div>

        <div className="space-y-8">
          {caseStudies.map((study, index) => (
            <motion.article
              key={study.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
              viewport={{ once: true, amount: 0.15 }}
              className="rounded-[34px] border border-slate-200/80 bg-white/95 p-6 shadow-[0_22px_60px_rgba(148,163,184,0.16)] sm:p-8 lg:p-10"
            >
              <div>
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full border border-cyan-100 bg-cyan-50 px-4 py-1.5 text-[0.68rem] font-bold uppercase tracking-[0.24em] text-cyan-700">
                    Case Study {study.id}
                  </span>
                  <span className="rounded-full border border-slate-200 bg-slate-50 px-4 py-1.5 text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-slate-500">
                    {study.industry}
                  </span>
                </div>

                <h3 className="mt-5 text-2xl font-semibold tracking-tight text-slate-900 sm:text-[2rem]">
                  {study.title}
                </h3>

                <div className="mt-5 flex flex-wrap gap-2">
                  {study.coreStack.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-[#d7e5fb] bg-[#f3f8ff] px-3 py-1.5 text-xs font-semibold text-[#0b2a5d]"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <div className="mt-8 grid gap-5 xl:grid-cols-3">
                  <div className="rounded-[28px] border border-red-100 bg-red-50/80 p-5">
                    <p className="text-[0.68rem] font-bold uppercase tracking-[0.28em] text-red-700">
                      The Challenge
                    </p>
                    <p className="mt-4 text-sm leading-7 text-slate-700">
                      {study.challenge}
                    </p>
                  </div>

                  <div className="rounded-[28px] border border-blue-100 bg-blue-50/80 p-5 xl:col-span-2">
                    <p className="text-[0.68rem] font-bold uppercase tracking-[0.28em] text-blue-700">
                      The Strategic Solution
                    </p>
                    <ul className="mt-4 space-y-3">
                      {study.actions.map((action) => (
                        <li
                          key={action}
                          className="flex items-start gap-3 text-sm leading-7 text-slate-700"
                        >
                          <span className="mt-2 h-1.5 w-1.5 rounded-full bg-blue-600" />
                          <span>{action}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-6 rounded-[28px] border border-emerald-100 bg-emerald-50/70 p-5">
                  <p className="text-[0.68rem] font-bold uppercase tracking-[0.28em] text-emerald-700">
                    The Business Impact
                  </p>
                  <div className="mt-5 grid gap-4 md:grid-cols-3">
                    {study.impacts.map((impact) => (
                      <div
                        key={impact.label}
                        className="rounded-3xl border border-white/80 bg-white/85 p-4 shadow-[0_14px_30px_rgba(16,185,129,0.08)]"
                      >
                        <p className="text-3xl font-extrabold tracking-tight text-[#0b2a5d] sm:text-4xl">
                          {impact.metric}
                        </p>
                        <p className="mt-2 text-sm font-semibold text-slate-900">
                          {impact.label}
                        </p>
                        <p className="mt-2 text-sm leading-6 text-slate-600">
                          {impact.detail}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 rounded-3xl border border-[#d7e5fb] bg-[#f5f9ff] px-5 py-4">
                  <p className="text-[0.62rem] font-bold uppercase tracking-[0.28em] text-[#3a6fba]">
                    Future Evaluation
                  </p>
                  <p className="mt-2 text-sm leading-7 text-slate-700">
                    {futureTag}
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
