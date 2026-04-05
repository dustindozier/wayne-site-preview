"use client";

import { useState } from "react";
import FadeIn from "./FadeIn";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // UPDATE: Connect to actual form handler (e.g., Formspree, Netlify Forms, or custom API)
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 lg:py-32 bg-cream">
      <div className="mx-auto max-w-3xl px-6">
        <FadeIn>
          <div className="text-center mb-12">
            {/* Section label — bold and 20% larger */}
            <p className="text-accent font-bold text-base uppercase tracking-widest mb-4">
              Contact
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-navy leading-tight mb-6">
              Let&apos;s connect.
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              Whether you&apos;re a pastor looking for encouragement, a church
              exploring multi-site, or a team seeking leadership guidance — Wayne
              would love to hear from you.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          {submitted ? (
            <div className="text-center py-12">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 mb-6">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="text-accent"
                >
                  <path d="M6 14l6 6L22 8" />
                </svg>
              </div>
              <h3 className="font-serif text-2xl font-semibold text-navy mb-2">
                Message sent.
              </h3>
              <p className="text-slate-500">
                Thank you for reaching out. Wayne or his team will be in touch
                soon.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-slate-700 mb-1.5"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full border border-slate-300 bg-white rounded-sm px-4 py-3 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-slate-700 mb-1.5"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full border border-slate-300 bg-white rounded-sm px-4 py-3 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-colors"
                    placeholder="you@example.com"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-slate-700 mb-1.5"
                >
                  Subject
                </label>
                <select
                  id="subject"
                  name="subject"
                  className="w-full border border-slate-300 bg-white rounded-sm px-4 py-3 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-colors"
                >
                  <option>General Inquiry</option>
                  <option>Speaking Request</option>
                  <option>Pastoral Coaching</option>
                  <option>Multi-Site Consultation</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-slate-700 mb-1.5"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="w-full border border-slate-300 bg-white rounded-sm px-4 py-3 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-colors resize-none"
                  placeholder="How can Wayne help?"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full sm:w-auto bg-navy hover:bg-navy-light text-white font-bold px-8 py-3.5 rounded-sm text-sm transition-colors"
                >
                  Send Message
                </button>
              </div>
            </form>
          )}
        </FadeIn>
      </div>
    </section>
  );
}
