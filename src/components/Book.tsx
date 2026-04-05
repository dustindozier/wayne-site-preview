"use client";

import Image from "next/image";
import FadeIn from "./FadeIn";
import { images } from "@/lib/images";

export default function Book() {
  return (
    <section id="book" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Book cover */}
          <FadeIn>
            <div className="flex justify-center">
              <div className="relative w-72 sm:w-80">
                <div className="relative aspect-[2/3] rounded-sm overflow-hidden shadow-2xl">
                  <Image
                    src={images.bookCover}
                    alt="Inside Out: Christian Hope in a World of Contradictions by Wayne Bray"
                    fill
                    className="object-cover"
                    sizes="320px"
                  />
                </div>
                <div className="absolute top-2 -left-1 bottom-2 w-2 bg-slate-800 rounded-l-sm shadow-lg" />
              </div>
            </div>
          </FadeIn>

          {/* Content */}
          <FadeIn delay={0.15}>
            {/* Section label — bold and 20% larger */}
            <p className="text-accent font-bold text-base uppercase tracking-widest mb-4">
              The Book
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-navy leading-tight mb-6">
              Inside Out
            </h2>
            <p className="text-lg text-slate-500 font-semibold mb-6">
              Christian Hope in a World of Contradictions
            </p>

            <div className="space-y-5 text-slate-600 leading-relaxed text-base lg:text-lg">
              <p>
                The world we live in is full of contradictions — and so is the
                church. In <em>Inside Out</em>, Wayne Bray confronts that tension
                head-on, offering a pastoral vision for what it looks like when
                the church stops conforming to the world and starts being
                transformed from the inside out.
              </p>
              <p>
                This book is for pastors, leaders, and every believer who wants to
                live with genuine Christian hope — not despite the contradictions
                around them, but right in the middle of them.
              </p>
            </div>

            <div className="mt-8 grid sm:grid-cols-2 gap-3">
              {[
                "Gospel-centered hope",
                "Cultural engagement",
                "Church transformation",
                "Authentic faith",
              ].map((theme) => (
                <div
                  key={theme}
                  className="flex items-center gap-3 text-slate-700"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    className="text-accent flex-shrink-0"
                  >
                    <path
                      d="M3 8l3.5 3.5L13 5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                  </svg>
                  <span className="text-sm">{theme}</span>
                </div>
              ))}
            </div>

            <blockquote className="mt-8 border-l-2 border-accent pl-5 italic text-slate-500">
              &ldquo;It&apos;s the must read book for Churches and Christians with
              passion to make a REAL difference in their culture.&rdquo;
              <span className="block mt-2 not-italic text-sm text-slate-400">
                — Bill Purvis, Lead Pastor, Cascade Hills Church
              </span>
            </blockquote>

            <div className="mt-8">
              <a
                href="https://a.co/d/098hFbpv"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-navy hover:bg-navy-light text-white font-bold px-7 py-3.5 rounded-sm text-sm transition-colors"
              >
                Get the Book
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path d="M1 13L13 1M13 1H5M13 1v8" />
                </svg>
              </a>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
