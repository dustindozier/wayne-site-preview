"use client";

import FadeIn from "./FadeIn";

const SERMONS_URL =
  "https://fbsimpsonville.org/watch/downtown-messages/?sapurl=Lys2YzYzL2xiL2xpLys1YjIzOTYwP2VtYmVkPXRydWUmcmVjZW50Um91dGU9YXBwLndlYi1hcHAubGlicmFyeS5saXN0JnJlY2VudFJvdXRlU2x1Zz0lMkI1YjIzOTYw";

const EMBED_URL =
  "https://subsplash.com/+6c63/lb/li/+5b23960?embed=true&recentRoute=app.web-app.library.list&recentRouteSlug=%2B5b23960";

export default function Sermons() {
  return (
    <section id="sermons" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <FadeIn>
          <div className="text-center max-w-3xl mx-auto mb-12">
            {/* Section label — bold and 20% larger */}
            <p className="text-accent font-bold text-base uppercase tracking-widest mb-4">
              Sermons
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-navy leading-tight mb-6">
              Recent messages from Wayne.
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              Wayne preaches regularly at Upstate Church — grounded in Scripture,
              practical for life, and delivered with a pastor&apos;s heart.
            </p>
          </div>
        </FadeIn>

        {/* Live sermon embed from Subsplash */}
        <FadeIn delay={0.1}>
          <div className="relative w-full rounded-sm overflow-hidden bg-slate-100 border border-slate-200">
            <iframe
              src={EMBED_URL}
              title="Recent Sermons from Wayne Bray — Upstate Church"
              className="w-full border-0"
              style={{ height: "600px" }}
              loading="lazy"
              allow="autoplay; encrypted-media"
            />
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="mt-10 text-center">
            <a
              href={SERMONS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-slate-300 hover:border-slate-500 text-slate-700 font-bold px-7 py-3.5 rounded-sm text-sm transition-colors"
            >
              View All Sermons
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
    </section>
  );
}
