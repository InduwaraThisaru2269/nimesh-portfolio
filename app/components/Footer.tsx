"use client";

import Link from "next/link";
import { Globe } from "lucide-react";
import { FaLinkedinIn } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="overflow-hidden bg-[#2a4696] text-white">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-12">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <h3 className="text-xl font-extrabold uppercase tracking-[0.03em] text-white">
              Ravindu Nimesh
            </h3>
            <div className="mt-8 flex items-center gap-5 text-[#d7e4ff]">
              <Link
                href="/"
                aria-label="Website"
                className="transition hover:text-white"
              >
                <Globe className="h-5 w-5" />
              </Link>
              <a
                href="https://www.linkedin.com/in/nimesh-uswaththa-74a96a300/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="transition hover:text-white"
              >
                <FaLinkedinIn className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-[1.02rem] font-extrabold uppercase tracking-[0.16em] text-cyan-300">
              Navigation
            </h4>
            <ul className="mt-6 space-y-4 text-[1.02rem] text-[#c8d3f0]">
              <li>
                <Link
                  href="/case-studies"
                  className="transition hover:text-white"
                >
                  Case Studies
                </Link>
              </li>
              <li>
                <a href="/#about" className="transition hover:text-white">
                  About
                </a>
              </li>
              <li>
                <a href="/#process" className="transition hover:text-white">
                  Methodology
                </a>
              </li>
              <li>
                <a href="/#tech-stack" className="transition hover:text-white">
                  Tech Expertise
                </a>
              </li>
              <li>
                <Link href="/contact" className="transition hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/8 bg-[#29428f]">
        <div className="mx-auto max-w-7xl px-6 py-8 sm:px-8 lg:px-12">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#7f95d1]">
            © 2024 Ravindu Nimesh. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
