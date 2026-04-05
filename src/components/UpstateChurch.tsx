"use client";

import Image from "next/image";
import FadeIn from "./FadeIn";
import { images } from "@/lib/images";

const galleryImages = [
  { src: images.baptism1, alt: "Baptism at Upstate Church" },
  { src: images.community, alt: "Upstate Church community gathering" },
  { src: images.groups, alt: "Small group at Upstate Church" },
  { src: images.campus, alt: "Upstate Church Downtown campus" },
];

export default function UpstateChurch() {
  return (
    <section id="upstate-church" className="py-24 lg:py-32 bg-cream">
      <div className="mx-auto max-w-7xl px-6">
        <FadeIn>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-accent font-bold text-base uppercase tracking-widest mb-6">
              The Local Church
            </p>
            {/* Upstate Church logo — enlarged 35%: base h-24 → ~h-[130px] on lg */}
            <div className="flex justify-center mb-8">
              <Image
                src={images.upstateLogo}
                alt="First Baptist Simpsonville — Upstate Church"
                width={675}
                height={169}
                className="h-20 sm:h-24 lg:h-[130px] w-auto"
              />
            </div>
            <p className="text-slate-600 text-lg leading-relaxed">
              Upstate Church is a multi-generational, multi-site community in the
              Upstate of South Carolina. Under Wayne&apos;s leadership, the church
              has grown into multiple campuses — each one anchored in worship,
              discipleship, and genuine care for its neighbors.
            </p>
          </div>
        </FadeIn>

        {/* Image grid */}
        <FadeIn delay={0.1}>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {galleryImages.map((img, i) => (
              <div
                key={i}
                className="relative aspect-[3/2] rounded-sm overflow-hidden group"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>
            ))}
          </div>
        </FadeIn>

        {/* Stats — bigger and bolder */}
        <FadeIn delay={0.2}>
          <div className="mt-16 grid sm:grid-cols-3 gap-8 text-center">
            <div>
              <p className="font-serif text-5xl lg:text-6xl font-bold text-navy">
                10
              </p>
              <p className="text-slate-500 mt-2 text-lg font-semibold">Locations</p>
            </div>
            <div>
              <p className="font-serif text-5xl lg:text-6xl font-bold text-navy">
                35+
              </p>
              <p className="text-slate-500 mt-2 text-lg font-semibold">Years of Ministry</p>
            </div>
            <div>
              <p className="font-serif text-5xl lg:text-6xl font-bold text-navy">
                6,000+
              </p>
              <p className="text-slate-500 mt-2 text-lg font-semibold">Lives Reached Weekly</p>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.25}>
          <div className="mt-12 text-center">
            <a
              href="https://fbsimpsonville.org"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-accent hover:bg-accent-light text-white font-bold px-7 py-3.5 rounded-sm text-sm transition-colors"
            >
              Visit Upstate Church
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
