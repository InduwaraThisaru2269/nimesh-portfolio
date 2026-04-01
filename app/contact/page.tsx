"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

type FormState = {
  name: string;
  email: string;
  message: string;
};

const initialState: FormState = {
  name: "",
  email: "",
  message: "",
};

export default function ContactPage() {
  const [form, setForm] = useState<FormState>(initialState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<string>("");
  const [isError, setIsError] = useState(false);

  async function onSubmit(event: React.SyntheticEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setStatus("");
    setIsError(false);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = (await response.json()) as { error?: string };

      if (!response.ok) {
        throw new Error(data.error ?? "Unable to send your message.");
      }

      setForm(initialState);
      setStatus("Your message has been sent successfully.");
    } catch (error) {
      setIsError(true);
      setStatus(
        error instanceof Error
          ? error.message
          : "Unable to send your message. Please try again.",
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <main
      className="min-h-screen py-10 "
      style={{
        backgroundColor: "#ffffff",
        backgroundImage:
          "radial-gradient(circle, #d1d5db 1px, transparent 1px)",
        backgroundSize: "24px 24px",
      }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex items-center justify-between">
          <Link
            href="/"
            className="rounded-full border border-slate-300 bg-white px-5 py-2 text-sm font-semibold text-slate-700 hover:border-slate-400"
          >
            Back to Home
          </Link>
          
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.25 }}
          className="max-w-3xl"
        >
          <h1 className="text-4xl font-extrabold tracking-tight text-[#002D62] md:text-6xl">
            Contact & Discovery
          </h1>
          <p className="mt-4 text-base leading-8 text-slate-600 md:text-lg">
            Book a strategy session or send a direct message with
            your project context.
          </p>
        </motion.div>

        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-12">
          <motion.section
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            viewport={{ once: true, amount: 0.2 }}
            className="rounded-[30px] border border-slate-200 bg-white p-6 shadow-[0_16px_40px_rgba(148,163,184,0.16)] lg:col-span-7"
          >
            <h2 className="text-2xl font-semibold text-slate-900">
              Send a Message
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              Include your name, email, and a brief message. I typically respond
              within one business day.
            </p>

            <form onSubmit={onSubmit} className="mt-6 space-y-4">
              <div>
                <label
                  className="mb-2 block text-sm font-medium text-slate-700"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  id="name"
                  required
                  value={form.name}
                  onChange={(e) =>
                    setForm((s) => ({ ...s, name: e.target.value }))
                  }
                  className="w-full rounded-2xl border border-slate-300 px-4 py-3 text-slate-900 outline-none ring-0 focus:border-cyan-500"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label
                  className="mb-2 block text-sm font-medium text-slate-700"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) =>
                    setForm((s) => ({ ...s, email: e.target.value }))
                  }
                  className="w-full rounded-2xl border border-slate-300 px-4 py-3 text-slate-900 outline-none ring-0 focus:border-cyan-500"
                  placeholder="you@company.com"
                />
              </div>

              <div>
                <label
                  className="mb-2 block text-sm font-medium text-slate-700"
                  htmlFor="message"
                >
                  Brief Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) =>
                    setForm((s) => ({ ...s, message: e.target.value }))
                  }
                  className="w-full rounded-2xl border border-slate-300 px-4 py-3 text-slate-900 outline-none ring-0 focus:border-cyan-500"
                  placeholder="Tell me what you are trying to solve."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center justify-center rounded-full bg-[#002D62] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#0f3f82] disabled:cursor-not-allowed disabled:opacity-70"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>

              {status ? (
                <p
                  className={`text-sm ${isError ? "text-red-600" : "text-green-700"}`}
                >
                  {status}
                </p>
              ) : null}
            </form>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.08 }}
            viewport={{ once: true, amount: 0.2 }}
            className="space-y-6 lg:col-span-5"
          >
            <div className="rounded-[30px] border border-slate-200 bg-white p-6 shadow-[0_16px_40px_rgba(148,163,184,0.16)]">
              <h3 className="text-xl font-semibold text-slate-900">
                Schedule a Call
              </h3>
              <div className="mt-4 overflow-hidden rounded-2xl border border-slate-200">
                <iframe
                  title="Calendly Scheduling"
                  src="https://calendly.com/induwarathisaru2002/30min?embed_domain=localhost&embed_type=Inline"
                  width="100%"
                  height="430"
                  style={{ border: 0 }}
                  className="w-full"
                ></iframe>
              </div>
            </div>

            <div className="rounded-[30px] border border-slate-200 bg-white p-6 shadow-[0_16px_40px_rgba(148,163,184,0.16)]">
              <h3 className="text-xl font-semibold text-slate-900">
                Direct Contact
              </h3>
              <ul className="mt-4 space-y-3 text-slate-700">
                <li>
                  Email:{" "}
                  <a
                    className="text-[#0b2a5d] underline"
                    href="mailto:ravinduuswaththa@gmail.com"
                  >
                    ravinduuswaththa@gmail.com
                  </a>
                </li>
                <li>
                  LinkedIn:{" "}
                  <a
                    className="text-[#0b2a5d] underline"
                    href="https://www.linkedin.com/in/nimesh-uswaththa-74a96a300/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    nimesh-uswaththa-74a96a300
                  </a>
                </li>
                <li>
                  Mobile:{" "}
                  <a
                    className="text-[#0b2a5d] underline"
                    href="tel:+94700000000"
                  >
                    +94 70 000 0000
                  </a>
                </li>
              </ul>
            </div>
          </motion.section>
        </div>
      </div>
    </main>
  );
}
