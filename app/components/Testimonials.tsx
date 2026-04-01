"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const AUTOPLAY_MS = 7000;

const testimonials = [
  {
    quote:
      "Before Ravindu arrived, our Month-End was a 15-day manual marathon. He didn't just implement Business Central; he re-architected our financial logic. We're now closing in 4 days with 100% data integrity. He is the rare consultant who speaks both Accounting and Code fluently.",
    name: "Marcus Thorne",
    title: "CFO",
    company: "NexaLogistics Global",
  },
  {
    quote:
      "We needed a system that worked as fast as our warehouse. Ravindu bridged the gap between our floor operations and our executive reporting. The Power BI dashboards he built have given us a level of visibility we never thought possible. Our inventory accuracy is finally at 99%.",
    name: "Sarah Jenkins",
    title: "Director of Operations",
    company: "BlueGrid Manufacturing",
  },
  {
    quote:
      "The migration was seamless. Ravindu has a surgical approach to ERP deployment. His deep expertise in Azure and Power Platform meant we didn't just get a new ERP, we got a future-proof data ecosystem. He's always three steps ahead of the technical hurdles.",
    name: "David Chen",
    title: "Head of IT",
    company: "Meridian Trade Group",
  },
] as const;

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(0);
  const progressRef = useRef(0);

  useEffect(() => {
    if (isPaused) {
      return;
    }

    let frameId = 0;
    const start = performance.now() - progressRef.current;

    const tick = (timestamp: number) => {
      const elapsed = timestamp - start;

      if (elapsed >= AUTOPLAY_MS) {
        progressRef.current = 0;
        setProgress(0);
        setDirection(1);
        setActiveIndex((current) => (current + 1) % testimonials.length);
        return;
      }

      progressRef.current = elapsed;
      setProgress(elapsed);
      frameId = requestAnimationFrame(tick);
    };

    frameId = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(frameId);
  }, [activeIndex, isPaused]);

  const activeTestimonial = testimonials[activeIndex];

  const goToSlide = (nextIndex: number) => {
    setDirection(nextIndex > activeIndex ? 1 : -1);
    progressRef.current = 0;
    setProgress(0);
    setActiveIndex(nextIndex);
  };

  const goToAdjacent = (step: -1 | 1) => {
    const nextIndex =
      (activeIndex + step + testimonials.length) % testimonials.length;
    setDirection(step);
    progressRef.current = 0;
    setProgress(0);
    setActiveIndex(nextIndex);
  };

  return (
    <section
      className="py-24"
      style={{
        backgroundColor: "#eff4f8",
        backgroundImage:
          "radial-gradient(circle, rgba(148,163,184,0.18) 1px, transparent 1px)",
        backgroundSize: "24px 24px",
      }}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
          className="mx-auto mb-12 max-w-3xl text-center"
        >
          <p className="text-[0.72rem] font-bold uppercase tracking-[0.32em] text-cyan-600">
            Testimonials
          </p>
          <h2 className="mt-4 text-4xl font-extrabold tracking-tight text-[#002D62] md:text-6xl">
            What stakeholders say after the systems start working.
          </h2>
        </motion.div>

        <section
          aria-label="Client testimonials carousel"
          className="relative mx-auto max-w-5xl"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="overflow-hidden rounded-[36px] border border-white/80 bg-white shadow-[0_28px_80px_rgba(148,163,184,0.18)]">
            <div className="h-1.5 w-full bg-slate-100">
              <motion.div
                className="h-full bg-linear-to-r from-cyan-500 via-sky-500 to-[#0b2a5d]"
                animate={{ width: `${(progress / AUTOPLAY_MS) * 100}%` }}
                transition={{ duration: 0.12, ease: "linear" }}
              />
            </div>

            <div className="p-8 sm:p-10 lg:p-12">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={activeIndex}
                  custom={direction}
                  initial={{ opacity: 0, x: direction > 0 ? 70 : -70 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0.4, x: direction > 0 ? -70 : 70 }}
                  transition={{ type: "spring", stiffness: 180, damping: 22 }}
                  className="space-y-8"
                >
                  <div>
                    <Quote
                      className="h-10 w-10 text-cyan-500"
                      strokeWidth={1.6}
                    />
                    <blockquote className="mt-6 max-w-4xl font-serif text-2xl leading-10 text-slate-900 sm:text-[2rem] sm:leading-12">
                      &ldquo;{activeTestimonial.quote}&rdquo;
                    </blockquote>
                  </div>

                  <div className="text-right">
                    <p className="text-base font-semibold text-slate-900">
                      {activeTestimonial.name}
                    </p>
                    <p className="mt-1 text-sm text-slate-600">
                      {activeTestimonial.title}
                    </p>
                    <p className="mt-1 text-sm font-medium text-slate-500">
                      {activeTestimonial.company}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>

              <div className="mt-10 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => goToAdjacent(-1)}
                    className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 text-slate-700 transition hover:border-slate-300 hover:bg-slate-50"
                    aria-label="Previous testimonial"
                  >
                    <ChevronLeft className="h-4 w-4" strokeWidth={1.5} />
                  </button>
                  <button
                    type="button"
                    onClick={() => goToAdjacent(1)}
                    className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 text-slate-700 transition hover:border-slate-300 hover:bg-slate-50"
                    aria-label="Next testimonial"
                  >
                    <ChevronRight className="h-4 w-4" strokeWidth={1.5} />
                  </button>
                </div>

                <div className="flex items-center gap-2">
                  {testimonials.map((testimonial, index) => (
                    <button
                      key={testimonial.name}
                      type="button"
                      onClick={() => goToSlide(index)}
                      aria-label={`Go to testimonial ${index + 1}`}
                      className={`h-2.5 rounded-full transition-all duration-300 ${
                        index === activeIndex
                          ? "w-8 bg-[#0b2a5d]"
                          : "w-2.5 bg-slate-300 hover:bg-slate-400"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}
