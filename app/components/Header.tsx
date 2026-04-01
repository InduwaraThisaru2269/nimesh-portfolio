"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Header() {
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.45 }}
      className="fixed top-0 z-50 w-full bg-white shadow-[0_1px_10px_rgba(11,22,49,0.08)]"
    >
      <div className="mx-auto max-w-292.5 px-4 py-3 md:px-8">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="text-[20px] font-black tracking-[3px] text-[#0b2a5d]"
          >
            Ravindu Nimesh
          </Link>

          <nav className="hidden items-center gap-8 text-sm font-medium text-[#2f4f85] lg:flex">
            <a href="/#tech-stack" className="hover:text-[#0b2a5d]">
              Tech Expertise
            </a>
            <a href="/#process" className="hover:text-[#0b2a5d]">
              Road Map
            </a>
            <Link href="/case-studies" className="hover:text-[#0b2a5d]">
              Case Studies
            </Link>
            <a href="#about" className="hover:text-[#0b2a5d]">
              About
            </a>
          </nav>

          <Link
            href="/contact"
            className="hidden items-center rounded-full bg-[#0b2a5d] px-6 py-2 text-sm font-semibold text-white shadow-sm shadow-[#152a5f]/30 transition hover:bg-[#0f326d] lg:inline-flex"
          >
            Book a Strategy Call
          </Link>

          <button className="inline-flex items-center justify-center rounded-full bg-[#0b2a5d] p-2 text-white transition hover:bg-[#0f326d] lg:hidden">
            Menu
          </button>
        </div>
      </div>
    </motion.header>
  );
}
