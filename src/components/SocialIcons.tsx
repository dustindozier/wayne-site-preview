"use client";

import { socialLinks } from "@/lib/social";

export default function SocialIcons({
  variant = "light",
  className = "",
  showLabel = false,
}: {
  variant?: "light" | "dark";
  className?: string;
  showLabel?: boolean;
}) {
  const base =
    variant === "light"
      ? "text-white/70 hover:text-white"
      : "text-slate-500 hover:text-navy";

  return (
    <div className={className}>
      {showLabel && (
        <p
          className={`text-sm font-medium mb-3 tracking-wide ${
            variant === "light" ? "text-white/60" : "text-slate-400"
          }`}
        >
          Follow Pastor Wayne Bray
        </p>
      )}
      <div className="flex items-center gap-4">
        {socialLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.name}
            className={`transition-colors ${base}`}
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d={link.icon} />
            </svg>
          </a>
        ))}
      </div>
    </div>
  );
}
