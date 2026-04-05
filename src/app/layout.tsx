import type { Metadata } from "next";
import { Inter, Lora } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Wayne Bray — Pastoral Leader, Church Builder, Pastor to Pastors",
  description:
    "Wayne Bray is a seasoned pastoral leader helping pastors, teams, and churches lead with clarity, health, and mission. Lead Pastor of Upstate Church.",
  openGraph: {
    title: "Wayne Bray — Pastoral Leader, Church Builder, Pastor to Pastors",
    description:
      "Helping pastors and churches lead with clarity, health, and mission.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${lora.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
