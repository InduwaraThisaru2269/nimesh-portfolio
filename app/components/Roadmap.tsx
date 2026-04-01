"use client";

import { motion } from "framer-motion";

const phases = [
  {
    id: "01",
    title: "Diagnostic & Gap Analysis",
    eyebrow: "Phase 01",
    objective:
      "Deep-dive into current-state operational logic and define the FRD with precision.",
    activities: [
      "Stakeholder interviews across finance, operations, procurement, and warehousing.",
      "Pain-point analysis for legacy workflows spanning NAV, Sage, and spreadsheet-heavy reporting.",
      "Functional Requirement Document definition grounded in real transaction paths.",
    ],
    edge: "Reviewing data health, integration debt, and Azure readiness before any design commitments are made.",
    calloutLabel: "Client Win",
    callout:
      "A rigorous diagnostic prevents expensive rework later by exposing process bottlenecks before solution design starts.",
  },
  {
    id: "02",
    title: "Solution Architecture & Design",
    eyebrow: "Phase 02",
    objective:
      "Map the target-state model to Business Central standard capability versus intentional extension design.",
    activities: [
      "Structuring the chart of accounts, procurement controls, and sales-order logic.",
      "Defining where configuration ends and custom AL engineering begins.",
      "Designing reporting architecture at the same time as operational flows.",
    ],
    edge: "Architecting the Power BI semantic layer and Microsoft Fabric integration points so intelligence is embedded from day one.",
    calloutLabel: "Pro-Tip",
    callout:
      "If reporting is treated as a post-go-live add-on, executives inherit blind spots. I design the data model before the first dashboard request arrives.",
  },
  {
    id: "03",
    title: "Engineering & Migration",
    eyebrow: "Phase 03",
    objective:
      "Configure the platform, build the missing logic, and transition historical data without polluting the new environment.",
    activities: [
      "Sandbox setup, solution configuration, and AL development for business-specific rules.",
      "ETL planning and execution across master data, ledger history, and operational records.",
      "Automation setup for external APIs, 3PL connectivity, and repetitive cross-team workflows.",
    ],
    edge: "Deploying Power Automate and Azure-based integrations to extend Business Central beyond the core ledger.",
    calloutLabel: "Pro-Tip",
    callout:
      "I prioritize data cleansing before migration so the new ERP does not inherit the old system’s errors, duplicates, and reporting noise.",
  },
  {
    id: "04",
    title: "Validation & UAT",
    eyebrow: "Phase 04",
    objective:
      "Pressure-test the solution with real users, real scenarios, and role-based security before production exposure.",
    activities: [
      "Guiding departmental leads through end-to-end scenario testing and exception handling.",
      "Refining permissions, approval flows, and operational controls.",
      "Translating UAT feedback into practical adjustments instead of cosmetic noise.",
    ],
    edge: "Stress-testing Power BI refresh behaviour and validating Power Apps performance in real field and warehouse conditions.",
    calloutLabel: "Client Win",
    callout:
      "The cleanest UAT cycles happen when finance, ops, and logistics validate one connected transaction chain instead of testing in silos.",
  },
  {
    id: "05",
    title: "Deployment & Continuous Evolution",
    eyebrow: "Phase 05",
    objective:
      "Launch with control, stabilize quickly, and turn the implementation into a scalable operating model.",
    activities: [
      "Go-Live war-room support, hypercare triage, and user enablement.",
      "Post-implementation audit and executive KPI alignment.",
      "Strategic roadmap planning for future SAP, Oracle, or IFS expansion.",
    ],
    edge: "Delivering the executive intelligence dashboard while shaping the next enterprise phase, from global rollout to Oracle Cloud or SAP S/4HANA adoption.",
    calloutLabel: "Client Win",
    callout:
      "Go-live is not the finish line. The real gain comes from turning the first release into a disciplined platform for growth.",
  },
] as const;

