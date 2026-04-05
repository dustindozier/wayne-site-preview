import Image from "next/image";
import FadeIn from "./FadeIn";
import SocialIcons from "./SocialIcons";
import { images } from "@/lib/images";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Upstate Church", href: "#upstate-church" },
  { label: "Book", href: "#book" },
  { label: "Podcast", href: "#podcast" },
  { label: "Sermons", href: "#sermons" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="bg-navy text-slate-400 py-16">
      <div className="mx-auto max-w-7xl px-6">
        <FadeIn>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
            {/* Brand */}
            <div className="lg:col-span-1">
              <Image
                src={images.logoWhite}
                alt="Wayne Bray"
                width={240}
                height={75}
                className="h-14 w-auto mb-4"
              />
              <p className="text-sm leading-relaxed mb-4">
                Pastor. Leader. Church builder.
                <br />
                Investing in pastors and churches for the long haul.
              </p>
              <SocialIcons variant="light" showLabel />
            </div>

            {/* Navigation */}
            <div>
              <p className="text-xs uppercase tracking-widest text-slate-500 mb-4 font-bold">
                Navigate
              </p>
              <ul className="space-y-2">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-sm hover:text-white transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* External */}
            <div>
              <p className="text-xs uppercase tracking-widest text-slate-500 mb-4 font-bold">
                Ministry
              </p>
              <ul className="space-y-2">
                <li>
                  <a
                    href="https://fbsimpsonville.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm hover:text-white transition-colors"
                  >
                    Upstate Church
                  </a>
                </li>
                <li>
                  <a
                    href="https://youtube.com/playlist?list=PL2Q6EmVCxuKRqMT3JWQ2gM39bLUdBWcGr&si=DfLO1XotZarsnlxP"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm hover:text-white transition-colors"
                  >
                    Charge On Podcast
                  </a>
                </li>
                <li>
                  <a
                    href="https://a.co/d/098hFbpv"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm hover:text-white transition-colors"
                  >
                    Inside Out — The Book
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <p className="text-xs uppercase tracking-widest text-slate-500 mb-4 font-bold">
                Connect
              </p>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#contact"
                    className="text-sm hover:text-white transition-colors"
                  >
                    Contact Wayne
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-700/50 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-slate-500">
              &copy; {new Date().getFullYear()} Wayne Bray. All rights reserved.
            </p>
            <p className="text-xs text-slate-600">
              Lead Pastor,{" "}
              <a
                href="https://fbsimpsonville.org"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-slate-400 transition-colors"
              >
                Upstate Church
              </a>
            </p>
          </div>
        </FadeIn>
      </div>
    </footer>
  );
}
