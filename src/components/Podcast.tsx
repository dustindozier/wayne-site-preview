"use client";

import FadeIn from "./FadeIn";

const PLAYLIST_ID = "PL2Q6EmVCxuKRqMT3JWQ2gM39bLUdBWcGr";

const platforms = [
  {
    name: "YouTube",
    href: "https://youtube.com/playlist?list=PL2Q6EmVCxuKRqMT3JWQ2gM39bLUdBWcGr&si=DfLO1XotZarsnlxP",
    icon: "M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814z",
  },
  {
    name: "Spotify",
    href: "https://open.spotify.com/show/31zjd5MUOtdE3rb2xlAI43?si=f9494e4c05e14f78",
    icon: "M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z",
  },
  {
    name: "Apple Podcasts",
    href: "https://podcasts.apple.com/us/podcast/charge-on-with-pastor-wayne-bray/id1837470625",
    icon: "M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-.007 3.652a8.348 8.348 0 018.355 8.348c0 2.6-1.2 4.9-3.1 6.4-.2-.6-.5-1.5-.8-2.4 1.1-1.1 1.8-2.5 1.8-4.1 0-3.4-2.8-6.1-6.2-6.1s-6.2 2.8-6.2 6.2c0 1.6.6 3 1.7 4.1-.3.8-.5 1.7-.8 2.4-1.8-1.5-3-3.8-3-6.4a8.348 8.348 0 018.248-8.45zM12 8.5c-1.9 0-3.5 1.6-3.5 3.5 0 1.3.7 2.4 1.7 3-.3 1.3-.8 3.1-1 3.9-.2.6.1 1.3.7 1.5h4.2c.6-.2.9-.9.7-1.5-.2-.8-.7-2.6-1-3.9 1-.6 1.7-1.7 1.7-3 0-1.9-1.6-3.5-3.5-3.5z",
  },
];

export default function Podcast() {
  return (
    <section id="podcast" className="py-24 lg:py-32 bg-navy text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Intro */}
          <div className="lg:col-span-2">
            <FadeIn>
              {/* Section label — bold and 20% larger */}
              <p className="text-accent-light font-bold text-base uppercase tracking-widest mb-4">
                Podcast
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight mb-6">
                Charge On
              </h2>
              <p className="text-slate-400 text-lg leading-relaxed mb-8">
                Honest conversations about pastoral leadership, church health, and
                the courage it takes to keep going. Wayne sits down with pastors
                and leaders who are in the trenches — sharing what they&apos;re
                learning, what&apos;s working, and what keeps them faithful.
              </p>

              {/* Platform buttons with icons */}
              <div className="flex flex-wrap gap-3">
                {platforms.map((platform) => (
                  <a
                    key={platform.name}
                    href={platform.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 border border-slate-600 hover:border-slate-400 text-slate-300 hover:text-white px-4 py-2.5 rounded-sm text-sm font-medium transition-colors"
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d={platform.icon} />
                    </svg>
                    {platform.name}
                  </a>
                ))}
              </div>
            </FadeIn>
          </div>

          {/* Live YouTube Playlist Embed */}
          <div className="lg:col-span-3">
            <FadeIn delay={0.1}>
              <div className="space-y-4">
                <div className="relative aspect-video rounded-sm overflow-hidden bg-navy-dark">
                  <iframe
                    src={`https://www.youtube.com/embed/videoseries?list=${PLAYLIST_ID}`}
                    title="Charge On Podcast — Latest Episodes"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute inset-0 w-full h-full"
                    loading="lazy"
                  />
                </div>
                <p className="text-slate-500 text-sm text-center">
                  Latest episodes from the Charge On Podcast · Updated automatically
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
