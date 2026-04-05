"use client";

import Image from "next/image";
import FadeIn from "./FadeIn";
import SocialIcons from "./SocialIcons";
import { images } from "@/lib/images";

export default function About() {
  return (
    <section id="about" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image — Wayne greeting people at Worship Center */}
          <FadeIn>
            <div className="relative aspect-[4/5] rounded-sm overflow-hidden">
              <Image
                src={images.about}
                alt="Wayne Bray greeting congregation at Upstate Church"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </FadeIn>

          {/* Content */}
          <FadeIn delay={0.15}>
            {/* Section label — bold and 20% larger */}
            <p className="text-accent font-bold text-base uppercase tracking-widest mb-4">
              About Wayne
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-navy leading-tight mb-6">
              A pastor&apos;s pastor, grounded in the local church.
            </h2>

            <div className="space-y-5 text-slate-600 leading-relaxed text-base lg:text-lg">
              <p>
                Wayne Bray has spent decades in pastoral ministry — not building a
                platform, but building the local church. As Lead Pastor of Upstate
                Church in Simpsonville, South Carolina, he leads a thriving,
                multi-site congregation rooted in the Gospel and reaching its
                community.
              </p>
              <p>
                But Wayne&apos;s impact extends well beyond his own church walls.
                He&apos;s deeply committed to investing in pastors — coaching,
                mentoring, and equipping church leaders to lead with health,
                clarity, and endurance. He understands the unique weight that
                pastors carry, and he shows up for them.
              </p>
              <p>
                His leadership philosophy is simple: healthy leaders build healthy
                churches, and healthy churches change communities. Whether
                it&apos;s through multi-site strategy, team development, or honest
                conversations about the realities of ministry, Wayne brings wisdom
                born from experience and a heart shaped by faithfulness.
              </p>
            </div>

            {/* Social icons with label */}
            <SocialIcons variant="dark" className="mt-6" showLabel />

            <div className="mt-8 flex items-center gap-6">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-navy hover:bg-navy-light text-white font-bold px-6 py-3 rounded-sm text-sm transition-colors"
              >
                Get in Touch
              </a>
              <a
                href="#podcast"
                className="text-accent font-bold text-sm hover:text-accent-dark transition-colors"
              >
                Listen to the Podcast →
              </a>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