export default function Roadmap() {
  return (
    <section
      id="process"
      className="relative overflow-hidden py-24"
      style={{
        backgroundColor: "#ffffff",
        backgroundImage:
          "radial-gradient(circle, #d1d5db 1px, transparent 1px)",
        backgroundSize: "24px 24px",
      }}
    >
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.25 }}
          className="max-w-3xl"
        >
          <p className="text-[0.72rem] font-bold uppercase tracking-[0.32em] text-cyan-600">
            Road Map
          </p>
          <h2 className="mt-4 text-4xl font-extrabold tracking-tight text-[#002D62] md:text-6xl">
            From logic to launch
          </h2>
          <p className="mt-5 text-base leading-8 text-slate-600 md:text-lg">
            A techno-functional delivery model built for ERP transformation,
            data intelligence, and controlled scale. Each phase moves from
            business logic into production with a clear technical checkpoint.
          </p>
        </motion.div>

        <div className="relative mt-16">
          <div className="absolute left-5 top-3 bottom-3 w-px bg-slate-200 sm:left-7 lg:left-9" />
          <motion.div
            initial={{ scaleY: 0, opacity: 0.35 }}
            whileInView={{ scaleY: 1, opacity: 1 }}
            transition={{ duration: 1.1, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.15 }}
            className="absolute left-5 top-3 bottom-3 w-px origin-top bg-linear-to-b from-cyan-400 via-sky-500 to-[#002D62] sm:left-7 lg:left-9"
          />

          <div className="space-y-8 lg:space-y-10">
            {phases.map((phase, index) => (
              <motion.article
                key={phase.id}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: index * 0.08 }}
                viewport={{ once: true, amount: 0.2 }}
                className="relative grid grid-cols-[2.75rem_minmax(0,1fr)] gap-5 sm:grid-cols-[4rem_minmax(0,1fr)] sm:gap-6 lg:grid-cols-[5rem_minmax(0,1fr)] lg:gap-8"
              >
                <div className="relative z-10 flex flex-col items-center pt-1">
                  <motion.div
                    whileHover={{ scale: 1.06 }}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-cyan-200 bg-white text-sm font-bold tracking-[0.22em] text-[#002D62] shadow-[0_10px_24px_rgba(2,132,199,0.16)] sm:h-14 sm:w-14 sm:text-base"
                  >
                    {phase.id}
                  </motion.div>
                  <div className="mt-3 hidden text-center text-[0.62rem] font-bold uppercase tracking-[0.24em] text-slate-400 lg:block">
                    {phase.eyebrow}
                  </div>
                </div>

                <motion.div
                  whileHover={{ y: -4 }}
                  className="relative overflow-visible rounded-[30px] border border-slate-200/80 bg-white/95 p-6 shadow-[0_18px_50px_rgba(148,163,184,0.16)] transition-all duration-300 sm:p-8"
                >
                  <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
                    <div className="max-w-3xl">
                      <p className="text-[0.68rem] font-bold uppercase tracking-[0.3em] text-cyan-600">
                        {phase.eyebrow}
                      </p>
                      <h3 className="mt-3 text-2xl font-semibold tracking-tight text-slate-900 sm:text-[2rem]">
                        {phase.title}
                      </h3>
                      <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
                        <span className="font-semibold text-slate-900">
                          Objective:
                        </span>{" "}
                        {phase.objective}
                      </p>

                      <div className="mt-6 grid gap-4 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,0.95fr)] lg:gap-6">
                        <div className="rounded-3xl border border-slate-200 bg-slate-50/90 p-5">
                          <p className="text-[0.68rem] font-bold uppercase tracking-[0.28em] text-slate-500">
                            Key Activities
                          </p>
                          <ul className="mt-4 space-y-3">
                            {phase.activities.map((activity) => (
                              <li
                                key={activity}
                                className="flex items-start gap-3 text-sm leading-7 text-slate-600"
                              >
                                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-cyan-500" />
                                <span>{activity}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="rounded-3xl border border-cyan-100 bg-cyan-50/70 p-5">
                          <p className="text-[0.68rem] font-bold uppercase tracking-[0.28em] text-cyan-700">
                            Techno-Functional Edge
                          </p>
                          <p className="mt-4 text-sm leading-7 text-slate-700">
                            {phase.edge}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="max-w-sm shrink-0 lg:pt-1">
                      <div className="relative rounded-[26px] border border-[#bfdcff] bg-[#f2fbff] px-5 py-4 shadow-[0_16px_38px_rgba(34,211,238,0.16)] lg:rotate-[1.5deg]">
                        <div className="absolute -left-2 top-6 hidden h-4 w-4 rotate-45 border-l border-t border-[#bfdcff] bg-[#f2fbff] lg:block" />
                        <p className="text-[0.62rem] font-bold uppercase tracking-[0.3em] text-[#0284c7]">
                          {phase.calloutLabel}
                        </p>
                        <p className="mt-3 text-sm italic leading-7 text-slate-700">
                          {phase.callout}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.article>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true, amount: 0.3 }}
          className="mt-16 rounded-[30px] border border-slate-200 bg-white/90 px-6 py-8 shadow-[0_18px_50px_rgba(148,163,184,0.14)] sm:px-8"
        >
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-[0.68rem] font-bold uppercase tracking-[0.28em] text-slate-500">
                Ready to start?
              </p>
              <h3 className="mt-3 text-2xl font-semibold tracking-tight text-slate-900">
                Start with the diagnostic. Everything else depends on getting
                phase one right.
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
                The first engagement is built to clarify process logic,
                reporting gaps, and technical readiness before budget is spent
                in the wrong place.
              </p>
            </div>

            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-full border border-[#002D62] px-7 py-4 text-sm font-semibold text-[#002D62] transition-colors duration-200 hover:bg-[#002D62] hover:text-white"
            >
              Start Phase 01: Request a Diagnostic
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
