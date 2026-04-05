"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { images } from "@/lib/images";
import SocialIcons from "./SocialIcons";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image — Wayne preaching */}
      <div className="absolute inset-0">
        <Image
          src={images.hero}
          alt="Wayne Bray preaching at Upstate Church"
          fill
          className="object-cover object-[75%_20%] sm:object-[center_top]"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/80 via-navy/60 to-navy/70 sm:bg-gradient-to-r sm:from-navy/85 sm:via-navy/70 sm:to-navy/50" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl w-full px-6 py-32 lg:py-40">
        <div className="max-w-3xl">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-accent-light font-bold text-sm uppercase tracking-widest mb-6"
          >
            Pastor · Leader · Church Builder
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-semibold text-white leading-[1.1] mb-6"
          >
            Helping pastors and churches lead with{" "}
            <span className="text-accent-light">clarity, health, and mission.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="text-lg sm:text-xl text-slate-300 max-w-2xl mb-10 leading-relaxed"
          >
            Wayne Bray serves as Lead Pastor of Upstate Church, equipping leaders,
            investing in pastors, and helping healthy multi-site ministry flourish.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap gap-4 mb-10"
          >
            <a
              href="#upstate-church"
              className="inline-flex items-center gap-2 bg-accent hover:bg-accent-light text-white font-bold px-7 py-3.5 rounded-sm text-sm transition-colors"
            >
              Explore Upstate Church
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M6 3l5 5-5 5" />
              </svg>
            </a>
            <a
              href="#podcast"
              className="inline-flex items-center gap-2 border border-white/30 hover:border-white/60 text-white font-bold px-7 py-3.5 rounded-sm text-sm transition-colors"
            >
              Listen to Charge On
            </a>
          </motion.div>

          {/* Social icons with label */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.65 }}
          >
            <SocialIcons variant="light" showLabel />
          </motion.div>
        </div>
      </div>

      {/* White signature watermark — bottom right of hero */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-14 sm:bottom-12 right-1/2 translate-x-1/2 sm:translate-x-0 sm:right-8 lg:right-16 pointer-events-none"
      >
        <Image
          src={images.logoWhite}
          alt=""
          width={400}
          height={125}
          className="h-[65px] sm:h-[100px] lg:h-[130px] w-auto"
          aria-hidden="true"
        />
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" opacity="0.4">
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}
